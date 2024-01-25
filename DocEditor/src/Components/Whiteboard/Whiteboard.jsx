import { useContext, useEffect, useRef, useState } from "react";
import {
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
import { RxLetterCaseUppercase } from "react-icons/rx";
import { AuthContext } from "../../ContextApi/ContexApi";

const Whiteboard = () => {
  const areaRef = useRef(null);
  const { user, users } = useContext(AuthContext);
  console.log(users);
  // console.log(user);
  const [fontBold, setFontBold] = useState(false);
  const [fontItalic, setFontItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [alignLeft, setAlignLeft] = useState(false);
  const [alignCenter, setAlignCenter] = useState(false);
  const [alignEnd, setAlignEnd] = useState(false);
  const [uppercase, setUppercase] = useState(false);

  const fontSize = () => {
    const textAreaField = document.getElementById("text-area");
    const fontSizeInputField = document.getElementById("font-size");
    const fontSize = fontSizeInputField.value;
    textAreaField.style.fontSize = fontSize + "px";
  };
  const color = () => {
    const textAreaField = document.getElementById("text-area");
    const colorInputField = document.getElementById("color-input");
    const colorInputValue = colorInputField.value;
    textAreaField.style.color = colorInputValue;
  };

  return (
    <div>
      <section className="mt-12 mx-auto pb-8 bg-blue-300 lg:w-3/4">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-center p-5">My Doc Editor</h1>
          <h2 className="text-5xl text-center text-blue-500 p-5">
            Users Online:{users?.length}
          </h2>
        </div>
        <div className="bg-sky-200 pb-7 w-3/4 border-black border-2 mx-auto">
          {user?.presenter && (
            <div className="flex justify-evenly">
              <div className="flex justify-center py-8 gap-5">
                <button
                  onClick={() => setFontBold(!fontBold)}
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaBold />
                </button>
                <button
                  onClick={() => setFontItalic(!fontItalic)}
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaItalic />
                </button>
                <button
                  onClick={() => setUnderline(!underline)}
                  id="btn-underline"
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaUnderline />
                </button>
              </div>
              <div className="flex justify-center py-8 gap-5">
                <button
                  onClick={() => setAlignLeft(!alignLeft)}
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaAlignLeft />
                </button>
                <button
                  onClick={() => setAlignCenter(!alignCenter)}
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaAlignCenter />
                </button>
                <button
                  onClick={() => setAlignEnd(!alignEnd)}
                  className="p-4 hover:bg-gray-400 rounded-r-lg"
                >
                  <FaAlignRight />
                </button>
              </div>
              <div className="flex justify-center items-center py-8 gap-8">
                <input
                  onChange={fontSize}
                  className="w-16 text-center"
                  defaultValue="17"
                  type="number"
                  name=""
                  id="font-size"
                />
                <button
                  onClick={() => setUppercase(!uppercase)}
                  id="btn-uppercase"
                >
                  <RxLetterCaseUppercase />
                </button>
                <input
                  onChange={color}
                  className=""
                  type="color"
                  name=""
                  id="color-input"
                />
              </div>
            </div>
          )}
          {user?.presenter ? (
            <>
              <div className="divider lg:w-11/12 border-black mx-auto"></div>

              <textarea
                className={`block mx-auto border-black border-2 my-3 w-11/12 h-96 ${
                  fontBold ? "font-black" : ""
                } ${fontItalic ? "italic" : ""} ${
                  underline ? "underline " : ""
                } ${alignLeft ? "text-left" : ""} ${
                  alignCenter ? "text-center" : ""
                } ${alignEnd ? "text-end" : ""} ${
                  uppercase ? "uppercase" : ""
                }`}
                name=""
                id="text-area"
                cols="140"
              ></textarea>
              <canvas ref={areaRef}></canvas>
            </>
          ) : (
            <>
              <div className="min-h-96 w-full">
                <img src="" alt="Whiteboard Presenter Image" />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Whiteboard;
