import { useEffect, useState } from "react";
import RutinesList from "../sections/Rutines/RutinesList";
import { useNavigate } from "react-router-dom";
import { GetAll } from "../components/fetch";


const Rutines = () => {
  const [routine, setRoutine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatos = async () => {
      setIsLoading(true);
      try {
        const datos = await GetAll("Routine");
        setRoutine(datos || '');
      } catch (error) {
        console.error("Error fetching routines:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatos();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full flex relative w-200 item-center justify-start">
        <button
          className="fixed bottom-[50%] left-5 bg-gray-100"
          onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Listado de rutinas
        </h1>

         <RutinesList rutines={routine} isLoading={isLoading}/>

      </div>
    </>
  );
};

export default Rutines;
