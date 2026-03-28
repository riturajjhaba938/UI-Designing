export default function GradientOrb() {
  return (
    <div
      style={{
        width: 90,
        height: 90,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      {/* Main orb */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: `conic-gradient(
            from 0deg,
            #f9a8d4 0%, #c084fc 25%,
            #818cf8 50%, #67e8f9 75%,
            #f9a8d4 100%
          )`,
          filter: 'blur(16px)',
          opacity: 0.85,
          animation: 'orbPulse 3s ease-in-out infinite, orbSpin 8s linear infinite',
          position: 'absolute',
        }}
      />

      {/* Glow overlay */}
      <div
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.45) 0%, transparent 70%)',
          animation: 'orbGlow 3s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Inner bright core */}
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(192,132,252,0.3) 60%, transparent 100%)',
          position: 'absolute',
          animation: 'orbPulse 2.5s ease-in-out infinite',
          zIndex: 2,
        }}
      />
    </div>
  );
}
