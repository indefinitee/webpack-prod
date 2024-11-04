import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    container?: HTMLElement,
    children: React.ReactNode,
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        container = document.body,
    } = props;

    return (
        createPortal(children, container)
    );
};
