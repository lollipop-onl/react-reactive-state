export type ReactiveState<T> = {
  value: T;
  reset(): void;
};
