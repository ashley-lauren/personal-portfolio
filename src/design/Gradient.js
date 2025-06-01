function Gradient() {
  const idCSS = "circular-progress-bar";
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor="#A7D129" />
          <stop offset="85.56%" stopColor="#B45650" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Gradient;
