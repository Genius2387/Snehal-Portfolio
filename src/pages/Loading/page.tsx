import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const environment = 'development'; // 'development' or 'production'

const SnehalIntro = ({ onSkip }: { onSkip?: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cupRef = useRef<HTMLDivElement>(null);
  const earphonesRef = useRef<HTMLDivElement>(null);
  const wireRef = useRef<SVGPathElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll during loading intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── FLOATING ANIMATIONS ───

      // ─── ENTRANCE & FLOATING ANIMATIONS ───

      // Chai cup entrance then gentle float
      gsap.fromTo(cupRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          delay: 0.4,
          onComplete: () => {
            gsap.to(cupRef.current, {
              y: -15,
              duration: 2.5,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
            });
          }
        }
      );

      // Earphones entrance then float/rotate
      gsap.fromTo(earphonesRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          delay: 0.6,
          onComplete: () => {
            gsap.to(earphonesRef.current, {
              y: -12,
              x: 5,
              rotation: 3,
              duration: 3,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
              delay: 0.5,
            });
          }
        }
      );

      // Wire sway
      if (wireRef.current) {
        gsap.to(wireRef.current, {
          attr: { d: generateWirePath(5) },
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }

      // ─── LABEL ENTRANCES ───
      labelRefs.current.forEach((label, i) => {
        if (!label) return;
        let startX = 0;
        let startY = 0;
        if (i < 3) {
          startX = -35;
        } else if (i === 3) {
          startY = 35;
        } else {
          startX = 35;
        }

        gsap.fromTo(label,
          { opacity: 0, x: startX, y: startY },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.8 + i * 0.15,
          }
        );

        // Subtle pulse after entrance
        gsap.to(label, {
          scale: 1.02,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 1.8 + i * 0.15,
        });
      });

      // ─── PROGRESS BAR ───
      const progressTween = gsap.to(progressRef.current, {
        width: '100%',
        duration: 8,
        ease: 'none',
        onUpdate: function () {
          if (progressTextRef.current) {
            progressTextRef.current.textContent =
              Math.round(this.progress() * 100) + '%';
          }
        },
        onComplete: () => {
          // Auto transition when complete
          if (environment !== 'development' && onSkip) onSkip();
        }
      });

      // ─── ENTRANCE ANIMATIONS ───
      gsap.from('.intro-title', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from('.intro-subtitle', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Store for cleanup
      return () => {
        progressTween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [onSkip]);

  // Generate wire path with slight curve variation for animation
  const generateWirePath = (sway = 0) => {
    return `M 180 280 Q ${220 + sway} 320 ${260} 380`;
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#E8E4DC',
        backgroundImage: 'radial-gradient(circle, #C4C0B8 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        .handwritten-label {
          font-family: 'Caveat', cursive;
          font-size: 20px;
          color: #666;
          line-height: 1.2;
          user-select: none;
        }
      `}</style>
      {/* ─── TOP NAV ─── */}
      <div style={{
        position: 'absolute',
        top: 24,
        left: 32,
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#B85450',
        letterSpacing: '2px',
        fontStyle: 'italic',
      }}>
        SV.
      </div>

      <button
        onClick={onSkip}
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          background: 'none',
          border: 'none',
          color: '#888',
          fontSize: '12px',
          letterSpacing: '3px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'monospace',
          transition: 'color 0.3s',
        }}
        onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#B85450'}
        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#888'}
      >
        SKIP <span style={{ fontSize: '16px' }}>→</span>
      </button>

      {/* ─── MAIN CONTENT ─── */}
      <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}>
        <h1 className="intro-title" style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: '400',
          color: '#1a1a1a',
          margin: 0,
          lineHeight: 1.2,
        }}>
          brewing <span style={{
            color: '#B85450',
            fontStyle: 'italic',
            fontFamily: "'Georgia', serif",
          }}>ideas</span>, one cup at a time.
        </h1>
        <p className="intro-subtitle" style={{
          fontSize: '14px',
          color: '#999',
          marginTop: '16px',
          fontFamily: 'monospace',
          letterSpacing: '1px',
        }}>
          ( headphones on, chai ready? )
        </p>
      </div>

      {/* ─── SCENE CONTAINER ─── */}
      <div style={{
        position: 'relative',
        width: 'min(1000px, 95vw)',
        height: '480px',
        marginBottom: '40px',
      }}>

        {/* Label: before knowing me */}
        <div
          ref={(el) => { labelRefs.current[0] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '1%',
            top: '16%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span>before knowing me</span>
          <span>this is my <span style={{ color: '#B85450' }}>adrak wali chai</span></span>
          {/* Curved Arrow pointing down-right */}
          <svg width="90" height="35" viewBox="0 0 90 35" style={{ marginTop: '8px', marginLeft: '200px', opacity: 0.6 }}>
            <path d="M 5,5 Q 45,5 75,25" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 66,24 L 75,25 L 72,16" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Label: overthinking, one sip at a time */}
        <div
          ref={(el) => { labelRefs.current[1] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '-2%',
            top: '42%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span>overthinking,</span>
          <span>one <span style={{ color: '#B85450' }}>sip</span> at a time.</span>
          {/* Straight Arrow pointing right */}
          <svg width="110" height="20" viewBox="0 0 110 20" style={{ marginTop: '8px', marginLeft: '210px', opacity: 0.6 }}>
            <path d="M 5,10 L 95,10" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 87,5 L 95,10 L 87,15" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Label: chai helps, always */}
        <div
          ref={(el) => { labelRefs.current[2] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '6%',
            top: '70%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span><span style={{ color: '#B85450' }}>chai</span> helps,</span>
          <span>always</span>
          {/* Curved Arrow pointing up-right */}
          <svg width="100" height="50" viewBox="0 0 100 50" style={{ marginTop: '-40px', marginLeft: '160px', opacity: 0.6 }}>
            <path d="M 5,42 Q 50,42 90,12" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 81,14 L 90,12 L 86,21" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Label: my pause button */}
        <div
          ref={(el) => { labelRefs.current[3] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '32%',
            top: '94%',
            marginTop: '-50px',
            marginLeft: '80px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Straight Arrow pointing up */}
          <svg width="20" height="50" viewBox="0 0 20 50" style={{ marginBottom: '4px', marginTop: '-15px', opacity: 0.6 }}>
            <path d="M 10,45 L 10,5" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 5,13 L 10,5 L 15,13" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span>my <span style={{ color: '#B85450' }}>pause</span> button</span>
          <span>in a busy world</span>
        </div>

        {/* Label: my music, my mood, my world */}
        <div
          ref={(el) => { labelRefs.current[4] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '70%',
            top: '6%',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Curved Arrow pointing down-left */}
          <svg width="60" height="70" viewBox="0 0 60 70" style={{ opacity: 0.6 }} className='mt-12'>
            <path d="M 40,2 Q 10,5 22,55" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 16,47 L 22,55 L 26,47" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>my <span style={{ color: '#B85450' }}>music</span>,</span>
            <span>my mood,</span>
            <span>my world</span>
          </div>
        </div>

        {/* Label: curated chaos */}
        <div
          ref={(el) => { labelRefs.current[5] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            top: '32%',
            left: '78%',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Curved Arrow pointing down-left */}
          <svg width="45" height="35" viewBox="0 0 45 35" style={{ opacity: 0.6 }}>
            <path d="M 40,5 Q 25,10 10,24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 18,22 L 10,24 L 9,16" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>curated <span style={{ color: '#B85450' }}>chaos</span></span>
          </div>
        </div>

        {/* Label: Fuel for ideas */}
        <div
          ref={(el) => { labelRefs.current[6] = el; }}
          className="handwritten-label"
          style={{
            position: 'absolute',
            left: '80%',
            top: '68%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span><span style={{ color: '#B85450' }}>Fuel</span> for ideas</span>
          {/* Curved Arrow pointing up-left */}
          <svg width="70" height="45" viewBox="0 0 70 45" style={{ marginTop: '8px', marginLeft: '-35px', opacity: 0.6 }}>
            <path d="M 55,35 Q 35,38 10,8" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 8,18 L 10,8 L 20,8" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* ─── CHAI CUP ─── */}
        <div
          ref={cupRef}
          style={{
            position: 'absolute',
            left: '42%',
            top: '44%',
            transform: 'translate(-50%, -50%)',
            width: '506px',
            height: '506px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '120px',
          }}
        >
          <img
            src="/tea.png"
            alt="Tea Cup"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* ─── WIRED EARPHONES ─── */}
        {/* <div 
          ref={earphonesRef}
          style={{
            position: 'absolute',
            left: '68%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img 
            src="/earphones.png" 
            alt="Earphones" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }} 
          />
        </div> */}
      </div>

      {/* ─── BOTTOM PROGRESS ─── */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        maxWidth: '95vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#888',
          letterSpacing: '1px',
        }}>
          <span>brewing the perfect idea...</span>
          <span
            ref={progressTextRef}
            style={{
              minWidth: '32px',
              textAlign: 'right',
            }}
          >
            0%
          </span>
        </div>

        <div style={{
          width: '100%',
          height: '2px',
          background: 'rgba(0,0,0,0.08)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}>
          <div
            ref={progressRef}
            style={{
              width: '0%',
              height: '100%',
              background: 'linear-gradient(90deg, #B85450, #D4A574)',
              borderRadius: '1px',
            }}
          />
        </div>
      </div>

      {/* ─── FOOTER TIP ─── */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        textAlign: 'center',
        fontSize: '11px',
        color: '#AAA',
        fontFamily: 'monospace',
        letterSpacing: '0.5px',
      }}>
        tip: portfolio works best with a cup of chai & lo-fi on <span style={{ color: '#B85450' }}>♥️</span>
      </div>
    </div>
  );
};

export default SnehalIntro;