"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { basePath } from "../basePath";

const images = [
  "/images/pangasinan-overview.jpg",
  "/images/hundred-islands.jpg",
  "/images/bolinao-lighthouse.jpg",
  "/images/balungao-hotspring.jpg",
].map((src) => `${basePath}${src}`);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-[var(--sand)] text-center py-32 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2 },
              scale: { duration: 5, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[var(--tide)]/40" />
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Pangasinan Heritage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-[var(--sand)]/80 mt-4 max-w-xl mx-auto"
        >
          Explore the province&apos;s most iconic natural wonders and historic
          landmarks — where the tide has shaped both land and legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          
          <a
          href="#discover"
          className="inline-block mt-8 bg-[var(--clay)] text-white font-semibold px-7 py-3 rounded-full hover:brightness-110 transition"
        >
          Discover All Sites
        </a>
        </motion.div>
      </div>
    </section>
  );
}