import profile from './assets/images/avatar-jessica.jpeg'

function App() {


  return (
    <>
    <div className="bg-[#23231A] w-full max-w-sm mx-auto flex flex-col items-center justify-center mt-28 rounded-lg py-12">
      <div className=' flex flex-col '> 
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQF9GHrPwsmh_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702635292780?e=1729728000&v=beta&t=FqBoPKmO9hXHVkzJyozH2iWHTyPVlxw6gLEjKIEmSe8" alt="profile" 
        className='rounded-full w-28 h-28  mx-auto'
        />
 <h1 className='mt-4 text-white font-bold text-2xl  mx-auto  '>Musab Khurram</h1>
 <p className='text-yellow-300 text-lg font-semibold  mx-auto' >Karachi, Pakistan</p>      

   <h3 className='text-white mt-6 text-lg  mx-auto'>Front-end developer and avid reader </h3>
      </div>


      <button className='mt-4 w-2/3 max-w-xs h-10 text-lg text-white font-semibold bg-gray-400 px-4 rounded-md'>
  Github
</button>
<button className='mt-4 w-2/3 max-w-xs h-10 text-lg text-white font-semibold bg-gray-400 px-4 rounded-md'>
  LinkedIn
</button>
<button className='mt-4 w-2/3 max-w-xs h-10 text-lg text-white font-semibold bg-gray-400 px-4 rounded-md'>
  Twitter
</button>
<button className='mt-4 w-2/3 max-w-xs h-10 text-lg text-white font-semibold bg-gray-400 px-4 rounded-md'>
  Instagram
</button>

    
    </div>
     
    </>
  )
}

export default App
