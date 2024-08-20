import { useState } from "react";

const Banner = () => {
  //se agrega un usestate donde el isvisile queda como true para que muestre desde el inicio
  const [isVisible, setIsVisible] = useState(true);

  //si el banner no está visible, no retornará como true de nuevo
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center font-mono opacity-90 text-center">
      <div className="w-1/4 h-1/4 dark:bg-gray-100 bg-gray-700 dark:text-gray-700 text-gray-100 dark:fill-gray-100 fill-gray-800 hover:fill-gray-100 dark:hover:fill-gray-800 p-4 flex flex-col justify-center items-center rounded-2xl max-lg:w-2/4 max-sm:w-3/4 max-sm:text-xs max-lg:text-sm">
        <span className="text-[0.8rem] mb-4">
          Te invitamos a interactuar con el logo de Apple en nuestra web, que
          cuenta con modo oscuro. Además, la web detecta el modo que tienes
          configurado en tu máquina y lo aplica aquí. Si no me crees, cambia el
          tema de tu máquina y refresca esta página.
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-red-400 p-1 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Banner;
