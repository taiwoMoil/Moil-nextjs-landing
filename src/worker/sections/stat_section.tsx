import { useState, useEffect } from "react";
import Link from "next/link";

// Local Import
import { InfinitySvg, TickSvg } from "../../common/components/svgs";
import StatItem from "../components/stat_item";
import { workerBaseUrl } from "../../common/constants/baseUrl";

export default function StatSection({ refQuery, lgQuery }: any) {
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

  return (
    <section className="w-full py-12 bg-[#FEFEFE] px-6 sm:px-0 flex justify-center">
      {/* static with simple graphics rep */}
      <div className="w-full lg:max-w-[800px] xl:max-w-[1000px] self-center justify-start items-center gap-8 flex flex-col lg:flex-row">
        <div className="max-w-[466px] h-[420px] md:h-[450px] xl:h-[520px] w-full flex  gap-x-6">
          <div className="flex flex-col self-end gap-y-6">
            <StatItem
              className="text-center text-indigo-700 text-[2rem] sm:text-[40px] lg:text-[52.02px] font-bold lg:leading-10"
              header="70%"
              text="of candidates have never used digital tools to find work."
            />
            <StatItem
              className="text-center text-orange-500 text-[19px] sm:text-[28px] lg:text-[32.27px] font-bold  leading-[24px]"
              header="Generate Resume"
              text="Our AI will automatically highlight and showcase your skills"
            />
          </div>
          <div className="flex flex-col self-start gap-y-6">
            <StatItem
              className="max-w-[50px]"
              text="Create unlimited resumes at no cost to you."
              icon={<InfinitySvg className="w-full" />}
            />
            <StatItem
              className="text-center text-indigo-700 text-[2rem] sm:text-[40px] lg:text-[52.02px] font-bold lg:leading-[48.64px]"
              header="2 mins"
              text="Apply for jobs in a few clicks."
            />
          </div>
        </div>

        {/* Textual part of the static section */}
        <div className="w-full max-w-[510px] flex flex-col gap-y-4">
          <div className="text-[#0F2137] text-base zsm:text-lg sm:text-xl lg:text-2xl font-medium leading-[28.80px]">
            70% of US workforce does not have access to technology tools for job hunting.
          </div>
          <div className="text-[#1C2022] text-[14px] sm:text-[17px] font-normal  leading-tight">
            Select your favorite design and create your professional resume
            effortlessly. Our platform makes it quick and convenient for you to
            showcase your skills and experiences effectively.
          </div>
          <div className="flex flex-col gap-y-3 ">
            <div className="flex gap-x-2 items-center">
              <TickSvg className='min-w-[20px]' />
              <div className="text-[#393939] text-base font-normal leading-[1.5]">
                Unlimited resume design templates
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <TickSvg className='min-w-[20px]' />
              <div className="text-[#393939] text-base font-normal leading-[1.5]">
                Auto-generate your profile from your resume.
              </div>
            </div>
          </div>
          <Link className="flex gap-x-2 text-[#5843BD] items-center" href={`${workerBaseUrl}/register${queryString}`}>
            <span className="-indigo-700 text-sm font-medium leading-[42px]">
              Explore Templates
            </span>
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4.31593C5 4.45931 4.93998 4.60267 4.82018 4.71198L1.0486 8.1518C0.808678 8.37062 0.419689 8.37062 0.179867 8.1518C-0.0599556 7.93308 -0.0599556 7.57837 0.179867 7.35953L3.51717 4.31593L0.179983 1.27231C-0.0598391 1.05349 -0.0598391 0.698823 0.179983 0.480112C0.419806 0.261188 0.808794 0.261188 1.04871 0.480112L4.8203 3.91988C4.94011 4.02925 5 4.17261 5 4.31593Z"
                fill="#5843BD"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
