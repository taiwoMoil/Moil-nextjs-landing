import React, { useState} from "react";
import LoaderModal from "../loader_modal/loader_modal";
import Autocomplete from "react-google-autocomplete";

function SearchBarsOnTop({
  searchJob,
  setSearchJob,
  HandleCancelJobSearch,
  searchLocation,
  setSearchLocation,
  HandleCancelLocationSearch,
  HandleOverAllSearch,
  OurSearchLoading,
  AcctType,
  currentPage,
  setCurrentPage
}) {
  const [ loading, setLoading ] = useState(false);

   const handleKeyPress = (event) => {
     if (event.key === "Enter") {
       // Call HandleOverAllSearch when Enter is pressed
       HandleOverAllSearch();
     }
   };
  return (
    <>
        <div className=" tablet:flex tablet:gap-x-4 justify-between">
      <div className="w-full">
        <div className="relative w-full h-[58px] rounded-[40px]">
          <input
            type="text"
            className=" w-full h-[56px] rounded-[40px] placeholder:font-light placeholder:text-sm pl-[44px] pr-4 border border-[#777DEA54] border-opacity-[0.33]"
            placeholder={AcctType == "client" ? "Search for a job here" : "search for an employee here"}
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <label
            htmlFor="input"
            className=" absolute top-[50%] translate-y-[-50%] left-0 pl-4"
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.88649 19.273C4.97838 19.273 1 15.2946 1 10.3865C1 5.47838 4.97838 1.5 9.88649 1.5C14.7946 1.5 18.773 5.47838 18.773 10.3865C18.773 15.2946 14.7946 19.273 9.88649 19.273Z"
                stroke="#898989"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.0004 21.5L16.5571 17.0568"
                stroke="#898989"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>

        <div>
          <div
            className={` ${
              searchJob ? "block" : "hidden"
            } w-fit rounded-lg mt-4 bg-[#777DEA26] bg-opacity-[0.15] border-[1.5px] border-[#777DEA26] border-opacity-[0.33] text-base font-normal text-black flex justify-center items-center gap-3 px-[9.07px] py-[6px] notranslate`}
          >
            <span>{searchJob}</span>
            <svg
              onClick={HandleCancelJobSearch}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.926 1L1.07373 11"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.07373 1L10.926 11"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full mt-6  tablet:mt-0">
        <div className="relative w-full h-[58px] rounded-[40px]">
          {/* <input
            type="text"
            className=" w-full h-[56px] rounded-[40px] placeholder:font-light placeholder:text-sm pl-[44px] pr-4 border border-[#777DEA54] border-opacity-[0.33]"
            placeholder="Search by location(city, state)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onKeyPress={handleKeyPress}
          /> */}

          <Autocomplete
            apiKey="AIzaSyDS13cz8osXQeF7pdM3NzdazIKCJQtSJU0"
            style={{ width: "90%" }}
            className=" w-full h-[56px] rounded-[40px] placeholder:font-light placeholder:text-sm pl-[44px] pr-4 border border-[#777DEA54] border-opacity-[0.33]"
            onPlaceSelected={(place) => {
              // console.log(place);
              setSearchLocation(place.formatted_address)
            }}
            onChange={(e) => setSearchLocation(e.target.value)}
            options={{
              types: ["(regions)"],
              componentRestrictions: { country: "us" },
            }}
            // defaultValue="Austin, TX"
          />
          <label
            htmlFor="input"
            className=" absolute top-[50%] translate-y-[-50%] left-0 pl-4"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z"
                fill="#898989"
              />
              <path
                d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33124 13.2763 3.74739 11.5374 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16638 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2526 11.5366 19.669 13.2747 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60901 13.7963C6.61051 13.7963 6.78451 14.0272 6.82426 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2746 12.6308 18.7517 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.49291 3.71116 7.22704 4.97703C5.96117 6.2429 5.25001 7.95979 5.25001 9.75C5.24844 11.2112 5.72534 12.6326 6.60901 13.7963Z"
                fill="#898989"
              />
            </svg>
          </label>
          <label
            htmlFor="input"
            className=" absolute top-[50%] translate-y-[-50%] right-0 pr-4"
          >
          </label>
        </div>

        <div>
          <div
            className={` ${
              searchLocation ? "block" : "hidden"
            } w-fit rounded-lg mt-4 bg-[#FF66334D] bg-opacity-[0.20] border-[1.5px] border-[#FF66334D] border-opacity-[0.30] text-base font-normal text-black flex justify-center items-center gap-3 px-[9.07px] py-[6px]`} translate="no"
          >
            <span>{searchLocation}</span>
            <svg
              onClick={HandleCancelLocationSearch}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.926 1L1.07373 11"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.07373 1L10.926 11"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-end mt-3">
          <button
              onClick={() => {HandleOverAllSearch(), 
                setCurrentPage(1)}}
              className={` ${
                OurSearchLoading ? "bg-gray-500" : ""
              } font-medium text-base text-white bg-[#FF6633] px-5 py-2 rounded-[10px]`}
            >
              {OurSearchLoading ? "..." : "Search"}
            </button>
        </div>
      </div>
    </div>
    {
      OurSearchLoading ? <LoaderModal text="Fetching result..." /> : null
    }
    </>
  );
}

export default SearchBarsOnTop;
