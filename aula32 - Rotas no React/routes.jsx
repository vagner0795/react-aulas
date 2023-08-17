import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";

function Router() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/filmes" Component={Movies} />
      <Route path="/series" Component={Series} />
    </Routes>
  );
}

export default Router;
