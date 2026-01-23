import { FC, memo } from "react";

import { ComponentSize, componentSizes } from "@/types";
import classes from "./Space.module.scss";

type Props = {
  size?: ComponentSize;
};

const UnmemoSpace: FC<Props> = ({ size = componentSizes.medium }) => {
  return <div className={`${classes.space} ${classes[`${size}Size`]}`}></div>;
};

export const Space = memo(UnmemoSpace);
