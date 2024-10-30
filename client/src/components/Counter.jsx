import '../assets/css/Counter.css';
import CountUp from 'react-countup';

function Counter() {
  const counts = [
    // { title: 'Company Established', count: 2005 },
    { title: 'Projects Done', count: 225 },
    { title: 'Happy Clients', count: 150 },
    { title: 'Business Partners', count: 25 }
  ];

  return (
    <div className='counter-gen-div'>
      <div className='counter-box'>
        {counts.map((item, index) => (
          <div key={index} className='counter-item'>
            <h1>
              <CountUp start={0} end={item.count} duration={2.5} enableScrollSpy scrollSpyOnce />
            </h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
