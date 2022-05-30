import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='relative flex flex-col 
      min-h-screen max-w-screen justify-start 
      bg-gray-600'>
      <header className='bg-black/50 px-10' >
        <Navbar />
      </header>
      <main className='mx-6'>
        <section className='text-white flex flex-col items-center py-20 gap-2'>
          <h1>Hello, I'm Cesar</h1>
          <h3>I speak ReactJS</h3>
          <button className='bg-red-600 w-max'>Resume</button>
        </section>
        <section className=' bg-black/50 mb-6'>
          <h2 className='text-white relative left-3 bottom-3'>Projects</h2>
          <div className='text-black flex text-white text-center bg-white mx-4'>
            <div className='flex-1 flex flex-col items-center'>
              <h3>Fire-Support (Battleship Clone)</h3>
              <img className='aspect-square'></img>
              <div><button>Source</button><button>Live</button></div>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <h3>SUT-Website</h3>
              <img className='aspect-square'></img>
              <div><button>Source</button><button>Live</button></div>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <h3>BASH Script</h3>
              <img className='aspect-square'></img>
              <div><button>Source</button><button>Live</button></div>
            </div>
          </div>
        </section>
        <section className='text-white bg-black/50 '>
        <h2 className='relative left-3 bottom-3'>Skills</h2>
        </section>
        <section className='bg-purple-300 '>4</section>
      </main>
      <footer className='bg-orange-300'>footer section</footer>
    </div>
  );
}

export default App;
