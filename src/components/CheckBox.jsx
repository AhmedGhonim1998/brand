import React, { useState } from 'react'

export default function CheckBox({labelName , checkType}) {
    const [checked, setChecked] = useState(false)

    function checkHandler() {
        setChecked(!checked)
    }
    return (
        <>
            <label className='text-capitalize'>
                <input
                    type={checkType}
                    checked={checked}
                    onChange={checkHandler}
                    className='me-2'
                />
                {labelName}
            </label>
        </>
    )
}
