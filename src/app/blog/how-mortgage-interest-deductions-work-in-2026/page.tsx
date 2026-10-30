import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorBox from '@/components/blog/AuthorBox'

export const metadata: Metadata = {
  title: 'How Mortgage Interest Deductions Work in 2026',
  description: 'Step-by-step guide to understanding and maximizing mortgage interest deductions in 2026.',
  alternates: {
    canonical: 'https://trulyfreemortgage.com/blog/how-mortgage-interest-deductions-work-in-2026'
  }
}

export default function Page() {
  const articleJSON = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Mortgage Interest Deductions Work in 2026',
    description: 'Step-by-step guide to understanding and maximizing mortgage interest deductions in 2026.',
    author: {
      '@type': 'Person',
      name: 'George Smith',
      jobTitle: 'Founder, Klickify Agency'
    },
    datePublished: '2026-10-30',
    publisher: {
      '@type': 'Organization',
      name: 'Truly Free Mortgage',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trulyfreemortgage.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://trulyfreemortgage.com/blog/how-mortgage-interest-deductions-work-in-2026'
    }
  }

  const faqJSON = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the limit on the mortgage amount that can be deducted?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most filers, the IRS limits the deduction to interest on up to $750,000 of mortgage debt used to buy, build, or improve a qualified home (your main home and one second home combined). Married taxpayers filing separately are limited to $375,000 each. Confirm the current figures with the IRS or a tax professional.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I deduct interest on a second home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you itemize, you can deduct interest on your main home and one second home you treat as a qualified residence, within the overall debt limit. A vacation home can qualify, but if you rent it out you generally must also use it personally enough during the year. A tax professional can confirm your situation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does refinancing change my deduction amount?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Refinancing can affect the amount of interest you pay, but the deduction is based on the interest actually paid during the tax year, not the original loan amount.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens if I make extra payments toward principal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Extra principal payments reduce the loan balance, which can lower the amount of interest you pay in future years and thus reduce the deduction you can claim.'
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(articleJSON)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJSON)}</script>

      <article className="prose mx-auto my-8 max-w-3xl">
        <h1>How Mortgage Interest Deductions Work in 2026</h1>
        <p>
          I’m George Smith, Founder of Klickify Agency. In 2026, the tax rules around mortgage interest stay mostly the same as in 2025, but there are a few nuances that can help you keep more money in your pocket. This article breaks down the process into clear steps, so you can calculate, plan, and maximize your deduction whether you’re a new homeowner, a refinancer, or simply a homeowner looking to keep your finances tight.
        </p>

        <h2>1. Understand the Basic Rules</h2>
        <p>
          The IRS allows you to deduct interest paid on a loan used to buy, build, or improve a qualified home (your main home and one second home combined). For most filers, the maximum loan amount that qualifies is $750,000, or $375,000 if you are married filing separately. If you have a larger loan, the deductible portion is capped at that limit. Remember, the deduction is only available if you choose to itemize on Schedule A, so keep that in mind when deciding whether to take the standard deduction.
        </p>

        <h2>2. Gather Your Documentation</h2>
        <p>
          Your lender will send you a Form 1098 at the end of the year, detailing the total interest paid. Keep it in a safe place. If you refinance mid-year, you’ll receive a second Form 1098 that covers the new loan’s interest. Adding up the interest from all loans gives you the total amount you can claim, up to the cap.
        </p>

        <h2>3. Decide Whether to Itemize</h2>
        <p>
          Itemizing can be a good choice if your total deductible expenses exceed the standard deduction. The standard deduction is adjusted for inflation each year and varies by filing status, so check the current amount for your situation on the IRS website. Add up all your deductible expenses-mortgage interest, property taxes, state income taxes, charitable contributions, and medical expenses that exceed 7.5% of your adjusted gross income. If the total is larger than the standard deduction, itemize. Otherwise, stick with the standard and skip the deduction.
        </p>

        <h2>4. Calculate Your Deduction Amount</h2>
        <p>
          Start with the total mortgage interest from your Form 1098. If your loan exceeds the $750,000 cap ($375,000 if married filing separately), calculate the proportion of the loan that is under the limit. For example, if you have a $1,200,000 loan and paid $90,000 in interest, only 62.5% of the loan ($750,000) is deductible. Multiply the interest by that percentage (0.625 × $90,000 = $56,250) to get the amount you can claim.
        </p>

        <h2>5. Include Other Deductions That Affect Your Taxable Income</h2>
        <p>
          The mortgage interest deduction reduces your taxable income. However, you should also consider other itemized deductions that could lower your tax further. Property taxes, state and local income taxes (subject to the SALT cap, whose current limit you can confirm with the IRS), and charitable contributions are all added to the mortgage interest total. If the combined amount remains under the standard deduction, you may still choose the standard deduction for simplicity.
        </p>

        <h2>6. Use Online Tools for Accuracy</h2>
        <p>
          While you can do the math manually, it can be error-prone. Use the free mortgage calculator on this site to estimate your interest, or consult a tax professional. For instance, the <Link href="/mortgage-calculator">mortgage calculator</Link> can give you a monthly interest estimate, helping you plan for future deductions.
        </p>

        <h2>7. Keep Records for Audits</h2>
        <p>
          The IRS may request proof of your mortgage interest deduction. Keep the Form 1098, statements from your lender, and any documentation of principal payments. Storing these digitally or in a safe place ensures you’re prepared if you receive a notice.
        </p>

        <h2>FAQs</h2>
        <dl>
          <dt>What if I only paid a partial mortgage payment during the year?</dt>
          <dd>
            You can only deduct interest, not principal. If you made a payment that was mostly principal, it won’t increase your deduction, but it may reduce future interest payments.
          </dd>

          <dt>Does the deduction apply to an FHA or VA loan?</dt>
          <dd>
            Yes, mortgage interest on FHA, VA, and conventional loans is deductible, and the same limits apply.
          </dd>

          <dt>Can I split the deduction between primary and secondary residences?</dt>
          <dd>
            You can claim interest on your main home and one second home you treat as a qualified residence, within the overall debt limit. A vacation home can qualify; if you rent it out, you generally must also use it personally enough during the year for it to count. A tax professional can confirm your situation.
          </dd>

          <dt>What happens if I pay off my mortgage before the year ends?</dt>
          <dd>
            If you pay off the mortgage, you no longer owe interest for the remaining months, so the deduction ends with the payoff date. The interest paid up to that point remains deductible.
          </dd>
        </dl>

        <AuthorBox />
      </article>
    </>
  )
}
