import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

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
];
