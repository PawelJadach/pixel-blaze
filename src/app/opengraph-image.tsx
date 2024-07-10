import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pixel Blaze";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div className="text-6xl text-light font-bold tracking-widest rounded-lg bg-black">
				Pixel Blaze
			</div>
		),
		{
			...size,
		},
	);
}
