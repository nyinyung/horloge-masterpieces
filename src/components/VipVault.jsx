import React from "react";
import { motion, AnimatePresence } from "motion/react";

import WatchDetailModal from "./WatchDetailModal";

const VipVault = ({ watches, selectedWatch, setSelectedWatch }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
      className="relative z-10 mx-auto flex h-dvh w-full max-w-6xl flex-col justify-center overflow-hidden px-3 pt-24 pb-24 sm:pt-28 sm:pb-28 md:px-8 md:pt-32 md:pb-28"
    >
      {/* HEADER */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="mb-[clamp(8px,2vh,18px)] shrink-0 text-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, letterSpacing: "0.15em" },
            visible: { opacity: 1, letterSpacing: "0.4em" },
          }}
          transition={{ duration: 1 }}
          className="text-[clamp(7px,1vw,10px)] tracking-[0.4em] text-[#A77B42]"
        >
          THE COMPLETE COLLECTION
        </motion.p>

        <motion.h2
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              scale: 0.95,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-1 font-serif text-[clamp(25px,5vw,52px)] leading-tight text-[#F5DFB2]"
        >
          The VIP Vault
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mt-1 text-[clamp(8px,1.3vw,12px)] text-white/60"
        >
          Compare our exclusive timepiece collections.
        </motion.p>
      </motion.div>

      {/* AMBIENT GLOW */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,123,66,0.07),transparent_65%)]"
      />

      {/* WATCH GRID */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:grid-cols-4 md:grid-rows-1 md:gap-4"
      >
        {watches.slice(0, 8).map((item, index) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: {
                opacity: 0,
                y: 45,
                scale: 0.92,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
              borderColor: "rgba(232,201,142,0.55)",
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            className="group relative flex min-h-0 flex-col justify-between overflow-hidden border border-[#A77B42]/20 bg-gradient-to-b from-[#15191D] via-[#0C1015] to-[#080B10] p-2 sm:p-3 md:p-3.5"
          >
            {/* TOP GOLD LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#E8C98E] to-transparent"
            />

            {/* CARD HEADER */}
            <div className="flex shrink-0 items-center justify-between">
              <span className="font-serif text-[clamp(6px,0.8vw,9px)] tracking-[0.2em] text-[#A77B42]/70">
                COLLECTION
              </span>

              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.08,
                }}
                className="font-serif text-[9px] text-[#A77B42]/60"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </div>

            {/* IMAGE AREA */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden py-1">
              {/* AMBIENT LIGHT */}
              <motion.div
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  opacity: [0.35, 0.7, 0.35],
                }}
                transition={{
                  duration: 6 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="absolute aspect-square w-2/3 rounded-full bg-[#B18A50]/10 blur-2xl"
              />

              {/* WATCH IMAGE */}
              <motion.img
                src={item.image}
                alt={item.name}
                loading="lazy"
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  y: 25,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: -2,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* DETAILS */}
            <div className="shrink-0">
              <div className="mb-2 h-px bg-gradient-to-r from-transparent via-[#A77B42]/40 to-transparent" />

              <h3 className="line-clamp-1 font-serif text-[clamp(10px,1.3vw,14px)] text-[#F5DFB2]">
                {item.name}
              </h3>

              <p className="mt-1 truncate text-[clamp(7px,0.9vw,9px)] tracking-[0.15em] text-[#A77B42]">
                {item.reference}
              </p>

              {/* BUTTON */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                onClick={() => setSelectedWatch(item)}
                className="group/btn relative mt-2 w-full overflow-hidden border border-[#A77B42]/40 py-[clamp(5px,1vh,9px)] text-[clamp(7px,0.8vw,9px)] tracking-[0.2em] text-[#F5DFB2] transition-colors duration-500 hover:border-[#E8C98E]"
              >
                <motion.span
                  className="absolute inset-0 origin-left bg-gradient-to-r from-[#A77B42] to-[#E8C98E]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10 flex items-center justify-center gap-1 transition-colors duration-500 group-hover/btn:text-[#080B10]">
                  DETAILS
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* BOTTOM GOLD ACCENT */}
            <motion.div
              initial={{ width: "0%" }}
              whileHover={{ width: "50%" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#E8C98E]"
            />
          </motion.div>
        ))}
      </motion.div>

      <WatchDetailModal
        selectedWatch={selectedWatch}
        setSelectedWatch={setSelectedWatch}
      />

      {/* FOOTER */}
      <motion.p
        initial={{
          opacity: 0,
          y: 15,
          filter: "blur(6px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-[clamp(7px,1.5vh,14px)] shrink-0 text-center text-[clamp(7px,0.8vw,9px)] tracking-[0.25em] text-white/40"
      >
        PRIVATE CONSULTATION · HORLOGE
      </motion.p>
    </motion.div>
  );
};

export default VipVault;
