import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed insert-0 -z-10">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950
bg-[radial-gradient(ellipse_60%_100%_at_50%_10%,rgba(0,90,200,0.3),rgba(255,255,255,0))]
]
"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
