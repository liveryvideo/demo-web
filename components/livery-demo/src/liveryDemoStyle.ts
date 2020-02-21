import { css } from 'lit-element';

export const liveryDemoStyle = css`
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

  livery-player {
    width: 100%;
    height: 50vh;
    object-fit: contain;
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

  .icon-clear::before {
    color: #aaa;
    content: '🅧';
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
