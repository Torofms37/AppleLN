import { AppleMac } from "iconoir-react";
import useThemeDetector from "./components/useThemeDetector";

function App() {
  const { toggleChooseTheme } = useThemeDetector();

  return (
    <div className="h-screen flex justify-center items-center dark:bg-gray-700">
      <AppleMac className="text-6xl stroke-0 dark:fill-gray-100 fill-gray-800 hover:fill-gray-100 dark:hover:fill-gray-800 duration-150 hover:cursor-pointer"
       //se agrega la función con un onclick//
        onClick={toggleChooseTheme}
      />
      
      <div className="font-sans text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 absolute bottom-0 text-md opacity-60 w-full flex items-center justify-center">
        <h2>Made by <a href="">Torofms37 🦬</a></h2>
      </div>
    </div>
  );
}

export default App;
