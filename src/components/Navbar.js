export default function Navbar() {
  return (
    <nav className='relative flex flex-col'>
      <div className='text-white flex flex-row justify-between'>
        <a href="https://github.com/cesart98">CT</a>
        <ul className='gap-2 relative flex flex-row'>
          <li><a href="https://github.com/cesart98">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/cesart98">LinkedIn</a></li>
        </ul>
      </div>
      <ul className='text-white flex flex-row justify-between gap-12'>
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}