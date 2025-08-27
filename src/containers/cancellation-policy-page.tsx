import React from "react";

function CancellationPolicyPage() {
  return (
    <main className="layout-standard section-padding-standard section-margin-standard mt-[8rem]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins text-heading font-bold mb-8 text-balance">
          Cancellation Policy
        </h1>
        <p className="text-foreground text-lg leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          itaque error quae dolores odio voluptatem at atque eos cumque qui sunt
          a voluptate odit autem delectus magnam, nemo dolorum excepturi?
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            1. Project Cancellations
          </h2>
          <p className="leading-relaxed">
            Client may cancel by providing written notice. If cancellation
            occurs prior to commencement, full refund is granted. If
            cancellation occurs mid-project, Client is responsible for fees
            corresponding to work completed to date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            2. Subscription Cancellations
          </h2>
          <p className="leading-relaxed">
            Subscriptions renew automatically unless canceled prior to renewal.
            Cancellation prevents future billing but does not entitle Client to
            prorated refunds.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            4. Notice
          </h2>
          <p className="leading-relaxed">
            All cancellation requests must be submitted in writing to{" "}
            <a
              href="mailto:billing@safztech.com"
              className="text-white hover:text-gray-300 transition-colors underline"
            >
              billing@safztech.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default CancellationPolicyPage;
