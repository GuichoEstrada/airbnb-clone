import React, { useState } from 'react'

import './DatePicker.scss'

import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useHistory } from 'react-router';

function DatePicker() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='datepicker'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2><PeopleIcon className='people-icon'/>Number of guests</h2>
            <input className='datepicker-input' min={0} defaultValue={2} type='number' />
            <Button onClick={() => history.push('/search')} className='date-search'>Search Airbnb</Button>
        </div>
    )
}

export default DatePicker;
