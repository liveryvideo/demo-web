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
          <option value="staging 5c8b790e8f08e4ad1d1dc339">
            Angry Bytes
          </option>
          <option value="dev 5c52edb53e930320967a5d55">
            Ex Machina
          </option>
          <option value="5ddb986ee4b0937e6a4507e9">
            Livery Demo
          </option>
          <option value="5d931e67e4b0748e5a09b99f">
            Nerve
          </option>
        </optgroup>
      </select>
    </div>
    <div class="input">
      <label for="source-select">
        Source:
      </label>
      <select id="source-select">
        <optgroup label="Akamai">
          <option value="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd">
            Akamai LLS
          </option>
        </optgroup>
        <optgroup label="DASH-IF">
          <option value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest300.mpd">
            DASH-IF LLS
          </option>
          <option value="https://livesim.dashif.org/livesim-chunked/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd">
            DASH-IF LLS ABR
          </option>
          <option value="https://vm2.dashif.org/livesim/testpic_2s/Manifest.mpd">
            DASH-IF 2s
          </option>
        </optgroup>
      </select>
    </div>
    <div class="input source">
      <label for="source-input">
        Source URL:
      </label>
      <input
        id="source-input"
        type="url"
      >
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
        <option value="ERROR">
          ERROR
        </option>
        <option value="WARN">
          WARN
        </option>
        <option
          selected=""
          value="INFO"
        >
          INFO
        </option>
        <option value="DEBUG">
          DEBUG
        </option>
        <option value="SPAM">
          SPAM
        </option>
      </select>
    </div>
    <div class="input submit">
      <input
        type="submit"
        value="Load"
      >
    </div>
  </form>
</div>
<div class="panel">
  <livery-sdk
    config="https://cdn.playtotv.com/video-encoder-dev/remoteconfigs/5c52edb53e930320967a5d55.json"
    log-level="info"
  >
  </livery-sdk>
  <livery-player
    autoplay-muted=""
    controls="mute fullscreen quality"
    persist-muted=""
  >
    <source src="https://akamaibroadcasteruseast.akamaized.net/cmaf/live/657078/akasource/out.mpd">
  </livery-player>
</div>
<table class="panel">
  <tbody>
    <tr>
      <th>
        Engine:
      </th>
      <td id="engine">
      </td>
      <th>
        Playback:
      </th>
      <td>
        <span id="playback-state">
        </span>
        <span id="playback-rate">
        </span>
      </td>
    </tr>
    <tr>
      <th>
        Buffer:
      </th>
      <td id="buffer">
      </td>
      <th>
        Quality:
      </th>
      <td id="quality">
      </td>
    </tr>
    <tr>
      <th>
        Latency:
      </th>
      <td id="latency">
      </td>
    </tr>
  </tbody>
</table>
<div class="panel">
  <livery-buffer-graph
    background-color="#444"
    buffer-color="#00bfff"
    latency-color="#ffa500"
    max-rows="60"
    player-selector="livery-player"
    text-color="#eee"
    update-interval="500"
  >
  </livery-buffer-graph>
</div>
<div class="panel">
  <code id="log">
  </code>
</div>

```

