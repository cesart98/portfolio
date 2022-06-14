import './App.css';

function MainSection(props) {
  return (
    <section className=' bg-black/50 mb-6'>
    <h2 className='text-white '>{props.header}</h2>
    {props.children}
  </section>
);

}

function App() {
  
  return (
    <div className='relative flex flex-col 
      min-h-screen max-w-screen justify-start 
      bg-gray-600'>
      <header className='bg-black/50 px-6' >
        <nav className='relative flex flex-col'>
          <div className='text-white flex flex-row justify-between'>
            <a href="https://github.com/cesart98">CT</a>
            <ul className='gap-2 relative flex flex-row'>
              <li><a href="https://github.com/cesart98">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/cesart98">LinkedIn</a></li>
            </ul>
          </div>
          <ul className='text-white flex flex-row justify-between gap-12'>
            <li>skills</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <main>

        <section className='text-white flex flex-col py-32 gap-2 mx-6'>
          <p className='text-sm'>Hello, I'm</p>
          <h1 className='text-5xl'>Cesar Torres</h1>
          <p className='text-sm'>Fullstack web developer</p>
          <button className='bg-red-600 w-min text-sm px-1 rounded'>Projects</button>
        </section>

        <section className='bg-black/50 mb-6 text-white px-6 flex flex-col gap-4'>
          <h2 className='text-2xl'>About Me</h2>
          <div className='flex flex-row justify-between'>
            <div className="flex flex-col justify-center items-start w-72 text-sm gap-6 pr-6">
              <p>
              I specialize in modern applications of JavaScript in 
              the frontend and backend. I have cross-industry experience 
              as an analytical chemist and combat engineer in the US Army.
              </p>
              <p>
              I'd love to join a team where I can demonstrate my ability 
              to adapt and quickly learn in a high-paced environment. At 
              the end of the day, skills can be taught, qualities can't. 
              Learning to code while on a deployment with the Army was 
              hard, but finding someone with the qualities to succeed in 
              the worst situations is even harder.
              </p>
            </div>
            <div className='flex flex-col justify-center w-1/2 px-6 py-6 text-center'>
              <h3 className='text-xl'>Cesar Torres</h3>
              <p className='text-base'>Skills</p>
              <ul className='text-sm flex flex-wrap gap-x-3 gap-y-1 justify-center'>
                <li className='bg-yellow-600 px-1 rounded'>JavaScript</li>
                <li className='bg-blue-600 px-1 rounded'>React</li>
                <li className='bg-cyan-600 px-1 rounded'>TailwindCSS</li>
                <li className='bg-green-600 px-1 rounded'>Node.js</li>
                <li className='bg-lime-600 px-1 rounded'>MongoDB</li>
                <li className='bg-red-600 px-1 rounded'>BASH</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-black/50 mb-6 text-white px-6 flex flex-col gap-4'>
          <h2 className='text-2xl'>Projects</h2>
          <div className='flex flex-col items-stretch gap-4'>

            <div className="flex flex-row text-sm gap-2">
              <div className='w-1/3 aspect-square'></div>
              <div className='w-2/3 flex flex-col justify-center gap-2'>
                <h3 className='text-xl'>Fire-Support</h3>
                <p className='text-sm'>
                  An army version of battleship board game. Includes online 
                  multiplayer and stat tracking.
                </p>
                <div className='flex gap-2 text-sm'>
                  <button className='bg-white px-1 rounded text-black'>Live site</button>
                  <button className='bg-red-600 px-1 rounded'>Source code</button>
                </div>
              </div>
            </div>

            <div className="flex flex-row text-sm gap-2">
              <div className='w-1/3 aspect-square'></div>
              <div className='w-2/3 flex flex-col justify-center gap-2'>
                <h3 className='text-xl'>Fire-Support</h3>
                <p className='text-sm'>
                  An army version of battleship board game. Includes online 
                  multiplayer and stat tracking.
                </p>
                <div className='flex gap-2 text-sm'>
                  <button className='bg-white px-1 rounded text-black'>Live site</button>
                  <button className='bg-red-600 px-1 rounded'>Source code</button>
                </div>
              </div>
            </div>

            <div className="flex flex-row text-sm gap-2">
              <div className='w-1/3 aspect-square'></div>
              <div className='w-2/3 flex flex-col justify-center gap-2'>
                <h3 className='text-xl'>Fire-Support</h3>
                <p className='text-sm'>
                  An army version of battleship board game. Includes online 
                  multiplayer and stat tracking.
                </p>
                <div className='flex gap-2 text-sm'>
                  <button className='bg-white px-1 rounded text-black'>Live site</button>
                  <button className='bg-red-600 px-1 rounded'>Source code</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className='bg-black/50 mb-6 text-white px-6 flex flex-col gap-4'>
          <h2 className='text-2xl'>Contact</h2>
          <div className="flex flex-row text-sm gap-2">
            <div className='w-1/2 flex flex-col gap-2 justify-center pr-6'>
              <h3 className='text-xl'>Lets get in touch.</h3>
              <p className='text-sm'>
                If you have any developer roles you believe I would 
                suited for please enter your email and I'll respond 
                as soon as possible.
              </p>
            </div>
              <form className='w-1/2 flex flex-col gap-2 justify-center'>
                  <label htmlFor='name' className='flex flex-col'>
                    Name: <input type='text' id='name' name='name'></input>
                  </label>
                  <label htmlFor='email' className='flex flex-col'>
                    Email: <input type='email' id='email' name='email'></input>
                  </label>
                  <label htmlFor='phone' className='flex flex-col'>
                    Phone: <input type='tel' id='phone' name='phone'></input>
                  </label>
                <button className='bg-white px-1 rounded text-black w-min'>Submit</button>
              </form>
          </div>
        </section>
      </main>
      <footer className='bg-orange-300'>footer section</footer>
    </div>
  );
}

export default App;
