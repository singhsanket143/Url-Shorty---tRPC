import { useEffect, useState } from 'react'
import './App.css'
import trpcClient from './trpc';

function App() {

  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!url) return;
    try {
      const response = await trpcClient.createShortUrl.mutate({ url });
      setShortUrl(response);
    } catch (e) {
      console.log("Something went wrong");
      console.log(e);
    }
  }

  const getAllUrls = async () => {
    try {
      const response = await trpcClient.getShortUrl.query("mnptd0");
      console.log(response);
    } catch (e) {
      console.log("Something went wrong");
      console.log(e);
    }
  }

  useEffect( () => {
    getAllUrls();
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>

      <div className='p-6 max-w-sm bg-white rounded-lg shadow-md'>

        <h1 className='text-2xl font-bold mb-4'>URL Shorty</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            placeholder='Enter your URL here' 
            className='w-full p-2 border border-gray-300 rounded-md mb-4'
            value={url}
            onChange={e => setUrl(e.target.value)}
          
          />

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-md'
          >
            Shorten URL
          </button>
        </form>

        {shortUrl && (
          <p
            className='text-center text-sm text-gray-500 mt-4'
          >
            Your shortened url is {shortUrl}
          </p>
        )}
      </div>

    </div>
  )
}

export default App
