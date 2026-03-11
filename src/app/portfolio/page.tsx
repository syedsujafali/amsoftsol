import Portfolio from "@/components/Portfolio";

export const metadata = {
    title: "Our Portfolio - AM Software Solution",
    description: "View our previous projects and success stories at AM Software Solution.",
};

export default function PortfolioPage() {
    return (
        <main className="pt-20">
            <Portfolio />
        </main>
    );
}
