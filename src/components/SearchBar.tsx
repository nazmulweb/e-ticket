import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { districts } from '../data/districts';
import { buses } from '../data/busdata'
import SearchResult from './SearchResult'


type FormDataTypes = {
    startPoint: number;
    endPoint: number;
    departureDate: string;
}

type BusDataTypes = {
    id: number,
    name: string,
    startPoint: string,
    endPoint: string,
    type: string,
    departureTime: string,
    arrivalTime: string,
    totalSeats: number,
    availbleSeats: number,
    price: number,
    departureDate: string;
}



let datas: any[] = []

const SearchBar = () => {

    const { register, handleSubmit, errors } = useForm<FormDataTypes>();
    const [busDatas, setBusData] = useState<BusDataTypes[]>([])

    const onSubmit = handleSubmit(({ startPoint, endPoint, departureDate }) => {

        let currentDate = new Date(departureDate).toDateString();
        const filterBusDatas = buses.filter(bus => {
            if (bus.startPoint === Number(startPoint) && bus.endPoint === Number(endPoint) && bus.departureDate === currentDate) {
                datas.push(bus)
            } else {
                return "No bus available"
            }
        })
    });

    useEffect(() => {
        setBusData(datas)
    }, [busDatas])

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-row mt-4">
                    <div className="col-sm-12 col-md-3">
                        <select defaultValue={'DEFAULT'} className="custom-select" name="startPoint" ref={register}>
                            <option value="DEFAULT" >Open this select menu</option>
                            {
                                districts !== undefined ? districts.map((district: { id: number; name: string; }) => {
                                    return <option key={district.id} value={district.id}>{district.name}</option>
                                })
                                    : ""
                            }
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <select defaultValue={'DEFAULT'} className="custom-select" name="endPoint" ref={register}>
                            <option value="DEFAULT" >Open this select menu</option>
                            {
                                districts !== undefined ? districts.map((district: { id: number; name: string; }) => {
                                    return <option key={district.id} value={district.id}>{district.name}</option>
                                })
                                    : ""
                            }
                        </select>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <input className="custom-select" type="date" name="departureDate" defaultValue="test" ref={register} />
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>

            {

                busDatas.length > 0 ? < SearchResult
                    datas={busDatas}
                /> : ""

            }
        </React.Fragment>
    )
};

export default SearchBar;