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
            <p>Preview*</p>
            <div dangerouslySetInnerHTML={{ __html: title }} className=' min-h-[40px] p-2 w-full border border-slate-400 rounded'>
            </div>
            <Title state={[title, setTitle]} />
            <Options state={[options, setOption]} />
        </>
    );
};

export default Cloze;