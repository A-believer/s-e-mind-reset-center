import backgroundImage from "@/public/images/home-hero.png";
import { ReactNode } from "react";
function HeroWrapper({children}: {children: ReactNode}) {
	return (
		<section className='bg-[#F7FEED]'>
			<div
				style={{
					backgroundImage: `url(${backgroundImage.src})`,
					backgroundPosition: "center top",
				}}
				className='bg-no-repeat bg-cover h-full'>
				<div>{children}</div>
			</div>
		</section>
	);
}
export default HeroWrapper;
