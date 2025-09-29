import { useEffect, useState } from "react";
import { businessBaseUrl } from "../../common/constants/baseUrl";

export default function MobilePricingItem({ flowId, plan, percentage_off, cta, price, allShow, values }: { flowId: any, plan: string, percentage_off: number, cta: string, price: { monthly: number, annually: number }, allShow: string, values: string[][] }) {
  const [oneShow, setOneShow] = useState(allShow);

  useEffect(() => {
    setOneShow(allShow);
  }, [allShow]);

  const handleClick = () => {
    window.open(`${businessBaseUrl}/register?flowId=${flowId[oneShow]}`, '_blank');
  };

  return (
    <div className="border my-2 border-[#E6E9F5]">
      <div className={`flex relative flex-col ${plan === "STANDARD" ? "gap-y-6" : "gap-y-10"} p-6`}>
        {plan === "STANDARD" &&
          <div className="text-white absolute top-0 left-0 w-full py-2 text-center bg-[#FF6633] ">
            Recommended
          </div>
        }

        <p className={`text-[20px] lg:text-[24px] ${plan === "STANDARD" && "mt-[30px]"} text-center leading-[1.2] font-medium`}>{plan}</p>
        <div>
          <p className="text-[#858BA0] text-center text-sm leading-normal"><span className="text-[#252430] text-[40px] font-[700]">{`$${allShow === "monthly" || oneShow === "monthly" ? price.monthly : price.annually} `}</span>/Month</p>
          {(allShow === "annually" && oneShow === "annually" || allShow === "monthly" && oneShow === "annually") && <p className="text-[#FF6633] text-sm leading-normal font-medium text-center">{percentage_off}% Off</p>}
        </div>
        <button onClick={handleClick} className={`py-4 rounded-[4px] whitespace-nowrap px-6 text-center w-full ${plan === "STANDARD" ? "bg-[#5843BD] text-[#E6E9F5]" : "text-[#5843BD] bg-[#EEECF8]"} text-sm md:text-xs lg:text-sm leading-normal`}>{cta}</button>

        <div className="flex item-center justify-center gap-x-4">
          <button
            onClick={() => setOneShow("monthly")}
            className={`${oneShow === "monthly" && allShow === "monthly" ? "bg-[#FF6633] text-white text-[#252430]" : allShow === "annually" && oneShow === "monthly" ? "bg-[#FF6633] text-white text-[#252430]" : "border_05 border-[#858BA0]"} py-[10px] px-[20px] rounded-[22px] text-center leading-normal text-xs`}>Monthly Plans</button>
          <button
            onClick={() => setOneShow("annually")}
            className={`${oneShow === "annually" && allShow === "annually" ? "bg-[#FF6633] text-white text-[#252430]" : allShow === "monthly" && oneShow === "annually" ? "bg-[#FF6633] text-white text-[#252430]" : "border_05 border-[#858BA0]"} py-[10px] px-[20px] rounded-[24px] text-center leading-normal text-xs`}>See Annual Plans</button>
        </div>
      </div>

      <table>
        <tbody>
          {values.map((items, i) => {
            return (
              <tr key={i}>
                <td className="border border-[#E6E9F5] max-w-[150px]">
                  <div className="p-4">
                    <p className="text-xs font-medium leading-[1.3] text-[#252430]">{items[0]}</p>
                  </div>
                </td>
                <td className={`border border-[#E6E9F5] ${plan === "STANDARD" && "bg-[#EEECF8]"}`}>
                  <div className="p-4">
                    <p className={`text-base font-medium leading-[1.3] text-[#252430]`}>{items[1]}</p>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}