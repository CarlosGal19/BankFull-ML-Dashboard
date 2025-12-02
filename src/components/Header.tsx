"use client";

import { IHeaderProps } from "@/types/Components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationOptions = [
    { name: "Home", href: "/" },
    { name: "Predict", href: "/predict" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white border-b-4 border-[#e61d00] shadow-md px-16 py-6 flex justify-between items-center">
            <div>
                <Link href="/" className="text-3xl font-extrabold text-black tracking-tight hover:text-[#e61d00] transition-colors hover:cursor-default" aria-label="Home">

                    <h1>
                        Logistic Regression & Deep Learning Models Dashboard
                    </h1>
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-10">
                    {navigationOptions.map((option) => (
                        <NavItem key={option.name} name={option.name} href={option.href} pathname={pathname} />
                    ))}
                </ul>
            </nav>
        </header >
    );
}

function NavItem({ name, href, pathname }: IHeaderProps) {
    return (
        <li className="relative group text-black text-lg font-semibold">
            <Link href={href} className={`transition-colors duration-200 group-hover:text-[#e61d00] ${pathname === href ? "text-[#e61d00]" : ""}`}>
                {name}
            </Link>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-[#e61d00] transition-all duration-300 group-hover:w-full"></span>
        </li>
    );
}
