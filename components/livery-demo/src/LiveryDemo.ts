import '@exmg/livery';
import { html, LitElement } from 'lit-element';
import { liveryDemoStyle } from './liveryDemoStyle';

export class LiveryDemo extends LitElement {
  static defaultCustomer = '5ddb986ee4b0937e6a4507e9';

  static defaultLogLevel = 'info';

  static styles = liveryDemoStyle;

  static getConfig = (customerId: string, envSuffix: string) =>
    `https://cdn.playtotv.com/video-encoder${envSuffix}/remoteconfigs/${customerId}.json`;

  static getSource = (customerId: string) =>
    `https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/${customerId}-TESTING/out.mpd`;

  static parseCustomer(customer: string) {
    const [customerId, envSuffix = ''] = customer.split('-');
    return { customerId, envSuffix };
  }

  config: string;

  customer: string;

  customLatency: string;

  customSource: string;

  logLevel: string;

  source: string;

  constructor() {
    super();

    const urlParams = new URLSearchParams(window.location.search);

    this.customer = urlParams.get('customer') || LiveryDemo.defaultCustomer;
    this.customSource = urlParams.get('source') || '';
    this.customLatency = urlParams.get('latency') || '';
    this.logLevel = urlParams.get('log') || LiveryDemo.defaultLogLevel;

    const { customerId, envSuffix } = LiveryDemo.parseCustomer(this.customer);
    this.config = LiveryDemo.getConfig(customerId, envSuffix);
    this.source = this.customSource || LiveryDemo.getSource(customerId);
  }

  $<T extends Element>(selector: string) {
    const element = this.renderRoot.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Could not find element with selector: ${selector}`);
    }
    return element;
  }

  firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(changedProperties);

    this.setSelected('#customer-select', this.customer);
    this.setSelected('#log-select', this.logLevel);
  }

  render() {
    return html`
      <div class="panel">
        <form id="form" @submit="${(event: Event) => this.onFormSubmit(event)}">
          <div class="input">
            <label for="customer-select">Customer:</label>
            <select
              id="customer-select"
              @change="${(event: Event) => this.onCustomerChange(event)}"
            >
              <optgroup label="ExMG">
                <option value="5c8b790e8f08e4ad1d1dc339-staging"
                  >Angry Bytes</option
                >
                <option value="5c52edb53e930320967a5d55-dev">Ex Machina</option>
                <option value="5ddb986ee4b0937e6a4507e9">Livery Demo</option>
                <option value="5d931e67e4b0748e5a09b99f">Nerve</option>
              </optgroup>
            </select>
          </div>

          <div class="input source">
            <label for="source-input">Source:</label>
            <input
              id="source-input"
              type="url"
              list="sources"
              .value="${this.customSource || this.source}"
            />
            <datalist id="sources">
              <option
                value="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd"
                >Akamai LLS
              </option>

              <!-- Source: https://reference.dashif.org/dash.js/nightly/samples/dash-if-reference-player/index.html -->
              <option
                value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd"
              >
                DASH-IF LLS</option
              >
              <option
                value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd"
                >DASH-IF LLS ABR</option
              >
              <option
                value="https://vm2.dashif.org/livesim/testpic_2s/Manifest.mpd"
                >DASH-IF 2s</option
              >
            </datalist>
          </div>

          <div class="input latency">
            <label for="latency-input">Latency:</label>
            <input
              id="latency-input"
              type="number"
              min="0"
              step="0.1"
              .value="${this.customLatency}"
            />s
          </div>

          <div class="input">
            <label for="log-select">Log Level:</label>
            <select id="log-select">
              <option>error</option>
              <option>warn</option>
              <option>info</option>
              <option>debug</option>
              <option>spam</option>
            </select>
          </div>

          <div class="input submit">
            <input type="submit" value="Load" />
          </div>
        </form>
      </div>

      <div class="panel">
        <!-- TODO: Add support for overriding latency from remote config to this.customLatency -->
        <livery-sdk
          config="${this.config}"
          log-level="${this.logLevel}"
        ></livery-sdk>
        <livery-player
          autoplay-muted
          persist-muted
          controls="mute fullscreen quality"
        >
          <source src="${this.source}" />
        </livery-player>
      </div>

      <table class="panel">
        <tr>
          <th>Engine:</th>
          <td id="engine"></td>
          <th>Playback:</th>
          <td>
            <span id="playback-state"></span>
            <span id="playback-rate"></span>
          </td>
        </tr>
        <tr>
          <th>Buffer:</th>
          <td id="buffer"></td>
          <th>Quality:</th>
          <td id="quality"></td>
        </tr>
        <tr>
          <th>Latency:</th>
          <td id="latency"></td>
        </tr>
      </table>

      <div class="panel">
        <!-- TODO: Add player reference property to LiveryBufferGraph instead of selector attribute -->
        <!-- We can not use selector based approach when we're using shadow DOM like we do here -->
        <livery-buffer-graph
          background-color="#444"
          buffer-color="#00bfff"
          latency-color="#ffa500"
          text-color="#eee"
        ></livery-buffer-graph>
      </div>

      <div class="panel">
        <code id="log"></code>
      </div>
    `;
  }

  onCustomerChange(event: Event) {
    const customer = (event.target as HTMLSelectElement).value;
    const { customerId } = LiveryDemo.parseCustomer(customer);
    const source = LiveryDemo.getSource(customerId);
    this.$<HTMLInputElement>('#source-input').value = source;
  }

  // TODO: Replace use of form submit by having form input value changes updating livery elements directly
  // Do however change location using history.pushState so page can be reloaded and URL copy pasted
  // eslint-disable-next-line class-methods-use-this
  onFormSubmit(event: Event) {
    event.preventDefault();

    const urlParams = new URLSearchParams();

    const customer = this.$<HTMLSelectElement>('#customer-select').value;
    if (customer !== LiveryDemo.defaultCustomer) {
      urlParams.set('customer', customer);
    }

    const source = this.$<HTMLSelectElement>('#source-input').value;
    const { customerId } = LiveryDemo.parseCustomer(customer);
    const customerSource = LiveryDemo.getSource(customerId);
    if (source && source !== customerSource) {
      urlParams.set('source', source);
    }

    const latency = this.$<HTMLSelectElement>('#latency-input').value;
    if (latency) {
      urlParams.set('latency', latency);
    }

    const logLevel = this.$<HTMLSelectElement>('#log-select').value;
    if (logLevel !== LiveryDemo.defaultLogLevel) {
      urlParams.set('log', logLevel);
    }

    const params = urlParams.toString();
    if (params) {
      window.location.search = params;
    } else {
      window.location.href = window.location.pathname;
    }
  }

  setSelected(selector: string, value: string) {
    const select = this.$<HTMLSelectElement>(selector);
    const options = Array.from(select.querySelectorAll('option'));
    for (const option of options) {
      option.selected = option.value === value;
    }
  }
}
