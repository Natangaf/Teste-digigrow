import { useEffect, useState } from "react";
import { RoutePages } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/globalStyled";
import Header from "./components/Header/Header";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fakeLoading = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    fakeLoading();
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <>
      <Header />
      <RoutePages />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
