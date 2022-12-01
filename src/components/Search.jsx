import { useDispatch } from "react-redux"
import { animeActions } from "../store";

const Search = () => {

    const dispatch = useDispatch();

    const onSearch = (value) => {
        if (value.length == 0) {
            dispatch(animeActions.setSearchQuery(null));
        } else {
            dispatch(animeActions.setSearchQuery(value));
        }
    }

    return (
        <div className="mt-4 flex justify-center">
            <div className="flex space-x-3 justify-center items-center border-[#b9e2f7] border-[2px] rounded-sm w-auto px-2">
                <i className="fa fa-search text-[#b9e2f7]"></i>
                <input onChange={(e) => onSearch(e.target.value)} className="bg-[transparent] focus:outline-none text-[yellow] py-1" type="Text" placeholder="Search Anime" />
            </div>
        </div>
    )
}

export default Search