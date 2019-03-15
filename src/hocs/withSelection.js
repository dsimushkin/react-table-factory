import React, { useReducer, forwardRef, useEffect, useRef } from 'react';

// helper functions
const efn=()=>{}

export const defaultState = {
    remove: efn, add: efn, toggle: efn, isSelected: efn, 
}

export const SelectionContext = React.createContext(
    defaultState
);

/**
 * A factory to generate selection reducer.
 * 
 * @param {*} add - Format (state, value) => []. Factory method to create a new state.
 */
export const selectionReducerFactory = (add) => (
    (state, action) => {
        switch (action.type) {
            case 'clear':
                return [];
            case 'add':
                return add(state, action.value);
            case 'remove':
                return state.filter(i => i !== action.value)
            case 'toggle':
                return state.indexOf(action.value) >= 0 ? (
                    state.filter(i => i !== action.value)
                ) : (add(state, action.value));
            default:
                return state
        }
    }
)

export const multiSelectionReducer = selectionReducerFactory((state, value) => (
    value != null ? state.concat(value) : state
));

export const singleSelectionReducer = selectionReducerFactory((state, value) => (
    value != null ? [value] : state
));

/**
 * Generates selection context using provided selectionReducer.
 * This module contains multiSelection and singleSelection reducers.
 * 
 * @param {*} selectionReducer - user one of provided reducers,
 *            should implement add, remove, toggle and clear action types.
 * @param {*} Component - wrapped component
 */
export const selectionContext = (selectionReducer=singeSelectionReducer, Component) => (
    forwardRef(({onSelection=efn, ...props}, ref) => {
        const [selected, dispatch] = useReducer(selectionReducer, []);
        const isSelected = (value) => selected.indexOf(value) >= 0;
        
        // dirty
        const mounted = useRef();
        useEffect(
            () => {
                if (!mounted.current) {
                    mounted.current = true;
                } else {
                    onSelection(selected);
                }
            },
            [selected]
        );

        const add = (value) => dispatch({type: 'add', value});
        const toggle = (value) => dispatch({type: 'toggle', value});
        const remove = (value) => dispatch({type: 'remove', value});
        const clear = () => dispatch({type: 'clear'});

        return (
            <SelectionContext.Provider
                value={{remove, toggle, isSelected, add, clear, selected}}
            >
                <Component
                    {...props}
                    ref={ref}
                />
            </SelectionContext.Provider>
        )
    })
)