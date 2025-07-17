import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed insert-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,120,120,0.4),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
      </div>
    </div>
  );
}

export default App;
