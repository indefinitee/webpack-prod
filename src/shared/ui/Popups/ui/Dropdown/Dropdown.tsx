import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { AppLink } from '../../../AppLink/AppLink';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                            disabled={item.disabled}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={item.href}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
