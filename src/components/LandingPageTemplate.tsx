import type { LPData } from '@/types';
import Nav from './Nav';
import Hero from './Hero';
import TrustBar from './TrustBar';
import SpecialOffer from './SpecialOffer';
import GlanceTiles from './GlanceTiles';
import ContentSection from './ContentSection';
import ServicesList from './ServicesList';
import HowItWorks from './HowItWorks';
import Reviews from './Reviews';
import WhyThomas from './WhyThomas';
import HomeWarranty from './HomeWarranty';
import FAQ from './FAQ';
import ServiceArea from './ServiceArea';
import FinalCTA from './FinalCTA';
import ContactForm from './ContactForm';
import Footer from './Footer';
import StickyCallBar from './StickyCallBar';

export default function LandingPageTemplate({ data }: { data: LPData }) {
  const isEmergency = data.slug === 'emergency-plumber';

  return (
    <>
      <StickyCallBar />
      <Nav />
      <main>
        <Hero data={data.hero} formHeadline={data.formHeadline} isEmergency={isEmergency} />
        <TrustBar />
        {data.specialOffer && <SpecialOffer offer={data.specialOffer} />}
        <GlanceTiles />
        <ContentSection data={data.contentSection} />
        <ServicesList
          headline={data.servicesHeadline}
          services={data.services}
        />
        <HowItWorks
          headline={data.howItWorksHeadline}
          imageSrc={data.howItWorksImageSrc}
          imageAlt={data.howItWorksImageAlt}
          steps={data.howItWorksSteps}
        />
        <Reviews />
        <WhyThomas />
        <HomeWarranty />
        <FAQ headline={data.faqHeadline} faqs={data.faqs} />
        <ServiceArea />
        <FinalCTA data={data.finalCTA} />
        <ContactForm headline={data.formHeadline} />
      </main>
      <Footer />
      {/* Extra bottom padding on mobile for the sticky call bar */}
      <div className="h-14 md:hidden" aria-hidden />
    </>
  );
}
