import { RxDragHandleDots2 } from 'react-icons/rx'
import { isQuestionDragableToggle } from '../../features/question/questionSlice';
import { useDispatch } from 'react-redux';
import { RiDeleteBin3Line } from 'react-icons/ri'


const Option = ({ value, index, isOption, handleDelete, handleData, ...rest }) => {
    const dispatch = useDispatch();
    const handleDragStart = () => {
        dispatch(isQuestionDragableToggle())
    }
    const handleChange = (e) => {
        handleData({ value: e.target.value, index })
    }
    return (
        <div draggable {...rest} data-index={index} onDragStart={handleDragStart} className=' flex gap-2 items-center mb-3 ml-2'>
            {
                !isOption && <div>
                    <RxDragHandleDots2 className='cursor-move' />
                </div>
            }
            <div className={`flex gap-3 items-center  ${isOption && 'ml-6'}`}>
                <div>
                    <input className='' type="radio" />
                </div>
                <div className='   '>
                    <input onChange={handleChange} value={value} className='input ' placeholder={`Option ${index + 1} ${isOption && "(Optional)"}`} type="text" name="" id="" />
                </div>
            </div>
            {
                !isOption && <div>
                    <RiDeleteBin3Line onClick={() => handleDelete(index)} className='cursor-pointer' />
                </div>
            }

        </div>

    );
};

export default Option;