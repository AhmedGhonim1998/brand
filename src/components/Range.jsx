import React from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { useState } from 'react';
import {Form , Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Range() {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    return (
        <>
            <div className="range">
                <MultiRangeSlider
                    className='Range'
                    ruler='false'
                    barLeftColor='#AFD0FF'
                    barRightColor='#AFD0FF'
                    barInnerColor='#0D6EFD'
                    thumbLeftColor='white'
                    thumbRightColor='white'
                    min={0}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <div className="inputRange d-flex justify-content-center">
                    <InputGroup className="mb-3">
                        <InputGroup.Text className='text-capitalize'>max</InputGroup.Text>
                        <InputGroup.Text>{minValue}</InputGroup.Text>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text className='text-capitalize'>min</InputGroup.Text>
                        <InputGroup.Text>{maxValue}</InputGroup.Text>
                    </InputGroup>

                </div>
                <div className="bntRange mx-auto d-flex flex-column justify-content-center align-items-center">
                <Button variant='secondary' className='secBtn btnProfile mx-auto mt-2 text-capitalize buttonRange'>apply</Button>
                </div>
            </div>
        </>
    )
}
