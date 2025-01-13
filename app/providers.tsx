"use client";

import { ChatForm } from "@/components/layout/chat-form";
import Footer from "@/components/layout/footer";
import { LiveChat } from "@/components/layout/live-chat";
import Navbar from "@/components/layout/navbar";
import Newsletter from "@/components/layout/newsletter";
import { Toaster } from "@/components/ui/toaster";
import { store } from "@/lib/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [showOfflineForm, setShowOfflineForm] = useState(false);
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				{children}
				<Newsletter />
				<Footer />
				<LiveChat
					isOpen={isPopupOpen}
					onOpenChange={setIsPopupOpen}
					onStartChat={() => {
						setIsPopupOpen(false);
						setShowOfflineForm(true);
					}}
				/>
				<ChatForm
					isOpen={showOfflineForm}
					onClose={() => {
						setShowOfflineForm(false);
						setIsPopupOpen(false);
					}}
				/>
				<Toaster />
			</QueryClientProvider>
		</Provider>
	);
}
