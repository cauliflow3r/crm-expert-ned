import React, {useEffect} from "react";
import MainRoutes from "./routes/MainRoutes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>

      <MainRoutes />

        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />
    </div>
  );
};

export default App;
