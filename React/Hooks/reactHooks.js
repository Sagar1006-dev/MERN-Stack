// 1. useState
// useState is used to add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.

// javascript
// Copy code
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// 2. useEffect
// useEffect is used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.


import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data here
    fetchData().then(response => setData(response));
  }, []); // The empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
// 3. useContext
// useContext is used to subscribe to React context without introducing nesting.


import React, { useContext } from 'react';
import MyContext from './MyContext';

function ExampleComponent() {
  const value = useContext(MyContext);

  return <p>{value}</p>;
}
// 4. useReducer
// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.


import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}