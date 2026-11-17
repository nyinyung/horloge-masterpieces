import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const WatchPanel = ({ watch, index, activeIndex, scrollToPanel }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.13,
            delayChildren: 0.15,
          },
        },
      }}
      animate={activeIndex === index ? "visible" : "hidden"}
      className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col justify-center px-6 py-4 md:grid md:grid-cols-2 md:items-center md:gap-10 md:px-14 lg:gap-16"
    >
      {/* WATCH INFORMATION */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -35,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="order-2 flex min-h-0 flex-col items-center text-center md:order-1 md:items-start md:text-left"
      >
        {/* COLLECTION LABEL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={activeIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px w-6 origin-left bg-[#B89562] md:w-8"
          />

          <span className="text-[8px] font-medium tracking-[0.35em] text-[#B89562] md:text-[9px] md:tracking-[0.4em]">
            EXCLUSIVE COLLECTION {watch.id}
          </span>
        </motion.div>

        {/* WATCH NAME */}
        <motion.h2
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mt-3 font-serif text-4xl font-normal leading-[1.05] tracking-[-0.035em] text-[#F0E1C3] sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl"
        >
          {watch.name}
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
              letterSpacing: "0.15em",
            },
            visible: {
              opacity: 1,
              y: 0,
              letterSpacing: "0.38em",
            },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-2 text-[8px] font-medium uppercase tracking-[0.3em] text-[#B89562] md:mt-3 md:text-[9px] md:tracking-[0.38em]"
        >
          {watch.subtitle}
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-5 line-clamp-2 max-w-md font-serif text-xs leading-[1.8] text-white/60 sm:line-clamp-3 md:mt-6 md:line-clamp-none md:text-sm md:leading-7"
        >
          {watch.description}
        </motion.p>

        {/* WATCH DETAILS */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-5 hidden w-full max-w-md grid-cols-2 border-y border-white/10 py-3.5 sm:grid md:mt-7 md:py-4"
        >
          <div>
            <span className="block text-[8px] tracking-[0.25em] text-[#B89562]">
              REFERENCE
            </span>

            <span className="mt-1.5 block font-serif text-sm tracking-wider text-[#F0E1C3]">
              {watch.reference}
            </span>
          </div>

          {watch.edition && (
            <div className="border-l border-white/10 pl-6">
              <span className="block text-[8px] tracking-[0.25em] text-[#B89562]">
                EDITION
              </span>

              <span className="mt-1.5 block font-serif text-sm tracking-wider text-[#F0E1C3]">
                {watch.edition}
              </span>
            </div>
          )}
        </motion.div>

        {/* ACTION BUTTON */}
        <motion.button
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
              scale: 0.96,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
            },
          }}
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.35 },
          }}
          whileTap={{ scale: 0.96 }}
          type="button"
          onClick={() => scrollToPanel(index + 1)}
          className="group/btn relative mt-5 flex items-center gap-5 overflow-hidden border border-[#B89562]/50 px-6 py-3 text-[9px] font-medium tracking-[0.25em] text-[#F0E1C3] transition-all duration-500 hover:border-[#B89562] md:mt-7 md:px-7 md:py-3.5"
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

          <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-[#080A0E]">
            DISCOVER NEXT
          </span>

          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="relative z-10 transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:text-[#080A0E]"
          />
        </motion.button>
      </motion.div>

      {/* WATCH IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
          x: 45,
          filter: "blur(15px)",
          rotate: (watch.rotate || 0) - 5,
        }}
        animate={
          activeIndex === index
            ? {
                opacity: 1,
                scale: 1,
                x: 0,
                filter: "blur(0px)",
                rotate: watch.rotate || 0,
              }
            : {
                opacity: 0,
                scale: 0.9,
                x: 25,
                filter: "blur(8px)",
                rotate: (watch.rotate || 0) - 5,
              }
        }
        whileInView={{
          opacity: activeIndex === index ? 1 : 0,
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative order-1 mb-2 flex h-[30vh] max-h-[250px] min-h-0 shrink-0 items-center justify-center sm:h-[34vh] sm:max-h-[290px] md:order-2 md:mb-0 md:h-[55vh] md:max-h-none lg:h-[62vh]"
      >
        {/* AMBIENT LIGHT */}
        <motion.div
          animate={
            activeIndex === index
              ? {
                  scale: [0.9, 1.12, 0.9],
                  opacity: [0.5, 0.85, 0.5],
                }
              : {
                  scale: 0.8,
                  opacity: 0,
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[55%] w-[55%] rounded-full bg-[#B89562]/[0.09] blur-[65px]"
        />

        {/* WATCH IMAGE */}
        <motion.img
          src={watch.image}
          alt={watch.name}
          animate={
            activeIndex === index
              ? {
                  y: [0, -9, 0],
                  scale: [1, 1.015, 1],
                }
              : {
                  y: 0,
                  scale: 0.96,
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.045,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] md:drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] lg:right-[-50px] lg:h-[75vh]"
        />
      </motion.div>
    </motion.div>
  );
};

export default WatchPanel;
