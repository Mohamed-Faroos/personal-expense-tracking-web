import React from 'react';

interface SuccessPopupProps {
    isOpen: boolean;
    title?: string;
    description?: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isOpen = true, title, description, buttonLabel, onButtonClick }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
                <h2 className="text-xl text-green-400 font-bold mb-4">{title}</h2>
                <p className="mb-6">{description}</p>
                <button
                    onClick={onButtonClick}
                    className="bg-zinc-800 text-white px-4 py-2 cursor-pointer rounded hover:bg-zinc-600"
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
};

export default SuccessPopup;
