import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/add-employee" element={<AddEmployee />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
