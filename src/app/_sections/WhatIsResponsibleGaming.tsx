'use client'
import { cn } from "@/lib/utils"
import { SectionType } from "../page"
import { 
  Gauge,
  Dice5,
  Coffee,
  LifeBuoy,
} from "lucide-react"
import Picture from "@/../public/pic1.webp"
import Image from "next/image"
import { motion } from "framer-motion"

const responsibleGamingPoints = [
  { text: <>Setting personal limits on time, money, and frequency</>, icon: Gauge },
  { text: <>Understanding that games are based on chance</>, icon: Dice5 },
  { text: <>Knowing when to take a break</>, icon: Coffee },
  { text: <>Making use of support resources when needed</>, icon: LifeBuoy }
]

export default function WhatIsResponsibleGaming({ sectionClass }: SectionType) {


  const classbreakpoints = {
    // sm starts with 640px
    sm: {
    },

    // md starts with 768px
    md: {
    },

    // lg starts with 1024px
    lg: {
    },
    
    // xl starts with 1280px
    xl: {
      points: "xl:flex-row xl:items-center gap-12",
    },
  }

  const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
  }

  return (
    <motion.section 
      className={cn(sectionClass, "flex items-center pt-8")} id="what-is-responsible-gaming"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-center">

        <motion.h1 
          className="text-3xl xl:text-5xl font-bold"
          variants={fadeDown}
        >
          What is Responsible Gaming?
        </motion.h1>
        <motion.p
          variants={fadeDown}
          transition={{ delay: 1.2 }}
          className="text-slate-500 dark:text-slate-300 mt-2 text-justify"
        >
            Responsible gaming means playing for fun with awareness, balance, and self-control.
        </motion.p>

        <div className={cn("flex flex-col gap-8 mt-8", classbreakpoints.xl.points)}>
          <motion.div 
            className="flex-1 space-y-6"
            variants={fadeLeft}
            transition={{ delay: 0.4 }}
          >

            <p className="text-slate-500 dark:text-slate-300 text-justify">At HappyBingo, we believe gaming should be safe and enjoyable. That’s why we promote habits that help you stay in control of your time, spending, and emotions while playing e‑bingo or slots.</p>

            <p className="text-slate-500 dark:text-slate-300 my-8">Responsible gaming is about:</p>

            <ul>
              {responsibleGamingPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="text-slate-500 dark:text-slate-300 mb-4 flex items-center"
                >
                  <point.icon className="w-6 h-6 text-brand mt-1 mr-4 shrink-0" />
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 dark:text-slate-300 mt-8">
              It’s not about stopping play completely, it's about keeping the fun in and the pressure out.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeRight}
            transition={{ delay: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src={Picture}
              alt="Responsible Gaming"
              className="w-full h-auto rounded-md object-contain"
              priority
            />
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.8 }}
          className="italic text-slate-500 dark:text-slate-300 text-center my-12"
        >“Play smart, know your limits, and enjoy the game for what it is.”</motion.p>
      </div>
    </motion.section>
  )
}
