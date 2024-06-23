import Image from "next/image";
import Marquee from "react-fast-marquee";
import Value1 from "@/public/images/logo-big.png"
import Link from "next/link";

const Companies = () => {
    return (
        <Marquee autoFill speed={80} className="mt-10 bg-black py-2">
            <div key={'alpha'} className="flex flex-col items-center justify-center">
                <Link href='https://alphasolutions.org.in' target="_blank"><Image src={Value1} alt={"Alpha"} width={500} className="w-36 aspect-square object-contain grayscale hover:grayscale-0 transition-all duration-200 ease-linear" /></Link>
            </div>
        </Marquee>
    )
}

export default Companies
