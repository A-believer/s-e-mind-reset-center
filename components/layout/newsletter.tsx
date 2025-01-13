"use client";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newsletterEmailSchema = z.object({
	userEmail: z.string().min(2, {
		message: "userEmail must be at least 2 characters.",
	}),
});

function Newsletter() {
	const form = useForm<z.infer<typeof newsletterEmailSchema>>({
		resolver: zodResolver(newsletterEmailSchema),
		defaultValues: {
			userEmail: "",
		},
	});

	function onSubmit(values: z.infer<typeof newsletterEmailSchema>) {
		console.log(values);
	}
	return (
		<section className='bg-[#F1FFD6] w-full'>
			<div className='max-w-[1440px] mx-auto w-[90%] md:py-16 py-10 flex lg:flex-row flex-col items-center justify-between gap-10'>
				<div className='font-averia space-y-5 text-black tracking-[-2%] lg:w-1/2 w-full'>
					<h3 className='text-4xl leading-[44px] font-semibold '>
						Stay Connected with Us
					</h3>
					<p className='text-xl leading-7 text-[#0A241A]'>
						Be the first to get mental health tips, updates, and exclusive
						<br className='xl:block hidden' />
						insights.
					</p>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4 lg:w-1/2 w-full'>
						<div className='flex items-center justify-end gap-6 text-base w-full'>
							<FormField
								control={form.control}
								name='userEmail'
								render={({ field }) => (
									<FormItem className='max-w-[360px] w-full mr-0'>
										<FormLabel></FormLabel>
										<FormControl>
											<Input
												type='em'
												placeholder='enter email'
												className='w-full px-4 py-3 rounded-lg'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type='submit'
								className='bg-[#70B301] text-black hover:text-[#70B301] font-bold py-3 px-6'>
								Subscribe Now
							</Button>
						</div>
						<p className='text-right text-[#667085] text-sm leading-5 font-averia'>
							Your privacy matters. We’ll never share your information without
							your consent.
						</p>
					</form>
				</Form>
			</div>
		</section>
	);
}
export default Newsletter;
