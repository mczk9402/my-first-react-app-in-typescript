import React, { useState } from 'react';

// type SetStateAction<S> = S | ((prevState: S) => S);
type MySetStateAction = number | ((prevState: number) => number);

// type Dispatch<A> = (value: A) => void;
// type MyDispatch = (value: MySetStateAction) => void;
type MyDispatch = (value: number | ((prevState: number) => number)) => void;

const Couter: React.FC<{}> = () => {
  const initialValue: any = 1;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => setValue((prevValue) => prevValue + 1);
  const decrement = () => setValue((prevValue) => prevValue - 1);

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Couter;
