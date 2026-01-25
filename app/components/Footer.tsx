'use client';

import { ArrowUp } from 'lucide-react';
import { Ref, useEffect, useRef } from 'react';

export default function Footer() {
  const btnRef: Ref<HTMLButtonElement> = useRef(null);
  const scrollAnimRef = useRef<number | null>(null);

  const updateBtnRef = () => {
    if (!btnRef.current) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollY > scrollHeight / 8) {
      btnRef.current.classList.remove('opacity-0', 'translate-y-28');
      btnRef.current.classList.add('opacity-100');
    } else {
      btnRef.current.classList.add('opacity-0', 'translate-y-28');
      btnRef.current.classList.remove('opacity-100');
    }
  };

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      if (c > Number.EPSILON * 5) {
        window.scrollTo(0, c - c / 16);
      } else {
        window.scrollTo(0, 0);
      }
      scrollAnimRef.current = window.requestAnimationFrame(scrollToTop);
    } else if (scrollAnimRef.current) {
      window.cancelAnimationFrame(scrollAnimRef.current);
      scrollAnimRef.current = null;
    }
  };

  const cancelScrollAnimOnUserScroll = () => {
    if (!scrollAnimRef.current) return;

    window.cancelAnimationFrame(scrollAnimRef.current);
    scrollAnimRef.current = null;
  };

  useEffect(() => {
    updateBtnRef();

    document.addEventListener('scroll', updateBtnRef);
    document.addEventListener('wheel', cancelScrollAnimOnUserScroll, {
      passive: true,
    });
    document.addEventListener('touchstart', cancelScrollAnimOnUserScroll, {
      passive: true,
    });

    return () => {
      document.removeEventListener('scroll', updateBtnRef);
      document.removeEventListener('wheel', cancelScrollAnimOnUserScroll);
      document.removeEventListener('touchstart', cancelScrollAnimOnUserScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 text-center m-4">
      <button
        ref={btnRef}
        className="appearance-none opacity-0 translate-y-28 transition-all cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <ArrowUp />
      </button>
    </div>
  );
}
