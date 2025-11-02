import React, { useState } from 'react';
import BottomNavBar from 'src/components/BottomNavBar';
import WorklyLogo from 'src/components/WorklyLogo';
import HomeScreen from 'src/screens/HomeScreen';
import JobsScreen from 'src/screens/JobsScreen';
import CoursesScreen from 'src/screens/CoursesScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

// --- Pantalla 2: Aplicación Principal (MainAppScreen) ---
const MainAppScreen = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home'); [cite: 121]
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen user={user} />; [cite: 122]
      case 'jobs':
        return <JobsScreen />; [cite: 123]
      case 'courses':
        // Pasamos el objeto 'user' para inyectarlo en el formulario de inscripción (Moveremos esto a Context después)
        return <CoursesScreen onSelectCourse={user} />; [cite: 124]
      case 'profile':
        return <ProfileScreen user={user} onLogout={onLogout} />; [cite: 125]
      default:
        return <HomeScreen user={user} />; [cite: 126]
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 bg-white shadow-sm p-4 border-b border-gray-100 z-10 max-w-xl mx-auto">
        <WorklyLogo />
      </header> [cite: 127]
      
      <main className="max-w-xl mx-auto overflow-y-auto" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {renderContent()}
      </main>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  ); [cite: 128]
};

export default MainAppScreen;
