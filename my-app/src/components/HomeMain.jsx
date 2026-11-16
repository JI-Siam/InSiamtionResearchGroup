'use client'

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import WhyJoinUsComparison from '@/components/home/WhyJoinUsComparison';
import ResearchTeamsPipeline from '@/components/home/ResearchTeamsPipeline';
import ValuesAndPhilosophy from '@/components/home/ValuesAndPhilosophy';
import Modals from '@/components/home/Modals';

export default function HomeMain({ data }) {
  const org = data?.organization || {};
  const about = data?.about || {};
  const purpose = data?.purpose || {};
  const vision = data?.vision || '';
  const announcement = data?.announcement || null;
  const teams = data?.teamStructure?.teams || [];
  const whyJoinUs = data?.whyJoinUs || {};
  const philosophy = data?.organizationalPhilosophy || [];
  const values = data?.coreValues || [];
  const membership = data?.membershipExpectations || [];
  const confidentiality = data?.confidentialityPolicy || [];
  const longTermGoals = data?.longTermGoals || [];

  return (
    <div className="min-h-screen bg-obsidian text-offwhite flex flex-col selection:bg-cobalt selection:text-white font-sans">
      {/* 1. Minimal Editorial Floating Pill Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Monumental Dark-Mode Hero Section with Interactive 3-Team Lifecycle Bento */}
        <Hero org={org} about={about} announcement={announcement} />

        {/* 3. High-Contrast Light-Mode Editorial Section (#mission & #teams: 3 Specialized Labs) */}
        <AboutSection about={about} purpose={purpose} vision={vision} />


        {/* 6. Research Ethics & Discipline (#values: 8 Core Values, 6-10h Commitment & Confidentiality) */}
        <ValuesAndPhilosophy
          philosophy={philosophy}
          values={values}
          expectations={membership}
          confidentiality={confidentiality}
        />
      </main>

      {/* 7. Minimal Editorial Footer */}
      <Footer org={org} longTermGoals={longTermGoals} />

      {/* Interactive Fellowship Application & Venue Inspector Modals */}
      <Modals />
    </div>
  );
}
