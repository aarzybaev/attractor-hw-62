import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>This is the about page content. Quisque euismod quam vel sapien bibendum, ac malesuada velit bibendum.
        Phasellus eget tortor hendrerit, condimentum tellus sed, eleifend elit.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Position: CEO</p>
              </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Position: CTO</p>
              </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
              <div className="card-body">
                <h5 className="card-title">Bob Johnson</h5>
                <p className="card-text">Position: CFO</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;