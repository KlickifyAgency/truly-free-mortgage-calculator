import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorBox from '@/components/blog/AuthorBox'

export const metadata: Metadata = {
  title: 'How to Calculate Your Debt-to-Income Ratio for Mortgage Approval',
  description: 'Step-by-step guide to compute your debt-to-income ratio, a key metric lenders use to decide mortgage approval.',
  alternates: {
    canonical: 'https://trulyfreemortgage.com/blog/how-to-calculate-your-debttoincome-ratio-for-mortgage-approv'
  }
}

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Calculate Your Debt-to-Income Ratio for Mortgage Approval',
    description: 'Step-by-step guide to compute your debt-to-income ratio, a key metric lenders use to decide mortgage approval.',
    author: {
      '@type': 'Person',
      name: 'George Smith',
      jobTitle: 'Founder, Klickify Agency'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrulyFreeMortgage.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trulyfreemortgage.com/logo.png'
      }
    },
    datePublished: '2026-10-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://trulyfreemortgage.com/blog/how-to-calculate-your-debttoincome-ratio-for-mortgage-approv'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a debt-to-income ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your debt-to-income ratio is the percentage of your gross monthly income that goes toward paying debts. Lenders look at this figure to gauge your ability to take on new debt like a mortgage.'
        }
      },
      {
        '@type': 'Question',
        name: 'What ratio do lenders typically approve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most lenders prefer a ratio below 43 percent, but some may accept slightly higher ratios if you have strong compensating factors such as a high credit score or large down payment.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does my credit score affect my debt-to-income ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A higher credit score can allow lenders to tolerate a higher debt-to-income ratio because it signals lower risk. Conversely, a lower score may require a tighter ratio.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I improve my ratio before applying?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, reducing monthly debt payments, increasing income, or both can lower your ratio and boost your approval chances.'
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <article className="prose mx-auto py-8">
        <h1>How to Calculate Your Debt-to-Income Ratio for Mortgage Approval</h1>
        <p>Hi, I’m George Smith, Founder of Klickify Agency. The debt-to-income ratio-or DTI-is one of the most important numbers on a mortgage application. I’ll walk you through exactly how to calculate it, what lenders look for, and how you can boost your ratio before you submit an application.</p>

        <h2>1. Gather Your Gross Monthly Income</h2>
        <p>Start with your total earnings before taxes or deductions. That includes:</p>
        <ul>
          <li>Regular salary or wages</li>
          <li>Bonuses, commissions, or overtime pay</li>
          <li>Self-employment income (average it over a representative recent period if it fluctuates)</li>
          <li>Passive income sources such as rental properties or dividends</li>
        </ul>
        <p>Combine all these amounts to arrive at a single figure. This is your “gross monthly income.”</p>

        <h2>2. List All Monthly Debt Obligations</h2>
        <p>Next, list every recurring payment you make each month that is debt-related. Common items include:</p>
        <ul>
          <li>Credit card minimum payments</li>
          <li>Auto loans</li>
          <li>Student loans</li>
          <li>Personal installment loans</li>
          <li>Alimony or child support payments</li>
          <li>Other installment or revolving debt obligations</li>
        </ul>
        <p>Don’t forget to include the estimated mortgage payment you expect to make if you were approved. Lenders will calculate your DTI after adding the mortgage payment to these figures.</p>

        <h2>3. Add the Estimated Mortgage Payment</h2>
        <p>Use a reliable mortgage calculator to estimate your future monthly payment. You can use our free <Link href="/mortgage-calculator">mortgage calculator</Link>. Enter the home price, your down payment, an interest rate, and the loan term to get a monthly figure. Add this to the sum of your other debts.</p>

        <h2>4. Divide Debt by Income</h2>
        <p>Now you have two numbers: <strong>Total monthly debt payments</strong> and <strong>Gross monthly income</strong>. The formula is straightforward:</p>
        <pre>Debt-to-Income Ratio = (Total Monthly Debt ÷ Gross Monthly Income) × 100</pre>
        <p>For example, if your monthly debt obligations total 2,400 USD and your gross income is 8,000 USD:</p>
        <pre>(2,400 ÷ 8,000) × 100 = 30%</pre>
        <p>That 30 percent is your DTI.</p>

        <h2>5. Compare With Lender Standards</h2>
        <p>Most lenders set a threshold around 43 percent. If your ratio is below that, you’re in good shape. If it’s above, you’ll likely need to:</p>
        <ul>
          <li>Reduce debt-pay down credit cards or refinance high-interest loans.</li>
          <li>Increase income-take on a side gig or ask for a raise.</li>
          <li>Adjust the loan terms-opt for a higher down payment to reduce the monthly mortgage payment.</li>
        </ul>

        <h2>6. Consider the “Front-End” vs. “Back-End” Ratios</h2>
        <p>Lenders sometimes split the DTI into two parts. The <strong>front-end ratio</strong> looks only at mortgage payments versus income, while the <strong>back-end ratio</strong> incorporates all debt. Many lenders use both, so a strong front-end ratio can still help even if the back-end is a bit higher.</p>

        <h2>7. Prepare Documentation for Your Application</h2>
        <p>When you apply, provide:</p>
        <ul>
          <li>Pay stubs, W-2s, or profit & loss statements for self-employed borrowers.</li>
          <li>Statements for all recurring debts.</li>
          <li>Recent bank statements to prove available cash for a down payment.</li>
          <li>Any proof of additional income streams.</li>
        </ul>
        <p>Having clear documentation lets the lender verify your DTI quickly and reduces the chance of delays during underwriting.</p>

        <h2>Practical Tips to Lower Your Ratio</h2>
        <ol>
          <li><strong>Pay down revolving debt</strong>-Credit cards often carry the highest interest. Reducing the balance lowers your minimum payments.</li>
          <li><strong>Shop for better rates</strong>-Refinancing a student or auto loan can reduce monthly payments.</li>
          <li><strong>Consolidate smaller loans</strong>-A single lower-rate loan can replace multiple higher-rate obligations.</li>
          <li><strong>Reevaluate your budget</strong>-A small cut in discretionary spending can free up cash to pay debts faster.</li>
          <li><strong>Plan your down payment</strong>-A larger down payment reduces the principal and monthly payment, which directly lowers your DTI.</li>
        </ol>

        <h2>When to Recalculate</h2>
        <p>Your DTI is dynamic. If you receive a salary increase, start a new job, or make significant debt payments, recalculate. This helps you keep your ratio within the desired range and avoid surprises during the approval process.</p>

        <h2>FAQs</h2>
        <dl>
          <dt>What is a debt-to-income ratio?</dt>
          <dd>Your debt-to-income ratio is the percentage of your gross monthly income that goes toward paying debts. Lenders use it to gauge your ability to take on new debt.</dd>

          <dt>What ratio do lenders typically approve?</dt>
          <dd>Most lenders prefer a ratio below 43 percent, but some may accept slightly higher ratios if you have strong compensating factors such as a high credit score or large down payment.</dd>

          <dt>How does my credit score affect my debt-to-income ratio?</dt>
          <dd>A higher credit score can allow lenders to tolerate a higher debt-to-income ratio because it signals lower risk. Conversely, a lower score may require a tighter ratio.</dd>

          <dt>Can I improve my ratio before applying?</dt>
          <dd>Yes, reducing monthly debt payments, increasing income, or both can lower your ratio and boost your approval chances.</dd>
        </dl>

        <AuthorBox />
      </article>
    </>
  )
}
