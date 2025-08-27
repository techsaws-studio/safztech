import React from "react";

function RefundPolicyPage() {
  return (
    <main className="layout-standard section-padding-standard section-margin-standard mt-[8rem]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins text-heading font-bold mb-8 text-balance">
          Refund Policy
        </h1>
        <p className="text-foreground text-lg leading-relaxed">
          Safztech (&quot;Company&quot;) provides refunds subject to the
          following terms:
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            1. Eligibility
          </h2>
          <p className="leading-relaxed">
            Requests for refunds must be submitted within 24 hours of payment if
            no work has commenced.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            2. Partial Refunds
          </h2>
          <p className="leading-relaxed">
            If services have commenced, Company may issue a prorated refund
            based on the stage of completion, less administrative costs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            3. Non-Refundable Items
          </h2>
          <p className="leading-relaxed">
            Discovery, strategy, or consultation sessions once rendered are
            non-refundable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            4. Process
          </h2>
          <p className="leading-relaxed">
            Refund requests must be submitted in writing to
            billing@safztech.com. Approved refunds will be processed within ten
            (10) business days to the original payment method.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            5. Limitation
          </h2>
          <p className="leading-relaxed">
            Company shall not be obligated to refund completed services or
            deliverables.
          </p>
        </div>
      </div>
    </main>
  );
}

export default RefundPolicyPage;
