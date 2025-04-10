'use client'
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
export const dancing_Script = Dancing_Script({
    weight: '700',
    subsets: ['latin'],
});
const Navbar = () => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        document.documentElement.classList.toggle("dark")
    }
    return (
        <nav className='bg-foreground h-20 dark:border-b border-white border-dashed'>
            <section className='flex justify-between items-center text-white h-20 px-10'>
                {/* Title Section */}
                <div className='flex-1 text-center'>
                    <h1 className={`text-5xl font-bold ${dancing_Script.className}`}>
                        <Link className="cursor-pointer" href='/'>Next Form Pilot</Link>
                    </h1>
                </div>

                {/* Theme Toggle Button */}
                <div
                    onClick={toggleTheme}
                    className="cursor-pointer"
                >
                    {theme === "light" ? <MoonIcon className="h-10 w-10" /> : <SunIcon className="h-10 w-10" />}
                </div>
            </section>
        </nav>

    );
};
function MoonIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50" // Increased size
            height="50" // Increased size
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}

function SunIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50" // Increased size
            height="50" // Increased size
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}

export default Navbar;