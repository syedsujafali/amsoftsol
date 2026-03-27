import Blog from "@/components/Blog";

export const metadata = {
    title: "Our Blog - AM Software Solution",
    description: "Stay updated with the latest trends and insights from AM Software Solution.",
};

export default function BlogPage() {
    return (
        <main className="pt-20">
            <Blog />
        </main>
    );
}
