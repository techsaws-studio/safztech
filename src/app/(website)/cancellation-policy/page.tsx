import React from "react";
import { Metadata } from "next";

import CancellationPolicyPage from "@/containers/cancellation-policy-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Cancellation Policy | SAFZTECH - Premium Web & Software Agency",
  description:
    "Learn about SAFZTECH's Cancellation Policy. We provide clear and transparent terms for website and software services, ensuring a reliable and trustworthy experience with our premium web and software agency.",
});

function CancellationPolicy() {
  return <CancellationPolicyPage />;
}

export default CancellationPolicy;
