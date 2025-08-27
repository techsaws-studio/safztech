import React from "react";

function PrivacyPolicyPage() {
  return (
    <main className="layout-standard section-padding-standard section-margin-standard mt-[8rem]">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-poppins text-heading font-bold mb-8 text-balance">
          Privacy Policy
        </h1>
        <p className="text-foreground text-lg leading-relaxed">
          This Privacy Policy explains how SafzTech (&quot;Company&quot;)
          collects, uses, and safeguards information.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            1. Information Collected
          </h2>
          <p className="leading-relaxed">
            Company may collect personal information including but not limited
            to name, email, phone, billing address, and payment details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            2. Payment Processing
          </h2>
          <p className="leading-relaxed">
            All payment transactions are processed via Stripe, a PCI DSS Level 1
            service provider. Company does not retain full credit card numbers,
            CVV, or expiration dates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            3. Use of Information
          </h2>
          <p className="leading-relaxed">
            Information is used to fulfill services, process payments,
            communicate with Clients, and comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            4. Cookies and Analytics
          </h2>
          <p className="leading-relaxed">
            The Website may use cookies and third-party analytics tools. Users
            may disable cookies in browser settings, though this may affect
            functionality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            5. Data Retention
          </h2>
          <p className="leading-relaxed">
            Information is retained only as long as necessary for service
            delivery, accounting, or legal purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            6. Data Security
          </h2>
          <p className="leading-relaxed">
            Company employs SSL encryption and industry-standard security
            practices. However, no method of electronic transmission is 100%
            secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            7. Disclosure
          </h2>
          <p className="leading-relaxed">
            Data may be disclosed if required by law or to protect
            Company&apos;s legal rights.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            8. Rights of Users
          </h2>
          <p className="leading-relaxed">
            Clients may request access, correction, or deletion of their
            personal information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-heading font-poppins">
            9. Changes to Policy
          </h2>
          <p className="leading-relaxed">
            Company reserves the right to amend this Policy with notice on the
            Website.
          </p>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
