import Dropdown from 'react-bootstrap/Dropdown';
import "../styles.css";

function MyHeader() {
    return (
        <div className="header-main">
            <div className="header-button">
            <p className="header-text">TV Shows</p>
            <Dropdown>
                <Dropdown.Toggle className="genres-button mt-1" variant="dark">Genres</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                    <Dropdown.Item href="#">Series</Dropdown.Item>
                    <Dropdown.Item href="#">Sci-Fi</Dropdown.Item>
                    <Dropdown.Item href="#">Horror</Dropdown.Item>
                    <Dropdown.Item href="#">History</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    );
}

export default MyHeader;
                