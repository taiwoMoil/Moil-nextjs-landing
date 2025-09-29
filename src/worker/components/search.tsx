import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Autocomplete from "react-google-autocomplete";

export default function SearchComponent({ lgQuery }: any) {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [placeAvailable, setPlaceAvailable] = useState({
    jobTitle: false,
    location: false,
  });
  const router = useRouter();
  const jobTitleRef = useRef(null);
  const locationRef = useRef(null);

  const handleSearch = () => {
    let title_trim = title.trim();
    console.log("location", location);
    let location_trim = location.trim();
    router.push(`/searchjobfield?title=${title_trim}&location=${location_trim}&page=1&lg=${lgQuery}`)
  }

  const handleMouseDown = (name: string) => {
    setPlaceAvailable((prev) => {
      return { ...prev, [name]: true };
    });
  };

  const handleBlur = (name: string) => {
    setPlaceAvailable((prev) => {
      return { ...prev, [name]: false };
    });
  };

  const handleClickJobTitle = () => {
    setPlaceAvailable((prev) => {
      return { ...prev, jobTitle: true };
    });
    jobTitleRef.current?.focus();
  }

  const handleClickLocation = () => {
    setPlaceAvailable((prev) => {
      return { ...prev, location: true };
    });
    locationRef.current?.focus();
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      // Do something when Enter key is pressed, e.g., submit the form
      handleSearch()
    }
  };

  const isWideAndShort = window.innerWidth > 1024 && window.innerHeight < 600;

  return (
    <div className="w-full container max-w-[90vw] sm:max-w-[85vw] desktop:max-w-[900px] xl:max-w-[1100px] z-1 relative mx-auto">
      <div className={`w-full px-4 py-4 sm:px-6 sm:py-6 ${isWideAndShort ? 'md:py-6' : 'md:py-10'} md:px-8 rounded-2xl flex-col bg-white justify-center items-center gap-y-4 md:gap-y-6 flex`}>
        <div className="text-black text-base font-semibold leading-tight">
          Search for jobs around you
        </div>
        <div className="w-full justify-start items-start gap-2 flex-col md:flex-row flex">
          <div className="relative rounded-lg border border-indigo-400 border-opacity-30 flex items-center pr-3 w-full">
            <input
              type="search"
              className="py-2 rounded-lg border-opacity-30 px-3 w-full bg-white border-none outline-none focus:ring-transparent focus:border-transparent"
              onChange={e => setTitle(e.target.value)}
              onMouseDown={() => handleMouseDown("jobTitle")}
              onBlur={() => handleBlur("jobTitle")}
              ref={jobTitleRef}
              onKeyDown={handleKeyPress}
            />

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.88649 18.773C4.97838 18.773 1 14.7946 1 9.88649C1 4.97838 4.97838 1 9.88649 1C14.7946 1 18.773 4.97838 18.773 9.88649C18.773 14.7946 14.7946 18.773 9.88649 18.773Z"
                stroke="#FF6633"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.0001 21L16.5569 16.5568"
                stroke="#FF6633"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p
              id="textId"
              className={`${placeAvailable.jobTitle ? "hidden" : ""
                } absolute justify-start items-center gap-2 flex px-3 w-[90%]`} onClick={handleClickJobTitle}
            >
              {title === "" ?
                <>
                  <span className="whitespace-nowrap text-zinc-800 text-sm font-semibold leading-[16.80px]">
                    Job Title
                  </span>
                  <span className="w-full text-neutral-500 text-xs font-normal leading-[18px] truncate">
                    Carpenter, painter, waitress, plumber
                  </span>
                </> : null}
            </p>
          </div>

          <div className="relative rounded-lg border border-indigo-400 border-opacity-30 flex items-center pr-3 w-full">
            {/* <input
                  type="search"
                  className="py-2 rounded-lg border-opacity-30 bg-white px-3 w-full border-none outline-none focus:ring-transparent focus:border-transparent"
                  onChange={e => setLocation(e.target.value)}
                  onMouseDown={() => handleMouseDown("location")}
                  onBlur={() => handleBlur("location")}
                  ref={locationRef}
                  onKeyDown={handleKeyPress}
                /> */}

            <Autocomplete
              apiKey="AIzaSyDS13cz8osXQeF7pdM3NzdazIKCJQtSJU0"
              style={{ width: "90%" }}
              className="py-2 rounded-lg border-opacity-30 bg-white px-3 w-full border-none outline-none focus:ring-transparent focus:border-transparent"
              onPlaceSelected={(place) => {
                // console.log(place);
                setLocation(place.formatted_address)
              }}
              onChange={(e) => setLocation(e.target?.value)}
              onMouseDown={() => handleMouseDown("location")}
              onBlur={() => handleBlur("location")}
            // options={{
            //   types: ["(regions)"],
            //   componentRestrictions: { country: "us" },
            // }}
            // defaultValue="Austin, TX"
            />

            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99993 16.6572L7.60088 15.98C8.28279 15.1991 8.89612 14.4581 9.44184 13.7534L9.89231 13.1591C11.7733 10.6248 12.7142 8.61336 12.7142 7.1267C12.7142 3.95336 10.1561 1.38098 6.99993 1.38098C3.84374 1.38098 1.28564 3.95336 1.28564 7.1267C1.28564 8.61336 2.2266 10.6248 4.10755 13.1591L4.55803 13.7534C5.33654 14.7509 6.15104 15.7188 6.99993 16.6572Z"
                stroke="#F24E1E"
                stroke-width="1.14286"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.00009 9.4762C8.31506 9.4762 9.38105 8.41021 9.38105 7.09525C9.38105 5.78028 8.31506 4.71429 7.00009 4.71429C5.68513 4.71429 4.61914 5.78028 4.61914 7.09525C4.61914 8.41021 5.68513 9.4762 7.00009 9.4762Z"
                stroke="#F24E1E"
                stroke-width="1.14286"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p
              id="textId_2"
              className={`${placeAvailable.location ? "hidden" : ""
                } absolute justify-start items-center gap-2 flex px-3 w-[90%]`} onClick={handleClickLocation}
            >
              {/* {location === "" ?
                    <><span className="whitespace-nowrap text-zinc-800 text-sm font-semibold leading-[16.80px]">
                      Location
                    </span>
                      <span className="text-neutral-500 text-xs font-normal leading-[18px] truncate">
                        New York, Texas, Tulsa
                      </span></> : null} */}
            </p>
          </div>
          <div className="w-full md:max-w-[150px] px-2 py-2.5 bg-orange-500 rounded-lg shadow justify-center items-center gap-3 flex" onClick={handleSearch}>
            <div className="text-center text-white text-base font-medium cursor-pointer"  >
              Search Jobs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}