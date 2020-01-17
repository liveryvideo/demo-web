import { LitElement, html, css, property } from 'lit-element';
import '@exmg/livery';

export class LiveryDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #222;
      color: #aaa;
      font-family: 'Open Sans', sans-serif;
      line-height: 1.25em;
      font-size: 14px;
    }

    .panel {
      background-color: #444;
      color: #ccc;
      margin: 0 0 4px 0;
      padding: 4px;
    }

    form {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -2px;
    }

    label {
      display: block;
      font-size: 0.8em;
      line-height: 1.2em;
      color: orange;
    }

    input,
    select {
      font-size: 1em;
      background-color: #666;
      color: #eee;
      border-color: #888;
    }

    .input {
      margin: 0 8px 2px 0;
    }

    .input.source {
      flex: 1;
    }

    .source-container {
      display: flex;
    }

    .source-container .icon {
      margin: 4px 0 0 4px;
    }

    .input.source input {
      width: 100%;
      min-width: 250px;
    }

    .input.latency input {
      width: 50px;
    }

    .input.submit input {
      margin-top: 4px;
      height: 80%;
      background-color: #08c;
      border-color: #00bfff;
      font-weight: bold;
    }

    livery-player {
      max-width: 600px;
      overflow: auto;
    }

    th {
      padding-left: 4px;
      text-align: right;
    }

    code {
      word-wrap: break-word;
    }

    /* Icons */
    .icon {
      width: 1em;
    }

    a.icon {
      text-decoration: none;
    }

    /* Playback states */
    .icon-buffering::before {
      content: '⏳';
    }
    .icon-ended::before {
      content: '⏹';
    }
    .icon-fast-forward::before {
      content: '⏩';
    }
    .icon-paused::before {
      content: '⏸';
    }
    .icon-playing::before {
      content: '▶️';
    }
    .icon-rewind::before {
      content: '⏪';
    }
    .icon-seeking::before {
      content: '⏭';
    }
    .icon-slow-mo::before {
      content: '🔽';
    }
  `;

  @property({ type: String })
  foo = '';

  render() {
    return html`
      <div class="panel">
        <form id="form">
          <div class="input">
            <label for="customer-select">Customer:</label>
            <select id="customer-select">
              <optgroup label="ExMG">
                <option value="staging 5c8b790e8f08e4ad1d1dc339"
                  >Angry Bytes</option
                >
                <option value="dev 5c52edb53e930320967a5d55">Ex Machina</option>
                <option value="5ddb986ee4b0937e6a4507e9">Livery Demo</option>
                <option value="5d931e67e4b0748e5a09b99f">Nerve</option>
              </optgroup>
            </select>
          </div>

          <div class="input">
            <label for="source-select">Source:</label>
            <select id="source-select">
              <optgroup label="Akamai">
                <option
                  value="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd"
                  >Akamai LLS
                </option>
              </optgroup>

              <!-- Source: https://reference.dashif.org/dash.js/nightly/samples/dash-if-reference-player/index.html -->
              <optgroup label="DASH-IF">
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
              </optgroup>
            </select>
          </div>

          <div class="input source">
            <label for="source-input">Source URL:</label>
            <input id="source-input" type="url" />
          </div>

          <div class="input latency">
            <label for="latency-input">Latency:</label>
            <input id="latency-input" type="number" min="0" step="0.1" />s
          </div>

          <div class="input">
            <label for="log-select">Log Level:</label>
            <select id="log-select">
              <option value="ERROR">ERROR</option>
              <option value="WARN">WARN</option>
              <option value="INFO" selected>INFO</option>
              <option value="DEBUG">DEBUG</option>
              <option value="SPAM">SPAM</option>
            </select>
          </div>

          <div class="input submit">
            <input type="submit" value="Load" />
          </div>
        </form>
      </div>

      <div class="panel">
        <livery-sdk
          config="https://cdn.playtotv.com/video-encoder-dev/remoteconfigs/5c52edb53e930320967a5d55.json"
          log-level="info"
        ></livery-sdk>
        <livery-player
          autoplay-muted
          persist-muted
          controls="mute fullscreen quality"
        >
          <source
            src="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd"
          />
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
}
