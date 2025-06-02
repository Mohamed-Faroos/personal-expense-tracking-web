import React from 'react';
import ReactModal from 'react-modal';

interface DeleteConfirmationModalProps {
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onCancel}
            className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative"
            overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            ariaHideApp={false}
		>
			<h2 className="text-lg font-semibold text-gray-800 mb-4">
				Are you sure you want to delete this expense?
			</h2>
			<div className="flex justify-end space-x-4">
				<button
					onClick={onConfirm}
					className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
				>
					Yes, Delete
				</button>
				<button
					onClick={onCancel}
					className="cursor-pointer bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
				>
					Cancel
				</button>
			</div>
		</ReactModal>
	);
};

export default DeleteConfirmationModal;
