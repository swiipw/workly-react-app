import React, { useState } from 'react';
import { Mail, User, Phone, CheckCircle, ChevronLeft } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton'; // Importación

// --- Componente Auxiliar: Grupo de Input ---
const InputGroup = ({ label, type = 'text', icon: Icon, placeholder, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition duration-150 shadow-sm"
                required
            />
        </div>
    </div>
);


// --- Componente de Formulario de Inscripción (EnrollmentForm) ---
const EnrollmentForm = ({ course, onCancel, user, onFinish }) => {
    
    // Estado para el formulario y el éxito de la simulación
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        phone: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulación de envío de datos
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 text-center bg-gray-50">
                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full space-y-6">
                    <CheckCircle size={64} className="text-[#1ABC9C] mx-auto animate-fade-in-up" />
                    <h2 className="text-2xl font-extrabold text-[#17202A]">¡Inscripción Exitosa!</h2>
                    <p className="text-gray-600">
                        Te has inscrito a **{course.title}**. Recibirás un correo de confirmación pronto.
                    </p>
                    <PrimaryButton onClick={onFinish}>
                        Volver al inicio
                    </PrimaryButton>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-6 animate-fade-in-up">
            
            <button 
                onClick={onCancel} 
                className="flex items-center text-[#17202A] font-medium hover:text-[#F39C12] transition duration-200"
            >
                <ChevronLeft size={20} className="mr-1" /> Cancelar
            </button>
            
            <h2 className="text-2xl font-extrabold text-[#17202A]">Inscripción: {course.title}</h2>
            <p className="text-gray-600">Completa tus datos para finalizar la inscripción.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                
                <InputGroup 
                    label="Nombre Completo"
                    icon={User}
                    placeholder="Tu nombre"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                />
                
                <InputGroup 
                    label="Correo Electrónico"
                    icon={Mail}
                    type="email"
                    placeholder="ejemplo@workly.com"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
                
                <InputGroup 
                    label="Teléfono Móvil"
                    icon={Phone}
                    type="tel"
                    placeholder="999 999 999"
                    value={formData.phone}
                    name="phone"
                    onChange={handleChange}
                />
                
                <div className="pt-3">
                    <PrimaryButton type="submit" disabled={isLoading}>
                        {isLoading ? 'Procesando Pago...' : 'Confirmar Inscripción'}
                    </PrimaryButton>
                </div>
            </form>
            
        </div>
    );
};

export default EnrollmentForm;
