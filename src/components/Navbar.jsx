import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, scrollToPanel }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-[#A77B42]/30 bg-[#050810]/40 px-6 py-4 backdrop-blur-md md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        {/* BRAND LOGO - ANIMASI KHUSUS */}
        <motion.button
          onClick={() => scrollToPanel(0)}
          initial={{ opacity: 0, x: -35, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.04 }}
          className="group flex flex-col items-start"
        >
          <motion.span
            initial={{ letterSpacing: "0.35em" }}
            animate={{ letterSpacing: "0.18em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-serif text-xl font-bold text-[#F5DFB2] md:text-2xl"
          >
            HORLOGE
            <span className="text-[#A77B42]">.</span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[8px] tracking-[0.38em] text-[#A77B42]"
          >
            TIMELESS MASTERPIECES
          </motion.span>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.5,
              },
            },
          }}
          className="hidden items-center gap-10 md:flex"
        >
          {[
            { label: "Collection", panel: 1 },
            { label: "Compare", panel: 2 },
            { label: "VIP Vault", panel: 6 },
          ].map((item) => (
            <motion.button
              key={item.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                  filter: "blur(5px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              onClick={() => scrollToPanel(item.panel)}
              whileHover={{
                y: -3,
                color: "#A77B42",
              }}
              className="nav-link"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#F5DFB2] transition hover:text-[#A77B42] md:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={23} />
        </motion.button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 top-full flex w-full flex-col gap-5 overflow-hidden border-b border-[#A77B42]/30 bg-[#050810]/95 px-8 py-6 backdrop-blur-xl md:hidden"
          >
            {[
              { label: "KOLEKSI", panel: 0 },
              { label: "BANDINGKAN", panel: 3 },
              { label: "KONTAK VIP", panel: 4 },
            ].map((item) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                onClick={() => {
                  scrollToPanel(item.panel);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-xs tracking-[0.2em] text-[#F5DFB2]"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
