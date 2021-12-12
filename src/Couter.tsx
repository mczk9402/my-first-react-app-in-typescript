import React, { useEffect, useRef, useState } from 'react';

// type SetStateAction<S> = S | ((prevState: S) => S);
type MySetStateAction = number | ((prevState: number) => number);

// type Dispatch<A> = (value: A) => void;
// type MyDispatch = (value: MySetStateAction) => void;
type MyDispatch = (value: number | ((prevState: number) => number)) => void;

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readonlyArray[0] = 11;

const Couter: React.FC<{}> = () => {
  const initialValue: any = 1;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => setValue((prevValue) => prevValue + 1);
  const decrement = () => setValue((prevValue) => prevValue - 1);

  const renderTimes = useRef<number>(0);
  // function useRef<T>(initialValue: T): MutableRefObject<T>;
  // interface MutableRefObject<T> { current: T; }

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  // function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  // type DependencyList = ReadonlyArray<any>;

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Couter;
