import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-title.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import MyPhoto from '../../assets/images/my-photo.jpg'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n','i', 'a']
  const jobArray = ['W','e','b','', 'D','e','v','l','o','p','e','r','.']
  

  useEffect(() => {
    setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt='name'/>
        <AnimatedLetters
        letterClass={letterClass} 
        strArray={nameArray}
        idx={15}
        />
        <br />
        <AnimatedLetters
        letterClass={letterClass} 
        strArray={jobArray}
        idx={22}
        />
        </h1>
        <h2>Frontend Developer / YouTuber / JavaScript Expert / Designer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <div className='my-photo'>
        <img src={MyPhoto} alt='my photo'/>
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  );
}

export default Home