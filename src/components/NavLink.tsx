"use client";

import { ReactNode, useMemo } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type NavLinkProps = {
    children: ReactNode;
    className?: string;
} & LinkProps;

const NavLink = ({ children, className, href, ...props }: NavLinkProps) => {
    const pathname = usePathname();

    const activeClass = useMemo(() => {
        const className = "text-green-500";
        return pathname === href ? className : "";
    }, [pathname, href]);

    return (
        <Link
            {...props}
            href={href}
            className={twMerge(className, activeClass)}
        >
            {children}
        </Link>
    );
};

export default NavLink;
