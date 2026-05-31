import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About George Smith — Truly Free Mortgage Calculator",
  description: "George Smith is the founder of Klickify Agency and creator of Truly Free Mortgage Calculator. Free tools built on client-side math, no data collection, no lead funnels.",
  alternates: { canonical: "https://trulyfreemortgage.com/about" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About George Smith — Truly Free Mortgage Calculator",
  description: "Founder of Klickify Agency and creator of the Truly Free ecosystem of financial tools.",
  url: "https://trulyfreemortgage.com/about",
  author: {
    "@type": "Person",
    name: "George Smith",
    url: "https://www.linkedin.com/in/george-smith-832113217/",
    email: "info@klickifyagency.com",
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: "Klickify Agency" },
    knowsAbout: ["mortgage calculations", "personal finance tools", "digital agency", "web development"],
  },
  publisher: {
    "@type": "Organization",
    name: "Klickify Agency",
    url: "https://trulyfreemortgage.com",
    email: "info@klickifyagency.com",
  },
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="min-h-screen bg-[#F8F9FA]">
        <nav className="bg-white shadow-[0_1px_3px_0_rgb(0_0_0/0.08)] px-6 h-20 flex items-center justify-between">
          <a href="/mortgage-calculator">
            <img src="/logo.png" alt="Truly Free Mortgage Calculator" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
          </a>
          <div className="flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-[#4a5568] hover:text-[#181c1e]">Calculator</a>
            <a href="/blog" className="text-sm text-[#4a5568] hover:text-[#181c1e]">Blog</a>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-16 pb-24">
          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] p-10">
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
              <div className="flex-shrink-0">
                <Image src="/george-smith.png" alt="George Smith — Founder, Klickify Agency" width={96} height={96} style={{ borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-1">Founder</div>
                <h1 className="text-2xl font-bold text-[#181c1e] tracking-tight mb-1">George Smith</h1>
                <div className="text-sm font-semibold text-[#0058c3] mb-4">Klickify Agency</div>
                <div className="flex items-center gap-4">
                  <a href="mailto:info@klickifyagency.com" className="text-sm text-[#718096] hover:text-[#181c1e] transition-colors">info@klickifyagency.com</a>
                  <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0058c3] hover:text-[#0070f3] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-[15px] text-[#4a5568] leading-relaxed">
              <p>I built Truly Free Mortgage Calculator because the standard model for mortgage calculators is broken. The biggest calculators in the US — Bankrate, LendingTree, Zillow, NerdWallet — are not tools. They are lead generation systems. You enter your home price and income, and within hours your contact information has been sold to four or five lenders simultaneously. Your "free" calculation cost you your phone number and triggered a calling campaign you never asked for.</p>

              <p>That model is profitable for the platforms and the lenders. It is terrible for anyone who just wants to run numbers before they are ready to talk to anyone. Most people shopping for a home spend weeks or months in the research phase — comparing purchase prices, modeling different down payments, understanding what a rate change actually costs over 30 years — before they ever want to speak with a loan officer. They shouldn't have to give up their contact information to do basic math.</p>

              <p>This calculator is different in one specific way: it runs entirely in your browser. The standard amortization formula, the PMI calculation, the full amortization schedule — all of it executes on your device. Nothing is sent to a server. No account is created. No session is stored. You can close the tab and no record of what you calculated exists anywhere outside your browser history.</p>

              <p>I run Klickify Agency, a digital agency focused on web tools, SEO, and performance marketing. Before starting the agency, I spent years inside the digital marketing industry watching exactly how lead generation worked — including the mortgage space. The gap between what borrowers needed (a clean calculation tool) and what the industry provided (a contact harvesting mechanism) was obvious. Building this calculator was straightforward. The math is not proprietary. The decision to not collect data is a choice, not a technical limitation.</p>

              <p>The tool is supported by Google AdSense advertising. That is the entire revenue model. No lead fees, no affiliate commissions, no lender partnerships. The business works as long as people find the calculator useful enough to return to it — which means the incentive is to build something genuinely useful, not something that extracts value from the people using it.</p>

              <p>Truly Free Mortgage Calculator is part of a broader set of tools built on the same philosophy. The goal is not to build a portal that captures every financial product category. It is to build specific tools that solve one problem well, respect the person using them, and stay free without a hidden monetization model underneath.</p>

              <p>If you find a calculation error, have a feature request, or want to give feedback on something that isn't working, email me directly at info@klickifyagency.com. I read every message and respond to reports of calculation errors within 48 hours.</p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
              <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#718096] mb-4">Calculator Methodology</div>
              <div className="space-y-3 text-[14px] text-[#4a5568] leading-relaxed">
                <p><span className="font-semibold text-[#181c1e]">Principal &amp; Interest:</span> Standard amortization formula: M = P[r(1+r)ⁿ]/[(1+r)ⁿ-1]. Mathematically exact for fixed-rate loans.</p>
                <p><span className="font-semibold text-[#181c1e]">Property Tax:</span> Default 1.2% annual rate (US average). Users can enter their county's exact rate for accurate local estimates.</p>
                <p><span className="font-semibold text-[#181c1e]">PMI:</span> Default 0.8% annual on loan balance, applied when down payment is below 20%. Drops off automatically at 20% equity in the amortization schedule.</p>
                <p><span className="font-semibold text-[#181c1e]">Homeowners Insurance:</span> Default 0.5% annual on home value (national average). Coastal and high-risk properties typically run higher.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/mortgage-calculator" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0058c3] text-white text-sm font-semibold rounded-lg hover:bg-[#0070f3] transition-colors">Use the Calculator</a>
              <a href="mailto:info@klickifyagency.com" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#F8F9FA] text-[#4a5568] text-sm font-semibold rounded-lg hover:bg-[#e2e8f0] transition-colors">Send Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
