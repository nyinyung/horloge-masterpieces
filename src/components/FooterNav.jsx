import React from "react";
import { motion } from "motion/react";

const FooterNav = ({
  footerVariants,
  panels,
  itemVariants,
  activeIndex,
  scrollToPanel,
}) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-0 left-0 z-50 w-full border-t border-[#A77B42]/25 bg-[#050810]/85 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-20"
    >
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-[1600px] items-center justify-between gap-5"
      >
        {/* LEFT LABEL */}

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
          className="hidden flex-col gap-1 sm:flex"
        >
          <span className="font-serif text-sm tracking-[0.25em] text-[#F5DFB2]">
            HORLOGE
          </span>

          <span className="text-[8px] tracking-[0.3em] text-white/40">
            COLLECTION INDEX
          </span>
        </motion.div>

        {/* BEZEL SCALE */}

        <motion.div
          variants={footerVariants}
          className="flex flex-1 items-center justify-center gap-5 md:gap-12"
        >
          {panels.map((panel, index) => (
            <motion.button
              key={panel.id}
              variants={itemVariants}
              onClick={() => scrollToPanel(index)}
              aria-label={`Go to collection ${panel.id}`}
              aria-current={activeIndex === index ? "step" : undefined}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative flex flex-col items-center gap-2"
            >
              {/* GOLD LIGHT INDICATOR */}

              <div className="relative flex h-3 w-3 items-center justify-center">
                {activeIndex === index ? (
                  <motion.div
                    layoutId="bezel-indicator"
                    className="absolute h-3 w-3 rounded-full bg-[#F5DFB2] shadow-[0_0_8px_2px_rgba(245,223,178,0.7),0_0_18px_rgba(167,123,66,0.7)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                ) : (
                  <motion.div
                    className="h-[5px] w-[5px] rounded-full bg-[#A77B42]/50 transition-colors duration-300 group-hover:bg-[#F5DFB2]"
                    whileHover={{ scale: 1.7 }}
                  />
                )}
              </div>

              {/* COLLECTION NUMBER */}

              <motion.span
                animate={{
                  color:
                    activeIndex === index
                      ? "#F5DFB2"
                      : "rgba(255,255,255,0.35)",
                  scale: activeIndex === index ? 1.12 : 1,
                }}
                transition={{ duration: 0.35 }}
                className="font-serif text-xs tracking-[0.2em]"
              >
                {panel.id}
              </motion.span>

              {/* ACTIVE GOLD UNDERLINE */}

              <motion.div
                initial={false}
                animate={{
                  width: activeIndex === index ? "100%" : "0%",
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 h-[1px] bg-gradient-to-r from-[#A77B42] via-[#F5DFB2] to-[#A77B42]"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* RIGHT COUNTER */}

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
          className="hidden min-w-[70px] flex-col items-end gap-1 sm:flex"
        >
          <span className="text-[8px] tracking-[0.3em] text-white/40">
            CURRENT
          </span>

          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-serif text-sm text-[#F5DFB2]"
          >
            {panels[activeIndex].id}
            <span className="text-white/30"> / 06</span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* GOLD PROGRESS LINE */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#A77B42] via-[#F5DFB2] to-[#A77B42] shadow-[0_0_8px_rgba(245,223,178,0.4)]"
          animate={{
            width: `${((activeIndex + 1) / panels.length) * 100}%`,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.footer>
  );
};

export default FooterNav;
