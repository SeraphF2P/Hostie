import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "./lib/myToast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact";
import {Signup} from "./pages/Signup";
import { AnimatePresence } from "framer-motion";

const routers = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "/contact",
		Component: Contact,
	},
	{
		path: "/signup",
		Component: Signup,
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ToastContainer />
    <AnimatePresence mode="popLayout">
		<RouterProvider router={routers} />
    </AnimatePresence>
	</React.StrictMode>
);
