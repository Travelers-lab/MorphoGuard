import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';
import AssetPlaceholder from './AssetPlaceholder';
import MediaModal from './MediaModal';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const VIDEOS = [
  {
    title: 'Distributed Forearm Grasping',
    description:
      'The robot lifts objects through coordinated contacts distributed along its forearms.',
    asset: projectConfig.assets.videoForearmGrasping,
    filename: '/public/assets/video_forearm_grasping.mp4',
  },
  {
    title: 'Morphology Regulation in Narrow Spaces',
    description:
      'The robot adjusts whole-body configurations to pass through constrained openings.',
    asset: projectConfig.assets.videoNarrowPassage,
    filename: '/public/assets/video_narrow_passage.mp4',
  },
  {
    title: 'Force-Aware Multi-Object Manipulation',
    description:
      'The robot regulates contact forces while manipulating multiple objects through body-wide interaction.',
    asset: projectConfig.assets.videoMultiObject,
    filename: '/public/assets/video_multi_object.mp4',
  },
  {
    title: 'Sim-to-Real Interaction Execution',
    description:
      'The robot executes morphology-based interaction references transferred from simulation.',
    asset: projectConfig.assets.videoSimToReal,
    filename: '/public/assets/video_sim_to_real.mp4',
  },
];

function VideoCard({ video, onClick }) {
  const [hasVideo, setHasVideo] = useState(null);

  const checkAndPlay = async () => {
    if (hasVideo === null) {
      try {
        const res = await fetch(video.asset, { method: 'HEAD' });
        setHasVideo(res.ok);
        if (res.ok) onClick();
      } catch {
        setHasVideo(false);
        onClick();
      }
    } else {
      onClick();
    }
  };

  return (
    <div className="card card-hover group cursor-pointer" onClick={checkAndPlay} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') checkAndPlay(); }} aria-label={`Play video: ${video.title}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <AssetPlaceholder
          type="video"
          filename={video.asset}
          description={`Placeholder for ${video.filename}`}
          aspectRatio="16/9"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <Play size={22} className="text-primary ml-0.5" />
          </div>
        </div>
      </div>
      <h4 className="text-base font-semibold text-primary mb-1">{video.title}</h4>
      <p className="text-sm text-text-primary/60 leading-relaxed">{video.description}</p>
    </div>
  );
}

export default function VideoGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">Real-Robot Interaction Gallery</h2>
          <p className="body-text">
            Representative demonstrations of Morphology-based whole-body interaction control on
            physical robot tasks.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ delay: idx * 0.1 + 0.1, duration: 0.5 }}
            >
              <VideoCard video={video} onClick={() => openVideo(video)} />
            </motion.div>
          ))}
        </div>

        <MediaModal isOpen={modalOpen} onClose={closeModal} type="video">
          {activeVideo && (
            <video
              className="w-full rounded-xl"
              controls
              playsInline
              preload="metadata"
              src={activeVideo.asset}
            >
              <source src={activeVideo.asset} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {activeVideo && (
            <p className="mt-3 text-center text-sm text-white/70">{activeVideo.title}</p>
          )}
        </MediaModal>
      </div>
    </section>
  );
}
