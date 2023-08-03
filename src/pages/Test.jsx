import { useForm } from 'react-hook-form';

import { useState } from 'react';
import Input from '../components/Test';


export default function Test() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [enterItem, setEnterItem] = useState(null)

    const [inputs, setInput] = useState([
        {
            id: 1,
            name: 'Name',
        }, {
            id: 2,
            name: 'Email',
        }
        , {
            id: 3,
            name: 'Password',
        }
    ]
    )
    const handlePlus = () => {
        setInput([...inputs, {
            id: inputs.length + 1,
            name: 'Name',
        }])
    }

    const handleDDragOver = (e) => {
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
        console.log(e.target);
        if (index || index === 0) {
            const newInputs = [...inputs]
            const temp = newInputs[index]
            newInputs[index] = newInputs[enterItem]
            newInputs[enterItem] = temp
            setInput(newInputs)
        }
    }

    return (
        <div className='  max-w-7xl mx-auto my-5'>
            <div className='m-5 flex justify-center items-center'>
                <div
                    onClick={handlePlus}
                    className=' 
        bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full
        cursor-pointer
         font-bold text-2xl
         pb-1
        '>+</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div onDragOver={handleDDragOver} >
                    {
                        inputs.map((input, index) => <Input onDragEnd={handleDragEnd} onDragEnter={handleDragEnter} index={index} key={input.id} name={input.name} />)
                    }
                </div>
                <div >
                    <input type="submit" />
                </div>

            </form>
        </div>
    );
}