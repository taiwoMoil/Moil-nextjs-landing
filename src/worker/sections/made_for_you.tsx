import React from "react";
import FeatureItem from "../../common/components/feature_item";
import { CreateAccountSvg, InterviewSvg, JobsSvg, CompleteProfileSvg } from "../../common/components/svgs";

export default function MadeForYouSection() {
  return (
    <section className="flex-col bg-[#F3F3F9] w-full justify-start py-6 items-center gap-10 lg:gap-16 inline-flex">
      <div className="flex-col justify-start items-center gap-4 flex max-w-[583px]">
        <div className="text-center">
          <span className="text-indigo-700 xl zsm:2xl sm:3xl lg:text-4xl font-semibold leading-[50px]">
            Moil
          </span>
          <span className="text-slate-900 xl zsm:2xl sm:3xl lg:text-4xl font-semibold leading-[50px]">
            {" "}
            was made just for you!
          </span>
        </div>
        <div className="text-center text-neutral-500 text-base font-normal leading-normal">
        Whether you are professional carpenter, painter, waitress, or plumber, Moil is the right matching tool for you. 
        </div>
      </div>
      <div className="flex-col justify-center w-full items-center gap-6 flex">
        <div className="text-center text-slate-900 text-base zsm:text-lg sm:text-xl lg:text-2xl font-medium leading-[50px]">
          It doesn’t get any better than Moil!
        </div>
        <div className="justify-start md:max-w-[600px] md:flex-wrap xl:flex-nowrap xl:max-w-[1000px] xtraxl:xl:max-w-[1152px] items-start gap-y-10 gap-x-16 flex md:flex-row flex-col">
          <FeatureItem
            header="Create an Account"
            text="Sign in with Google or use or email address and password."
            icon={<CreateAccountSvg />}
          />
          <FeatureItem
            header="Complete your profile"
            text="Completing your profile and generating a resume is combined into one process."
            icon={<CompleteProfileSvg />}
          />
          <FeatureItem
            header="Unlimited Jobs"
            text="Start applying to jobs with your Moil-generated resume."
            icon={<JobsSvg />}
          />
          <FeatureItem
            header="Easy Interviews"
            text="Companies and job applicants hold quick interviews right from the inbox."
            icon={<InterviewSvg />}
          />
        </div>
      </div>
    </section>
  );
}
