import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { dateConverter } from '../../service';
import './converter.css';

export function Converter ({initialDate}) {
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(1);
    const [ date, setDate ] = useState(initialDate);

    useEffect (() => {
        setHour(initialDate.hour);
        setMinute(initialDate.minute);
    }, [initialDate])
    
    useEffect (() => {
        setDate({minute , hour})
    }, [hour, minute]);
    
    const hourHandler = (e) => {
        e.preventDefault();
        setHour(parseInt(e.target.value, 10));
    }
    const minuteHandler = (e) => {
        e.preventDefault();        
        setMinute(parseInt(e.target.value, 10));
    }

    return (
        <main className='converter'>
            <section className="converter__instructions">
                <p className="instructions">
                    Select time to get the catalan time formula 
                </p>
            </section>
            <section className='converter__input'>
                <input type="number" value={hour} className='input__hour' name="handler-hour" id="handler-hour" max="12" min="1" onChange={(e) => hourHandler(e)} />
                <p>:</p>
                <input type="number" value={minute} className='input__minute' name="handler-minute" id="handler-minute" max="59" min="0" onChange={(e) => minuteHandler(e)} />
            </section>
            <section className="converter__result">
                <p className="result__text">{dateConverter(date)}</p>
            </section>
        </main>
    )
}

Converter.propTypes = {
    initialDate: PropTypes.shape({ 
        hour: PropTypes.number,
        minute: PropTypes.number
    })
};

export default Converter;