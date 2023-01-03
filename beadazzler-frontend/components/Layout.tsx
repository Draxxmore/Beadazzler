import styles from "@/styles/Layout.module.css";
import { ImageUploader } from "./ImageUploader";
import PictureSettings from "./PictureSettings";

export const Layout = () => {
  return (
    <div className={styles.layout__container}>
      <div className={styles.layout__imageUploader}>
        <ImageUploader />
      </div>
      <div className={styles.layout__settings}>
        <PictureSettings />
      </div>
    </div>
  );
};
