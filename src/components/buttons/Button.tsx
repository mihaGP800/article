import React, {FC} from 'react';
import s from './Button.module.scss';

type ButtonType = {
    title: string
    isBorder?: boolean
}

export const Button: FC<ButtonType> = ({title, isBorder}) => {
    return (
        <button className={isBorder ? `${s.button} ${s.buttonBorder}` : s.button}>{title}</button>
    );
}