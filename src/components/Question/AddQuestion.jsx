
import { useState } from 'react';
import Categorize from './Categorize';
import Cloze from './Cloze';
import Comprehension from './Comprehension';
import Control from './Control';
import MCQ from './MCQ';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri'
import { questionDelete } from '../../features/question/questionSlice';

const types = [
    {
        id: 1,
        name: 'MCQ',
        component: <MCQ />
    },
    {
        id: 2,
        name: 'Cloze',
        component: <Cloze />
    },
    {
        id: 3,
        name: 'Categorize',
        component: <Categorize />
    },
    {
        id: 4,
        name: "Comprehension",
        component: <Comprehension />
    }
]
const AddQuestion = ({ title, id, index, handleChange, ...rest }) => {
    const [QuestionType, setQuestionType] = useState(types[0].component);
    const { isQuestionDragable } = useSelector(state => state.questions)
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(questionDelete(id))
    }

    return (
        <div>
            <div {...rest} data-index={index} draggable={isQuestionDragable} className='flex justify-between gap-10 items-center shadow-md p-5 my-5'>
                <Question handleChange={handleChange} title={title} >
                    {
                        QuestionType
                    }
                </Question>
                <Control setQuestionType={setQuestionType} types={types} />


            </div>
            <div className=" flex justify-center ">
                <button onClick={handleDelete} className='btn ring-1 flex items-center justify-center ring-red-600 -mt-12 bg-white text-2xl rounded-full shadow hover:shadow-2xl w-12 h-12 '>
                    <RiDeleteBinLine className="text-red-600" />
                </button>
            </div>
        </div>


    );
};

export default AddQuestion;