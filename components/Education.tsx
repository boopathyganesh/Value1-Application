import React from 'react'
import CustomCard from './ui/CustomCard'
import BigCard from './ui/BigCard';

const Education = () => {
    const data = [
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card1.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card2.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card1.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card2.jpg"
        }
    ];
    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-8xl mx-auto p-10 rounded-2xl'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h2 className="ml-10 text-3xl font-bold">Education</h2>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus blanditiis iure id aliquid quia aut placeat, ducimus vitae libero assumenda. Quod nesciunt, ex soluta blanditiis expedita officiis voluptas obcaecati itaque.</p> */}
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Overseas Education</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident recusandae dicta, impedit libero eaque in consequatur obcaecati asperiores accusamus illum ex iusto ipsum dolores soluta sapiente beatae vel incidunt.</p> */}
                        <div className='flex items-center justify-center gap-5 py-10'>
                            {data.map((card, index) => (
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute top-0 right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Language classes</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident recusandae dicta, impedit libero eaque in consequatur obcaecati asperiores accusamus illum ex iusto ipsum dolores soluta sapiente beatae vel incidunt.</p> */}
                        <div className='flex items-center justify-center gap-5 py-10'>
                            {data.map((card, index) => (
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute top-0 right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Education;
