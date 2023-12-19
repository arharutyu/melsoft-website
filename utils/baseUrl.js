const baseUrl = process.env.NODE_ENV === "production" 
? 'https://melsoft.com.au' 
: 'http://localhost:3000';

export default baseUrl;