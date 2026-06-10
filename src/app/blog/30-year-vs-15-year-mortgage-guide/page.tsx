import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '30-Year vs 15-Year Mortgage: Which Is Better? | Truly Free Mortgage',
  description: 'On a $420,000 home, the difference in total interest between a 30-year and 15-year mortgage is $273,000. The real numbers, the opportunity cost, and how to compare without giving up your email.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/30-year-vs-15-year-mortgage-guide' },
};

const faqs = [
  { q: 'Is a 15-year mortgage always better if you can afford the payment?', a: 'Not always. The 15-year locks you into a higher payment. If you lose your job or have a medical emergency, you cannot easily reduce that payment. The 30-year gives you flexibility. You can always pay extra on the 30-year to mimic a 15-year payoff. But you cannot pay less on the 15-year. So the 30-year is safer. Only choose the 15-year if you have a large emergency fund (6+ months of expenses) and stable income.' },
  { q: 'How much does a 1% lower rate save on a 15-year vs 30-year?', a: 'On a $300,000 loan, a 1% rate difference (6.8% vs 5.8%) on a 15-year term saves about $30,000 in total interest. But the monthly payment difference is about $200. You have to decide if the savings justify the higher payment.' },
  { q: 'Can I refinance from a 30-year to a 15-year later?', a: 'Yes. Many people buy with a 30-year, then refinance to a 15-year when their income increases. Refinancing costs 2-5% of the loan amount in closing costs. On a $300,000 loan, that is $6,000 to $15,000. You need to stay in the home long enough for the interest savings to exceed those costs. The break-even is usually 3-5 years.' },
  { q: 'What is the average rate spread between 15-year and 30-year in 2026?', a: 'Typically 0.5% to 0.75% lower for the 15-year. As of June 2026, 30-year average is 6.8%, 15-year is 6.2%. The spread narrows when rates are high and widens when rates are low. In 2021 when 30-year rates were 3%, 15-year rates were around 2.5%.' },
  { q: 'Should I take a 30-year mortgage if I plan to sell in 5 years?', a: 'Yes. The 15-year makes no sense for short-term ownership because the higher payment does not give you enough time to recoup the interest savings. On a 5-year hold, the 30-year is cheaper per month, and you will not pay the full 30 years of interest anyway.' },
  { q: 'How does the 30-year vs 15-year decision change with a higher down payment?', a: 'A larger down payment reduces the loan amount, which reduces the monthly payment difference. On a $200,000 loan instead of $336,000, the 30-year payment is $1,304, and the 15-year is $1,708. The difference is $404 per month, not $678. The total interest difference is $162,000 instead of $273,000. The 15-year is still attractive, but the cash flow impact is smaller.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': '30-Year vs 15-Year Mortgage: Which Is Better?',
      'description': 'The real numbers for a $420,000 home with 20% down: monthly payments, total interest, opportunity cost, and the extra-payment middle path.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/30-year-vs-15-year-mortgage-guide',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select the 30-year vs 15-year comparison tool', 'The tool is built into the main mortgage calculator. You will see a toggle or two input fields side by side.'],
  ['2. Enter your home price and down payment', 'Use the same numbers for both scenarios. For example, $420,000 home with $84,000 down.'],
  ['3. Enter the 30-year interest rate', 'Current average is 6.8%. But you can get a slightly lower rate for a 15-year. The spread is typically 0.5% to 0.75%. Enter 6.8% for 30-year and 6.2% for 15-year.'],
  ['4. Click "Compare"', 'The calculator will show side-by-side monthly payments, total interest, and payoff date. It will also show the monthly payment difference.'],
  ['5. Look at the total interest difference', 'On a $336,000 loan, the difference is about $273,000. That is the cost of the 30-year term. Ask yourself: is the lower monthly payment worth $273,000 over 30 years?'],
  ['6. Calculate the break-even point for refinancing', 'If you take the 30-year but plan to refinance to a 15-year later, the calculator can show you how many months of lower payments you need to justify the refinance closing costs. Generally, if rates drop 1%, refinancing makes sense.'],
  ['7. Run the "extra payment" scenario', 'Use the extra payment calculator to see how much you need to pay extra on the 30-year to match the 15-year payoff timeline. You might find that paying an extra $300 per month cuts your term from 30 to 20 years, which could be a good middle ground.'],
  ['8. Download the amortization schedule for both', 'See how much equity you build in the first 5 years with each option. On the 15-year, you build equity much faster. After 5 years on the 30-year at 6.8%, you will have paid down about $18,000 of principal. On the 15-year at 6.2%, about $68,000. That is a $50,000 difference in equity.'],
];

export default function ThirtyVsFifteenYearMortgageGuidePage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Loan Term Comparison</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            30-Year vs 15-Year Mortgage: Which Is Better?
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You are buying a $400,000 home. The lender gives you two options: a 30-year mortgage at 6.8% or a 15-year mortgage at 6.2%. The 15-year rate is lower — a full half point. You want to save on interest. But the monthly payment on the 15-year is much higher. You are not sure if you can afford it. You search for a comparison online, but every site pushes you to &quot;talk to a lender&quot; who will almost certainly recommend the 30-year because it is easier to qualify for.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Most online mortgage calculators are designed to keep you on the 30-year path. Lenders make more money from 30-year loans because you pay interest for twice as long. Bankrate, NerdWallet, and LendingTree all have 30-year as the default. Their calculators do not show you the brutal math of the 15-year unless you manually change the term. And even then, they make the 15-year look scary by highlighting the higher monthly payment without showing the massive interest savings.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            The decision between a 30-year and a 15-year mortgage is not just about monthly cash flow. It is about your stage of life, your other financial goals, and your tolerance for risk. I am going to show you the real numbers for a $420,000 home (the 2026 median) with 20% down. Then you can decide which path makes sense for you.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Numbers: 30-Year vs 15-Year on a $420,000 Home</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me lay out the exact math. Home price: $420,000. Down payment: 20% ($84,000). Loan amount: $336,000. For a 30-year fixed at 6.8%, the monthly principal and interest payment is $2,191. Total interest paid over 30 years: $453,000. Total paid (principal + interest): $789,000. For a 15-year fixed at 6.2%, the monthly principal and interest payment is $2,869. That is $678 more per month. Total interest paid over 15 years: $180,000. Total paid: $516,000.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The difference in total interest is $273,000. That is real money. That is a year of salary for many people. If you can afford the extra $678 per month, the 15-year saves you nearly three-quarters of a million dollars over the life of the loan? Wait, $273,000, not $750,000. Still huge. But here is the catch. That $678 per month invested in the stock market at an average 7% return over 15 years would grow to about $210,000. So the opportunity cost is real. If you are a disciplined investor, you might come out ahead by taking the 30-year and investing the difference.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            But most people do not invest the difference. They spend it. The 30-year gives you flexibility. If you lose your job or have an emergency, you can drop down to the lower $2,191 payment. With the 15-year, you are locked into $2,869. That extra $678 per month is a commitment. For a dual-income household with stable jobs, the 15-year might be worth it. For a single buyer or someone with variable income, the 30-year is safer.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Let me add one more scenario. What if you take the 30-year but make extra payments equal to the 15-year payment? You would pay $2,869 per month on the 30-year loan. That extra $678 goes straight to principal. You would pay off the 30-year loan in about 15.5 years — slightly longer than the 15-year term. Total interest paid would be about $190,000, which is $10,000 more than the 15-year loan at 6.2%. The difference is because the 15-year has a lower interest rate. So if you can qualify for the lower rate, the 15-year is mathematically better. But many lenders offer the same rate for both terms, in which case the math flips.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Compare 30-Year and 15-Year Using the Calculator</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to run the numbers for your specific situation without giving up your email.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s 30-year vs 15-year comparison page is designed to push you toward a lender. The page has a large banner: &quot;See Today&apos;s Rates.&quot; When you click it, you enter your zip code, email, and phone number. That lead is sold to multiple lenders. Bankrate earns commission on any loan that closes. They do not care if you choose the 30-year or 15-year. They just want you to click.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s comparison tool is slightly better. They show real rate data from partner lenders. But to see the rates, you must provide your contact information. That information goes to the lenders listed. You will get calls from each of them. NerdWallet earns a fee per lead, typically $50 to $200.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The most misleading are the &quot;calculator&quot; sites that are actually lead generation companies. They have names like &quot;MortgageCalculator.org&quot; and &quot;CalculateMyMortgage.com.&quot; These sites are owned by lending networks. Every input you type is tracked and saved. Even if you do not click &quot;submit,&quot; they have your IP address and the numbers you entered. They can match that data to your identity through third-party data brokers.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not track your inputs. There is no lead form. No &quot;compare rates&quot; button. No lender network. The only way I make money is from AdSense ads on the page. You can run as many comparisons as you want, and your phone will never ring. That is the difference between a tool and a trap.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Compare 30-Year vs 15-Year Free
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
            Run the comparison yourself. Enter your numbers. See the real dollar difference. Then decide what works for your budget and your sleep-at-night factor.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates, tax rates, and insurance costs vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/15-year-vs-30-year-mortgage', '15-Year vs 30-Year Mortgage', '$237,000 difference in total interest on a $300k loan.'],
                ['/blog/extra-mortgage-payment-calculator', 'Extra Mortgage Payment Calculator', 'How extra payments shave years off your loan.'],
                ['/blog/mortgage-amortization-schedule-explained', 'Amortization Schedule Explained', 'See exactly where your money goes every month for 30 years.'],
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
