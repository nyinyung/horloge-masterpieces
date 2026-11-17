import React from "react";
import { motion } from "motion/react";

const HeroPanel = ({ watches, scrollToPanel, index}) => {
  return (
    <div className="relative z-10 h-full w-full overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute left-1/2 top-1/2 hidden h-[75vw] w-[75vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A77B42]/10 md:block"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-1/2 top-1/2 h-[65vw] w-[65vw] max-h-[500px] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A77B42]/10 md:h-[55vw] md:w-[55vw]"
        />
      </div>
      {/* THREE WATCHES - FLOATING CINEMATIC COMPOSITION */}

<div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">

  {/* WATCH 01 - FAR LEFT */}
  <div className="absolute left-[8%] bottom-[10%] w-[24vw] h-[20vh] sm:left-[15%] sm:w-[21vw] sm:h-[30vh]">
    <motion.div
      initial={{ opacity: 0, x: -80, rotate: -20, scale: 0.8 }}
      whileInView={{ opacity: 0.65, x: 0, rotate: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      <motion.img
        src={watches[2].image}
        alt="Classic Watch"
        animate={{
          x: ["-2%", "8%", "-2%"],
          y: [0, 18, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-[20vh] sm:h-[30vh] object-contain"
      />
    </motion.div>
  </div>

{/* WATCH 02 - FAR RIGHT */}
<div className="absolute right-[2%] top-[3%] w-[32vw] h-[22vh] sm:right-[6%] sm:top-[8%] sm:w-[25vw] sm:h-[36vh] z-30">
  <motion.div
    initial={{ opacity: 0, x: 60, y: -30, scale: 0.7 }}
    whileInView={{ opacity: 0.8, x: 0, y: 0, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 1.7, delay: 0.6 }}
  >
    <motion.img
      src={watches[1].image}
      alt="Chronograph Watch"
      animate={{
        x: ["0%", "-5%", "0%"],
        y: [0, -12, 0],
        rotate: [10, 5, 10],
      }}
      transition={{
        duration: 17,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full h-[22vh] sm:h-[36vh] object-contain"
    />
  </motion.div>
</div>

  {/* WATCH 03 - FOREGROUND */}
  <div className="absolute left-[3%] top-[10%] w-[27vw] h-[24vh] sm:left-[6%] sm:top-[8%] sm:w-[25vw] sm:h-[36vh] md:bottom-[4%] md:left-[6%] z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 80 }}
      whileInView={{ opacity: 0.8, scale: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.8, delay: 0.9 }}
    >
      <motion.img
        src={watches[0].image}
        alt="Skeleton Watch"
        animate={{
          x: ["-4%", "5%", "-4%"],
          y: [0, -25, 0],
          rotate: [-12, -5, -12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-[24vh] sm:h-[36vh] object-contain"
      />
    </motion.div>
  </div>

</div>
      {/* MAIN TYPOGRAPHY */}
      <div className="absolute left-1/2 top-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 text-center">
        {/* SUBTITLE */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-7 text-[9px] font-medium uppercase tracking-[0.65em] text-[#C5A16E] md:mb-9 md:text-[11px]"
        >
          THE ART OF HOROLOGY
        </motion.p>

        {/* BEYOND */}

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <h1 className="font-serif text-[19vw] leading-[0.76] tracking-[-0.065em] text-[#F2E4C9] drop-shadow-[0_4px_25px_rgba(0,0,0,0.25)] md:text-[140px] lg:text-[160px]">
            BEYOND
          </h1>
        </motion.div>

        {/* TIME */}

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <h1 className="font-serif text-[19vw] leading-[0.76] tracking-[-0.065em] md:text-[140px] lg:text-[160px]">
            <span className="pr-3 font-light italic tracking-[-0.045em] text-[#C5A16E]">
              TIME.
            </span>
          </h1>
        </motion.div>

        {/* DECORATIVE LINE */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex items-center justify-center gap-4 md:mt-10"
        >
          <span className="h-px w-8 bg-[#A77B42]/60" />

          <span className="h-px w-8 bg-[#A77B42]/60" />
        </motion.div>
      </div>
      {/* BOTTOM ACTION */}
      <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-5 md:bottom-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <button
            type="button"
            onClick={() => scrollToPanel(index + 1)}
            className="group/btn relative mt-5 block overflow-hidden border border-[#B89562]/50 px-6 py-3 text-[9px] font-medium tracking-[0.25em] text-[#F0E1C3] transition-all duration-500 hover:border-[#B89562] lg:hidden md:mt-7 md:px-7 md:py-3.5"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#A77B42] to-[#E8C98E] transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />

            <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-[#080A0E]">
              EXPLORE COLLECTION
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="hidden items-center gap-4 lg:flex"
        >
          <span className="h-px w-8 bg-[#C5A16E]/40" />

          <span className="text-[9px] font-light uppercase tracking-[0.4em] text-[#F2E4C9]/65">
            FOUR COLLECTIONS · ONE VISION
          </span>

          <span className="h-px w-8 bg-[#C5A16E]/40" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPanel;
