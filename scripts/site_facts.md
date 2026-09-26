# trulyfreemortgage.com: site facts for the fact-check gate

Verified against the code (src/components/MortgageCalculator.tsx) on 2026-09-26. Update this file when the product changes.

## Author
- George Smith, Founder, Klickify Agency. He is not a loan officer, broker, lender, financial advisor or real-estate agent. No credentials, years of experience, clients or anecdotes may be attributed to him.

## What the site is
- ONE interactive tool, the mortgage calculator at /mortgage-calculator. Exactly what it does:
  - Inputs: home price, down payment (dollars, or quick percentage buttons), interest rate, loan term.
  - Output: monthly principal and interest, loan amount, total interest, total cost, and a full month-by-month amortization schedule (printable).
  - Optional toggles that add FIXED estimates the user cannot edit: property tax 1.2% of the home price per year, homeowners insurance 0.5% of the home price per year, PMI 0.8% of the loan amount per year (only when the down payment is under 20%), HOA $150 per month. The PMI estimate is a flat monthly amount: the calculator does NOT show when PMI ends or cancels.
  - Optional "extra monthly payment" applied to principal: shows the new payoff time, time saved and interest saved.
  - "Scenario comparison" mode: two scenarios (A and B) side by side, each with home price, down payment, rate and term, showing loan amount, monthly payment, total interest and total cost.
  - It does NOT have: biweekly payment mode, closing-cost estimator, refinance or break-even calculator, points calculator, rent-vs-buy, affordability or income/DTI inputs, FHA MIP / VA funding fee / USDA guarantee fee handling, editable tax/insurance/PMI rates, or state-specific tax data.
- The state pages (/california-mortgage-calculator, /texas-mortgage-calculator, and the same pattern for Florida, New York, Washington, Arizona, Colorado, Georgia, North Carolina and Virginia) are written guides that link to /mortgage-calculator; they do not contain a calculator.
- Everything else (FHA, VA, USDA, jumbo, refinance, payoff, points, investment, down payment guides) is a blog article, not a separate calculator tool, even when its URL ends in "-calculator": never tell readers to use an FHA/VA/USDA/refinance/payoff/points/down-payment/closing-cost calculator or "tool" on this site. 100% free, ad-supported (Google AdSense, which uses cookies). No email, no signup, no lead capture. Calculator inputs stay in the browser.
- The site is not a lender and does not offer loans, pre-approvals, rate quotes, or personalized financial advice. Never imply it does.

## YMYL rules (this is financial content)
- Do not state current mortgage rates, loan limits, program rules, fees or costs as exact facts unless they are clearly general ("often", "roughly") or attributed to a named official source (CFPB, HUD/FHA, VA, USDA, Fannie Mae, Freddie Mac, IRS). Year-specific figures (loan limits, tax rules) must name the year and the source or be removed.
- Advice must point readers to confirm with their lender, a HUD-approved housing counselor, or a tax professional where it matters. No guarantees ("you will qualify", "you will save $X").
- Correct terminology: appraisal contingency (not "loan contingency" for low appraisals), Loan Estimate / Closing Disclosure, PMI vs FHA MIP, pre-qualification vs pre-approval.

## Claims to reject
- Statistics, percentages or case-study results without a named, checkable source.
- Anything specific about other lenders' or calculator sites' pricing or features.
