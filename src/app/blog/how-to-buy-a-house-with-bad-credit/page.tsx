import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'How to Buy a House with Bad Credit – Truly Free Mortgage',
  description:
    'Step‑by‑step guide for borrowers with low credit scores. Learn financing options, down‑payment strategies, and realistic budgeting to secure a home.',
  alternates: {
    canonical:
      'https://trulyfreemortgage.com/blog/how-to-buy-a-house-with-bad-credit',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Buy a House with Bad Credit',
  description:
    'Practical, data‑driven strategies for purchasing a home when your credit score is below 620.',
  author: {
    '@type': 'Person',
    name: 'George Smith',
  },
  datePublished: '2026-09-04',
  publisher: {
    '@type': 'Organization',
    name: 'Truly Free Mortgage',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trulyfreemortgage.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://trulyfreemortgage.com/blog/how-to-buy-a-house-with-bad-credit',
  },
};

export default function Page() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      </Head>

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a2740] to-[#123456] text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Buy a House with Bad Credit
          </h1>
          <p className="text-lg md:text-xl">
            A data‑driven roadmap for borrowers with low credit scores. No
            fluff—just numbers, options, and actionable steps.
          </p>
        </div>
      </section>

      {/* Author Box */}
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorBox
            name="George Smith"
            title="Senior Mortgage Analyst"
            bio="George has spent 12 years helping high‑risk borrowers secure affordable financing. He relies on hard data, not hype."
            avatar="/images/authors/george-smith.jpg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12 prose prose-lg dark:prose-invert">
        <section>
          <h2>1. Understand What “Bad Credit” Means</h2>
          <p>
            In the mortgage industry, a “bad credit” score is generally anything
            below 620 on the FICO scale. Lenders view this range as higher risk,
            which translates into higher interest rates and stricter loan‑to‑value
            (LTV) limits.
          </p>
          <ul>
            <li>
              <strong>Typical FICO range:</strong> 300 – 579 (very poor),
              580 – 619 (sub‑prime).
            </li>
            <li>
              <strong>Average APR for sub‑prime 30‑year fixed:</strong> 7.2 %
              (vs. 5.5 % for prime borrowers).
            </li>
            <li>
              <strong>Maximum LTV most lenders allow:</strong> 80 % for
              conventional loans, 85 % for FHA, 90 % for some VA loans.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Clean Up the Basics Before You Apply</h2>
          <p>
            Even a modest credit‑score bump can shave 0.25 %–0.5 % off your APR.
            Follow these three quick actions:
          </p>
          <ol>
            <li>
              <strong>Pay down revolving debt.</strong> Reduce credit‑card balances
              to under 30 % of each limit. Example: $5,000 balance on a $15,000
              limit drops the utilization from 33 % to 20 % and can raise a 620
              score to ~640.
            </li>
            <li>
              <strong>Correct errors.</strong> Pull a free credit report from
              annualcreditreport.com and dispute any inaccuracies. Each successful
              dispute can add 5‑10 points.
            </li>
            <li>
              <strong>Establish a short‑term payment history.</strong> Keep a
              secured credit card or a credit‑builder loan active for at least
              three months and make every payment on time.
            </li>
          </ol>
        </section>

        <section>
          <h2>3. Choose the Right Loan Program</h2>
          <p>
            Not all mortgages are created equal. Below is a quick comparison of the
            most common options for borrowers with scores below 620.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-200 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Program</th>
                  <th className="px-4 py-2 text-left">Min. Credit Score</th>
                  <th className="px-4 py-2 text-left">Down Payment</th>
                  <th className="px-4 py-2 text-left">Max LTV</th>
                  <th className="px-4 py-2 text-left">Typical APR*</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                <tr className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">FHA</td>
                  <td className="px-4 py-2">580 (with 10 % down) or 500 (with 3.5 % down)</td>
                  <td className="px-4 py-2">3.5 % – 10 %</td>
                  <td className="px-4 py-2">96.5 %</td>
                  <td className="px-4 py-2">6.8 %</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">VA</td>
                  <td className="px-4 py-2">No minimum (must have service‑eligible status)</td>
                  <td className="px-4 py-2">0 % (with entitlement)</td>
                  <td className="px-4 py-2">100 %</td>
                  <td className="px-4 py-2">6.5 %</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">Conventional (non‑prime)</td>
                  <td className="px-4 py-2">620</td>
                  <td className="px-4 py-2">5 % – 10 %</td>
                  <td className="px-4 py-2">80 %</td>
                  <td className="px-4 py-2">7.2 %</td>
                </tr>
                <tr className="border-t border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-2">USDA Rural</td>
                  <td className="px-4 py-2">640 (some lenders 620)</td>
                  <td className="px-4 py-2">0 % (if eligible)</td>
                  <td className="px-4 py-2">100 %</td>
                  <td className="px-4 py-2">6.9 %</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            *Rates shown are averages for September 2026 on a $250,000 loan with a
            30‑year fixed term.
          </p>
        </section>

        <section>
          <h2>4. Build a Realistic Budget</h2>
          <p>
            Bad‑credit borrowers often need a larger cash cushion because lenders
            may require additional reserves. Use the calculator below to see how
            different down‑payment amounts affect monthly payment and total interest.
          </p>

          <div className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <div>
              <h3 className="font-semibold mb-2">Assumptions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Home price: $250,000</li>
                <li>Interest rate: 6.8 % (FHA, 620 score)</li>
                <li>Loan term: 30 years</li>
                <li>Property tax: 1.2 % of purchase price</li>
                <li>Homeowners insurance: $1,200 / yr</li>
                <li>PMI (if < 20 % down): 0.55 % of loan amount / yr</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Scenarios</h3>
              <table className="min-w-full text-sm">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="px-2 py-1 text-left">Down Payment</th>
                    <th className="px-2 py-1 text-right">Monthly P&I</th>
                    <th className="px-2 py-1 text-right">Monthly Tax/Ins</th>
                    <th className="px-2 py-1 text-right">PMI</th>
                    <th className="px-2 py-1 text-right">Total Monthly</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                  <tr className="border-t border-gray-300 dark:border-gray-600">
                    <td className="px-2 py-1">$5,000 (2 %)</td>
                    <td className="px-2 py-1 text-right">$1,645</td>
                    <td className="px-2 py-1 text-right">$250</td>
                    <td className="px-2 py-1 text-right">$114</td>
                    <td className="px-2 py-1 font-medium text-right">$2,009</td>
                  </tr>
                  <tr className="border-t border-gray-300 dark:border-gray-600">
                    <td className="px-2 py-1">$12,500 (5 %)</td>
                    <td className="px-2 py-1 text-right">$1,583</td>
                    <td className="px-2 py-1 text-right">$250</td>
                    <td className="px-2 py-1 text-right">$71</td>
                    <td className="px-2 py-1 font-medium text-right">$1,904</td>
                  </tr>
                  <tr className="border-t border-gray-300 dark:border-gray-600">
                    <td className="px-2 py-1">$25,000 (10 %)</td>
                    <td className="px-2 py-1 text-right">$1,500</td>
                    <td className="px-2 py-1 text-right">$250</td>
                    <td className="px-2 py-1 text-right">$0</td>
                    <td className="px-2 py-1 font-medium text-right">$1,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4">
            Notice how a $25,000 down payment eliminates PMI and reduces the
            total monthly cost by $259 compared with a $5,000 down payment.
            Align your savings plan with the payment scenario that fits your
            cash flow.
          </p>
        </section>

        <section>
          <h2>5. Secure a Mortgage Pre‑Approval</h2>
          <p>
            A pre‑approval letter shows sellers you’re serious and locks in an
            interest rate for up to 120 days. When you have bad credit, ask the
            lender for a “conditional” pre‑approval that outlines exactly what
            documentation they need (pay stubs, tax returns, bank statements).
          </p>
          <ul className="list-disc ml-6">
            <li>Provide a full 12‑month bank statement trail to prove reserves.</li>
            <li>Include a letter of explanation for any recent late payments.</li>
            <li>Consider a co‑borrower with better credit to improve the rate.</li>
          </ul>
        </section>

        <section>
          <h2>6. Negotiate Closing Costs & Seek Down‑Payment Assistance</h2>
          <p>
            Closing costs typically run 2‑5 % of the purchase price. With a $250,000
            home, that’s $5,000‑$12,500. Strategies to reduce out‑of‑pocket expenses:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Seller concessions.</strong> Ask the seller to cover up to
              3 % of the purchase price in closing costs; many sellers accept this
              in a competitive market.
            </li>
            <li>
              <strong>State or local assistance.</strong> Programs in many
              states (e.g., CA’s CalHFA) offer up to $15,000 in grant‑type help for
              first‑time buyers with credit < 620.
            </li>
            <li>
              <strong>Roll some costs into the loan.</strong> For FHA, you can
              finance up to 6 % of the loan amount in closing costs, though it
              raises the monthly payment.
            </li>
          </ol>
        </section>

        <section>
          <h2>7. Final Steps & Closing</h2>
          <p>
            Once your offer is accepted, the lender will order an appraisal,
            verify employment, and confirm insurance. With a bad‑credit profile,
            the appraisal may be more scrutinized; ensure the property meets
            minimum condition standards for FHA or VA loans.
          </p>
          <p>
            On closing day, bring:
          </p>
          <ul className="list-disc ml-6">
            <li>Two forms of ID (driver’s license, passport).</li>
            <li>Proof of homeowners insurance.</li>
            <li>Certified funds for down payment & closing costs.</li>
            <li>All signed loan documents.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-[#0a2740] text-white py-12 mt-12 rounded-lg">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to crunch the numbers?
            </h3>
            <p className="mb-6">
              Our free mortgage calculator lets you model different down‑payment
              amounts, credit‑score scenarios, and loan programs in real time.
            </p>
            <a
              href="/mortgage-calculator"
              className="inline-block bg-white text-[#0a2740] font-medium py-3 px-6 rounded hover:bg-gray-200 transition"
            >
              Go to the Mortgage Calculator
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <dl className="space-y-8">
            <div>
              <dt className="font-medium">Can I get a conventional loan with a 580 credit score?</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300">
                Conventional lenders generally require a minimum of 620. Some “non‑prime” programs may stretch to 580, but they come with higher rates and larger down‑payment requirements (often 10 %+).
              </dd>
            </div>

            <div>
              <dt className="font-medium">Do FHA loans really help borrowers with bad credit?</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300">
                Yes. FHA allows scores as low as 500 with a 10 % down payment, and 580 with only 3.5 % down. The trade‑off is mandatory mortgage insurance premiums (MIP) for the life of the loan unless you refinance later.
              </dd>
            </div>

            <div>
              <dt className="font-medium">Will a co‑borrower improve my loan terms?</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300">
                Adding a co‑borrower with a higher credit score can lower the APR by 0.25 %‑0.5 % and increase the allowable LTV. Both parties become equally liable for the mortgage.
              </dd>
            </div>

            <div>
              <dt className="font-medium">How much cash should I keep in reserves?</dt>
              <dd className="mt-2 text-gray-700 dark:text-gray-300">
                Most lenders want 2‑4 months of mortgage payments in liquid reserves. For a $1,750 monthly payment, aim for $3,500‑$7,000 in a savings account after closing.
              </dd>
            </div>
          </dl>
        </section>

        {/* FAQ JSON‑LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I get a conventional loan with a 580 credit score?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Conventional lenders generally require a minimum of 620. Some “non‑prime” programs may stretch to 580, but they come with higher rates and larger down‑payment requirements (often 10 %+).',
                },
              },
              {
                '@type': 'Question',
                name: 'Do FHA loans really help borrowers with bad credit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. FHA allows scores as low as 500 with a 10 % down payment, and 580 with only 3.5 % down. The trade‑off is mandatory mortgage insurance premiums (MIP) for the life of the loan unless you refinance later.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will a co‑borrower improve my loan terms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Adding a co‑borrower with a higher credit score can lower the APR by 0.25 %‑0.5 % and increase the allowable LTV. Both parties become equally liable for the mortgage.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much cash should I keep in reserves?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most lenders want 2‑4 months of mortgage payments in liquid reserves. For a $1,750 monthly payment, aim for $3,500‑$7,000 in a savings account after closing.',
                },
              },
            ],
          })}
        </script>
      </article>

      {/* Footer disclaimer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            The information in this article is for educational purposes only and
            does not constitute financial advice. All rates and programs are
            subject to change. This site is ad‑supported and may contain affiliate
            links.
          </p>
        </div>
      </footer>
    </>
  );
}