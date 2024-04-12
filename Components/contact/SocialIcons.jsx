import React from 'react'
import {BsFacebook, BsTiktok} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=61556950935646' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
          

     
          
             <a target='_blank' href='mailto:soos73645@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons