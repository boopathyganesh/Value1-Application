import Banner from "@/components/Corporate/Banner"
import Companies from "@/components/Corporate/Companies"
import BenefitsSection from "@/components/Corporate/benefits"
import FlowChart from "@/components/Corporate/flowchart"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"

const pages = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Banner />
      <FlowChart />
      <BenefitsSection />
      <Companies />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default pages
