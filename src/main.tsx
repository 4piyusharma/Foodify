import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import "leaflet/dist/leaflet.css";
import { SocketProvider } from "./context/SocketContext.tsx";


export const authService = "https://tomato-auth-1-j4lc.onrender.com";
export const restaurantService = "https://restaurant-service-2u3d.onrender.com";
export const utilsService = "https://tomato-utils-2.onrender.com";
export const realtimeService = "https://realtime-service-35bj.onrender.com";
export const riderService = "https://rider-service-1-bhej.onrender.com";
export const adminService = "https://tomato-admin-luqr.onrender.com";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="2842023046-dvo3r3kbpn6jprntmqj0to7g11tm8l7e.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
