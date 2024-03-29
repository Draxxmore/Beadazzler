import styles from "@/styles/ImageUploader.module.css";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import ImageTransformer from "../utils/ImageTransformer";
import { BeadWidthContext, BeadHeightContext } from "@/components/Layout";
import { imageInfo } from "utils/imageInfo";
import imageSlicer from "utils/imageSlicer";

export const ImageUploader = () => {
	const [file, setFiles] = useState<File>();
	const [originalHeight, setOriginalHeight] = useState<number>(0);
	const [originalWidth, setOriginalWidth] = useState<number>(0);
	const [beadChunks, setBeadChunks] = useState({});
	const input = useRef<HTMLInputElement>(null);
	const { beadWidth } = useContext(BeadWidthContext);
	const { beadHeight } = useContext(BeadHeightContext);

	useEffect(() => {
		if (document.getElementById("uploaded-img")) {
			const ctx = (
				document.getElementById("canvas") as HTMLCanvasElement
			).getContext("2d");
			const image = new Image();

			// Draws image to screen
			image.onload = () => {
				ctx?.drawImage(image, 0, 0, 500, 500);
				ImageTransformer(beadWidth, beadHeight);
			};

			image.src = URL.createObjectURL(file as Blob);

			imageInfo(file as Blob, (meta: { height: number; width: number }) => {
				setOriginalHeight(meta.height);
				setOriginalWidth(meta.width);
			});
		}
	});

	useEffect(() => {
		setBeadChunks(
			imageSlicer(originalHeight, originalWidth, beadHeight, beadWidth)
		);
		console.log(beadChunks);
	}, [beadHeight, beadWidth, originalHeight, originalWidth]);

	const beadChunkSlicer = () => {
		// Create counter that will count how many arrays are in the first array of beadChunks
		// Will need to iterate through the first and second arrays of beadChunks until it reaches the count
		// Example: First array will have starting point of canvas [0, 0]; Second array will have the end of the canvas [50, 50] and will have the value saved somewhere (state or just reg variable?)
		// Once it reaches the count, 3 and 4 arrays will need to be used for second column, 5 and 6 for third column, etc.
		// A canvas will then be made for each block in the column and ImageTransformer will be used to get average color
		// Example: ctx?.drawImage(image, 0, 0, 50, 50)
	};

	// NOT USED CURRENTLY
	// const beadCountChunks = (
	// 	imageHeight: number,
	// 	imageWidth: number,
	// 	beadHeight: number,
	// 	beadWidth: number
	// ) => {
	// 	const beadChunks = { x: 0, y: 0 };
	// 	beadChunks.y = Math.round(imageHeight / beadHeight);
	// 	beadChunks.x = Math.round(imageWidth / beadWidth);
	// 	return beadChunks;
	// };

	const handleChange = (e: ChangeEvent) => {
		let files = (e.target as HTMLInputElement).files?.[0];
		setFiles(files);
	};

	return (
		<div className={styles.imageUpload__container}>
			{file ? (
				<div className={styles.img__container}>
					<img
						id="uploaded-img"
						src={URL.createObjectURL(file!)}
						alt="Uploaded-Image"
						height={500}
						width={500}
					/>
					<canvas
						id="canvas"
						aria-label="canvas"
						height={500}
						width={500}
					></canvas>
				</div>
			) : (
				<>
					<button
						onClick={() => input.current?.click()}
						className={styles.uploadImage__button}
					>
						Upload Image
					</button>
					<input
						id="img-input"
						aria-label="img-input"
						type="file"
						ref={input}
						accept="image/*"
						onChange={handleChange}
						hidden
					/>
				</>
			)}
		</div>
	);
};
