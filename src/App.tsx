import React, { useState } from 'react';
import { Music, Youtube, Radio, Menu, X } from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import Sidebar from './components/Sidebar';

function App() {
  const [currentPlatform, setCurrentPlatform] = useState('spotify');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="flex h-screen">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen}
          currentPlatform={currentPlatform}
          setCurrentPlatform={setCurrentPlatform}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <MusicPlayer platform={currentPlatform} />
        </div>
      </div>
    </div>
  );
}

export default App;