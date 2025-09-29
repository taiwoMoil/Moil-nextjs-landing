import React from "react";
import FeatureItem from "../../common/components/feature_item";
import { CreateAccountSvg, InterviewSvg, JobsSvg, CompleteProfileSvg } from "../../common/components/svgs";

export default function MadeForYouSection() {
  return (
    <section className="flex-col bg-[#F3F3F9] px-8  xl:px-0 w-full justify-start py-6 items-center gap-10 lg:gap-16 inline-flex">
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
        Whether you are hiring for hospitality, construction, plumbing, HVAC, or cleaning industries, Moil is the right matching tool for you.
        </div>
      </div>
      <div className="flex-col justify-center w-full items-center gap-6 flex">
        <div className="text-center text-slate-900 text-base zsm:text-lg sm:text-xl lg:text-2xl font-medium leading-[50px]">
          It doesn’t get any better than Moil!
        </div>
        <div className="justify-start xl:max-w-[1000px] xtraxl:xl:max-w-[1152px] items-start gap-y-10 gap-x-16 flex md:flex-row flex-col">
          <FeatureItem
            header="Create an Account"
            text="It takes only a few clicks. Sign up with Google or your email address and complete your business profile."
            icon={<CreateAccountSvg />}
          />
          <FeatureItem
            header="Unlimited Jobs"
            text="Start publishing jobs as soon as your account is set up. Moil AI does most of the work for you."
            icon={<JobsSvg />}
          />
          <FeatureItem
            header="Easy Interviews"
            text="Interview applicants right from the chat box and send offer cards in a few clicks. "
            icon={<InterviewSvg />}
          />
        </div>
      </div>
    </section>
  );
}
