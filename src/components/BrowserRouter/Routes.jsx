import React from "react";
import { useBrowserRouter } from "./BrowserRouter";

export default function Routes({ children }) {
  const { location } = useBrowserRouter();

  const matchedRoute = React.Children.toArray(children).find((child) => {
    return location === child.props.path;
  });

  return matchedRoute || null;
}
