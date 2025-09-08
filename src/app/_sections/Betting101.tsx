'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { SectionType } from "../page";
import Mobile1 from "@/../public/mobile1.webp"
import Mobile2 from "@/../public/mobile2.webp"
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

export default function Betting101({ sectionClass }: SectionType) {

  const classbreakpoints = {
    // sm starts with 640px
    sm: {
    },

    // md starts with 768px
    md: {
      box: {
        container1: "md:flex-row",
        container2: "md:flex-row-reverse md:mt-40",
        mobile1: "md:flex md:justify-center md:items-center md:rotate-[15deg]",
        mobile2: "md:flex md:justify-center md:-left-[110px] md:items-center md:-rotate-[15deg]",
      }
    },

    // lg starts with 1024px
    lg: {
    },
    
    // xl starts with 1280px
    xl: {
      box: {
        container1: "xl:mt-32",
        container2: "xl:flex-row-reverse",
        title: "xl:text-2xl",
        mobile1: "xl:absolute xl:w-[260px] xl:top-[-50px] xl:translate-x-[20%] z-10 xl:rotate-[15deg]",
        mobile2: "xl:absolute xl:w-[280px] xl:top-[-40px] md:-left-[0] xl:translate-x-1/2 z-10 xl:-rotate-[15deg]",
      },
    },
  }

  return (
    <motion.section 
      className={cn(sectionClass, "pt-10 pb-16" )}
      id="betting-101"
      initial={{ opacity: 0, y: 40 }}        
      whileInView={{ opacity: 1, y: 0 }}    
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.3, ease: "easeIn" }}
    >
      <div className="container-center">
        <h2  className="text-2xl xl:text-3xl font-bold text-center">Betting 101 : A Simple Guide for Beginners</h2>
        <p className="text-center text-md textforeground mt-5">Play smart. Have fun. Stay in control.</p>

        <div className={cn(
          "relative rounded-lg flex flex-col bg-[#F9FAFB] dark:bg-gray-900 mt-16",
          classbreakpoints.md.box.container1,
          classbreakpoints.xl.box.container1
        )}>

          <div className="flex-[1.5] p-8">
            <h3 className={cn("text-2xl mb-8 font-bold xl:text-xl xl:mb-4", classbreakpoints.xl.box.title)}>Online Slots – What You Should Know</h3>
            <p className="textforeground mb-4 text-xl font-semibold">What are slots?</p>
            <p className="textforeground text-[.9rem]">Online slots are digital games where you spin reels to try and match symbols. Every spin is random; there's no trick or pattern.</p>

            <p className="textforeground my-4 font-semibold">Tips for Playing Slots:</p>

            <ol className="list-decimal list-inside space-y-1 text-[.8rem] textforeground">
              <li> 
                <span className="font-bold">Set a budget before playing </span> <br />
                <span className="ms-4">- Decide how much you're okay to spend. Once it's gone, stop.</span>
              </li>

              <li> 
                <span className="font-bold"> Try the free version first</span> <br/>
                <span className="ms-4">- Most games have a “demo mode”  great for practice!</span>
              </li>

              <li>
                <span className="font-bold"> Avoid fast, repeated spins </span> <br />
                <span className="ms-4">- Take your time. Rushing makes it easier to overspend.</span>
              </li>

              <li>
                <span className="font-bold">Know when to stop </span> <br />
                <span className="ms-4">- If you're not having fun anymore or trying to win back losses, it’s time to take a break</span>
              </li>
            </ol>
          </div>

          <div className="flex-[1] p-8 pt-0 ">
            <Image
              src={Mobile1}
              alt="Responsible Gaming"
              className={cn(
                "w-[200px] h-auto rounded-md object-contain mx-auto", 
                classbreakpoints.md.box.mobile1,
                classbreakpoints.xl.box.mobile1
              )}
              priority
            />
          </div>

        </div>


        <div 
          className={cn(
            "relative rounded-lg flex flex-col bg-[#F9FAFB] dark:bg-gray-900  mt-16",
            classbreakpoints.md.box.container2,
          )}
        >
          <div className="flex-[1] p-8">
            <h3 className={cn(
              "text-2xl mb-8 font-bold xl:text-xl xl:mb-4", 
              classbreakpoints.xl.box.title)}>e-Bingo – What You Should Know</h3>

            <p className="textforeground mb-4 text-xl font-semibold">What is e-Bingo?</p>

            <p className="textforeground text-[.9rem]">It’s like classic bingo but played on a screen. Numbers are drawn automatically, and you win if your card completes a pattern.</p>

            <p className="textforeground my-4 font-semibold">Tips for Playing e-Bingo:</p>

            <ol className="list-decimal list-inside space-y-3 text-[.8rem] textforeground">
              <li>
                <span className="font-bold"> Limit how many cards you play </span><br />
                <span className="ms-4">- One or two cards is enough to enjoy the game and stay focused.</span>
              </li>

              <li> 
                <span className="font-bold"> Stick to your budget </span> <br/>
                <span className="ms-4">- Don’t keep adding money just to play more. Decide on a daily or weekly limit.</span>
              </li>

              <li>
                <span className="font-bold">Play when you’re relaxed </span><br />
                <span className="ms-4">- Avoid playing when you’re tired, upset, or distracted.</span>
              </li>

              <li>
                <span className="font-bold">Don’t chase jackpots </span><br />
                <span className="ms-4">- Win or lose, enjoy the experience  not just the prize.</span>
              </li>
            </ol>

          </div>

          <div className="flex-[1] p-8 pt-0">
            <Image
              src={Mobile2}
              alt="Responsible Gaming"
              className={cn(
                "w-[200px] h-auto rounded-md object-contain mx-auto", 
                classbreakpoints.md.box.mobile2,
                classbreakpoints.xl.box.mobile2,
              )}
              priority
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-8 xl:mt-32">
          <div className="flex-1 bg-[#F9FAFB] dark:bg-gray-900 p-8 rounded-md">
            <h3 className="text-xl font-bold mb-4">Quick Self-Check</h3>

            <p className="font-semibold">Before or after a session, ask yourself:</p>

            <ul className="list-disc list-inside space-y-1 text-[.8rem] textforeground">
              <li>Have I spent more than I planned?</li>
              <li>Am I still enjoying the game?</li>
              <li>Did I take any breaks?</li>
            </ul>

            <p className="text-sm mt-4 textforeground">If any answer makes you pause take a step back.</p>
          </div>

          <div className="flex-1 bg-[#F9FAFB] dark:bg-gray-900 p-8 rounded-md">
            <h3 className="text-xl font-bold">Remember</h3>

            <ul className="space-y-4 mt-4">
              <li className="flex items-center gap-2 text-[.8rem] textforeground">
                <CircleCheckBig className="text-green-500" size={18} />
                <span>Gambling should be fun, not stressful</span>
              </li>
              <li className="flex items-center gap-2 text-[.8rem] textforeground">
                <CircleCheckBig className="text-green-500" size={18} />
                <span>Always play within your means</span>
              </li>
              <li className="flex items-center gap-2 text-[.8rem] textforeground">
                <CircleCheckBig className="text-green-500" size={18} />
                <span>It’s okay to take breaks — or stop completely if needed</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  )
}