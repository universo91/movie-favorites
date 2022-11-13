import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Movie = ({ movie }) => {

    const { user, toggleFavoriteMovieToUser } = useContext( UserContext );

    const imgStyles = {
        height: '260px',
        objectFit: 'cover'       
    }
    const cardStyles = {
        marginBottom: '10px'
    }

    const isFavorite = user?.favoriteMovies?.includes( movie.id );
    return (
        <div className="card" style= {cardStyles }>
            <img 
                src={ movie.imageUrl } 
                alt = { movie.title } 
                className= "card-img-top"
                style={ imgStyles }
            />
            <div className="card-body">
                <h4>{ movie.title }</h4>
                { user?.id &&   
                    <button 
                    className={ `btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={ () => toggleFavoriteMovieToUser( movie.id ) }
                    >
                        Favorito
                    </button>
                }
            </div>
        </div>
    )
}

export default Movie
