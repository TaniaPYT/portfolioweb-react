import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt, faVuejs } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About  = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={ ['A', 'b', 'o', 'u', 't', ' ','m', 'e'] }
            idx={15}
          />
        </h1>
        <p>I am a diligent and pragmatic individual with a strong foundation in frontend principles and planning. As a recent graduate with a focus on web development, I am now ready to embark on a fulfilling journey as a Junior Frontend Developer.
        </p>
        <p>Careful and rigorous in my approach to problem-solving, ensuring optimal outcomes for projects. Strong commitment to adhering to coding principles and best practices, fostering clean and maintainable codebases. Proficient in planning and organizing development tasks to meet deadlines and project goals.
        </p>
        <p>I possess a natural aptitude for quickly grasping new concepts and information. My eagerness to learn drives me to stay updated with the latest industry trends and technologies, enabling me to contribute innovative ideas to the team. Additionally, I continuously strive to enhance team efficiency and deliver exceptional results.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faVuejs} color='#42b883'/>
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED5F4'/>
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#F1502F'/>
          </div>
        </div>
      </div>

    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About