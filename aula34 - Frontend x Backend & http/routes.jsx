import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayout from "../Layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/filmes" Component={Movies} />
        <Route path="/series" Component={Series} />
      </Route>
    </Routes>
  );
}

export default Router;
