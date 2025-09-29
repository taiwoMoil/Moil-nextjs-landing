import React, { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackButton from "../../worker/components/back_button";

interface SelectLanguageProps {
  setQueryLg: (lang: string) => void;
  handleClick: () => void;
}

const SelectLanguage = ({ setQueryLg, handleClick }: SelectLanguageProps) => {
  const [defaultLang, setDefaultLang] = useState("");

  // Function to simulate an HTML change event on the google translate element.
  const triggerHtmlEvent = (element: any, eventName: string) => {
    let event: any;
    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
    } else {
      event = (document as any).createEventObject();
      event.eventType = eventName;
      element.fireEvent("on" + event.eventType, event);
    }
  };

  // When the English button is clicked, remain in English.
  const handleEnglishClick = () => {
    const newLang = "en";
    setDefaultLang(newLang);
    localStorage.setItem("tlang", newLang);

    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (combo) {
      combo.value = newLang;
      triggerHtmlEvent(combo, "change");
    }

    let url = new URL(window.location.href);
    console.log("Language changed to:", newLang);
    url.searchParams.set("lg", newLang);
    console.log("Updated URL:", url);

    if (typeof setQueryLg === "function") {
      setQueryLg(newLang);
    }

    window.history.replaceState({}, "", url);

    if (handleClick) {
      handleClick();
    }
  };

  // When the Spanish button is clicked, translate page to Spanish.
  const handleSpanishClick = () => {
    const newLang = "es";
    setDefaultLang(newLang);
    localStorage.setItem("tlang", newLang);

    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    for (let i = 0; i < 2; ++i) {
      if (combo) {
        combo.value = newLang;
        triggerHtmlEvent(combo, "change");
      }
    }

    let url = new URL(window.location.href);
    console.log("Language changed to:", newLang);
    url.searchParams.set("lg", newLang);
    console.log("Updated URL:", url);

    if (typeof setQueryLg === "function") {
      setQueryLg(newLang);
    }

    window.history.replaceState({}, "", url);

    if (handleClick) {
      handleClick();
    }
  };

  return (
    // <motion.div
    //   initial={{ x: "100%", opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    //   className=""
    // >
      <section
        onClick={(e) => e.stopPropagation()}
        className="w-full md:shadow bg-white md:max-w-[500px] md:min-w-[350px] w-[80%] z-100 md:m-auto md:rounded-[24px] pb-5 overflow-hidden relative py-4 px-4"
      >
        <BackButton className="ml-6" onClick={() => handleClick()} />
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex items-center justify-center">
            <figure>
              <img
                width={48}
                height={48}
                src="https://res.cloudinary.com/drlcisipo/image/upload/v1706475719/logo_m0jvut.png"
                className="pointer-events-none ml-2"
                alt="coin"
              />
            </figure><span className="ml-1 font-bold text-[#5843BD]">:</span>
            <h3 className="text-lg sm:text-2xl font-medium text-[#5843BD] ml-2">
              Your Journey Begins.
            </h3>
          </div>
          <p className="text-base font-normal leading-[1.25] text-center text-[#0D0D0D]">
            Select your preferred language to personalize your experience.
          </p>
          <div className="flex md:items-center md:px-8 md:justify-between w-full px-2 md:px-0 flex-col md:flex-row gap-y-4 gap-x-6 mb-6">
            <button
              className={`border-2 ${
                defaultLang === "English" ? "border-[#FF6633]" : "border-[#DCDCDC]"
              } p-4 w-full md:w-[250px] rounded-lg text-gray-900 focus:ring-orange-400 focus:border-orange-400 font-['Poppins'] text-base flex items-center justify-between`}
              onClick={handleEnglishClick}
            >
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/drlcisipo/image/upload/v1705704286/Website%20images/English_uj5huz.jpg"
                  alt="English icon"
                  className="object-cover"
                />
                <h1 className="text-base font-medium text-black ml-4">English</h1>
              </div>
              <CheckCircleIcon
                className={`${defaultLang === "English" ? "text-[#FF6633]" : "text-[#DCDCDC]"}`}
              />
            </button>
            <button
              className={`md:mt-0 border-2 ${
                defaultLang === "Spanish" ? "border-[#FF6633]" : "border-[#DCDCDC]"
              } p-4 w-full md:w-[250px] rounded-lg text-gray-900 focus:ring-orange-400 focus:border-orange-400 font-['Poppins'] text-base flex items-center justify-between`}
              onClick={handleSpanishClick}
            >
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/drlcisipo/image/upload/v1705704281/Website%20images/Spain_shstdy.jpg"
                  alt="spanish icon"
                />
                <h1 className="text-base font-medium text-black ml-4">Spanish</h1>
              </div>
              <CheckCircleIcon
                className={`${defaultLang === "Spanish" ? "text-[#FF6633]" : "text-[#DCDCDC]"}`}
              />
            </button>
          </div>
        </div>
      </section>
    // </motion.div>
  );
};

export default SelectLanguage;
