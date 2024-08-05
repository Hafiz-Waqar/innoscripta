import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainHome } from "./pages/main-home";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#0e1217]">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<MainHome />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
