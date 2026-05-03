
import { useReducer } from 'react';

function reducer(state, action) {
    //il faut mentionner toute les scénaris possible 
  if (action.type === 'ADD_1') {
    return {
      count: state.count + 1
    };
  }
  if (action.type === 'ADD_2') {
    return {
      count: state.count + 2
    };
  }
  if (action.type === 'ADD_5') {
    return {
      count: state.count + 5
    };
  }
  if (action.type === 'ADD_10') {
    return {
      count: state.count + 10
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0});

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'ADD_1' })
      }}>
        Increment count+1
      </button>
      <br />
      <button onClick={() => {
        dispatch({ type: 'ADD_2' })
      }}>
        Increment count+2
      </button>
      <br />
      <button onClick={() => {
        dispatch({ type: 'ADD_5' })
      }}>
        Increment count+5
      </button>
      <br />        
      <button onClick={() => {
        dispatch({ type: 'ADD_10' })
      }}>
        Increment count+10
      </button>
      <p>Hello! You are {state.count}.</p>
    </>
  );
}
