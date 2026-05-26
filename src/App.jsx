import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import CoreInsight from './components/CoreInsight';
import MethodOverview from './components/MethodOverview';
import RepresentationComparison from './components/RepresentationComparison';
import Experiments from './components/Experiments';
import VideoGallery from './components/VideoGallery';
import KeyFindings from './components/KeyFindings';
import Resources from './components/Resources';
import Citation from './components/Citation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Motivation />
        <CoreInsight />
        <MethodOverview />
        <RepresentationComparison />
        <Experiments />
        <VideoGallery />
        <KeyFindings />
        <Resources />
        <Citation />
      </main>
      <Footer />
    </div>
  );
}
