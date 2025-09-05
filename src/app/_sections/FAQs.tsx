'use client';

import { cn } from "@/lib/utils";
import { SectionType } from "../page";
import { Dices, Gamepad2, ScanFace, Smile, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { show } from '@intercom/messenger-js-sdk'

const data = [
  {
    question: "How old must I be to play?",
    answer: <>You must be <b>at least 21 years old</b>, per PAGCOR law. IDs are required for verification.</>,
    icon: ScanFace
  },
  {
    question: "Is online gambling legal in the Philippines?",
    answer: <>Yes, but only on <b>PAGCOR-licensed platforms</b> like HappyBingo.</>,
    icon: Gamepad2 
  },
  {
    question: "Can I control my spending if the site has no built-in tools?",
    answer: <>Yes! Check our article: How to Set Your Own Limits While Playing</>,
    icon: Wrench
  },
  {
    question: "Is e-Bingo easier to win than slots?",
    answer: <>Both are games of chance results are random. Never expect to win consistently. Keep it fun by playing only with what you’re willing to spend.</>,
    icon: Dices
  },
  {
    question: "Can I take a break or self-exclude?",
    answer: <>Yes, you may request support via our help desk or join PAGCOR’s national self-exclusion program.</>,
    icon: Smile
  }
]


export default function FAQs({ sectionClass }: SectionType) {
  return (
    <motion.section 
      className={cn("scroll-mt-16")} id="faqs"
      variants={{
          hidden: { opacity: 0 },
          show: { 
            opacity: 1, 
            transition: { staggerChildren: 0.2, duration: 1.3, ease: "easeIn" } 
          }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container-center">
        <h3 className="text-2xl xl:text-3xl mb-8 font-bold xl:mb-4">Frequently Asked Questions</h3>

        <motion.div 
          className="mt-10 md:mt-15 xl:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20"
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" } }
          }}
        >

          {
            data.map((item, index) => {
              return (
                <div className="" key={index}>
                  <div className="border-2 p-2 rounded-md inline-block"><item.icon size={21} /> </div>
                  <p className="font-bold text-md mb-2">{item.question}</p>
                  <p className="textforeground">{item.answer}</p>
                </div>
              )
            })
          }
        </motion.div>


        <div className="bg-[#F9FAFB] dark:bg-gray-900 rounded-lg p-8 my-16 xl:my-10 xl:flex xl:justify-between xl:items-center">

          <div>
            <p className="font-bold">Still have questions?</p>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          </div>

          <button className="btn bg-brand mt-4 p-2 rounded font-bold text-[#7A3E00] text-sm cursor-pointer max-w-[230px]" onClick={() => show()}>
              Get in Touch
          </button>
        </div>

      </div>
    </motion.section>
  )
}
