import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/../public/logo.webp";
import Link from "next/link";
import Facebook from "@/../public/fb-icon.svg";
import Instgram from "@/../public/ig-icon.svg";
import TG from "@/../public/telegram.svg";
import Viber from "@/../public/viber.svg";
import Twitter from "@/../public/x-icon.svg";
import PGcor from "@/../public/pagcor-logo.png";
import TwtyOne from "@/../public/21.webp";

export default function Footer() {
      const currentYear = new Date().getFullYear();
    return (
        <footer className={cn("pt-12 pb-6 bg-[#F9FAFB] dark:bg-gray-900 mt-32")}>
            <div className="container-center">

                <div className="md:hidden">
                    <div className="mb-3">
                        <p className="text-xl textforeground mb-2">Join our community</p>
                        <div className="flex gap-3">
                            <Link
                                href="https://t.me/happybingoofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center bg-[#26A5E1] text-white font-bold w-[85px] rounded py-1"
                            >
                                <Image
                                    src={TG}
                                    alt="Telegram"
                                    className="w-6 h-6 object-contain"
                                    priority
                                />
                            </Link>
                            <Link 
                                href="https://t.me/happybingoofficial" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex justify-center bg-[#665CAC] text-white font-bold w-[85px] rounded py-1"
                            >
                                <Image
                                    src={Viber}
                                    alt="Telegram"
                                    className="w-6 h-6 object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                    </div>

                    <div className="">
                        <p className="text-xl textforeground mb-2">Follow us</p>
                        <div className="flex gap-3">
                            <Link 
                                href="https://www.facebook.com/Happybingo.official" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >   
                                <Image
                                    src={Facebook}
                                    alt="Facebook"
                                    className="w-6 h-auto object-contain"
                                    priority
                                />
                            </Link>
                            <Link href="https://www.instagram.com/happybingo.official/" target="_blank" rel="noopener noreferrer" className="btn btn-[#26A4E2]">
                                <Image
                                    src={Instgram}
                                    alt="Instagram"
                                    className="w-6 h-auto object-contain"
                                    priority
                                />
                            </Link>
                            <Link href="https://x.com/HappyBingo_" target="_blank" rel="noopener noreferrer" className="btn btn-[#26A4E2]">
                                <Image
                                    src={Twitter}
                                    alt="Twitter"
                                    className="w-6 h-auto object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                    </div>

                    <div className="my-5">
                        <Image
                            src={Logo}
                            alt="Responsible Gaming"
                            className="w-[150px] h-auto object-contain mb-4"
                            priority
                        />
                    </div>

                    <div>
                        <p className="textforeground text-xl">Affiliates</p>

                        <div className="flex gap-3">
                            <Image
                                src={PGcor}
                                alt="Responsible Gaming"
                                className="w-[40px] h-auto object-contain mb-4"
                                priority
                            />

                            <Image
                                src={TwtyOne}
                                alt="Responsible Gaming"
                                className="w-[100px] h-auto object-contain mb-4"
                                priority
                            />
                        </div>
                    </div>
                    
                    <p className="textforeground text-sm">We are a PAGCOR-licensed online gaming operator in the
                        Philippines, committed to providing a safe, secure, and fair
                        gaming experience for every player. Regulated by the Philippine
                        Amusement and Gaming Corporation (PAGCOR), we uphold the
                        highest standards of transparency and integrity while
                        promoting responsible gaming through player protection tools,
                        self-exclusion options, and 24/7 support.
                    </p>
                </div>

                <div className="hidden md:block">
                    <div className="flex gap-4 justify-center items-center ">
                        <Image
                            src={Logo}
                            alt="Responsible Gaming"
                            className="w-[150px] h-auto object-contain mb-4"
                            priority
                        />

                        <p className="textforeground text-sm">Owned and operated by Breddas Inc., A registered company in the Republic of the Philippines, HappyBingo.ph a PAGCOR-accredited online gaming platform offering bingo, e-games, live dealer games and specialty games like Rainbow Ball and Marble Speedway.</p>
                    </div>

                    <div className="flex gap-3 my-4">
                            <p className="textforeground flex-[4.4] leading-6 text-[.9rem]">We are a PAGCOR-licensed online gaming operator in the Philippines, committed to providing a safe, secure, and fair gaming
    experience for every player. Regulated by the Philippine Amusement and Gaming Corporation (PAGCOR), we uphold the highest
    standards of transparency and integrity while promoting responsible gaming through player protection tools, self-exclusion options,
    and 24/7 support.</p>

                            <div className="flex-[1] flex items-center justify-center">
                                <div className="flex gap-3">
                                    <Image
                                        src={PGcor}
                                        alt="Responsible Gaming"
                                        className="w-[40px] h-auto object-contain mb-4"
                                        priority
                                    />

                                    <Image
                                        src={TwtyOne}
                                        alt="Responsible Gaming"
                                        className="w-[140px] h-auto object-contain mb-4"
                                        priority
                                    />
                                </div>
                            </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-5 justify-between mt-5">
                                <div>
                                    <p className="text-xl textforeground mb-2">Join our community</p>
                                    <div className="flex gap-3">
                                        <Link
                                            href="https://t.me/happybingoofficial"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center bg-[#26A5E1] text-white font-bold w-[85px] rounded py-1"
                                        >
                                            <Image
                                                src={TG}
                                                alt="Telegram"
                                                className="w-6 h-6 object-contain"
                                                priority
                                            />
                                        </Link>
                                        <Link 
                                            href="https://t.me/happybingoofficial" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex justify-center bg-[#665CAC] text-white font-bold w-[85px] rounded py-1"
                                        >
                                            <Image
                                                src={Viber}
                                                alt="Telegram"
                                                className="w-6 h-6 object-contain"
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            
                                <div>
                                    <p className="text-xl textforeground mb-2">Follow us</p>
                                    <div className="flex gap-3">
                                        <Link 
                                            href="https://www.facebook.com/Happybingo.official" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="py-1"
                                        >   
                                            <Image
                                                src={Facebook}
                                                alt="Facebook"
                                                className="w-6 h-auto object-contain"
                                                priority
                                            />
                                        </Link>
                                        <Link href="https://www.instagram.com/happybingo.official/" target="_blank" rel="noopener noreferrer" className="py-1 btn btn-[#26A4E2]">
                                            <Image
                                                src={Instgram}
                                                alt="Instagram"
                                                className="w-6 h-auto object-contain"
                                                priority
                                            />
                                        </Link>
                                        <Link href="https://x.com/HappyBingo_" target="_blank" rel="noopener noreferrer" className="py-1 btn btn-[#26A4E2]">
                                            <Image
                                                src={Twitter}
                                                alt="Twitter"
                                                className="w-6 h-auto object-contain"
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

                <p className="text-center textforeground pt-6 text-[12px]">&copy;  {currentYear} HappyBingo All rights reserved</p>

            </div>


        </footer>
    )
}