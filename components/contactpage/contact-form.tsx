"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import backgroundImage from "@/public/images/contact-form.png";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
	firstName: z
		.string()
		.min(2, "First name must be at least 2 characters")
		.max(50, "First name must be less than 50 characters"),
	lastName: z
		.string()
		.min(2, "Last name must be at least 2 characters")
		.max(50, "Last name must be less than 50 characters"),
	email: z.string().email("Please enter a valid email address"),
	phoneNumber: z
		.string()
		.min(10, "Phone number must be at least 10 digits")
		.regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be less than 1000 characters"),
	acceptPrivacyPolicy: z.boolean().default(false).optional(),
});

function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			message: "",
			acceptPrivacyPolicy: false,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='bg-[#2E3D37] lg:pt-12 pt-10 lg:pb-20 pb-14'>
				<div
					style={{
						backgroundImage: `url(${backgroundImage.src})`,
						backgroundPosition: "top",
					}}
					className='bg-no-repeat bg-cover h-full max-w-[1440px] w-[90%] mx-auto'>
					<div className='max-w-[480px] mx-auto space-y-6 font-inter text-white'>
						<div className='flex lg:flex-row flex-col items-center justify-between gap-x-8 gap-y-6'>
							<FormField
								control={form.control}
								name='firstName'
								render={({ field }) => (
									<FormItem className='w-full'>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder='John' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lastName'
								render={({ field }) => (
									<FormItem className='w-full'>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder='Doe' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder='john.doe@example.com'
											type='email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='phoneNumber'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder='+1 (555) 000-0000' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											className='w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
											placeholder='Your message here...'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='acceptPrivacyPolicy'
							render={({ field }) => (
								<FormItem className='flex items-start space-x-3 space-y-0'>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											className='border-white data-[state=checked]:bg-[#70B301] data-[state=checked]:border-[#70B301] data-[state=checked]:text-white'
										/>
									</FormControl>
									<FormLabel className='font-normal'>
										You agree to our friendly privacy policy.
									</FormLabel>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type='submit'
							className='w-full bg-[#70B301] hover:bg-[#0A241A] text-[#0A241A] hover:text-[#70B301] font-semibold'>
							Send Message
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
export default ContactForm;
