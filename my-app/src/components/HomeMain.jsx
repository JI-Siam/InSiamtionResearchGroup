'use client'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import AnnouncementBanner from '@/components/home/AnnouncementBanner';
import AboutSection from '@/components/home/AboutSection';
import ResearchTeamsPipeline from '@/components/home/ResearchTeamsPipeline';
import PublicationsShowcase from '@/components/home/PublicationsShowcase';
import MentorshipCulture from '@/components/home/MentorshipCulture';
import WhyJoinUsComparison from '@/components/home/WhyJoinUsComparison';
import ValuesAndPhilosophy from '@/components/home/ValuesAndPhilosophy';

export default function HomeMain({ data }) {
  const org = data?.organization || {};
  const about = data?.about || {};
  const purpose = data?.purpose || {};
  const vision = data?.vision || '';
  const announcement = data?.announcement || null;
  const featuredResearch = data?.featuredResearch || {};
  const authorshipPolicy = data?.authorshipPolicy || {};
  const whyJoinUs = data?.whyJoinUs || {};
  const teams = data?.teamStructure?.teams || [];
  const philosophy = data?.organizationalPhilosophy || [];
  const values = data?.coreValues || [];
  const membership = data?.membershipExpectations || [];
  const mentorship = data?.mentorshipCulture || {};
  const confidentiality = data?.confidentialityPolicy || [];
  const longTermGoals = data?.longTermGoals || [];

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero with 3D Constellation & Metrics */}
        <Hero org={org} about={about} announcement={announcement} />

        {/* Live Cohort Status / Mission Control Announcement */}
        <AnnouncementBanner announcement={announcement} />

        {/* Academic Identity & Mission */}
        <AboutSection about={about} purpose={purpose} vision={vision} />

        {/* 3 Specialized Labs & Scientific Pipeline */}
        <ResearchTeamsPipeline teams={teams} />

        {/* Publications, Conference Venues & Authorship Ethics */}
        <PublicationsShowcase
          featuredResearch={featuredResearch}
          authorshipPolicy={authorshipPolicy}
        />

        {/* Senior-to-Junior Mentorship Framework */}
        <MentorshipCulture mentorship={mentorship} />

        {/* Value Proposition: Solo Student Dilemma vs IRG Ecosystem */}
        <WhyJoinUsComparison whyJoinUs={whyJoinUs} />

        {/* Core Values, Organizational Philosophy & Confidentiality Protocol */}
        <ValuesAndPhilosophy
          philosophy={philosophy}
          values={values}
          expectations={membership}
          confidentiality={confidentiality}
        />
      </main>

      <Footer org={org} longTermGoals={longTermGoals} />
    </div>
  );
}
