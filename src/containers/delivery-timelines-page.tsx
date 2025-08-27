import React from "react";

function DeliveryTimelinesPage() {
  return (
    <main className="layout-standard section-padding-standard section-margin-standard mt-[8rem]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins text-heading font-bold mb-8 text-balance">
          Delivery & Timelines
        </h1>
        <p className="text-foreground text-lg leading-relaxed">
          At SAFZTECH, we ensure timely delivery of all digital products, from
          logos and landing pages to full brand kits. Our structured timelines
          and efficient processes guarantee high-quality results while keeping
          clients informed every step of the way.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            1. Commencement
          </h2>
          <p className="leading-relaxed">
            Services shall commence within three (3) business days of confirmed
            payment and Client&apos;s submission of required information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            2. Timelines
          </h2>
          <p className="text-lg mb-4">Estimated timelines are:</p>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
            <li>Logos: 5 - 7 business days</li>
            <li>Landing pages: 7 - 10 business days</li>
            <li>Brand kits: 10 - 14 business days</li>
          </ul>
          <p className="text-lg mt-4">
            Timelines are estimates and subject to Client responsiveness.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            3. Revisions
          </h2>
          <p className="leading-relaxed">
            Company shall provide revisions within 2 - 3 business days, limited
            to those included in the package.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            4. Delivery
          </h2>
          <p className="leading-relaxed">
            Final deliverables shall be provided electronically via secure link.
            Client shall download and store deliverables within thirty (30) days
            of receipt.
          </p>
        </div>
      </div>
    </main>
  );
}

export default DeliveryTimelinesPage;
