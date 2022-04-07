import PropTypes from "prop-types";

// npm i react-router-dom@5.3.0 링크 이동은 react-router-dom 5.3버전 사용
function Movie({title, coverImg, summary, genres}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} alt={title}/>
            <p>{summary}</p>

            <ul>
                {
                    !genres.hasOwnProperty("genres")
                        ? genres.map((g) => (<li key={g}>{g}
                        </li>))
                        : null
                }
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
};

export default Movie;