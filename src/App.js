import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { LoadingPage } from "./components";

// Pages
const Home = lazy(() => import("./pages/home"));
const Detail = lazy(() => import("./pages/detail"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:slug" component={Detail} />
      </Switch>
    </Suspense>
  );
}

export default App;
