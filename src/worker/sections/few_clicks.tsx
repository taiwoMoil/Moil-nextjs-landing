import { useState, useEffect } from "react";
import Link from "next/link";
import { workerBaseUrl } from "../../common/constants/baseUrl";

export default function FewClicksSection({refQuery, lgQuery}: any) {
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
    <section className="relative bg-[#fff] overflow-hidden" >
      <div className="w-full pt-8 pb-8 lg:pb-16 container px-6 sm:px-0 max-w-[900px] mx-auto">
        <div className="w-full flex-col gap-y-6 lg:flex-row gap-x-16 items-center inline-flex">
          {/* Section Image */}
          <div
            className="rounded-[14.46px]"
          >
            <img
              src="https://res.cloudinary.com/drlcisipo/image/upload/v1720292891/Website%20images/Frame_427320396_t2qv4s.png"
              className="w-[80vw] max-w-[300px] sm:max-w-[350px] lg:max-w-[320px] xl:max-w-[350px] sm:min-w-[190px]"
              alt="sample resume"
            />
          </div>

          {/* Section Text */}
          <div className="w-full flex-col lg:flex-row gap-x-16 items-center inline-flex">
            <div
              className="flex-col justify-start items-start gap-2 md:gap-6 inline-flex max-w-[540px]"
            >
              <p className="text-base md:text-3xl font-semibold leading-[1.2] text-left text-[#292929]">
                Apply for jobs with a few clicks.
              </p>

              <p className="text-base sm:text-2xl font-normal leading-[1.4] text-left text-[#1C2022]">
                Easily submit your job applications. No extra stress. No boring hassles.
              </p>
              <Link className="w-max py-3 px-10 bg-[#5843BD] rounded" href={`${workerBaseUrl}/register${queryString}`}>
                <span className="text-center leading-[1.5] text-white text-base font-medium">
                  Find jobs
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}