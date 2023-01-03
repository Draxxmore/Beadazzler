import React, { ChangeEvent, useState } from "react";
import styles from "@/styles/PictureSettings.module.css";

const PictureSettings = () => {
  const [beadWidth, setBeadWidth] = useState<number>(1);
  const [beadHeight, setBeadHeight] = useState<number>(1);

  const handleWidthChange = () => {
    const beadWidthValue = (document.getElementById("bead-width") as HTMLInputElement)!.value;

    // Might be better to do a try/catch statement here to catch errors
    if (typeof parseInt(beadWidthValue) === "number") {
      setBeadWidth(parseInt(beadWidthValue));
      console.log(beadWidth);
    }
  };

  const handleHeightChange = () => {
    const beadHeightValue = (document.getElementById("bead-height") as HTMLInputElement)!.value;

    // TODO: Does not show console message if it's not able to parse
    try {
      setBeadHeight(parseInt(beadHeightValue));
      console.log(beadHeight);
    } catch {
      console.log("Make sure that your input is a number");
    }
  };

  return (
    <div className={styles.picture_settings__container}>
      <div className={styles.picture_settings__width_container}>
        <input id="bead-width"></input>
        <button onClick={handleWidthChange}>Change Bead Width</button>
      </div>
      <div className={styles.picture_settings__height_container}>
        <input id="bead-height"></input>
        <button onClick={handleHeightChange}>Change Bead Height</button>
      </div>
    </div>
  );
};

export default PictureSettings;
