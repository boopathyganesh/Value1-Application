'use client'

import Brand from "@/public/images/logo-big.png"
import Image from "next/image";

export const NavbarCustom = () => {

	return (
			<nav className="sticky top-0 z-50 flex items-center justify-between w-full py-5 px-10 bg-black-800">
				<div className="w-32 mx-5">
					<Image src={Brand} alt={""} />
				</div>
				<div>
					<h1>Username</h1>
				</div>
			</nav>
	);
};
