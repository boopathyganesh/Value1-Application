import Image from "next/image"
import Savings from "@/public/images/svgs/savings.svg"

import { cardData as data } from "@/context/data"
import BenefitCard from "../ui/BenefitCard"

const StandOut = () => {
    return (
        <section className="max-w-full flex flex-col items-center justify-center gap-10 text-white my-10">
            <div className="text-center text-4xl font-semibold text-gold-400">
                <h1>Why Value1 Stands Out</h1>
                {/* <p></p> */}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
                {data.map((item,index)=>(
                    <BenefitCard key={index} title={item.title} image={item.image} description={item.description} />
                ))}
            </div>
        </section>
    )
}

export default StandOut
