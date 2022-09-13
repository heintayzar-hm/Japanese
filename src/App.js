import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./router/routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomeRoutes></HomeRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
