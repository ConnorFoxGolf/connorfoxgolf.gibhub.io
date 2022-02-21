import React from 'react';
import About from './about';
import ContactForm from './contactForm';
import SectionHeader from 'components/shared/sectionHeader';
import SocialMedias from './socialMedias';

export default function Home(): JSX.Element {
  return (
    <>
      <About />

      <div id="contact">
        <div className="container">
          <SectionHeader header="Contact" />
          <ContactForm />
          <SocialMedias />
        </div>
      </div>
    </>
  );
}
