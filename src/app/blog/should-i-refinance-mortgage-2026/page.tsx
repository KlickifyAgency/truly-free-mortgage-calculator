import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Should I Refinance My Mortgage? (2026 Break-Even Calculator) | Truly Free Mortgage',
  description: 'Refinancing is a numbers game: total closing costs divided by monthly savings. How to calculate your real break-even point without giving up your contact information.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/should-i-refinance-mortgage-2026' },
};

const faqs = [
  { q: 'Is it worth refinancing from 7.5% to 6.8% on a $300,000 loan?', a: 'Current payment at 7.5%: $2,098. New payment at 6.8%: $1,956. Savings: $142/month. On $300,000, typical closing costs are $7,500. Break-even = 53 months (4.4 years). If you plan to stay longer, yes. If not, no.' },
  { q: 'How much do rates need to drop for refinancing to make sense?', a: 'A general rule is 1% drop for a standard break-even of 2-3 years. With lower loan balances, you need a larger drop because monthly savings are smaller. On a $150,000 loan, a 0.5% drop saves only $45/month, so break-even might be 6-7 years. That is usually not worth it.' },
  { q: 'Can I refinance without paying closing costs by choosing a higher rate?', a: 'Yes. "No-closing-cost" refinances have a slightly higher interest rate. The lender covers the closing costs in exchange for a higher rate. For example, instead of 6.8%, you might get 7.0% with no closing costs. If you plan to stay only 1-2 years, this can be better. Our calculator has an option for no-closing-cost refinances.' },
  { q: 'Does refinancing reset my amortization clock?', a: 'Yes, unless you choose a shorter term. If you are 5 years into a 30-year loan and refinance into a new 30-year loan, you will pay interest for 35 total years. To avoid this, refinance into a 25-year or 20-year loan. The payment might be similar to your current payment, but you will pay off the loan earlier.' },
  { q: 'How does refinancing affect my taxes?', a: 'Mortgage interest remains tax-deductible if you itemize. The new loan\'s interest is deductible. If you take cash out, the interest on the cash-out portion may not be deductible if you use it for personal expenses (only for home improvements).' },
  { q: 'Should I refinance to remove PMI?', a: 'Possibly. If your home has appreciated enough that your loan-to-value is below 80%, refinancing can remove PMI. But you could also request PMI cancellation without refinancing. Refinancing only makes sense if you also get a lower rate.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Should I Refinance My Mortgage? (2026 Break-Even Calculator)',
      'description': 'The real math of refinancing with 2026 numbers: closing costs, break-even period, rolling costs into the loan, and the term-reset trap.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/should-i-refinance-mortgage-2026',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select the Refinance Calculator', 'You will find it under "Mortgage Tools." No account needed.'],
  ['2. Enter your current loan balance', 'Look at your latest mortgage statement. For a home purchased with 10% down, it might be around $378,000 after a few years.'],
  ['3. Enter your current interest rate', 'This is on your loan note. Example: 7.5%.'],
  ['4. Enter your remaining loan term in years', 'If you are 3 years into a 30-year, remaining term is 27 years.'],
  ['5. Enter the new interest rate you are considering', 'Use the rate you have been quoted or the national average. As of mid-2026, 6.8% is typical.'],
  ['6. Enter estimated closing costs', 'Ask your lender for a Loan Estimate. Typical range is $5,000 to $15,000. If you do not know, use 2.5% of the loan balance as an estimate. For $378,000, that is $9,450.'],
  ['7. Click "Calculate Refinance"', 'The calculator will show your current monthly payment, new monthly payment, monthly savings, total closing costs, and break-even point in months.'],
  ['8. Decide whether to roll closing costs into the loan', 'Toggle the option to see how the break-even changes. Rolling costs in reduces monthly savings but lowers upfront cash needed. The calculator will show both scenarios.'],
];

export default function ShouldIRefinanceMortgage2026Page() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Refinance Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Should I Refinance My Mortgage? (2026 Break-Even Calculator)
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You bought your home in 2023 when rates were 7.5%. Now rates have dropped to 6.8%. You see ads everywhere: &quot;Refinance and save $300 per month!&quot; You are tempted. But you remember that refinancing costs money. Closing costs can be $5,000 to $15,000. You want to know if the monthly savings are worth the upfront cost.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most refinance calculators online are designed to convince you to refinance. Bankrate&apos;s calculator will show you a low break-even point (like 12 months) because they assume low closing costs. Then they connect you with a lender who charges higher fees. NerdWallet&apos;s calculator is more honest, but it pushes you to &quot;compare offers&quot; which means giving up your email. LendingTree&apos;s refinance calculator is just a lead form.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            The truth is that refinancing is a numbers game. You need to calculate your break-even point: total closing costs divided by monthly savings — the same approach the <a href="https://files.consumerfinance.gov/f/documents/cfpb_should_i_refinance_handout.pdf" target="_blank" rel="noopener noreferrer">CFPB recommends in its refinancing guidance</a>. If you plan to stay in the home longer than the break-even period, refinancing makes sense. If you might move sooner, it does not. Here is how to do the math with real numbers, without giving up your contact information.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Math of Refinancing (With 2026 Numbers)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me use a realistic example. You bought a $420,000 home with 10% down. Your current loan balance is $378,000. Your current interest rate is 7.5%. Monthly principal and interest payment is $2,644. Now rates have dropped to 6.8%. The new payment on a $378,000 loan at 6.8% over 30 years is $2,464. That is a savings of $180 per month.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Now, what are the closing costs on a refinance? Typical costs include: origination fee (0.5-1% of loan), appraisal ($500), title insurance ($1,000), recording fees ($200), and prepaid escrow items. Total often ranges from 2% to 5% of the loan amount. On a $378,000 loan, 2% is $7,560. 3% is $11,340. Let&apos;s assume $8,000 in total closing costs.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Your break-even period is $8,000 / $180 per month = 44 months, or about 3 years and 8 months. If you plan to stay in the home for at least 4 more years, refinancing makes sense. If you might sell in 2 years, it does not.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            But here is the catch: you can often roll the closing costs into the new loan. Instead of paying $8,000 upfront, you add it to the loan balance. New loan balance becomes $386,000. The new payment on $386,000 at 6.8% is $2,517. Your monthly savings compared to the old payment ($2,644) is only $127 per month. Break-even becomes $8,000 / $127 = 63 months (5.25 years). Rolling costs in extends your break-even.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            You also need to consider that refinancing resets your loan term. If you are 3 years into a 30-year loan, you have 27 years left. Refinancing to a new 30-year loan means you will be paying for 33 total years (3 + 30). That extra 3 years of payments adds interest. A better strategy is to refinance into a 25-year or 27-year term to match your remaining timeline. Many lenders offer custom terms.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Refinance Break-Even Calculator</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to calculate your personal break-even point without a sales pitch.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s refinance calculator is the most aggressive lead generator on their site. After you calculate, they show a list of &quot;top lenders&quot; with a button to &quot;get personalized rates.&quot; Clicking that button submits your information to multiple lenders. Bankrate earns a commission for each lead. They have no incentive to tell you that refinancing might not make sense.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s refinance calculator is embedded within a page full of lender ads. The calculator itself is functional, but below it there are &quot;sponsored offers&quot; from lenders. If you click any of them, you are entering a lead funnel. NerdWallet makes money when you click and apply.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree&apos;s refinance calculator is not a calculator at all. It is a form: &quot;Enter your loan balance, rate, and credit score to get offers.&quot; There is no calculation. You fill out the form, and they send your information to up to 5 lenders. Your phone will ring within minutes.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not have any lender offers. There are no &quot;get rates&quot; buttons. The refinance calculator is just a tool. You see the math. You decide. I do not make money from refinances. My revenue is from AdSense ads, which are clearly marked. Your phone will not ring.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Refinance Break-Even Free
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
            Run the refinance calculator now. Enter your numbers honestly. See the real break-even. Do not let a lender convince you that 12 months is the break-even when it is actually 5 years.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates, closing costs, and program rules vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/mortgage-refinance-calculator', 'Mortgage Refinance Calculator', 'Run your refinance numbers with the live tool.'],
                ['/blog/mortgage-closing-costs-explained', 'Closing Costs Explained', 'Every fee on the Closing Disclosure, broken down in dollars.'],
                ['/blog/pmi-calculator-guide', 'PMI Calculator Guide', 'When you need PMI and exactly when you can drop it.'],
                ['/blog/extra-mortgage-payment-calculator', 'Extra Mortgage Payment Calculator', 'How extra payments shave years off your loan.'],
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
