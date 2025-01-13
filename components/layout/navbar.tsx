"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/nav-logo.png";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import { useEffect, useState } from "react";

function Navbar() {
	const pathname = usePathname();
	const [navBackground, setNavBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setNavBackground(true);
			} else {
				setNavBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${
				navBackground ? "bg-white/80" : "bg-transparent"
			} 'font-inter max-w-[1440px] md:w-[90%] w-full mx-auto flex items-center justify-between lg:py-4 py-1 lg:px-7 px-5 md:rounded-2xl shadow-[#ABBD8E] shadow md:border border-[#E0EADA]  fixed md:top-[20px] right-0 left-0 text-[#0A241A] text-base leading-5 font-medium capitalize z-[9999]'`}>
			<Link href={"/"}>
				<Image src={logo} alt='S and E logo' />
			</Link>

			<nav className='text-base hidden lg:block '>
				<ul className='flex items-center gap-x-10'>
					<li>
						<Link
							href={"/"}
							className={`${
								pathname === "/" && "border-b-4 font-bold border-[#70B301]"
							} hover:border-b-4 pb-2`}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href={"/about"}
							className={`${
								pathname === "/about" &&
								"border-b-4 font-bold border-[#70B301]"
							} hover:border-b-4 pb-2`}>
							About
						</Link>
					</li>
					<li>
						<Link
							href={"/services"}
							className={`${
								pathname === "/services" &&
								"border-b-4 font-bold border-[#70B301]"
							} hover:border-b-4 pb-2`}>
							Services
						</Link>
					</li>
					<li>
						<Link
							href={"/contact"}
							className={`${
								pathname === "/contact" &&
								"border-b-4 font-bold border-[#70B301]"
							} hover:border-b-4 pb-2`}>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>

			<div className='text-base hidden lg:flex items-center gap-x-5 font-bold'>
				<Link
					target='_blank'
					href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
					className='hover:text-[#70B301] hover:underline transition-all duration-500 font-semibold'>
					Appointment Booking
				</Link>
				<Link
					href={""}
					className='rounded-md bg-[#70B301] hover:bg-black text-black hover:text-[#70B301] transition-all duration-500 font-bold px-9 py-2.5'>
					Get Started
				</Link>
			</div>
			<div className='text-base lg:hidden flex'>
				<MobileMenu />
			</div>
		</header>
	);
}
export default Navbar;
