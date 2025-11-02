import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import WorklyLogo from '../components/WorklyLogo'; // Importación
import PrimaryButton from '../components/PrimaryButton'; // Importación

// --- Pantalla 1: Inicio de Sesión (LoginScreen) ---
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState(''); [cite: 15]
  const [password, setPassword] = useState(''); [cite: 15]
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); [cite: 15]
  
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); [cite: 16]
    
    if (!email || !password) {
      setError('Por favor, ingresa tu correo y contraseña.'); [cite: 17]
      setIsLoading(false);
      return; [cite: 17]
    }
    
    const worklyDomain = '@workly.com';
    const requiredPassword = '123456';
    const emailLower = email.toLowerCase();
    
    if (password !== requiredPassword) {
        setError('Contraseña incorrecta. Intenta con 123456.'); [cite: 19]
        setIsLoading(false);
        return; [cite: 19]
    }
    
    if (emailLower.endsWith(worklyDomain) && emailLower.length > worklyDomain.length) {
        let username = email.substring(0, email.length - worklyDomain.length); [cite: 20]
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1); [cite: 21]
        
        setTimeout(() => {
            setIsLoading(false);
            onLogin({ name: formattedName, email: email });
        }, 1500); [cite: 21]
    } else {
        setError(`El correo debe terminar con ${worklyDomain}.`); [cite: 22]
        setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <WorklyLogo size={40} className="mb-2" />
          <h1 className="text-3xl font-extrabold text-[#17202A]">Bienvenido a Workly</h1>
          <p className="text-gray-500 mt-2 text-center">Conecta con tu futuro digital.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
  
          <div> [cite: 24]
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                [cite_start]placeholder="tu_nombre@workly.com" [cite: 25]
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition duration-150"
              />
            </div>
      
          </div> [cite: 26]

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                [cite_start]placeholder="123456" [cite: 27]
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition duration-150"
              />
            </div>
 
          </div> [cite: 28]

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'} [cite: 29]
          </PrimaryButton>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Contraseña demo: 123456
        </p>
      </div>
    </div>
  ); [cite: 30]
};

export default LoginScreen;
