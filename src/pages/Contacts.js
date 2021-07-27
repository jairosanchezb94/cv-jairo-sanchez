import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa"

const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <h1>Contacto</h1>
        <ul>
          <li>
            <a href="tel:625251517">
              <FaPhoneAlt /> +34 625 25 15 17
            </a>
          </li>
          <li>
            <a href="mailto:jairosanchezb5@gmail.com">
              <FaEnvelopeOpenText /> jairosanchezb5@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8599630468360089"
          crossorigin="anonymous"></script> 
      </head>
    </>
  )
}

export default Contacts
