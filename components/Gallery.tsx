"use client";
import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
	const [mainImage, setMainImage] = useState(productMedia[0]);
	return (
		<div className="flex flex-col gap-3 max-w-[500px]">
			<Image
				src={mainImage}
				alt="Product Image"
				width={500}
				height={500}
				className="w-96 h-96 rounded-lg object-cover"
			/>
			<div className="flex gap-2 overflow-x-auto scrollbar-hide">
				{productMedia.map((image, index) => (
					<Image
						key={index}
						src={image}
						alt={`Product Image ${index + 1}`}
						width={200}
						height={200}
						className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
							image === mainImage ? "border-2 border-black" : ""
						}`}
						onClick={() => setMainImage(image)}
					/>
				))}
			</div>
		</div>
	);
};

export default Gallery;
