import React, { createContext } from 'react';
import initialMovies from '../const/initialMovies';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {

    const data = { movies: initialMovies }
    return (
        <MoviesContext.Provider value={ data }>
            { children }
        </MoviesContext.Provider>
    )
}
export default MoviesContext;

export { MoviesProvider };