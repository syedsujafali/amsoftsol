import React from "react";

export const metadata = {
    title: "Privacy Policy - AM Software Solution",
    description: "Our commitment to protecting your privacy and personal data.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400">Privacy Policy</h1>
                
                <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to AM Software Solution. We value your privacy and are committed to protecting your personal data. 
                            This privacy policy will inform you as to how we look after your personal data when you visit our website 
                            and tell you about your privacy rights and how the law protects you.
                        </p>Section
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Identity Data (name, username)</li>
                            <li>Contact Data (email address, telephone numbers)</li>
                            <li>Technical Data (IP address, browser type, location)</li>
                            <li>Usage Data (information about how you use our website)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your service requests.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To improve our website, services, and customer experiences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: 
                            <span className="text-blue-400 ml-2">support@amsoftwaresolution.com</span>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
