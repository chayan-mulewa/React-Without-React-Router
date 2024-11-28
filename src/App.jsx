import { BrowserRouter, Routes, Route, Header } from "./components";
import { Home, AboutUs } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/about-us"}>
            <AboutUs />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
