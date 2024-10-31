import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface LinkType {
  title: string;
  icon?: any;
  icon_2?: any;
  to?: string;
}
export interface settingslider {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  nextArrow: null;
  prevArrow: null;
}

export interface RightCornerDeatilestype {
  img: string;
  title: string;
  desc: string;
}
export interface leftCornerFirsttype {
  icon: IconDefinition;
  title: string;
  desc: string;
}

export interface prodcttype {
  id?: number | string;
  quantity?: number;
  images?: string[];
  img?: string;
  category?: string;
  title: string;
  Solid?: number;
  stars?: number | undefined;
  price: number | string;
  discount?: number | string;
  priceAfterDiscount: number;
  daysForDelviry: number;
  nots?: string[];
  available?: number;
  stock?: number;
}

export interface ThreeElementType {
  title: string;
  nots: string[];
  link: string;
  img: string;
}
