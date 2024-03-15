import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import VanillaPage from "../pages/projects/vanilla/VanillaPage";
import ReactPage from "../pages/projects/react/ReactPage";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.projects,
    Component: Projects,
  },
  {
    path: routes.about,
    Component: About,
  },
  {
    path: routes.contact,
    Component: Contact,
  },
  {
    path: routes.vanillaPage,
    Component: VanillaPage,
  },
  {
    path: routes.reactPage,
    Component: ReactPage,
  },
];
