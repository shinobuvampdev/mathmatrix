import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Product() {
  console.log("Working");
  return (
    <>
      <Navbar />
      <div className="scroll-mt-20 h-auto flex-col mt-25 ml-10">
        <h1 className="text-4xl mt-30">Our Products:</h1>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-sm mt-10 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all"
        >
          {/* Thumbnail / App Image */}
          <img
            className="w-full h-48 object-cover"
            src="assets/ProductPage/android-chrome-512x512.png" // replace with your app screenshot
            alt="ValoUp App Preview"
          />

          {/* Card Content */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              ValoUp: Lineups for Valorant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              A utility app that helps Valorant players master lineups with
              ease. Explore maps, agent-specific lineups, and boost your
              gameplay strategy.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <Link
                to="/valoup/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
              >
                View Privacy Policy
              </Link>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
