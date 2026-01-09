
export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDesc: string;
  description: string;
  image: string;
  specifications: string[];
  packaging: string;
  origin: string;
}

export interface Promoter {
  id: string;
  name: string;
  designation: string;
  bio: string;
  image: string;
}

export interface GlobalLocation {
  id: string;
  country: string;
  city: string;
  description: string;
  flag: string;
  image: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
  date: string;
}

export interface SiteContent {
  homeHeroTitle: string;
  homeHeroSub: string;
  aboutIntro: string;
}
