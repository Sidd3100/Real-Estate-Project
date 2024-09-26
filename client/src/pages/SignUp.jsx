import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl border rou mt-10 sm:p-10 '>
      <h1 className='text-4xl text-center font-bold my-7 text-gray-800'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <input
          type='text'
          placeholder='Username'
          className='border p-4 rounded-lg shadow-sm focus:ring focus:ring-blue-300 transition-all duration-200 ease-in-out'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-4 rounded-lg shadow-sm focus:ring focus:ring-blue-300 transition-all duration-200 ease-in-out'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-4 rounded-lg shadow-sm focus:ring focus:ring-blue-300 transition-all duration-200 ease-in-out'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-blue-600 text-white p-4 rounded-lg uppercase font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5 justify-center'>
        <p className='text-gray-600'>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-600 hover:underline cursor-pointer'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5 text-center'>{error}</p>}
    </div>
  );
}
