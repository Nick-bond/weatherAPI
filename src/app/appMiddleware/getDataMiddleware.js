const getDataMiddleware = ({dispatch, getState}) => {
    return next => action => {
        const {
            types,
            getAPIData,
        } = action;

        if (!types) {
            return next(action);
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        if (typeof getAPIData !== 'function') {
            throw new Error('Expected getAPIData to be a function.')
        }
        const [ requestType, successType, failureType ] = types;
        
        dispatch({type: requestType, loading: true});

        return getAPIData()
            .then((response) => response.json())
            .then((json) => {
                if (json.cod !== "200") {
                    return dispatch({type: failureType, loading: false})
                } else {
                    return dispatch({type: successType, loading: false, data: json})
                }
            })
            .catch(e => dispatch({type: failureType, loading: false, msg: e}))
    };
};

export default getDataMiddleware;