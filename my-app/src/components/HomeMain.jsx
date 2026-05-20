'use client'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Banner from '@/components/home/Banner';
import About from '@/components/home/About';
import Featured from '@/components/home/Featured';
import Teams from '@/components/home/Teams';
import Recruitment from '@/components/home/Recruitment';
import WhyJoinUs from '@/components/home/WhyJoinUs';
import Mission from '@/components/home/Mission';
import Philosophy from '@/components/home/Philosophy';
import Values from '@/components/home/Values';
import Membership from '@/components/home/Membership';
import Mentorship from '@/components/home/Mentorship';

export default function HomeMain({data}){
  // `data` is provided by the server component (page.js)
  const org = data?.organization || {};
  const about = data?.about || {};
  const featuredResearch = data?.featuredResearch || {};
  const recruitment = data?.recruitment || {};
  const whyJoinUs = data?.whyJoinUs || {};
  const teams = data?.teamStructure?.teams || [];
  const mission = data?.mission || data?.purpose?.aims || [];
  const philosophy = data?.organizationalPhilosophy || [];
  const values = data?.coreValues || [];
  const membership = data?.membershipExpectations || [];
  const mentorship = data?.mentorshipCulture || {};

  return (
    <div className="min-h-screen bg-bg text-text bg-linear-to-b from-white to-blue-50 dark:from-bg dark:to-bg">
      <Navbar />
      <main>
        <Banner title={org.fullName} subtitle={about.summary} />
        <About about={about} />
        <Featured featuredResearch={featuredResearch} />
        <Mission mission={mission} />
        <Philosophy philosophy={philosophy} />
        <Values values={values} />
        <Teams teams={teams} />
        <Recruitment recruitment={recruitment} />
        <WhyJoinUs whyJoinUs={whyJoinUs} />
        <Membership expectations={membership} />
        <Mentorship mentorship={mentorship} />
      </main>
      <Footer />
    </div>
  )
}
