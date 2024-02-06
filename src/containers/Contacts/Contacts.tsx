import React from 'react';

const Contacts :React.FC= () => {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <p>This is the contacts page content. Nullam ut quam nec augue semper ullamcorper. Vestibulum euismod, lacus
        ac
        vehicula tempus, nunc ex tristique justo, id feugiat turpis dui eu velit.</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;