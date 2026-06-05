import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import lp1 from '@/data/lp1';

export const metadata: Metadata = {
  title: lp1.pageTitle,
  description: lp1.metaDescription,
};

export default function DrainCleaningPage() {
  return <LandingPageTemplate data={lp1} />;
}
