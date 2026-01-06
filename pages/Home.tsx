import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustedBy from '../components/TrustedBy';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

interface HomeProps {
  onShowToast: (message: string) => void;
}

const Home: React.FC<HomeProps> = ({ onShowToast }) => {
  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px"
    });

    const hiddenElements = document.querySelectorAll('.reveal-section');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      
      <div className="reveal-section">
        <Services />
      </div>
      
      <div className="reveal-section">
        <TrustedBy />
      </div>
      
      <div className="reveal-section">
        <Testimonials />
      </div>
      
      <div className="reveal-section">
        <Contact onShowToast={onShowToast} />
      </div>
    </>
  );
};

export default Home;