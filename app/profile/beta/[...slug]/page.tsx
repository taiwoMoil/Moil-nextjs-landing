"use client";

import EmployerWorkerViewProfile from "./worker_employerView_profile";
// import { useSelector } from "react-redux";

interface PublicProfile {
  About?: string;
  Years_of_experience?: number;
  Address?: string;
}

interface UserInfo {
  // Add user info properties as needed
}

// interface EmployerFullHeadProps {
//   profile_id: string | null;
//   publicProfile: PublicProfile;
//   userInfo: UserInfo;
// }

function EmployerFullHead({ profile_id, publicProfile, userInfo }: any) {
  // const publicInfo = useSelector((e) => e.public);
  // const pub = publicInfo.message?.profile;

  return (
    <>
      {/* top purple header and About of page  */}
      <div className="w-full tablet:flex gap-6">
        <EmployerWorkerViewProfile />
        {/* About page  */}
        <div className="flex flex-col gap-10 w-full tablet:w-[50%]">
          <div className="bg-white rounded-xl border border-[#D2D4F8] p-5 w-full h-fit flex justify-between">
            {/* content  */}
            <div className="w-[90%]">
              <h1 className="text-[#5843BD] font-semibold text-base">About</h1>
              <p className=" text-sm font-normal text-[#666666] w-fit h-fit">
                {publicProfile?.About}
              </p>
            </div>
          </div>

          {/* info and Location  */}
          <div className="w-full flex justify-between gap-4">
            {/* info  */}
            {publicProfile?.Years_of_experience !== null &&
            publicProfile?.Years_of_experience !== undefined ? (
              <div className=" w-[40%] bg-white rounded-xl border border-[#D2D4F8] p-5">
                <h1 className="text-[#5843BD] font-semibold text-base">Info</h1>
                <p className=" text-xs font-normal text-[#666666]">
                  {publicProfile?.Years_of_experience} years of experience
                </p>
              </div>
            ) : null}
            {/* location  */}
            {publicProfile?.Address !== null && publicProfile?.Address !== undefined ? (
              <div className="w-[40%] bg-white rounded-xl border border-[#D2D4F8] p-5">
                <h1 className="text-[#5843BD] font-semibold text-base">
                  Location
                </h1>
                <p className=" text-xs font-normal text-[#666666]">
                  {publicProfile?.Address}
                </p>
              </div>
            ) : null}
          </div>

          {/* Button and review  */}
          <div className="w-full flex flex-col gap-4 tablet:flex-row tablet:gap-0 justify-between">
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerFullHead;
