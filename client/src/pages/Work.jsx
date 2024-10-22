import '../assets/css/Work.css';
import workImg from '../assets/images/img1.webp';

export default function Work() {

    const rows = [
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
    ]

    return (
        <section className='work'>
            <div className='work-box'>
                {rows.map((row, index) => (
                    <div key={index} className='work-row'>
                        <img src={row.img} alt={row.text} />
                        <div className='work-text'>
                            <span>{row.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}