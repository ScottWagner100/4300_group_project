import '../resources/Error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return(
        <div className="error">
            <h1 className="error_header">404</h1>
            <h2>page cannot be found</h2>
            <Link to={'/'}>Return Home</Link>
        </div>
    );
}