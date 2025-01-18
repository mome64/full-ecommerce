import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
function Darkmode() {
  const [theme, setTheme] = useState(false);
  const elem = document.documentElement;
  function handlemode() {
    setTheme(!theme);
    if (!theme) {
      elem.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elem.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div>
      {theme ? (
        <MdOutlineDarkMode
          onClick={handlemode}
          className="text-white hover:text-primary text-3xl transition-colors duration-300 cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={handlemode}
          className="text-black hover:text-primary text-3xl transition-colors duration-300 cursor-pointer"
        />
      )}
    </div>
  );
}

export default Darkmode;
