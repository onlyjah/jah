import { useState } from 'react'
import heroImg from './assets/bookshelf.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>JahNoah</h1>
          <p>
            Hi! I am JahNoah.
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Times clicked: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Learn more about the Site</p>
          <ul>
            <li>
              <a href="https://github.com/onlyjah/jah" target="_blank">
                About Me
              </a>
            </li>
            <li>
              <a href="https://github.com/onlyjah" target="_blank">
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with Jah</h2>
          <p>Email: <a href="mailto:mail@JahNoah.com">mail@JahNooah.com</a></p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
