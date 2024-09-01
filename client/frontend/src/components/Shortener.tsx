import { useState } from "react";
import trpcClient from '../trpc';
import { TRPCClientError } from "@trpc/client";
import Shorty from '../assets/shorty.png';
import { toast } from "react-toastify";


function Shortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // toast.info("hello", {position:"top-center", className:"font-bold", autoClose:2000})
    if (!url) return;
    try {
      const response = await trpcClient.createShortUrl.mutate({ url });
      setShortUrl(response);
    } catch (error: unknown){
      if(error instanceof TRPCClientError){
        let errorMessage = JSON.parse(error.message);
        toast.error(errorMessage[0]['message'])
      }
    }
  }

  return (
    <div className='p-2 min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-3'>

      <div className="flex items-center">
        <h1 className=" text-5xl md:text-7xl font-bold">URL <i className="text-blue-500">Shorty</i></h1>
        <img src={Shorty} alt="shorty" className="w-[9rem]" />
      </div>

      <div className='p-6 max-w-m bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-4'>

        <h1 className='text-2xl font-bold'>Shorten Your URL's</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter your URL here'
            className='w-full p-2 border border-gray-300 rounded-md mb-4'
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md'
          >
            Shorten URL
          </button>
        </form>

      </div>


      {shortUrl && (
          <p
            className='text-center text-sm text-gray-500 mt-4'
          >
            Your shortened url is <i className="font-bold text-blue-500">{window.location.href}{shortUrl}</i>
          </p>
        )}

    </div>
  )
}

export default Shortener;