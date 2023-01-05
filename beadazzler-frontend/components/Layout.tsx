import styles from "@/styles/Layout.module.css";
import { createContext, useState } from "react";
import { ImageUploader } from "./ImageUploader";
import PictureSettings from "./PictureSettings";

export const BeadWidthContext = createContext({ beadWidth: 0, setBeadWidth: (state: number) => {} });
export const BeadHeightContext = createContext({ beadHeight: 0, setBeadHeight: (state: number) => {} });

export const Layout = () => {
  const [beadWidth, setBeadWidth] = useState<number>(1);
  const [beadHeight, setBeadHeight] = useState<number>(1);

  return (
    <BeadWidthContext.Provider value={{ beadWidth, setBeadWidth }}>
      <BeadHeightContext.Provider value={{ beadHeight, setBeadHeight }}>
        <div className={styles.layout__container}>
          <div className={styles.layout__imageUploader}>
            <ImageUploader />
          </div>
          <div className={styles.layout__settings}>
            <PictureSettings />
          </div>
        </div>
      </BeadHeightContext.Provider>
    </BeadWidthContext.Provider>
  );
};
