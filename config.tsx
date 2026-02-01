/**
 * Central image paths. All assets live in public/assets/.
 * Use: import { images } from '@/config'; then src={images.logo}
 */
export const images = {
  logo: "/assets/Logo.png",

  home: {
    bgCloud: "/assets/Homebgcloud.png",
    background: "/assets/Homebackgorunds.png",
    feature: "/assets/feature.png",
  },

  membership: {
    dunBradstreet: "/assets/membership1.png",
    ethixbase360: "/assets/membership2.png",
    ncage: "/assets/membership3.png",
    tdra: "/assets/membership4.png",
  },

  offer: {
    whatWeOffer: "/assets/weOffer1.png",
    positionInIndustry: "/assets/weOffer2.png",
  },

  ethics: {
    bg: "/assets/Ethicsbg.png",
  },

  consultants: "/assets/consultants.png",

  footer: {
    left: "/assets/footer-left.svg",
    right: "/assets/footer-right.svg",
  },

  about: {
    hero: "/assets/about11.png",
    card1: "/assets/aboutcard1.png",
    card2: "/assets/aboutcard2.png",
    background: "/assets/aboutBackground.png",
  },

  service: {
    hero: "/assets/service1.png",
    background: "/assets/servicebackground.png",
    card1: "/assets/serviceCard1.png",
    card2: "/assets/servicecard2.png",
    card3: "/assets/servicecard3.png",
  },

  product: {
    hero: "/assets/products.png",
    background: "/assets/productbackground.png",
  },
} as const;

export type Images = typeof images;
