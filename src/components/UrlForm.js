import {useState} from 'react';
import copy_icon from '../assets/copy_icon.png';
import shortenUrl from './shortenUrl';
import getShortUrl from './getShortUrl';

const UrlForm = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [displayUrl, setDisplayUrl] = useState(false);
    const [waiting, setWaiting] = useState(false);

    const handleSubmit = () => {
        setDisplayUrl(false);
        setWaiting(true);
        shortenUrl(url).then(() => {
            getShortUrl(url).then((response) => {
            setShortUrl(`https://dh-url-shortener.herokuapp.com/${response.data}`);
            }).then(() => {
                setWaiting(false);
                setDisplayUrl(true);
            });
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
                        <input placeholder="https://www.google.com" onChange={event => updateUrl(event)} type="text" className="placeholder:italic placeholder:text-slate-400 mx-6 text-black px-2 w-64"/>
                    </label>
                    <input type="submit" value="Shorten" className="text-sm lg:text-xl text-lg mt-4 border border-teal-700 bg-cyan-900 w-24 cursor-pointer hover:bg-cyan-700 active:bg-cyan-500"/>
                </div>
            </form>

            
        </div>
        <div className='flex justify-center items-center'>
            {waiting ? <div className='lg:text-xl text-lg text-sm'>Please wait...</div> : ""}
            {displayUrl ? (
                <>
                    <a href={shortUrl} className='mt-5 text-center lg:text-xl text-lg text-sm App-link'>{shortUrl}</a>
                    <img onClick={() => {navigator.clipboard.writeText(shortUrl)}} src={copy_icon} alt="copy icon" className='pt-4 ml-2 hover:cursor-pointer hover:bg-cyan-700 active:bg-cyan-500'></img>
                </>
            ) : null}
        </div>
        </>
    )
}

export default UrlForm;