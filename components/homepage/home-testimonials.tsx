"use client";
import customerI from "@/public/images/customer-1.png";
import customerII from "@/public/images/customer-2.png";
import stars from "@/public/images/rating-stars.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import React from "react";

const testimonials = [
	{
		id: 2,
		author: "Benedict T.",
		words:
			"Their compassionate care and expert guidance gave me tools I didn't realize I needed to thrive",
		author_img: customerI,
	},
	{
		id: 1,
		author: "Veronica D.",
		words:
			"The team at S&E Mind Reset Center changed my life. I finally feel like myself again!",
		author_img: customerII,
	},
	{
		id: 3,
		author: "Judith K",
		words:
			"I can't thank the team enough for helping me and family navigate such a challenging time.",
		author_img: customerII,
	},
];

function HomeTestimonials() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true })
	);
	return (
		<Carousel
			plugins={[plugin.current]}
			className='w-[90%] max-w-[1100px] mx-auto py-20 bg-white overflow-hidden'
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			<CarouselContent className='space-x-5'>
				{testimonials.map((testimonial) => (
					<CarouselItem
						key={testimonial.id}
						className={`${
							testimonial.id % 2 === 0 ? "bg-[#FFF4EA]" : "bg-[#E2F3FF]"
						} md:basis-1/2 max-w-[539px] w-full py-10 px-6 space-y-8 font-amiri rounded-[20px]`}>
						<p className='text-[#061C2D] text-[30px] leading-10'>{testimonial.words}</p>
						<div className='flex items-center gap-x-[18px]'>
							<Image src={testimonial.author_img} alt={testimonial.author} />
							<div className='text-[#0F3857] space-y-2 text-[26px] leading-10'>
								<p>{testimonial.author}</p>
								<Image src={stars} alt='star' />
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
export default HomeTestimonials;
