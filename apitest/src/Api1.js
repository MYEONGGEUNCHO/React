import axios from 'axios';
import { useState } from 'react';

const Api1 = () => {
    const [data, setData] = useState([]);
    const callApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    };
    return (
        <>
            <button onClick={callApi}>API 호출</button>
            <div>
                <ul>
                    {data && data.map((e) => <li key={e.id}>{e.title}</li>)}
                </ul>
            </div>
        </>
    );
};

export default Api1;
