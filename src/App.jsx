import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index";
import DetailMovie from "./pages/DetailMovie";
function App() {
  return (
    <div className="bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <IndexPage title="Movie - Menonton dengan seru hanya di movie" />
            }
          />
          <Route
            path="/detail/movie/:id"
            element={<DetailMovie title="Movie - Detail" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
