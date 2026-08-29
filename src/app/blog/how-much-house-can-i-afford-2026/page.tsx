import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much House Can I Afford? (2026 Calculator) | Truly Free Mortgage',
  description: 'Your lender\'s pre-approval number is not what you can comfortably afford. The 28/36 rule with real 2026 numbers — and an affordability calculator that never asks for your email.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/how-much-house-can-i-afford-2026' },
};

const faqs = [
  { q: 'How much house can I afford on $70,000 a year?', a: 'Using the 28% rule, your maximum housing payment is $1,633 per month ($70,000/12*0.28). With 20% down, 6.8% interest, and assuming $300/month for taxes and insurance, the principal and interest portion is about $1,333. That supports a loan amount of roughly $205,000. With 20% down, that is a home price of $256,000. In most markets, that buys a small condo or an older townhouse. With 3% down (FHA), the payment would be higher due to PMI, so you would need a cheaper home.' },
  { q: 'Does the calculator include PMI automatically?', a: 'Yes. If you enter a down payment less than 20%, the calculator adds PMI. The default PMI rate is 0.8% of the loan amount annually, which is typical for conventional loans. FHA loans have MIP (mortgage insurance premium) at 0.55% to 1.05% depending on down payment and term. Our calculator lets you adjust the PMI rate if you know your specific loan type.' },
  { q: 'How much down payment do I need to avoid PMI?', a: '20% of the purchase price. On a $300,000 home, you need $60,000 down. On a $420,000 home, $84,000 down. Some conventional loans allow 5% down with PMI that automatically drops off when you reach 20% equity. FHA loans require MIP for the life of the loan if you put less than 10% down.' },
  { q: 'What is a comfortable debt-to-income ratio for most people?', a: 'Financial planners recommend 28% or less for housing and 36% or less for total debt. In expensive cities (NYC, San Francisco, Boston), many people stretch to 35% housing and 45% total debt. But that leaves little room for error. A $2,000 car repair or medical bill becomes a crisis. I recommend staying under 30% housing if you have any other debts.' },
  { q: 'Can I afford a $500,000 house on a combined income of $120,000?', a: '$120,000 annual gross = $10,000 per month. 28% = $2,800 max housing payment. On a $500,000 house with 10% down ($50,000), loan is $450,000. Principal and interest at 6.8%: $2,935. Add taxes at 1.2% ($500/month), insurance ($125/month), PMI ($300/month) = $3,860 total. That is $1,060 over the 28% rule. You would need a much larger down payment to make this work, or you need to look at homes under $350,000.' },
  { q: 'How does the affordability calculator handle variable income?', a: 'For self-employed or commission-based income, use the average of the last two years\' tax returns. Lenders will use that average minus business expenses. Our calculator lets you enter annual income as a single number, so you should do that averaging yourself. Be conservative. If your income fluctuates, assume the lower year.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'How Much House Can I Afford? (2026 Calculator)',
      'description': 'The real question is not what a bank will lend you. It is what you can pay every month without becoming house-poor. The 28/36 rule explained with real 2026 numbers.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/how-much-house-can-i-afford-2026',
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
  ['1. Go to trulyfreemortgage.com and click the Affordability Calculator tab', 'The tool loads instantly. There is no "sign up to see results." You will see fields for income, debts, down payment, and current rates.'],
  ['2. Enter your gross annual household income', 'Include salary, bonuses, commissions, and any regular side income. But be honest. Do not count overtime unless it is guaranteed. For a dual-income couple, combine both salaries. Example: $85,000 + $65,000 = $150,000.'],
  ['3. Enter your monthly debt payments', 'This includes minimum credit card payments, car loans, student loans, personal loans, and any alimony or child support. Do not include utilities or groceries. Example: $400 car, $300 student loan, $100 credit card = $800 total monthly debts.'],
  ['4. Enter your down payment amount', 'You can enter either a dollar amount or a percentage of the home price. The calculator will use the smaller of the two approaches. Start with what you actually have saved. A typical first-time buyer in 2026 puts down 5% to 10%. On a $400,000 home, that is $20,000 to $40,000.'],
  ['5. Enter current interest rate', 'Use the 30-year fixed rate. As of mid-2026, that is around 6.8% for well-qualified buyers. If you have a credit score below 700, add 0.5% to 1%. The calculator defaults to 6.8%, but you can change it.'],
  ['6. Enter property tax and insurance estimates', 'If you know the area, you can look up local property tax rates. National average is 1.2% of home value. For a $400,000 home, that is $4,800 per year or $400 per month. Insurance averages $1,200 per year or $100 per month.'],
  ['7. Click "Calculate Affordability"', 'The calculator will show two numbers. First, the maximum home price based on your income and debts (the 36% rule). Second, the monthly payment for that home price. You will see a warning if the payment exceeds 28% of your income. That is your reality check.'],
  ['8. Adjust the down payment and see the impact', 'Try increasing your down payment by $10,000. See how much lower the monthly payment goes. On a $400,000 home, every extra $5,000 down reduces your monthly payment by about $32 (less interest and potentially lower PMI). Over 30 years, that $5,000 saves you $11,500 in interest if rates stay at 6.8%. That is a 130% return.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Use the Affordability Calculator (No Lead Forms)',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function HowMuchHouseCanIAfford2026Page() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Affordability Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            How Much House Can I Afford? (2026 Calculator)
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You have been pre-approved for a mortgage. The lender says you qualify for up to $550,000. But you are not sure. That number seems high. You try to figure out what monthly payment that actually means, but every online affordability calculator asks for your email before showing results. One site even wants your Social Security number. You just want a rough estimate.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Here is the truth. Your lender&apos;s pre-approval number is the maximum they are allowed to lend based on debt-to-income ratios. It is not necessarily what you can comfortably afford. Lenders want you to borrow as much as possible because they make money on interest. Their &quot;pre-approval&quot; is a sales tool, not financial advice. Bankrate&apos;s affordability calculator will tell you that you can afford a $600,000 house on a $100,000 salary. Then they will sell your information to lenders who will approve you for exactly that amount.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            The real question is not what a bank will lend you. It is what you can pay every month without becoming house-poor. A mortgage calculator that does not ask for your email is the first step. But you also need to understand the rule of thumb that actually works: your total housing payment should not exceed 28% of your gross monthly income, and total debts (including the mortgage) should not exceed 36% — the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/" target="_blank" rel="noopener noreferrer">debt-to-income ratio the CFPB tells borrowers to calculate</a> before shopping for a loan. These are the old-school underwriting guidelines that responsible lenders use. Most online calculators ignore them because tighter numbers mean smaller loans and smaller commissions.
          </p>

          <div style={{ background: '#f0f4ff', borderLeft: '4px solid #2563eb', borderRadius: 8, padding: '28px 32px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', marginBottom: 12 }}>
              Keep housing payments under 28% of gross income, total debt under 36% — the CFPB's own DTI benchmark.
            </h2>
            <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, letterSpacing: '-0.01em', marginBottom: 12 }}>
              On a $100,000 salary ($8,333/month gross), that caps your housing payment at $2,333 and total debt at $3,000. At 6.8% with 20% down, that supports roughly a $450,000 home — often well below what a lender's pre-approval letter offers, because pre-approval maximizes what they can lend, not what fits your budget.
            </p>
            <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, letterSpacing: '-0.01em', margin: 0 }}>
              Drop to 10% down and PMI changes the math fast: a $450,000 home with 10% down runs about $3,475/month once PMI, taxes, and insurance are added — $1,142 over the 28% line on that same $100,000 salary.
            </p>
          </div>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Math Behind Affordability (28/36 Rule)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me explain the 28/36 rule with real numbers from 2026. Your gross monthly income is your salary before taxes. If you earn $100,000 per year, your gross monthly is $8,333. The 28% rule says your housing payment (principal, interest, taxes, insurance, and PMI) should be no more than $2,333 per month. The 36% rule says your total monthly debts (housing plus car loans, student loans, credit cards) should be no more than $3,000 per month.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Now let&apos;s reverse engineer what home price that supports. Using current rates at 6.8% and 20% down (to avoid PMI), a $2,333 principal and interest payment corresponds to a loan amount of roughly $360,000. With 20% down, that means a home price of $450,000. So on a $100,000 salary with no other debts, you can comfortably afford about $450,000. That is much lower than the $550,000 your lender might pre-approve you for.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            But here is where it gets real. Most first-time buyers do not have 20% down. They put down 5% or 10%. That adds PMI. On a $450,000 home with 10% down ($45,000), your loan is $405,000. Principal and interest at 6.8% is $2,642 per month. Add PMI at $270 per month, taxes at $450/month (1.2% on $450,000), insurance at $113/month. Total monthly payment: $3,475. That is $1,142 over the 28% rule. Suddenly that $450,000 home is unaffordable on $100,000 salary.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            This is why you need a calculator that does not sell your data. You have to run scenarios with different down payments and see the real monthly number. The difference between 20% down and 10% down on a $450,000 home is about $1,200 per month. That is real money. That is groceries, childcare, or retirement savings.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Affordability Calculator (No Lead Forms)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Here is how to determine how much house you can actually afford without entering a sales funnel.
          </p>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s affordability calculator is a masterpiece of marketing. It asks for your income, debts, down payment, and credit score range. Then it tells you that you can afford a surprisingly high home price. The calculator is programmed to be optimistic because optimistic users are more likely to click &quot;Get Matched with Lenders.&quot; Bankrate earns $150 to $500 per lead. They have no incentive to tell you that you cannot afford that house.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet does the same thing but with a softer touch. Their calculator includes a &quot;debt-to-income ratio&quot; meter that turns from green to yellow to red. But the thresholds are too generous. They consider a DTI up to 43% as &quot;acceptable&quot; for a mortgage, which is true for FHA loans. But they do not tell you that a 43% DTI means you are spending nearly half your gross income on debt. That leaves very little for savings, emergencies, or even basic living expenses.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree is the worst. Their affordability calculator is actually a loan application in disguise. The moment you hit &quot;calculate,&quot; you are entered into their lead auction system. Your phone will ring within 90 seconds. I tested this. I entered fake information, and within two minutes, I received calls from three different lenders. One left a voicemail saying they had &quot;already pulled my credit.&quot; I did not give them permission.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not ask for your email, phone number, or credit score. It does not save your inputs. It does not share anything with lenders. The only thing on the page is the calculator and some display ads. You can run 100 scenarios, and your phone will never ring. That is how a free calculator should work.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Check What You Can Afford — Free
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
            Use the affordability calculator now. It takes 60 seconds. No email. No phone calls. Just the real number you can actually spend. Then compare that to your pre-approval letter. The difference might surprise you.
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
                ['/blog/free-mortgage-calculator-no-email', 'Free Mortgage Calculator — No Email', 'Honest mortgage math without the lead-capture funnel.'],
                ['/blog/down-payment-calculator-guide', 'Down Payment Calculator Guide', 'How much you really need down — and what PMI costs if you put less.'],
                ['/blog/pmi-calculator-guide', 'PMI Calculator Guide', 'When you need PMI and exactly when you can drop it.'],
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
