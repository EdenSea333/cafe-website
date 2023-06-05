import './title.css';
import Carousel from '../carousel/index';
function Title() {
    return (
        <div className='title_container'>
            <span className='hero_title'>Eclectique Marseille</span>
            <span className='cafe_title'>Cafe in Marseille</span>
            <a href='/'><span className='cafe_contact'>CONTACT US</span></a>
            <div className='slide_box'><Carousel /></div>
        </div>
    );
}

export default Title;