import './App.css';
import githubLogo from './assets/github-logo.svg'
import linkedinLogo from './assets/linkedin-logo.svg'
import profilePhoto from './assets/profile-photo.jpg'

function App() {
  
  return (
    <div className='relative flex flex-col 
      min-h-screen max-w-screen justify-start custom-background'>
      <header className='bg-black/70 px-6 py-1' >
        <nav className='relative flex flex-col'>
          <div className='text-white flex flex-row justify-between'>
            <a className='text-lg font-extrabold' href="https://github.com/cesart98">CT</a>
            <ul className='gap-2 relative flex flex-row items-center text-sm'>
              <li><a href="https://github.com/cesart98">
                <img className='w-6' src={githubLogo}/>
              </a></li>
              <li><a href="https://www.linkedin.com/in/cesart98">
              <img className='w-6' src={linkedinLogo}/>
              </a></li>
            </ul>
          </div>
          <ul className='text-white text-base flex flex-row justify-evenly gap-12'>
            <li>skills</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <main>

        <section className='text-white flex flex-col py-40 gap-2 mx-6'>
          <p className='text-sm'>Hello, I'm</p>
          <h1 className='text-5xl'>Cesar Torres</h1>
          <p className='text-base'>Fullstack web developer</p>
          <button className='bg-red-600 w-min text-sm px-1 rounded'>Projects</button>
        </section>

        <section className='bg-black/70 mb-6 text-white px-6 py-4 flex flex-col gap-4 mx-4 rounded'>
          <h2 className='text-2xl'>About Me</h2>
          <div className='flex flex-row justify-between'>
            <div className="flex flex-col justify-center items-start w-1/2 text-sm gap-6 pr-6">
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
            <div className='flex flex-col gap-1 justify-center w-1/2 px-6 py-6 text-center'>
              <img src={profilePhoto} className='aspect-square w-20 self-center rounded-full relative top-10'/>
              <h3 className='text-xl pt-10'>Cesar Torres</h3>
              <p className='text-base'>Skills</p>
              <ul className='text-sm flex flex-wrap gap-x-3 gap-y-1 justify-center'>
                <li className='bg-yellow-600 px-1 rounded'>JavaScript</li>
                <li className='bg-blue-600 px-1 rounded'>React</li>
                <li className='bg-cyan-600 px-1 rounded'>TailwindCSS</li>
                <li className='bg-emerald-700 px-1 rounded'>Node.js</li>
                <li className='bg-fuchsia-700 px-1 rounded'>MongoDB</li>
                <li className='bg-slate-500 px-1 rounded'>Express</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-black/70 mb-6 text-white px-6 py-4 flex flex-col gap-8 mx-4 rounded'>
          <h2 className='text-2xl'>Projects</h2>
          <div className='flex flex-col items-stretch gap-4'>

            <div className="flex flex-row text-sm gap-2">
              <div className='w-1/3 aspect-square mr-6 bg-white'></div>
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
              <div className='w-1/3 aspect-square mr-6 bg-white'></div>
              <div className='w-2/3 flex flex-col justify-center gap-2'>
                <h3 className='text-xl'>James Webb Space Telescope Dashboard</h3>
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
              <div className='w-1/3 aspect-square mr-6 bg-white'></div>
              <div className='w-2/3 flex flex-col justify-center gap-2'>
                <h3 className='text-xl'>BASH Script</h3>
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

        <section className='bg-black/70 mb-6 text-white px-6 flex flex-col gap-4 py-4 mx-4 rounded'>
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
      <footer className='text-white relative flex flex-col bg-black/70 px-6 text-center py-1'>
        <p className='text-xs'>torres-cesar@outlook.com</p>
        <a className='text-lg font-extrabold' href="https://github.com/cesart98">CT</a>
      </footer>
    </div>
  );
}

export default App;
