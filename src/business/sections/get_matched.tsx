import { useState, useEffect } from "react";
import Link from "next/link";
import { businessBaseUrl } from "../../common/constants/baseUrl";

interface GetMatchedSectionProps {
  refQuery: string | null;
  lgQuery: string;
}

export default function GetMatchedSection({ refQuery, lgQuery }: GetMatchedSectionProps) {
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
    <section className="relative bg-[#F3F3F9] overflow-hidden" >
      <div className="w-full pt-8 pb-8 lg:pb-16 px-6 lg:px-0 lg:max-w-[1000px] mx-auto">
        <div className="w-full flex-col gap-y-4  lg:flex-row lg:gap-x-12 lg:px-4 xl:px-0 items-center inline-flex">

          {/* Section Text */}
          <div className="w-full flex-col lg:flex-row gap-x-16 items-center inline-flex">
            <div 
              className="flex-col justify-start items-start gap-6 inline-flex lg:min-w-[450px] xl:min-w-[507px] max-w-[540px]"
            >
              <p className="text-base md:text-3xl font-semibold leading-[1.2] text-left text-[#292929]">
                Get matched with skilled workers
                who are the best fit for your job.
              </p>

              <p className="text-base md:text-2xl font-normal leading-[1.4] text-left text-[#1C2022]">
                Moil AI recommends the best matches right from your dashboard, based on your industry and jobs posted.
              </p>
              <Link className="w-max py-3 px-10 linear-btn-bg rounded-[4px]" href={`${businessBaseUrl}/register${queryString}`}>
                <span className="text-center leading-[1.5] text-white text-base font-medium">
                  Start Matching
                </span>
              </Link>
            </div>
          </div>

          {/* Section Image */}
          <div
            className="flex flex-col py-4 gap-y-4"
          >

          <p className="text-[21px] text-[#00000099] leading-normal font-medium">Recommended Candidates</p>

            <img
              src="https://res.cloudinary.com/drlcisipo/image/upload/v1720722885/Website%20images/Frame_427320338_s7uarc.png"
              className="lg:min-w-[458px]"
              alt="sample resume"
            />

            <img
              src="https://res.cloudinary.com/drlcisipo/image/upload/v1720722885/Website%20images/Frame_427320339_xhyhtp.png"
              className="lg:min-w-[458px]"
              alt="sample resume"
            />
          </div>

        </div>
      </div>
    </section>
  )
}