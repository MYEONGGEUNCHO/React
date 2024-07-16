import './TodoEditor.css';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';
const TodoEditor = () => {
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState('');
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
    };
    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 🖊️</h4>
            <div className="editor_wrapper">
                <input
                    value={content}
                    onChange={onChangeContent}
                    placeholder="새로운 Todo..."
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;
