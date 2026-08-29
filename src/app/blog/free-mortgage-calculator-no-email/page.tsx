import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Mortgage Calculator — No Email, No Lead Capture | Truly Free Mortgage',
  description: 'Bankrate\'s mortgage calculator is not a calculator. It is a lead generation machine. Truly Free Mortgage gives you honest mortgage math — no email capture, no lender network, no spam calls.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/free-mortgage-calculator-no-email' },
};

const faqs = [
  { q: 'What is my actual monthly payment on a $420,000 house at 6.8% with 10% down?', a: 'With 10% down ($42,000), your loan amount is $378,000. Principal and interest at 6.8% over 30 years is $2,464 per month. You will also pay PMI because you put less than 20% down. On a $378,000 loan, PMI at 0.8% is $252 per month. Property taxes at 1.1% on $420,000: $385 per month. Insurance: $100 per month. Total monthly payment: $2,464 + $252 + $385 + $100 = $3,201. That is $525 more per month than with 20% down.' },
  { q: 'How much house can I afford if I make $100,000 per year?', a: 'Lenders use the 43% debt-to-income rule. $100,000 divided by 12 is $8,333 per month gross. 43% of that is $3,583 for total monthly debts including your mortgage. If you have no other debts (car, student, credit cards), your mortgage payment (PITI) can be up to $3,583. Using a reverse calculation, with 20% down, 6.8% interest, $3,583 payment allows a home price of roughly $560,000. With other debts, lower that number.' },
  { q: 'Is Bankrate\'s mortgage calculator accurate?', a: 'The math is accurate. The problem is not the calculation — it\'s what happens after you use it. Bankrate\'s calculator intentionally pushes you toward lead capture forms. They also often use slightly lower default rates to make payments look more affordable. My calculator uses the same math but without the sales funnel.' },
  { q: 'How do I calculate mortgage payment without PMI?', a: 'The formula for principal and interest alone is: P = L * [r(1+r)^n] / [(1+r)^n - 1], where L is loan amount, r is monthly interest rate (annual rate/12), n is total months. For $300,000 at 6.8% over 360 months: r=0.0056667, (1+r)^n = about 7.4, so payment = $300,000 * [0.0056667*7.4] / [7.4-1] = $300,000 * 0.041933 / 6.4 = $1,956 per month. Use my calculator to avoid doing this by hand.' },
  { q: 'What is the average mortgage payment in the US in 2026?', a: 'Based on median home price $420,000, average down payment 13%, average rate 6.8%, the average monthly principal and interest payment is roughly $2,300. Add taxes and insurance, the average total payment is around $2,800. This varies wildly by region. In California, property taxes are lower but home prices are higher. In Texas, property taxes are higher (around 2% average) but home prices are lower.' },
  { q: 'Can I use the calculator on my phone?', a: 'Yes. The calculator is fully responsive. It works on iPhone, Android, iPad. No app download required. And unlike Bankrate\'s mobile experience which constantly pushes you to call a lender, my calculator just shows the numbers.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Free Mortgage Calculator — No Email, No Lead Capture',
      'description': 'Mortgage math should be free and private. How to calculate your monthly payment without giving up your personal data — and how lead-gen calculators actually make money.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/free-mortgage-calculator-no-email',
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
  ['1. Go to trulyfreemortgage.com', 'No account, no email field, no "sign up to continue." The calculator is front and center. I designed it to work without JavaScript? Actually it uses JavaScript, but nothing is sent to my server until you choose to generate an amortization schedule. Your inputs stay in your browser.'],
  ['2. Enter the home price', 'Use the actual sale price or the maximum you are considering. For a first-time buyer in 2026, the median is around $420,000. But maybe you are looking at $350,000 or $500,000. Type it in. The slider helps you visualize.'],
  ['3. Enter your down payment amount or percentage', 'You can type either the dollar amount (e.g., $84,000) or the percentage (20%). The calculator automatically converts. If you put less than 20%, you will see a PMI field appear automatically. PMI typically costs 0.5% to 1.5% of the loan amount annually. On a $336,000 loan at 0.8%, that is $2,688 per year or $224 per month.'],
  ['4. Enter the interest rate', 'Use the current rate your lender quoted you. As of mid-2026, 30-year fixed rates are around 6.8% for well-qualified buyers. If you have a lower credit score, expect 7% to 7.5%. You can also check national averages on Freddie Mac\'s website.'],
  ['5. Enter the loan term in years', 'Most people use 30 years. But you can change it to 15 years, 20 years, or any custom term. The calculator will immediately update the monthly payment and total interest.'],
  ['6. Add property tax and insurance estimates if you know them', 'If you don\'t know, the calculator uses national averages: 1.2% of home value for taxes, 0.3% for insurance. But you can override these. For a $420,000 home, that default is $5,040/year in taxes and $1,260/year in insurance.'],
  ['7. Click "Calculate" or watch it update in real time', 'The calculator shows your monthly principal & interest, monthly taxes, monthly insurance, monthly PMI (if applicable), and total monthly payment. It also shows total interest paid over the full loan term. For a $336,000 loan at 6.8% over 30 years, total interest is about $453,000. Yes, you pay more in interest than the loan amount.'],
  ['8. Use the amortization schedule button', 'Click "View Full Amortization Table" to see every payment from month 1 to month 360. You will see how in the first month, most of your $2,191 payment goes to interest (about $1,904) and only $287 goes to principal. By year 20, that flips. This table is gold if you are trying to decide whether to refinance or make extra payments.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Use the Truly Free Mortgage Calculator (No Email Required)',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function FreeMortgageCalculatorNoEmailPage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Mortgage Calculator Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Free Mortgage Calculator — No Email, No Lead Capture
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You just got pre-approved for a mortgage. The lender says your monthly payment will be around $2,800. You want to check their math. You search &quot;mortgage calculator&quot; and click on Bankrate&apos;s tool. You type in the home price, down payment, and interest rate. The calculator shows $2,847 a month. Good. Then you see a big green button: &quot;Get My Rate.&quot; You ignore it and try to share the result with your partner. But the page won&apos;t let you print or share without entering your email and phone number. You hesitate. A second pop-up appears: &quot;Compare rates from up to 5 lenders.&quot; You close the tab.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Here is what most people don&apos;t realize. Bankrate&apos;s mortgage calculator is not a calculator. It is a lead generation machine. Every time you type in a home price and down payment, Bankrate captures that data. When you click &quot;Get My Rate&quot; or even just scroll past a certain point, they sell your information to lenders. Bankrate earns $150 to $500 per lead. NerdWallet does the same thing. LendingTree is even worse — their entire business is selling your mortgage application to multiple lenders simultaneously. Your phone rings within minutes.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            I built Truly Free Mortgage Calculator for one reason: mortgage math should be free and private. You should not have to trade your email address for a simple monthly payment estimate. You should not get phone calls from loan officers for the next three weeks. My calculator is ad-supported — I show display ads on the page, you see them, I make a few cents. No lead selling. No lender network. No email capture. Just honest mortgage math. Try it once. Your phone will not ring.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How to Calculate Your Monthly Mortgage Payment (The Real Math)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Before we walk through the calculator, you need to understand what goes into a monthly payment. Most people think the payment is just principal and interest. It&apos;s not. You have property taxes, homeowners insurance, and possibly private mortgage insurance (PMI) if you put down less than 20%. All of these together are called PITI — Principal, Interest, Taxes, Insurance.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me give you a real example. You buy a home for $420,000 (the 2026 median US home price). You put 20% down — that&apos;s $84,000. Your loan amount is $336,000. At the current average 30-year fixed rate of 6.8% — tracked weekly by <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer">Freddie Mac's Primary Mortgage Market Survey</a> — your monthly principal and interest payment is $2,191. Add property taxes. Nationwide average property tax rate is about 1.1% of home value annually. On $420,000, that&apos;s $4,620 per year or $385 per month. Add homeowners insurance — average $1,200 per year or $100 per month. Total monthly PITI: $2,191 + $385 + $100 = $2,676.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            That&apos;s your actual housing payment. But lenders also look at your debt-to-income ratio (DTI). They want your total monthly debts (including this mortgage payment) to be below 43% to 50% of your gross monthly income. If you make $8,000 a month gross, a $2,676 payment leaves room for other debts like car loans or student loans. This is the math lenders use. It&apos;s not magic. It&apos;s just multiplication and division.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Truly Free Mortgage Calculator (No Email Required)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is exactly how to calculate your monthly payment without giving up your personal data.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Here is how Bankrate, NerdWallet, and LendingTree actually make money. They do not charge you to use the calculator. They charge lenders. Every time you submit your email or phone number through their &quot;compare rates&quot; or &quot;get matched&quot; forms, they sell that lead to up to five lenders. Each lender pays between $150 and $500 per lead, depending on your credit score and loan size. If you are a prime borrower looking for a $400,000 loan, your lead is worth $400 or more.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            What happens after you submit? Within minutes, your phone rings. A loan officer from Quicken Loans (now Rocket Mortgage) calls. Then another from Bank of America. Then three more from local brokers. Your email inbox fills up with &quot;rate alerts.&quot; This continues for weeks. You did not ask for this. You just wanted to know if you could afford a $420,000 house.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree is the most aggressive. Their entire business model is lead aggregation. When you fill out their mortgage calculator, you are actually filling out a loan application that gets auctioned to lenders in real time. LendingTree earns an average of $400 per funded loan. They do not care if you get the best rate. They care that you close with one of their partner lenders.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does none of this. The site displays non-intrusive ads — that is the only revenue. No email capture. No phone number. No &quot;get matched&quot; button because this is not a lead generation business. I built this tool because I am a home owner who got tired of spam calls after using Bankrate. You deserve better.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Mortgage Payment Free
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
            Try the calculator now. Type in your numbers. See the real payment. No email, no phone calls, no lender spam. Just the math you need to make a decision. If you find it useful, share it with a friend who is house hunting.
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
                ['/blog/how-much-house-can-i-afford-2026', 'How Much House Can I Afford?', 'The 28/36 rule with real 2026 numbers — not lender sales math.'],
                ['/blog/mortgage-amortization-schedule-explained', 'Amortization Schedule Explained', 'See exactly where your money goes every month for 30 years.'],
                ['/blog/30-year-vs-15-year-mortgage-guide', '30-Year vs 15-Year Mortgage', 'The $273,000 difference nobody shows you up front.'],
                ['/blog/pmi-calculator-guide', 'PMI Calculator Guide', 'When you need PMI and exactly when you can drop it.'],
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
