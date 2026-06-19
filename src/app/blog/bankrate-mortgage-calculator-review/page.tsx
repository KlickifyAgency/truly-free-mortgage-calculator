import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bankrate Mortgage Calculator: What They Don't Tell You | Truly Free Mortgage",
  description: 'Bankrate\'s mortgage calculator is a lead generation machine disguised as a tool. How their model works, what it costs you in privacy and spam, and a true free alternative.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/bankrate-mortgage-calculator-review' },
};

const faqs = [
  { q: 'Is Bankrate\'s mortgage calculator accurate?', a: 'Yes, the math is accurate. But the calculator is not the product. The leads are the product. The accuracy is just bait. They want you to trust the calculator so you will trust their lender recommendations.' },
  { q: 'Will my phone ring if I use Bankrate\'s calculator?', a: 'Only if you click "Get My Rate" or any button that submits your information. But even if you do not submit, Bankrate tracks your IP and browser fingerprint. They may retarget you with ads on other sites.' },
  { q: 'How does Bankrate make money if the calculator is free?', a: 'Lead generation. They earned $120 million in 2025 from mortgage leads alone. Their other revenue comes from credit card and banking product referrals.' },
  { q: 'Is there any way to use Bankrate without getting spammed?', a: 'Use a fake email and a Google Voice number. But Bankrate still tracks your IP address. Better to use a tool that does not require any personal information at all.' },
  { q: 'Does Truly Free Mortgage Calculator have lender relationships?', a: 'No. I do not partner with any lenders. I do not get paid for referrals. The only money comes from AdSense ads, which are clearly labeled. You can block ads with an ad blocker and still use the calculator.' },
  { q: 'Why should I trust a free calculator that is ad-supported?', a: 'Because my incentive is aligned with yours. I want you to use the calculator repeatedly. If I sold your data or caused you to get spam calls, you would never come back. My business depends on repeat usage. Bankrate\'s business depends on one-time lead capture. That is the fundamental difference.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': "Bankrate Mortgage Calculator: What They Don't Tell You",
      'description': 'How Bankrate\'s lead generation model works, what it costs you in privacy and spam, and how to use a real free mortgage calculator without lead gen.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/bankrate-mortgage-calculator-review',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com', 'No pop-ups, no "Get My Rate" buttons. Just a calculator.'],
  ['2. Enter your home price, down payment, interest rate, and loan term', 'Same as Bankrate. The math is identical because it is just a formula.'],
  ['3. Get your monthly payment instantly', 'No form. No email. No credit check. No cookies tracking your inputs.'],
  ['4. Click through amortization, extra payments, or refinance scenarios', 'All free. All instant.'],
  ['5. Compare different down payment levels using the slider', 'See how PMI changes. No hidden buttons.'],
  ['6. If you want to see actual rates, go to a separate site', 'I do not display rates because I am not a lender. For current rates, check Freddie Mac\'s weekly survey or ask a local credit union.'],
  ['7. Save your results by bookmarking the page', 'The calculator does not save your inputs, but you can bookmark with the URL parameters. For example: ?home=400000&down=20&rate=6.8'],
  ['8. That is it. No calls. No spam. No emails.', ''],
];

export default function BankrateMortgageCalculatorReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#F8F9FA]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <nav className="bg-white px-6 h-16 flex items-center shadow-[0_1px_3px_rgb(0_0_0/0.06)]">
          <a href="/mortgage-calculator" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white"/></svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900">Truly <span className="text-blue-600">Free</span> Mortgage</span>
          </a>
          <div className="ml-auto flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-800">Calculator</a>
            <a href="/blog" className="text-sm text-blue-600 font-medium">Blog</a>
          </div>
        </nav>

        <div className="max-w-[760px] mx-auto px-6 py-12">
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Honest Review</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Bankrate Mortgage Calculator: What They Don&apos;t Tell You
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You type &quot;mortgage calculator&quot; into Google. Bankrate is the first result. You click. The calculator is clean. You enter a home price, down payment, and rate. It shows a monthly payment. Then you see a big green button: &quot;Get My Rate.&quot; You are curious. You click. A form appears: name, email, phone number, credit score. You hesitate. Then you see a pop-up: &quot;By submitting, you agree to be contacted by up to 5 lenders.&quot; You close the tab.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s mortgage calculator is not a calculator. It is a lead generation machine disguised as a tool. Bankrate makes over $100 million annually from selling mortgage leads. Their calculator is designed to make you feel comfortable — it looks neutral and helpful — then push you into the sales funnel at the right moment.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            I am going to show you exactly how Bankrate&apos;s model works, what it costs you in privacy and spam, and introduce you to a true free alternative that does not sell your data. I built Truly Free Mortgage Calculator after getting burned by Bankrate&apos;s calls myself.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How Bankrate&apos;s Lead Generation Model Works</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate does not charge you to use the calculator. They charge lenders. Every time you click &quot;Get My Rate&quot; or &quot;Compare Offers&quot; or even just scroll past the calculator and hit a trigger, Bankrate captures your information. They also use cookies to track your behavior — how much you typed for home price, down payment, etc. Even if you do not submit a form, they build a profile on you.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            When you do submit, your information is packaged into a &quot;lead.&quot; Bankrate then sells that lead to up to 5 lenders. The price varies: for a high-value lead (high credit score, large loan amount), Bankrate can earn $400-$500. For average leads, $150-$250. They do this millions of times per year. That is their business.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            What happens to your information after you submit? Within minutes, you receive calls from loan officers. Some are from big banks like Rocket Mortgage. Some are from small local brokers. They all have your phone number and email. They will call you repeatedly. You will receive emails with &quot;rate alerts.&quot; Even if you ask to be removed, some will keep calling because your lead was sold to multiple parties.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Bankrate also partners with mortgage lenders who pay for placement. When you see &quot;Rates from Quicken Loans&quot; or &quot;Sponsored Lender,&quot; those lenders paid Bankrate to be featured. Bankrate does not compare all lenders — only those who pay. Their &quot;best rates&quot; are not necessarily the best rates.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: How to Use a Real Free Mortgage Calculator (Without Lead Gen)</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              {d && <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>}
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators (Revisited)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate is not the only offender. NerdWallet uses the same model but with a softer touch. Their calculator has a &quot;Get Matched&quot; button that leads to a form. NerdWallet earns a fee per lead, typically $100-$200. They also have a &quot;Compare Rates&quot; tool that requires your email.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree is the most aggressive. Their entire site is a lead auction. Every single &quot;calculator&quot; is actually a form. They do not even pretend to provide value. You enter your information, they auction it, and your phone explodes.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Zillow&apos;s mortgage calculator is integrated with their real estate platform. If you are logged into Zillow, they already have your contact information. They use calculator inputs to target you with listings and lender offers.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The only truly free calculators are those that do not have a lead generation business model. That means they are funded by advertising (like mine) or by donations (like open-source projects). Display advertising does not require collecting your data — the revenue model is showing ads, not selling your information.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Try the Truly Free Calculator
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">No account. No email. Runs in your browser.</p>
          </div>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mt-8 mb-6">
            Try the truly free calculator. Compare it side by side with Bankrate. The math is the same. The difference is what happens after you calculate. With me, nothing. With Bankrate, your data is sold.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures and revenue estimates on this page are for educational purposes only. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/free-mortgage-calculator-no-email', 'Free Mortgage Calculator — No Email', 'Honest mortgage math without the lead-capture funnel.'],
                ['/blog/how-to-calculate-mortgage-payment-by-hand', 'Calculate a Mortgage Payment by Hand', 'The exact formula lenders use, worked through step by step.'],
                ['/blog/how-much-house-can-i-afford-2026', 'How Much House Can I Afford?', 'The 28/36 rule with real 2026 numbers — not lender sales math.'],
                ['/blog/mortgage-amortization-schedule-explained', 'Amortization Schedule Explained', 'See exactly where your money goes every month for 30 years.'],
              ].map(([href, title, desc]) => (
                <a key={String(href)} href={String(href)} className="block bg-white rounded-lg p-4 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] hover:shadow-[0_4px_8px_-2px_rgb(0_0_0/0.1)] transition-shadow">
                  <p className="text-[13px] font-semibold text-blue-600 mb-1">{title}</p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </a>
              ))}
            </div>
          </div>

          <AuthorBox />
        </div>
      </div>
    </>
  );
}
