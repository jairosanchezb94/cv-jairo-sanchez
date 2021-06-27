import { FaLinkedinIn, FaGithub } from "react-icons/fa"

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="overlay">
          <h1>Jairo Sanchez</h1>
          <p>Desarrollador Web | Frontend </p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jairo-s%C3%A1nchez-malaga/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jairosanchezb94"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Homepage
