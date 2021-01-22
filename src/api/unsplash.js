// extracts the api call into separate file.  Could've brought the whole axios call into this component
import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID Ir667BlJRr6hV1kVrSjMYmtN24_JCONFXbgm3kNIrQY'
	}
});
