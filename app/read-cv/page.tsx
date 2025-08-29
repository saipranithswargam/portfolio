"use client";

import React, { useState, useEffect } from "react";
import cvData from "@/data/read-cv/page.json";

const Resume: React.FC = () => {
	const { resume, fallback } = cvData;
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<section className='mx-auto max-w-4xl w-full px-4 py-8 text-white'>
			<div className='relative rounded-md overflow-hidden border border-zinc-800 h-[70vh] sm:h-[80vh]'>
				{isClient && (
					<iframe
						src={resume.iframeSrc}
						className='w-full h-full'
						title={resume.title}
						style={{ border: "none" }}
					/>
				)}
			</div>

			<p className='text-center text-sm text-zinc-400 mt-4'>
				{fallback.text}{" "}
				<a
					href={fallback.linkHref}
					target='_blank'
					rel='noopener noreferrer'
					className='underline hover:text-blue-300'>
					{fallback.linkText}
				</a>
				.
			</p>
		</section>
	);
};

export default Resume;
