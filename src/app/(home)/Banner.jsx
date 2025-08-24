"use client";

import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Banner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Learn Anytime, Anywhere with Our LMS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto mb-6 text-lg md:text-xl opacity-90"
        >
          Explore courses, connect with top teachers, and level up your skills.
        </motion.p>

        {/* Advanced Search Bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto grid md:grid-cols-4 gap-2 bg-white rounded-full shadow-xl overflow-hidden border border-gray-200 p-2"
        >
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-3 text-gray-700 focus:outline-none rounded-full"
          />
          <input
            type="text"
            placeholder="Search teachers..."
            className="px-4 py-3 text-gray-700 focus:outline-none rounded-full"
          />
          <input
            type="text"
            placeholder="Subjects..."
            className="px-4 py-3 text-gray-700 focus:outline-none rounded-full"
          />
          <input
            type="text"
            placeholder="Location..."
            className="px-4 py-3 text-gray-700 focus:outline-none rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition">
            Get Started
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Our Courses */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((course) => (
            <motion.div
              key={course}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition border border-gray-100"
            >
              <div className="h-40 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">
                Course Title {course}
              </h3>
              <p className="text-gray-600 mb-4">
                A brief description of what this course offers to students.
              </p>
              <button className="text-indigo-600 font-semibold hover:underline">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Teachers (Slider/Pagination) */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Meet Our Teachers
        </h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((teacher) => (
            <motion.div
              key={teacher}
              whileHover={{ scale: 1.05 }}
              className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition border border-gray-100 flex-shrink-0"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-300 to-purple-400 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Teacher {teacher}</h3>
              <p className="text-gray-500 text-sm">Subject Expert</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {["Expert Teachers", "Flexible Learning", "Certifications"].map(
            (feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition border border-gray-100"
              >
                <div className="text-5xl mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  ⭐
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at lectus eget nulla.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map((faq) => (
            <div
              key={faq}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2">FAQ Question {faq}</h3>
              <p className="text-gray-600">
                This is the answer to the FAQ question {faq}. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
