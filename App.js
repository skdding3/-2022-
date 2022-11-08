
import SearchInput from "./SearchInput.js"
import { fetchLanguage } from "./api.js"

export default function App({ target }) {
    this.state = {
        fetchedLanguage: [],
        SelectedLanguage: []
    }

    this.setState = (nextState) => {
        // TODO: 구현예정
    }

    const searchInput = new SearchInput({
        target,
        initialState: ''
    })
}