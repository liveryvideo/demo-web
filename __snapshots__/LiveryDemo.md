# `LiveryDemo`

#### `matches the snapshot`

```html
<div class="panel">
  <form id="form">
    <div class="input">
      <label for="customer-select">
        Customer:
      </label>
      <select id="customer-select">
        <optgroup label="ExMG">
          <option value="5c8b790e8f08e4ad1d1dc339-staging">
            Angry Bytes
          </option>
          <option value="5c52edb53e930320967a5d55-dev">
            Ex Machina
          </option>
          <option value="5ddb98f5e4b0937e6a4507f2">
            Livery Demo
          </option>
          <option value="5ddb986ee4b0937e6a4507e9">
            Robolingo
          </option>
        </optgroup>
      </select>
    </div>
    <div class="input source">
      <label for="source-input">
        Source:
        <a
          class="icon icon-clear"
          href="#"
        >
        </a>
      </label>
      <input
        id="source-input"
        list="sources"
        type="url"
      >
      <datalist id="sources">
        <option value="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd">
          Akamai LLS
        </option>
        <option value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd">
          DASH-IF LLS
        </option>
        <option value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd">
          DASH-IF LLS ABR
        </option>
        <option value="https://vm2.dashif.org/livesim/testpic_2s/Manifest.mpd">
          DASH-IF 2s
        </option>
      </datalist>
    </div>
    <div class="input latency">
      <label for="latency-input">
        Latency:
      </label>
      <input
        id="latency-input"
        min="0"
        step="0.1"
        type="number"
      >
      s
    </div>
    <div class="input">
      <label for="log-select">
        Log Level:
      </label>
      <select id="log-select">
        <option>
          error
        </option>
        <option>
          warn
        </option>
        <option>
          info
        </option>
        <option>
          debug
        </option>
        <option>
          spam
        </option>
      </select>
    </div>
  </form>
</div>
<div class="panel">
  <livery-sdk
    config="https://cdn.playtotv.com/video-encoder/remoteconfigs/5ddb98f5e4b0937e6a4507f2.json"
    loglevel="info"
  >
  </livery-sdk>
  <livery-player
    autoplaymuted=""
    controls="error mute fullscreen quality"
    persistmuted=""
    poster="assets/poster.png"
    vumeter=""
  >
    <source src="https://exmachina-ull-demo.akamaized.net/cmaf/live/664379/5ddb98f5e4b0937e6a4507f2-TESTING/out.mpd">
  </livery-player>
</div>
<table class="panel">
  <tbody>
    <tr>
      <th>
        Engine:
      </th>
      <td>
      </td>
      <th>
        Playback:
      </th>
      <td>
        <span class="icon icon-paused">
        </span>
        <span>
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Buffer:
      </th>
      <td>
      </td>
      <th>
        Quality:
      </th>
      <td>
      </td>
    </tr>
    <tr>
      <th>
        Latency:
      </th>
      <td>
      </td>
    </tr>
  </tbody>
</table>
<div class="panel">
  <livery-buffer-graph
    backgroundcolor="#444"
    buffercolor="#00bfff"
    latencycolor="#ffa500"
    maxrows="60"
    textcolor="#eee"
    updateinterval="500"
  >
  </livery-buffer-graph>
</div>
<div class="panel">
  <livery-log
    maxlinelength="100"
    maxlines="50"
  >
  </livery-log>
</div>

```

