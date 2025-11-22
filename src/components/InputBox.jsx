import { useState } from "react";
import Select from "react-select";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

export default function InputBox({label}) {
    const [amount, setAmount] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
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
                    value={amount}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter currency..."
                    className="flex-1 mr-2 p-2 text-sm border border-gray-300 rounded"
                />

                <div className="flex-1">
                    <Select
                        options={options}
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