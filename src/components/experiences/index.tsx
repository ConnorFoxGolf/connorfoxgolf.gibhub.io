import React from 'react';
import { Link } from 'react-router-dom';
// import { popup_image } from 'assets/js/main.js';
import microsoft from 'assets/img/microsoft.png';
import eecs485 from 'assets/img/eecs485.png';
import amazon from 'assets/img/amazon.png';
import garmin_instinct_tactical from 'assets/img/garmin_instinct_tactical.jpg';
import garmin_aoem from 'assets/img/garmin_aoem.jpg';
import croma_lab from 'assets/img/croma_lab.png';
import mrover_rover from 'assets/img/mrover_rover.jpg';
import mrover_rover_andrew from 'assets/img/mrover_rover_andrew.jpg'
import um_seal from 'assets/img/um_seal.png';
import um_wolverine2 from 'assets/img/um_wolverine2.jpg';
import tecnun from 'assets/img/tecnun.png';
import mrover_navigation_simulator from 'assets/img/mrover_navigation_simulator.png';
import website from 'assets/img/website.png';
import mia from 'assets/img/mia.png';
import table from 'assets/img/table.jpg';

export default function Experiences(): JSX.Element {
  return (
    <>
      {/* Work Experience */}
      <div id="work-expereince" className="experience-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Work Experience</h2>
              <hr />
            </div>
          </div>

          <div id="microsoft-experience" className="row experience-item-first">
            <div className="col-xs-12 mobile-only experience-image-container">
              <img className="experience-image" src={microsoft} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Software Engineer</h4>
                <h5>Microsoft - Redmond, WA</h5>
                <h5>January 2020 - present</h5>
              </div>
              <div className="experience-description">
                <p>
                  I currently work on the Azure Privileged Identity Management team where I help keep millions of users' identities secure in their day-to-day work.
                  I am mainly focused on front-end web development which allows me to pursue my passion for creating impactful user interfaces.
                  I am also exploring how our team can migrate from KnockoutJS to React within the constraints of internal frameworks in order to have a more performant and maintainable service.
                  I recently redesigned our team's end to end UI test project to increase reliability and maintainability through statelessness and object-oriented paradigms such as abstraction, encapsulation, and polymorphism.
                  Additionally, I am improving our onboarding process by developing more robust documentation, a concrete on-call training guide, and serving as an onboarding buddy and mentor for our newest engineers.
                </p>
                <p>
                  <em>Technical skills</em>: Typescript, KnockoutJS, React, C#, Sinon, Jasmine, Mocha, HTML, CSS, Azure Pipelines, Git
                </p>
              </div>
            </div>
            <div className="col-md-3 desktop-only experience-image-container">
              <img className="experience-image" src={microsoft} />
            </div>
          </div>

          <div id="gsi-experience" className="row experience-item">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img className="experience-image" src={eecs485} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Graduate Student Instructor - Web Systems</h4>
                <h5>University of Michigan - Ann Arbor, MI</h5>
                <h5>August - December 2020</h5>
              </div>
              <div className="experience-description">
                <p>
                  I worked on the staff for EECS 485 - Web Systems as a Graduate Student Instructor (GSI) where I taught students introductory web development concepts such as server and client-side dynamic pages, web security, and MapReduce.
                  A new focus for us was adding how to use cloud computing technologies such as AWS for scaling up web applications which we taught through hands on labs.
                  On top of the normal responsiblities of being a GSI such as office hours and helping students with className concepts, I was responsible for coordinating logistics for the exams and quizzes which was of particular importance as we temporarily moved to a completely remote offering of the course.
                </p>
                <p>
                  <em>Technical skills</em>: JavaScript, React, Python, Git
                </p>
              </div>
            </div>
          </div>

          <div id="amazon-experience" className="row experience-item">
            <div className="col-xs-12 mobile-only experience-image-container">
              <img className="experience-image" src={amazon} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Software Development Engineer Intern</h4>
                <h5>Amazon.com - Seattle, WA (worked remotely)</h5>
                <h5>May - July 2020</h5>
              </div>
              <div className="experience-description">
                <p>
                  I interned at Amazon for the summer of 2020 working on the Offer Listing Service team within the eCommerce Foundation group.
                  I was tasked with building an audit tool to track historical data to allow my team's customers to easily query and visualize changes to that data.
                  To implement my solution, I used AWS cloud computing technologies in order to handle large volumes of incoming traffic (the tool is currently handling over 500 transactions per second).
                  I was able to enable continuous deployment of the tool by leveraging industry leading DevOps practices.
                  This project was densley packed with learning opportunities.
                  After the design phase, I presented multiple options along with my proposed design which I had settled on after multiple discussions with my teammates.
                  This design meeting was a big wake-up call for me.
                  Over the first few weeks of my internship I spent a lot of time fully understanding the problem I was trying to solve, however I failed to fully view the problem from the perspective of my customers which was a point drilled home at my design review.
                  Moving forward, I had multiple meetings with my customers throughout the remainder of my internship which proved vital for building a product that they wanted to use.
                  On the more technical side of things I learned many new skills involved in writing enterprise level software such as injection and mocking for unit testing.
                </p>
                <p>
                  <em>Technical skills</em>: Java, AWS Cloud Computing (Lambda, Kinesis Firehose, S3, SNS, CloudFormation), JUnit, Git
                </p>
              </div>
            </div>
            <div className="col-md-3 desktop-only experience-image-container">
              <img className="experience-image" src={amazon} />
            </div>
          </div>

          <div className="row experience-item">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img className="experience-image" src={garmin_instinct_tactical} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Software Engineer Intern</h4>
                <h5>Garmin International, Outdoor Department - Olathe, KS</h5>
                <h5>May - August 2019</h5>
              </div>
              <div className="experience-description">
                <p>
                  During the summer of 2019, I returned to Garmin, this time in the Outdoor department, on the high-level software team responsible for the outdoor smartwatches.
                  The focus of my internship was developing graphical representations of in-activity metrics for the next generation of outdoor and fitness smartwatches.
                  In other words, I created data fields that included gauges, graphs, dials, etc. to visually represent the data available to the customer during activities.
                  Another feature that I worked on was implementing stealth mode on the Instinct Tactical.
                  This feature hides GPS data from external use in order to comply with military regulations while still allowing all on-device features to remain functional.
                </p>
                <p>
                  <em>Technical skills</em>: C, Monkey C, Git
                </p>
              </div>
            </div>
          </div>

          <div className="row experience-item">
            <div className="col-xs-12 mobile-only experience-image-container">
              <img className="experience-image" src={garmin_aoem} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Software Engineer Intern</h4>
                <h5>Garmin International, Automotive OEM - Novi, MI</h5>
                <h5>April - August 2018</h5>
              </div>
              <div className="experience-description">
                <p>
                  For my first internship I worked at Garmin International in the Automotive OEM department as a software engineer intern during the summer of 2018.
                  I was on the navigation app UI team and I primarily worked on building developer tools to increase productivity.
                  My first major project was to create a tool to automatically download all libraries necessary for debugging off of an automotive head unit after a software crash.
                  This effectively eliminated a 15 minute manual step from the debugging proces.
                  Next, I worked on automatically creating log files when developers inserted a flashdrive into the head unit in order to record any problems that occured in field testing.
                  My largest project was to develop an automated testing framework to simulate interactions between Garmin's navigation app and the rest of the head unit.
                  I also implemented multiple customer facing features such as providing screenshot previews of map locations.
                </p>
                <p className="technical-skills">
                  <em>Technical skills</em>: C++, Python, Qt, Squish GUI testing, Git
                </p>
              </div>
            </div>
            <div className="col-md-3 desktop-only experience-image-container">
              <img className="experience-image" src={garmin_aoem} />
            </div>
          </div>
        </div>
      </div>

      {/* Research Experience */}
      <div id="research-expereince" className="experience-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Research Experience</h2>
              <hr />
            </div>
          </div>

          <div className="row experience-item-first">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img className="experience-image" src={croma_lab} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Research Assistant</h4>
                <h5>Crowds and Machines Lab - Ann Arbor, MI</h5>
                <h5>January 2019 - May 2020</h5>
              </div>
              <div className="experience-description">
                <p>
                  I conducted research on hybrid intelligence systems (combining human and artificial intelligence) and human-computer interaction in the <a href="http://croma.eecs.umich.edu/croma.html">Crowds and Machines (CROMA) Lab</a> advised by <a href="http://croma.eecs.umich.edu/index.html">Dr. Walter S. Lasecki</a>.
                </p>
                <p>
                  My most recent project was using machine learning for conversation disentanglement which is the separation of distinct conversations that have occurred in the same thread over the same period of time.
                  <a href="https://www.aclweb.org/anthology/P19-1374/">Previous work</a> had already proven this to be possible with high accuracy however it took 255 hours of human effort to annotate the dataset and the evaluation was done on conversation within the same domain as the training data.
                  Our goal was to learn if it was possible to obtain a similar accuracy in new domains with minimal human effort.
                  We proposed using transfer learning to leverage the original dataset and then training the model on a small set of data in the new domain.
                  We aimed to require users to spend on the order of one hour or less annotating data in a new domain in order to achieve high accuracy conversation disentanglement in that new domain.
                  In order to so, we theorized that choosing the right data to annotate was critical (e.g. a single untangled conversation will likely not be as informative as a heavily entangled conversation).
                  While it made sense that training on more entangled data was likely better, there was a number of problems with proving this that I solved.
                </p>
                <p>
                  First, I had to collect data large amounts of data about IRC channels.
                  The primary reason for identifying channels in new domains and collecting logs from these channels.
                  I also used this data to characterize the IRC space.
                  For example I determined the proportion of channels that had logs (even if they weren't accessible) as we felt that if channel admins cared enough to keep around logs, disentangling those logs would be of interest to them.
                  This was one way we motivated our research.
                </p>
                <p>
                  Second, there existed no metric for comparing the level of entanglement of threads.
                  Thus, I conceptualized two metrics to do this - the average number of conversations at a time instant in a thread and the link intersection ratio of a thread.
                  If we annotate a conversation, we create "links" from a message to the message that it is in response to.
                  A link intersection occurs whenever two links span messages in the same time range (thus indicating that two conversations were occuring at overlapping times).
                  While these metrics matched our intuition for what constitutes and more entangled conversation, I still had to prove their effectiveness.
                  Thus, I used the strong correlation between these metrics and other metrics that we would expect to be affected by the entanglement of a thread (e.g. number of messages per minute, number of username references in messages, etc.) to motivate the usefullness of my custom metrics.
                </p>
                <p>
                  Lastly, now that I had these metrics, I was able to tackle our next problem which was proving that we could use them to determine which portions of conversations users should annotate and later train the model on to most effectively increase the accuracy of the model in the new domain.
                  There were a number of elements to this.
                  One was showing a strong correlation between the calculated entanglement of a thread with the original model (only transfer learning) and the trained model (transfer learning plus training in the new domain) because it would be counterproductive to annotate all the data to find the most entangled data to annotate only that data.
                  Another important aspect was running experiments to determine the effectiveness of training on different amounts of data and various levels of entangled data.
                  We will use these results to guide our suggestion for choosing data to annotate for new users in new domains.
                </p>
                <p>
                  Previously I also did research in the space of image annotation tools where I worked on two main projects.
                  First, I worked on an image annotation tool that aggragated crowd worker's responses for a particle filtering task to reconstruct 3D scenes from 2D images particularly geared towards images of vehicles.
                  This would allow us to train autonomous vehicles using already existing videos from the perspective of a car driving on the road rather than needing to go collect that data manually.
                  This is particularly interesting because we can use videos of accidents (or "close calls") to train autonomous vehicles rather putting cars into this situation purposefully in order to collect that data.
                  My work on this project primarily involved making improvements to the UI so that it was easier to use for our target audience - crowd workers.
                  Initial testing with expert annotators showed that our improvements led to a 30% increase in accuracy.
                </p>
                <p>
                  The second project focused on the generalization of image annotation tools.
                  We decided to look into what made image annotation tasks difficult and we found that there were two main types of challenges: challenges caused by the properties of the image (e.g. low color contrast) being annotated and challenges caused by the goal of the annotation task (e.g. boundary identification).
                  This led to us developing the concepts of image property categories and task requirement categories that are found across domains of image annotation tasks.
                  From these categories, we developed a test harness which should guide the design of image annotation tools and testbeds that wish to generalize across a range of domains.
                  This work was published and presented at UIST 2019 and the abstract can be found <a href="files/towards_universal_evaluation_of_image_annotation_interfaces.pdf">here</a>.
                </p>
                <p className="technical-skills">
                  <em>Technical skills</em>: JavaScript, JQuery, HTML, CSS, Python, LaTex, PHP, Git
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Experience */}
      <div id="leadership-expereince" className="experience-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Leadership Experience</h2>
              <hr />
            </div>
          </div>

          <div id="mrover-advisor-experience" className="row experience-item-first">
            <div className="col-xs-12 mobile-only experience-image-container">
              <img className="experience-image" src={mrover_rover} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Software Technical Advisor</h4>
                <h5>Michigan Mars Rover Team - Ann Arbor, MI</h5>
                <h5>June 2019 - December 2020</h5>
              </div>
              <div className="experience-description">
                <p>
                  When I joined the <a href="https://mrover.org">Michigan Mars Rover Team (MRover)</a>, I was first beginning my career as a computer scientist.
                  Over the first three I had grown both technically and personally through contributing to the development of the rover's codebase.
                  A large part of my learning came through the mentorship of more senior members on the team.
                  My last year and a half, I was one of the most seniored members on the team and I loved being able to give back to the team by passing on my knowledge to younger members.
                  I did this through both providing one-on-one mentoring to students and by presenting technical material to the team.
                  I was also tasked with providing feedback at design reviews and advising the new team leadership based on my past experiences on the team.
                </p>
                <p>
                  Another key responsibility of being a technical advisor was looking at improving the team from a big picture perspective.
                  Instead of being primarily concerned with making sure our team scored as high as possible at the current year’s competition, I focused on the long term growth and success of the team.
                  Some ways I did this was helping restructure the team where necessary as we grew, aiding the team by influencing technical and non-technical projects that allowed us to become more sophisticated and fight stagnation, and increasing member retention.
                  One example is that I introduced new project management strategies into our workflow.
                  We used GitHub to manage our codebase which has many built in features for managing projects such as issue tracking.
                  Thus, it was a natural transition to start using these features with our existing projects.
                  I first prototyped my proposed workflow with a project I was working on to get a proof of concept and then helped the software leads start using them for their projects.
                  This improved our ability to track the progress of our work and delegate tasks to members.
                  This also facilitated our transition to remote work during the pandemic.
                </p>
              </div>
            </div>
            <div className="col-md-3 desktop-only experience-image-container">
              <img className="experience-image" src={mrover_rover} data-target="#exampleModalCenter" data-toggle="modal" alt="MRover Software Technical Advisor" />
            </div>
          </div>

          <div id="mrover-lead-experience" className="row experience-item">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img className="experience-image mobile-only" src={mrover_rover_andrew} alt="MRover Autonomous Navigation Lead" />
              <img className ="experience-image desktop-only" src={mrover_rover_andrew} data-target="#exampleModalCenter" data-toggle="modal" alt="MRover Autonomous Navigation Lead" />
              </div>
              <div className ="col-xs-12 col-md-9 experience-text">
              <div className ="experience-info">
              <h4 className ="job-title">Autonomous Navigation Lead</h4>
              <h5>Michigan Mars Rover Team - Ann Arbor, MI</h5>
              <h5>March 2018 - June 2019</h5>
              </div>
              <div className ="experience-description">
              <p>
              I was named the lead of the Autonomous Navigation subteam for my second season on the <a href="https://mrover.org">Michigan Mars Rover Team (MRover)</a>.
              My primary responsibility was the successful design and implementation of the autonomous navigation system.
              I had to ensure that we were meeting all of our design requirements set by our systems engineering team and that the implementation of those designs would be completed within our allocated budget and met all of the critical deadlines set by our executive board.
              All of these things were tasks I was capable of performing for myself, however I was no longer just taking care of myself.
              I was now managing a team of 17 undergraduate students with varying programming backgrounds that I had to plan for and delegate work to
              Initially I thought that I was going to be able to excel in this role because I was an expert in the subject matter for our subteam.
              This was far from true.
              My first semester as lead, I struggled greatly to bring out the best in my members due to a steep learning curve in our teams tools, a lack of experience on my part in properly delegating tasks, and wavering commitment from some members.
              Our team’s progress was minimal and I was running out of ideas on how to change that.
              Two months into the season I reached out to one of the seniors on our team for his advice.
              After a lot of discussion we realized that members were treating my meetings like they were a className lecture.
              We concluded that I was likely hurting the team by trying to provide so much help.
              By slowing down and focusing on group efforts to try to make sure everyone could contribute, I wasn’t allowing some members to reach their full potential.
              At this point I switched to forcing more independence by members.
              Through pushing my members to work outside of their comfort zones and take on larger roles and responsibilities, I improved their confidence.
              This increased not only the overall productivity of our team, but also allowed each member to contribute more than they believed they were capable of.
              </p>
              <p>
              As one of the leads most heavily involved in the preparation for the autonomy task at competition, I was placed in charge of making decision during that 40 minute timed task.
              I was in charge of planning our strategy and making high pressure decisions that highly impacted our team’s performance.
              Ultimately, our team placed third in the autonomy task and produced our best score in team history.
              Throughout the competition I attempted to convince my entire team that we were going to get a perfect score.
              Many of my teammates begrudgingly followed my lead but never truly believed it.
              Despite missing this goal I had set for us, by the end of competition I had proven to my team that we were competing for the top spot in the autonomy task.
              Further, I instilled the belief in them that our system is perennial contender to win the University Rover Challenge - a feat no one thought we could achieve days earlier.
              </p>
              <p>
              More details about my technical contributions to MRover can be found in the <a href="#mrover-project-experience" className ="scroll">Michigan Mars Rover Team</a> section.
              </p>
              </div>
              </div>
            </div>

            <div className="row experience-item">
              <div className="col-xs-12 mobile-only experience-image-container">
                <a href="https://mrover.org">
                  <img className="experience-image" src="img/umrhc.jpg" />
                </a>
              </div>
              <div className="col-xs-12 col-md-9 experience-text">
                <div className="experience-info">
                  <h4 className="job-title">Vice President, Captain</h4>
                  <h5>Michigan Roller Hockey Club - Ann Arbor, MI</h5>
                  <h5>January 2017 - August 2018</h5>
                </div>
                <div className="experience-description">
                  <p>
                    I've played hockey most of my life so getting to represent the Maize and Blue on the floor was a dream come true.
                    I played club roller hockey at Michigan for two years and in my second year I was named vice president and captain.
                    As the vice president of the Michigan Roller Hockey Club, I managed logistical and financial measures necessary for club functionality including communications with Michigan Club Sports, the MCRHL Conference, and various local rinks.
                    As captian, I led practices and mentored the team's less experienced members in order to help team growth.
                  </p>
                </div>
              </div>
              <div className="col-md-3 desktop-only experience-image-container">
                <img className="experience-image" src="img/umrhc.jpg" />
              </div>
            </div>
          </div>
        </div>

      {/* Education */}
      <div id="education" className="experience-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2 className="section-header">Education</h2>
              <hr />
            </div>
          </div>

          <div className="row experience-item-first">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img id="um-seal" className="experience-image" src={um_seal} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Master of Science in Engineering – Computer Science Engineering</h4>
                <h5>University of Michigan - Ann Arbor, MI</h5>
                <h5>January 2020 - December 2020</h5>
                <h5>GPA: 4.00/4.00</h5>
              </div>
              <div className="experience-description">
                <p>
                  I received my Master of Science in Engineering in <a href="https://www.cse.umich.edu">Computer Science and Engineering</a> from the <a href="https://umich.edu">University of Michigan</a> in December of 2020.
                  My coursework included Design and Analysis of Algorithms, Affective Computing, Advanced Compilers, and Computer Networks.
                </p>
                <p>
                  I have recieved the following awards for my academic performance: James B. Angell Scholar.
                </p>
                <p>
                  It's great to be a Michigan Wolverine!
                </p>
                <p className="technical-skills">
                  <em>Technical skills</em>: C, Python, LaTex, Git
                </p>
              </div>
            </div>
          </div>

          <div className="row experience-item">
            <div className="col-xs-12 mobile-only experience-image-container">
              <img id="um-wolverine" className="experience-image" src={um_wolverine2} />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Bachelor of Science in Engineering – Computer Science</h4>
                <h5>University of Michigan - Ann Arbor, MI</h5>
                <h5>September 2016 - December 2019</h5>
                <h5>GPA: 3.94/4.00</h5>
              </div>
              <div className="experience-description">
                <p>
                  I received my Bachelor of Science in Engineering from the <a href="https://umich.edu">University of Michigan</a> after the fall 2019 semester with a major in <a href="https://www.cse.umich.edu">Computer Science</a> and a minor in <a href="https://mdp.engin.umich.edu/mdp-minor/">Multidisciplinary Design</a>.
                  My computer science coursework included Web Systems, Operating Systems, Machine Learning, Conversational Artificial Intelligence, Programming Languages, and Artificial Intelligence.
                  The Multidisciplinary Design Minor focused on approaching design problems from a real-world context by incorporating multiple perspectives in the solution of a problem.
                  In other words it was focused on solving problems that spanned multiple disciplines rather than just computer science.
                  The coursework also focused on systems engineering and leadership/mentorship.
                </p>
                <p>
                  I have recieved the following awards for my academic performance: University Honors (six times), Dean's List (seven times), James B. Angell Scholar (two times), William J. Branstrom Freshman Prize.
                </p>
                <p>
                  Forever Go Blue!
                </p>
                <p className="technical-skills">
                  <em>Technical skills</em>: C++, C, Python, Javascript, HTML, CSS, React, Flask,SQLite, LaTex, Scheme, Prolog, Java, Make, Markdown, Git
                </p>
              </div>
            </div>
            <div className="col-md-3 desktop-only experience-image-container">
              <img id="um-wolverine" className="experience-image" src={um_wolverine2} />
            </div>
          </div>

          <div className="row experience-item">
            <div className="col-xs-12 col-md-3 experience-image-container">
              <img className="experience-image" src={tecnun} alt="Engineering Study Abroad" />
            </div>
            <div className="col-xs-12 col-md-9 experience-text">
              <div className="experience-info">
                <h4 className="job-title">Engineering Study Abroad</h4>
                <h5>Universidad de Navarra - Pamplona, Spain</h5>
                <h5>May - June 2017</h5>
              </div>
              <div className="experience-description">
                <p>
                  During the summer of 2017, I studied abroad in Spain at the <a href="https://www.unav.edu/en/home">University of Navarra</a>.
                  I spent the first half at <a href="https://tecnun.unav.edu">Tecnun</a>, the university's college of engineering in San Sebastian where I visited many leading engineering companies in the surrounding area to learn about foreign business practices.
                  I also took a microrobitics course where I worked with a small group of both Michigan and Tecnun students to program an arduino based robot to autonomously navigate out of a maze.
                  The second half was spent at the University of Navarra's main campus in Pamplona where I studied Spanish language and culture as well as Spain's political issues of the time such as the Catalan independence movement and the introduction of ride-hailing services.
                </p>
                <p className="technical-skills">
                  <em>Technical skills</em>: C++
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Projects */}
        <div id="projects" className="experience-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <h2 className="section-header">Projects</h2>
                <hr />
              </div>
            </div>

            <div id="mrover-project-experience" className="row experience-item-first">
              <div className="col-xs-12 mobile-only experience-image-container">
                <img className="experience-image" src={mrover_navigation_simulator} alt="Michigan Mars Rover Team" />
              </div>
              <div className="col-xs-12 col-md-9 experience-text">
                <div className="experience-info">
                  <h4>Michigan Mars Rover Team</h4>
                  <h5>University of Michigan - Ann Arbor, MI</h5>
                  <h5>September 2017 - December 2020</h5>
                </div>
                <div className="experience-description">
                  <p>
                    The <a href="https://mrover.org">Michigan Mars Rover Team (MRover)</a> is a student run team comprised of individuals across various disciplines at the University of Michigan that designs, builds, and tests a mars rover for competition at the <a href="http://urc.marssociety.org">University Rover Challenge</a> every summer.
                    I joined MRover in the fall of 2017 during my sophomore year and worked with the team in various roles over my four and a half years on the team.
                  </p>
                  <p>
                    In my first year, I joined the Autonomous Navigation subteam where I, along with two other members, was tasked with developing the service that executed all navigation logic for the autonomous mode of the rover.
                    The main goal was to develop code to autonomously drive our rover between marked waypoints avoiding any obstacles in our path given GPS coordinates that were up to 10 meters away from the waypoints.
                    Under our implementation, once at the GPS coordinate we would perform a search for the waypoint marker.
                    This was an extremely challenging project for us as neither my teammates nor I had ever worked on components in such a large project before.
                    As we were approaching the end of my first season on the team, we had made a ton of progress however the complexity of our project had grown so much that anytime we went to add features, we would spend twice as long debugging and fixing what broke by adding the feature.
                    After a  while of this, I sat down with our chief software engineer to discuss how we could better approach the problem to avoid this issue.
                    We decided that using a finite state machine would be a better implementation as it would allow us to model our infinitely complex task as a finite set of states.
                    This gave us the ability to track our state transitions at every instant which allowed us to more quickly identify the set of inputs that was causing unintended behavior in our code.
                    While this refactor was likely best for the long term, it was a large undertaking and we were quickly approaching a critical deadline.
                    Knowing how inefficiently we were currently working, I decided to take on more responsibility and perform the refactor myself.
                    After completing this, I gained a strong sense of ownership of the navigation service and quickly became the expert on the subject within our team.
                    A few weeks later I earned one of the greatest feelings of accomplishment I’ve ever felt when I clicked the “on” button and saw the rover successfully turn and drive to a GPS waypoint in the back parking lot of our machine shop.
                  </p>
                  <p>
                    In large part because of my initiative here and my drive to keep pushing the team to build a better autonomy system, I was named the Autonomous Navigation Lead for the following season and earned myself an invitation to come to competition.
                    Competition gave us some key insights to focus on for the next season.
                    While autonomy mode worked extremely well in our custom built simulator, the integration with the computer vision system and odometry sensors limited our performance.
                    Thus, I turned our focus for the following year to improving the robustness of the system in the real world despite having imperfect inputs.
                    This led to three major improvements to the autonomous navigation system in my second year on the team.
                    First, we improved our navigation algorithms.
                    We gutted our search algorithm and redesigned it to work in a way that handled false-positive without discarding previous work done, and reduced false-negatives, by adding strategic pauses.
                    These pauses made an incredible difference because, by sitting motionless for a few seconds, we gave our computer vision service a chance to view our surroundings while the rover was still (and thus the camera was stabilized).
                    While this was a simple feature to add, it was not easy to determine it was necessary because we did not do enough testing outside of our simulator that first season.
                    The second improvement we made was to increase the accuracy of our odometry data.
                    To achieve this, I designed a sensor fusion algorithm to calculate location and heading estimates.
                    The algorithm calculated multiple estimates and weigh them based on our confidence in the sensors used for each estimate.
                    For example, instead of relying on just our IMU to calculate current heading, we obtained a second estimate through our GPS and accelerometer.
                    We used the GPS’s track angle to determine the absolute heading while we were driving and we found the change in heading while we were turning using the accelerometer.
                    By relying on more sensors, we became less likely to have inaccurate results in theory and this proved to be true in our testing.
                    This also mitigated the risk of a sensor failing as we could detect a sensor failure and set the weight of the estimate(s) based on that sensor to zero.
                    The third improvement was to decrease our reliance on a single computer vision sensor for obstacle detection.
                    I initiated our team’s research into ultrasonic and time of flight sensors which could be used alongside our stereoscopic camera.
                    Since these were cheaper sensors than a stereoscopic camera, it also opened the door for using multiple of them in different positions.
                    This aided in detecting steep drop-offs that we wanted the rover to avoid.
                    After initial research I transitioned this project to some younger members.
                  </p>
                  <p>
                    These efforts proved to be well worth it as our team performed very well this year at competition achieving third place in the autonomy task, our best finish in team history.
                    More details on my role as the Autonomous Navigation Lead from a less technical perspective can be found in the Autonomous Navigation Lead section.
                  </p>
                  <p>
                    My third year on the team I transitioned to being the lead software technical advisor.
                    Details about my role in this position from a less technical perspective can be found in the Software Technical Advisor section.
                    This position also came with many technical challenges as well.
                    First, I had to learn more about the infrastructure of our software system so that I could help maintain it.
                    For example we use a custom build tool that manages dependencies that I add features to as the team’s needs change.
                    Another technical project that I’ve worked on in this role is building the second version of the autonomous navigation simulator web application (pictured<span className="mobile-only">above</span><span className="desktop-only">to the right</span>).
                    The largest problem with our original simulator was that it had a very large learning curve and therefore to most people on the team it was a black box that people were afraid to touch.
                    So I refactored it using a modern web framework, Vue.
                    I also used TypeScript and ESLint in order to reduce the risk of members new to web development from making some of the common mistakes of JavaScript.
                    This refactor also allowed me to more easily add new features to the simulator such as adding noise to our simulated sensors.
                  </p>
                  <p className="technical-skills">
                    <em>Technical skills</em>: JavaScript, TypeScript, Vue, HTML, CSS, C++, Python, Svelte, Git
                  </p>
                </div>
              </div>
              <div className="col-md-3 desktop-only experience-image-container">
                <img className="experience-image" src={mrover_navigation_simulator} alt="Michigan Mars Rover Team" data-target="#exampleModalCenter" data-toggle="modal" />
              </div>
            </div>

            <div className="row experience-item">
              <div className="col-xs-12 col-md-3 experience-image-container">
                <img className="experience-image" src={website} alt="Personal Website" />
              </div>
              <div className="col-xs-12 col-md-9 experience-text">
                <div className="experience-info">
                  <h4>Personal Website</h4>
                </div>
                <div className="experience-description">
                  <p>
                    I developed this website in order to gain experience with web development (and more truthfully because I was looking for a fun project to work on while procrastinate grad school applications).
                    I'm currently working to refactor this website into React.
                    Find a bug? Feel free to let me know through my <a href="index.html#contact">contact form</a> or <a href="mailto:amverni@umich.edu">email</a> me!
                  </p>
                  <p className="technical-skills">
                    <em>Technical skills</em>: HTML, CSS, JavaScript, JQuery, Bootstrap, Git
                  </p>
                </div>
              </div>
            </div>

            <div className="row experience-item" id="mia">
              <div className="col-xs-12 mobile-only experience-image-container">
                <img className="experience-image" src={mia} alt="My Instructional Assistant (Mia)" />
              </div>
              <div className="col-xs-12 col-md-9 experience-text">
                <div className="experience-info">
                  <h4>My Instructional Assistant</h4>
                  <h5>January - April 2019</h5>
                </div>
                <div className="experience-description">
                  <p>
                    In the winter semester of 2019, I took Conversational Artificial Intelligence as my senior design className.
                    Working with <a href="https://clinc.com">Clinc</a> and a small group of students, I built <a href="https://docs.google.com/presentation/d/1fH7zBtLAE_brbpPvGrfjnIudYgc8P53vFjYzqvAg0LI/edit?usp=sharing">My Instructional Assistant (Mia)</a> which is a virtual assistant to tutor students in basic mathematics (primarily the four basic operators).
                    Mia's capabilities include giving concept explanations, providing example problems with solutions, providing practice problems, checking the correctness of answers, and walking students through the solutions of problems.
                  </p>
                  <p>
                    Within this project I focused on three main tasks.
                    First, I created the UI for the project which was a simple client-side dynamic web page.
                    The page had a chatbot-style compoent for users to input (via speech or text) queries and a "chalkboard" for displaying math problems.
                  </p>
                  <p>
                    Second, I designed the state machine that the Clinc platform uses to model conversations.
                    This defined how conversations would flow by defining acceptable responses at each point in a conversation and defining how types of responses would transition users from one conversation state to another.
                  </p>
                  <p>
                    Lastly, I performed the data curation needed for training Clinc's machine learning models.
                    I collected sample queries, classified the query by the type of question (e.g. concept explanation request, example problem request, etc.), and labelled the correct data extraction from the query (e.g. extracting the concept from a concept explanation request).
                    This had to be done for thousands of data points so I utilized crowdsourcing via <a href="https://www.mturk.com">Amazon Mechanical Turk</a>.
                  </p>
                  <p className="technical-skills">
                    <em>Technical skills</em>: Python, JavaScript, HTML, CSS, Dialogflow, Jinja, Git
                  </p>
                </div>
              </div>
              <div className="col-md-3 desktop-only experience-image-container">
                <img className="experience-image" data-target="#exampleModalCenter" data-toggle="modal" src={mia} alt="My Instructional Assistant (Mia)" />
              </div>
            </div>

            <div className="row experience-item">
              <div className="col-xs-12 col-md-3 experience-image-container">
                <img className="experience-image mobile-only" src="img/table.jpg" alt="Hocke Stick Table" />
                <img className ="experience-image desktop-only" src={table} alt="Hocke Stick Table" data-target="#exampleModalCenter" data-toggle="modal" />
                </div>
                <div className ="col-xs-12 col-md-9 experience-text">
                <div className ="experience-info">
                <h4>Hockey Stick Table</h4>
                </div>
                <div className ="experience-description">
                <p>
                In my free time, I built this coffee table with the top made out of old, broken hockey sticks.
                Hopefully this is the first of many personal projects I will be able to share here!
                </p>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image popup modal */}
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="image-popup-caption"></h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img className="modal-content col-xs-10" id="popup-image" />
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
