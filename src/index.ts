import { useState } from "react";
import { ReactiveState } from "./types";

export function useReactiveState<T>(initialState: T): ReactiveState<T>;
export function useReactiveState<T = undefined>(): ReactiveState<T | undefined>;
export function useReactiveState<T = undefined>(
  initialState?: T
): ReactiveState<T | undefined> {
  const [state, setState] = useState<T | undefined>(initialState);

  return {
    get value(): T | undefined {
      return state;
    },
    set value(newState: T | undefined) {
      setState(newState);
    },
    reset(): void {
      setState(initialState);
    },
  };
}
