import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";

// Stylings
import "./App.css";

// Components
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const dom = document.querySelector("html").classList;
    dom.remove("light", "dark");
    dom.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
            {/* theme button */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
            {/* Card */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
