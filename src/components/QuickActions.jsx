import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { div } from "motion/react-m";

const QuickActions = ({ panels, activeIndex, scrollToPanel }) => {
  return (
    <div>
      {/* MOBILE QUICK ACTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-[76px] left-0 z-40 flex w-full items-center justify-between px-6 md:hidden"
      >
        {/* PREVIOUS */}
        <motion.button
          initial={{ opacity: 0, x: -30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => scrollToPanel(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous collection"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A77B42]/40 bg-[#050810]/80 text-[#F5DFB2] backdrop-blur-md transition-all hover:border-[#F5DFB2] disabled:opacity-20"
        >
          <ArrowLeft size={17} />
        </motion.button>

        {/* NEXT */}
        <motion.button
          initial={{ opacity: 0, x: 30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.6,
            delay: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => scrollToPanel(activeIndex + 1)}
          disabled={activeIndex === panels.length - 1}
          aria-label="Next collection"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A77B42]/40 bg-[#050810]/80 text-[#F5DFB2] backdrop-blur-md transition-all hover:border-[#F5DFB2] disabled:opacity-20"
        >
          <ArrowRight size={17} />
        </motion.button>
      </motion.div>

      {/* detskop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="pointer-events-none fixed inset-y-0 left-0 right-0 z-40 hidden items-center justify-between px-4 md:flex lg:px-8"
      >
        {/* PREVIOUS BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: -40, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.12, x: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => scrollToPanel(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous collection"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#A77B42]/40 bg-[#050810]/60 text-[#F5DFB2] shadow-[0_0_15px_rgba(167,123,66,0.08)] backdrop-blur-md transition-all duration-300 hover:border-[#F5DFB2] hover:bg-[#A77B42]/20 hover:shadow-[0_0_18px_rgba(245,223,178,0.2)] disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </motion.button>

        {/* NEXT BUTTON */}
        <motion.button
          initial={{ opacity: 0, x: 40, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.12, x: 3 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.7,
            delay: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => scrollToPanel(activeIndex + 1)}
          disabled={activeIndex === panels.length - 1}
          aria-label="Next collection"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#A77B42]/40 bg-[#050810]/60 text-[#F5DFB2] shadow-[0_0_15px_rgba(167,123,66,0.08)] backdrop-blur-md transition-all duration-300 hover:border-[#F5DFB2] hover:bg-[#A77B42]/20 hover:shadow-[0_0_18px_rgba(245,223,178,0.2)] disabled:cursor-not-allowed disabled:opacity-20"
        >
          <ArrowRight size={18} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default QuickActions;
