"use client";

import { useEffect, useState } from "react";
import WorkerNavigation from "../src/worker/components/navigation";
import LowerNaviation from "../src/worker/components/lower_nav";
import WorkerHeroSection from "../src/worker/sections/hero_section";
import ShowcaseSection from "../src/worker/sections/showcase_skills";
import ResumeCTA from "../src/worker/sections/resume_cta";
import FewClicksSection from "../src/worker/sections/few_clicks";
import MadeForYouSection from "../src/worker/sections/made_for_you";
import StatSection from "../src/worker/sections/stat_section";
import FAQSection from "../src/worker/sections/FAQ_section";
import TestimonialSection from "../src/worker/sections/testimonial_section";
import CallToActionSection from "../src/worker/sections/call_to_action";
import FooterSection from "../src/common/sections/footer";
import SubscribeSection from "../src/common/sections/subscribe_section";
import { createPortal } from "react-dom";
import SelectLanguage from "../src/common/components/selectLanguage";
import { motion } from "framer-motion";

export default function HomePage() {
  const [refQuery, setRefQuery] = useState<string | null>(null);
  const [queryLg, setQueryLg] = useState("");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Get URL parameters on client side
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    setRefQuery(searchParams.get('ref'));

    const tlang = localStorage.getItem("tlang");
    if (tlang == null) {
      setTimeout(() => {
        setShowLanguageModal(true);
      }, 50);
    }
  }, []);

  const showModal = showLanguageModal ? createPortal(
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="top-0 left-0 fixed bottom-0 right-0 z-1 h-screen flex justify-center items-center md:bg-black md:bg-opacity-70 backdrop-blur-[2px] sm:bg-white vsm:bg-white overflow-y-scroll ScrollOnly"
    >
      <SelectLanguage handleClick={() => setShowLanguageModal(false)} setQueryLg={setQueryLg} />
    </motion.div>, document.getElementById("modal")!
  ) : null;

  return (
    <>
      <div className="bg-[#F7F8FC]">
        <WorkerNavigation refQuery={refQuery} lgQuery={queryLg} setQueryLg={setQueryLg} setShowLanguageModal={setShowLanguageModal} />
        <LowerNaviation refQuery={refQuery} lgQuery={queryLg} />
        <WorkerHeroSection refQuery={refQuery} lgQuery={queryLg} setShowLanguageModal={setShowLanguageModal} />
        <ShowcaseSection refQuery={refQuery} lgQuery={queryLg} />
        <ResumeCTA refQuery={refQuery} lgQuery={queryLg} />
        <FewClicksSection refQuery={refQuery} lgQuery={queryLg} />
        <MadeForYouSection />
        <StatSection refQuery={refQuery} lgQuery={queryLg} />
        <TestimonialSection />
        <CallToActionSection refQuery={refQuery} lgQuery={queryLg} />
        <FAQSection />
        <SubscribeSection />
        <FooterSection refQuery={refQuery} lgQuery={queryLg} />
        {showModal}
      </div>
    </>
  );
}