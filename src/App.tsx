import { useState } from 'react';
import { Octokit } from 'octokit';
import { apiProps } from './typings';


// components
import DevBtn from './Devfinder + Button/devFinderBtn';
import SearchBar from './Search Bar/SearchBar';
import ProfileInfo from './Profile Info/ProfileInfo';
import UserNumbers from './User Numbers/UserNumbers';
import LocationToCompany from './Location to Company/LocationToCompany';





function App() {

  const [button, setButton] = useState<boolean>(true);
  const [user, setUser] = useState('');
  const [info, setInfo] = useState({
    avatar_url: '',
    name: '',
    login: '',
    bio: '',
    created_at: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    location: '',
    html_url: '',
    twitter_username: '',
    company: ''
  });

  const handleTheme = () => {
    setButton(prevState => !prevState);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handleSearch = async () => {
    try {
      const response = await octokit.request(`GET /users/${user}`, {
        headers: {
          "content-type": "text/plain",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setInfo(response.data);
      console.log('Repositories:', response.data)
    } catch (error) {
      console.log('the error is:', error);
    }
  }

  const formatDate = (info: apiProps) => {
    const date = new Date(info.created_at);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // Full month name
    const year = date.getFullYear();
    const myDate = `${day} ${month} ${year}`;
    return myDate;
  }

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
    // acima para o vite
  })
  // process.env.NOME DA VARIAVEL - no react normal

  // styles for interpolation
  const main = 'w-full h-[777px] tablet:h-[900px] desktop:h-[900px] flex flex-col justify-center items-center font-space-mono';
  const infoUser = 'w-[347px] tablet:w-[573px] desktop:w-[730px] tablet:h-[480px] desktop:h-[444px] h-[535px] pt-8 desktop:pt-6 tablet:pt-6 pb-10 pl-6 tablet:pl-10 pr-6 tablet:pr-10 rounded-[15px] flex flex-col gap-6 shadow-soft-black'

  return (
    <div className={button ? `${main} bg-transparent` : `${main} bg-almost-black`}>
      <DevBtn button={button} handleTheme={handleTheme} />
      <SearchBar button={button} user={user} info={info} handleInput={handleInput} handleSearch={handleSearch} />
      <div className={button ? `${infoUser} bg-white` : `${infoUser} bg-dark-blue`}>
        <ProfileInfo button={button} info={info} formatDate={formatDate} />
        <p className={button ?
          'tablet:w-[493px] desktop:w-[480px] desktop:translate-x-[145px] desktop:translate-y-[-40px] text-[13px] tablet:text-[15px] text-blueish-gray leading-6 ml-2'
          :
          'tablet:w-[493px] desktop:w-[480px] desktop:translate-x-[145px] desktop:translate-y-[-40px] text-[13px] tablet:text-[15px] text-white leading-6 ml-2'}>
          {info?.bio}
        </p>
        <UserNumbers button={button} info={info} />
        <LocationToCompany button={button} info={info} />
      </div>
    </div>
  )
}

export default App
