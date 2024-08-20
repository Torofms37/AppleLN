import { useEffect, useState } from "react";

function useThemeDetector() {
  //se agrega un usestate que, el estate se vuelve una función para comprobar si windows (pc) que tema tiene, en caso que sea oscuro el programa incia con oscuro, si no, se vuelve hblanco
  const [theme, setTheme] = useState(() => {
    //se utiliza window.matchmedia y preferscolorscheme para comprobar desde windows el tema que tiene
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    //compara si el theme tiene dark, si es así lo deja en dark
    if(theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      //en caso contrario, remueves el dark y lo cambia por light
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  //detecta el elemento, y pregunta si es igual a light, si no cambia a dark o light
  const toggleChooseTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  //todo usetstae o effect se return mediante un {}, aun así retornnando y exporrtando, al igual que importando, sigue funcionando las funciones.

  return {toggleChooseTheme}
}

export default useThemeDetector;
