import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm (
        'service_zr30y7t',
        'template_xdiv6e9',
        refForm.current,
        'RoZ0zZRigMYReFNIb'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n', 't','a','c','t','','M','e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in internship / freelance / fulltime work opportunities. <br />
            However, if you have any other request / quesion or just want a chat,  don't hesitate to contact me using form below.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  required
                  />
                </li>
                <li className='half'>
                  <input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  required
                  />
                </li>
                <li>
                  <input
                  type='text'
                  name='subject'
                  placeholder='Enter the subject'
                  required
                  />
                </li>
                <li>
                  <textarea
                  placeholder='Message'
                  name='Enter your message'
                  required
                ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className='info-map'>
        Yitong Peng
        <br />
        Guangzhou, Guangdong, China
        <br />
        <span>Taniapyt@outlook.com</span>
      </div>
      <div className='map-wrap'>
        <MapContainer center={[23.128994, 113.253250]} zoom={13}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[23.128994, 113.253250]}>
            <Popup> Tania lives here !</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type='pacman' />
    </>
  )

}

export default Contact 