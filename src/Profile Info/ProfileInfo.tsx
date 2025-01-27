import DefaultAvatar from '../assets/default-avatar.png';
import { apiProps } from '../typings';

interface ProfileInfopProps {
    button: boolean,
    formatDate: (info: apiProps) => string,
    info: apiProps;
}



const ProfileInfo: React.FC<ProfileInfopProps> = ({ button, info, formatDate }) => {
    
    return (
        <div className='w-[233px] h-[70px] flex flex-row justify-between items-center gap-[19px]
        tablet:w-[334px] tablet:h-[117px]
        desktop:w-[690px] desktop:justify-normal
        '>
            <img
                src={info?.avatar_url || DefaultAvatar}
                alt={`the avatar of ${info?.name}`}
                className="w-[70px] h-[70px] rounded-[50px]
                tablet:w-[117px] tablet:h-[117px] tablet:rounded-[60px]
                desktop:w-[130px] desktop:h-[125px] desktop:mt-10
                "/>
            <div className='w-[144px] h-[69px] flex flex-col items-start gap-2
            tablet:w-[300px] tablet:h-[91px] tablet:gap-2
            desktop:w-[600px] desktop:grid desktop:grid-rows-2 desktop:grid-cols-2 desktop:ml-2
            '>
                <h2 className={button ?
                    'w-[220px] tablet:w-[400px] text-[16px] tablet:text-[26px] desktop:text-[26px] text-very-dark-grey font-bold'
                    :
                    'w-[160px] tablet:w-[400px] text-[16px] tablet:text-[26px] desktop:text-[26px] text-white font-bold'}>{info?.name || 'Average Joe/Jane'}</h2>
                <p className='text-[13px] tablet:text-[16px] desktop:text-[16px] text-light-blue desktop:translate-y-[-8px]'>@{info?.login || 'username'}</p>
                <p className={button ?
                    'w-[250px] text-[13px] tablet:text-[15px] desktop:text-[15px] text-middle-gray col-start-2 row-start-1 desktop:mt-2 desktop:ml-12'
                    :
                    'w-[250px] text-[13px] tablet:text-[15px] desktop:text-[15px] text-white col-start-2 row-start-1 desktop:mt-2 desktop:ml-12'
                    }>
                    Joined {info.created_at === '' ? 'in...' : formatDate(info)}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo