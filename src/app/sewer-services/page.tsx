import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import lp2 from '@/data/lp2';

export const metadata: Metadata = {
  title: lp2.pageTitle,
  description: lp2.metaDescription,
};

export default function SewerServicesPage() {
  return <LandingPageTemplate data={lp2} />;
}
