import BigNav from "./bigNav";
import SmallNav from "./smallNav";
// import "./navbar.scss";
import { useEffect, useState } from "react";
function NavBar() {
  let [resizeTheWidth, setResizeTheWidth] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Hello ji ");
      window.innerWidth >= 960 ? setResizeTheWidth(true) : setResizeTheWidth(false);
      console.log(resizeTheWidth);
    });

    return () =>
      window.removeEventListener("resize", () => console.log("removed"));
  }, [resizeTheWidth]);

  // return( 

  //   resizeTheWidth ? <BigNav /> : <SmallNav />);
  return (
    window.innerWidth >= 960 ? <BigNav/> : <SmallNav/>
  )
}

export default NavBar;

