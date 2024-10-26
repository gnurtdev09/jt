"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

import { Logo } from "@/components";
import { useTheme } from "@/contexts";

const Header = () => {
    const { changeTheme, theme } = useTheme();

    return (
        <header className={twMerge("px-6 py-3", "sticky top-0 w-full z-10")}>
            <motion.div
                className={twMerge(
                    "bg-glass",
                    "px-5 py-3 rounded-xl",
                    "flex items-center gap-6 justify-between"
                )}
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -20,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.4,
                    }}
                >
                    <Link href="/">
                        <Logo />
                    </Link>
                </motion.div>
                <nav className={twMerge("flex items-center gap-3")}>
                    {/* <ul></ul> */}
                    <motion.button
                        className={twMerge(
                            "w-[42px] h-[42px] flex items-center justify-center rounded-full",
                            "hover:bg-green-500 hover:text-gray-50",
                            "transition-all"
                        )}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.8,
                        }}
                        onClick={() =>
                            changeTheme(theme === "light" ? "dark" : "light")
                        }
                    >
                        {theme === "light" ? <FaMoon /> : <IoSunny />}
                    </motion.button>
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;
