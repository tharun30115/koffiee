import {
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
	LogoYoutube,
} from "react-ionicons";
import { companies } from "../data";
import logo from "../assets/images/logo.svg";

const Footer = () => {
	return (
		<div className="w-full flex flex-col">
			<div className="flex lg:flex-row flex-col lg:gap-0 gap-20 items-center justify-between lg:px-[310px] px-5">
				{companies.map((item) => (
					<img
						src={item.image}
						alt={item.alt}
						key={item.alt}
					/>
				))}
			</div>
			<div className="w-full mt-[100px] flex lg:flex-row flex-col items-start justify-between lg:gap-0 gap-10 lg:px-[310px] px-5">
				<div className="flex flex-col">
					<img
						src={logo}
						alt="logo"
						className="w-[100px]"
					/>
					<span className="font-Source text-lg font-light text-secondary max-w-[310px] mt-3">
						Blandit enim pretium purus morbi non tincidunt auctor eu molestie.
					</span>
					<div className="flex items-center gap-5 mt-5">
						<LogoFacebook cssClasses={"!text-icons !fill-icons cursor-pointer"} />
						<LogoInstagram cssClasses={"!text-icons !fill-icons cursor-pointer"} />
						<LogoTwitter cssClasses={"!text-icons !fill-icons cursor-pointer"} />
						<LogoLinkedin cssClasses={"!text-icons !fill-icons cursor-pointer"} />
						<LogoYoutube cssClasses={"!text-icons !fill-icons cursor-pointer"} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<a
						href="#"
						className=" text-secondary font-Source text-lg tracking-wider"
					>
						Home
					</a>
					<a
						href="#"
						className=" text-secondary font-Source text-lg tracking-wider"
					>
						About us
					</a>
					<a
						href="#"
						className=" text-secondary font-Source text-lg tracking-wider"
					>
						Services
					</a>
					<a
						href="#"
						className=" text-secondary font-Source text-lg tracking-wider"
					>
						Help & Support
					</a>
					<a
						href="#"
						className=" text-secondary font-Source text-lg tracking-wider"
					>
						Contact
					</a>
				</div>
				<div className="flex flex-col gap-2">
					<span className=" font-Source text-lg tracking-wider text-secondary">
						street mono, Banglore, India 560000
					</span>
				</div>
			</div>
			<div className="w-full h-[70px] mt-[100px] flex items-center justify-center border-t border-border">
				<span className="font-Source text-lg text-secondary font-light">
					© 2025 Kofee. Developed by{" "}
					<a
						href="https://github.com/tharun30115"
						target="_blank"
						className="underline font-semibold"
					>
						tharun
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
