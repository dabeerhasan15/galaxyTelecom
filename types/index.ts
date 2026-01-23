export const componentSizes = {
  small: "small",
  regular: "regular",
  medium: "medium",
  large: "large",
} as const;

export type ComponentSize =
  (typeof componentSizes)[keyof typeof componentSizes];

export const componentVariant = {
  primary: "primary",
  secondary: "secondary",
} as const;

export type ComponentVariant =
  (typeof componentVariant)[keyof typeof componentVariant];

export const htmlTag = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  div: "div",
  tag: "tag",
  span: "span",
} as const;

export type HtmlTag = (typeof htmlTag)[keyof typeof htmlTag];

export type SEOProperties = {
  title: string;
  description: string;
  keywords: string;
};

export type ClientLogos = {
  title: string;
  src: { color: string; white: string };
  width: number;
};

export const viewType = {
  list: "list",
  grid: "grid",
} as const;

export type ViewType = (typeof viewType)[keyof typeof viewType];

export * from "./Freelancer";
export * from "./job";
export * from "./Login";
export * from "./ProfileAvatar";

