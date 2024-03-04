import Router from "./Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

function App() {
  return (
    <>
     <ToastContainer/>
     <Router/>
    </>
  );
}
export default App;
