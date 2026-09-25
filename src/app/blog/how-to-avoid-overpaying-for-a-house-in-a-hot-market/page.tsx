import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AuthorBox from '@/components/blog/AuthorBox'

const URL = 'https://trulyfreemortgage.com/blog/how-to-avoid-overpaying-for-a-house-in-a-hot-market'
const TITLE = 'How to Avoid Overpaying for a House in a Hot Market'
const DESCRIPTION = 'Set a payment ceiling and a value ceiling before you tour, read the comps yourself, and write offers that can survive a low appraisal. A plain-English plan.'

export const metadata: Metadata = {
  title: `${TITLE} | Truly Free Mortgage`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: 'How much over asking price is too much?',
    a: 'There’s no universal number. An offer over asking can be fair if recent comparable sales support it. It’s too much when it pushes the monthly cost past your budget, or when it’s well above what the comps support and you don’t have the cash to cover an appraisal gap.',
  },
  {
    q: 'What is an appraisal gap?',
    a: 'It’s the difference between your purchase price and a lower appraised value. Lenders generally base the loan on the lower of the two, so the buyer usually has to cover the gap in cash, renegotiate the price, or use an appraisal contingency to walk away.',
  },
  {
    q: 'Should I use an escalation clause?',
    a: 'It can help when there are multiple offers, but escalation clauses aren’t used or treated the same way everywhere. If you use one, set the cap at your walk-away price, not above it, and ask your agent how sellers in your area tend to respond to them.',
  },
  {
    q: 'Is it a bad idea to waive the inspection contingency?',
    a: 'It adds real risk. If the inspection finds expensive problems, you may not be able to renegotiate or back out without losing your earnest money. A shorter inspection window, or a pre-offer inspection if the seller allows one, are common alternatives. Talk it through with your agent before you change anything.',
  },
  {
    q: 'Does a bigger down payment help in a bidding war?',
    a: 'It can. More cash can make an offer look stronger to a seller and gives you room to cover an appraisal gap. Just don’t put down so much that you’re left without an emergency cushion after closing.',
  },
  {
    q: 'Can I back out if the house appraises low?',
    a: 'It depends on your contract. An appraisal contingency usually lets you renegotiate or cancel, and FHA and VA purchase contracts generally include a clause with a similar effect. Without that protection, backing out can cost you your earnest money. Read your contract and ask your agent or lender.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-09-25',
  dateModified: '2026-09-25',
  author: {
    '@type': 'Person',
    name: 'George Smith',
    jobTitle: 'Founder, Klickify Agency',
    url: 'https://www.linkedin.com/in/george-smith-832113217/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Truly Free Mortgage',
    url: 'https://trulyfreemortgage.com',
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const h2 = 'text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10'
const p = 'text-[15px] text-gray-600 leading-relaxed mb-4'
const list = 'text-[15px] text-gray-600 leading-relaxed mb-6 pl-6 space-y-2'
const link = 'text-blue-600 underline'

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="min-h-screen bg-[#F8F9FA]">
        <nav className="bg-white px-6 h-16 flex items-center shadow-[0_1px_3px_rgb(0_0_0/0.06)]">
          <Link href="/mortgage-calculator" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white" /></svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900">Truly <span className="text-blue-600">Free</span> Mortgage</span>
          </Link>
          <div className="ml-auto flex gap-6">
            <Link href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-800">Calculator</Link>
            <Link href="/blog" className="text-sm text-blue-600 font-medium">Blog</Link>
          </div>
        </nav>

        <article className="max-w-[760px] mx-auto px-6 py-12">
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Home Buying Guide</div>
          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">{TITLE}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <Image src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096' }}> — Founder, Klickify Agency · September 25, 2026</span>
            </div>
          </div>

          <p className={p}>
            Here’s the uncomfortable thing about a hot market: the house doesn’t care what you can afford. Other offers are coming in, the deadline is Sunday at 6 p.m., and the only feedback you get from the listing agent is “highest and best.” That’s exactly the moment people pay more than they meant to.
          </p>
          <p className={p}>
            Overpaying isn’t only paying above asking, though. Some sellers price a little under market to draw a crowd, and paying over that number can still be a fair deal. You overpay when you cross one of two lines: the most you can comfortably carry every month, or the most the house is worth to your lender. This guide shows you how to find both lines before you tour anything, and how to write offers that stay inside them.
          </p>

          <h2 className={h2}>1. Know the two lines that define overpaying</h2>
          <p className={p}>
            Line one is your <strong>payment ceiling</strong>. It’s the monthly housing cost you can live with after everything else in your life is paid for. It comes from your budget, not from your lender.
          </p>
          <p className={p}>
            Line two is your <strong>value ceiling</strong>. It’s roughly what recent comparable sales say the house is worth, and your lender cares about it too. On a purchase, lenders generally size your loan on the appraised value or the price, whichever is lower. Pay $30,000 more than the appraiser supports and that $30,000 usually has to come out of your pocket, in cash, at closing.
          </p>
          <p className={p}>
            A good offer sits under both lines. An offer that breaks the first one hurts every month for years. One that breaks the second, without a plan to cover the gap, can blow up the whole deal a few weeks before closing.
          </p>

          <h2 className={h2}>2. Set your payment ceiling before you look at a single listing</h2>
          <p className={p}>
            Your pre-approval tells you the most a lender is willing to lend. That’s not the same as the most you should borrow. A lender looks at your debt-to-income ratio. It doesn’t know about daycare, the car that’s due for replacement, or how much you like to keep in savings.
          </p>
          <ol className={`${list} list-decimal`}>
            <li><strong>Get a real rate quote.</strong> Ask a lender, or two, for a quote based on your credit and your down payment. Don’t plug in a rate you saw in a headline.</li>
            <li><strong>Run the numbers.</strong> Enter the price, down payment, rate, property taxes and HOA dues in our <Link href="/mortgage-calculator" className={link}>free mortgage calculator</Link>. You’ll see the monthly payment, PMI when it applies, and the full amortization schedule.</li>
            <li><strong>Add what the calculator doesn’t cover.</strong> Homeowners insurance, utilities and a maintenance budget aren’t in that payment. Get an insurance quote for the actual ZIP code, because premiums can vary a lot from one area to the next.</li>
            <li><strong>Work backward to a price.</strong> Try a few prices until the total monthly cost lands where you’re comfortable. That price is your ceiling, even if your pre-approval letter says more.</li>
          </ol>
          <p className={p}>
            A hypothetical: say you’re pre-approved up to $475,000, but at $425,000 the full monthly cost is already the most you’d want to pay. Your ceiling is $425,000. The extra $50,000 of approval is room the lender gave you. It isn’t room you have to use.
          </p>
          <p className={p}>
            Want a second pass on the budget side? Our guide to <Link href="/blog/how-much-house-can-i-afford-2026" className={link}>how much house you can afford</Link> goes through it step by step.
          </p>

          <h2 className={h2}>3. Read the comps yourself, not just the list price</h2>
          <p className={p}>
            In a fast market the list price is a starting signal, not a verdict. The number that matters is what similar homes actually sold for recently.
          </p>
          <ol className={`${list} list-decimal`}>
            <li><strong>Ask your agent for a comparative market analysis (CMA).</strong> It should be built on recent closed sales, not active listings. An active listing is just an asking price.</li>
            <li><strong>Make sure the comps really compare.</strong> Similar square footage, bedroom count, age, lot and condition, close by, and sold recently. A fully renovated house two streets over doesn’t tell you much about a dated one.</li>
            <li><strong>Look at how the comps sold versus their list prices.</strong> If comparable homes have been closing above list, an offer over asking may still be fair. If they’ve been closing near list, a big premium is harder to justify, and harder for an appraiser to support.</li>
            <li><strong>Adjust for condition.</strong> A roof, furnace or set of windows near the end of its life is a real cost. A house that needs $25,000 of work isn’t worth the same as the one next door that doesn’t.</li>
          </ol>
          <p className={p}>
            Then write down a value range, low to high, that the comps support. Keep it next to your payment ceiling. You’ll need both in the next step.
          </p>

          <h2 className={h2}>4. Pick your walk-away price before the bidding starts</h2>
          <p className={p}>
            Deciding your limit while you’re staring at a Sunday deadline is how people talk themselves into an extra $20,000. Decide it on a quiet weekday, with a clear head, and write it down.
          </p>
          <p className={p}>
            Your walk-away price is the lower of two numbers: your payment ceiling, or the top of the comp range plus whatever appraisal gap you could actually cover in cash (the math is in the next section). If the bidding goes past it, you let this house go.
          </p>
          <p className={p}>
            If your market uses escalation clauses, your walk-away price is also your cap. An escalation clause says you’ll beat any competing offer by a set amount, up to a maximum. They aren’t used everywhere, and sellers don’t all treat them the same way, so ask your agent how they’re handled where you’re buying. The one rule that never changes: the cap is never higher than the number you wrote down.
          </p>

          <h2 className={h2}>5. Do the appraisal-gap math before you promise to cover it</h2>
          <p className={p}>
            When offers are stacking up, buyers sometimes add an appraisal gap clause: a promise to pay the difference in cash if the appraisal comes in under the price, often up to a set amount. It can make an offer stronger. It can also eat your savings faster than you’d expect.
          </p>
          <p className={p}>Here’s a hypothetical with a conventional loan and 10% down:</p>
          <ul className={`${list} list-disc`}>
            <li>You offer $420,000, planning $42,000 down and a $378,000 loan.</li>
            <li>The appraisal comes back at $400,000.</li>
            <li>At 90% loan-to-value, the lender will generally lend 90% of the lower figure: $360,000.</li>
            <li>You now need $60,000 for the down payment instead of $42,000, plus closing costs. That’s $18,000 more cash than you planned.</li>
          </ul>
          <p className={p}>
            So before you agree to cover a gap, check how much you’d have left after the down payment, <Link href="/blog/mortgage-closing-costs-explained" className={link}>closing costs</Link> and an emergency cushion. Your lender can tell you exactly how a low appraisal would change your loan.
          </p>
          <p className={p}>
            Using an FHA or VA loan? Ask about the clause those programs require in purchase contracts, the FHA amendatory clause and the VA escape clause. It generally lets you walk away without losing your earnest money if the appraisal comes in below the price. You can still choose to go ahead and pay the difference yourself.
          </p>

          <h2 className={h2}>6. Keep the contingencies that protect you from hidden costs</h2>
          <p className={p}>
            In a bidding war it’s tempting to strip your offer down to the bone. The trouble is that contingencies are what stop you from overpaying for problems you can’t see yet.
          </p>
          <ul className={`${list} list-disc`}>
            <li><strong>Inspection contingency.</strong> It lets you renegotiate or walk away if the inspection turns up serious problems. If you need a tighter offer, a shorter inspection window is usually a safer trade than dropping it entirely. Some buyers get a pre-offer inspection when the seller allows one.</li>
            <li><strong>Appraisal contingency.</strong> It lets you renegotiate or walk away if the appraisal comes in low. If you limit it with a gap clause, keep the amount to what you can really pay.</li>
            <li><strong>Financing contingency.</strong> It protects you if your loan falls through before closing.</li>
          </ul>
          <p className={p}>
            Waiving any of these can put your earnest money at risk and leave you paying for problems you’d otherwise have caught. Before you change or remove one, talk it through with your agent, and with a real estate attorney if attorneys are commonly part of home sales in your state. Our article on <Link href="/blog/home-inspection-vs-appraisal-what-buyers-need-to-know" className={link}>home inspection vs appraisal</Link> explains how those two reports fit together.
          </p>

          <h2 className={h2}>7. Compete on terms, not just price</h2>
          <p className={p}>
            Price isn’t the only thing a seller weighs. An offer that looks easy to close can win without being the highest one on the table.
          </p>
          <ol className={`${list} list-decimal`}>
            <li><strong>A strong pre-approval.</strong> A letter from a lender that has already reviewed your income, assets and credit carries more weight than a quick pre-qualification.</li>
            <li><strong>A flexible closing date.</strong> Ask the listing agent what timeline the sellers want, and match it if you can.</li>
            <li><strong>A rent-back.</strong> If the sellers need time to move, letting them stay for a short, agreed period after closing can help. Get the terms in writing.</li>
            <li><strong>A meaningful earnest money deposit.</strong> It shows you’re serious, and it’s generally credited toward your purchase at closing. You can lose it if you back out for a reason your contract doesn’t cover, so only put up what you can afford to risk.</li>
            <li><strong>Your paperwork in order.</strong> Down payment funds in place and documents ready make it easier for a seller to trust that you’ll close on time.</li>
          </ol>

          <h2 className={h2}>8. Don’t overpay on the loan, either</h2>
          <p className={p}>
            You can stay under your price ceiling and still overpay if the loan costs more than it has to. The Consumer Financial Protection Bureau suggests comparing offers from more than one lender, and the standard <a href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/" target="_blank" rel="noopener noreferrer" className={link}>Loan Estimate</a> form makes that easier: the rate, points, lender fees and estimated cash to close sit in the same places on every one.
          </p>
          <p className={p}>
            If a lender offers discount points, compare the upfront cost with the monthly savings and how long you’ll likely keep the loan. Our guide to <Link href="/blog/mortgage-points-calculator" className={link}>mortgage points</Link> shows how to work out the break-even.
          </p>

          <h2 className={h2}>9. Know when to walk away</h2>
          <p className={p}>
            Losing a house you loved stings. Buying one that squeezes your budget every month for years is worse. If the bidding passes your walk-away number, that’s your plan working, not failing.
          </p>
          <p className={p}>
            New listings keep coming, and waiting a little longer doesn’t mean you’ve lost. If you’d like a neutral second opinion on your budget, a HUD-approved housing counselor can go over it with you, often at little or no cost. The CFPB has a <a href="https://www.consumerfinance.gov/find-a-housing-counselor/" target="_blank" rel="noopener noreferrer" className={link}>tool to find one near you</a>.
          </p>

          <div className="bg-white rounded-lg p-6 my-10 shadow-[0_8px_24px_rgba(24,28,30,0.06)]">
            <div className="text-[17px] font-bold text-gray-900 mb-2">Find your payment ceiling first</div>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">Try a few prices, down payments and rates. No email, no signup, and your inputs stay in your browser.</p>
            <Link href="/mortgage-calculator" className="inline-block text-white text-sm font-semibold px-5 py-2.5 rounded-md" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>Open the mortgage calculator</Link>
          </div>

          <h2 className={h2}>Frequently asked questions</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-lg p-5">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <h2 className={h2}>Related reading</h2>
          <ul className={`${list} list-disc`}>
            <li><Link href="/blog/how-much-house-can-i-afford-2026" className={link}>How much house can I afford?</Link></li>
            <li><Link href="/blog/mortgage-closing-costs-explained" className={link}>Mortgage closing costs: what you actually pay</Link></li>
            <li><Link href="/blog/down-payment-calculator-guide" className={link}>How much do you really need for a down payment?</Link></li>
            <li><Link href="/blog/home-inspection-vs-appraisal-what-buyers-need-to-know" className={link}>Home inspection vs appraisal: what buyers need to know</Link></li>
          </ul>

          <p className="text-[13px] text-gray-500 leading-relaxed">
            This article is general education, not financial, legal or real estate advice. Loan rules, contract terms and local practices vary, so confirm the details with your lender, your agent, or a HUD-approved housing counselor before you make an offer.
          </p>

          <AuthorBox />
        </article>
      </div>
    </>
  )
}
