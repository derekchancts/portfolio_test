import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
       <div><a href="https://github.com/derekchancts" class="social" target="_blank" rel="noreferrer">
        <BsGithub />
        </a></div>
      <div><a href="https://www.facebook.com/derekchancts" class="social" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a></div>
      <div><a href="https://www.linkedin.com/in/derek-chan-2bbb3259" class="social" target="_blank" rel="noreferrer">
        <BsLinkedin />
        </a></div>
    </div>
  )
}

export default SocialMedia