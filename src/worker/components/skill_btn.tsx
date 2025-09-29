export default function SkillsBtn(props: any) {
  return (
    <div className="px-2 sm:px-4 py-2 sm:py-3 bg-white bg-opacity-50 skill_btn_shadow justify-start items-center gap-2 flex">
      <div className="text-neutral-700 text-[10px] sm:text-sm font-normal whitespace-nowrap">
        {props.skill}
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:w-6 sm:h-6"
      >
        <path
          d="M15.5987 6.44434L11.5464 10.4957L7.49499 6.44434L6.14453 7.79479L10.1959 11.8462L6.14453 15.8975L7.49499 17.248L11.5464 13.1966L15.5987 17.248L16.9491 15.8975L12.8978 11.8462L16.9491 7.79479L15.5987 6.44434Z"
          fill="#404040"
        />
      </svg>
    </div>
  );
}
