import React from "react";

function Card({
	username = "mew mew",
	post = "Not assigned",
	arr = [2],
	myObject,
}) {
	return (
		<>
			<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
				<img
					className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
					src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
					alt=""
					width="384"
					height="512"
				/>
				<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
					<blockquote>
						<p className="text-lg font-medium">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, aliquam?
						</p>
					</blockquote>
					<figcaption className="font-medium">
						<div className="text-sky-500 dark:text-sky-400">
							{username} {arr}
						</div>
						<div className="text-slate-700 dark:text-slate-500">
							{post} {myObject.name}
						</div>
					</figcaption>
				</div>
			</figure>
		</>
	);
}

export default Card;
