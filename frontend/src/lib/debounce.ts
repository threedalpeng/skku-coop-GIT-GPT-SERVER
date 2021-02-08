import { useState } from "react";

export function useDebounce(callback: Function, wait: number) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  return (...args: any) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        callback(...args);
      }, wait)
    );
  };
}
