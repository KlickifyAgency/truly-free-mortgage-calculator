import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Amortization Schedule Explained | Truly Free Mortgage',
  description: 'In the first year you paid $26,000 but only $3,000 went to principal. This is amortization. See the complete 360-month table instantly — no email required.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/mortgage-amortization-schedule-explained' },
};

const faqs = [
  { q: 'Why does my mortgage payment go mostly to interest in the first few years?', a: 'Because interest is calculated on the outstanding balance. At the start, your balance is the largest. Each month you pay down a tiny amount of principal, so interest drops slowly. The payment is fixed, so the principal portion grows over time. This is how all amortizing loans work — car loans, student loans, personal loans.' },
  { q: 'How much principal do I pay in the first 5 years on a $300,000 loan at 7%?', a: 'Loan amount $300,000, rate 7%, 30-year term. Monthly payment $1,996. First year interest: $20,900. Principal paid: $3,055. After 5 years, total principal paid: about $16,500. Remaining balance: $283,500. You will have paid about $120,000 in total payments, but only $16,500 went to equity.' },
  { q: 'Does making biweekly payments instead of monthly change amortization?', a: 'Yes. Biweekly means you make half your payment every 2 weeks. Over a year, that equals 13 full payments instead of 12. The extra payment goes entirely to principal. On a $300,000 loan at 7%, biweekly payments cut the term from 30 years to about 25 years and save $50,000 in interest. Our calculator has a biweekly option.' },
  { q: 'How can I see how much interest I will pay over the full loan term?', a: 'Look at the bottom of the amortization schedule. It shows total interest paid. For a $336,000 loan at 6.8%, total interest is $453,000. That is more than the loan itself. You can reduce this by making extra payments or choosing a shorter term.' },
  { q: 'Is mortgage interest still tax-deductible in 2026?', a: 'Yes, but only if you itemize deductions. The standard deduction for a married couple filing jointly in 2026 is about $30,000. You need total itemized deductions (mortgage interest, property taxes, charitable donations) to exceed that. On a $300,000 loan at 6.8%, first-year interest is $20,000. Add property taxes ($5,000) and state income tax ($5,000), you get $30,000. So you just barely benefit. For smaller loans, the standard deduction is better.' },
  { q: 'Does the amortization schedule change if I have an adjustable-rate mortgage?', a: 'Yes. ARM amortization is recalculated after each rate adjustment. The schedule shown on our calculator assumes a fixed rate. For ARMs, you need to use an ARM-specific calculator that lets you input rate caps and adjustment periods. I have a separate ARM calculator on the site.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Mortgage Amortization Schedule Explained',
      'description': 'How amortization works with real numbers: why your early payments go almost entirely to interest, and how to read the full 360-month table.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/mortgage-amortization-schedule-explained',
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
  ['1. Go to trulyfreemortgage.com and enter your loan details', 'Home price, down payment, interest rate, term. Use real numbers for your situation. The calculator will show the monthly payment.'],
  ['2. Click the "View Full Amortization Schedule" button', 'This is below the main results. It will generate a table with 360 rows (for a 30-year loan). The generation happens entirely in your browser. Your data is not sent anywhere.'],
  ['3. Look at the first few rows', 'You will see month 1: payment $2,191, interest $1,904, principal $287, remaining balance $335,713. Notice how the principal portion is tiny. This is normal.'],
  ['4. Scroll to year 5 (month 60)', 'See how much principal you have paid. In our example, after 5 years, total principal paid is about $20,000. Total interest paid is about $114,000. Remaining balance is about $316,000. This is eye-opening. You paid $131,000 over 5 years, but only $20,000 went to equity.'],
  ['5. Scroll to year 15 (month 180)', 'At this point, principal paid accelerates. Remaining balance is about $220,000. You have paid $116,000 toward principal over 15 years (half the loan). Interest paid to date is about $278,000.'],
  ['6. Find the month where principal exceeds interest', 'This is the "tipping point." In our example, principal first exceeds interest around month 234 (year 19.5). Before that, you were paying more interest than principal every month. After that, you start making real progress.'],
  ['7. Use the schedule to plan extra payments', 'If you are considering making an extra $200 payment each month, add that to the principal column in your mind. The amortization table shows you exactly how many months that extra payment would skip. (Our extra payment calculator does this automatically.)'],
  ['8. Print or save the schedule for tax purposes', 'The schedule shows your annual mortgage interest paid, which is tax-deductible if you itemize. You can use the totals to prepare your taxes. No need to wait for a year-end statement from your lender.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Read and Use an Amortization Schedule',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function MortgageAmortizationScheduleExplainedPage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Amortization Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Mortgage Amortization Schedule Explained
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You have a mortgage. You make a payment every month. You know that part goes to principal and part to interest. But you have no idea how the split changes over time. You look at your annual statement. In the first year, you paid $26,000 total, but only $3,000 went to principal. The rest was interest. You feel like you are getting nowhere.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            This is amortization. It is the mathematical process of spreading your loan payments over time so that each payment is the same amount, but the proportion of principal and interest changes — <a href="https://www.consumerfinance.gov/ask-cfpb/how-does-paying-down-a-mortgage-work-en-1943/" target="_blank" rel="noopener noreferrer">the CFPB walks through the same mechanic</a> in its consumer guidance. In the early years, almost all your payment goes to interest. In the later years, most goes to principal. Lenders love this because they get their interest first. You should understand it because it affects your equity, your tax deductions, and your refinancing decisions.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Most free mortgage calculators show you the monthly payment but hide the amortization table behind a lead capture form. Bankrate only shows the first 12 months of amortization unless you give them your email. NerdWallet makes you sign up for an account to see the full schedule. LendingTree does not show amortization at all — they just want your phone number. Truly Free Mortgage Calculator shows the complete 360-month amortization table instantly. No email required. Here is how it works.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How Amortization Works (With Real Numbers)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me walk through a real example. You buy a $420,000 home with 20% down. Loan amount: $336,000. Interest rate: 6.8%. Term: 30 years. Monthly payment (principal + interest): $2,191. In the very first month, the interest is calculated as ($336,000 × 6.8%) / 12 = $1,904. So your first payment of $2,191 consists of $1,904 in interest and only $287 in principal. After that payment, your loan balance drops to $335,713.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            In month two, interest is calculated on the new lower balance: $335,713 × 6.8% / 12 = $1,902. Principal portion is now $2,191 - $1,902 = $289. You paid $2 more toward principal than in month one. This snowball continues. By month 180 (year 15), your loan balance has dropped to roughly $220,000. Interest that month is $1,247, principal is $944. By month 300 (year 25), balance is about $80,000. Interest is $453, principal is $1,738. In the final month, balance is $2,176, interest is $12, principal is $2,179, and the loan is paid off.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The total interest over 30 years on this loan is $453,000. That means you paid $453,000 in interest to borrow $336,000. The bank made a profit. But here is the key insight: if you sell the home after 5 years, you will have paid about $1,904 × 60 = $114,240 in interest, but only $287 + $289 + ... over 60 months = roughly $20,000 in principal. You will have built only $20,000 of equity from payments, plus whatever appreciation. That is why so many homeowners are underwater after 5 years if prices drop.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Read and Use an Amortization Schedule</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to access and interpret the full amortization table on Truly Free Mortgage Calculator.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s amortization schedule is a classic bait-and-switch. They show the first 12 months for free. Then they say &quot;To see the full 30-year schedule, enter your email.&quot; Once you enter, you are added to their lead list. They will send you &quot;rate alerts&quot; and &quot;home buying tips&quot; that are actually ads for lenders. They also share your email with third-party marketing partners.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet does something similar but more aggressive. They require you to create a free account to access the full amortization table. Creating an account requires your email, name, and zip code. That information goes into their CRM. They will call you if you show interest in a specific loan product. I have seen reports of NerdWallet selling user data to real estate agents.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree does not even offer an amortization table. Their &quot;mortgage calculator&quot; is just a lead form. You enter your loan details, and then they say &quot;Great! Now let&apos;s find you the best rates.&quot; The amortization table is not provided because they do not want you to see how much interest you will pay. It would hurt their conversion rates.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator gives you the full 360-month amortization table instantly. There is no &quot;enter your email to continue.&quot; There is no account creation. There is no &quot;get the rest of the table&quot; button. It is all there, free, for any loan size. I can do this because display advertising pays for the server. I do not need your email.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              View Your Full Amortization Schedule Free
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
            View the full amortization schedule for your loan right now. See exactly where your money goes every month for the next 30 years. No email, no signup, just math.
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
                ['/blog/amortization-schedule-generator', 'Amortization Schedule Generator', 'Generate the full 360-month table for any loan instantly.'],
                ['/blog/extra-mortgage-payment-calculator', 'Extra Mortgage Payment Calculator', 'How extra payments shave years off your loan.'],
                ['/blog/how-to-calculate-mortgage-payment-by-hand', 'Calculate a Mortgage Payment by Hand', 'The exact formula lenders use, worked through step by step.'],
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
