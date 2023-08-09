import { useState } from "react";
import Options from "./Options";
import Title from "./Title";
const init = [
    {
        id: 1,
        value: "",
        isOption: false
    },
    {
        id: 2,
        value: "",
        isOption: true
    }
];
const Categorize = () => {

    const [title, setTitle] = useState('')
    const [options, setOption] = useState(init)
    return (
        <div>
            <Title state={[title, setTitle]} />
            <h6>Categoriz</h6>
            <Options state={[options, setOption]} />

            <div className=" flex justify-between">
                <div>
                    <h6>Items</h6>
                    <Options state={[options, setOption]} />
                </div>
                <div className=" m-1">
                    <h6>Belongs</h6>



                    <select className="input w-48 mb-8" name="" id="">
                        {
                            options.map(op => <option key={op.id} value={op.value}>{op.value}</option>)
                        }
                    </select>

                </div>
            </div>



        </div>
    );
};

export default Categorize;