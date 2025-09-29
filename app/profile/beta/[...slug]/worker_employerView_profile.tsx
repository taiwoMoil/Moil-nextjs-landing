'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Skillsbtn from "../../../../src/worker/components/skill_btn";
import EmployerFullHead from "./page";
import BackButton from "../../../../src/worker/components/back_button";
import { baseURL } from "../../../../src/common/constants/baseUrl";
import Link from "next/link";
import LoaderModal from "../../../../src/worker/components/loader_modal";

// TypeScript interfaces
interface ProfileType {
  Fullname?: string;
  Job_type?: string;
  Address?: string;
  Skills?: Array<{
    value?: string;
  }> | string[];
  Experience?: Array<{
    Work_start_date?: string;
    Work_end_date?: string;
    Where_i_worked?: string;
    My_job_title?: string;
    Day_to_day_work?: string[];
  }>;
  Education?: Array<{
    Start_date?: string;
    End_date?: string;
    Course?: string;
    School?: string;
  }>;
  Work_experience?: Array<{
    My_job_title?: string;
    Day_to_day_work?: string[];
  }>;
  Soft_skills?: Array<{
    value?: string;
  }> | string[];
  Interest?: Array<{
    value?: string;
  }>;
  Reference?: Array<{
    Reference_person_name?: string;
    Referencee_job_title?: string;
    Reference_phone_number?: string;
    Reference_email?: string;
  }>;
}

interface UserType {
  id?: string;
  [key: string]: any;
}

// Caution: before you start going through, I used icons as pure SVG format thats why the code is a bit bulky, always close SVG bracket to maintain code readability.

function EmployerProfileView() {
  const router = useRouter();
  const [matchModal, setMatchModal] = useState<boolean>(false);
  const [pub, setPub] = useState<ProfileType | null>(null);
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes("profile")) {
      const id = window.location.pathname.split("/")[3];
      setProfileId(id);
      localStorage.setItem("profile_id", id);
      getProfileData(id);
    }
  }, []);

  const getProfileData = async (profileId: string) => {
    if (!profileId) return;

    setShow(true);
    try {
      const response = await fetch(`${baseURL}/api/users/profile/${profileId}`, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await response.json();
      console.log("profile resp", data);

      if (data.success === true) {
        if (data.data === null) {
          setDisplay(true);
        } else {
          setPub(data?.data?.profile || null);
          setUserInfo(data?.data?.user || null);
        }
      } else {
        setDisplay(true);
      }
    } catch (err) {
      console.log("error while fetching public profile from db", err);
      setDisplay(true);
    } finally {
      setShow(false);
    }
  };

  const handleClick = () => {
    router.push("/");
  };

  // let matchModalContainer = matchModal ? createPortal(
  //   <div className="top-0 left-0 fixed bottom-0 right-0 z-10 h-screen flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-[2px] ">
  //     <HireCandidateModal userData={pub}/>
  //   </div>,
  //   document.getElementById("modal")) : null

  return (
    <>
      {/* <HelmetProvide
      title={pub?.Fullname ? `Moil | ${pub.Fullname} - ${pub.Job_type}` : "Moil | view job"}
      description={pub?.Job_type && pub?.Address ? `View the public profile of ${pub.Fullname}, a ${pub.Job_type} based in ${pub.Address}. Discover skills, experience, and availability.` : "View a worker's public profile and job details on Moil."}
    /> */}
      {pub !== null && pub !== undefined ?
        <div className="grid grid-cols-auto md:grid-cols-smdash cont:grid-cols-dash grid-rows-dash">
          {/*         <TopBar topBarShowMenu={true} />
        <SideBar /> */}
          <div className="px-[2.5%] w-full h-full overflow-y-hidden mx-auto">
            {/* Pre text  */}
            <div className="flex flex-col tablet:flex-row gap-4 tablet:gap-0 justify-between pt-4">
              {/* left side  */}
              <div>
                <BackButton onClick={handleClick} />
                <h1 className=" font-medium text-xl tablet:text-4xl text-[#626060]">
                  {pub?.Fullname}
                </h1>
                <p className=" font-medium text-base text-[#7A7878]">
                  {pub?.Job_type}{" "}
                  <span className=" text-[#5843BD]">{pub?.Address}</span>
                </p>
              </div>

              {/* right side  */}
              <div className="hidden tablet:block text-base">
                {/* <p className=" font-medium text-[#5843BD]">Weekly Availability</p>
              <div className=" text-[#656566] font-medium">
                <p>Weekdays</p>
                <p>{pub?.Availability?.start_time} - {pub?.Availability?.end_time}</p>
              </div> */}

                {/* <p className="flex items-center gap-2 font-normal text-[#5843BD]">
                  View daily availability{" "}
                  <span>
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.70734 7.70701C7.51981 7.89448 7.26551 7.99979 7.00034 7.99979C6.73518 7.99979 6.48087 7.89448 6.29334 7.70701L0.636343 2.05001C0.540833 1.95776 0.464651 1.84742 0.412242 1.72541C0.359833 1.60341 0.332246 1.47219 0.331092 1.33941C0.329939 1.20663 0.355241 1.07495 0.405521 0.952054C0.455802 0.829157 0.530055 0.717505 0.623948 0.623612C0.717841 0.529719 0.829492 0.455466 0.952389 0.405185C1.07529 0.354904 1.20696 0.329603 1.33974 0.330757C1.47252 0.331911 1.60374 0.359497 1.72575 0.411906C1.84775 0.464315 1.9581 0.540497 2.05034 0.636007L7.00034 5.58601L11.9503 0.636007C12.1389 0.453849 12.3915 0.353055 12.6537 0.355333C12.9159 0.357611 13.1668 0.46278 13.3522 0.648188C13.5376 0.833596 13.6427 1.08441 13.645 1.34661C13.6473 1.6088 13.5465 1.86141 13.3643 2.05001L7.70734 7.70701Z"
                        fill="#5843BD"
                      />
                    </svg>
                  </span>
                </p> */}
              </div>
              {/* right side query 2  */}
              {/* <div className="tablet:hidden flex gap-3 text-base">
                <p className=" font-medium text-[#5843BD]">Availability</p>
                <div className=" text-[#656566] font-medium">
                  <p>Monday - Friday</p>
                  <p>8:00am - 6:00pm</p>
                </div>
              </div> */}
            </div>

            <div className="my-4 w-full h-full   rounded-2xl flex flex-col items-center">
              <EmployerFullHead profile_id={`${window.location.pathname.split("/")[3]}`} publicProfile={pub} userInfo={userInfo} />

              {/* bottom white content of page  */}
              <div className="w-[80%] flex flex-col items-center my-9 gap-9">
                {/* Divider line  */}
                <hr className=" bg-[#E9E9FB] w-full" />

                {/* Your skills  */}
                {pub?.Skills?.length !== 0 ?
                  <div className="w-full flex justify-between relative">
                    {/* LHS content  */}
                    <div className="w-[100%]">
                      <div>
                        <h1 className="font-semibold text-base text-[#5843BD]">
                          {pub?.Fullname}'s skills
                        </h1>
                        <p className="font-medium text-base text-[#717171]">
                          You can hire {pub?.Fullname} for any of these skills
                        </p>
                      </div>

                      {/* Skills icon sha, woo  */}
                      <div className=" justify-content-start w-full mb-2 text-start">
                        {pub?.Skills?.map((anything, key) => (
                          <span key={key}>
                            {typeof anything === 'object' && anything?.value !== undefined ? 
                              <Skillsbtn btntxt={anything.value} /> : 
                              <Skillsbtn btntxt={anything as string} />
                            }
                          </span>
                        ))}
                      </div>
                    </div>
                  </div> : null}

                {/* Divider line */}
                {/* margin top to compensate for absolute above  */}
                <hr className=" bg-[#E9E9FB] w-full mt-6" />

                {/* Work Experience  */}
                {pub?.Experience?.length !== 0 ?
                  <div className="w-full flex justify-between">
                    {/* LHS content  */}
                    <div className="w-[100%]">
                      <h1 className="font-semibold text-base text-[#5843BD] mb-4">
                        {pub?.Fullname}'s Work Experience
                      </h1>
                      {/* Content */}
                      <div className="w-full flex flex-col gap-6">
                        {/* up content  */}
                        {pub?.Experience?.map((data, key) => (
                          <div key={key} className="flex flex-col tablet:flex-row gap-8 w-full justify-between">
                            {/* year and kini  */}
                            <ul className=" w-full tablet:w-[40%] tablet:list-disc text-xs">
                              <li className=" font-semibold text-sm mb-2">{data?.Work_start_date} - {data?.Work_end_date}</li>
                              <li>{data?.Where_i_worked}</li>
                              {/* <li>City State</li> */}
                            </ul>

                            {/* details side  */}
                            <ul className=" w-full tablet:w-[60%] tablet:list-disc text-xs">
                              <li className=" font-semibold text-sm mb-2">
                                {data?.My_job_title}
                              </li>
                              {data?.Day_to_day_work?.map((exp, expKey) => (
                                <li key={expKey}>
                                  {exp[0] === "-" ? exp.slice(1, exp.length) : exp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> : null}

                {/* View less WE  */}
                {/* <div className="w-full">
                  <button className=" font-normal text-base text-[#5843BD] flex justify-center items-center gap-2">
                    View less{" "}
                    <span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.70734 0.293024C7.51981 0.105553 7.26551 0.000236988 7.00034 0.000236988C6.73518 0.000236988 6.48087 0.105553 6.29334 0.293024L0.636343 5.95002C0.540833 6.04227 0.464651 6.15261 0.412242 6.27462C0.359833 6.39662 0.332246 6.52784 0.331092 6.66062C0.329939 6.7934 0.355241 6.92508 0.405521 7.04798C0.455802 7.17087 0.530055 7.28253 0.623948 7.37642C0.717841 7.47031 0.829492 7.54456 0.952389 7.59485C1.07529 7.64513 1.20696 7.67043 1.33974 7.66927C1.47252 7.66812 1.60374 7.64053 1.72575 7.58812C1.84775 7.53572 1.9581 7.45953 2.05034 7.36402L7.00034 2.41402L11.9503 7.36402C12.1389 7.54618 12.3915 7.64698 12.6537 7.6447C12.9159 7.64242 13.1668 7.53725 13.3522 7.35184C13.5376 7.16643 13.6427 6.91562 13.645 6.65342C13.6473 6.39123 13.5465 6.13863 13.3643 5.95002L7.70734 0.293024Z"
                          fill="#5843BD"
                        />
                      </svg>
                    </span>
                  </button>
                </div> */}

                {/* Divider line  */}
                <hr className=" bg-[#E9E9FB] w-full" />

                {/* Education  */}
                {pub?.Education?.length !== 0 ?
                  <div className="w-full flex justify-between">
                    {/* LHS content  */}
                    <div className="w-[100%]">
                      <h1 className="font-semibold text-base text-[#5843BD] mb-4">
                        Education
                      </h1>
                      {/* Content */}
                      <div className="w-full flex flex-col gap-6">
                        {/* up content  */}
                        {pub?.Education?.map((data, key) => (
                          <div key={key} className="flex flex-col tablet:flex-row gap-8 w-full justify-between">
                            {/* year and kini  */}
                            <ul className="w-full tablet:w-[40%] tablet:list-disc text-xs">
                              <li className=" font-semibold text-sm mb-2">{data?.Start_date}-{data?.End_date}</li>
                            </ul>

                            {/* details side  */}
                            <ul className=" w-full tablet:w-[60%] tablet:list-disc text-xs">
                              <li className=" font-semibold text-sm mb-2">
                                {data?.Course}
                              </li>
                              <li>{data?.School}</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> : null}

                {/* Soft Skills  */}
                {pub?.Soft_skills?.length !== 0 ?
                  <div className="w-full flex justify-between relative">
                    {/* LHS content  */}
                    <div className="w-[100%]">
                      <h1 className="font-semibold text-base text-[#5843BD]">
                        Soft Skills
                      </h1>

                      {/* Skills icon sha, woo  */}
                      {/* if you get issues holla  */}
                      <div className=" justify-content-start w-full mb-4 text-start">
                        {pub?.Soft_skills?.map((anything, key) => (
                          <span key={key}>
                            {typeof anything === 'object' && anything?.value !== undefined ? 
                              <Skillsbtn btntxt={anything.value} /> : 
                              <Skillsbtn btntxt={anything as string} />
                            }
                          </span>
                        ))}
                      </div>
                    </div>
                  </div> : null}
                {/* Divider line */}
                {/* margin top to compensate for absolute above  */}

                {/* Hobbies and interest  */}
                {pub?.Interest?.length !== 0 && pub?.Interest !== undefined ?
                  <>
                    <hr className=" bg-[#E9E9FB] w-full mt-24" />
                    <div className="w-full flex justify-between relative">
                      {/* LHS content  */}
                      <div className="w-[100%]">
                        <h1 className="font-semibold text-base text-[#5843BD]">
                          Hobbies and Interests
                        </h1>
                        {/* OPtimized without scroll */}
                        <div className=" justify-content-start w-full mb-4 text-start">
                          {pub?.Interest?.map((anything, key) => (
                            <Skillsbtn btntxt={anything.value} key={key} />
                          ))}
                        </div>
                      </div>
                    </div> </> : null}

                {/* Refrence  */}
                {pub?.Reference?.length !== 0 ?
                  <div className="w-full flex justify-between mt-24">
                    {/* LHS content  */}
                    <div className="w-[100%]">
                      <h1 className="font-semibold text-base text-[#5843BD] mb-4">
                        Reference
                      </h1>
                      {/* Content */}
                      <div className="w-full flex flex-col gap-6">
                        {pub?.Reference?.map((reference, index) => (
                          <div key={index} className="flex gap-8 w-full justify-between">
                            {/* details side  */}
                            <ul className=" text-xs">
                              <li className=" font-semibold text-sm mb-2">{reference?.Reference_person_name}</li>
                              <li>
                                <p>{reference?.Referencee_job_title}</p>
                                <p>{reference?.Reference_phone_number}</p>
                                <p>{reference?.Reference_email}</p>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> : null}

                {/* Divider line */}
                <hr className=" bg-[#E9E9FB] w-full" />
                {/* Buttons  */}
                <div className="w-full justify-center  tablet:mt-0 font-semibold text-base flex-row flex gap-2 tablet:gap-6">
                  <Link href={`https://employer.moilapp.com/profile/beta/${profileId || ''}`}>
                    <button className=" bg-[#5843BD] border border-[#5843BD] hover:text-[#5843BD] hover:bg-[#E1DCF9] px-12 py-4 rounded-3xl text-[#ffffff] whitespace-nowrap">
                      Hire Me
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div> :
        <>{show === true ? <LoaderModal text="Getting Information" /> : <>{display === true ?
          <div className="grid grid-cols-auto md:grid-cols-smdash cont:grid-cols-dash grid-rows-dash">
            {/* <TopBar topBarShowMenu={true} />
        <SideBar /> */}
            <div>Can't get Information</div>
          </div> : null}</>}</>
      }

      {/* {matchModalContainer} */}
    </>
  );
}

// Export with no SSR to avoid window object issues during build
export default dynamic(() => Promise.resolve(EmployerProfileView), {
  ssr: false,
});
