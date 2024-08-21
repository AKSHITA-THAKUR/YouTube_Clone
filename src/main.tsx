import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Auth0Provider
		domain="dev-rg8zi56dfc23twdo.us.auth0.com"
		clientId="rYyf5x0HB0uKMceLT8IAcWZAKsuGZL0y"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>
);
