import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 bg-red-600 text-black rounded-full shadow-lg"
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 bg-green-600 text-black rounded-full shadow-lg"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 bg-blue-600 text-black rounded-full shadow-lg"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 bg-white text-black rounded-full shadow-lg"
              onClick={() => setColor("black")}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
