import { useState, useEffect } from "react";
import Link from "next/link";

// Local Import
import TranslateButton from "../components/translate_btn";
import EmployerBubble from "../components/employer_bubble";
import { businessBaseUrl } from "../../common/constants/baseUrl";

interface BusinessHeroSectionProps {
  refQuery: string | null;
  lgQuery: string;
  setShowLanguageModal: (show: boolean) => void;
}

export default function BusinessHeroSection({ refQuery, lgQuery, setShowLanguageModal }: BusinessHeroSectionProps) {
  let [ queryString, setQueryString ] = useState("");
  // Automatically update queryString when refQuery or lgQuery change
  useEffect(() => {
    if (refQuery && lgQuery) {
      setQueryString(`?ref=${refQuery}&lg=${lgQuery}`);
    } else if (refQuery && !lgQuery) {
      setQueryString(`?ref=${refQuery}`);
    } else if (!refQuery && lgQuery) {
      setQueryString(`?lg=${lgQuery}`);
    } else {
      setQueryString(""); // No query parameters
    }
  }, [refQuery, lgQuery]); // Runs when refQuery or lgQuery changes

  const isWideAndShort = window.innerWidth > 1024 && window.innerHeight < 650;
  const isShortandLessWide = window.innerHeight < 750 && window.innerWidth < 400;
  return (
    <main className={`bg-business flex flex-col ${isWideAndShort ? 'h-hero-height-saw': 'h-hero-height-mob lg:h-hero-height'} ${isShortandLessWide && 'min-h-screen '} lg:flex-row justify-center relative items-center`}>

      <TranslateButton parentClass="w-full lg:hidden" className="lg:hidden w-full py-3 px-5 flex gap-3 justify-center translate-gradient" textClassName="font-poppins text-base font-semibold text-white leading-6 text-center" setShowLanguageModal={setShowLanguageModal} />

      <div className="max-w-[1200px] pb-8 sm:pb-0 h-full flex flex-col mt-5 lg:mt-0 gap-y-2 lg:gap-y-0 lg:flex-row items-center gap-x-5 lg:gap-x-0 justify-between md:justify-center lg:justify-between px-8">
        <div className="flex flex-col max-h-[420px] w-full justify-between gap-y-5">
          <p className="text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] font-bold leading-tight xl:leading-[48px] text-left text-white">
            Post a job in just 2 minutes with our AI
          </p>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm md:text-base font-semibold text-white">Use Moil AI to create a business profile and start posting jobs in only 2 minutes.</p>
          </div>
          <div className="w-full lg:flex gap-x-5 items-center hidden">
            <Link className="w-full bg-[#FF6633] font-semibold text-base xl:text-[24px] text-center text-white py-4 rounded-[8px]" href={`${businessBaseUrl}/register${queryString}`}>START HIRING</Link>
            <Link className="w-full bg-transparent font-semibold text-base xl:text-[24px] text-white text-center py-4 border border-[2px] border-white rounded-[8px]" href={`${businessBaseUrl}/login${queryString}`}>LOGIN NOW</Link>
          </div>

          <Link href={`/${queryString}`} className="font-semibold italic hidden  border-b border-white w-max leading-normal lg:block text-[20px] text-white text-left">Click here to find jobs instead</Link>
        </div>
        <div className="w-full relative flex justify-center lg:justify-end">
          <img
            className="w-full max-w-[400px] md:w-auto md:max-w-[500px] lg:max-w-[415px] xl:max-w-[450px]"
            src="https://res.cloudinary.com/drlcisipo/image/upload/v1713769726/Website%20images/Frame_427320492_tqde1k.svg"
            alt="Hero Image"
          />

          <div className="w-full md:max-w-[350px] lg:max-w-[415px] xl:max-w-[450px] flex justify-center absolute bottom-[-20px] md:bottom-[45px]">
            <div className="max-w-[350px] gap-2 items-center justify-center flex flex-wrap">
              <EmployerBubble text="Hospitality" />
              <EmployerBubble text="Cleaning" />
              <EmployerBubble text="Restaurant" />
              <EmployerBubble text="HVAC" />
              <EmployerBubble text="Construction" />
              <EmployerBubble text="Plumbing" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-2 items-center lg:hidden mt-[1rem]">
          <Link className="w-full bg-[#FF6633] font-semibold text-base xl:text-[24px] text-white text-center py-4 rounded-[8px]" href={`${businessBaseUrl}/register${queryString}`}>START HIRING</Link>
          <Link className="w-full bg-transparent font-semibold text-base xl:text-[24px] text-white py-4 border text-center border-[2px] border-white rounded-[8px]" href={`${businessBaseUrl}/login${queryString}`}>LOGIN NOW</Link>
        </div>

        <Link href={`/${queryString}`} className="font-semibold italic lg:hidden text-sm text-center leading-normal border-b border-white  text-white lg:text-left">Click here to find jobs instead</Link>
      </div>
    </main>
  )
}