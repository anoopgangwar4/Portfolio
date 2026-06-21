import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Anoop Gangwar | MERN Stack Developer Portfolio</title>
        <meta name="description" content="Anoop Gangwar - MERN Stack Developer | Next.js Learner | Exploring AWS. Building AI-powered web apps and scalable systems." />
        <meta name="keywords" content="Anoop Gangwar, MERN Stack, Next.js, AWS, React, Node.js, Full Stack Developer, Portfolio" />
        <meta property="og:title" content="Anoop Gangwar | MERN Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in MERN stack, Next.js, and AWS. Check out my projects and services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anoopgangwar.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Anoop Gangwar',
            jobTitle: 'MERN Stack Developer',
            url: 'https://anoopgangwar.dev',
            sameAs: [
              'https://www.linkedin.com/in/anoop-gangwar-4b2b16253/',
              'https://github.com/anoopgangwar4',
              'https://www.geeksforgeeks.org/profile/gangwarg27z',
            ],
            knowsAbout: ['MERN Stack', 'Next.js', 'AWS', 'React', 'Node.js', 'AI Integration'],
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Services />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
