import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean,
    onClose?: () => void
    children: ReactNode,
    lazy?: boolean,
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const {
        close,
        isMounted,
    } = useModal({
        isOpen,
        onClose,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
