import React from "react";
import { Metadata } from "next";

import RefundPolicyPage from "@/containers/refund-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Refund Policy | SAFZTECH - Premium Web & Software Agency",
  description:
    "Discover SAFZTECH's Refund Policy for our web and software services. We provide clear and fair refund terms to ensure a trustworthy and client-focused experience with our premium tech agency.",
});

function RefundPolicy() {
  return <RefundPolicyPage />;
}

export default RefundPolicy;
