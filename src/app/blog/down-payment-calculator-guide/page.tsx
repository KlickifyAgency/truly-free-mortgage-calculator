import AuthorBox from '@/components/blog/AuthorBox';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Down Payment Calculator: How Much Do You Really Need? | Truly Free Mortgage',
  description: 'Do you need 20% down? Can you put 5%? What about 3%? The monthly cost for every down payment level on a $400,000 home — no email, no phone number.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/down-payment-calculator-guide' },
};

const faqs = [
  { q: 'What is the minimum down payment for a conventional loan in 2026?', a: 'For first-time home buyers, 3% down. For repeat buyers, 5% down. However, 3% down loans have stricter income limits and require the borrower to complete a homeownership education course.' },
  { q: 'How much down payment do I need for a $500,000 home with an FHA loan?', a: 'FHA requires 3.5% down, which is $17,500. But FHA loan limits vary by county. In most counties, the limit is over $500,000, so you are fine. Check HUD\'s website for your county.' },
  { q: 'Is it worth putting 20% down to avoid PMI if it empties my savings?', a: 'No. You should have an emergency fund of 3-6 months of expenses after closing. If putting 20% down leaves you with no cash reserves, put less down and accept PMI. The cost of PMI is temporary. The cost of being broke after a job loss is permanent.' },
  { q: 'How does down payment size affect my interest rate?', a: 'Larger down payments (20%+) typically get the best rates. Smaller down payments (5-10%) add 0.25-0.5% to the rate. Enter your lender-quoted rate directly into the calculator to see the exact payment at your own numbers — it does not auto-adjust the rate for you.' },
  { q: 'Can I use gift money for my down payment?', a: 'Yes. For conventional loans, gift money is allowed for down payment as long as the donor provides a gift letter. For FHA, gift money is allowed even for the entire down payment. The donor cannot be the seller or real estate agent.' },
  { q: 'Should I put extra money toward down payment or keep it for repairs?', a: 'Keep at least 1-2% of the home price for immediate repairs and maintenance. On a $400,000 home, that is $4,000 to $8,000. After that, put any extra toward down payment. A larger down payment reduces your monthly payment permanently.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Down Payment Calculator: How Much Do You Really Need?',
      'description': 'The real down payment math with 2026 numbers: monthly cost at 3%, 5%, 10%, 15%, and 20% down on a $400,000 home, including PMI at every level.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/', 'sameAs': ['https://www.linkedin.com/in/george-smith-832113217/'] },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/down-payment-calculator-guide',
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
  ['1. Go to trulyfreemortgage.com/mortgage-calculator', 'That is the free calculator. No sign-up, no email.'],
  ['2. Enter the home price', 'Use the price range you are shopping in. Example: $420,000.'],
  ['3. Enter your down payment amount', 'Start with what you have saved. Example: $50,000. The calculator shows the down payment percentage automatically (12%) and updates a slider you can drag to test other amounts.'],
  ['4. Enter your interest rate', 'Current 30-year fixed rates are widely published; use your own quote or a current market rate. The calculator does not guess or auto-adjust this for you — type in the number you want to test.'],
  ['5. Turn on Property Tax, Insurance, PMI, and HOA under "Additional Costs"', 'Each is a toggle. Turning PMI on shows what you pay below 20% down; turning it off isolates principal and interest only.'],
  ['6. Watch the numbers update as you type', 'There is no "Calculate" button — the payment recalculates live in your browser as you change any input.'],
  ['7. Drag the down payment slider to compare amounts', 'Slide from 3% to 20%. Watch the monthly payment change and PMI disappear at 20% down.'],
  ['8. Open "Full Amortization Schedule"', 'This expands the month-by-month payment breakdown so you can see how quickly you build equity at different down payment levels.'],
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Step-by-Step: Use the Down Payment Calculator',
  step: steps.map(([title, text], i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: String(title).replace(/^\d+\.\s*/, ''),
    text,
  })),
};

export default function DownPaymentCalculatorGuidePage() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Down Payment Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Down Payment Calculator: How Much Do You Really Need?
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You have $50,000 saved for a home purchase. You think that is a lot. Then you look at home prices. A decent house in your area costs $420,000. You realize $50,000 is only 12% down. You start researching: do you need 20% down? Can you put 5%? What about 3%? Every website gives a different answer.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The truth is that the minimum down payment depends on the loan type. Conventional loans go as low as 3% for first-time buyers. FHA loans go to 3.5%. VA and USDA loans can be 0% down. But lower down payments come with higher monthly costs (PMI or MIP) and higher interest rates — the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-1953/" target="_blank" rel="noopener noreferrer">CFPB's guide to private mortgage insurance</a> breaks down how that trade-off works. Your $50,000 might be enough for a $420,000 home with 10% down ($42,000) and leave $8,000 for closing costs. Or you could put 5% down ($21,000) and keep $29,000 in savings for emergencies.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Most down payment calculators are lead generation tools. Bankrate will ask for your email to &quot;save your results.&quot; NerdWallet&apos;s calculator is hidden behind a &quot;get personalized advice&quot; button. LendingTree does not have a calculator — they just want you to apply. Truly Free Mortgage Calculator has a down payment tool that shows you the monthly cost for every down payment level. No email. No phone number.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Real Down Payment Math (With 2026 Numbers)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me show you the cost differences for a $400,000 home at different down payment levels. We will assume a 6.8% interest rate and average property taxes ($400/month) and insurance ($100/month).
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            3% down ($12,000): Loan $388,000. PMI at 0.85% = $275/month. Principal &amp; interest $2,530. Total monthly: $2,530 + $275 + $400 + $100 = $3,305.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            5% down ($20,000): Loan $380,000. PMI at 0.8% = $253/month. P&amp;I $2,478. Total: $2,478 + $253 + $400 + $100 = $3,231. Monthly savings vs 3% down: $74.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            10% down ($40,000): Loan $360,000. PMI at 0.6% = $180/month. P&amp;I $2,347. Total: $2,347 + $180 + $400 + $100 = $3,027. Monthly savings vs 5%: $204. vs 3%: $278.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            15% down ($60,000): Loan $340,000. PMI at 0.3% = $85/month. P&amp;I $2,216. Total: $2,216 + $85 + $400 + $100 = $2,801. Monthly savings vs 10%: $226.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            20% down ($80,000): Loan $320,000. No PMI. P&amp;I $2,086. Total: $2,086 + $400 + $100 = $2,586. Monthly savings vs 15%: $215.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            The difference between 3% down and 20% down is $719 per month. Over 30 years, that is $258,840. But saving an extra $68,000 for the 20% down payment might take you years. During those years, home prices might rise. You have to balance monthly affordability with the time it takes to save.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Use the Down Payment Calculator</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s down payment calculator is embedded in a page that also has a &quot;Find a Lender&quot; form. Even if you do not fill out the form, Bankrate tracks your down payment inputs through cookies. They sell that behavioral data to lenders who target you with ads for &quot;low down payment programs.&quot;
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s calculator requires you to enter your email to &quot;save your down payment goals.&quot; Once you enter, you are added to their home buying newsletter. They will send you &quot;tips&quot; that are really ads for lenders and real estate agents.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree&apos;s down payment tool is not a calculator. It is a single question: &quot;How much can you put down?&quot; Then they ask for your contact information to &quot;match you with lenders who accept low down payments.&quot;
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator does not track your inputs. There are no cookies. No &quot;save my results&quot; feature because I do not want your data. You use the calculator, you see the numbers, you close the tab. That is it.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calculate Your Down Payment Options Free
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
            Use the down payment calculator to find the sweet spot for your savings. You might not need 20%. You might be ready with 10% or even 5%. The numbers will tell you.
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
                ['/blog/pmi-calculator-guide', 'PMI Calculator Guide', 'When you need PMI and exactly when you can drop it.'],
                ['/blog/how-much-house-can-i-afford-2026', 'How Much House Can I Afford?', 'The 28/36 rule with real 2026 numbers — not lender sales math.'],
                ['/blog/fha-vs-conventional-loan-2026', 'FHA vs Conventional Loan 2026', 'Which loan type actually costs less for your credit score.'],
                ['/blog/mortgage-closing-costs-explained', 'Closing Costs Explained', 'Every fee on the Closing Disclosure, broken down in dollars.'],
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
