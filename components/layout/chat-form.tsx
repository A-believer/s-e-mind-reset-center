import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface ChatFormProps {
	isOpen: boolean;
	onClose: () => void;
}

export function ChatForm({ isOpen, onClose }: ChatFormProps) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted");
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed bottom-4 right-4 w-96 bg-background border rounded-lg shadow-lg p-6'>
			<Button
				variant='ghost'
				size='icon'
				className='absolute top-2 right-2'
				onClick={onClose}>
				<X className='h-4 w-4' />
			</Button>
			<h3 className='text-lg font-semibold mb-2'>We are currently offline</h3>
			<p className='text-sm text-muted-foreground mb-4'>
				Please drop a message and we&apos;ll get back to you as soon as possible.
			</p>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<Label htmlFor='name'>Name</Label>
					<Input id='name' required />
				</div>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input id='email' type='email' required />
				</div>
				<div>
					<Label htmlFor='message'>Message</Label>
					<Textarea id='message' required />
				</div>
				<Button type='submit'>Send Message</Button>
			</form>
		</div>
	);
}
