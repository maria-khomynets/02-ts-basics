// src/components/Alert.tsx

// import clsx from "clsx";
import css from "./Alert.module.css";

interface AlertProps {
  type?: "success" | "error";
}

export default function Alert({ type }: AlertProps) {
  return (
    //className = {css.alert+ css.error & css.success}
    // <p className={clsx(css.alert, type && css[type])}>
    //   This is a default alert text
    //   </p>

    // <p className={css.alert + " " + (type ? css[type] : "")}>
    <p className={`${css.alert}  ${type ? css[type] : ""}`}>
      This is a default alert text
    </p>
  );
}
