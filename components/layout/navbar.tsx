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
			} 'font-inter max-w-[1440px] md:w-[90%] w-full mx-auto flex items-center justify-between lg:py-4 py-1 lg:px-7 px-5 md:rounded-2xl shadow-[#FD7E1417] shadow md:border border-[#E0EADA]  fixed md:top-[20px] right-0 left-0 text-[#0A241A] text-base leading-5 font-medium capitalize z-[9999]'`}>
			<div className='flex items-center xl:gap-x-12 gap-x-8'>
				<Link href={"/"}>
					<Image
						src={logo}
						alt='S and E logo'
						className='object-cover h-10 w-[101px]'
					/>
				</Link>

				<nav className='text-base hidden lg:block '>
					<ul className='flex items-center xl:gap-x-10 gap-x-6'>
						<li>
							<Link
								href={"/"}
								className={`${
									pathname === "/" && "border-b-4 font-bold border-[#60A7DC]"
								} hover:border-b-4 pb-2`}>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/about"}
								className={`${
									pathname === "/about" &&
									"border-b-4 font-bold border-[#60A7DC]"
								} hover:border-b-4 pb-2`}>
								About
							</Link>
						</li>
						<li>
							<Link
								href={"/services"}
								className={`${
									pathname === "/services" &&
									"border-b-4 font-bold border-[#60A7DC]"
								} hover:border-b-4 pb-2`}>
								Services
							</Link>
						</li>
						<li>
							<Link
								href={"/blogs"}
								className={`${
									pathname === "/blogs" &&
									"border-b-4 font-bold border-[#60A7DC]"
								} hover:border-b-4 pb-2`}>
								Blogs
							</Link>
						</li>
						<li>
							<Link
								href={"/contact"}
								className={`${
									pathname === "/contact" &&
									"border-b-4 font-bold border-[#60A7DC]"
								} hover:border-b-4 pb-2`}>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className='text-sm leading-4 hidden lg:flex items-center gap-x-5 font-semibold text-[#1E201F]'>
				<Link
					target='_blank'
					href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
					className='hover:text-[#1E201F] hover:bg-[#60A7DC] border border-[#60A7DC] rounded-md transition-all duration-500 px-[21.5px] py-[13.5px]'>
					Book Appointment
				</Link>
				<Link
					href={""}
					className='rounded-md bg-[#60A7DC] hover:bg-black hover:text-[#60A7DC] border border-[#60A7DC] transition-all duration-500 px-6 py-[13.5px]'>
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
