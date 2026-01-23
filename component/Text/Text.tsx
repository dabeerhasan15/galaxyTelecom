import {
  ComponentSize,
  componentSizes,
  componentVariant,
  ComponentVariant,
  htmlTag,
  HtmlTag,
} from "@/types";
import { FC, memo, ReactNode } from "react";
import classes from "./Text.module.scss";

type Props = {
  children: ReactNode;
  tag?: HtmlTag;
  size?: ComponentSize;
  variant?: ComponentVariant;
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  isUpperCase?: boolean;
  className?: string;
  tagColor?: "success" | "warning" | "danger";
};

const UnmemoText: FC<Props> = ({
  isUpperCase = false,
  children,
  tag = htmlTag.p,
  size = componentSizes.regular,
  weight = "regular",
  className = "",
  tagColor,
  variant,
}) => {
  if (tag === htmlTag.tag)
    return (
      <span
        className={`${className} ${classes.tag} ${
          tagColor ? classes[`${tagColor}Tag`] : ""
        } ${size === componentSizes.medium ? classes.mediumSize : ""}`}
      >
        {children}
      </span>
    );

  const allProps = {
    className: `${className} ${classes.text}  ${
      isUpperCase ? classes.isUpperCase : ""
    } ${variant === componentVariant.primary ? classes.primary : ""} ${
      variant === componentVariant.secondary ? classes.secondary : ""
    } ${
      tag === htmlTag.p
        ? `${classes[`${size}Size`]} ${classes[`${weight}Weight`]}`
        : ""
    }`,
  };

  if (tag === htmlTag.p) return <p {...allProps}>{children}</p>;

  if (tag === htmlTag.h1) return <h1 {...allProps}>{children}</h1>;

  if (tag === htmlTag.h2) return <h2 {...allProps}>{children}</h2>;

  if (tag === htmlTag.h3) return <h3 {...allProps}>{children}</h3>;

  if (tag === htmlTag.h4) return <h4 {...allProps}>{children}</h4>;

  if (tag === htmlTag.h5) return <h5 {...allProps}>{children}</h5>;

  if (tag === htmlTag.h6) return <h6 {...allProps}>{children}</h6>;

  if (tag === htmlTag.div) return <div {...allProps}>{children}</div>;

  return <p {...allProps}>{children}</p>;
};

export const Text = memo(UnmemoText);
