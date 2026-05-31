import MortgageCalculator from '@/components/MortgageCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Mortgage Calculator — No Registration | Truly Free',
  description: 'Calculate your mortgage payment instantly. Full amortization schedule, PMI, taxes, HOA. 100% free. No email. No signup.',
  alternates: { canonical: 'https://trulyfreemortgage.com/mortgage-calculator' },
};

const howToJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use the Truly Free Mortgage Calculator',
  description: 'Calculate your full monthly mortgage payment including PMI, taxes, insurance, and HOA in four steps.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Enter Home Price', text: 'Type the purchase price of the home. The calculator automatically sets a 20% down payment as the starting point.' },
    { '@type': 'HowToStep', position: 2, name: 'Set Your Down Payment', text: 'Enter a dollar amount or adjust the percentage. Drop below 20% and enable the PMI toggle to see the true cost.' },
    { '@type': 'HowToStep', position: 3, name: 'Enter Interest Rate', text: "Use your lender's quoted rate or the current national average. A 0.25% difference changes total interest paid by thousands over 30 years." },
    { '@type': 'HowToStep', position: 4, name: 'Choose Loan Term', text: 'Select 10, 15, 20, or 30 years. Use the Scenario Comparison tab to view multiple terms side by side.' },
  ],
});

const sections = [
  {
    heading: 'Principal and Interest: The Starting Point',
    body: 'The P&I payment is calculated using the standard amortization formula: M = P[r(1+r)ⁿ]/[(1+r)ⁿ-1], where P is the loan principal, r is the monthly interest rate, and n is the total number of payments. This formula is mathematically exact for fixed-rate loans and produces the same result your lender\'s system uses. Enter any home price, down payment, rate, and term and the output is accurate to the cent.',
  },
  {
    heading: 'Why P&I Alone Understates Your True Monthly Cost',
    body: 'Most online calculators show you principal and interest and stop there. The number your lender actually qualifies you on is PITI — Principal, Interest, Taxes, and Insurance — and often PITI plus PMI if your down payment is under 20%. On a $400,000 home, the difference between P&I and full PITI can be $500–800/month. This calculator lets you toggle each component independently so you see the real number before you fall in love with a listing.',
  },
  {
    heading: 'Private Mortgage Insurance (PMI)',
    body: 'PMI is required by most lenders when your down payment is below 20% of the purchase price. It protects the lender — not you — against default risk. The national average PMI rate is approximately 0.8% of the loan amount annually, or roughly $267/month on a $400,000 loan. PMI cancels once your equity crosses 20% of the original appraised value. The amortization schedule in this calculator shows you the exact month when PMI drops off based on your payment schedule.',
  },
  {
    heading: 'Property Tax Estimates',
    body: 'Property tax varies dramatically by state and county. The national average is approximately 1.07% of home value annually, but it ranges from 0.28% in Hawaii to over 2.2% in parts of New Jersey and Illinois. This calculator defaults to 1.2% as a conservative national estimate. For accurate numbers, enter your specific county\'s effective rate — your county assessor\'s website publishes this figure. State-specific calculators for California, Texas, Florida, and seven other states are available with pre-loaded local rates.',
  },
  {
    heading: 'The Scenario Comparison Tab',
    body: 'The Scenario Comparison tab lets you model up to three loan configurations side by side. This is most useful for comparing 15-year versus 30-year terms, evaluating the monthly cost of a rate buydown, or understanding how an extra $20,000 in down payment changes your monthly obligation. On a $400,000 loan, the difference between a 6.5% and 7.0% rate is $132/month — and $47,520 in total interest over 30 years. Seeing those numbers in parallel makes the decision concrete.',
  },
  {
    heading: 'How Your Data Is Handled',
    body: 'Every calculation in this tool runs in your browser. No data is transmitted to any server. The home price, income assumptions, or rate information you enter never leaves your device. There is no account, no session cookie that stores your inputs, and no analytics that track what numbers you ran. This is a deliberate architectural choice — not a privacy policy promise. Client-side calculation means there is no server to send your data to.',
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToJsonLd }} />
      <MortgageCalculator />

      <div style={{ background: '#ffffff', padding: '72px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', color: '#181c1e', marginBottom: '8px', lineHeight: 1.2 }}>
            How This Calculator Works
          </h2>
          <p style={{ fontSize: '15px', color: '#718096', marginBottom: '48px', letterSpacing: '-0.01em' }}>
            Methodology, data sources, and what each component means for your monthly payment.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {sections.map(({ heading, body }) => (
              <div key={heading}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#181c1e', letterSpacing: '-0.02em', marginBottom: '10px', lineHeight: 1.3 }}>{heading}</h3>
                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', background: '#f7fafc', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#718096', marginBottom: '12px' }}>Accuracy Note</div>
            <p style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>
              Principal and interest calculations are mathematically exact using the standard amortization formula. Property tax, PMI, and homeowners insurance figures are national average estimates — your actual costs depend on location, lender, credit score, and loan type. For a precise quote, use these calculations as a starting point before speaking with a licensed lender.
            </p>
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href="/about" style={{ fontSize: '14px', color: '#0058c3', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em' }}>
              Learn more about who built this and why →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
