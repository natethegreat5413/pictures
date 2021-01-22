import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
	// this maps over our list of images and creates an image card for each image id mapped over.
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;
