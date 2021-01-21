import React from 'react';

const ImageList = (props) => {
	const images = props.images.map((image, index) => {
		return <img key={index} src={image.urls.regular} alt="images" />;
	});
	return <div>{images}</div>;
};

export default ImageList;
