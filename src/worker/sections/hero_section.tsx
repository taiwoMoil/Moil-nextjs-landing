import React, { useEffect, useState } from "react";
import SearchComponent from "../components/search";
import { useRouter } from "next/navigation";
import { workerBaseUrl } from "../../common/constants/baseUrl";
import TranslateButton from "../components/translate_btn";
import StartingComponent from "../../common/components/starting_comp";
import Link from "next/link";

export default function WorkerHeroSection({ refQuery, lgQuery, setShowLanguageModal }: any) {
	let [ queryString, setQueryString ] = useState("");
	// Automatically update queryString when refQuery or lgQuery change
	useEffect(() => {
		if (refQuery && lgQuery) {
		setQueryString(`?ref=${refQuery}&lg=${lgQuery}`);
		} else if (refQuery && !lgQuery) {
		setQueryString(`?ref=${refQuery}`);
		} else if (!refQuery && lgQuery) {
		setQueryString(`?lg=${lgQuery}`);
		} else {
		setQueryString(""); // No query parameters
		}
	}, [refQuery, lgQuery]); // Runs when refQuery or lgQuery changes

	const isWideAndShort = window.innerWidth >= 1024 && window.innerHeight < 650;
	const isLessWideAndTall = window.innerWidth >= 1024 && window.innerHeight > 800;
	const isShortandLessWide = window.innerHeight < 750 && window.innerWidth < 400;

	return (
		<div className={`bg-worker ${isWideAndShort ? 'h-hero-height-saw' : 'h-hero-height-mob lg:h-hero-height'} relative ${isShortandLessWide && 'min-h-screen '} overflow-x-hidden flex justify-center items-center`}>
			{window.innerHeight > 1100 ? (<>
				<StartingComponent text='HVAC Technician' className='top-[20%] left-[5%] hidden md:block' />
				<StartingComponent text='Catering Manager' className='top-[15%] left-[10%] hidden md:block' />
				<StartingComponent text='Janitor' className='top-[15%] left-[30%] hidden md:block' />
				<StartingComponent text='Dry Cleaner' className='top-[10%] left-[35%] hidden md:block' />
				<StartingComponent text='Waitress/Waiter' className='top-[10%] left-[50%] hidden md:block' />
				<StartingComponent text='Warehouse Laborer' className='top-[15%] right-[35%] hidden md:block' />
				<StartingComponent text='Barista' className='top-[15%] right-[15%] hidden md:block' />
				<StartingComponent text='Machine Operator' className='top-[20%] right-[5%] hidden md:block' />

				<StartingComponent text='Plumber' className='bottom-[20%] left-[5%] hidden md:block' />
				<StartingComponent text='Construction Laborer' className='bottom-[15%] left-[10%] hidden md:block' />
				<StartingComponent text='Maintenance Technician' className='bottom-[15%] left-[30%] hidden md:block' />
				<StartingComponent text='Line Worker' className='bottom-[10%] left-[35%] hidden md:block' />
				<StartingComponent text='Restaurant Manager' className='bottom-[10%] left-[50%] hidden md:block' />
				<StartingComponent text='Construction Laborer' className='bottom-[15%] right-[35%] hidden md:block' />
				<StartingComponent text='Chef' className='bottom-[15%] right-[15%] hidden md:block' />
				<StartingComponent text='Housekeeper' className='bottom-[20%] right-[5%] hidden md:block' />
			</>) : window.innerHeight <= 1100 && window.innerHeight > 950 ? <>
				<StartingComponent text='HVAC Technician' className='top-[20%] left-[5%] hidden md:block' />
				<StartingComponent text='Caterer' className='top-[15%] left-[10%] hidden md:block' />
				<StartingComponent text='Barista' className='top-[15%] right-[15%] hidden md:block' />
				<StartingComponent text='Machine Operator' className='top-[20%] right-[5%] hidden md:block' />


				<StartingComponent text='Plumber' className='bottom-[20%] left-[5%] hidden md:block' />
				<StartingComponent text='Construction Laborer' className='bottom-[15%] left-[10%] hidden md:block' />
				<StartingComponent text='Chef' className='bottom-[15%] right-[15%] hidden md:block' />
				<StartingComponent text='Housekeeper' className='bottom-[20%] right-[5%] hidden md:block' />

			</> : <>
				<StartingComponent text='HVAC Technician' className='top-[20%] left-[2%] hidden md:block' />
				<StartingComponent text='Caterer' className='top-[5%] left-[12%] hidden md:block' />
				<StartingComponent text='Barista' className='top-[5%] right-[12%] hidden md:block' />
				<StartingComponent text='Waitress/Waiter' className='top-[50%] left-[3%] hidden xl:block' />
				<StartingComponent text='Machine Operator' className='top-[20%] right-[5%] hidden md:block' />


				<StartingComponent text='Plumber' className='bottom-[20%] left-[2%] hidden md:block' />
				<StartingComponent text='Construction Laborer' className='bottom-[5%] left-[12%] hidden md:block' />
				<StartingComponent text='Chef' className='bottom-[5%] right-[12%] hidden md:block' />
				<StartingComponent text='Restaurant Manager' className='bottom-[50%] right-[3%] hidden xl:block' />
				<StartingComponent text='Housekeeper' className='bottom-[20%] right-[2%] hidden md:block' />
			</>}


			<div className="absolute top-[0px] lg:hidden w-full">
				<TranslateButton parentClass="w-full lg:hidden" className="lg:hidden w-full py-3 px-5 flex gap-3 justify-center translate-gradient" textClassName="font-poppins text-base font-semibold text-white leading-6 text-center" setShowLanguageModal={setShowLanguageModal} />
			</div>
			<div className={`flex w-full flex-col items-center pt-[52px] md:pt-0 max-h-[800px] gap-y-6 lg:gap-y-0 ${isLessWideAndTall ? 'min-h-[600px]' : 'lg:min-h-[90%]'} justify-between max-w-[85vw]`}>
				<p className="text-[20px] lg:text-4xl font-semibold leading-[1.2] text-center text-white">
					Are you looking for jobs  <br /> in Texas?
				</p>
				<p className="text-base font-semibold leading-[19.2px] text-center text-white">
					With our AI, finding your next job is just a few minutes away.
				</p>

				<SearchComponent lgQuery={lgQuery} />

				<div className="flex w-full md:w-max flex-col gap-y-2 md:flex-row gap-x-10">
					<Link className="w-full md:w-max px-8 bg-[#FF6633] leading-normal font-semibold text-base xl:text-[24px] text-white py-4 rounded-[8px] text-center" href={`${workerBaseUrl}/register${queryString}`}>CREATE PERSONAL PROFILE</Link>
					<Link className="w-full md:w-max px-8 bg-transparent leading-normal font-semibold text-base xl:text-[24px] text-white text-center py-4 border border-[2px] border-white rounded-[8px]" href={`${workerBaseUrl}/login${queryString}`} >LOGIN TO YOUR PROFILE</Link>
				</div>

				<Link href={`/business${queryString}`} className="text-[20px] text-center border-b border-white font-semibold leading-normal text-left text-white">
					Click here to hire workers
				</Link>
			</div>
		</div>
	)
}
