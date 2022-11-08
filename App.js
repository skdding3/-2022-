
import SearchInput from './SearchInput'

export default function App({ target }) {
    this.state = {
        fetchedLanguage: [],
        SelectedLanguage: []
    }

    this.setState = (nextState) => {
        // TODO: 구현예정
    }

    const SearchInput = new SearchInput({
        target,
        initialState: ''
    })
}