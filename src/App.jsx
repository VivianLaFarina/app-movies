import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const BASE_URL = "https://movies-crud-2.academlo.tech";

function App() {
  const {handleSubmit, register } = useForm()

  const submit = (data) => {
    console.log(data)

  }


  useEffect(() => {
    const URL = BASE_URL + "/movie/";

    axios
      .get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="App bg-gray-500 min-h-screen grid place-content-center text-white">

      <form onSubmit={handleSubmit(submit)} className='grid gap-3 justify-between'>
        <h1 className='text-center text-2xl font-extrabold'>Movies</h1>
        <div className='flex justify-between'>
          <label htmlFor=""> Name: </label>
          <input className='rounded-md  text-black p-2' {... register("name")} type="text" required />
        </div>
        <div className='flex justify-between'>
          <label htmlFor=""> Genre: </label>
          <input className='rounded-md text-black p-2' {... register("genre")} type="text" required />
        </div>
        <div className="flex justify-between">
          <label htmlFor=""> Duration: </label>
          <input
            placeholder="(min)"
            className='rounded-md text-black p-2'
            {... register("duration")}
            type="number"
            required />
        </div>
        <div className="flex justify-between">
          <label htmlFor=""> Release Date: </label>
          <input className='rounded-md text-black p-2' {... register("release_date")} type="date" />
        </div>

        <button className=' bg-green-600 max-w-max px-4 py-2 rounded-2xl  mx-auto'>Create Movie</button>
      </form>

    </div>
  )
}

export default App
