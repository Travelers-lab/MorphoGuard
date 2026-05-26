import { useState } from 'react';
import { ImageIcon, VideoIcon } from 'lucide-react';

/**
 * AssetPlaceholder
 *
 * Displays a polished placeholder when an image or video asset is missing.
 * Shows the expected filename and a brief description.
 */
export default function AssetPlaceholder({
  type = 'image',
  filename = '',
  description = '',
  className = '',
  aspectRatio = '16/9',
}) {
  const [imgError, setImgError] = useState(false);
  const Icon = type === 'video' ? VideoIcon : ImageIcon;

  const containerStyle = {
    aspectRatio,
    background: 'linear-gradient(135deg, #263C43 0%, #287271 50%, #2A9D8F 100%)',
  };

  if (type === 'image' && filename && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${className}`} style={containerStyle}>
        <img
          src={filename}
          alt={description}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  if (type === 'video' && filename && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gray-100 ${className}`} style={containerStyle}>
        <video
          src={filename}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg flex flex-col items-center justify-center p-6 ${className}`}
      style={containerStyle}
    >
      <div className="text-white/20 mb-3">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <p className="text-white/70 text-sm font-medium text-center leading-relaxed max-w-xs">
        {description}
      </p>
      {filename && (
        <code className="mt-3 px-3 py-1 bg-white/10 backdrop-blur-sm text-white/60 text-xs rounded font-mono">
          /public{filename}
        </code>
      )}
    </div>
  );
}
