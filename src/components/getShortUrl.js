import Axios from 'axios';

const getShortUrl = (url) => {
    const shortUrl = Axios.get("https://dh-url-shortener.herokuapp.com/getShortUrl", {
        params: {
            q: url
        }
    });
    return shortUrl;
}

export default getShortUrl;