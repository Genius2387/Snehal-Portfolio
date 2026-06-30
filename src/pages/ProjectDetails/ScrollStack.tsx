import React, { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-[550px] my-8 p-0 rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  baseScale = 0.85,
  rotationAmount = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.scroll-stack-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const cardsArray = Array.from(cards) as HTMLElement[];
      const totalCards = cardsArray.length;

      // Apply margins between cards for natural document layout
      cardsArray.forEach((card, i) => {
        if (i < totalCards - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
      });

      cardsArray.forEach((card, i) => {
        const targetScale = baseScale + i * itemScale;
        const pinOffset = itemStackDistance * i;

        // Pin each card and animate its scale smoothly using GSAP ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: `top-=${pinOffset} ${stackPosition}`,
            pin: true,
            pinSpacing: false, // Let next cards scroll over it
            endTrigger: container.querySelector('.scroll-stack-end') as HTMLElement,
            end: 'top 50%',
            scrub: true,
            invalidateOnRefresh: true,
          }
        });

        tl.to(card, {
          scale: targetScale,
          rotation: rotationAmount ? i * rotationAmount : 0,
          ease: 'none',
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, baseScale, rotationAmount]);

  return (
    <div ref={containerRef} className={`relative w-full overflow-visible ${className}`.trim()}>
      <div className="scroll-stack-inner pt-[5vh] pb-[10vh]">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px mt-24" />
      </div>
    </div>
  );
};

export default ScrollStack;
