import { BrowserRouter } from "react-router-dom";
import UiProvider from "./context/UiContext";
import RouterPage from "./pages/RouterPage";

const TicketApp = () => {
  return (
    <>
      <UiProvider>
        <BrowserRouter>
          <RouterPage />
        </BrowserRouter>
      </UiProvider>
    </>
  );
};

export default TicketApp;
