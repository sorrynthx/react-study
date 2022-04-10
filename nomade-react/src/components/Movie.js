import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// npm i react-router-dom@5.3.0 링크 이동은 react-router-dom 5.3버전 사용
function Movie({id, title, coverImg, summary, genres}) {
    return (
        <div>
            {/* Link는 전체 새로고침 없음, a태그는 전체 새로고침 있음 */}
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <img src={coverImg} alt={title}/>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>

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
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
};

export default Movie;