import Lane from '../components/Lane/Lane';
import './Board.css';
import useDataFetching from '../hooks/useDataFetching';

const lanes = [
    {id:1, title:'To Do'},
    {id:2, title:'In Progress'},
    {id:3, title:'Review'},
    {id:4, title:'Done'},
];

/**
 The HTML5 Drag and Drop API makes it possible for us to drag and drop elements
 across our project management board. To make this possible, it uses drag events.
 onDragStart, onDragOver, and onDrop will be used for this application
 */
const onDragStart = (e,id) => {
    e.dataTransfer.setData('id',id);
};

const Board = () => {
    //using MyJson Server create data
    const myUrl = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';

    const [loading, error, tasks] = useDataFetching(myUrl);     
    
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
                    onDragStart = {onDragStart}
                />
            ))}
        </div>
    );
};

export default Board;

