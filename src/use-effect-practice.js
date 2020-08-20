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
                <Notification />
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
        console.log('mount');
    }, [])

    useEffect(() => {
        console.log('update');
    })

    useEffect(() => {
        return () => console.log('unmount');
    })

    return(<p>{value}</p>)
}    

const Notification = () => {

    const [notification, setNotification] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNotification(false)
        }, 2500)

        return () => clearTimeout(timeout)
    }, [])

    if (notification) {
        return(
            <div>
                <p>Notification</p>
            </div>
        )
    } else {
        return(
        <div>
            <p>No notifications</p>
        </div>)
    }
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