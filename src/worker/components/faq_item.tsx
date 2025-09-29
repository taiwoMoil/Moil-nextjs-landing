export default function FAQItem(props: any) {
  return (
    <div onClick={props.onClick} className="bg-[#F9F4FD] border border-[#E6E9F5] flex gap-x-4 items-center justify-between py-7 px-4">
      <div className="flex flex-col gap-y-4">
        <p className="font-medium text-[#252430] text-base md:text-[20px] leading-[1.2]">{props.question}</p>
        {
          props.active && <p className="font-medium text-base text-[#252430] leading-[1.5]">{props.answer}</p>
        }
      </div>
      <button className="self-start w-[32px] h-[32px]">
        {
          props.active ? <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.305664" width="32" height="32" rx="4" fill="#5843BD" />
            <path d="M7.95312 18.3397V14.2715H15.9986H24.044V18.3397H7.95312Z" fill="#E6E9F5" />
          </svg>
            : <svg onClick={props.onClick} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.910156" y="0.305664" width="32.0909" height="32.0909" rx="4" fill="#5843BD" />
              <path d="M14.9215 24.3966V8.30566H18.9897V24.3966H14.9215ZM8.91016 18.3852V14.317H25.0011V18.3852H8.91016Z" fill="#E6E9F5" />
            </svg>
        }

      </button>
    </div>
  )
}