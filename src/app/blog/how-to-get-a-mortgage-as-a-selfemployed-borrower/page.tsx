import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get a Mortgage as a Self-Employed Borrower',
  description: 'A comprehensive guide for self-employed individuals to navigate the mortgage process and secure the best loan terms.',
  alternates: {
    canonical: 'https://trulyfreemortgage.com/blog/how-to-get-a-mortgage-as-a-selfemployed-borrower',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: 'https://trulyfreemortgage.com/blog/how-to-get-a-mortgage-as-a-selfemployed-borrower',
  headline: 'How to Get a Mortgage as a Self-Employed Borrower',
  datePublished: '2026-08-07',
  author: {
    '@type': 'Person',
    name: 'George Smith',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Truly Free Mortgage',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trulyfreemortgage.com/logo.png',
    },
  },
};

export default function Page() {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <header className="bg-darknavy text-white p-4 rounded">
        <h1 className="text-3xl font-bold mb-4">How to Get a Mortgage as a Self-Employed Borrower</h1>
        <p className="text-lg">
          As a self-employed individual, getting a mortgage can be more challenging than for those with traditional employment. However, with the right preparation and understanding of the process, you can secure the best loan terms and achieve your dream of homeownership.
        </p>
      </header>
      <AuthorBox author="George Smith" date="August 7, 2026" />
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Understanding the Challenges of Self-Employed Borrowers</h2>
        <p className="text-lg">
          Self-employed borrowers often face unique challenges when applying for a mortgage. Lenders view self-employed individuals as higher-risk borrowers due to the unpredictable nature of their income. As a result, self-employed borrowers may need to provide additional documentation and meet stricter lending criteria.
        </p>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Gathering Required Documents</h2>
        <p className="text-lg">
          To increase your chances of getting approved for a mortgage, it's essential to gather all the required documents. These may include:
        </p>
        <ul className="list-disc pl-8">
          <li>Personal tax returns for the past two years</li>
          <li>Business tax returns for the past two years</li>
          <li>Financial statements, such as balance sheets and profit-and-loss statements</li>
          <li>Bank statements for the past 60 days</li>
        </ul>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Calculating Your Income</h2>
        <p className="text-lg">
          As a self-employed borrower, your income will be calculated using your net income from your business. This can be a complex process, but it's essential to ensure that you're reporting your income accurately.
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Income Type</th>
              <th className="px-4 py-2 border border-gray-300">Gross Income</th>
              <th className="px-4 py-2 border border-gray-300">Expenses</th>
              <th className="px-4 py-2 border border-gray-300">Net Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Business Income</td>
              <td className="px-4 py-2 border border-gray-300">$100,000</td>
              <td className="px-4 py-2 border border-gray-300">$30,000</td>
              <td className="px-4 py-2 border border-gray-300">$70,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Investment Income</td>
              <td className="px-4 py-2 border border-gray-300">$20,000</td>
              <td className="px-4 py-2 border border-gray-300">$5,000</td>
              <td className="px-4 py-2 border border-gray-300">$15,000</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Choosing the Right Loan Option</h2>
        <p className="text-lg">
          As a self-employed borrower, you may have limited loan options. However, there are still several choices available, including:
        </p>
        <ul className="list-disc pl-8">
          <li>Conventional loans</li>
          <li>FHA loans</li>
          <li>VA loans</li>
          <li>USDA loans</li>
        </ul>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg">
          Getting a mortgage as a self-employed borrower requires careful planning and attention to detail. By gathering all the required documents, calculating your income accurately, and choosing the right loan option, you can increase your chances of getting approved for a mortgage.
        </p>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Call to Action</h2>
        <p className="text-lg">
          If you're a self-employed borrower looking to get a mortgage, our ad-supported mortgage calculator can help you determine how much you can afford to borrow. Visit our <a href="/mortgage-calculator" className="text-blue-600 hover:text-blue-800">mortgage calculator</a> today to get started.
        </p>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="flex flex-col">
          <details className="mb-4">
            <summary className="text-lg font-bold">What is the minimum credit score required for a self-employed borrower?</summary>
            <p className="text-lg">The minimum credit score required for a self-employed borrower varies depending on the lender and the loan program. However, a credit score of 620 or higher is typically required for conventional loans.</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-bold">Can I use my business income to qualify for a mortgage?</summary>
            <p className="text-lg">Yes, you can use your business income to qualify for a mortgage. However, you'll need to provide additional documentation, such as business tax returns and financial statements, to verify your income.</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-bold">How long does it take to get approved for a mortgage as a self-employed borrower?</summary>
            <p className="text-lg">The approval process for a self-employed borrower can take longer than for a traditional borrower. However, with the right documentation and a smooth application process, you can expect to get approved within 30-60 days.</p>
          </details>
          <details className="mb-4">
            <summary className="text-lg font-bold">Can I get a mortgage with a low down payment as a self-employed borrower?</summary>
            <p className="text-lg">Yes, you can get a mortgage with a low down payment as a self-employed borrower. However, you'll need to pay private mortgage insurance (PMI) to protect the lender in case of default.</p>
          </details>
        </div>
      </section>
    </div>
  );
}