"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2s splash
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100, // moves up fast
              transition: { type: "spring", stiffness: 500, damping: 60 } // snappy spring
            }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <p className="ml-3 mt-4 text-lg font-bold textforeground">Loading...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  )
}
