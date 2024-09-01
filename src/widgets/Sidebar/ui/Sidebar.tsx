import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapesd] = useState(false);

    const onToggle = () => {
        setCollapesd(prev => !prev);
    }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher/>
        </div>
    </div>
  )
}
