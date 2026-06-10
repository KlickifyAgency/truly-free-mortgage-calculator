import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ARM vs Fixed Rate Mortgage: 2026 Decision Calculator | Truly Free Mortgage',
  description: 'A 30-year fixed at 6.8% or a 5/1 ARM at 6.2%? The worst-case scenario, the caps, and the break-even point where the ARM becomes more expensive than the fixed.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/arm-vs-fixed-rate-mortgage-2026' },
};

const faqs = [
  { q: 'Is a 5/1 ARM a good idea in 2026?', a: 'If you are certain you will sell or refinance within 5 years, yes. The lower initial rate saves you money. If you might stay longer, the risk is high. Rates are volatile. I would only recommend an ARM to someone with a guaranteed relocation in 4 years.' },
  { q: 'What is the difference between a 5/1 and a 7/1 ARM?', a: 'The number before the slash is the initial fixed period. A 7/1 ARM has a 7-year fixed period. It typically has a slightly higher initial rate (maybe 0.2% higher than a 5/1). The longer fixed period gives you more security.' },
  { q: 'How are ARM rates determined?', a: 'Index (like SOFR) + margin. The index changes with market conditions. The margin is fixed for your loan. If SOFR is 4% and your margin is 2.5%, your rate is 6.5%. If SOFR rises to 6%, your rate goes to 8.5%.' },
  { q: 'Can I refinance out of an ARM before it adjusts?', a: 'Yes. Many people use an ARM with the plan to refinance to a fixed rate later. But refinancing costs 2-5% of the loan. If rates are higher when you refinance, you could be stuck.' },
  { q: 'What is the worst that can happen with an ARM?', a: 'Your rate can increase to the lifetime cap. For a 5/1 ARM starting at 6.2% with a 5% lifetime cap, the maximum rate is 11.2%. On a $400,000 loan, that means a payment of $3,865 (up from $2,452). That payment shock has bankrupted many homeowners.' },
  { q: 'Are ARMs safer than they were before 2008?', a: 'Yes. Underwriting is stricter. Borrowers must qualify at the fully indexed rate (initial rate plus margin). And there are no more "option ARMs" or "negative amortization" loans. But the risk of payment shock remains.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'ARM vs Fixed Rate Mortgage: 2026 Decision Calculator',
      'description': 'How a 5/1 ARM really works: caps, worst-case payments, and the break-even analysis against a 30-year fixed on a $400,000 loan.',
      'datePublished': '2026-06-10',
      'dateModified': '2026-06-10',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/arm-vs-fixed-rate-mortgage-2026',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': faqs.map(({ q, a }) => ({ '@type': 'Question', 'name': q, 'acceptedAnswer': { '@type': 'Answer', 'text': a } })),
    },
  ],
};

const steps = [
  ['1. Go to trulyfreemortgage.com and select ARM vs Fixed Calculator', 'Found under "Mortgage Types."'],
  ['2. Enter your loan amount', 'Example: $400,000.'],
  ['3. Enter the fixed rate option', 'Current 30-year fixed average: 6.8%.'],
  ['4. Enter the ARM initial rate', 'Typical 5/1 ARM initial rate is 0.5-1.0% lower than fixed. Use 6.2%.'],
  ['5. Enter the ARM initial fixed period', 'Usually 5, 7, or 10 years.'],
  ['6. Enter the cap structure', 'Initial cap (commonly 2%), periodic cap (1%), lifetime cap (5%). The calculator uses these to compute worst-case rate.'],
  ['7. Enter the index and margin (optional)', 'Most ARMs are tied to SOFR. The margin is typically 2.25-3.0%. The calculator has a default.'],
  ['8. Click "Calculate"', 'The tool will show: initial ARM payment, fixed payment, monthly savings in initial period. Then it will show the payment at first adjustment, second adjustment, and lifetime cap. It will also show the total cost under different rate scenarios.'],
];

export default function ARMvsFixedRateMortgage2026Page() {
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">ARM Guide</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            ARM vs Fixed Rate Mortgage: 2026 Decision Calculator
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            You are offered two options: a 30-year fixed at 6.8% or a 5/1 ARM at 6.2%. The ARM payment is lower. But in 5 years, the rate can adjust. How much could it go up? What is the worst case? You have no idea.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Adjustable-rate mortgages (ARMs) are making a comeback in 2026 because fixed rates are high. Lenders pitch ARMs as a way to lower your payment. But they do not fully explain the caps and risks. Most online ARM calculators are oversimplified. Bankrate&apos;s ARM calculator just shows the initial payment. NerdWallet&apos;s is slightly better but still misses the worst-case scenario. LendingTree does not have a calculator — they just want you to apply.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
            Truly Free Mortgage Calculator has a comprehensive ARM vs fixed calculator. You can input the initial rate, the adjustment caps, and the index margin. It will show you the payment in the worst-case scenario and the break-even point where the ARM becomes more expensive than the fixed.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">How ARMs Work (With Real Numbers)</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Let me explain a typical 5/1 ARM. The &quot;5&quot; means the initial fixed period is 5 years. The &quot;1&quot; means the rate adjusts once per year after that. The loan has caps: an initial cap (how much the rate can increase at the first adjustment), a periodic cap (how much per subsequent adjustment), and a lifetime cap (maximum rate).
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Example: 5/1 ARM at 6.2% initial rate. Caps: 2% initial, 1% periodic, 5% lifetime. That means at year 5, the rate can go up to 8.2% (6.2% + 2%). In year 6, up to 9.2% (8.2% + 1%). In year 7, up to 10.2%. Lifetime maximum is 11.2% (6.2% + 5%). The rate cannot exceed that.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Now compare to a 30-year fixed at 6.8% on a $400,000 loan. Fixed payment: $2,609. ARM initial payment: $2,452. Savings: $157 per month for the first 5 years.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            If rates rise to the maximum, the ARM payment in year 6 (8.2%) on a remaining balance of about $380,000 is $2,850. That is $241 higher than the fixed payment. From year 6 onward, you lose the initial savings and then some.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            The break-even analysis: over the first 5 years, you save $157 × 60 = $9,420. Then from year 6 to year 30, you pay extra each month. At the maximum rate, the extra is $241 per month for 25 years = $72,300. Even with the initial savings, you lose $62,880 in the worst case.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            But rates might not rise that much. If they only rise to 7.2% after 5 years, the ARM might still be cheaper. The risk is that you have no control.
          </p>

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Step-by-Step: Compare ARM vs Fixed Rate</h2>
          {steps.map(([t, d]) => (
            <div key={t} className="bg-white rounded-lg p-5 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] mb-3">
              <div className="text-[14px] font-semibold text-gray-900 mb-2">{t}</div>
              <div className="text-[14px] text-gray-500 leading-relaxed">{d}</div>
            </div>
          ))}

          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">The Lead-Gen Problem With Free Mortgage Calculators</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Bankrate&apos;s ARM content is essentially a lead funnel. They have a page explaining ARMs, then a &quot;Compare ARM Rates&quot; button. That button leads to a form where you enter your information. Bankrate sells your lead to lenders who specialize in ARMs. Those lenders earn higher commissions on ARM products, so they pay Bankrate more.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            NerdWallet&apos;s ARM calculator is more transparent, but they still want you to &quot;get personalized rates&quot; from their lender partners. The calculator itself does not show worst-case scenarios clearly.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            LendingTree does not differentiate between ARM and fixed. They just want you to apply for a loan. Once you are in their system, they will offer you both options.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Truly Free Mortgage Calculator shows the worst-case scenario upfront. I want you to understand the risk. If you still choose an ARM after seeing the numbers, that is your decision. But you will not be surprised.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Compare ARM vs Fixed Free
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
            Run the ARM vs fixed calculator before you decide. The lower initial payment is tempting. But the worst-case scenario might keep you up at night.
          </p>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              Figures on this page are for educational purposes only. Rates, caps, and program rules vary by lender, location, and borrower profile. Consult a licensed lender for loan-specific figures. Truly Free Mortgage Calculator does not collect personal data and does not connect users with lenders.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/arm-vs-fixed-rate', 'ARM vs Fixed Rate (Original Guide)', 'The fundamentals of adjustable vs fixed rate loans.'],
                ['/blog/interest-only-mortgage-calculator', 'Interest-Only Mortgage Calculator', 'The payment shock most calculators hide.'],
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
