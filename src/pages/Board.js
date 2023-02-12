import Lane from '../components/Lane/Lane';
import './Board.css';
import {useState, useEffect} from "react";

const lanes = [
    {id:1, title:'To Do'},
    {id:2, title:'In Progress'},
    {id:3, title:'Review'},
    {id:4, title:'Done'},
];

const Board = () => {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    //using MyJson Server create data
    const myUrl = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';

    useEffect(()=>{
       async function fetchData(){
           try{
               const tasks = await fetch (myUrl);
               const result = await tasks.json();
               if(result){
                   setTasks(result);
                   setLoading(false); //loading is complete
               }
           }catch (e) {
               setLoading(false); //if error then stop loading
               setError(e.message);
           }
        }
        fetchData();
    },[]);


    return (
        <div className='Board-wrapper'>
            {lanes.map((lane) =>(
                //distribute tasks over Lane component
                <Lane
                    key={lane.id}
                    title={lane.title}
                    loading={loading}
                    error = {error}
                    tasks = {tasks.filter((task)=> task.lane === lane.id)}
                />
            ))}
        </div>
    );
};

export default Board;

