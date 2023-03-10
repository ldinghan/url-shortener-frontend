import Axios from 'axios';

const shortenUrl = (url) => {
    const shorten = Axios.post("https://dh-url-shortener.herokuapp.com/shortenUrl", {
        targetUrl: url
    });
    return shorten;
}

export default shortenUrl;