import React, { FC, ReactElement, useEffect, useState } from 'react';
import ViewSeat from './ViewSeats'

type SearchResultProps = {
    datas?: any
}

type TotalSeats = {
    totalSeats: number
}

const SearchResult: FC<SearchResultProps> = ({ datas }): ReactElement => {
    const [seats, setSeats] = useState(0)
    const [mounted, setMounted] = useState<boolean>(false);
    const [canceled, setCancel] = useState<boolean>(true);

    const toggle = () => {
        setMounted(!mounted)
    };


    const cancel = () => {
        setCancel(!mounted)
    };

    const viewSeatsClickHandle = (totalSeats: number) => {
        setSeats(totalSeats)
    }


    return (
        <React.Fragment>
            <table className="table table-bordered mt-5">
                {
                    datas !== undefined ?
                        datas.map((data: any) => {
                            return (
                                <tbody key={data.name}>
                                    <tr>
                                        <td className="text-left"><h6>{data.name}</h6>
                                            <span>Start: {data.startPoint}<br /></span>
                                            <span>End: {data.endPoint}</span></td>
                                        <td>
                                            <h6>Departure Time</h6>
                                            <span>{data.departureTime}</span>
                                        </td>
                                        <td>
                                            <h6>Arrival Time</h6>
                                            <span>{data.arrivalTime}</span>
                                        </td>
                                        <td>
                                            <h6>Seats Available</h6>
                                            <span>{data.availbleSeats}</span>
                                        </td>
                                        <td>
                                            <h6>Price</h6>
                                            <span><h5>{data.price} Tk</h5></span>
                                        </td>
                                        <td style={{ position: "relative" }}>
                                            <button onClick={() => { viewSeatsClickHandle(data.totalSeats); toggle() }} className="btn btn-primary mt-3">View seats</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        : null}
            </table>
            {/* {mounted && <ViewSeat totalSeats={seats} cancel={() => cancel()} />} */}

        </React.Fragment>
    )
};

export default SearchResult;

