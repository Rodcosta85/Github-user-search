import React from 'react'

interface UserNumbersProps {
    button: boolean,
    info: {
        public_repos: number,
        followers: number,
        following: number
    },

}

const UserNumbers: React.FC<UserNumbersProps> = ({ button, info }) => {

    const numbers = 'w-[290px] tablet:w-[493px] desktop:w-[480px] h-[85px] tablet:h-[88px] p-4 tablet:pt-5 rounded-[10px] flex flex-row tablet:justify-start gap-1 tablet:gap-20 desktop:translate-x-[145px] desktop:translate-y-[-40px]'

    return (
        <div className={button ? `${numbers} bg-transparent` : `${numbers} bg-almost-black`}>
            <div className='w-[79px] h-[48px] flex flex-col justify-center items-center gap-2 tablet:gap-1'>
                <p className={button ?
                    'text-[11px] tablet:text-[13px] text-blueish-gray'
                    :
                    'text-[11px] tablet:text-[13px] text-white'}>
                    Repos
                </p>
                <p className={button ?
                    'text-[16px] tablet:text-[22px] text-almost-black font-bold'
                    :
                    'text-[16px] tablet:text-[22px] text-white font-bold'}>
                    {info?.public_repos}
                </p>
            </div>
            <div className='w-[79px] h-[48px] flex flex-col justify-center items-center gap-2 tablet:gap-1'>
                <p className={button ?
                    'text-[11px] tablet:text-[13px] text-blueish-gray'
                    :
                    'text-[11px] tablet:text-[13px] text-white'}>Followers</p>
                <p className={button ?
                    'text-[16px] tablet:text-[22px] text-almost-black font-bold'
                    :
                    'text-[16px] tablet:text-[22px] text-white font-bold'}>
                    {info?.followers}
                </p>
            </div>
            <div className='w-[79px] h-[48px] flex flex-col justify-center items-center gap-2 tablet:gap-1'>
                <p className={button ? 
                    'text-[11px] tablet:text-[13px] text-blueish-gray' 
                    : 
                    'text-[11px] tablet:text-[13px] text-white'}>Following</p>
                <p className={button ?
                    'text-[16px] tablet:text-[22px] text-almost-black font-bold'
                    :
                    'text-[16px] tablet:text-[22px] text-white font-bold'}>
                    {info?.following}
                </p>
            </div>
        </div>
    )
}

export default UserNumbers