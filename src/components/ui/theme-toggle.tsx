"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const iconSizeClass = "h-[2rem] w-[2rem] transition-all duration-300"

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer outline-none border-0"
        >
            {theme === "light" ? (
                <Sun className={cn(iconSizeClass)} />
            ) : (
                <Moon className={cn(iconSizeClass)}/>
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
