'use client';
import { cn } from "@/lib/utils";
import { SectionType } from "../page";
import Logo from "@/../public/logo.webp"
import Pagcor from "@/../public/pagcor-logo.png"
import TwentyOne from "@/../public/21.webp"
import BridgeHope from "@/../public/bridge_hope.webp"
import HopoLine from "@/../public/hope_line.webp"
import Image from "next/image";
import { Mail, MessageCircleMore, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function SupportAndHelplines({ sectionClass }: SectionType) {
  return (
    <motion.section 
      className={cn(sectionClass, "pb-16")} id="support-and-helplines"
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
      <div className="w-[90%] xl:w-[60%] mx-auto">
        <h3 className="text-2xl font-bold md:text-4xl xl:mb-4 text-center">Support & Helplines</h3>
        <p className="textforeground text-center mt-4">We’re here to listen. Reach out anytime for guidance and support.</p>

        <div className="flex flex-col gap-6 mt-10 md:flex-row">

          <div className="flex-1 bg-[#F9FAFB] dark:bg-gray-900 p-8 rounded-md">
            <Image
              src={Logo}
              alt="Responsible Gaming"
              className="w-[150px] h-auto rounded-md object-contain mx-auto mb-4"
              priority
            />

            <p className="text-2xl font-bold">HappyBingo Support Channels</p>
            <p className="textforeground my-2 text-[.9rem]">Have Questions? Talk to us.</p>

            <p className="textforeground text-[.9rem]">From site questions to account support, our team is ready to assist.</p>

            <p className="flex gap-1 textforeground my-4 text-[.9rem]"><MessageCircleMore className="w-4" />Live Chat Support</p>
            <ul className="list-disc list-inside textforeground text-[.9rem]">
              <li>Click the chat icon at the bottom right of the screen.</li>
              <li>Available 24/7, handled by trained support reps.</li>
              <li>Ask anything: transactions, locking your account.</li>
            </ul>
          </div>

          <div className="flex-1 bg-[#F9FAFB] dark:bg-gray-900 p-8 rounded-md">

            <div className="flex">
              <Image
                src={Pagcor}
                alt="Responsible Gaming"
                className="w-[60px] h-auto rounded-md object-contain mx-auto mb-4"
                priority
              />
              <Image
                src={TwentyOne}
                alt="Responsible Gaming"
                className="w-[160px] h-auto rounded-md object-contain mx-auto mb-4"
                priority
              />
            </div>

            <p className="text-2xl font-bold">PAGCOR Responsible Gaming Helpline</p>
            <p className="textforeground my-4 text-[.9rem]">PAGCOR is there to protect players nationwide.</p>
            <p className="textforeground text-[.9rem]">The Philippine Amusement and Gaming Corporation offers direct support for anyone needing help with gambling-related concerns.</p>

            <div className="flex items-center text-sm textforeground my-2 text-[.9rem]">
              <Mail className="w-4" /> &nbsp; Email:  &nbsp;  <a href="mailto:responsiblegaming@pagcor.ph" className="text-blue-500 hover:underline">ResponsibleGaming@pagcor.ph</a>
            </div>

            <div className="flex items-center text-sm textforeground text-[.9rem]">
              <Phone className="w-4" />  &nbsp; Call:  &nbsp;  8522-0299 local 5021
            </div>

            <ul className="list-disc list-inside textforeground mt-4 text-[.9rem]">
              <li>Available Mondays to Fridays, 8AM to 5PM</li>
              <li>Speak to trained specialists  no judgment, just help.</li>
            </ul>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
          <div className="bg-[#F9FAFB] dark:bg-gray-900  p-8 rounded-md">
            <Image
              src={BridgeHope}
              alt="Responsible Gaming"
              className="w-[200px] h-auto rounded-md object-contain mx-auto mb-4"
              priority
            />

            <p className="text-2xl font-bold mb-4">Counseling & Rehabilitation Centers</p>
            <p className="textforeground mb-4 text-[.9rem]">Professional help is available and confidential.</p>
            <p className="textforeground text-[.9rem]">There’s no shame in asking for help. These licensed facilities in the Philippines specialize in behavioral addiction, including problem gambling.</p>

            <p className="textforeground my-4 text-[.9rem]">🏥 Bridges of Hope (Manila, Cebu, Davao)</p>

            <ul className="list-disc list-inside textforeground mt-4 text-[.9rem]">
                <li>📞 0917-842-8312</li>
                <li>Website: <Link href="https://bridgesofhope.com.ph/" target="_blank" className="text-blue-700 underline dark:text-white">https://www.bridgesofhope.ph/</Link></li>
                <li>Treats gambling, substance use, and emotional trauma</li>
            </ul>

          </div>

          <div className="bg-[#F9FAFB] dark:bg-gray-900  p-8 rounded-md">
            <Image
              src={HopoLine}
              alt="Responsible Gaming"
              className="w-[150px] h-[150px] rounded-md object-contain mx-auto mb-4"
              priority
            />

            <p className="text-2xl font-bold mb-4">Emotional Support Hotlines (24/7)</p>
            <p className="textforeground mb-4 text-[.9rem]">You’re not alone  help is just one call away.</p>
            <p className="textforeground text-[.9rem]">Whether you’re feeling anxious, overwhelmed, or stuck in a loop, these emotional support lines are available day and night.</p>

            <p className="textforeground my-4 text-[.9rem]">❤️ Hopeline Philippines (Free and open 24/7)</p>

            <ul className="list-disc list-inside textforeground mt-4 text-[.9rem]">
                <li>📞 0917-558-HOPE (4673)</li>
                <li>Trained counselors who can help you talk through any distress gambling-related or otherwise</li>
            </ul>

            <p className="textforeground my-4 text-[.9rem]">📧or, Visit: <Link href="https://gamblersanonymous.ph/" target="_blank" className="text-blue-700 underline dark:text-white">https://gamblersanonymous.ph</Link> </p>

            <p className="textforeground text-[.9rem]">(community-led, Philippine-based support group)</p>

          </div>

          <div className="bg-[#F9FAFB] dark:bg-gray-900  p-8 rounded-md">
            <p className="text-2xl font-bold mb-2">Self-Exclusion Assistance</p>

            <p className="textforeground mb-4 text-[.9rem]">Take a break, protect your future.</p>

            <p className="textforeground mb-3 text-[.9rem]">If you feel that gambling is getting too difficult to control, you can voluntarily block your access to gaming platforms licensed by PAGCOR  including HappyBingo.</p>

            <p className="textforeground mb-3 text-[.9rem]">🧾 How Self-Exclusion Works:</p>

            <ul className="list-disc list-inside textforeground text-[.9rem]">
              <li>You choose the time period: 6 months - 5yrs</li>
              <li>Your account will be locked, and marketing emails/texts will stop.</li>
              <li>You’ll be unable to access any PAGCOR eGames, casinos, or iGaming platforms during this time.</li>
            </ul>

            <p className="my-4 textforeground text-[.9rem]">📝 How to Enroll:</p>

            <ul className="list-disc list-inside textforeground text-[.9rem]">
              <li>Go to: <Link href="https://www.pagcor.ph/responsible-gaming/self-exclusion.php" target="_blank" className="text-blue-700 underline dark:text-white">Self-Exclusion Link</Link></li>
              <li>Visit the nearest PAGCOR office with 1 valid ID</li>
              <li>Or, contact our chat support and we’ll help walk you through it.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

