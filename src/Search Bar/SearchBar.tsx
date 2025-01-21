import Search from '../assets/icon-search.svg';

interface SearchBarProps {
    button: boolean,
    user: string,
    info: object,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}



const SearchBar: React.FC<SearchBarProps> = ({ button, user, info, handleInput, handleSearch }) => {

    const searchBar = 'w-[347px] tablet:w-[573px] desktop:w-[730px] h-[64px] tablet:h-[69px] desktop:h-[69px] p-3 tablet:pl-6 desktop:pl-6 mb-5 rounded-[15px] flex flex-row justify-evenly items-center shadow-soft-black'
    const input = 'w-[212px] tablet:w-[360px] desktop:w-[350px] h-[25px] p-2 tablet:ml-1 tablet:mr-10 desktop:ml-1 desktop:mr-10 text-[13px] tablet:text-[18px] desktop:text-[18px] font-normal focus:outline-none'


    return (
        <div className={button ? `${searchBar} bg-white` : `${searchBar} bg-dark-blue`}>
            <img src={Search} alt="the symbol of a magnifying glass" className='mr-[2px] tablet:w-6 tablet:h-6' />
            <input
                type="text"
                placeholder='Search Github username...'
                value={user}
                onChange={handleInput}
                className={button ?
                    `${input} text-blueish-gray bg-white placeholder:text-blueish-gray`
                    :
                    `${input} text-white bg-dark-blue placeholder:text-white`
                } />
                <p className={(Object.keys(info).length > 0) ? `hidden` : 'tablet:text-[12px] text-results-red tablet:w-[100px]'}>No results</p>
            <button
                onClick={handleSearch}
                className='w-[84px] tablet:w-[106px] desktop:w-[106px] h-[46px] tablet:h-[50px] desktop:h-[50px] tablet:ml-4 desktop:ml-40 font-bold text-[14px] desktop:text-[16px] text-white rounded-[10px] bg-light-blue hover:bg-hover-blue'>
                Search
            </button>
        </div>
    )
}


export default SearchBar


