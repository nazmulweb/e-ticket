import React, { FC, ReactElement, useEffect, useState } from 'react';
import styles from './viewseats.module.css'

type ViewSeat = {
    totalSeats: number;
    cancel: (text: boolean) => void;
}

const ViewSeats: FC<ViewSeat> = ({ totalSeats }): ReactElement => {

    // const [mounted, setMounted] = useState<boolean>(false);

    // const cancel = () => {
    //     setMounted(!mounted)
    // };

    return (
        <div className={styles.seatWrapper} >
            <div className={styles.cancel} >X</div>
        </div>
    )
};

export default ViewSeats;