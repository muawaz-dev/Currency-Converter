import { memo } from "react";
import Select from "react-select";





function InputBox({readOnly, label,options,currency,optionSelected }) {
    const setOptions=options
    const [amount, setAmount] = currency
    const [selectedOption, setSelectedOption] = optionSelected 
    function handleChange(e) {
        if (e.target.value >= 0) {
            setAmount((e.target.value).replace(/^0+/, ""))
            console.log("re render")
        }

    }
    return (
        <div className="rounded-lg bg-opacity-80 h-32 w-96 border-4 bg-red-800 flex flex-col p-2 items-center gap-2 border-black">
            <h3 className="text-lg font-medium text-white">{label}</h3>
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