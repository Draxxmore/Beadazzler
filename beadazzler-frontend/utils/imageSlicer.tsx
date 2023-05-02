const imageSlicer = (imageHeight: number, imageWidth: number, beadHeight: number, beadWidth: number) => {
  const beadLength = { x: 0, y: 0 };
  beadLength.y = Math.round(imageHeight / beadHeight);
  beadLength.x = Math.round(imageWidth / beadWidth);

  const beadLayout = [];
  let y = 0;

  for (let i = 0; i <= beadHeight; i++) {
    let beadRow = [];
    let x = 0;

    for (let j = 0; j <= beadWidth; j++) {
      beadRow.push([x, y]);
      x = x + beadLength.x;
    }

    beadLayout.push(beadRow);
    y = y + beadLength.y;
  }

  return beadLayout;
};

export default imageSlicer;
