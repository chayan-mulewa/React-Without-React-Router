import { useEffect, useState, useContext, createContext } from "react";

export const BrowserRouterContext = createContext();
export const useBrowserRouter = () => useContext(BrowserRouterContext);

export default function BrowserRouter({ children }) {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setLocation(window.location.pathname);

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState(null, "", to);
    setLocation(to);
  };

  return (
    <>
      <BrowserRouterContext.Provider
        value={{ location, setLocation, navigate }}
      >
        {children}
      </BrowserRouterContext.Provider>
    </>
  );
}
