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
const Cloze = () => {


    const [title, setTitle] = useState('')
    const [options, setOption] = useState(init)
    return (
        <>
            <div className='my-5  w-full'>
                <input disabled className='input' placeholder='Enter you question?' type="text" />
            </div>
            <Title state={[title, setTitle]} />
            <Options state={[options, setOption]} />

        </>
    );
};

export default Cloze;