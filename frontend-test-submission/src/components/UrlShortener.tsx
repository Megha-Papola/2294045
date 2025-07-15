import { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShortUrl('');
    try {
      const res = await axios.post('https://cleanuri.com/api/v1/shorten', { url });
      setShortUrl(res.data.result_url);
    } catch {
      alert('Failed to shorten URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        required
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your URL"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold"
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>
      {shortUrl && (
        <div className="text-center text-pink-700 mt-4 break-words">{shortUrl}</div>
      )}
    </form>
  );
};

export default UrlShortener;
