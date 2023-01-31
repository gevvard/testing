import Help from "./help/help";
import {ABOUT_PAGE, HELP_PAGE, HOME_PAGE, SHOP_PAGE} from "../utils/url";
import About from "./about/about";
import Shop from "./shop/shop";
import Home from "./home/home";

export const authRoutes = [
  {
    name: "Home",
    element: <Home/>,
    path: HOME_PAGE,
  },
  {
    name: "Shop",
    element: <Shop/>,
    path: SHOP_PAGE,
  },
  {
    name: "About",
    element: <About/>,
    path: ABOUT_PAGE
  },
  {
    name: "Help",
    element: <Help/>,
    path: HELP_PAGE
  }
]