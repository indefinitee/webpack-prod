import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    const popoverClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(popupCls.popup, {}, [className, popupCls.popup])}>
            <HPopover.Button
                as="div"
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, popoverClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
