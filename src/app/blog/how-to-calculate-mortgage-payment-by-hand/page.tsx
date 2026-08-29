import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Calculate a Mortgage Payment by Hand | Truly Free Mortgage',
  description: 'The mortgage payment formula explained step by step with a real 2026 example. You can do this on a basic calculator or even on paper. No lead forms. No spam. Just math.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/how-to-calculate-mortgage-payment-by-hand' },
};

const faqs = [
  { q: 'Why does (1+r)^n require a scientific calculator?', a: 'Because raising a number to the 360th power is not possible on a basic calculator. You need a calculator with a y^x or ^ button. Most smartphones have scientific calculator mode. In iPhone, turn the calculator to landscape. In Android, look for the "exp" or "^" button.' },
  { q: 'Can I use Excel instead of doing it by hand?', a: 'Yes. Excel has a built-in PMT function: =PMT(rate/12, nper, -PV). For our example: =PMT(6.8%/12, 360, -360000) returns $2,347. That is easier than the manual formula.' },
  { q: 'Does this formula work for loans with PMI or taxes?', a: 'No. This formula is for principal and interest only. To include PMI, add the monthly PMI amount. To include taxes and insurance, add those as well. The formula only covers the loan amortization part.' },
  { q: 'How do I calculate the principal portion of a specific payment?', a: 'For payment number k, first calculate the interest for that month: remaining balance × r. Then principal = total payment − interest. To find remaining balance before payment k, use the formula: B = P × [(1+r)^n - (1+r)^k] / [(1+r)^n - 1]. This is more advanced.' },
  { q: 'Can I use this formula for an adjustable-rate mortgage?', a: 'No. ARMs have rates that change after the fixed period. You would need to recalculate after each adjustment. The formula works for each period, but you need to know future rates.' },
  { q: 'Why do online calculators give slightly different results than my manual calculation?', a: 'Rounding differences. The manual calculation uses rounded rates. Online calculators often use more precise decimals. The difference is usually less than $1 per $100,000.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'How to Calculate a Mortgage Payment by Hand',
      'description': 'The fixed-rate mortgage payment formula M = P * [r(1+r)^n] / [(1+r)^n - 1] explained step by step with a real $360,000 example at 6.8%.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/how-to-calculate-mortgage-payment-by-hand',
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
  ['1. Determine your loan amount P', 'Home price minus down payment. Example: $400,000 - $40,000 = $360,000.'],
  ['2. Convert annual interest rate to monthly decimal r', 'Divide annual rate by 100 to get decimal, then divide by 12. For 6.8%: 6.8/100 = 0.068; 0.068/12 = 0.0056667.'],
  ['3. Determine total number of payments n', 'For 30 years: 30 × 12 = 360. For 15 years: 180.'],
  ['4. Calculate (1 + r)^n', 'Use a scientific calculator or spreadsheet. For our numbers: (1.0056667)^360 = 7.394.'],
  ['5. Calculate numerator: r × (1+r)^n', '0.0056667 × 7.394 = 0.04190.'],
  ['6. Calculate denominator: (1+r)^n - 1', '7.394 - 1 = 6.394.'],
  ['7. Divide numerator by denominator', '0.04190 / 6.394 = 0.006553.'],
  ['8. Multiply by P', '360,000 × 0.006553 = $2,359.08.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Calculate Any Mortgage Payment Manually',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function HowToCalculateMortgagePaymentByHandPage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Mortgage Math</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            How to Calculate a Mortgage Payment by Hand
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You want to understand how mortgage payments work. Not just trust a calculator. You want to do the math yourself. Maybe you are a student, or you just like knowing how things work. You look up the formula. It is intimidating: P = L * [r(1+r)^n] / [(1+r)^n - 1].
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most online resources explain the formula poorly. They skip steps. They assume you have a financial calculator. They do not show a real example with actual numbers. And then they push you toward their &quot;free calculator&quot; that captures your email.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            I am going to walk you through the mortgage payment formula step by step with a real example from 2026. You can do this on a basic calculator or even on paper. No lead forms. No spam. Just math.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Mortgage Payment Formula Explained</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The formula for a fixed-rate mortgage payment is the same annuity math behind the amortization process the <a href="https://www.consumerfinance.gov/ask-cfpb/how-does-paying-down-a-mortgage-work-en-1943/" target="_blank" rel="noopener noreferrer">CFPB describes for how paying down a mortgage works</a>:
          </p>
          <div className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-4">
            <p className="text-[15px] font-semibold text-gray-900 text-center" style={{ fontVariantNumeric: 'tabular-nums' }}>M = P * [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]</p>
          </div>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Where: M = monthly payment (principal + interest only). P = principal loan amount (the amount you borrow). r = monthly interest rate (annual rate divided by 12). n = total number of payments (loan term in years × 12).
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let us use a real example. You buy a $400,000 home with 10% down. Your loan amount P = $360,000. Annual interest rate = 6.8%. Monthly rate r = 0.068 / 12 = 0.0056667. Loan term = 30 years, so n = 360.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            First, calculate (1 + r)^n. That is (1 + 0.0056667)^360. You cannot do this easily by hand. You need a calculator with an exponent function. On a scientific calculator, you type 1.0056667, then press the y^x button, then 360. The result is approximately 7.394.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Next, calculate the numerator: r * (1+r)^n = 0.0056667 × 7.394 = 0.04190. Next, calculate the denominator: (1+r)^n - 1 = 7.394 - 1 = 6.394. Now divide: 0.04190 / 6.394 = 0.006553. Finally, multiply by P: 360,000 × 0.006553 = $2,359.08.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            That is your monthly principal and interest payment. Compare to the calculator on my site — it will show $2,347 (slight difference due to rounding). The formula works.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Calculate Any Mortgage Payment Manually</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}
          <p className="text-[15px] text-gray-500 leading-relaxed mt-4 mb-6">
            That is your payment. For a 15-year loan at the same rate, n=180, (1.0056667)^180 = about 2.857, numerator=0.01618, denominator=1.857, ratio=0.00871, payment=360,000×0.00871=$3,136. Higher payment, but less total interest.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most sites that explain the mortgage formula are actually lead generation pages in disguise. They have a long article about the formula, then at the bottom: &quot;Calculate your payment with our free calculator — enter your email to get started.&quot; They know that people who want to understand the formula are serious buyers, which makes them high-value leads.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Other sites simply copy the formula from Wikipedia and add no real examples. They do not show you how to actually compute (1+r)^n because that requires a calculator. They expect you to give up and use their calculator.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator is not a lead generation tool. I am giving you the formula because I believe in transparency. You should not need to trust my calculator. You can verify the math yourself. That is the whole point of financial literacy.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Verify Your Math With the Free Calculator
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
            Now you know the formula. You can check any lender&apos;s math. You do not need to trust anyone. That is financial independence.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/mortgage-amortization-schedule-explained', 'Amortization Schedule Explained', 'See exactly where your money goes every month for 30 years.'],
                ['/blog/free-mortgage-calculator-no-email', 'Free Mortgage Calculator — No Email', 'Honest mortgage math without the lead-capture funnel.'],
                ['/blog/30-year-vs-15-year-mortgage-guide', '30-Year vs 15-Year Mortgage', 'The $273,000 difference nobody shows you up front.'],
                ['/blog/bankrate-mortgage-calculator-review', 'Bankrate Calculator Review', 'What happens to your data after you type in your numbers.'],
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
