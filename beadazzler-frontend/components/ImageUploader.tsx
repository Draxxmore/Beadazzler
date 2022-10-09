import styles from "@/styles/ImageUploader.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const ImageUploader = () => {
  const input = useRef<HTMLInputElement>(null);
  const [file, setFiles] = useState<File>();

  useEffect(() => {
    if (document.getElementById("uploaded-img")) {
      const ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d");
      const image = new Image();
      image.onload = () => {
        ctx?.drawImage(image, 0, 0, 500, 500);
      };
      image.src = URL.createObjectURL(file as Blob);
    }
  });

  const handleChange = (e: ChangeEvent) => {
    let files = (e.target as HTMLInputElement).files?.[0];
    setFiles(files);
  };

  return (
    <div className={styles.imageUpload__container}>
      {file ? (
        <div className={styles.img__container}>
          <img id="uploaded-img" src={URL.createObjectURL(file!)} alt="" height={500} width={500} />
          <canvas id="canvas" height={500} width={500}></canvas>
        </div>
      ) : (
        <>
          <button onClick={() => input.current?.click()} className={styles.uploadImage__button}>
            Upload Image
          </button>
          <input type="file" ref={input} accept="image/*" onChange={handleChange} hidden />
        </>
      )}
    </div>
  );
};
