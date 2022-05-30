import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='relative flex flex-col 
      min-h-screen max-w-screen justify-start 
      bg-gray-600'>
      <header className='bg-black/60 px-10' >
        <Navbar />
      </header>
      <main className='bg-pink-300 '>main section</main>
      <footer className='bg-orange-300'>footer section</footer>
    </div>
  );
}

export default App;
