import { ImageUploader } from "@/components/ImageUploader";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ImageUploader Component", () => {
  window.URL.createObjectURL = jest.fn();

  test('When the page loads, a button that says "Upload Image" appears on the screen', () => {
    render(<ImageUploader />);
    const button = screen.getByRole("button", { name: "Upload Image" });
    expect(button).toBeInTheDocument();
  });

  test("On image select, two duplicate images should appear on the screen and the button should disappear", async () => {
    render(<ImageUploader />);

    // Create a fake file
    const file = new File(["Test Image"], "test.png", { type: "image/png" });
    const button = screen.getByRole("button", { name: "Upload Image" });

    // Upload new file
    const input = screen.getByLabelText("img-input");
    userEvent.upload(input, file);

    // Have to wait for the image to be loaded
    await waitFor(() => {
      const originalImg = screen.getByAltText("Uploaded-Image");
      expect(originalImg).toBeInTheDocument();

      const canvasImg = screen.getByLabelText("canvas");
      expect(canvasImg).toBeInTheDocument();

      expect(button).not.toBeInTheDocument();
    });
  });
});
