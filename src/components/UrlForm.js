import {useState} from 'react';

const UrlForm = () => {

    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [displayUrl, setDisplayUrl] = useState(false);
    
    const handleSubmit = () => {
        
        Axios.post("http://localhost:3001/shortenUrl", {
            targetUrl: url, 
            shortUrl,
        }).then((response) => {
            console.log("URL shortened");
        });
        Axios.get("http://localhost:3001/getShortUrl").then((response) => {
            setUrl(response.data);
        });
        setDisplayUrl(true);
    }

    

    const updateUrl = (event) => {
        setUrl(event.target.value);
        setDisplayUrl(false);
    }

    return (
        <>
        <div>
            <form>
                <div className="flex flex-col justify-center items-center min-w-min min-h-min">
                    <label className='lg:text-xl text-lg text-sm'>URL:
                        <input onChange={event => updateUrl(event)} type="text" className=" mx-6 text-black px-2"/>
                    </label>
                    <input type="button" onClick={handleSubmit} value="Shorten" className="text-sm lg:text-xl text-lg mt-4 bg-black w-24 cursor-pointer"/>
                </div>
            </form>

            
        </div>
        <div className='mt-5 text-center lg:text-xl text-lg text-sm'>{displayUrl ? url : ""}</div>
        </>
    )
}

export default UrlForm;