"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
	id: number;
	message: string;
	type: 'success' | 'error' | 'info';
}

interface ToastContextType {
	toasts: Toast[];
	addToast: (message: string, type: 'success' | 'error' | 'info') => void;
	removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = (message: string, type: 'success' | 'error' | 'info') => {
		const newToast: Toast = {
			id: toasts.map((toast) => toast.id).reduce((a, b) => Math.max(a, b), 0) + 1,
			message,
			type };
		setToasts((prev) => [...prev, newToast]);
		setTimeout(() => removeToast(newToast.id), 3000);
	};

	const removeToast = (id: number) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ toasts, addToast, removeToast }}>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};
