import React, { createContext, useContext, useState } from 'react';

const ConsultationModalContext = createContext({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
});

export const useConsultationModal = () => useContext(ConsultationModalContext);

export const ConsultationModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ConsultationModalContext.Provider>
    );
};
