import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extra Mortgage Payment Calculator — Real Savings Math | Truly Free Mortgage',
  description: 'An extra $200 per month on a $300,000 loan at 6.8% cuts 7 years off your mortgage and saves $78,000 in interest. Run the exact numbers — no email, no phone number.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/extra-mortgage-payment-calculator' },
};

const faqs = [
  { q: 'Is it better to make extra payments monthly or one lump sum per year?', a: 'Monthly is slightly better because interest accrues monthly. A $1,200 lump sum at the end of the year saves less interest than $100 per month for 12 months. The difference is small (about $50 over 30 years on a $300,000 loan). The key is consistency. Choose whichever fits your budget.' },
  { q: 'Should I pay extra on my mortgage or invest in retirement?', a: 'This is the most common question. At 6.8% mortgage rate, paying extra is a guaranteed 6.8% return. The stock market historically returns 7-10% but with risk. If you have high-interest debt (credit cards at 20%), pay that first. Then max out your 401(k) match (that is a 100% return). Then compare. I recommend splitting the difference: put half your extra cash toward mortgage, half into index funds.' },
  { q: 'How does an extra $100 per month affect a 15-year mortgage?', a: 'Less dramatic because the term is shorter. On a $300,000 loan at 6.2% over 15 years, base payment is $2,566. Extra $100 per month cuts the term by about 1.5 years and saves about $15,000 in interest. The 30-year loan benefits more from extra payments because you have more time for compounding.' },
  { q: 'Does making biweekly payments instead of monthly count as extra payments?', a: 'Yes. Biweekly means you make half a payment every 2 weeks. That results in 26 half-payments per year, or 13 full payments. The extra full payment goes to principal. On a $300,000 loan at 6.8%, biweekly payments cut the term from 30 years to about 25 years and save $60,000 in interest. Our calculator does not have a dedicated biweekly toggle — model the equivalent effect by dividing one extra monthly payment by 12 and entering that amount in the Extra Monthly Payment field.' },
  { q: 'Can I make extra payments on an FHA or VA loan?', a: 'Yes, there is no penalty for extra payments on any standard mortgage. FHA, VA, USDA, and conventional loans all allow prepayment without penalty. However, FHA loans have MIP that cannot be canceled early unless you refinance. So the benefit of extra payments is slightly less because you still pay MIP until you refinance.' },
  { q: 'How much will I save by rounding up my payment to the nearest $100?', a: 'If your payment is $1,956, rounding up to $2,000 adds $44 per month. Over 30 years, that $44 per month saves about $16,000 in interest and cuts 2.5 years off the loan. Small amounts add up.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Extra Mortgage Payment Calculator — Real Savings Math',
      'description': 'Three real scenarios on a $300,000 loan at 6.8%: what an extra $100, $200, or $500 per month actually saves in years and interest — and how that compares to investing.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/extra-mortgage-payment-calculator',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
    {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['#faq'],
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com/mortgage-calculator', 'That is the free calculator. No login, no email.'],
  ['2. Enter your loan balance as the home price with $0 down (or your current payoff balance)', 'If you have had the loan a while, enter your current outstanding balance as the home price and set down payment to $0 so the loan amount matches your real balance.'],
  ['3. Enter your interest rate', 'Use the rate on your loan note. For new loans, use your quoted rate. For older loans, use your actual rate.'],
  ['4. Enter your remaining term in years', 'If you just started a 30-year, enter 30. If you are 5 years in, enter 25.'],
  ['5. Scroll to "Payoff Acceleration" and enter your extra monthly payment', 'Start with $100, $200, $500, or any number. This field applies straight to principal on top of your regular payment.'],
  ['6. Read the results as you type', 'There is no separate calculate button — the "Payoff Impact of Your Extra Payment" panel updates instantly and shows your new payoff time, time saved, and total interest saved.'],
  ['7. Compare against $0 extra', 'Set the extra payment field back to $0 to see your original payoff time and interest, then re-enter your test amount to see the difference side by side.'],
  ['8. Open "Full Amortization Schedule"', 'This shows the month-by-month balance with your extra payment applied, so you can see exactly when the loan reaches zero.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Use the Extra Payment Calculator',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function ExtraMortgagePaymentCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Extra Payments Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Extra Mortgage Payment Calculator — Real Savings Math
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You have a $300,000 mortgage at 6.8%. Your monthly payment is $1,956. You get a raise at work. You have an extra $200 per month. You wonder: should I put that extra $200 toward my mortgage or invest it in the stock market? You ask friends. Some say pay down debt. Others say invest. You are confused.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most mortgage calculators only show you your base payment. They do not show you the dramatic impact of extra payments. An extra $200 per month on a $300,000 loan at 6.8% cuts 7 years off your mortgage and saves $78,000 in interest. That is real money. But is it better than investing? That depends on your risk tolerance and your other financial priorities.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            The problem is that most &quot;extra payment&quot; calculators are attached to lead generation sites. Bankrate has one, but it is buried under pages of ads and lender solicitations. NerdWallet&apos;s extra payment calculator requires an account. LendingTree does not have one at all. Truly Free Mortgage Calculator has a dedicated extra payment tool that shows you the exact savings. No email. No phone number. Just the math.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Math of Extra Payments</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me show you three scenarios on a $300,000 loan at 6.8% over 30 years. Base monthly payment: $1,956. Total interest: $404,000.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Scenario 1: Extra $100 per month. You pay $2,056 monthly. The loan is paid off in 24 years instead of 30. You save 6 years and $62,000 in interest. That $100 per month cost you $28,800 over 24 years ($100 × 288 months). But you saved $62,000 in interest. Net gain: $33,200.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Scenario 2: Extra $200 per month. You pay $2,156 monthly. The loan is paid off in 21 years. You save 9 years and $108,000 in interest. Your extra payments total $50,400 ($200 × 252 months). Net gain: $57,600.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Scenario 3: Extra $500 per month. You pay $2,456 monthly. The loan is paid off in 15 years. You save 15 years and $188,000 in interest. Your extra payments total $90,000 ($500 × 180 months). Net gain: $98,000.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Now compare to investing that extra $200 per month in an index fund earning 7% annually. After 21 years (the same timeframe as the extra payment scenario), you would have about $120,000. But you would still have a mortgage balance of about $150,000. So your net worth would be $120,000 (investments) minus $150,000 (debt) = negative $30,000. In the extra payment scenario, you have no debt and own your home free and clear. The comparison is not straightforward because the mortgage interest is guaranteed, while stock returns are not. In a high-rate environment like 6.8%, paying down debt is mathematically attractive.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Extra Payment Calculator</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to run the numbers for your specific loan.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s extra payment calculator is actually a loan officer lead form. After you input your numbers, they show a result, but then a pop-up appears: &quot;Want to see how much you can save with a lower rate? Talk to a lender.&quot; That is not helpful. You came to see extra payment savings, not to refinance. But Bankrate makes money from refinance leads, so they push you there.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s calculator is better, but to save your results or to see a detailed amortization, you need to create an account. Creating an account requires your email, which they use to send you &quot;personalized mortgage advice&quot; — which is just ads for lenders. They also track your behavior across their site to build a profile of your financial situation.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree&apos;s extra payment calculator does not exist. They have a &quot;mortgage payoff calculator&quot; that is actually a refinance lead form. You enter your loan details, and they say &quot;Great! You could save X by refinancing. Click here to see rates.&quot; There is no actual extra payment calculation.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not push you to refinance. It does not ask for your email. It does not have pop-ups. The extra payment calculator is a tool, not a funnel. You can run as many scenarios as you want. Your phone will not ring.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Extra Payment Savings Free
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">No account. No email. Runs in your browser.</p>
          </div>

          <h2 id="faq" className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mt-8 mb-6">
            Try the extra payment calculator now. Enter your loan and see how much time and money you can save with just $50 or $100 extra per month. It might change how you budget.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates and savings vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/mortgage-payoff-calculator', 'Mortgage Payoff Calculator', 'How extra payments shave years off your loan.'],
                ['/blog/mortgage-amortization-schedule-explained', 'Amortization Schedule Explained', 'See exactly where your money goes every month for 30 years.'],
                ['/blog/30-year-vs-15-year-mortgage-guide', '30-Year vs 15-Year Mortgage', 'The $273,000 difference nobody shows you up front.'],
                ['/blog/should-i-refinance-mortgage-2026', 'Should I Refinance in 2026?', 'The break-even math on refinancing your current loan.'],
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
