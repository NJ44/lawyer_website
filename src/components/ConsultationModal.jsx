import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';
import { useConsultationModal } from '../contexts/ConsultationModalContext';

const ConsultationModal = () => {
    const { isOpen, closeModal } = useConsultationModal();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md px-4"
                    >
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute -top-2 -right-2 md:-right-12 md:top-0 text-white hover:text-gray-200 transition-colors p-2 bg-black/20 rounded-full md:bg-transparent"
                            >
                                <X size={24} />
                            </button>
                            <LeadForm />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;
