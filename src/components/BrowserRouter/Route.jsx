import { useBrowserRouter } from "./BrowserRouter";

export default function Route({ path, children }) {
  const { location } = useBrowserRouter();

  const matchedRoute = location === path;

  return matchedRoute ? children : null;
}
