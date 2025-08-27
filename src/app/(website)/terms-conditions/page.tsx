import React from "react";
import { Metadata } from "next";

import TermsConditionsPage from "@/containers/terms-conditions-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Terms & Conditions | SAFZTECH - Premium Web & Software Agency",
  description:
    "Read SAFZTECH's Terms & Conditions to understand the rules, policies, and agreements for our website and software services. Ensure a transparent and reliable experience with our premium tech agency.",
});

function TermsConditions() {
  return <TermsConditionsPage />;
}

export default TermsConditions;
