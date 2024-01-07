import type { FC } from "react";
import styles from "../../components/styles/loading.module.css";

const LoadingMeals: FC = () => {
  return <p className={styles.loading}>Loading meals</p>;
};

export default LoadingMeals;
