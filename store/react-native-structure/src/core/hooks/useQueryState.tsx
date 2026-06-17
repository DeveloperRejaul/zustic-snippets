import { useEffect, useRef, useState } from "react";

export default function useQueryState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue);
  const prevInitialRef = useRef<T>(initialValue);


  useEffect(() => {
    if (JSON.stringify(prevInitialRef.current) !== JSON.stringify(initialValue)) {
      setState(initialValue);
      prevInitialRef.current = initialValue;
    }
  }, [initialValue]);

  return [state, setState];
}
