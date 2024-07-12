import './App.css';
import { useEffect, useState, useRef } from 'react';
import Controller from './component/Controller';
import Viewer from './component/Viewer';
import Even from './component/Even';

function App() {
    const [count, setCount] = useState(0); // 구조분해할당
    const [text, setText] = useState('');
    const handleSetCount = (e) => {
        setCount(count + e);
    };
    const handleChangeTest = (e) => {
        setText(e.target.value);
    };
    const didMountRef = useRef(false);
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        } else {
            console.log('컴포넌트 업데이트!');
        }
    });
    useEffect(() => {
        console.log('컴포넌트 마운트');
    }, []);
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('깜빡');
        }, 1000);
        return () => {
            console.log('클린업');
            clearInterval(intervalID);
        };
    });
    return (
        <div className="App">
            <h1>Project1</h1>
            <section>
                <input value={text} onChange={handleChangeTest} />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 && <Even />}
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
