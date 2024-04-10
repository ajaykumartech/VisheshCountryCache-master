import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import "./CareerAccordion.css";

function CareerAccordion() {
  return (
    <div style={{ marginTop: "5%", margin: "3%" }}>
      <h4 className="bigText">Work For Us</h4>
      <Accordion className='career-page-accordian-section'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accord-heading">
            Graphic Designer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">
              We are seeking a talented and experienced Graphic Designer to join
              our creative team. The ideal candidate should have a minimum of 2
              years of professional design experience and a strong portfolio
              showcasing their work. You should play a crucial role in creating
              visually appealing and engaging designs that align with our brand
              and marketing objectives.
            </p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>
                Collaborate with the creative team to design marketing
                materials, including print and digital assets.
              </li>
              <li>
                Interpret creative briefs to create engaging designs aligned
                with our brand.
              </li>
              <li>
                Use design software to craft graphics, illustrations, and
                layouts.
              </li>
              <li>Ensure consistent adherence to brand guidelines.</li>
              <li>Stay updated on design trends and best practices.</li>
              <li>Manage multiple design projects, meeting deadlines.</li>
              <li>
                Collaborate with team members to deliver cohesive design
                solutions.
              </li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>
                Minimum 2 years of professional graphic design experience.
              </li>
              <li>Proficiency in Adobe Creative Suite.</li>
              <li>Strong portfolio demonstrating diverse design projects.</li>
              <li>
                Knowledge of design principles, typography, and color theory.
              </li>
              <li>Ability to work in a collaborative team environment.</li>
              <li>Detail-oriented with a commitment to high-quality work.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >
                If you are a creative, detail-oriented, and experienced Graphic
                Designer who can bring fresh ideas to the table, we would love
                to hear from you. Please submit your resume, and a
                cover letter outlining your relevant experience and why you are
                the ideal candidate for this position.
              </p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accord-heading">
            UI/UX Designer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">
              We are looking for a skilled and innovative UI/UX Designer to join our dynamic team.
              The ideal candidate should have a minimum of 3 years of professional experience in user interface and user experience design.
              You should be responsible for creating intuitive and visually stunning interfaces that enhance user satisfaction and drive engagement with our digital products.
            </p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>Collaborate with cross-functional teams to understand project requirements and user needs.</li>
              <li>Translate concepts into wireframes, prototypes, and mockups that lead to intuitive user experiences.</li>
              <li>Conduct user research and usability testing to gather feedback and iterate on designs.</li>
              <li>Create user flows, journey maps, and personas to guide the design process.</li>
              <li>Ensure consistency in design across all digital platforms and devices.</li>
              <li>Stay up-to-date with industry trends, best practices, and emerging technologies in UI/UX design.</li>
              <li>Work closely with developers to implement design solutions and ensure technical feasibility.</li>
              <li>Communicate design ideas and rationale effectively to stakeholders.</li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>Minimum 3 years of professional experience in UI/UX design.</li>
              <li>Proficiency in design tools such as Sketch, Adobe XD, Figma, or similar.</li>
              <li>Strong portfolio showcasing a range of UI/UX design projects.</li>
              <li>Solid understanding of user-centered design principles and methodologies</li>
              <li>Excellent communication and collaboration skills.</li>
              <li>Ability to work in a fast-paced environment and meet deadlines.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >
                If you are a creative thinker with a passion for creating exceptional user experiences, we want to hear from you. Please submit your resume, and a cover letter highlighting your relevant experience and why you are the perfect fit for this role.
              </p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accord-heading">
            Full Stack Developer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">We are seeking a talented and experienced Full Stack Developer to join our tech team. The ideal candidate should have a minimum of 3 years of professional experience in full-stack development, with expertise in both front-end and back-end technologies. You should play a key role in designing, developing, and maintaining our web applications to deliver innovative solutions to our users.</p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>Collaborate with cross-functional teams to understand project requirements and translate them into technical specifications.</li>
              <li>Design and develop scalable and secure web applications using modern programming languages and frameworks.</li>
              <li>Write clean, maintainable code following best practices and coding standards.</li>
              <li>Optimize application performance and troubleshoot issues as they arise.</li>
              <li>Work closely with UI/UX designers to implement pixel-perfect designs and ensure seamless user experiences.</li>
              <li>Integrate third-party APIs and services as needed.</li>
              <li>Conduct code reviews and provide constructive feedback to team members.</li>
              <li>Stay updated on emerging technologies and industry trends in full-stack development.</li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>Minimum 3 years of professional experience in full-stack development.</li>
              <li>Proficiency in front-end technologies such as HTML, CSS, JavaScript, and front-end frameworks like React, Angular, or Vue.js.</li>
              <li>Experience with back-end technologies such as Node.js, Python, Ruby on Rails, or similar.</li>
              <li>Strong understanding of databases and SQL, as well as experience with ORM frameworks.</li>
              <li>Familiarity with version control systems (e.g., Git) and agile development methodologies.</li>
              <li>Excellent problem-solving and debugging skills.</li>
              <li>Ability to work independently and collaboratively in a team environment.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >If you are a self-motivated developer with a passion for building innovative web applications, we'd love to hear from you. Please submit your resume, and a cover letter outlining your relevant experience and why you would be a great addition to our team.</p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CareerAccordion;
