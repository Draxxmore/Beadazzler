import imageSlicer from "../../utils/imageSlicer";

describe("imageSlicer function", () => {
  const imageHeight = 1000;
  const imageWidth = 2000;
  const beadHeight = 2;
  const beadWidth = 2;

  it("Should return arrays back if given the proper arguments", () => {
    expect(imageSlicer(imageHeight, imageWidth, beadHeight, beadWidth)).toEqual([
      [
        [0, 0],
        [1000, 0],
        [2000, 0],
      ],
      [
        [0, 500],
        [1000, 500],
        [2000, 500],
      ],
      [
        [0, 1000],
        [1000, 1000],
        [2000, 1000],
      ],
    ]);
  });
});
