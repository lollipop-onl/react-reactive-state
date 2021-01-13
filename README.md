# react-reactive-state

This library is provided a Vue like `useState` hook api for React.

## Installation

```sh
$ yarn add @lollipop-onl/react-reactive-state
# or
$ npm install -S @lollipop-onl/react-reactive-state
```

## Usage

```tsx
import React from 'react';
import { useReactiveState, ReactiveState } from '@lollipop-onl/react-reactive-state';

type Props = {
  model: ReactiveState<string>;
}

const MyInput: React.VFC<Props> = ({ model }) => {
  const onInput = (event: React.InputEvent<HTMLInputElement>): void => {
    model.value = event.target.value;
  };

  return (
    <input
      type="text"
      defaultValue={model.value}
      onInput={onInput}
    />
  );
};

const App: React.VFC = () => {
  const myVal = useReactiveState('');

  const resetValue = () => myVal.reset(); // myVal change to ''
  
  return (
    <>
      <MyInput model={myVal} />
      <p>{ myVal.value }</p>
      <button onClick={resetValue}>Reset value</button>
    </>
  )
};
```
