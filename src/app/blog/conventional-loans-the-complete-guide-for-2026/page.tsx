import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conventional Loans: The Complete Guide for 2026',
  description:
    'Everything you need to know about conventional mortgages in 2026 – rates, qualification, down‑payment strategies, and how they compare to other loan types.',
  alternates: {
    canonical:
      'https://trulyfreemortgage.com/blog/conventional-loans-the-complete-guide-for-2026',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Conventional Loans: The Complete Guide for 2026',
  description:
    'A data‑driven, practical guide to conventional mortgages in 2026, covering rates, qualification, costs, and comparison with other loan products.',
  author: {
    '@type': 'Person',
    name: 'George Smith',
    url: 'https://www.linkedin.com/in/george-smith-832113217/',
    sameAs: ['https://www.linkedin.com/in/george-smith-832113217/'],
  },
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
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
      'https://trulyfreemortgage.com/blog/conventional-loans-the-complete-guide-for-2026',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I refinance a conventional loan into an FHA or VA loan?', acceptedAnswer: { '@type': 'Answer', text: "Yes, you can refinance into a government‑backed loan if you become eligible (e.g., you join the military or purchase a qualifying rural property). Keep in mind that you'll incur an upfront funding fee and new closing costs, which must be weighed against the potential rate reduction." } },
    { '@type': 'Question', name: 'How does PMI cancel automatically?', acceptedAnswer: { '@type': 'Answer', text: 'Most lenders automatically terminate PMI once your LTV reaches 78% based on the original amortization schedule, provided you are current on payments. You can also request early cancellation at 80% LTV by submitting a written request and an appraisal.' } },
    { '@type': 'Question', name: 'Are conventional loans still available for first‑time buyers?', acceptedAnswer: { '@type': 'Answer', text: "Absolutely. First‑time buyers can qualify with as little as 3% down, though they'll need to meet the DTI and reserve requirements. Many lenders offer special first‑time buyer programs that lower the required credit score to 640." } },
    { '@type': 'Question', name: 'What happens if my loan amount exceeds the conforming limit?', acceptedAnswer: { '@type': 'Answer', text: "You'll be placed in the jumbo category. Jumbo loans typically have slightly higher rates (often +0.25% to +0.50%) and stricter documentation. However, many jumbo products now accept 10% down with competitive pricing." } },
  ],
};

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  cssSelector: ['#faq'],
};

export default function Page() {
  return (
    <article className="font-sans text-gray-800 dark:text-gray-200 antialiased">
      {/* JSON‑LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      {/* Header */}
      <header className="bg-[#0b1b34] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Conventional Loans: The Complete Guide for 2026
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            A practical, data‑driven walkthrough of the most common mortgage
            product on the market, with up‑to‑date rates, costs, and how to
            qualify in today’s environment.
          </p>
        </div>
      </header>

      {/* Author Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <AuthorBox />
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* 1. What Is a Conventional Loan? */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            1. What Is a Conventional Loan?
          </h2>
          <p className="mb-4">
            A conventional loan is a mortgage that is not insured or
            guaranteed by the federal government. In 2026, the two primary
            conventional categories are:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>Conforming:</strong> Meets the loan‑limit set by the
              Federal Housing Finance Agency (FHFA). For most of the
              continental U.S., the 2026 limit is $832,750; higher in
              high‑cost areas (up to $1,249,125 in San Francisco, New York,
              etc.).
            </li>
            <li>
              <strong>Non‑conforming (Jumbo):</strong> Anything above the
              conforming ceiling. Jumbo loans are priced separately and
              often require tighter credit.
            </li>
          </ul>
          <p>
            Because they are sold to Fannie Mae and Freddie Mac, conforming
            loans follow strict underwriting standards—most notably the
            20/1/2 rule: 20 % down, a credit score of 620 or higher, and a
            debt‑to‑income (DTI) ratio of 45 % or less.
          </p>
        </section>

        {/* 2. 2026 Rate Landscape */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            2. 2026 Rate Landscape
          </h2>
          <p className="mb-4">
            As of August 2026, the average 30‑year fixed‑rate for a
            conventional loan sits at <strong>6.75 %</strong>. Rates vary
            based on loan‑to‑value (LTV) and credit profile:
          </p>
          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Credit Score</th>
                <th className="border p-2 text-left">LTV ≤ 80 %</th>
                <th className="border p-2 text-left">LTV 80‑90 %</th>
                <th className="border p-2 text-left">LTV 90‑95 %</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">720‑740</td>
                <td className="border p-2">6.50 %</td>
                <td className="border p-2">6.75 %</td>
                <td className="border p-2">7.00 %</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">680‑719</td>
                <td className="border p-2">6.75 %</td>
                <td className="border p-2">7.00 %</td>
                <td className="border p-2">7.25 %</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">620‑679</td>
                <td className="border p-2">7.00 %</td>
                <td className="border p-2">7.25 %</td>
                <td className="border p-2">7.50 %</td>
              </tr>
            </tbody>
          </table>
          <p>
            The spread between a 20 % down payment and a 5 % down payment can
            be as much as 0.75 percentage points, translating to roughly
            $1,350 in annual interest on a $300,000 loan.
          </p>
        </section>

        {/* 3. Qualification Checklist */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            3. Qualification Checklist
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <strong>Credit Score:</strong> Minimum 620 for most lenders; 740+
                unlocks the best rates.
            </li>
            <li>
              <strong>Down Payment:</strong> 3 %–20 % for primary residences.
                20 % eliminates private mortgage insurance (PMI).
            </li>
            <li>
              <strong>Debt‑to‑Income Ratio:</strong> ≤ 45 % (including projected
                mortgage payment). Some “high‑credit” borrowers can qualify up
                to 50 %.
            </li>
            <li>
              <strong>Employment History:</strong> At least two years of stable
                employment or consistent self‑employment income.
            </li>
            <li>
              <strong>Reserve Requirements:</strong> Lenders often ask for
                2‑3 months of cash reserves after closing for conventional loans.
            </li>
          </ol>
        </section>

        {/* 4. Cost Breakdown – What You’ll Pay */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            4. Cost Breakdown – What You’ll Pay
          </h2>
          <p className="mb-4">
            Below is a sample amortization for a $300,000 conforming loan
            with a 6.75 % interest rate and a 30‑year term. Numbers are
            rounded for clarity.
          </p>
          <table className="w-full table-auto border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Item</th>
                <th className="border p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Loan Amount (30 yr @6.75 %)</td>
                <td className="border p-2 text-right">$300,000</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Monthly Principal &amp; Interest</td>
                <td className="border p-2 text-right">$1,944</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Estimated Property Tax (1.2 %)</td>
                <td className="border p-2 text-right">$300</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Homeowners Insurance</td>
                <td className="border p-2 text-right">$100</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">PMI (0.5 % of loan)</td>
                <td className="border p-2 text-right">$125</td>
              </tr>
              <tr className="bg-gray-100 dark:bg-gray-800 font-semibold">
                <td className="border p-2">Total Monthly Payment</td>
                <td className="border p-2 text-right">$2,469</td>
              </tr>
            </tbody>
          </table>
          <p>
            If you can put 20 % down, the PMI line disappears and the total
            monthly payment drops to roughly $2,344, a $125 saving each month
            ($1,500 annually). That simple trade‑off is why many buyers aim for
            the 20 % threshold.
          </p>
        </section>

        {/* 5. Comparing to Other Loan Types */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            5. Conventional vs. FHA, VA, & USDA
          </h2>
          <p className="mb-4">
            The table below highlights the key differences that matter to a
            borrower in 2026.
          </p>
          <div className="overflow-x-auto mb-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Feature</th>
                <th className="border p-2 text-center">Conventional</th>
                <th className="border p-2 text-center">FHA</th>
                <th className="border p-2 text-center">VA</th>
                <th className="border p-2 text-center">USDA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Min. Down Payment</td>
                <td className="border p-2 text-center">3 % (non‑prime 5 %)</td>
                <td className="border p-2 text-center">3.5 %</td>
                <td className="border p-2 text-center">0 %</td>
                <td className="border p-2 text-center">0 %</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Mortgage Insurance</td>
                <td className="border p-2 text-center">PMI until 20 % equity</td>
                <td className="border p-2 text-center">MIP (upfront + annual)</td>
                <td className="border p-2 text-center">No MIP</td>
                <td className="border p-2 text-center">No MIP</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Credit Score Floor</td>
                <td className="border p-2 text-center">620</td>
                <td className="border p-2 text-center">580</td>
                <td className="border p-2 text-center">620 (often lower)</td>
                <td className="border p-2 text-center">640</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="border p-2">Property Types</td>
                <td className="border p-2 text-center">
                  Single‑family, condo, townhome
                </td>
                <td className="border p-2 text-center">
                  Single‑family, 2‑unit
                </td>
                <td className="border p-2 text-center">
                  Single‑family, condo, townhouse
                </td>
                <td className="border p-2 text-center">
                  Rural single‑family, 2‑unit, manufactured
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <p>
            If you qualify for VA or USDA and meet the location/servicing
            criteria, those programs can be cheaper because they eliminate
            mortgage insurance. However, they come with occupancy and
            eligibility rules that don’t apply to conventional loans.
          </p>
        </section>

        {/* 6. How to Use the Mortgage Calculator */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            6. How to Use Our Mortgage Calculator
          </h2>
          <p className="mb-4">
            The best way to see how a conventional loan fits your budget is to
            plug real numbers into our free calculator. Enter the purchase
            price, down payment, loan term, and expected interest rate to
            instantly see:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Monthly principal &amp; interest</li>
            <li>Estimated taxes, insurance, and PMI</li>
            <li>Total monthly cash‑flow</li>
            <li>Break‑even point if you refinance later</li>
          </ul>
          <p className="text-center">
            <Link
              href="/mortgage-calculator"
              className="inline-block bg-[#0b1b34] hover:bg-[#0d2548] text-white font-medium py-3 px-6 rounded transition"
            >
              Try the Calculator Now
            </Link>
          </p>
        </section>

        {/* 7. Bottom Line */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-4">
            7. Bottom Line
          </h2>
          <p className="mb-4">
            Conventional mortgages remain the most flexible and widely
            available product in 2026. They reward strong credit and larger
            down payments with lower rates and no ongoing mortgage insurance.
            If you can meet the 20 % equity threshold, you’ll enjoy the most
            cost‑effective financing on the market. When you’re below that
            line, weigh the extra PMI cost against the cash you keep for
            emergencies, renovations, or investing.
          </p>
          <p className="mb-4">
            Use the calculator, review your credit report, and consider a
            modest increase in your down payment to eliminate PMI. The
            savings over the life of the loan can be tens of thousands of
            dollars—hardly “fluff” in a data‑driven world.
          </p>
          <p className="text-center">
            <Link
              href="/mortgage-calculator"
              className="inline-block bg-[#0b1b34] hover:bg-[#0d2548] text-white font-medium py-3 px-6 rounded transition"
            >
              Calculate Your Conventional Loan Today
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-semibold text-[#0b1b34] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="border border-gray-300 rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Can I refinance a conventional loan into an FHA or VA loan?
              </summary>
              <p className="mt-2">
                Yes, you can refinance into a government‑backed loan if you
                become eligible (e.g., you join the military or purchase a
                qualifying rural property). Keep in mind that you’ll incur an
                upfront funding fee and new closing costs, which must be weighed
                against the potential rate reduction.
              </p>
            </details>

            <details className="border border-gray-300 rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                How does PMI cancel automatically?
              </summary>
              <p className="mt-2">
                Most lenders automatically terminate PMI once your LTV reaches
                78 % based on the original amortization schedule, provided you
                are current on payments. You can also request early cancellation
                at 80 % LTV by submitting a written request and an appraisal.
              </p>
            </details>

            <details className="border border-gray-300 rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Are conventional loans still available for first‑time buyers?
              </summary>
              <p className="mt-2">
                Absolutely. First‑time buyers can qualify with as little as
                3 % down, though they’ll need to meet the DTI and reserve
                requirements. Many lenders offer special “first‑time buyer”
                programs that lower the required credit score to 640.
              </p>
            </details>

            <details className="border border-gray-300 rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                What happens if my loan amount exceeds the conforming limit?
              </summary>
              <p className="mt-2">
                You’ll be placed in the “jumbo” category. Jumbo loans typically
                have slightly higher rates (often +0.25 % to +0.50 %) and stricter
                documentation. However, many jumbo products now accept 10 %
                down with competitive pricing.
              </p>
            </details>
          </div>
        </section>
      </section>

      {/* Footer notice */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          This article is ad‑supported and intended for informational purposes
          only. Always consult a licensed mortgage professional before making
          any financing decisions.
        </p>
      </footer>
    </article>
  );
}