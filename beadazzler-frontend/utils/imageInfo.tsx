export const imageInfo = (img: Blob) => {
  const originalImg = new Image();
  originalImg.src = URL.createObjectURL(img);

  const data = { height: 0, width: 0 };
  originalImg.onload = () => {
    data.height = originalImg.height;
    data.width = originalImg.width;
  };

  return data;
};
