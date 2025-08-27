import React from "react";
import { Metadata } from "next";

import DeliveryTimelinesPage from "@/containers/delivery-timelines-page";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Delivery & Timelines | SAFZTECH - Premium Web & Software Agency",
  description:
    "Learn about SAFZTECH's Delivery & Timelines policy for websites and software projects. We ensure timely, high-quality delivery for every client with our premium web and software services.",
});

function DeliveryTimelines() {
  return <DeliveryTimelinesPage />;
}

export default DeliveryTimelines;
