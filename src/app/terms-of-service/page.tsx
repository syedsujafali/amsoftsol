import React from "react";

export const metadata = {
    title: "Terms of Service - AM Software Solution",
    description: "The terms and conditions governing your use of our services.",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400">Terms of Service</h1>
                
                <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the services provided by AM Software Solution, you agree to be bound by these Terms of Service. 
                            If you do not agree to these terms, please do not use our services or website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p>
                            AM Software Solution provides various IT services, including web development, mobile app development, UI/UX design, 
                            and digital marketing. We reserve the right to modify or discontinue any service at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
                        <p>
                            As a user of our services, you agree to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Provide accurate and complete information.</li>
                            <li>Maintain the security of your account credentials.</li>
                            <li>Use our services only for lawful purposes.</li>
                            <li>Not engage in any activity that interferes with or disrupts our services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            All content, trademarks, and intellectual property on this website and within our services are the property of 
                            AM Software Solution or its licensors. You may not use, reproduce, or distribute any content without our express written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p>
                            AM Software Solution shall not be liable for any indirect, incidental, or consequential damages resulting from the use 
                            or inability to use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                        <p>
                            We reserve the right to update these Terms of Service at any time. Your continued use of our services after any changes 
                            indicates your acceptance of the new terms.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
