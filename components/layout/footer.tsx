"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/nav-logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
	return (
		<footer className='bg-[#0A1712] text-white w-full md:py-16 py-10'>
			<div className='max-w-[1440px] w-[90%] mx-auto space-y-6'>
				<Link href={"/"}>
					<Image src={logo} alt='S and E logo' />
				</Link>
				<p>
					S & M Mental Health Services LLC is here to support individuals and
					<br className='md:block hidden' />
					families through personalized and effective treatment plans.
				</p>
				<nav className='flex md:items-center md:gap-8 gap-6 flex-wrap'>
					{/* <Link className="hover:font-semibold hover:underline" href={""}>Overview</Link> */}
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/about"}>
						About
					</Link>
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/services"}>
						Services
					</Link>
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/blogs"}>
						Blogs
					</Link>
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/contact"}>
						Contact Us
					</Link>
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/privacy"}>
						Privacy Policy
					</Link>
					<Link
						className='hover:font-semibold hover:underline transition-all duration-500 decoration'
						href={"/terms-of-service"}>
						Terms of Services
					</Link>
				</nav>
				<hr className='border-none h-[2px] bg-white' />
				<div className='flex items-center justify-between flex-wrap'>
					<p>© 2025 Appointed time. All rights reserved.</p>
					<div className='flex items-center gap-x-4'>
						<Link href={""}>
							<Facebook />
						</Link>
						<Link href={""}>
							<Instagram />
						</Link>
						<Link href={""}>
							<Twitter />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
