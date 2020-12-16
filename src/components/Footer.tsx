import React, { FC, ReactElement } from 'react';

type FooterProps = {
    name: string;
    styleFooter?: string;
}

const Footer: FC<FooterProps> = ({ name, styleFooter }): ReactElement => {
    return (
        <div className={styleFooter}> { name}</div >
    )
};

export default Footer;