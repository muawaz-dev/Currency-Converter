import { memo, useState } from "react";
import Select from "react-select";





function InputBox({readOnly, label,options,currency,optionSelected }) {
    const setOptions=options
    const [amount, setAmount] = currency
    const [selectedOption, setSelectedOption] = optionSelected 
    function handleChange(e) {
        if (e.target.value >= 0) {
            setAmount(e.target.value)
        }
    }
    return (
        <div className="h-32 w-96 border border-gray-300 flex flex-col p-2 items-center gap-4">
            <h3>{label}</h3>
            <div className="flex">
                <input
                    type="number"
                    value={amount || 0}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter currency..."
                    className="flex-1 mr-2 p-2 text-sm border border-gray-300 rounded"
                    readOnly={readOnly && true}
                />

                <div className="flex-1">
                    <Select
                        options={setOptions}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Select..."
                        className="text-sm"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default memo(InputBox)