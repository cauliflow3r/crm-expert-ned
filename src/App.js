import React, {useEffect} from "react";
import MainRoutes from "./routes/MainRoutes";
import {Alert, AlertTitle} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "./features/alertMUI/alertMUISlice";

const App = () => {

    const alertMUI = useSelector((state) => state.alertMUI)
    const dispatch = useDispatch()

    const alertDefault = {
        position: 'fixed',
        left: '40%',
        top: '120%',
        transition: '0.6s',
        zIndex: '999'
    }

    const alertActive = {
        position: 'fixed',
        left: '40%',
        top: '85%',
        transition: '0.6s',
        zIndex: '999'
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setActive(false))
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [alertMUI]);

  return (
    <div>
      <MainRoutes />
        <Alert
            severity={alertMUI.type}
            sx={ alertMUI.active ? alertActive : alertDefault}
        >
            <AlertTitle>{alertMUI.title}</AlertTitle>
            {alertMUI.value}
        </Alert>
    </div>
  );
};

export default App;
