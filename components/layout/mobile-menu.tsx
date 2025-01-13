"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu() {
     const pathname = usePathname();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<AlignRight color='#0A241A' size={24} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-[300px] mt-6 bg-[#0A241A] text-white'>
				<DropdownMenuLabel className='text-gray-600'>Menu</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup className=' flex flex-col gap-y-3 items-center py-5'>
					<DropdownMenuItem>
						<Link
							href={"/"}
							className={`${
								pathname === "/" && "border-b-2"
							} hover:border-b-2 pb-2`}>
							Home
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							href={"/services"}
							className={`${
								pathname === "/services" && "border-b-2"
							} hover:border-b-2 pb-2`}>
							Services
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							href={"/contact"}
							className={`${
								pathname === "/contact" && "border-b-2"
							} hover:border-b-2 pb-2`}>
							Contact Us
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={"https://cal.com"} className='mt-10'>
							Appointment Booking
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link
							href={"/"}
							className='rounded-md text-black bg-[#70B301] px-6 py-2 text-sm font-semibold'>
							Get Started
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
