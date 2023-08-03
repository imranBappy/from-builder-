import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AddQuestion from "../components/Question/AddQuestion";
import { useDispatch, useSelector } from "react-redux";
import {
    questionAdd, questionUpdate
} from "../features/question/questionSlice";
import { IoMdAdd } from 'react-icons/io'
import { FaRegSave } from 'react-icons/fa'




/*
// MCQ Data Type
{
    type: 'mcq',
    _id: 1,
    question: "What is your name?",
    options: [
        { _id: 1, option: "A", value: "A" },
        { _id: 2, option: "B", value: "B" }
    ],
}


// Clze Type

{
    type: 'clze',
    _id: 1,
    question: "What is your ____",
    options: [
        {
            _id: 1,
            option: "A",
            value: "A",
        }
    ]
}

*/
const Home = () => {
    const [enterItem, setEnterItem] = useState(null)
    const { questions, isQuestionDragable } = useSelector(state => state.questions)

    const dispatch = useDispatch();
    const handleDragOver = (e) => {
        e.preventDefault()
    }
    const handleDragEnter = (e) => {
        e.preventDefault()
        const index = e.target.getAttribute('data-index')
        if (index || index === 0) {
            setEnterItem(index)
        }
    }
    const handleDragEnd = (e) => {
        e.preventDefault()
        const index = Number(e.target.getAttribute('data-index'))

        if (!isQuestionDragable) return
        if (!(index || index === 0)) return

        const newInputs = [...questions]
        const temp = newInputs[index]
        newInputs[index] = newInputs[enterItem]
        newInputs[enterItem] = temp
        dispatch(questionUpdate(newInputs))
    }
    const handleChange = (e) => {
        const index = Number(e.target.getAttribute('data-index'))
        const newInputs = [...questions]
        newInputs[index].title = e.target.value
    }


    const addQuestion = () => {

        dispatch(questionAdd({
            id: questions.length + 1,
            title: "Title 3",
        }))
    }

    return (
        <>
            <div className=" mb-10">
                <Navbar />
                <div onDragOver={handleDragOver} className=" max-w-4xl mx-auto">
                    {
                        questions.map((question, index) => (<AddQuestion id={question.id} index={index} handleChange={handleChange} onDragEnd={handleDragEnd} onDragEnter={handleDragEnter} key={question.id} title={question.title} />))
                    }
                    <div className=" flex justify-center gap-20">

                        <button onClick={addQuestion} className='btn ring-1 flex items-center justify-center ring-teal-600 -mt-12 bg-white text-3xl rounded-full shadow hover:shadow-2xl w-12 h-12 '>
                            <IoMdAdd className="text-teal-600" />
                        </button>
                        <button className='btn ring-1 flex items-center justify-center ring-teal-600 -mt-12 bg-white text-2xl rounded-full shadow hover:shadow-2xl w-12 h-12 '>
                            <FaRegSave className="text-teal-600" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;