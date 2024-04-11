import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
	// const [count, setCount] = useState(0)
	const myObject = {
		name: "Chiya",
		lastname: "Shukla",
		occupation: "Estudiante",
	};

	let newArr = [1, 2, 3, 4];
	return (
		<>
			<h1 className="text-3xl bg-green-300 p-3 rounded-lg">
				Vite with Tailwind
			</h1>
			{/* <h2 className='text-2xl bg-slate-200 text-slate-900 mt-5 rounded-lg'>heyoo</h2> */}
			<Card username="chiya" myObject={myObject} />
			{/* if not passing an object but no default value of object is set in component then JavaScript will throw an error when trying to access properties of an undefined object. */}
			<Card post="bakbak" username="chotu" myObject={myObject} />
			<Card arr={newArr} myObject={myObject} />
			{/* passing an array */}
			<Card myObject={myObject} /> {/* passing an object */}
		</>
	);
}

export default App;
