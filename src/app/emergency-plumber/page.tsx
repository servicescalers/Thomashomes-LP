import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import lp3 from '@/data/lp3';

export const metadata: Metadata = {
  title: lp3.pageTitle,
  description: lp3.metaDescription,
};

export default function EmergencyPlumberPage() {
  return <LandingPageTemplate data={lp3} />;
}
