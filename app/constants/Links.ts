import { faMicroblog } from "@fortawesome/free-brands-svg-icons";
import {
  faMobileScreenButton,
  faLaptop,
  IconDefinition,
  faClock,
  faTv,
  faHeadphones,
  faCaretDown,
  faCamera,
  faGamepad,
  faGlasses,
  faArrowDownUpAcrossLine,
  faChartSimple,
  faStopwatch,
  faMessage,
  faAngleRight,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { LinkType } from "./types";

export const linksLeft: string[] = [
  "About Us",
  "My account",
  "Featured Products",
  "Wishlist",
];

export const slidelinks: LinkType[] = [
  { title: "Headphones", icon: faHeadphones },
  {
    title: "Camera & Photo",
    icon: faCamera,
  },
  {
    title: "Video Games",
    icon: faGamepad,
  },
  {
    title: "Sports & Outdoors",
    icon: faGlasses,
  },
  {
    title: "Best Sellers",
    icon: faArrowDownUpAcrossLine,
  },
  {
    title: "Top 100 Offers",
    icon: faChartSimple,
  },
  {
    title: "New Arrivals",
    icon: faStopwatch,
  },
];

export const mainlinks: LinkType[] = [
  {
    title: "Home",
    to: "/",
  },

  {
    title: "Cell Phones",
    to: "cell-phones",
    icon: faMobileScreenButton,
  },
  {
    title: "HeadPhones",
    icon: faHeadphones,
  },
  {
    title: "Blog",
    icon: faMicroblog,
  },
  {
    title: "Contact",
    icon: faMessage,
  },
];
export const mainlinksmobail: LinkType[] = [
  {
    title: "Home",
    to: "/",
  },

  {
    title: "Cell Phones",
    to: "/cell-phones",
    icon: faMobileScreenButton,
  },
  {
    title: "HeadPhones",
    icon: faHeadphones,
  },
  {
    title: "Blog",
    icon: faMicroblog,
  },
  {
    title: "Contact",
    icon: faMessage,
  },
];
