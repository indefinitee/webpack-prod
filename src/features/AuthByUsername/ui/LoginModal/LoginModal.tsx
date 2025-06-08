import React, { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('login-modal', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginForm onSuccess={onClose} />
        </Suspense>
    </Modal>
);
