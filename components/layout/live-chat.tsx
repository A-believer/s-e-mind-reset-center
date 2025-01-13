import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import livechatimage from "@/public/icons/livechat-icon.png"
import Image from "next/image";

interface LiveChatProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onStartChat: () => void;
}

export function LiveChat({
	isOpen,
	onOpenChange,
	onStartChat,
}: LiveChatProps) {
	return (
		<Popover open={isOpen} onOpenChange={onOpenChange}>
			<PopoverTrigger asChild>
				<Button
					className='fixed bottom-4 right-4 h-[75px] w-[75px] rounded-full'
					variant='default'><Image src={livechatimage} alt="live chat icon"/>
					
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80' align='end'>
				<div className='grid gap-4'>
					<div className='space-y-2'>
						<h4 className='font-medium leading-none'>
							Need Help? Let&apos;s Chat!
						</h4>
						<p className='text-sm text-muted-foreground'>
							Our team is here to assist you. Click the button below to start
							chatting.
						</p>
					</div>
					<div className='flex justify-center'>
						<Button
							onClick={onStartChat}
							className='rounded-md bg-[#70B301] hover:bg-black text-black hover:text-[#70B301] transition-all duration-500 font-bold px-9 py-2.5'>
							Start Chat Now
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
