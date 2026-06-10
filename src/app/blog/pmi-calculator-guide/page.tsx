import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PMI Calculator: When You Need It and When to Drop It | Truly Free Mortgage',
  description: 'PMI is not a punishment. It is a risk-based fee — and it is not permanent. Exactly how much you will pay and exactly when you can cancel. No email. No phone call.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/pmi-calculator-guide' },
};

const faqs = [
  { q: 'How much PMI will I pay on a $300,000 loan with 5% down and a 740 credit score?', a: 'For a 740 credit score, PMI rate is about 0.6% annually. $300,000 × 0.6% = $1,800 per year, or $150 per month. With 10% down, the rate drops to about 0.4%, or $1,200 per year ($100 per month). With 15% down, PMI could be as low as 0.2%, or $600 per year ($50 per month).' },
  { q: 'Can I cancel PMI without refinancing?', a: 'Yes, if you have a conventional loan. The Homeowners Protection Act requires lenders to cancel PMI automatically when your LTV reaches 78% based on the original amortization schedule. You can also request cancellation when you reach 80% LTV based on current value. You will need an appraisal (cost $400-$700) to prove the current value. FHA loans have different rules (MIP for the life of the loan if you put less than 10% down).' },
  { q: 'How much home appreciation do I need to cancel PMI early?', a: 'Formula: (Loan balance / Home value) ≤ 0.80. If your loan balance is $360,000, you need a home value of at least $450,000. That is $50,000 appreciation from a $400,000 purchase. On a $400,000 home, 12.5% appreciation. In a hot market, that could take 2-3 years. In a slow market, 5-7 years.' },
  { q: 'Is PMI tax-deductible in 2026?', a: 'No. The deduction for PMI expired at the end of 2021 and has not been renewed. For loans originated after 2021, PMI is not deductible. Some lawmakers have proposed reinstating it, but as of mid-2026, it is not deductible.' },
  { q: 'Should I put 20% down to avoid PMI or put less and invest the difference?', a: 'This depends on your investment returns. If you have $80,000 for a 20% down payment on a $400,000 home, you avoid PMI of about $250/month. That is a guaranteed 3.75% annual return on the extra $40,000 you would have put down (compared to 10% down). If you think you can earn more than 3.75% investing that $40,000, then put 10% down and invest. But PMI adds risk. Most financial advisors recommend avoiding PMI if you can.' },
  { q: 'Does my PMI payment go down over time as my loan balance decreases?', a: 'For conventional loans, the PMI premium is typically a fixed dollar amount each month. It does not decrease automatically. But when you refinance or cancel PMI, it stops entirely. FHA MIP does decrease slightly over time because it is calculated as a percentage of the remaining balance.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'PMI Calculator: When You Need It and When to Drop It',
      'description': 'How PMI works with real numbers: what it costs at every down payment level, the two ways to cancel it, and why waiting to save 20% down can cost you more.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/pmi-calculator-guide',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select the PMI Calculator', 'You will find it under the "Mortgage Tools" menu. No account needed.'],
  ['2. Enter your home purchase price', 'Use the actual price you paid or are considering. Example: $400,000.'],
  ['3. Enter your down payment amount', 'Either dollar amount or percentage. For 5% down on $400,000, enter $20,000 or 5%. The calculator will show your loan amount ($380,000).'],
  ['4. Enter your credit score range', 'PMI rates vary by credit score. Use the dropdown: Excellent (760+), Good (700-759), Fair (640-699), Poor (below 640). For a good score (720), select Good. The calculator will apply a typical PMI rate (0.8% for Good with 5% down).'],
  ['5. Enter your interest rate', 'Use the current 30-year fixed rate, about 6.8%. This is needed to calculate how fast you pay down principal.'],
  ['6. Check the "Include home appreciation" box (optional)', 'If you want to see how home value increases affect PMI cancellation, turn this on. You can enter an annual appreciation rate. Historically, US homes appreciate 3-4% annually on average. But some markets are higher.'],
  ['7. Click "Calculate PMI"', 'The calculator will show your monthly PMI cost, total PMI paid over the life of the loan if you never cancel, and the month and year when you will reach 80% LTV based on scheduled payments. It will also show when you will reach 78% LTV for automatic termination.'],
  ['8. Run a "What If" scenario', 'Change the down payment to 10% ($40,000). See how PMI drops. On $400,000 with 10% down, loan is $360,000. PMI rate might drop to 0.5% annually, or $150 per month. Total PMI paid is lower, and you reach 80% LTV faster because you start closer.'],
];

export default function PMICalculatorGuidePage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">PMI Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            PMI Calculator: When You Need It and When to Drop It
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You are buying your first home. You have $30,000 saved. The home costs $400,000. That is only 7.5% down, not 20%. The lender says you need private mortgage insurance (PMI). The cost is $250 per month. You are frustrated. You already stretched to save $30,000. Now you have to pay an extra $250 every month for something that protects the lender, not you.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Here is the truth. PMI is not a punishment. It is a risk-based fee. Lenders charge PMI when you put down less than 20% because statistics show that borrowers with less equity are more likely to default. But PMI is not permanent. You can cancel it once you reach 20% equity. And you can reach 20% equity faster than you think through a combination of principal payments and home appreciation.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Most online PMI calculators are attached to lead generation forms. Bankrate will ask for your email before showing you PMI estimates. NerdWallet buries the PMI information behind a &quot;get personalized rates&quot; button. LendingTree does not even have a standalone PMI calculator — they just want you to apply for a loan. Truly Free Mortgage Calculator includes a PMI calculator that tells you exactly how much you will pay and exactly when you can cancel. No email. No phone call.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How PMI Works (With Real Numbers)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me explain PMI with a concrete example. You buy a $400,000 home with 5% down ($20,000). Your loan amount is $380,000. PMI rates vary based on credit score and down payment. For a borrower with a 720 credit score and 5% down, PMI is typically 0.8% of the loan amount annually. That is $3,040 per year, or $253 per month. That monthly cost is added to your mortgage payment.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Now, when can you cancel PMI? Two ways. First, when your loan-to-value (LTV) ratio reaches 80%. That means your outstanding loan balance is 80% or less of the home&apos;s current value. For a $400,000 home, 80% LTV is a $320,000 loan balance. You started at $380,000. You need to pay down $60,000 in principal. How long does that take? On a 30-year loan at 6.8%, your monthly principal payment in the first year is about $250. It increases slowly. It would take about 11 years to pay down $60,000 through scheduled payments alone. But your home might also appreciate.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Second, you can request PMI cancellation when you reach 80% LTV based on the original value. By federal law (Homeowners Protection Act), your servicer must automatically terminate PMI when you reach 78% LTV based on the original amortization schedule. That happens around year 11 as well. But if your home appreciates, you can get an appraisal and request cancellation earlier. If your $400,000 home appreciates to $450,000 in 3 years, your loan balance is about $365,000. LTV = 365,000 / 450,000 = 81%. That is close. An appraisal might get you there.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The key takeaway: PMI is temporary. On a $380,000 loan at 0.8%, total PMI paid over 11 years is about $33,400. That is a real cost. But if waiting to save 20% down would take you 3 more years, during which home prices might rise 10%, you could be worse off. The math is not simple.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Calculate Your PMI and Cancellation Date</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to use the Truly Free Mortgage PMI calculator.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s PMI content is actually a lead generation funnel for its &quot;Mortgage Insurance&quot; partners. They have articles about PMI, but the calculators are minimal. To get a personalized PMI quote, you must enter your email and phone number. That information is sold to mortgage insurance companies who will call you to sell you their product. You do not need mortgage insurance — your lender will arrange PMI through their own channels.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s PMI calculator is more honest. They show estimates without requiring an email. But they still have a large button: &quot;Compare PMI Rates.&quot; That button leads to a form that asks for your contact information. NerdWallet earns a referral fee when you purchase a loan through their partners. They are not evil, but they are not neutral.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree does not even pretend. Their &quot;PMI&quot; page is just a lead form titled &quot;Get Matched with Lenders.&quot; There is no calculator. You fill out the form, and they auction your information to multiple lenders. Your phone will ring within minutes.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator gives you PMI estimates without any lead capture. I do not have a &quot;compare rates&quot; button. I do not partner with lenders. I do not sell your information. The calculator uses standard PMI tables from Freddie Mac and Fannie Mae. It is accurate enough for planning. When you actually apply for a loan, your lender will give you a precise PMI quote. But for deciding how much down payment to save, my calculator is all you need.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your PMI Free
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
            Calculate your PMI now. See exactly how much that 5% vs 10% vs 20% down payment costs you in monthly PMI. Then decide how much to save before buying.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates, PMI rates, and program rules vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/down-payment-calculator-guide', 'Down Payment Calculator Guide', 'How much you really need down — and what PMI costs if you put less.'],
                ['/blog/fha-vs-conventional-loan-2026', 'FHA vs Conventional Loan 2026', 'Which loan type actually costs less for your credit score.'],
                ['/blog/how-much-house-can-i-afford-2026', 'How Much House Can I Afford?', 'The 28/36 rule with real 2026 numbers — not lender sales math.'],
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
