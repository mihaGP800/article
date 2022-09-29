import React, {FC, useState} from 'react';
import FarmVest from '../../assets/icons/FarmVest.svg'
// import {ReactComponent as FarmVest} from '../../assets/icons/FarmVest.svg'
import s from './Header.module.scss'
import {Size, useWindowSize} from '../../hooks/useWindowSize';
import {Button} from '../buttons/Button';
import {SIZE_FOR_DYNAMIC_UI} from '../../constants';

export const Header: FC = () => {
    const size: Size = useWindowSize();

    const [isVisible, setIsVisible] = useState(false)

    const onIsVisibleMenuChange = () => setIsVisible(!isVisible)
    return (
        <header className={s.header}>
            <div className={s.container}>
                <a href="" className={s.headerLogo}>
                    <img src={FarmVest} alt="Logo"/></a>

                <div className={s.headerMenu}>
                    <nav
                        className={isVisible ? `${s.menuBody} ${s.visible}` : s.menuBody}>
                        <ul className={s.menuList}>
                            <li className={s.menuItem}>
                                <a href="" className={s.menuLink}>Home</a></li>
                            <li className={s.menuItem}>
                                <a href="" className={s.menuLink}>About</a></li>
                            <li className={s.menuItem}>
                                <a href="" className={s.menuLink}>Features</a></li>
                            <li className={s.menuItem}>
                                <a href="" className={s.menuLink}>How it works</a></li>
                        </ul>

                        {size.width! < SIZE_FOR_DYNAMIC_UI &&
                            <Button title='Get Started'/>}
                    </nav>
                </div>

                <div className={s.headerButtons}>
                    <div className={s.column}>
                        <Button title='Sign In' isBorder/>
                    </div>
                    <div className={s.column}>
                        {size.width! > SIZE_FOR_DYNAMIC_UI &&
                            <Button title='Get Started'/>}
                    </div>

                    <button
                        className={isVisible ? `${s.burgerIcon} ${s.changed}` : s.burgerIcon}
                        onClick={onIsVisibleMenuChange}></button>
                </div>
            </div>
        </header>
    );
}