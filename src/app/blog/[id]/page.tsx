import React from "react";
import { posts } from "@/components/Blog/constants";
import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = posts.find((p) => p.id.toString() === id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${post.categoryColor}`}>
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 border-y border-white/10 py-6">
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-blue-400" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiClock className="text-blue-400" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="blog-content space-y-6 text-gray-300 text-lg leading-relaxed">
                    <style dangerouslySetInnerHTML={{ __html: `
                        .blog-content h3 {
                            color: white;
                            font-size: 1.5rem;
                            font-weight: bold;
                            margin-top: 2rem;
                            margin-bottom: 1rem;
                        }
                        .blog-content p {
                            margin-bottom: 1.5rem;
                        }
                        .blog-content img {
                            width: 100%;
                            height: auto;
                            border-radius: 1rem;
                            margin: 2rem 0;
                            border: 1px solid rgba(255,255,255,0.1);
                        }
                    `}} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </main>
    );
}
