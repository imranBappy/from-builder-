import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Title = ({ state }) => {
    const [value, setValue] = state
    return (
        <>
            <div className='my-5  w-full'>
                <ReactQuill
                    placeholder='Enter you question?'
                    modules={{
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            ['link'],
                            ['clean']
                        ]
                    }} theme="snow" value={value} onChange={setValue} />

            </div>
        </>
    );
};

export default Title;