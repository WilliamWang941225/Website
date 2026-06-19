import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToHomePosition) {
      document.getElementById("home-return-position")?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.key]);

  return null;
}