"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
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
	acceptPrivacyPolicy: z.boolean().default(false).optional(),
});

function Newsletter() {
	const form = useForm<z.infer<typeof newsletterEmailSchema>>({
		resolver: zodResolver(newsletterEmailSchema),
		defaultValues: {
			userEmail: "",
			acceptPrivacyPolicy: false,
		},
	});

	function onSubmit(values: z.infer<typeof newsletterEmailSchema>) {
		console.log(values);
	}
	return (
		<section className='bg-[#E9F9FC] w-full'>
			<div className='max-w-[1440px] mx-auto w-[90%] md:py-16 py-10 flex lg:flex-row flex-col items-center justify-between gap-10'>
				<div className='font-amiri space-y-5 text-black tracking-[-2%] w-full'>
					<h3 className='md:text-[44px] text-[36px] md:leading-[50px] leading-10 font-bold '>
						Stay Connected with Us
					</h3>
					<p className='md:text-xl text-base md:leading-7 leading-6 text-[#0A241A] font-bold'>
						Be the first to get mental health tips, updates, and exclusive
						<br className='xl:block hidden' />
						insights.
					</p>
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4 w-full mr-0'>
						<div className='flex items-center gap-6 text-base w-full'>
							<FormField
								control={form.control}
								name='userEmail'
								render={({ field }) => (
									<FormItem className='w-full mr-0'>
										<FormControl>
											<Input
												type='em'
												placeholder='Enter your email'
												className='w-full h-full px-4 py-3 rounded-lg'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type='submit'
								className='bg-[#60A7DC] text-black hover:text-[#60A7DC] hover:bg-black font-bold py-3 px-6'>
								Subscribe Now
							</Button>
						</div>
						<FormField
							control={form.control}
							name='acceptPrivacyPolicy'
							render={({ field }) => (
								<FormItem className='flex items-start space-x-3 space-y-0 mr-0'>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											className='border-[#D0D5DD] bg-white data-[state=checked]:bg-[#0F3857] data-[state=checked]:border-[#0F3857] data-[state=checked]:text-white h-5 w-5'
										/>
									</FormControl>
									<FormLabel className='font-normal text-sm leading-5 font-averia text-[#0A241A]'>
										I consent to the collection and use of my data for the
										purposes{" "}
										<Link href={`/privacy-policy`} className='text-[#FD7E14]'>
											outlined
										</Link>
									</FormLabel>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</div>
		</section>
	);
}
export default Newsletter;
