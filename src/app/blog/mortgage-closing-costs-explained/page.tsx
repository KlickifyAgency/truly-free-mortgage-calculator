import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Closing Costs: What You Actually Pay | Truly Free Mortgage',
  description: 'Closing costs are the biggest surprise for first-time home buyers — an additional 2-5% of the home price. A realistic fee-by-fee breakdown for a $400,000 home. No email required.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/mortgage-closing-costs-explained' },
};

const faqs = [
  { q: 'How much are closing costs on a $300,000 home?', a: 'Typically 2-5% of the purchase price. For a $300,000 home, that is $6,000 to $15,000. The lower end is for VA or FHA loans with no origination fees. The higher end includes high transfer taxes (like in New York or Pennsylvania).' },
  { q: 'Can I roll closing costs into my mortgage?', a: 'Yes, but only if you have enough equity. For a purchase, you can increase the loan amount to cover closing costs, but that reduces your down payment percentage. For example, instead of 10% down ($40,000) plus $10,000 closing costs, you could put 8% down ($32,000) and add $10,000 to the loan for closing costs. You will pay interest on that $10,000 for 30 years.' },
  { q: 'Are closing costs tax-deductible?', a: 'Only certain items. Mortgage interest (prepaid) is deductible in the year of purchase. Property taxes are deductible. Origination points are deductible over the life of the loan (or in the year of purchase if you itemize). Title fees and appraisal are not deductible.' },
  { q: 'Who pays closing costs — buyer or seller?', a: 'Most are paid by the buyer. Seller typically pays real estate commissions (not part of closing costs), transfer taxes in some states, and any negotiated credits. In a buyer\'s market, you can ask the seller to pay 2-3% of the purchase price toward your closing costs.' },
  { q: 'What is a no-closing-cost mortgage?', a: 'It is a loan where the lender covers closing costs in exchange for a higher interest rate. For example, instead of 6.8%, you might get 7.2% with $0 closing costs. This is good if you plan to sell or refinance within 2-3 years. Bad if you stay long-term.' },
  { q: 'How can I reduce closing costs?', a: 'Shop lenders (origination fees vary). Ask for lender credits (higher rate for lower costs). Negotiate with the seller. Use a no-closing-cost mortgage. Avoid unnecessary fees like "processing fee" or "underwriting fee" — some lenders waive them.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Mortgage Closing Costs: What You Actually Pay',
      'description': 'A realistic closing cost scenario for a $400,000 home with 10% down: lender fees, third-party fees, title fees, government fees, and prepaids — $11,125 total, broken down.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/mortgage-closing-costs-explained',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select Closing Cost Calculator', 'Found under "Mortgage Tools." No account needed.'],
  ['2. Enter the home purchase price', 'Use the actual sale price. Example: $400,000.'],
  ['3. Enter your loan amount', 'This is home price minus down payment. Example: $360,000.'],
  ['4. Enter your location (zip code)', 'Some fees vary by state (transfer taxes, recording fees). The calculator uses a database of averages by state.'],
  ['5. Enter your down payment percentage', 'This affects the loan amount and some fees (e.g., origination percentage).'],
  ['6. The calculator will show a detailed breakdown', 'You will see each fee category with a typical range. Adjust the sliders if you have actual quotes from your lender.'],
  ['7. Note the "cash to close" total', 'This is down payment plus closing costs minus any seller credits or earnest money deposit.'],
  ['8. Use the "seller credit" option', 'If the seller has agreed to pay a portion of closing costs, enter that amount. The calculator will subtract it from your cash to close.'],
];

export default function MortgageClosingCostsExplainedPage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Closing Costs Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Mortgage Closing Costs: What You Actually Pay
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You found a home. You negotiated the price. You are ready to close. The lender sends you a <a href="https://www.consumerfinance.gov/owning-a-home/closing-disclosure/" target="_blank" rel="noopener noreferrer">Closing Disclosure</a>. It is 5 pages long. There are dozens of fees: origination charge, appraisal fee, credit report fee, title search, title insurance, recording fees, transfer taxes, prepaid interest, escrow funding. The total is $12,000. You had no idea.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Closing costs are the biggest surprise for first-time home buyers. Most online calculators only show the down payment. They do not show the additional 2-5% of the home price that you need to bring to closing. On a $400,000 home, that is $8,000 to $20,000. If you only saved for the down payment, you might be short.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate has a closing cost calculator, but it is generic. It asks for your zip code and loan amount, then gives a national average. It does not let you customize. And of course, it asks for your email to &quot;get a detailed estimate from local lenders.&quot; NerdWallet&apos;s closing cost tool is better, but it requires you to enter your contact information to &quot;compare estimates.&quot; LendingTree&apos;s version is just a lead form.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Truly Free Mortgage Calculator has a closing cost estimator that breaks down each fee category. You can adjust each number based on your loan estimate. No email required.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">What Closing Costs Actually Include (With Dollar Examples)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me break down a realistic closing cost scenario for a $400,000 home with 10% down ($40,000) and a $360,000 loan at 6.8%.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Lender fees: Origination charge (0.5-1% of loan) = $2,500. Underwriting fee = $500. Processing fee = $400. Total lender fees: $3,400.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Third-party fees: Appraisal = $600. Credit report = $50. Flood certification = $20. Tax service fee = $100. Total third-party: $770.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Title fees: Title search = $300. Title insurance (lender&apos;s policy) = $1,000. Title insurance (owner&apos;s policy) = $500 (optional but recommended). Settlement/closing fee = $500. Total title: $2,300.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Government fees: Recording fee = $150. Transfer taxes (varies by state, average 0.5% of sale price) = $2,000. Total government: $2,150.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Prepaids and escrow: Prepaid interest (from closing to first payment, assume 15 days) = $360,000 × 6.8% / 365 × 15 = $1,005. Property tax escrow (3 months) = $400 × 3 = $1,200. Insurance escrow (3 months) = $100 × 3 = $300. Total prepaids: $2,505.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Grand total closing costs: $3,400 + $770 + $2,300 + $2,150 + $2,505 = $11,125. That is about 2.8% of the $400,000 home price.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            You need to bring your down payment ($40,000) plus closing costs ($11,125) = $51,125. If you only saved $40,000, you are short. You can sometimes negotiate for the seller to pay some closing costs (up to 3% for FHA, 2-3% for conventional). In a buyer&apos;s market, that is common.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Estimate Your Closing Costs</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s closing cost calculator is actually a lead form. After you see the estimate, a pop-up says &quot;These costs can vary. Get personalized estimates from lenders in your area.&quot; You enter your contact information, and Bankrate sells it to up to 5 lenders. They earn $100-$300 per lead.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s tool is more transparent. They show you a range of closing costs, then offer to &quot;connect you with a lender who can provide a detailed estimate.&quot; That connection is a paid referral. NerdWallet gets a fee if you close with that lender.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree&apos;s closing cost &quot;calculator&quot; is not a calculator. It is a form titled &quot;Get Your Closing Cost Estimate.&quot; You fill it out, and they forward your information to multiple lenders. Your phone will ring within an hour.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not have any connection to lenders. The closing cost estimator uses industry averages and public data. It is designed to help you budget, not to generate leads. For an accurate closing cost estimate, you need to get a Loan Estimate from an actual lender. But for initial planning, my tool is more than sufficient.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Estimate Your Closing Costs Free
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
            Estimate your closing costs before you make an offer. You need to have the cash ready. Do not be surprised at the closing table.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Fees vary by lender, state, and transaction. Consult a licensed lender for a Loan Estimate with exact figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/down-payment-calculator-guide', 'Down Payment Calculator Guide', 'How much you really need down — and what PMI costs if you put less.'],
                ['/blog/how-much-house-can-i-afford-2026', 'How Much House Can I Afford?', 'The 28/36 rule with real 2026 numbers — not lender sales math.'],
                ['/blog/should-i-refinance-mortgage-2026', 'Should I Refinance in 2026?', 'The break-even math on refinancing your current loan.'],
                ['/blog/free-mortgage-calculator-no-email', 'Free Mortgage Calculator — No Email', 'Honest mortgage math without the lead-capture funnel.'],
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
