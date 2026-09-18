import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorBox from '@/components/blog/AuthorBox'

export const metadata: Metadata = {
  title: 'Home inspection vs appraisal: what buyers need to know',
  description: 'A practical guide for home buyers on the differences between a home inspection and an appraisal, step-by-step instructions, timing, costs, and what to do when the two reports don’t match.',
  alternates: {
    canonical: 'https://trulyfreemortgage.com/blog/home-inspection-vs-appraisal-what-buyers-need-to-know'
  }
}

export default function Page() {
  const articleJSON = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Home inspection vs appraisal: what buyers need to know",
    "description": "A practical guide for home buyers on the differences between a home inspection and an appraisal, step-by-step instructions, timing, costs, and what to do when the two reports don’t match.",
    "datePublished": "2026-09-18",
    "author": {
      "@type": "Person",
      "name": "George Smith",
      "jobTitle": "Founder, Klickify Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Truly Free Mortgage",
      "url": "https://trulyfreemortgage.com"
    }
  }

  const faqJSON = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the main difference between a home inspection and an appraisal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A home inspection checks the condition of the property, looking for repairs or safety issues. An appraisal determines the market value of the property for loan purposes."
        }
      },
      {
        "@type": "Question",
        "name": "When should I schedule my home inspection and my appraisal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schedule the inspection after you have a signed contract but before finalizing the loan. Your lender orders the appraisal after you apply for the loan; it usually happens after the inspection."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the inspection report and the appraisal are very different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can negotiate repairs or a price reduction based on the inspection, and you can discuss the appraisal with your lender to ensure the loan amount aligns with the property value."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a home inspection or appraisal cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A home inspection for a typical single-family home often runs roughly $300 to $600, more for large or older houses. Appraisals are in a similar range or a bit higher, and FHA and VA appraisals can cost more."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleJSON)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqJSON)}
      </script>
      <article>
        <h1>Home inspection vs appraisal: what buyers need to know</h1>
        <p>Hi, I’m George Smith, Founder of Klickify Agency. Today I’ll walk you through two key steps in the purchase process that often get mixed up: the home inspection and the appraisal. Understanding the difference, the timing, and what to do if the two reports don’t line up can save you time, money, and headaches.</p>

        <h2>1. What is a home inspection?</h2>
        <p>A home inspection is a thorough review of the physical condition of a property. A licensed inspector looks at the structure, roof, plumbing, electrical, HVAC, and more. The goal is to uncover any hidden problems that could cost you down the line.</p>

        <h3>Step-by-step: Scheduling your inspection</h3>
        <ol>
          <li><strong>Choose a qualified inspector.</strong> Check that they hold a state license where your state requires one, and look for membership in InterNACHI or ASHI. Check local reviews on sites like Angi or Yelp.</li>
          <li><strong>Set a date after the contract is signed.</strong> This protects you; if a major issue surfaces, you can renegotiate or walk away.</li>
          <li><strong>Attend the inspection if possible.</strong> You’ll see issues firsthand and can ask questions.</li>
          <li><strong>Review the report.</strong> It will list findings, recommend repairs, and estimate costs.</li>
        </ol>

        <h2>2. What is an appraisal?</h2>
        <p>An appraisal is a professional estimate of a property’s market value, performed by a licensed appraiser. Lenders use this value to determine how much they will lend.</p>

        <h3>Step-by-step: Getting your appraisal ordered</h3>
        <ol>
          <li><strong>Submit your loan application.</strong> Once you are under contract and have applied, the lender orders the appraisal, usually through an appraisal management company. You don’t pick the appraiser.</li>
          <li><strong>Provide the appraiser with access.</strong> The seller’s agent usually handles access; just make sure nothing blocks the visit.</li>
          <li><strong>Review the appraisal report.</strong> It will include comparable sales, condition adjustments, and a final value estimate.</li>
          <li><strong>Use the report to finalize your loan amount.</strong> If the value is lower than the purchase price, you may need a larger down payment.</li>
        </ol>

        <h2>3. Timing is everything</h2>
        <p>The inspection comes first. You need to know if the house is structurally sound before you commit to a loan. The appraisal follows. Both usually happen in the first two to three weeks of the contract, and the inspection contingency window is often the shorter one, so check the deadlines in your contract.</p>

        <h2>4. Costs - what to expect</h2>
        <p>A home inspection for a typical single-family home often runs roughly $300 to $600, more for large or older houses. Appraisals are in a similar range or a bit higher, and FHA and VA appraisals can cost more. The buyer normally pays for the appraisal, either upfront when it’s ordered or as part of closing costs, and your Loan Estimate lists the exact fee.</p>

        <h2>5. When the reports raise problems - how to respond</h2>
        <p>The appraiser doesn’t usually see your inspection report, so the two can tell different stories. Here’s what you can do:</p>
        <ul>
          <li><strong>Negotiate repairs.</strong> Use the inspection report to request fixes before closing.</li>
          <li><strong>Plan for required repairs.</strong> If the appraiser flags repairs (common with FHA and VA loans), they usually have to be finished and re-checked before closing. If you think the value itself is wrong, ask your lender about a reconsideration of value with better comparable sales.</li>
          <li><strong>Re-evaluate your offer.</strong> If the appraisal value is significantly lower, you might need to renegotiate the purchase price.</li>
          <li><strong>Use an appraisal contingency.</strong> This clause in your purchase contract lets you renegotiate or walk away if the appraisal comes in below the price.</li>
        </ul>

        <h2>6. Practical tips for a smooth process</h2>
        <ol>
          <li>Book your inspector early - availability can be tight.</li>
          <li>Ask the inspector to share a list of common red flags so you can pay extra attention.</li>
          <li>Keep a copy of the inspection and appraisal reports; they’re useful for future maintenance.</li>
          <li>Work closely with your lender’s underwriting team to understand how the appraisal will impact your loan.</li>
          <li>Read our <Link href="/blog/mortgage-closing-costs-explained">guide to mortgage closing costs</Link> to budget for all fees.</li>
        </ol>

        <h2>7. Final thoughts</h2>
        <p>Both a home inspection and an appraisal serve distinct but complementary purposes. The inspection protects your health and safety, while the appraisal protects the lender’s investment. By understanding each step, you can negotiate better terms, avoid surprises at closing, and make a confident purchase.</p>

        <AuthorBox />
      </article>
    </>
  )
}
