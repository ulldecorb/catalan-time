import React, { useState} from 'react';
import { useEffect } from 'react';
import { dateConverter } from '../../service';

// export function Converter ({actualDate}) {
export function Converter () {
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(5);
    const [ date, setDate ] = useState('');

    useEffect (() => {
        setDate({minute : minute, hour: hour})
    }, [hour, minute])

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
            <section className='converter__input'>
                <input type="number" name="handler-hour" id="handler-hour" max="12" min="1" onChange={(e) => hourHandler(e)} />
                <input type="number" name="handler-minute" id="handler-minute" max="59" min="0" onChange={(e) => minuteHandler(e)} />
            </section>
            <section className="converter__result">
                <p className="result__text">{dateConverter(date)}</p>
            </section>
        </main>
    )
}

export default Converter;