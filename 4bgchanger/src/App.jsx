import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [color, setcolor] = useState("#98FB98");
	// function changeColor(color) {
	// 	setcolor(color);
	// }

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap inset-x-0 justify-center bottom-12 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
					<button
						className="bg-white rounded-xl shadow-lg px-4 py-3 outline-none text-black"
						onClick={() => {
							setcolor("#EF6649");
						}}
					>
						Red
					</button>
					<button
						className="bg-white rounded-xl shadow-lg px-4 py-3 outline-none text-black"
						onClick={() => setcolor("#FDC7FB")}
					>
						Purple
					</button>
					<button
						className="bg-white rounded-xl shadow-lg px-4 py-3 outline-none text-black"
						onClick={() => setcolor("#8CEEFE")}
					>
						Blue
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
