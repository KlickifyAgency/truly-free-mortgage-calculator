import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Points Calculator: Are Discount Points Worth Buying? | Truly Free Mortgage',
  description: 'One point costs 1% of the loan and lowers your rate by about 0.25%. The real break-even is 5 years — longer than most people think. Run the numbers without giving up your email.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/mortgage-points-calculator' },
};

const faqs = [
  { q: 'Is it better to buy points or make a larger down payment?', a: 'Compare the break-even. A larger down payment reduces your loan amount and eliminates PMI. That often has a shorter break-even than points. Run both scenarios in my calculator. For most people, a larger down payment is better than buying points.' },
  { q: 'Are mortgage points tax-deductible?', a: 'Yes, in the year of purchase. Points paid on a primary residence purchase are fully deductible as mortgage interest in the year you pay them, as long as the points are standard for your area. For refinance points, you deduct them over the life of the loan.' },
  { q: 'Can I negotiate points with my lender?', a: 'Yes. Points are negotiable. Lenders have discretion. You can ask for a lower rate without points, or ask for a credit from the lender to cover closing costs instead of paying points.' },
  { q: 'How much does one point lower your rate in 2026?', a: 'Typically 0.20% to 0.30%. For a 6.8% base rate, one point might bring you to 6.55%. The exact reduction depends on the lender and market conditions.' },
  { q: 'Should I buy points if I plan to refinance in 2 years?', a: 'No. You will not recoup the cost. Only buy points if you are confident you will keep the loan beyond the break-even period.' },
  { q: 'Do points make sense for a 15-year mortgage?', a: 'Less so because the loan term is shorter. A 15-year loan at 6.2% has a higher monthly payment. The break-even for points on a 15-year loan is similar in months, but you have fewer months to enjoy the savings. Only buy points on a 15-year if you are certain you will not pay off early.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Mortgage Points Calculator: Are Discount Points Worth Buying?',
      'description': 'The real math of mortgage points on a $300,000 loan: break-even timeline, time value of money, diminishing returns of multiple points, and when points actually make sense.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/mortgage-points-calculator',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select Points Calculator', 'Found under "Advanced Mortgage Tools."'],
  ['2. Enter your loan amount', 'Example: $300,000.'],
  ['3. Enter the base interest rate (without points)', 'Example: 6.8%.'],
  ['4. Enter the number of points you are considering (1, 2, or fractional)', 'Example: 1 point.'],
  ['5. Enter the interest rate after buying points', 'Your lender should tell you the new rate. Example: 6.55%. The calculator can also estimate the rate reduction (typically 0.25% per point).'],
  ['6. Enter the cost per point (usually 1% of loan amount)', 'For $300,000, one point costs $3,000.'],
  ['7. Click "Calculate"', 'The calculator will show your monthly savings, total point cost, break-even in months and years, and total interest saved over 30 years.'],
  ['8. Adjust the "years you plan to stay" slider', 'If you plan to stay only 3 years, the calculator will show that buying points loses money. If you plan to stay 10 years, it saves money.'],
];

export default function MortgagePointsCalculatorPage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Discount Points Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Mortgage Points Calculator: Are Discount Points Worth Buying?
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            Your lender offers you a deal. Pay $3,000 upfront and lower your interest rate from 6.8% to 6.5%. You ask, &quot;Is that worth it?&quot; The lender says, &quot;You will save $150 per month.&quot; You do the math: $3,000 / $150 = 20 months break-even. That seems good. But is that the whole picture?
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Mortgage points (also called discount points) are <a href="https://www.irs.gov/taxtopics/tc504" target="_blank" rel="noopener noreferrer">prepaid interest, as the IRS classifies them</a>. One point costs 1% of the loan amount and lowers your interest rate by about 0.25% (but this varies by lender). On a $300,000 loan, one point costs $3,000 and might lower your rate from 6.8% to 6.55%. The monthly payment drops by about $50. Break-even is 60 months (5 years). That is longer than most people think.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Most online points calculators are designed to make points look attractive because lenders make money on points. Bankrate&apos;s calculator will show a short break-even period — they assume you will sell or refinance early, which is not true for everyone. NerdWallet&apos;s calculator is better, but it pushes you to &quot;compare lenders&quot; which means giving up your email. Truly Free Mortgage Calculator has a points calculator that shows the real break-even, including the opportunity cost of that $3,000.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Math of Mortgage Points</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me use a realistic example. You are borrowing $300,000 at 6.8% for 30 years. Your base payment (principal + interest) is $1,956. The lender offers you to buy one point for $3,000, reducing your rate to 6.55%. The new payment is $1,906. Monthly savings = $50.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Break-even in months = $3,000 / $50 = 60 months (5 years). If you stay in the home for more than 5 years, buying the point saves you money. If you sell or refinance before 5 years, you lose money.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            But there is another factor: the time value of money. If you did not spend that $3,000 on points, you could invest it. At a 5% after-tax return, that $3,000 would grow to $3,828 in 5 years. Meanwhile, your monthly savings of $50 invested each month would grow to about $3,400. The difference is small. The bigger factor is the break-even timeline.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            What about two points? That costs $6,000 and might lower your rate to 6.3%. New payment $1,857, savings $99 per month. Break-even = $6,000 / $99 = 60.6 months (still about 5 years). Points have diminishing returns. One point saves $50, the second point saves $49, the third point saves $48. So the break-even remains similar.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The decision comes down to how long you will keep the loan. If you are buying your &quot;forever home,&quot; buying points can make sense. If you might move in 3 years for a job, do not buy points.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Mortgage Points Calculator</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s points calculator is embedded in a page that also has a &quot;Find a Lender&quot; form. They want you to believe that buying points is always a good idea because they make money from the lenders who sell points. Bankrate earns a commission when you close a loan with one of their partners, and points increase the lender&apos;s profit.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s points tool is more neutral, but to see a personalized calculation, you need to enter your loan details into their &quot;rate comparison&quot; tool. That tool requires your email and phone number.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree does not have a standalone points calculator. They want you to apply for a loan first. Once you are in their system, they will try to upsell you on points.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator shows the numbers without any bias. Points are not good or bad. They are a trade-off between upfront cash and long-term savings. My calculator helps you decide based on your timeline.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Points Break-Even Free
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
            Run the points calculator before you agree to anything. Lenders make money when you buy points. Make sure you are not paying for a benefit you will never use.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates and point pricing vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/down-payment-calculator-guide', 'Down Payment Calculator Guide', 'How much you really need down — and what PMI costs if you put less.'],
                ['/blog/should-i-refinance-mortgage-2026', 'Should I Refinance in 2026?', 'The break-even math on refinancing your current loan.'],
                ['/blog/mortgage-closing-costs-explained', 'Closing Costs Explained', 'Every fee on the Closing Disclosure, broken down in dollars.'],
                ['/blog/30-year-vs-15-year-mortgage-guide', '30-Year vs 15-Year Mortgage', 'The $273,000 difference nobody shows you up front.'],
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
