"use client";

import { twMerge } from "tailwind-merge";

type Props = {
    className?: string;
};

const Logo = ({ className }: Props) => {
    return (
        <h1
            className={twMerge(
                "inline-block",
                "font-logo font-bold uppercase text-4xl",
                className
            )}
        >
            jt
        </h1>
    );
};

export default Logo;
