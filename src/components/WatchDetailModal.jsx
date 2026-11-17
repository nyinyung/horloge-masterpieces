import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

const WatchDetailModal = ({ selectedWatch, setSelectedWatch }) => {
  return (
    <AnimatePresence mode="wait">
      {selectedWatch && (
        <motion.div
          key="watch-detail"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[100] h-[100dvh] w-full overflow-hidden bg-[#050810]"
        >
          {/* AMBIENT BACKGROUND */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,123,66,0.12),transparent_65%)]"
          />

          {/* HEADER - FIXED */}
          <div className="pointer-events-none absolute inset-x-0 top-[60px] z-30 px-3 pt-[max(1.5rem,env(safe-area-inset-top))] md:px-8 md:pt-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ x: -4, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setSelectedWatch(null)}
              className="pointer-events-auto group inline-flex min-h-10 items-center gap-2.5 border border-[#A77B42]/50 bg-[#050810]/80 px-4 py-2.5 text-[9px] font-medium tracking-[0.2em] text-[#F5DFB2] backdrop-blur-xl transition-all duration-300 hover:border-[#E8C98E] hover:bg-[#A77B42]/15 sm:px-5"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span>BACK TO VAULT</span>
            </motion.button>
          </div>

          {/* MAIN SCROLL AREA */}
          <div
            className="
          absolute inset-0 z-10
          overflow-x-hidden overflow-y-auto
          overscroll-contain
          px-3 pt-24 pb-24
          sm:px-6 sm:pt-28 sm:pb-28
          md:px-8 md:pt-32 md:pb-28
        "
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(167,123,66,0.3) transparent",
            }}
          >
            <div
              className="
          mx-auto grid w-full max-w-7xl
          grid-cols-1 items-start gap-5
          md:min-h-full md:grid-cols-2
          md:items-center md:gap-10
          lg:gap-16
        "
            >
              {/* WATCH IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
              relative flex w-full
              h-[clamp(150px,24vh,280px)]
              items-center justify-center
              md:h-[min(55vh,560px)]
            "
              >
                {/* IMAGE GLOW */}
                <div className="absolute h-2/3 w-2/3 rounded-full bg-[#A77B42]/10 blur-[60px]" />

                {/* WATCH IMAGE */}
                <motion.img
                  src={selectedWatch.image}
                  alt={selectedWatch.name}
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.6 }}
                  className="
                relative z-10
                h-full max-w-full
                object-contain
                drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]
              "
                />
              </motion.div>

              {/* WATCH INFORMATION */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex min-w-0 flex-col justify-center py-1 md:py-4"
              >
                {/* CATEGORY */}
                <p className="text-[8px] tracking-[0.35em] text-[#A77B42] md:text-[10px]">
                  {selectedWatch.category}
                </p>

                {/* NAME */}
                <h1
                  className="
              mt-1.5 break-words
              font-serif text-2xl leading-tight
              text-[#F5DFB2]
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
                >
                  {selectedWatch.name}
                </h1>

                {/* SUBTITLE */}
                <p className="mt-1.5 break-words text-[8px] tracking-[0.25em] text-[#B89562] sm:text-[9px]">
                  {selectedWatch.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p
                  className="
              mt-3 max-w-lg
              font-serif text-[11px]
              leading-[1.7] text-white/55
              sm:text-xs md:mt-4 md:text-sm
            "
                >
                  {selectedWatch.description}
                </p>

                {/* PRICE */}
                <div className="mt-4 border-y border-[#A77B42]/25 py-3 md:mt-5 md:py-4">
                  <p className="text-[8px] tracking-[0.3em] text-white/40">
                    EXCLUSIVE PRICE
                  </p>

                  <p className="mt-1 break-words font-serif text-xl text-[#F5DFB2] sm:text-2xl md:text-3xl">
                    {selectedWatch.price}
                  </p>

                  <p className="mt-1 break-words text-[8px] tracking-[0.15em] text-[#A77B42]">
                    REFERENCE · {selectedWatch.reference}
                  </p>
                </div>

                {/* SPECIFICATIONS */}
                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-5 md:mt-5 md:gap-y-4">
                  {[
                    ["MOVEMENT", selectedWatch.movement],
                    ["CASE", selectedWatch.case],
                    ["CRYSTAL", selectedWatch.crystal],
                    ["WATER RESISTANCE", selectedWatch.waterResistance],
                    ["POWER RESERVE", selectedWatch.powerReserve],
                    ["STRAP", selectedWatch.strap],
                  ].map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="min-w-0 border-l border-[#A77B42]/40 pl-2.5"
                    >
                      <p className="text-[7px] tracking-[0.12em] text-[#A77B42] md:text-[8px]">
                        {label}
                      </p>

                      <p className="mt-1 break-words text-[10px] leading-relaxed text-[#F5DFB2]/85 md:text-xs">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* SIGNATURE FEATURES */}
                {selectedWatch.features?.length > 0 && (
                  <div className="mt-4 md:mt-5">
                    <p className="mb-2.5 text-[8px] tracking-[0.3em] text-[#A77B42]">
                      SIGNATURE FEATURES
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {selectedWatch.features.map((feature, index) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.06,
                          }}
                          className="
                        max-w-full break-words
                        border border-[#A77B42]/25
                        px-2 py-1.5
                        text-[7px] tracking-wider
                        text-white/60
                        md:text-[8px]
                      "
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* EDITION */}
                {selectedWatch.edition && (
                  <p className="mt-4 break-words text-[8px] tracking-[0.18em] text-[#E8C98E] md:mt-5 md:text-[9px]">
                    EXCLUSIVE EDITION · {selectedWatch.edition}
                  </p>
                )}
              </motion.div>
            </div>
          </div>

          {/* FOOTER - FIXED */}
          <div
            className="
        pointer-events-none
        absolute inset-x-0 bottom-0 z-30
        flex items-center justify-center
        border-t border-white/5
        bg-[#050810]/90
        px-4 py-3
        pb-[max(0.75rem,env(safe-area-inset-bottom))]
        backdrop-blur-xl
      "
          >
            <p className="text-center text-[7px] tracking-[0.3em] text-white/25">
              HORLOGE · PRIVATE COLLECTION
            </p>
          </div>

          {/* DECORATIVE NUMBER */}
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.7,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
          pointer-events-none
          absolute bottom-16 right-2 z-0
          select-none font-serif
          text-[7rem] leading-none
          tracking-tighter text-[#A77B42]/10
          sm:right-6 sm:text-[9rem]
          md:bottom-20 md:right-10 md:text-[10rem]
          lg:text-[12rem]
        "
          >
            {selectedWatch.id}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WatchDetailModal;
