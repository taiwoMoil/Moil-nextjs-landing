import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { workerBaseUrl } from "../../common/constants/baseUrl";

export default function ShowcaseSection({refQuery, lgQuery}: any) {
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
    <section className="relative overflow-hidden bg-white">

      {/* Resume section */}
      <section  className="bg-[#FAFAFA] overflow-hidden">
        <div className="w-full pt-8 pb-8 lg:pb-16 container px-6 sm:px-0 max-w-[900px] mx-auto">
          <div className="w-full flex-col gap-y-6 lg:flex-row gap-x-16  items-center inline-flex py-5">
            <div
              className="rounded-[14.46px]"
            >
              <img
                src="https://res.cloudinary.com/drlcisipo/image/upload/v1715356107/Website%20images/employee_hero_xzppfm.png"
                className="w-[80vw] max-w-[300px] sm:max-w-[380px] lg:max-w-[320px] xl:max-w-[350px] sm:min-w-[190px]"
                alt="sample resume"
              />
            </div>
            <div
              className="flex-col justify-start items-start gap-2 md:gap-6 inline-flex max-w-[540px]"
            >
              <p className="text-base md:text-3xl font-semibold leading-9 text-left text-[#292929]">
                Your skills are in high demand!
              </p>

              <p className="text-base  md:text-2xl font-normal leading-[1.5] text-left text-[#1C2022]">
                Showcase your skills with an appealing profile. Employers are on the look out for the best candidates.
              </p>
              <Link className="w-max py-4 px-4 bg-[#5843BD] rounded" href={`${workerBaseUrl}/register${queryString}`}>
                <span className="text-center text-white text-base font-medium">
                Create my profile
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Resume section ended here */}

    </section>
  );
}
