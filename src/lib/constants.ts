import type { Feature, Step, UseCase, FAQItem } from "@/types";

export const SITE_NAME = "Cartographer";

export const PRICING = {
  name: "Cartographer",
  price: 7,
  interval: "month" as const,
  features: [
    "All 29 Utah counties",
    "Parcel boundaries on aerial imagery",
    "Ownership & property data",
    "Market values",
    "Automatic data updates",
    "New states as they launch",
  ],
};

export const STATS = [
  { value: "1,670,000+", label: "Parcels" },
  { value: "29 of 29", label: "Counties" },
  { value: "Monthly", label: "Updates" },
  { value: "2-Minute", label: "Setup" },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Subscribe",
    description: "Sign up in under a minute for $7/month.",
  },
  {
    number: 2,
    title: "Open Your Link",
    description:
      "Paste your personal link into Google Earth Pro. No plugins, no downloads.",
  },
  {
    number: 3,
    title: "Explore Parcels",
    description:
      "Pan and zoom anywhere in Utah. Parcel data loads automatically as you move.",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: "Layers",
    title: "Parcel Boundaries on Aerial",
    description:
      "See every property line overlaid on satellite imagery.",
  },
  {
    icon: "User",
    title: "Ownership & Property Data",
    description:
      "Click any parcel to view owner name, address, acreage, and market value.",
  },
  {
    icon: "RefreshCw",
    title: "Automatic Updates",
    description:
      "Data refreshes as you navigate. Always current, always in your viewport.",
  },
  {
    icon: "Map",
    title: "All 29 Utah Counties",
    description:
      "From Salt Lake to San Juan, every county is covered.",
  },
  {
    icon: "Globe",
    title: "More States Coming",
    description:
      "Utah is just the start. Get access to new states as they launch.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    icon: "TrendingUp",
    title: "Real Estate Investors",
    description:
      "Quickly identify parcels, check ownership, and evaluate property values across the state.",
  },
  {
    icon: "ClipboardCheck",
    title: "Appraisers",
    description:
      "Overlay parcel boundaries on aerial imagery to verify property lines and assess comparable sales.",
  },
  {
    icon: "FileText",
    title: "Title & Escrow Officers",
    description:
      "Look up ownership records and parcel details to streamline due diligence.",
  },
  {
    icon: "Compass",
    title: "Developers & Planners",
    description:
      "Visualize land parcels, acreage, and property data to plan projects with confidence.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Cartographer?",
    answer:
      "Cartographer is a subscription service that delivers parcel boundaries, ownership records, and property values directly into Google Earth Pro. Just subscribe, paste your personal link, and start exploring.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No additional plugins or software are needed. You just need Google Earth Pro (free from Google) and your Cartographer subscription link. Paste the link, and parcels appear automatically.",
  },
  {
    question: "What data is included with each parcel?",
    answer:
      "Each parcel includes boundaries overlaid on aerial imagery, plus details like owner name, mailing address, acreage, and market value when you click on a parcel.",
  },
  {
    question: "Which counties are covered?",
    answer:
      "All 29 Utah counties are covered — from Salt Lake and Utah counties to the most rural parts of the state. Every parcel in every county is included.",
  },
  {
    question: "Will you add more states?",
    answer:
      "Yes! Utah is our first state, and we're actively working on expanding coverage. As a subscriber, you'll automatically get access to new states as they launch at no extra cost.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no contracts or commitments. You can cancel your subscription anytime and you won't be charged again.",
    answerHref: "/manage",
    answerLinkText: "Manage your subscription.",
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer:
      "You can update your payment method or cancel your subscription anytime through the billing portal. Just enter the email address you used when subscribing.",
    answerHref: "/manage",
    answerLinkText: "Go to subscription management.",
  },
  {
    question: "How does billing work?",
    answer:
      "You'll be charged $7 when you subscribe, and then monthly after that. You can cancel anytime — no contracts or commitments.",
  },
];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
