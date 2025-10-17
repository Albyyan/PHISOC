import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-logo">
        <div>UNSW</div>
        <div>PHILOSOPHY</div>
        <div>SOCIETY</div>
      </div>
      
      <div className="about-content">
        <h2>UNSW Philosophy Society | Literary & Arts Journal</h2>
        <p>
          UNSW Philosophy Society is a literary and arts journal dedicated to 
          fostering cultural flourishing through essays, poetry, art, and 
          philosophical analysis.
        </p>
        <p>
          We believe in the power of ideas to shape our understanding of the world. 
          Our society brings together students, academics, and thinkers who share 
          a passion for exploring the fundamental questions of human existence.
        </p>
        <p>
          Join us for weekly discussions, annual competitions, and our flagship 
          publication featuring the best philosophical and literary work from the 
          UNSW community.
        </p>
        <a href="#" className="btn-signup">
          Sign up now to get access to the library of members
        </a>
      </div>
    </section>
  );
}