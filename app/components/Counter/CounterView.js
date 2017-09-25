const CounterView = (props) => {
    return <div>
            <h4>{props.counter}</h4>
            <button onClick={()=>props.add()}>Add</button>
            {'   '}
            <button onClick={()=>props.subtract()}>Subtract</button>
        </div> 
}


export default CounterView;