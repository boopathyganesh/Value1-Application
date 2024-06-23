import NavbarCustom from "@/components/navbar";
import ScrollToTop from "@/components/ui/Scroll2Top";
import Footer from "@/components/ui/footer";
import React from "react";

export default function CorporateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col bg-black-800">
            <NavbarCustom />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}
