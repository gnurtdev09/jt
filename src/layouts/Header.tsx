"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import { IoMenu, IoSunny } from "react-icons/io5";

import { Logo, NavLink } from "@/components";
import { useTheme } from "@/contexts";

const menu = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const menuItem = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const menuSmall = {
    open: {
        scale: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        scale: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.5 },
    },
};

const menuItemSmall = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const Header = () => {
    const { changeTheme, theme } = useTheme();

    const [isOpenMenuSmallDevice, setIsOpenMenuSmallDevice] = useState(false);

    const closeMenuSmallDevice = useCallback(() => {
        setIsOpenMenuSmallDevice(false);
    }, []);

    return (
        <header
            className={twMerge(
                "px-6 py-3",
                "sticky top-0 w-full z-10",
                "max-w-7xl mx-auto"
            )}
        >
            <motion.div
                className={twMerge(
                    "bg-glass",
                    "relative px-5 py-3 rounded-xl",
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
                {/* Logo */}
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
                {/* Menu nav large device */}
                <nav>
                    <motion.ul
                        className={twMerge(
                            "hidden md:flex flex-col md:flex-row gap-4 md:gap-6"
                        )}
                        variants={menu}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li variants={menuItem}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/"
                            >
                                home
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuItem}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/about"
                            >
                                about
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuItem}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/portfolio"
                            >
                                portfolio
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuItem}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/blog"
                            >
                                blog
                            </NavLink>
                        </motion.li>
                        <motion.li variants={menuItem}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/contact"
                            >
                                contact
                            </NavLink>
                        </motion.li>
                    </motion.ul>
                </nav>
                {/* Icons */}
                <div className="flex items-center">
                    <motion.button
                        className={twMerge(
                            "w-[42px] h-[42px] flex items-center justify-center rounded-full",
                            "hover:bg-green-500/10 hover:text-green-500",
                            "transition-all"
                        )}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.4,
                        }}
                        onClick={() =>
                            changeTheme(theme === "light" ? "dark" : "light")
                        }
                    >
                        {theme === "light" ? <FaMoon /> : <IoSunny />}
                    </motion.button>
                    <button
                        className={twMerge(
                            "w-[42px] h-[42px] flex md:hidden items-center justify-center",
                            "hover:bg-gray-500/10 dark:hover:bg-gray-200/10 rounded-full"
                        )}
                        onClick={() =>
                            setIsOpenMenuSmallDevice((prev) => !prev)
                        }
                    >
                        <IoMenu />
                    </button>
                </div>
                {/* Menu nav small device */}
                <motion.div
                    className={twMerge(
                        "absolute top-full translate-y-4 left-0 w-full",
                        "z-20",
                        isOpenMenuSmallDevice ? "" : "pointer-events-none"
                    )}
                    initial={false}
                    animate={isOpenMenuSmallDevice ? "open" : "closed"}
                >
                    <motion.div
                        className={twMerge(
                            "flex flex-col gap-4 p-8 rounded-xl",
                            "bg-glass"
                        )}
                        variants={menuSmall}
                    >
                        <motion.div variants={menuItemSmall}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/"
                                onClick={() => closeMenuSmallDevice()}
                            >
                                home
                            </NavLink>
                        </motion.div>
                        <motion.div variants={menuItemSmall}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/about"
                                onClick={() => closeMenuSmallDevice()}
                            >
                                about
                            </NavLink>
                        </motion.div>
                        <motion.div variants={menuItemSmall}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/portfolio"
                                onClick={() => closeMenuSmallDevice()}
                            >
                                portfolio
                            </NavLink>
                        </motion.div>
                        <motion.div variants={menuItemSmall}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/blog"
                                onClick={() => closeMenuSmallDevice()}
                            >
                                blog
                            </NavLink>
                        </motion.div>
                        <motion.div variants={menuItemSmall}>
                            <NavLink
                                className="block first-letter:uppercase font-accent font-medium cursor-pointer"
                                href="/contact"
                                onClick={() => closeMenuSmallDevice()}
                            >
                                contact
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Header;
