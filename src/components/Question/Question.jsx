import { RxDragHandleDots2 } from "react-icons/rx";


const Question = ({ children }) => {
    return (
        <div className=' question_area w-2/3 '>
            <div className=' flex gap-2 items-center my-4'>
                <RxDragHandleDots2 className='cursor-move' />
                <h1>Question</h1>
            </div>
            {
                children
            }
        </div>
    );
};

export default Question;