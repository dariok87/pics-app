import axios from "axios";

export default axios.create({  // precustomized version of axios
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID FL3iIEC7RqreG5Ij2so5jGlZ77KUNOK3SLf5QZ4Bu5M'
  }
});

