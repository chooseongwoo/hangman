import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
