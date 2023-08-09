
const Control = ({ types, setQuestionType }) => {
    const handleTypeChange = (e) => {
        const type = types.find(type => type.name === e.target.value)
        setQuestionType(type.component)
    }
    return (
        <div className='options_area w-1/3 mt-16'>
            <div className="mb-9" >
                <select onChange={handleTypeChange} className="input mb-8" name="" id="">
                    {
                        types.map(type => <option key={type.id} value={type.name}>{type.name}</option>)
                    }
                </select>
            </div>
            <div >
                <input className="input" placeholder="Points" type="text" name="point" id="" />
            </div>
        </div>
    );
};

export default Control;