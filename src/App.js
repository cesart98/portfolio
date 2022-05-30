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
      <main className='mx-6'>
        <section className='text-white flex flex-col items-center py-20 gap-2'>
          <h1>Hello, I'm Cesar</h1>
          <h3>I speak ReactJS</h3>
          <button className='bg-red-600 w-max'>Resume</button>
        </section>
        <section className='bg-blue-300'>2</section>
        <section className='bg-orange-300 '>3</section>
        <section className='bg-purple-300 '>4</section>
      </main>
      <footer className='bg-orange-300'>footer section</footer>
    </div>
  );
}

export default App;
