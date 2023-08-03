import { useEffect, useState } from "react";
import Options from "./Options";
import Title from "./Title";
import { v4 as uuidv4 } from 'uuid';
import { answaresAdd } from "../../features/answare/answareSlice";
import { useDispatch } from "react-redux";
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
const MCQ = () => {
    const [question, setQuestion] = useState({})
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [options, setOption] = useState(init)
    useEffect(() => {
        const nowOptions = [...options];
        nowOptions.pop();
        setQuestion({
            type: 'mcq',
            question: title,
            options: nowOptions?.map((option) => {
                return {
                    id: uuidv4(),
                    option: option.value,
                    value: option.value
                }
            })
        })
    }, [title, options])

    useEffect(() => {
        dispatch(answaresAdd(question))
    }, [question, dispatch])


    return (
        <>
            <Title state={[title, setTitle]} />
            <Options state={[options, setOption]} />
        </>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default MCQ;