'use client';

import { cn } from "@/lib/utils";
import { SectionType } from "../page";
import Pagcor from "@/../public/pagcor-logo.png"
import TwentyOne from "@/../public/21.webp"
import Image from "next/image";
import Link from "next/link";
import Mobile3 from "@/../public/mobile3.webp"
import { motion } from "framer-motion"


export default function FairAndSafeGaming({ sectionClass }: SectionType) {
  return (
    <motion.section 
      className={cn(sectionClass)} id="fair-and-safe-gaming"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container-center">
        <h3 className={cn(
          "text-3xl mb-2 font-bold md:text-2xl text-center md:text-left"
        )}>Our Commitment to Fair & Safe Gaming</h3>

        <p className="text-center md:text-left textforeground">At HappyBingo, we care about your safety just as much as your enjoyment.</p>

        <div className="mt-6 flex flex-col md:flex-row gap-2">

          <div className="flex-[2]">

            <div className="flex flex-col md:flex-row gap-6">

              <div className="flex-1 grid gap-6">

                <div className="p-6 rounded-md bg-[#F9FAFB] dark:bg-gray-900">

                  <div className="flex gap-2">
                    <Image
                      src={Pagcor}
                      alt="Responsible Gaming"
                      className="w-[50px] h-auto rounded-full p-1 object-contain border bg-white dark:bg-gray-800"
                      priority
                    />
                    <Image
                      src={TwentyOne}
                      alt="Responsible Gaming"
                      className="w-[140px] h-auto rounded-md object-contain"
                      priority
                    />
                  </div>
                  
                  <p className="text-2xl font-bold my-4">Licensed by PAGCOR</p>

                  <p className="text-[.9rem] textforeground">We are proud to be officially licensed by PAGCOR (Philippine Amusement and Gaming Corporation), which means:</p>

                  <ul className="list-disc list-inside text-[.9rem] textforeground my-4">
                    <li>We follow all legal rules for online gaming in the Philippines.</li>
                    <li>Our games are tested for fairness.</li>
                    <li>Your data and money are safe with us.</li>
                  </ul>

                  <p className="textforeground text-[.9rem]">You can check our PAGCOR license details at the bottom of our site.</p>

                </div>

                <div className="p-6 rounded-md bg-[#F9FAFB] dark:bg-gray-900">
                  <p className="text-2xl font-bold mb-4">Self-Exclusion Option</p>

                  <p className="text-[.9rem] textforeground">If you ever feel like you need a break, you can join PAGCOR’s Self-Exclusion Program.</p>

                  <ul className="list-disc list-inside text-[.9rem] textforeground my-4">
                    <li>Choose how long to pause: 6 months, 1 year, or 5 years</li>
                    <li>You won’t be able to access any PAGCOR-licensed platforms, including HappyBingo</li>
                    <li>You’ll also stop receiving game promos and offers</li>
                  </ul>

                  <p>👉 Learn more or sign up here: <Link href="https://www.pagcor.ph/responsible-gaming/self-exclusion.php" target="_blank" className="text-blue-700 underline dark:text-white">https://www.pagcor.ph/responsible-gaming/self-exclusion.php</Link></p>
                
                  <p className="textforeground text-[.9rem] mt-5">Or ask our support team to help.</p>
                </div>

              </div>

              <div className="flex-1 grid gap-6">

                <div className="p-4 rounded-md bg-[#F9FAFB] dark:bg-gray-900">
                  <p className="text-2xl font-bold mb-2">You Must Be 21+</p>

                  <p className="text-[.9rem] textforeground">To play on HappyBingo, you must be 21 years old or older — this is required by law.</p>

                  <ul className="list-disc list-inside text-[.9rem] textforeground my-3">
                    <li>We verify your age using a valid government ID.</li>
                    <li>Accounts with underage players will be closed.</li>
                    <li>If you think someone is underage, please let us know.</li>
                  </ul>
                  
                </div>

                <div className="p-4 rounded-md bg-[#F9FAFB] dark:bg-gray-900">

                  <p className="text-2xl font-bold mb-2">Fair Games & Secure Accounts</p>
                  <p className="text-[.9rem] textforeground">We use random number generators (RNG) to make sure all games — including slots and e-Bingo — are completely fair. We also protect your account with:</p>
                  
                  <ul className="list-disc list-inside text-[.9rem] textforeground my-3">
                    <li>Encrypted transactions</li>
                    <li>Fraud monitoring</li>
                    <li>Secure wallet systems</li>
                  </ul>
                </div>

                <div className="p-6 rounded-md bg-[#F9FAFB] dark:bg-gray-900">
                  <p className="text-2xl font-bold mb-2">Reminders & Disclaimers</p>

                  <ul className="list-disc list-inside text-[.9rem] textforeground my-4">
                    <li>You must be 21 or older to register and play</li>
                    <li>Gaming involves risk — never play with money you can't afford to lose</li>
                    <li>Play for fun, not as a way to make money</li>
                  </ul>

                  <p className="text-[.9rem] textforeground">Always read and follow our full Terms & Conditions</p>
                </div>

              </div>

            </div>

          </div>

          <div className="flex-[1] hidden md:block relative">
            <Image
              src={Mobile3}
              alt="Responsible Gaming"
              className={cn(
                "w-[400px] h-auto rounded-md object-contain mx-auto"
              )}
              priority
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}