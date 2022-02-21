import React from 'react';
/* @Connor: delete the andrew line and remove the "// " from the connor line*/
import andrew from 'assets/img/andrew.jpg';
// import connor from 'assets/img/connor.jpg';
import resume from 'assets/files/andrew_vernier_resume.pdf';
import SectionHeader from 'components/shared/sectionHeader';

export default function About() {
  return (
    <div id="about">
      <div className="container">
        <SectionHeader header="About" />
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* @Connor: decide on a picture for here. We will call it connor.jpg. Then change andrew to connor */}
            <img src={andrew} className="img-fluid rounded" id="about-portrait" alt="" />
          </div>
          <div className="col-xs-12 col-md-6 about-info">
            <div className="about-text">
              <p>
                {/* @Connor: remove what I wrote and write your summary here. */}
                Hi!
                My name is Andrew and I am a software engineer at Microsoft working on the Azure Privileged Identity Management team.
                I graduated from the University of Michigan in December 2020 with a master's degree in Computer Science and Engineering.
                My career goal is to use my passions to positively impact the lives of others while challenging myself to continually become a better version of myself.
                My professional interests lie in user experiences, autonomous robotics, and algorithms.
                With my current personal projects, I am exploring mobile applications, automated testing, and refactoring this website into React.
                I have experience with user interfaces, RESTful APIs, and object oriented programming.
                In my free time I love nearly anything sports related and do my best to stay active.
                My favorite sports to follow are hockey and football, especially the Michigan Wolverines.
                Go blue!
                I also enjoy working on DIY projects and playing sub-par golf.
              </p>
              <div className="center-button-wrapper">
                {/* TODO: replace with something more relevant to Connor */}
                <a href={resume} className="custom-button btn btn-primary btn-lg page-scroll ">My Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
