import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.safztech.com";

export const defaultMetadata: Metadata = {
  title: "Safztech - Your Vision, Engineered to Perfection",
  description:
    "Safztech is a premium tech agency delivering custom websites, software solutions, and digital experiences that bring your vision to life with precision and innovation.",

  applicationName: "Safztech",
  creator: "TechSaws",
  generator: "Next.js",
  keywords: [
    "Safztech",
    "Software Development Agency",
    "Full Stack Development",
    "SaaS Development",
    "Mobile App Development",
    "AI Integration",
    "Web Design",
    "DevOps Services",
    "UI UX Design",
    "Custom App Development",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo.png",
        sizes: "834x408",
      },
      { rel: "icon", type: "image/svg+xml", url: "/favicons/logo.svg" },
      { rel: "icon", type: "image/x-icon", url: "/favicons/favicon.ico" },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Safztech - Your Vision, Engineered to Perfection",
    description:
      "Safztech is a premium tech agency delivering custom websites, software solutions, and digital experiences that bring your vision to life with precision and innovation.",
    siteName: "Safztech",
    images: [
      {
        url: "/social/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Safztech - Your Vision, Engineered to Perfection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Safztech - Your Vision, Engineered to Perfection",
    description:
      "Safztech is a premium tech agency delivering custom websites, software solutions, and digital experiences that bring your vision to life with precision and innovation.",
    images: ["/social/twitter-preview.jpg"],
    creator: "@TechSaws",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}
