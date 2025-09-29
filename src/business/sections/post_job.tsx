import { useState, useEffect } from "react";
import Link from "next/link";
import { businessBaseUrl } from "../../common/constants/baseUrl";

interface PostJobSectionProps {
	refQuery: string | null;
	lgQuery: string;
}

export default function PostJobSection({ refQuery, lgQuery }: PostJobSectionProps) {
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
  
	return (
		<section className="relative bg-[#fff] overflow-hidden" >
			<div className="w-full pt-8 pb-8 lg:py-16 px-6 lg:px-0 lg:max-w-[1000px] mx-auto">
				<div className="w-full flex-col gap-y-4  lg:flex-row lg:gap-x-12 lg:px-4 xl:px-0 items-center inline-flex">
					{/* Section Image */}
					<div
						className="rounded-[14.46px]"
					>
						<img
							src="https://res.cloudinary.com/drlcisipo/image/upload/v1720722196/Website%20images/Frame_427320396_1_y46dzv.png"
							className="lg:min-w-[458px]"
							alt="sample resume"
						/>
					</div>

					{/* Section Text */}
					<div className="w-full flex-col lg:flex-row gap-x-16 items-center inline-flex">
						<div
							className="flex-col justify-start items-start gap-6 inline-flex lg:min-w-[450px] xl:min-w-[507px] max-w-[540px]"
						>
							<p className="text-base md:text-3xl font-semibold leading-[1.2] font-[300] text-left text-[#292929]">
							<span className="font-[600]">Create</span> and <span className="font-[600]">Post a job</span> in <span className="font-[600]">under 2 minutes</span> with <span className="font-[600]">AI</span>
							</p>

							<p className="text-base md:text-2xl font-normal leading-[1.4] text-left text-[#1C2022]">
							Streamline your process. Moil takes your job title and generates job description, roles, and required skills.
							</p>
							<Link className="w-max py-3 px-10 bg-[#FF6633] rounded" href={`${businessBaseUrl}/register${queryString}`}>
								<span className="text-center leading-[1.5] text-white text-base font-medium">
								Post a job
								</span>
							</Link>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}