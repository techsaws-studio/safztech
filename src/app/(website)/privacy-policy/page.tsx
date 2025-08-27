import React from "react";
import { Metadata } from "next";

import PrivacyPolicyPage from "@/containers/privacy-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Privacy Policy | SAFZTECH - Premium Web & Software Agency",
  description:
    "Read SAFZTECH's Privacy Policy to understand how we collect, use, and protect your data. Trust our premium web and software agency for secure and transparent digital solutions.",
});

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
