import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return(
            <div>
                <button onClick={() => setValue((value) => value + 1)}>+</button>
                <button onClick={() => setVisible(false)}>Hide</button>
                <ClassCounter value={value} />
                <HookCounter value={value}/>
            </div>
        )
    } else {
        return(
            <button onClick={() => setVisible(true)}>Show</button>
        )
    }
}

const HookCounter = ({ value }) => {
    useEffect(() => {
        console.log('useEffect()');
        
        return () => console.log('clear');
    }, [value])
    return(<p>{value}</p>)
}    


class ClassCounter extends React.Component {
    componentDidMount() {
        console.log('class: mount');
    }

    componentDidUpdate(props) {
        console.log('class: update');
    }

    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return (
            <p>{this.props.value}</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))