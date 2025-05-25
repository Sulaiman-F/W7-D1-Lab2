import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-neutral-200");
  const [textColor, setTextColor] = useState("text-black");

  return (
    <div
      className={`flex flex-col gap-10 items-center justify-center h-[200vh] md:h-screen transition duration-300 ${color}`}
    >
      <div className="flex flex-col bg-neutral-100 border border-neutral-300 p-1 px-2 md:p-10 rounded-lg shadow-2xl shadow-neutral-300 gap-10">
        <h1 className="text-2xl font-bold text-center text-shadow-lg ">
          Choose a Background{" "}
          <span className={`${textColor} text-shadow-none`}>Color</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          <button
            className="bg-red-700 text-white p-1 md:p-3 md:px-5 rounded hover:bg-red-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-red-500/50 hover:shadow-red-500/50 "
            onClick={() => {
              setColor("bg-red-700");
              setTextColor("text-red-700");
            }}
          >
            Red
          </button>
          <button
            className="bg-green-700 text-white p-3 px-5 rounded hover:bg-green-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-green-500/50 hover:shadow-green-500/50"
            onClick={() => {
              setColor("bg-green-700");
              setTextColor("text-green-700");
            }}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 text-white p-3 px-5 rounded hover:bg-yellow-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-yellow-400/50 hover:shadow-yellow-400/50"
            onClick={() => {
              setColor("bg-yellow-500");
              setTextColor("text-yellow-500");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-purple-700 text-white p-3 px-5 rounded hover:bg-purple-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/50"
            onClick={() => {
              setColor("bg-purple-700");
              setTextColor("text-purple-700");
            }}
          >
            Purple
          </button>
          <button
            className="bg-orange-500 text-white p-3 px-5 rounded hover:bg-orange-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/50"
            onClick={() => {
              setColor("bg-orange-500");
              setTextColor("text-orange-500");
            }}
          >
            Orange
          </button>
          <button
            className="bg-blue-500 text-white p-3 px-5 rounded hover:bg-blue-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/50"
            onClick={() => {
              setColor("bg-blue-500");
              setTextColor("text-blue-500");
            }}
          >
            Blue
          </button>
          <button
            className="bg-gray-500 text-white p-3 px-5 rounded hover:bg-gray-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-gray-500/50 hover:shadow-gray-500/50"
            onClick={() => {
              setColor("bg-gray-500");
              setTextColor("text-gray-500");
            }}
          >
            Gray
          </button>
          <button
            className="bg-pink-500 text-white p-3 px-5 rounded hover:bg-pink-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/50"
            onClick={() => {
              setColor("bg-pink-500");
              setTextColor("text-pink-500");
            }}
          >
            Pink
          </button>
          <button
            className="bg-teal-500 text-white p-3 px-5 rounded hover:bg-teal-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-teal-500/50 hover:shadow-teal-500/50"
            onClick={() => {
              setColor("bg-teal-500");
              setTextColor("text-teal-500");
            }}
          >
            Teal
          </button>
          <button
            className="bg-indigo-700 text-white p-3 px-5 rounded hover:bg-indigo-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/50"
            onClick={() => {
              setColor("bg-indigo-700");
              setTextColor("text-indigo-700");
            }}
          >
            Indigo
          </button>
          <button
            className="bg-lime-500 text-white p-3 px-5 rounded hover:bg-lime-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-lime-500/50 hover:shadow-lime-500/50"
            onClick={() => {
              setColor("bg-lime-500");
              setTextColor("text-lime-500");
            }}
          >
            Lime
          </button>
          <button
            className="bg-cyan-500 text-white p-3 px-5 rounded hover:bg-cyan-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/50"
            onClick={() => {
              setColor("bg-cyan-500");
              setTextColor("text-cyan-500");
            }}
          >
            Cyan
          </button>
          <button
            className="bg-amber-500 text-white p-3 px-5 rounded hover:bg-amber-400 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-amber-500/50 shadow-amber-500/50"
            onClick={() => {
              setColor("bg-amber-500");
              setTextColor("text-amber-500");
            }}
          >
            Amber
          </button>
          <button
            className="bg-rose-700 text-white p-3 px-5 rounded hover:bg-rose-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-rose-500/50 shadow-rose-500/50"
            onClick={() => {
              setColor("bg-rose-700");
              setTextColor("text-rose-700");
            }}
          >
            Rose
          </button>
          <button
            className="bg-slate-700 text-white p-3 px-5 rounded hover:bg-slate-600 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-slate-500/50 shadow-slate-500/50"
            onClick={() => {
              setColor("bg-slate-700");
              setTextColor("text-slate-700");
            }}
          >
            Slate
          </button>
          <button
            className="bg-black text-white p-3 px-5 rounded hover:bg-gray-800 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-black/20 shadow-black/20"
            onClick={() => {
              setColor("bg-black");
              setTextColor("text-black");
            }}
          >
            Black
          </button>
          <button
            className="bg-white text-black p-3 px-5 rounded hover:bg-gray-200 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-white/50 shadow-white/50"
            onClick={() => {
              setColor("bg-white");
              setTextColor("text-white");
            }}
          >
            White
          </button>
          <button
            className="bg-sky-200 text-black p-3 px-5 rounded hover:bg-gray-200 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-sky-500/30 shadow-sky-500/30"
            onClick={() => {
              setColor("bg-sky-200");
              setTextColor("text-sky-200");
            }}
          >
            Sky
          </button>
          <button
            className="bg-yellow-300 text-black p-3 px-5 rounded hover:bg-gray-200 cursor-pointer transition duration-300 hover:-translate-y-2  shadow-2xl hover:shadow-yellow-200/50 shadow-yellow-200/50"
            onClick={() => {
              setColor("bg-yellow-300");
              setTextColor("text-yellow-300");
            }}
          >
            Gold
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white p-3 px-5 rounded hover:from-pink-400 hover:via-yellow-300 hover:to-blue-400 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-pink-500/30 shadow-yellow-400/30 shadow-blue-500/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500"
              );
              setTextColor("text-white");
            }}
          >
            Pink-Yellow-Blue
          </button>
          <button
            className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-3 px-5 rounded hover:from-green-300 hover:via-blue-400 hover:to-purple-500 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-green-400/30 shadow-blue-500/30 shadow-purple-600/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
              );
              setTextColor("text-white");
            }}
          >
            Green-Blue-Purple
          </button>
          <button
            className="bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500 text-white p-3 px-5 rounded hover:from-yellow-300 hover:via-pink-400 hover:to-red-400 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-yellow-400/30 shadow-pink-500/30 shadow-red-500/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-br from-yellow-400 via-pink-500 to-red-500"
              );
              setTextColor("text-white");
            }}
          >
            Yellow-Pink-Red
          </button>
          <button
            className="bg-gradient-to-tl from-indigo-500 via-sky-400 to-cyan-300 text-white p-3 px-5 rounded hover:from-indigo-400 hover:via-sky-300 hover:to-cyan-200 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-indigo-500/30 shadow-sky-400/30 shadow-cyan-300/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-tl from-indigo-500 via-sky-400 to-cyan-300"
              );
              setTextColor("text-white");
            }}
          >
            Indigo-Sky-Cyan
          </button>
          <button
            className="bg-gradient-to-tr from-fuchsia-500 via-red-400 to-orange-300 text-white p-3 px-5 rounded hover:from-fuchsia-400 hover:via-red-300 hover:to-orange-200 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-fuchsia-500/30 shadow-red-400/30 shadow-orange-300/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-tr from-fuchsia-500 via-red-400 to-orange-300"
              );
              setTextColor("text-white");
            }}
          >
            Fuchsia-Red-Orange
          </button>
          <button
            className="bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 text-white p-3 px-5 rounded hover:from-violet-600 hover:via-lime-200 hover:to-violet-600 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-emerald-400/30 shadow-cyan-400/30 shadow-blue-600/30"
            onClick={() => {
              setColor(
                "bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"
              );
              setTextColor("text-white");
            }}
          >
            Rainbow
          </button>
          <button
            className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white p-3 px-5 rounded hover:from-gray-800 hover:via-gray-600 hover:to-gray-400 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-gray-900/30 shadow-gray-700/30 shadow-gray-500/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
              );
              setTextColor("text-white");
            }}
          >
            Gray Shades
          </button>
          <button
            className="bg-gradient-to-br from-blue-400 via-green-300 to-lime-400 text-white p-3 px-5 rounded hover:from-blue-300 hover:via-green-200 hover:to-lime-300 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-blue-400/30 shadow-green-300/30 shadow-lime-400/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-br from-blue-400 via-green-300 to-lime-400"
              );
              setTextColor("text-white");
            }}
          >
            Blue-Green-Lime
          </button>
          <button
            className="bg-gradient-to-t from-pink-400 via-purple-400 to-indigo-400 text-white p-3 px-5 rounded hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-pink-400/30 shadow-purple-400/30 shadow-indigo-400/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-t from-pink-400 via-purple-400 to-indigo-400"
              );
              setTextColor("text-white");
            }}
          >
            Pink-Purple-Indigo
          </button>
          <button
            className="bg-gradient-to-l from-yellow-300 via-orange-400 to-red-400 text-white p-3 px-5 rounded hover:from-yellow-200 hover:via-orange-300 hover:to-red-300 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-yellow-300/30 shadow-orange-400/30 shadow-red-400/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-l from-yellow-300 via-orange-400 to-red-400"
              );
              setTextColor("text-white");
            }}
          >
            Yellow-Orange-Red
          </button>
          <button
            className="bg-gradient-to-b from-purple-400 via-teal-400 to-cyan-500 text-white p-3 px-5 rounded hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-400 cursor-pointer transition duration-300 hover:-translate-y-2 shadow-2xl shadow-emerald-400/30 shadow-teal-400/30 shadow-cyan-500/30"
            onClick={() => {
              setColor(
                "bg-gradient-to-b from-purple-400 via-teal-400 to-cyan-500"
              );
              setTextColor("text-white");
            }}
          >
            Purple-Teal-Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
