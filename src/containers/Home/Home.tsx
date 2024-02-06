import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to Your Website</h1>
      <p>This is the home page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        ullamcorper
        lectus, sit amet suscipit est. Duis ullamcorper vestibulum dui, eget sodales libero facilisis vel.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Featured Service 1</h5>
                <p className="card-text">Description of the featured service.</p>
              </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Featured Service 2</h5>
                <p className="card-text">Description of the featured service.</p>
              </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Featured Service 3</h5>
                <p className="card-text">Description of the featured service.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;