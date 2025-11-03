import React, { useState } from 'react';
// Corregidas las rutas de importación de componentes (están en la misma carpeta src/)
import BottomNavBar from './components/BottomNavBar';
import WorklyLogo from './components/WorklyLogo';
import HomeScreen from './screens/HomeScreen';
import JobsScreen from './screens/JobsScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProfileScreen from './screens/ProfileScreen';

// --- Pantalla 2: Aplicación Principal (MainAppScreen) ---
const MainAppScreen = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
    
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (<HomeScreen user={user} />); // <- Paréntesis añadidos/reafirmados
      case 'jobs':
        return (<JobsScreen />); // <- Paréntesis añadidos/reafirmados
      case 'courses':
        return (<CoursesScreen onSelectCourse={user} />); // <- Paréntesis añadidos/reafirmados
      case 'profile':
        return (<ProfileScreen user={user} onLogout={onLogout} />); // <- Paréntesis añadidos/reafirmados
      default:
        return (<HomeScreen user={user} />); // <- Paréntesis añadidos/reafirmados
    }
  };
    
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 bg-white shadow-sm p-4 border-b border-gray-100 z-10 max-w-xl mx-auto">
        <WorklyLogo />
      </header>
        
      <main className="max-w-xl mx-auto overflow-y-auto" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {renderContent()}
      </main>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default MainAppScreen;
