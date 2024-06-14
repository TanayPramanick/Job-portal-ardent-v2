import React,{useState} from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({query,handleInputChange}) => {
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14  mt-20'>
     <h1 className='text-5xl font-bold mb-3'>Find your <span className='text-blue-500'>new job</span> today</h1>
     {/* <div>
     <div class="wrapper">
    <div class="static-txt"></div>
    <ul class="dynamic-txts text-blue-500">
      <li className='text-5xl font-bold mb-3'><span >Find your new job today</span></li>
      <li><span className='text-4xl font-bold mb-3'>今日こそ、新しい仕事を見つけよう！</span></li>
      <li className='text-5xl font-bold mb-3'><span>Start a Search</span></li>
      <li><span className='text-4xl font-bold mb-3'>検索を始めましょう</span></li>
    </ul>
  </div>
     </div> */}
     <p className='text-lg text-black/70 mb-8 mt-5'>Thousands of jobs in computer, engineering and technology sectors are waiting for you</p>

     <form action="">
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4 '>
            {/*for search bar*/}
            <div className='flex md:rounded-s-sm rounded shadow-sm ring-1 ring-inset ring-gray-300
            focus-within:right-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
                <input type="text" name='title' id='title' placeholder='What position you are looking for ?' className='black flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                onChange={handleInputChange}
                value={query}/>
                <FiSearch  className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>

             {/*for location search bar*/}
            {/* <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300
            focus-within:right-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
                <input type="text" name='title' id='title' placeholder='Location' className='black flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6' 
                />
                <FiMapPin  className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div> */}

            <button type='submit' className='bg-blue-500 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
        </div>
     </form>
    </div>
  )
}

export default Banner
