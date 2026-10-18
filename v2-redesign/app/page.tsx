import { buildCourseSchema } from '@/lib/geo/schemas';
import CourseTrail from './components/course-trail';
import Footer from './components/footer';
import Hero from './components/hero';
import JsonLd from './components/json-ld';
import KitBand from './components/kit-band';
import MaterialsBento from './components/materials-bento';
import OfferTicket from './components/offer-ticket';
import SiteNav from './components/site-nav';
import Stats from './components/stats';
import TopBanner from './components/top-banner';
import TopicsMarquee from './components/topics-marquee';
import BlackFridaySection from './components/black-friday-section';

export default function LandingPage() {
  return (
    <div className="overflow-x-clip bg-ink font-sans text-paper selection:bg-lamp/30">
      <JsonLd
        id="course-schema"
        data={{
          '@context': 'https://schema.org',
          ...buildCourseSchema(),
        }}
      />
      <TopBanner />
      <SiteNav />
      <BlackFridaySection />

      <main>
        <Hero />
        <TopicsMarquee />
        <Stats />
        <CourseTrail />
        <OfferTicket />
        <MaterialsBento />
        <KitBand />
      </main>

      <Footer />
    </div>
  );
}
