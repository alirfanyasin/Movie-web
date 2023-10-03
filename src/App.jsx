import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index";
import DetailMovie from "./pages/DetailMovie";
function App() {
  return (
    <div className="bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/detail/movie" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
