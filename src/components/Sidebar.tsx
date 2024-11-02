import React from 'react';
import { Music, Youtube, Radio } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPlatform: string;
  setCurrentPlatform: (platform: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPlatform, setCurrentPlatform }) => {
  const platforms = [
    { id: 'spotify', name: 'Spotify', icon: Music, color: 'green' },
    { id: 'youtube', name: 'YouTube Music', icon: Youtube, color: 'red' },
    { id: 'soundcloud', name: 'SoundCloud', icon: Radio, color: 'orange' }
  ];

  return (
    <div className={`fixed lg:relative z-40 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="h-full w-64 bg-gray-800 p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-8">
          <Music size={32} className="text-purple-500" />
          <h1 className="text-xl font-bold">Music Hub</h1>
        </div>

        <nav className="space-y-2">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.id}
                onClick={() => setCurrentPlatform(platform.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${currentPlatform === platform.id 
                    ? 'bg-gray-700 text-white' 
                    : 'hover:bg-gray-700/50 text-gray-300'}`}
              >
                <Icon size={20} className={`text-${platform.color}-500`} />
                <span>{platform.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-sm text-gray-400 text-center">
              All your music platforms in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;