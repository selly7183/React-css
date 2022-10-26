import React from "react";

export default function TailwindComponent() {
	return (
		<div>
			<h1 className="text-2xl font-bold m-10 animate-bounce">안녕!</h1>
			<button className="bg-blue-300 hover:scale-150, hover:translate-x-10 font-bold hover:text-slate-100  rounded-3xl ring-2 ring-blue-800 px-10 py-3 shadow-lg flex justify-center m-auto transition-all ease-linear delay-300 ">
				Button
			</button>
		</div>
	);
}
