import React, { FC, ReactElement } from 'react';

type NavbarProps = {
    name: string;
    styleNavbar?: string;

}

const Navbar: FC<NavbarProps> = ({ name, styleNavbar }): ReactElement => {
    return (
        <div className={styleNavbar}>{name}</div>
    )
};

export default Navbar;