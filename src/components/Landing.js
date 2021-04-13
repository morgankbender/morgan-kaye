// External imports
import React from 'react';
// Local imports
import Nav from './nav/Nav';
import Header from './shared-components/header/Header';
import Section from './shared-components/Section';
import {
  H2,
  Par,
} from './shared-styles/Typography';
import Card from './shared-components/cards/Card';

/**
 * This function compiles all information to be displayed on the landing page.
 * (This is where all the actual content of the page can be found)
 */
function Landing() {
  return (
    <div id="page">
      {/* NAVIGATION */}
      <Nav />

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main>
        <Section divID="about">
          <H2>
            Hello World!
          </H2>
          <Par>
            Welcome to a corner of the Internet owned by me, Morgan
            &quot;Kaye&quot; Bender - a recent computer science graduate
            and social media content creator. In other words, I spend
            most of my days writing code, reading and talking about books,
            taking photos, or doing my best to support women in tech
          </Par>
        </Section>
        <Section divID="portfolio">
          <H2>
            Portfolio
          </H2>
          {/*<Card*/}
          {/*  img={}*/}
          {/*  title={}*/}
          {/*  desc={}*/}
          {/*  link={ } />*/}
        </Section>
        <Section divID="resume">
          <H2>
            Resume
          </H2>
        </Section>
        <Section divID="videos">
          <H2>
            Videos
          </H2>
        </Section>
        <Section divID="contact">
          <H2>
            Contact
          </H2>
        </Section>
      </main>

    </div>
  );
}

export default Landing;
