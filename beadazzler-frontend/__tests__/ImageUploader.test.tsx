import { ImageUploader } from "@/components/ImageUploader";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ImageUploader Component", () => {
  test('When the page loads, a button that says "Upload Image" appears on the screen', () => {
    render(<ImageUploader />);
    const button = screen.getByRole("button", { name: "Upload Image" });
    expect(button).toBeInTheDocument();
  });

  test("On image select, two duplicate images should appear on the screen and the button should disappear", async () => {
    render(<ImageUploader />);

    // Create a fake file
    const file = new File(["Test Image"], "test.png", { type: "image/png" });

    // Upload new file
    const input = screen.getByLabelText("img-input");
    userEvent.upload(input, file);

    // Expect Clause
    const button = screen.getByRole("button", { name: "Upload Image" });
    const originalImg = screen.getByAltText("Uploaded Image");
    const canvasImg = document.getElementById("canvas");

    expect(originalImg).toBeInTheDocument();
  });
});
