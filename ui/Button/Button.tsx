import * as React from "react";
//import styles from "./Button.module.css";
import { LoadingIcon } from "../icons";
import { cx } from "../classNames";

/* const variantClassNames = {
  contained: "",
  outlined: styles.outlined,
}; */

export function Button({
  loading,
  children,
  
  ...props
}: JSX.IntrinsicElements["button"] & {
  loading?: boolean;
  
}) {
  return (
    <button
      {...props}
      className={cx(props.className)}
    >
      {loading && <LoadingIcon className="mr-2" />}
      <span>{children}</span>
    </button>
  );
}