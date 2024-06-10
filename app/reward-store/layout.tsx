import Footer from "@/components/Footer";
import MobileMenu from "@/components/mobile-menu";
import Sidebar from "@/components/sidebar";
import AppNavbar from "@/components/ui/navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-full mx-auto flex items-center justify-between lg:gap-8 md:px-10">
            <div className="h-[750px] 2xl:h-screen flex items-center">
                <Sidebar />
            </div>
            <MobileMenu />
            <div className="hidden lg:flex h-[700px] border-r-2 border-separate border-gold-300 border-dashed"></div>
            <div className="pt-5 flex flex-col items-center justify-between w-full text-black-500 rounded-2xl h-[750px] 2xl:h-[850px] overflow-y-scroll no-scroll">
                <AppNavbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}