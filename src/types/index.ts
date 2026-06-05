export interface HeroData {
  h1: string;
  h1Emphasis?: string;
  subtitle: string;
  imageDesc: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export interface SpecialOfferData {
  price: string;
  subtitle: string;
  cta: string;
}

export interface ContentSectionData {
  h2: string;
  h2Emphasis?: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface ServiceItem {
  label: string;
  description: string;
}

export interface HowItWorksStep {
  title: string;
  body: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FinalCTAData {
  headline: string;
  subtitle: string;
}

export interface LPData {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  hero: HeroData;
  specialOffer?: SpecialOfferData;
  contentSection: ContentSectionData;
  servicesHeadline: string;
  services: ServiceItem[];
  howItWorksHeadline: string;
  howItWorksImageSrc: string;
  howItWorksImageAlt: string;
  howItWorksSteps: HowItWorksStep[];
  faqHeadline: string;
  faqs: FAQItem[];
  finalCTA: FinalCTAData;
  formHeadline: string;
}
