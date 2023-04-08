import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
