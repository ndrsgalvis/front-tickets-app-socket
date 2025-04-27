import { BrowserRouter } from "react-router-dom";
import UiProvider from "./context/UiContext";
import RouterPage from "./pages/RouterPage";
import { SocketProvider } from "./context/SocketContext";

const TicketApp = () => {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </SocketProvider>
    </>
  );
};

export default TicketApp;
