import React from 'react'

import Location from '../assets/icon-location.svg';
import LocationWhite from '../assets/icon-location-white.svg';
import Chain from '../assets/icon-website.svg';
import ChainWhite from '../assets/icon-website-white.svg';
import Social from '../assets/icon-twitter.svg';
import SocialWhite from '../assets/icon-twitter-white.svg';
import Company from '../assets/icon-company.svg';
import CompanyWhite from '../assets/icon-company-white.svg';


interface LocationProps {
    button: boolean, 
    info: {
        location: string,
        html_url: string,
        twitter_username: string,
        company: string,
    }
}

const LocationToCompany: React.FC<LocationProps> = ({ button, info }) => {
  return (
    <div className='flex flex-col gap-4 ml-2
    tablet:grid tablet:grid-rows-2 tablet:grid-cols-2 tablet:gap-2 tablet:w-[460px]
    desktop:translate-x-[145px] desktop:translate-y-[-30px]
    '>
          <div className='flex flex-row items-center gap-5 tablet:w-[200px]'>
            <img src={button ? Location : LocationWhite} alt="" className='w-[13.75px] h-5 mr-[6px]' />
            <p className={button ?
              'text-[13px] text-blueish-gray leading-6'
              :
              'text-[13px] text-white leading-6'}>
              {info?.location}
            </p>
          </div>
          <div className='flex flex-row items-center gap-5 tablet:overflow-hidden tablet:w-[240px]'>
            <img src={button ? Chain : ChainWhite} alt="" className='w-5 h-5' />
            <p className={button ?
              'w-[310px] text-[13px] text-blueish-gray leading-6'
              :
              'text-[13px] text-white leading-6'}>
              <a
                className='hover:text-light-blue hover:font-semibold'
                href={info?.html_url}>
                {info?.html_url}
              </a>
            </p>
          </div>
          <div className='flex flex-row items-center gap-5 tablet:w-[200px]'>
            <img src={button ? Social : SocialWhite} alt="" className='w-5 h-[16.25]' />
            <p className={button ?
              'text-[13px] text-blueish-gray leading-6'
              :
              'text-[13px] text-white leading-6'}>
              @{info?.twitter_username}
            </p>
          </div>
          <div className='flex flex-row items-center gap-5 tablet:w-[200px]'>
            <img src={button ? Company : CompanyWhite} alt="" className='w-5 h-5' />
            <p className={button ?
              'text-[13px] text-blueish-gray leading-6'
              :
              'text-[13px] text-white leading-6'}>
              @{info?.company}
            </p>
          </div>
        </div>
  )
}

export default LocationToCompany