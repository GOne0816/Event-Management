import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateEvent = () => {
  const [data, setData] = useState('0');

  return (
    <div className="flex justify-center items-center flex-col gap-8 w-full min-h-screen bg-gradient-to-b from-emerald-400 to-blue-400 p-4">
      <motion.img
        className="w-40 h-40 object-cover rounded-full shadow-lg"
        src="https://c3.ttcache.com/thumbnail/VJFBq965yNr/288x162/5_240.jpg"
        alt="Event Avatar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-5xl font-semibold font-serif text-pink-700"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Chut Ka Rakshak Jagjeevan
      </motion.h1>
      <motion.p
        className="font-bold text-right text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        made by <span className="font-serif font-normal">hujaifa</span>
      </motion.p>

      <div className="w-full max-w-md p-8 rounded-xl text-center flex flex-col gap-6 shadow-2xl bg-indigo-500 transition-transform transform hover:scale-105 hover:shadow-3xl">
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          How much you are chut ka pyasa?
        </motion.h1>
        <motion.h2
          className="text-4xl font-semibold text-yellow-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {data}
        </motion.h2>
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <button
            onClick={() => setData('100%')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg  text-2xl shadow-lg transform transition-transform hover:scale-110 focus:ring-4 focus:ring-emerald-300"
          >
            Calculate
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateEvent;
