import {useState} from 'react';
import Axios from 'axios';

const UrlForm = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [displayUrl, setDisplayUrl] = useState(false);
    
    const handleSubmit = () => {
        
        Axios.post("http://localhost:3001/shortenUrl", {
            targetUrl: url
        }).then((response) => {
            console.log("URL shortened");
        }).then(() => {

        Axios.get("http://localhost:3001/getShortUrl", {
            params: {
                q: url
            }
        }).then((response) => {
            setShortUrl(response.data)
        });
        setDisplayUrl(true);
    });
    }

    

    const updateUrl = (event) => {
        setUrl(event.target.value);
        setDisplayUrl(false);
    }

    return (
        <>
        <div>
            <form onSubmit={e => {e.preventDefault(); handleSubmit();}}>
                <div className="flex flex-col justify-center items-center min-w-min min-h-min">
                    <label className='lg:text-xl text-lg text-sm'>URL:
                        <input onChange={event => updateUrl(event)} type="text" className=" mx-6 text-black px-2"/>
                    </label>
                    <input type="submit" value="Shorten" className="text-sm lg:text-xl text-lg mt-4 bg-black w-24 cursor-pointer"/>
                </div>
            </form>

            
        </div>
        <div className='mt-5 text-center lg:text-xl text-lg text-sm'>{displayUrl ? shortUrl : ""}</div>
        </>
    )
}

export default UrlForm;