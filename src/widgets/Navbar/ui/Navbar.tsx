import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
      </div>
    </div>
  )
}
