// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './Box.css'; // Custom CSS file (if needed)

// const Boxofmain = () => {
//   return (
//     <div className="container">
//       <div className='part1'>
//       <div className="card" style={{ width: '18rem', height: '300px' }}>
//        <h1 className='co'><span>33(5)</span></h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>

//       </div>
  
//       <div className="card text-center" style={{ width: '18rem', height: '300px' }}>
//       <h1 className='co'><span>33(6)</span></h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>
//       </div>
  
//       <div className="card text-right" style={{ width: '18rem', height: '300px' }}>
//       <h1 className='co'><span>33(9)</span></h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>
//       </div>
//       </div>
//       <div className='part2'>
//       <div className="card" style={{ width: '18rem', height: '300px' }}>
//       <h1 className='co'><span>33(10)</span></h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>
//         </div>
    
//         <div className="card text-center" style={{ width: '18rem', height: '300px' }}>
//         <h1 className='co'><span>33(11)</span></h1>  
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>
//         </div>
    
//         <div className="card text-right" style={{ width: '18rem', height: '300px' }}>
//         <h1 className='co'> <span>33(19)</span></h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ab aliquid. Maxime consectetur recusandae non excepturi, similique odit quo architecto fugit 
//         iste minus veritatis voluptas consequatur dicta 
//         delectus eaque.</p>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default Boxofmain;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Box.css';
import { useNavigate } from 'react-router-dom';

const Boxofmain = () => {
  const navigate = useNavigate();

  const handleClick = (boxNumber) => {
    const isLoggedIn = localStorage.getItem('sessionId') == null;

    if (isLoggedIn) {
      navigate(`/file`); // Redirect to file page with box number as parameter
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(5)}>
              <div className="card-body">
                <h1 className="co">33(5)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(7)}>
              <div className="card-body">
                <h1 className="co">33(7)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(9)}>
              <div className="card-body">
                <h1 className="co">33(9)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(10)}>
              <div className="card-body">
                <h1 className="co">33(10)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(11)}>
              <div className="card-body">
                <h1 className="co">33(11)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card square-card text-center" onClick={() => handleClick(19)}>
              <div className="card-body">
                <h1 className="co">33(19)</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxofmain;
