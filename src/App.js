import { lazy, Suspense } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";

// Components
import { LoadingPage } from "./components";

// Pages
const Home = lazy(() => import("./pages/home"));
const Detail = lazy(() => import("./pages/detail"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:slug" component={Detail} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
