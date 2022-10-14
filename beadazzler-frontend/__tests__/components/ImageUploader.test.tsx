import { ImageUploader } from "@/components/ImageUploader";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ImageUploader Component", () => {
  window.URL.createObjectURL = jest.fn();
  let button: HTMLElement;
  let input: HTMLElement;
  let correctFileType: File;
  let incorrectFileType: File;

  beforeEach(() => {
    render(<ImageUploader />);
    button = screen.getByRole("button", { name: "Upload Image" });
    input = screen.getByLabelText("img-input");
    correctFileType = new File(["Test Image"], "test.png", { type: "image/png" });
    incorrectFileType = new File(["Not an Image"], "test.txt", { type: "text/plain" });
  });

  test('When the page loads, a button that says "Upload Image" appears on the screen', () => {
    expect(button).toBeInTheDocument();
  });

  test("On image select, two duplicate images should appear on the screen and the button should disappear", async () => {
    userEvent.upload(input, correctFileType);

    await waitFor(() => {
      const originalImg = screen.getByAltText("Uploaded-Image");
      const canvasImg = screen.getByLabelText("canvas");

      expect(originalImg).toBeInTheDocument();
      expect(canvasImg).toBeInTheDocument();
      expect(button).not.toBeInTheDocument();
    });
  });

  test("Nothing should change when trying to upload the wrong file type", async () => {
    userEvent.upload(input, incorrectFileType);

    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });
});
