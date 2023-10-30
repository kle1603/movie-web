import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline />
                <GoogleOAuthProvider clientId="865187497902-7203u15nejf841aaa5eqmmbuvti33irg.apps.googleusercontent.com">
                    <App />
                </GoogleOAuthProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
