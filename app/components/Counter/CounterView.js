const CounterView = (props) => {
    return <div>
            <h4>{props.counter}</h4>
            <button className="btn btn-primary btn-sm" onClick={()=>props.add()}>Add</button>
            &nbsp; &nbsp;
            <button className="btn btn-primary btn-sm" onClick={()=>props.subtract()}>Subtract</button>
        </div> 
}


export default CounterView;