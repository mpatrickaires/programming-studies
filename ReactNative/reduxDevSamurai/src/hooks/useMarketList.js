import { useReducer } from 'react';
import { sha256 } from 'react-native-sha256';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'CHECK':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, check: !item.check };
                } else {
                    return item;
                }
            });
        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
};

const useMarketList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = async (title) => {
        const hashId = await sha256(title + `${Math.random()}`);

        dispatch({
            type: 'ADD',
            payload: {
                id: hashId,
                title,
                check: false,
            },
        });
    };

    const checkItem = (id) => {
        dispatch({
            type: 'CHECK',
            payload: {
                id,
            },
        });
    };

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: {
                id,
            },
        });
    };

    return [state, addItem, checkItem, removeItem];
};

export default useMarketList;
