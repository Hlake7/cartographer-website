export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  answerHref?: string;
  answerLinkText?: string;
}

export interface PricingFeature {
  text: string;
}
