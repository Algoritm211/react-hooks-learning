import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const App = () => {

    const [name, setName] = useState('John')
    const [age, setAge] = useState(25)
    const [rate, setRate] = useState(25)


    return(
        <div>
            {name} is {age} years old.
            His rate is {rate} per hour
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))