interface Data {
  width: number;
  height: number;
}

export const imageInfo = async (img: Blob, cb: any) => {
  const originalImg = new Image();
  originalImg.src = URL.createObjectURL(img);

  originalImg.onload = () => {
    let data = { width: 0, height: 0 };
    data.width = originalImg.width;
    data.height = originalImg.height;
    cb(data);
  };
};
