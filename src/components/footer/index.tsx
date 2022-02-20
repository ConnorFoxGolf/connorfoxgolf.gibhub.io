import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* @Connor: replace my name with your name */}
            {/* @Connor: either replace my email with one you want there or let's remove that altogether */}
            <p>Copyright &copy; 2022 &nbsp;&nbsp;&nbsp;&nbsp; Andrew M. Vernier &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:amverni@umich.edu">
              <i className="fa fa-envelope"></i></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



