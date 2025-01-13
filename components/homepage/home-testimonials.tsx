"use client";
import img1 from "@/public/images/test-img-1.png";
import stars from "@/public/images/rating-stars.png";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const testimonials = [
	{
		id: 1,
		author: "Veronica D.",
		words:
			"The team at S&E Mind Reset Center changed my life. I finally feel like myself again!",
		image: img1,
	},
	{
		id: 2,
		author: "Benedict T.",
		words:
			"Their compassionate care and expert guidance gave me tools I didn't realize I needed to thrive",
		image: img1,
	},
	{
		id: 3,
		author: "Judith K",
		words:
			"I can't thank the team enough for helping me and family navigate such a challenging time.",
		image: img1,
	},
];

function HomeTestimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextSlide = useCallback(() => {
		setActiveIndex((current) => (current + 1) % testimonials.length);
	}, []);

	const goToSlide = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	useEffect(() => {
		const intervalId = setInterval(nextSlide, 10000); // 10 seconds
		return () => clearInterval(intervalId);
	}, [nextSlide]);
	return (
		<section className='bg-transparent border-none py-20'>
			<div className='w-full max-w-3xl mx-auto border-none'>
				<div className='relative h-[min(40vh,400px)] overflow-hidden border-none z-[999]'>
					<div
						className='flex h-full transition-transform duration-500 ease-in-out border-none'
						style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
						{testimonials.map((item) => (
							<div key={item.id} className='w-full flex-shrink-0 z-[999]'>
								<Card className='h-full z-[999]'>
									<CardContent className=' h-full  text-white text-center  font-averia bg-white flex items-center justify-center rounded-lg z-[999]'>
										<div className='bg-[#246A4E] flex flex-col items-center justify-center gap-y-8 py-5 rounded-3xl px-10'>
											<Image src={stars} alt='stars' className='mx-auto' />
											<p className='text-[32px] leading-10 font-bold'>
												{item.words}
											</p>
											<p className='text-xl leading-7 font-bold italic'>
												— {item.author}
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-center mt-4 space-x-2'>
					{testimonials.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === activeIndex
									? "bg-[#246A4E] scale-125"
									: "bg-gray-700 hover:bg-muted-foreground"
							}`}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
export default HomeTestimonials;
