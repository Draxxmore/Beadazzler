import imageSlicer from "./imageSlicer";

export const ImageTransformer = (width: number, height: number) => {
  const drawPixelImg = async () => {
    if (document.getElementById("uploaded-img")) {
      const canvasContext = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d");

      const rgb = await getRGB(canvasContext!);
      canvasContext!.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      canvasContext?.fillRect(0, 0, 500, 500);
    }
  };

  const getRGB = async (canvasContext: CanvasRenderingContext2D) => {
    const rgb = { r: 0, b: 0, g: 0 };
    const blockSize = 5; // Blocksize is the amount of pixels it will iterate through
    let count = 0;
    let i = -4; // TODO: Why is this negative 4?

    const data = canvasContext.getImageData(0, 0, 500, 500); // TODO: Will need to change this to match actual image size
    const length = data.data.length;

    while ((i += blockSize * 4) < length) {
      count++;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // Used to floor results. Could we use a Math.floor here instead?
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  };

  drawPixelImg();
};

export default ImageTransformer;
