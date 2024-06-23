import Banner from "@/components/Corporate/CorporateBanner";
import ClientLove from "@/components/Corporate/ClientLove";
import Hero from "@/components/Corporate/CorporateHero";
import EmployeeLove from "@/components/Corporate/employeeLove";
import EmployerLove from "@/components/Corporate/employerLove";
import StandOut from "@/components/Corporate/stand-out";
import Image from "next/image";

const WhyValue1 = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <Hero />
            <StandOut />
            <Banner />
            <EmployerLove />
            <EmployeeLove />
            <ClientLove />
        </main>
    )
}

export default WhyValue1
