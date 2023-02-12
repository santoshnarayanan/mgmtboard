/**
 * With the very first custom Hook in place, it's time to think of other components
   that could do data fetching, such as a component that is displaying only tasks. 
   The process to create this component consists of two steps: 
   creating the actual component and using the custom Hook for data fetching
 */

   import Task from "../components/Task/Task";
   import useDataFetching from "../hooks/useDataFetching";
   import './Backlog.css';

   const Backlog = () =>{
    //using MyJson Server create data
    const myUrl = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks';


     const [loading, error, tasks] = useDataFetching(myUrl);

     return (
        <div className="Backlog-wrapper">
            <h2>Backlog</h2>
            <div className="Tasks-wrapper">
            {loading || error ? 
                (<span>{error || 'Loading...'}</span>):
                (tasks.map(task=>
                    <Task 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        body={task.body} />
                    )
                )
            }
            </div>
        </div>
     );
   };

   export default Backlog;