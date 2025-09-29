import { useState, useEffect } from "react";
import Link from "next/link";
import { businessBaseUrl } from "../../common/constants/baseUrl";

interface HiringRoleSectionProps {
  refQuery: string | null;
  lgQuery: string;
}

export default function HiringRoleSection({ refQuery, lgQuery }: HiringRoleSectionProps) {
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
      <div className="w-full pt-8 pb-8 lg:py-16 px-6 lg:px-0 lg:max-w-[1000px] mx-auto">
        <div className="w-full flex-col gap-y-4 lg:flex-row gap-x-16 lg:gap-x-12 lg:px-4 xl:px-0 items-center inline-flex">
          {/* Section Image */}
          <div
            className="rounded-[14.46px]"
          >
            <img
              src="https://res.cloudinary.com/drlcisipo/image/upload/v1720722197/Website%20images/Frame_427320550_ofyr8v.png"
              className="lg:min-w-[458px]"
              alt="sample resume"
            />
          </div>

          {/* Section Text */}
          <div className="w-full flex-col lg:flex-row gap-x-16 items-center inline-flex">
            <div
              className="flex-col justify-start items-start gap-6 inline-flex lg:min-w-[450px] xl:min-w-[507px] max-w-[540px]"
            >
              <p className="text-base md:text-3xl font-semibold leading-[1.2] text-left text-[#292929]">
                What roles are you hiring for?
              </p>

              <p className="text-base md:text-2xl font-normal leading-[1.4] text-left text-[#1C2022]">
                Our worker base covers multiple blue collar fields, from hospitality, cleaning,
                manufacturing, HVAC, to construction.
              </p>
              <Link className="w-max py-3 px-10 bg-[#5843BD] rounded" href={`${businessBaseUrl}/register${queryString}`}>
                <span className="text-center leading-[1.5] text-white text-base font-medium">
                  Hire Workers
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}