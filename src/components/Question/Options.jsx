import { useState } from "react";
import Option from "./Option";
import { useDispatch } from "react-redux";
import { isQuestionDragableToggle } from "../../features/question/questionSlice";


const Options = ({ state }) => {
    const dispatch = useDispatch();

    const [options, setOption] = state
    const [enterItem, setEnterItem] = useState(null)
    const handleDragOver = (e) => {
        e.preventDefault()
    }
    const handleDragEnter = (e) => {
        e.preventDefault()
        const index = e.target.getAttribute('data-index')
        if (index || index === 0) return setEnterItem(index)
        setEnterItem(null)
    }
    console.log(options);
    const handleDragEnd = (e) => {
        e.preventDefault()
        const index = Number(e.target.getAttribute('data-index'))
        const newInputs = [...options]
        if (
            (index || index === 0)
            && (enterItem || enterItem === 0) &&
            (index !== enterItem) &&
            (!newInputs[enterItem].isOption)
        ) {
            const temp = newInputs[index]
            newInputs[index] = newInputs[enterItem]
            newInputs[enterItem] = temp
            setOption(newInputs)
        }
        dispatch(isQuestionDragableToggle())
    }
    const handleData = ({ value, index }) => {
        const newInputs = [...options]
        console.log({ value, index });
        if (newInputs[index].isOption) {
            newInputs[index].isOption = false;
            newInputs.push({
                id: Math.random() * 100000,
                value: "",
                isOption: true
            })
        }
        newInputs[index].value = value
        setOption(newInputs)
    }

    const handleDelete = (index) => {
        const newInputs = [...options]
        newInputs.splice(index, 1)
        setOption(newInputs)
    }

    return (
        <div onDragOver={handleDragOver} >
            {
                options.map((question, index) => (
                    <Option handleDelete={handleDelete} isOption={question.isOption} index={index} handleData={handleData} onDragEnd={handleDragEnd} onDragEnter={handleDragEnter} key={question.id} value={question.value} />
                ))
            }
        </div>
    );
};

export default Options;