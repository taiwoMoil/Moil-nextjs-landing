import { useState, useEffect } from "react";
import Link from "next/link";

import { workerBaseUrl } from "../../common/constants/baseUrl";

export default function ResumeCTA({refQuery, lgQuery }: any) {
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
		<section className="relative bg-[#F3F3F9] overflow-hidden" >
			<div className="w-full pt-2 pb-8 lg:pb-14 container px-6 sm:px-0  max-w-[900px] mx-auto">
				<div className="w-full flex-col lg:flex-row gap-x-16 items-center inline-flex">

					<div
						className="flex-col justify-start items-start gap-6 inline-flex max-w-[540px]"
					>
						<p className="text-lg zsm:text-xl md:text-2xl lg:text-3xl">
							<span className="text-zinc-800 font-semibold lg:leading-9">
								Stand out with AI-crafted resumes
							</span>
							<span className="text-zinc-800 font-light lg:leading-9">
								{" "}
								and{" "}
							</span>
							<span className="text-zinc-800 font-semibold lg:leading-9">
								profiles
							</span>
							<span className="text-zinc-800 font-light lg:leading-9">
								{" "}
								to showcase your{" "}
							</span>
							<span className="text-zinc-800 font-semibold lg:leading-9">
								unique skills.
								<br />
							</span>
						</p>
						<div className="text-neutral-500 text-base zsm:text-lg sm:text-xl lg:text-2xl font-normal leading-[33px]">
							Highlight your Expertise and Experience in under 5 minutes.
						</div>
						<Link className="max-w-[200px] w-max py-4 px-4 bg-orange-500 rounded" href={`${workerBaseUrl}/register${queryString}`}>
							<span className="text-center text-white text-base font-medium">
								Create one now!
							</span>
						</Link>
					</div>

					<div
						className="rounded-[14.46px]"
					>
						<img
							src="https://res.cloudinary.com/drlcisipo/image/upload/v1710162540/Website%20images/svg_resume_vfoudz.svg"
							className="w-[80vw] max-w-[300px] sm:max-w-[350px] lg:max-w-[320px] xl:max-w-[350px] sm:min-w-[190px]"
							alt="sample resume"
						/>
					</div>
				</div>
			</div>
		</section >
	)
}