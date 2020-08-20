import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(1)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return(
            <div>
                <button onClick={() => setValue((value) => value + 1)}>+</button>
                <button onClick={() => setVisible(false)}>Hide</button>
                <PlanetInfo id={value}/>
            </div>
        )
    } else {
        return(
            <button onClick={() => setVisible(true)}>Show</button>
        )
    }
}

const getPlanet = async (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
            .then(result => result.json())
            .then(data => data)
}

const useRequest = (request) => {

    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: null,
    }), [])
    const [dataState, setDataState] = useState(initialState)

    useEffect(() => {
        setDataState(initialState)
        let cancelled = false
        request()
            .then(data => !cancelled && setDataState({
                data,
                loading: false,
                error: null
            }))
            .catch((error) => !cancelled && setDataState({
                data: null,
                loading: false,
                error: error
            }))
        return () => cancelled = true
        
    }, [request, initialState])

    return dataState
}

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id])
    return useRequest(request)
}

const PlanetInfo = ({ id }) => {

    const { data, loading, error} = usePlanetInfo(id)

    if (error) {
        return(
            <div>
                <p>Something is wrong</p>
            </div>
        )
    }

    if (loading) {
        return(
            <div>
                <p>Loading....</p>
            </div>
        )
    }

    return(
        <div>
            {id} = {data.name}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))