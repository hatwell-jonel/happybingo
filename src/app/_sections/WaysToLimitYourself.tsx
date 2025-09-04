'use client'
import { cn } from "@/lib/utils";
import { SectionType } from "../page";
import { motion } from "framer-motion"

const cardContents = [
  {
    title: "Decide Your Budget",
    subTitle: "Set up a “Gaming Wallet” with a fixed amount:",
    adviceList: [
      <>Transfer only your <b>play budget</b> to a secondary e-wallet (like Maya or GCash sub-wallet).</>,
      <>Once it's gone, it’s over for the day.</>,
    ]
  },
  {
    title: "Set a Limit",
    subTitle: "Before You Log In:",
    adviceList: [
      <>Set a specific amount (e.g. PHP 1000 per session).</>,
      <><b>Never chase losses.</b> Once your limit is reached, log out.</>
    ]
  },
  {
    title: "Use a Timer",
    subTitle: "When playing:",
    adviceList: [
      <>Set your phone alarm for 30–60 minutes.</>,
      <>Treat breaks as <b>non-negotiable.</b> Walk around, drink water, clear your head.</>,
    ]
  },
  {
    title: "Schedule “Game Days”",
    subTitle: "Play only on your designated “Game Days”:",
    adviceList: [
      <>For example: “I’ll only play Saturdays and Wednesdays.”</>,
      <>Stick to these <b>self-set schedules.</b></>
    ]
  },
  {
    title: "Keep A Record",
    subTitle: "Track Your Wins and Losses:",
    adviceList: [
      <>Use a simple Notes app or spreadsheet."</>,
      <><b>Awareness = control.</b> You’ll start seeing patterns in your behavior.</>
    ]
  },
  {
    title: "Know When to Stop",
    subTitle: "Help is available:",
    adviceList: [
      <>Call PAGCOR’s Hotline (02)8522-0299 local 5021"</>,
      <><b>Apply for Self-Exclusion.</b> Message us or email PAGCOR at ResponsibleGaming@pagcor.ph"</>
    ]
  },
]

export default  function WaysToLimitYourself({ sectionClass }: SectionType) {
  return (
    <motion.section 
      className={cn(sectionClass)} 
      id="ways-to-limit-yourself"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}

    >
      <div className="container-center">

        <div className="text-center max-w-2xl mx-auto"> 
          <h2 className="text-[#A15C07] dark:text-brand text-lg font-semibold ">How to Set Your Own Limits When Playing</h2>
          <p className="text-4xl font-bold my-4">“You are your own best safety net.”</p>
          <p className="text-lg text-slate-600 dark:text-slate-400">Ways to Limit Yourself:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-16">
          {
            cardContents.map((cardContent, index) => {
              return (
                <div className="shadow-md rounded-md py-8 px-6 sm:px-8  relative bg-white dark:bg-gray-900 dark:border max-w-[420px] mx-auto" key={index}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full border bg-white dark:bg-gray-900 text-foreground font-bold shadow text-2xl ">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-center">{cardContent.title}</h3>
                    <p className="text-gray-600 dark:text-slate-200 text-sm mt-2 text-center leading-relaxed">{cardContent.subTitle}</p>

                    <ul className="text-gray-600 dark:text-slate-300 text-sm mt-5 space-y-2 list-disc list-inside text-left">
                      {
                        cardContent.adviceList.map((advice, index) => {
                          return (
                            <li className="text-center" key={index}>
                              {advice}
                            </li>
                          )
                        })
                      }
                    </ul>
                </div>
              )
            })
          }
        </div>

      </div>
    </motion.section>
  )
}