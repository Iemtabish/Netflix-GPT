import { BG_URL } from '../utils/constants';
import { GptMovieSuggestions } from './GptMovieSuggestions'
import { GptSearchBar } from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className="border border-red-500 size-16">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;