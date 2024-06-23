import Banner from "@/components/Corporate/Banner"
import BenefitsSection from "@/components/Corporate/benefits"
import FlowChart from "@/components/Corporate/flowchart"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"

const Corporate = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Banner />
      <FlowChart />
      <BenefitsSection />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default Corporate
