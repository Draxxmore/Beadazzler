import { imageInfo } from "../../utils/imageInfo";

describe("imageInfo function", () => {
  window.URL.createObjectURL = jest.fn();

  it("when given an image, should return an object with image resolution", () => {
    // expect(imageInfo(img)).toEqual({ height: 0, width: 0 });
  });
});

const img = new File(["New File!"], "test.png", { type: "image/png" });
