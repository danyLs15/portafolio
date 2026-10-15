<template>
  <div
    class="network-laptop"
    role="img"
    aria-label="Laptop conectada con otros sistemas"
  >
    <svg
      class="network-laptop__connections"
      viewBox="0 0 420 320"
      aria-hidden="true"
    >
      <path class="connection-line" d="M200 145 L88 -35" />
      <path class="connection-line" d="M210 145 L334 -65" />
      <path class="connection-line" d="M210 145 L70 258" />
      <path class="connection-line" d="M210 145 L450 150" />
      <path class="connection-line" d="M210 145 L210 -14" />

      <circle class="connection-pulse" r="4">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M210 145 L88 -35"
        />
      </circle>
      <circle class="connection-pulse" r="4">
        <animateMotion
          dur="3.5s"
          begin="0.7s"
          repeatCount="indefinite"
          path="M210 145 L334 -65"
        />
      </circle>
      <circle class="connection-pulse" r="4">
        <animateMotion
          dur="3.2s"
          begin="1.1s"
          repeatCount="indefinite"
          path="M210 145 L70 258"
        />
      </circle>
      <circle class="connection-pulse" r="4">
        <animateMotion
          dur="3.8s"
          begin="0.4s"
          repeatCount="indefinite"
          path="M210 145 L450 150"
        />
      </circle>
      <circle class="connection-pulse" r="4">
        <animateMotion
          dur="3.4s"
          begin="1.5s"
          repeatCount="indefinite"
          path="M210 145 L210 -14"
        />
      </circle>

      <circle class="connection-node" cx="88" cy="-35" r="8" />
      <circle class="connection-node" cx="334" cy="-65" r="8" />
      <circle class="connection-node" cx="70" cy="258" r="8" />
      <circle class="connection-node" cx="450" cy="150" r="8" />
      <circle class="connection-node" cx="210" cy="-14" r="8" />
    </svg>

    <div class="laptop" aria-hidden="true">
      <div class="laptop__screen">
        <div class="laptop__screen-glow"></div>
        <div class="laptop__code">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span>
        </div>
      </div>
      <div class="laptop__base"></div>
    </div>

    <span class="network-label label-api" aria-hidden="true">API</span>
    <span class="network-label label-web" aria-hidden="true">WEB</span>
    <span class="network-label label-data" aria-hidden="true">DATA</span>
  </div>
</template>

<style scoped>
.network-laptop {
  --accent: #25b9e8;
  --accent-soft: rgba(37, 185, 232, 0.25);
  --line: rgba(91, 190, 225, 0.48);

  position: relative;
  isolation: isolate;
  width: min(100%, 420px);
  aspect-ratio: 520 / 420;
  margin-inline: auto;
}

.network-laptop__connections {
  position: absolute;
  left: auto;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.connection-line {
  fill: none;
  stroke: var(--line);
  stroke-width: 1.5;
  stroke-dasharray: 5 6;
  animation: line-flow 12s linear infinite;
}

.connection-node {
  fill: #102537;
  stroke: var(--accent);
  stroke-width: 2;
  filter: drop-shadow(0 0 6px var(--accent-soft));
  animation: node-pulse 2.4s ease-in-out infinite alternate;
}

.connection-pulse {
  fill: #b9f3ff;
  filter: drop-shadow(0 0 5px var(--accent));
}

.laptop {
  position: absolute;
  top: 8%;
  left: 18%;
  width: 70%;
  animation: laptop-float 4s ease-in-out infinite;
}

.laptop__screen {
  position: relative;
  aspect-ratio: 1.55 / 1;
  overflow: hidden;
  border: 3px solid #587284;
  border-bottom-width: 6px;
  border-radius: 10px 10px 4px 4px;
  background: linear-gradient(145deg, #142a3a, #09131d 75%);
  box-shadow:
    0 0 24px rgba(37, 185, 232, 0.16),
    inset 0 0 18px rgba(37, 185, 232, 0.08);
}

.laptop__screen-glow {
  position: absolute;
  inset: 15%;
  background: radial-gradient(
    ellipse,
    rgba(37, 185, 232, 0.2),
    transparent 70%
  );
}

.laptop__code {
  position: absolute;
  inset: 24% 18%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-content: center;
  gap: 8px 12px;
}

.laptop__code span {
  height: 4px;
  border-radius: 4px;
  background: var(--accent);
  opacity: 0.75;
  animation: code-blink 2s ease-in-out infinite alternate;
}

.laptop__code span:nth-child(3n) {
  width: 65%;
  background: #a68bfa;
}

.laptop__code span:nth-child(2n) {
  opacity: 0.45;
  animation-delay: 0.6s;
}

.laptop__base {
  width: 118%;
  height: 12px;
  margin-left: -9%;
  border-radius: 2px 2px 10px 10px;
  background: linear-gradient(#94a8b5, #526a7a 55%, #263b49);
  clip-path: polygon(7% 0, 93% 0, 100% 100%, 0 100%);
}

.network-label {
  position: absolute;
  padding: 5px 9px;
  border: 1px solid rgba(37, 185, 232, 0.35);
  border-radius: 6px;
  color: #b9eefa;
  background: rgba(10, 25, 37, 0.88);
  box-shadow: 0 0 14px rgba(37, 185, 232, 0.1);
  font: 600 10px / 1.2 system-ui, sans-serif;
  letter-spacing: 0.12em;
}

.label-api {
  top: -15%;
  left: 13%;
}

.label-web {
  top: -23%;
  right: 9%;
}

.label-data {
  right: -19%;
  bottom: 50%;
}

@keyframes laptop-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

@keyframes line-flow {
  to {
    stroke-dashoffset: -44;
  }
}

@keyframes node-pulse {
  from {
    opacity: 0.65;
  }

  to {
    opacity: 1;
  }
}

@keyframes code-blink {
  from {
    opacity: 0.35;
  }

  to {
    opacity: 0.9;
  }
}

@media (prefers-reduced-motion: reduce) {
  .network-laptop *,
  .network-laptop *::before,
  .network-laptop *::after {
    animation: none !important;
  }

  .connection-pulse {
    display: none;
  }
}

@media (max-width: 600px) {
  .network-laptop {
    width: min(84vw, 340px);
  }

  /* @media (max-width: 992px) {
      .laptop {
      top: 10%;
      left: 5%;
      width: 50%;
    }
    .network-laptop__connections{
      
    }
  } */
}
</style>