import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID Ir667BlJRr6hV1kVrSjMYmtN24_JCONFXbgm3kNIrQY'
	}
});
