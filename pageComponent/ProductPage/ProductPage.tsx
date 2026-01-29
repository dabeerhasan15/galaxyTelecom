import { Product } from "@/component/Product";
import classes from "./ProductPage.module.scss";

export const ProductPage = () => {

  return (
    <>
    <div className={classes.productDetails}><Product/></div>
    </>
  );
};
