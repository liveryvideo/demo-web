import { endpointId, version } from '@exmg/livery';
import type { LiveryPlayer } from '@exmg/livery';
import { html, LitElement, property } from 'lit-element';
import { ifDefined } from './ifDefined';
import { liveryDemoStyle } from './liveryDemoStyle';

function setSelected(select: HTMLSelectElement, value: string) {
  const options = Array.from(select.querySelectorAll('option'));
  for (const option of options) {
    option.selected = option.value === value;
  }
}

export class LiveryDemo extends LitElement {
  static defaultCustomer = '5ddb98f5e4b0937e6a4507f2';

  static defaultLogLevel = 'info';

  static styles = liveryDemoStyle;

  @property({ type: Number })
  buffer = NaN;

  @property({ type: Number })
  latency = NaN;

  @property({ type: Number })
  playbackRate = 1;

  @property({ type: String })
  config: string;

  @property({ type: String })
  customer: string;

  @property({ type: String })
  customLatency: string;

  @property({ type: String })
  engineName = '';

  @property({ type: String })
  logLevel: string;

  @property({ type: String })
  playbackState = '';

  @property({ type: String })
  quality = '';

  @property({ type: String })
  source: string;

  $?: {
    customerSelect: HTMLSelectElement;
    latencyInput: HTMLInputElement;
    logSelect: HTMLSelectElement;
    player: LiveryPlayer;
    sourceInput: HTMLInputElement;
  };

  constructor() {
    super();

    const urlParams = new URLSearchParams(window.location.search);

    this.customer = urlParams.get('customer') || LiveryDemo.defaultCustomer;
    this.config = this.getCustomerConfig();
    const source = urlParams.get('source');
    this.source = source !== null ? source : this.getCustomerSource();
    this.customLatency = urlParams.get('latency') || '';
    this.logLevel = urlParams.get('log') || LiveryDemo.defaultLogLevel;
  }

  firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(changedProperties);

    const $ = <T extends Element>(selector: string) => {
      const element = this.renderRoot.querySelector<T>(selector);
      if (!element) {
        throw new Error(`Could not find element with selector: ${selector}`);
      }
      return element;
    };

    this.$ = {
      customerSelect: $('#customer-select'),
      latencyInput: $('#latency-input'),
      logSelect: $('#log-select'),
      player: $('livery-player'),
      sourceInput: $('#source-input'),
    };

    setSelected(this.$.customerSelect, this.customer);
    setSelected(this.$.logSelect, this.logLevel);

    this.updateBufferAndLatency();
    this.updateEngineName();
    this.updatePlaybackRate();
    this.updatePlaybackState();
    this.updateQuality();
  }

  getCustomer() {
    const parts = this.customer.split('-');
    return {
      customerId: parts[0],
      envSuffix: parts.length === 2 ? `-${parts[1]}` : '',
    };
  }

  getCustomerConfig() {
    const { customerId, envSuffix } = this.getCustomer();
    return `https://cdn.playtotv.com/video-encoder${envSuffix}/remoteconfigs/${customerId}.json`;
  }

  getCustomerSource() {
    const { customerId } = this.getCustomer();
    const manifest = /iPhone/i.test(navigator.userAgent)
      ? 'master.m3u8'
      : 'out.mpd';
    return `https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/${customerId}-TESTING/${manifest}`;
  }

  getLogLevel() {
    const { logLevel } = this;
    if (
      logLevel === 'quiet' ||
      logLevel === 'error' ||
      logLevel === 'warn' ||
      logLevel === 'info' ||
      logLevel === 'debug' ||
      logLevel === 'spam'
    ) {
      return logLevel;
    }
    return 'info';
  }

  getTargetLatency() {
    const customLatency = parseFloat(this.customLatency);
    return Number.isNaN(customLatency) ? undefined : customLatency;
  }

  onClearClick(event: Event) {
    event.preventDefault();
    this.$!.sourceInput.value = '';
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.updateCustomer();
    this.updateCustomLatency();
    this.updateLogLevel();
    this.updateSource();
  }

  render() {
    return html`
      <div class="panel">
        <form id="form" @submit="${this.onFormSubmit}">
          <div class="input">
            <label for="customer-select">Customer:</label>
            <select id="customer-select" @change="${this.updateCustomer}">
              <optgroup label="ExMG">
                <option value="5c8b790e8f08e4ad1d1dc339-staging"
                  >Angry Bytes</option
                >
                <option value="5c52edb53e930320967a5d55-dev">Ex Machina</option>
                <option value="5ddb98f5e4b0937e6a4507f2">Livery Demo</option>
                <option value="5ddb986ee4b0937e6a4507e9">Robolingo</option>
              </optgroup>
            </select>
          </div>

          <div class="input source">
            <label for="source-input">
              Source:
              <a
                href="#"
                class="icon icon-clear"
                @click="${this.onClearClick}"
              ></a>
            </label>
            <input
              id="source-input"
              type="url"
              list="sources"
              .value="${this.source}"
              @change="${this.updateSource}"
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
              @change="${this.updateCustomLatency}"
            />s
          </div>

          <div class="input">
            <label for="log-select">Log Level:</label>
            <select id="log-select" @change="${this.updateLogLevel}">
              <option>error</option>
              <option>warn</option>
              <option>info</option>
              <option>debug</option>
              <option>spam</option>
            </select>
          </div>
        </form>
      </div>

      <div class="panel">
        <livery-sdk
          config="${this.config}"
          loglevel="${this.getLogLevel()}"
        ></livery-sdk>
        <livery-player
          autoplaymuted
          persistmuted
          controls="error mute fullscreen quality"
          poster="assets/poster.png"
          preroll="assets/preroll.mp4"
          targetlatency="${ifDefined(this.getTargetLatency())}"
          vumeter
          @livery-active-quality-change="${this.updateQuality}"
          @livery-playback-change="${this.updatePlaybackState}"
          @livery-progress="${this.updateBufferAndLatency}"
          @livery-rate-change="${this.updatePlaybackRate}"
          @livery-selected-quality-change="${this.updateQuality}"
          @livery-started="${this.updateEngineName}"
          @livery-time-update="${this.updateBufferAndLatency}"
        >
          <source src="${this.source}" />
        </livery-player>
      </div>

      <table class="panel">
        <tr>
          <th>Version:</th>
          <td>${version}</td>
          <th>Engine:</th>
          <td>
            ${this.engineName.replace(/Engine$/, '')}
          </td>
          <th>Playback:</th>
          <td>
            <span
              class="icon icon-${this.playbackState
                .toLowerCase()
                .replace(/_/g, '-')}"
            ></span>
            <span
              >${this.playbackRate === 1 ? '' : `${this.playbackRate}x`}</span
            >
          </td>
        </tr>
        <tr>
          <th>Buffer:</th>
          <td>
            ${Number.isNaN(this.buffer) ? '' : `${this.buffer.toFixed(1)}s`}
          </td>
          <th>Latency:</th>
          <td>
            ${Number.isNaN(this.latency) ? '' : `${this.latency.toFixed(1)}s`}
          </td>
          <th>Quality:</th>
          <td>${this.quality}</td>
        </tr>
          <th>Endpoint:</th>
          <td colspan="5">${endpointId}</td>
        </tr>
        <tr>
      </table>

      <div class="panel">
        <livery-buffer-graph
          backgroundcolor="#444"
          buffercolor="#00bfff"
          latencycolor="#ffa500"
          textcolor="#eee"
          .player="${this.$ ? this.$.player : null}"
        ></livery-buffer-graph>
      </div>

      <div class="panel">
        <livery-log .player="${this.$ ? this.$.player : null}"></livery-log>
      </div>
    `;
  }

  updateBufferAndLatency() {
    this.buffer = this.$!.player.buffer;
    this.latency = this.$!.player.latency;
  }

  updateCustomer() {
    const { value } = this.$!.customerSelect;
    if (value === this.customer) {
      return;
    }

    this.customer = value;
    this.config = this.getCustomerConfig();
    this.source = this.getCustomerSource();

    this.updateUrlParams();
  }

  updateCustomLatency() {
    this.customLatency = this.$!.latencyInput.value;
    this.updateUrlParams();
  }

  updateEngineName() {
    this.engineName = this.$!.player.engineName;
  }

  updateLogLevel() {
    this.logLevel = this.$!.logSelect.value;
    this.updateUrlParams();
  }

  updatePlaybackRate() {
    this.playbackRate = this.$!.player.playbackRate;
  }

  updatePlaybackState() {
    this.playbackState = this.$!.player.playbackState;
  }

  updateQuality() {
    const {
      activeQuality: activeIndex,
      selectedQuality: selectedIndex,
      qualities,
    } = this.$!.player;

    const active = Number.isNaN(activeIndex) ? null : qualities[activeIndex];
    const selected = Number.isNaN(selectedIndex)
      ? null
      : qualities[selectedIndex];

    let selectedStr = '';
    if (qualities.length > 1) {
      if (selected) {
        if (!active || selectedIndex !== activeIndex) {
          selectedStr = `=> ${selected.label}`;
        }
      } else {
        selectedStr = '(auto)';
      }
    }

    this.quality = `${active ? active.label : ''} ${selectedStr}`;
  }

  updateSource() {
    this.source = this.$!.sourceInput.value;
    this.updateUrlParams();
  }

  updateUrlParams() {
    const { customer, customLatency, logLevel, source } = this;
    const url = new URL(window.location.href);
    const { searchParams } = url;

    if (customer !== LiveryDemo.defaultCustomer) {
      searchParams.set('customer', customer);
    } else {
      searchParams.delete('customer');
    }

    if (source !== this.getCustomerSource()) {
      searchParams.set('source', source);
    } else {
      searchParams.delete('source');
    }

    if (customLatency !== '') {
      searchParams.set('latency', customLatency);
    } else {
      searchParams.delete('latency');
    }

    if (logLevel !== LiveryDemo.defaultLogLevel) {
      searchParams.set('log', logLevel);
    } else {
      searchParams.delete('log');
    }

    if (url.toString() !== window.location.href) {
      window.history.pushState({}, '', url.toString());
    }
  }
}
