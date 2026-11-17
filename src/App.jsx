import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

import { watches, panels, footerVariants, itemVariants } from "./data/watches.js";

import Navbar from "./components/Navbar.jsx";
import HeroPanel from "./components/HeroPanel.jsx";
import WatchPanel from "./components/WatchPanel.jsx";
import VipVault from "./components/VipVault.jsx";
import QuickActions from "./components/QuickActions.jsx";
import FooterNav from "./components/FooterNav.jsx";

import useGranim from "./hooks/useGranim.js";
import { useMobileMenu } from "./hooks/useMobileMenu.js";
import { useScrollNav } from "./hooks/useScrollNav.js";
import { useWatchModal } from "./hooks/useWatchModal.js";

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
  const granimRef = useRef(null);

useGranim(granimRef)

const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  // 2. Panggil scroll nav menggunakan mobileMenuOpen
  const { galleryRef, activeIndex, scrollToPanel, handleScroll } = useScrollNav(
    panels.length,
    mobileMenuOpen
  );

  // 3. Panggil modal hook
const { selectedWatch, openModal: setSelectedWatch, closeModal } = useWatchModal();

  // ========================================
  // APP CONTENT
  // ========================================

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050810] text-white">
      {/* ANIMATED GRANIM BACKGROUND */}
      <canvas
        ref={granimRef}
        className="fixed inset-0 z-0 h-full w-full pointer-events-none opacity-35"
      />

      {/* DARK OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[#050810]/45" />

      {/* ================================== */}
      {/* TOP FLOATING NAVBAR                */}
      {/* ================================== */}

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={toggleMobileMenu}
        scrollToPanel={scrollToPanel}
      />

      {/* ================================== */}
      {/* STEP 5 - HORIZONTAL WATCH GALLERY  */}
      {/* ================================== */}

      <section
        ref={galleryRef}
        onScroll={handleScroll}
        className="gallery-container relative z-10 flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        {panels.map((panel, index) => {
          const watch = watches[index - 1];

          return (
            <article
              key={panel.id}
              className="relative flex h-screen w-screen shrink-0 snap-start items-center justify-center overflow-hidden bg-[#050810] px-6 pb-24 pt-28 md:px-16"
            >
              {/* DECORATIVE BACKGROUND */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A77B42]/10" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A77B42]/10" />

              {/* PANEL 00 - OPENING */}
              {panel.type === "opening" && <HeroPanel watches={watches} scrollToPanel={scrollToPanel} index={index} />}

              {/* PANEL 01-04 - WATCH COLLECTIONS */}
              {watch && (
                <WatchPanel
                  watch={watch}
                  index={index}
                  activeIndex={activeIndex}
                  scrollToPanel={scrollToPanel}
                />
              )}

              {/* PANEL 05 - VIP VAULT */}
              {panel.type === "vault" && (
                <VipVault
                  watches={watches}
                  selectedWatch={selectedWatch}
                  setSelectedWatch={setSelectedWatch}
                />
              )}

              {/* PANEL NUMBER */}
              <motion.span
                initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute bottom-28 right-8 font-serif text-8xl text-[#A77B42]/10"
              >
                {panel.id}
              </motion.span>
            </article>
          );
        })}
      </section>

      {/* ================================== */}
      {/* STEP 6 - CHRONOMETER SCRUBBER      */}
      {/* ================================== */}

      <FooterNav
        footerVariants={footerVariants}
        panels={panels}
        itemVariants={itemVariants}
        activeIndex={activeIndex}
        scrollToPanel={scrollToPanel}
      />

      {/* ================================== */}
      {/* STEP 7 - QUICK ACTION TRIGGERS     */}
      {/* ================================== */}

      <QuickActions
        panels={panels}
        activeIndex={activeIndex}
        scrollToPanel={scrollToPanel}
      />
    </main>
  );
}
