'use client';

import React, { useEffect, useState } from 'react'
import ThemeToggler from '../ui/theme-toggle'
import Link from 'next/link'
import LogoHappybingo from '../logo'
import { Dices, HandHelping, Menu, MessageCircleQuestionMark, Scale, Shield, User, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';


const items = [
    {
        label: 'What is Responsible Gaming?',
        id: 'what-is-responsible-gaming',
        icon: Shield
    },
    {
        label: 'Ways to Limit Yourself',
        id: 'ways-to-limit-yourself',
        icon: User 
    },
    {
        label: 'Betting 101',
        id: 'betting-101',
        icon: Dices
    },
    {
        label: 'Support & Helplines',
        id: 'support-and-helplines',
        icon: HandHelping
    },
    {
        label: 'FAQs',
        id: 'faqs',
        icon: MessageCircleQuestionMark
    },
    {
        label: 'Fair & Safe Gaming',
        id: 'fair-and-safe-gaming',
        icon: Scale 
    },
]

function MenuItems({ activeSection } : { activeSection: string }) {
    return (
        <nav className='hidden xl:block'>
            <ul className='flex gap-5'>
                {items.map((item) => {
                    const href = `/#${item.id}`;
                    return (
                    <li key={item.label}>
                        <Link 
                            href={href}
                            className={`!focus:outline-none font-semibold pb-1 transition-colors ${
                                activeSection === item.id ? "text-brand underline" : "text-gray-500"
                            }`}
                        >
                         
                                {item.label}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

function MenuItemMobile({  activeSection, setActiveSection} : { activeSection: string,   setActiveSection: (id: string) => void }) {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
         <div className="xl:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence >
                {menuOpen && (
                    <>
                        <motion.div 
                            key="menu"
                            className="absolute top-14 left-0 w-full bg-white shadow-lg z-50 p-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <ul className="flex flex-col gap-4">
                                {items.map((item) => {
                                const href = `/#${item.id}`
                                return (
                                    <li key={item.label}>
                                    <Link
                                        href={href}
                                        onClick={() => {
                                            setMenuOpen(false)
                                            setActiveSection(item.id)
                                        }}
                                        className={`flex gap-4 font-semibold transition-colors py-2 px-4 rounded-md ${
                                        activeSection === item.id
                                            ? "bg-brand text-[#A15C07]"
                                            : "text-gray-700"
                                        }`}
                                    >
                                        <span>
                                            <item.icon className='inline mr-1 mb-1' size={16} />
                                        </span>
                                        {item.label}
                                    </Link>
                                    </li>
                                )
                                })}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
         </div>
    )
}

function Header() {
    const [activeSection, setActiveSection] = useState("")
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1280px)") 

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
            })
        },
        mediaQuery.matches ? { threshold: 0.6 } : { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
        )

        items.forEach((item) => {
        const el = document.getElementById(item.id)
        if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])
    
    return (
        <header className='p-2 sticky top-0 z-50 bg-background'>
            <div className='container-center flex justify-between items-center'>
                <LogoHappybingo/>
                <MenuItems activeSection={activeSection}  />
                <div className='flex items-center gap-4'>
                    <ThemeToggler />
                    <MenuItemMobile 
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header   