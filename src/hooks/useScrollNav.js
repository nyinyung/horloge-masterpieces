// src/hooks/useScrollNav.js
import { useState, useRef, useEffect, useCallback } from "react";

export function useScrollNav(panelsLength, mobileMenuOpen) {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isWheelingRef = useRef(false);

  // ========================================
  // SCROLL TO PANEL
  // ========================================
  const scrollToPanel = useCallback(
    (index) => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const safeIndex = Math.max(0, Math.min(index, panelsLength - 1));

      gallery.scrollTo({
        left: safeIndex * gallery.clientWidth,
        behavior: "smooth",
      });
    },
    [panelsLength]
  );

  // ========================================
  // DETECT ACTIVE PANEL
  // ========================================
  const handleScroll = (event) => {
    const gallery = event.currentTarget;
    const index = Math.round(gallery.scrollLeft / gallery.clientWidth);

    setActiveIndex(Math.max(0, Math.min(index, panelsLength - 1)));
  };

  // ========================================
  // MOUSE WHEEL NAVIGATION
  // ========================================
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const onWheel = (event) => {
      if (mobileMenuOpen) return;

      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();

        if (isWheelingRef.current) return;
        if (Math.abs(event.deltaY) < 15) return;

        isWheelingRef.current = true;

        if (event.deltaY > 0) {
          scrollToPanel(activeIndex + 1);
        } else {
          scrollToPanel(activeIndex - 1);
        }

        setTimeout(() => {
          isWheelingRef.current = false;
        }, 600);
      }
    };

    gallery.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      gallery.removeEventListener("wheel", onWheel);
    };
  }, [activeIndex, mobileMenuOpen, scrollToPanel]);

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        mobileMenuOpen
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToPanel(activeIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToPanel(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, mobileMenuOpen, scrollToPanel]);

  // Kembalikan variabel dan fungsi agar bisa dipakai di App.jsx
  return {
    galleryRef,
    activeIndex,
    scrollToPanel,
    handleScroll,
  };
}