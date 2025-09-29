import { useState, useEffect } from "react";
import SkillsBtn from "../../worker/components/skill_btn";
import ViewMoreBtn from "../../worker/components/view_more_btn";
import Link from "next/link";
import { workerBaseUrl } from "../../common/constants/baseUrl";

export default function CallToActionSection({refQuery, lgQuery }: any) {
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
    <section className="mt-8 py-12 flex justify-center">
      <div className="justify-start items-center gap-y-6 lg:gap-12 xl:gap-16 flex flex-col lg:flex-row container lg:max-w-[800px] xl:max-w-[950px] xtraxl:max-w-[1000px]">
        <div className="flex-col max-w-[540px] justify-start items-start gap-4 flex">
          <p className="text-2xl zsm:text-3xl lg:text-[24px] xl:text-3xl">
            <span className="text-slate-700 font-semibold leading-9">
              Get hired quickly{" "}
            </span>
            <span className="text-slate-700  font-light leading-9">
              and{" "}
            </span>
            <span className="text-slate-700  font-semibold leading-9">
              earn more{" "}
            </span>
            <span className="text-slate-700  font-light leading-9">
              by{" "}
            </span>
            <span className="text-slate-700 font-semibold leading-9">
              highlighting your abilities
            </span>
          </p>
          <p className="text-neutral-500 text-base zsm:text-lg sm:text-xl lg:text-base xl:text-2xl font-normal lg:leading-[1.5]">
            Highlight your expertise and Experience in under 5 minutes.
          </p>

          {/* I am ready button */}
          <Link className="py-3 px-6 bg-orange-500 rounded" href={`${workerBaseUrl}/register${queryString}`}>
            <span className="text-center text-slate-50 text-base font-medium">
              I am Ready!
            </span>
          </Link>
        </div>


        <div className="flex-col justify-center items-center gap-3 inline-flex">
          <p className="text-zinc-400 text-[10px] sm:text-base font-medium">
            Skills you have added
          </p>
          <div className="flex flex-col items-center gap-y-4">
            <div className="flex gap-x-2">
              <SkillsBtn skill="Plumbing" />
              <SkillsBtn skill="Dry Cleaning" />
              <SkillsBtn skill="Carpentry" />
            </div>
            <div className="flex gap-x-2">
              <SkillsBtn skill="Bodyguard" />
              <SkillsBtn skill="Bouncer" />
              <SkillsBtn skill="Plumbing" />
            </div>
          </div>
          <ViewMoreBtn />
        </div>
      </div>
    </section>
  );
}
