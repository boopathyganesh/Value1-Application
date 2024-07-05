'use client'

import Brand from "@/public/images/logo-big.png"
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const NavbarCustom = () => {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between w-full py-5 px-20 bg-black-800">
			<div className="w-32 mx-5">
				<Image src={Brand} alt={""} />
			</div>
			<nav className="flex items-center justify-center gap-5">
				<ul className="flex items-center justify-center gap-5">
					{siteConfig.navItems.map((item, index) => (
						<li className="font-medium text-lg" key={index}><Link href={item.link}>{item.name}</Link></li>
					))}
				</ul>
				<div className="flex items-center justify-center gap-5">
					<Link className="font-medium px-5 py-3 bg-gold-300 rounded-2xl hover:scale-105 hover:bg-gold-500 smooth" href={"/login"}>Login</Link>
				</div>
			</nav>
		</nav>
	);
};

export default NavbarCustom;