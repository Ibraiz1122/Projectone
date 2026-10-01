import { useState } from 'react';
import type { NavPage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DriveBookingModal } from './components/DriveBookingModal';
import { BinPlacementModal } from './components/BinPlacementModal';
import { Home } from './pages/Home';
import { ClothingDrivePage } from './pages/ClothingDrivePage';
import { HostBinPage } from './pages/HostBinPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [isDriveModalOpen, setIsDriveModalOpen] = useState<boolean>(false);
  const [isBinModalOpen, setIsBinModalOpen] = useState<boolean>(false);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-800 font-sans">
      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDriveModal={() => setIsDriveModalOpen(true)}
        onOpenBinModal={() => setIsBinModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenDriveModal={() => setIsDriveModalOpen(true)}
            onOpenBinModal={() => setIsBinModalOpen(true)}
          />
        )}

        {currentPage === 'clothing-drive' && (
          <ClothingDrivePage
            onOpenDriveModal={() => setIsDriveModalOpen(true)}
          />
        )}

        {currentPage === 'host-bin' && (
          <HostBinPage
            onOpenBinModal={() => setIsBinModalOpen(true)}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDriveModal={() => setIsDriveModalOpen(true)}
        onOpenBinModal={() => setIsBinModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DriveBookingModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
      />

      <BinPlacementModal
        isOpen={isBinModalOpen}
        onClose={() => setIsBinModalOpen(false)}
      />
    </div>
  );
}

export default App;
