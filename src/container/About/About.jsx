import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import { images } from '../../constants';
import './About.scss'
import { urlFor, client, builder } from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { AppWrap } from '../../wrapper';


const imgBuilder = imageUrlBuilder({
  baseUrl: 'http://cdn.sanity.io',
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.REACT_APP_SANITY_TOKEN,
});


const About = () => {
  const [abouts, setAbouts] = useState([]);
  console.log({abouts})
  
  // if (abouts.length !== 0) {
  //   // abouts.map(about => console.log(about.imgUrl.asset._ref))
  //   abouts.map(about => console.log(about.imgUrl.asset))
  // }

  // const abouts = [
  //   {title: 'Frontend Development', description: 'I am a good frontend web developer', imgUrl: images.about01 },
  //   {title: 'Web Design', description: 'I am a good web designer', imgUrl: images.about02 },
  //   {title: 'Mern Stack', description: 'I am a good UI/UX designer', imgUrl: images.about03 },
  //   {title: 'Backend Development', description: 'I am a good backend developer', imgUrl: images.about04 },
  // ]

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  },[])

  
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.length !== 0 && abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}  //! 'tween' - use a duration-based animation. 
            className="app__profile-item"
            key={about.title + index}
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />

            {/* <img src={ imgBuilder.image(about.imgUrl) } alt={about.title} /> */}

            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default About
export default AppWrap(About, 'about')