import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Characters } from '../models/Characters';

const SearchScreen = ({ history }) => {
    const location = useLocation();
    
    const { q = '' }  = queryString.parse(location.search)

    const [inputvalue, setInputvalue] = useState(q);
    const [characters, setCharacters] = useState([])
  
    const handleChange = (e) => {
        const value = e.target.value;
        setInputvalue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${inputvalue}`);
    };


    const getCharacter = () => {
      if(inputvalue.trim() !== ''){
        const value = inputvalue.toLocaleLowerCase()
        const newValue = Characters.filter(character => character.name.toLocaleLowerCase().includes(value) )

        setCharacters(newValue)
        console.log(characters);
      } else {
        setCharacters([])
      }
    }

    useEffect(() => {
      getCharacter()
      console.log(characters);
    }, [q])
    
    
    return (
        <div className="container mt-3">
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <h2>Search</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label w-100">
                            Character:{' '}
                            <input
                                onChange={handleChange}
                                type="text"
                                placeholder="Character Name"
                                className="form-control"
                                autoComplete="off"
                                value={inputvalue}
                            />
                        </label>
                        <button className="btn btn-info w-100" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
