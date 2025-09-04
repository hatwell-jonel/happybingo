'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Hero() {

  const classbreakpoints = {
    // sm starts with 640px
    sm: {
        iframe: "sm:h-[300px]" 
    },

    // md starts with 768px
    md: {
        findoutmore: "md:w-[150px]",
        iframe: "md:w-[86%] md:h-[400px]"
    },

    // lg starts with 1024px
    lg: {
        findoutmore: "lg:w-[200px]",
        iframe: "lg:w-[100%] lg:h-[500px]"
    },

    // xl starts with 1280px
    xl: {
        iframe: "xl:w-[85%] xl:h-[600px]" 
    },
  }

  return (
    <section className="min-h-screen" id="hero">


      
      <div className="container-center">
        
          <motion.p
            className="text-center text-4xl lg:text-5xl font-bold mt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >ENJOY THE GAME. STAY IN CONTROL</motion.p>
          <p className="text-center mt-5">We're committed to player protection and encourage everyone to set limits, <br /> take breaks, and play responsibly.</p>

          <div className="flex items-center justify-center mt-12">
            <Link 
              href="/#what-is-responsible-gaming" 
              className={cn(
                "w-full text-center btn py-3 px-3 btn-brand text-[#A15C07] font-semibold bg-brand rounded-md mx-auto inline-block", 
                classbreakpoints.md.findoutmore, 
                classbreakpoints.lg.findoutmore
              )}
            >
              Find Out More
            </Link>
          </div>

          <motion.div 
            className="aspect-w-16 aspect-h-12 mt-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .5}}
          >
            <iframe
              src="https://www.youtube.com/embed/xRaQYt9I3bY?autoplay=1&mute=1"
              title="YouTube video"
              className={cn(
                "w-full h-[190px] rounded-2xl mx-auto", 
                classbreakpoints.sm.iframe,
                classbreakpoints.md.iframe,
                classbreakpoints.lg.iframe,
                classbreakpoints.xl.iframe,
              )}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
      </div>
    </section>
  )
}