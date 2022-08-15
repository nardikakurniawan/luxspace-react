import { useRef, useLayoutEffect, useCallback } from "react";

export default function useSafeDipatch(dispacth) {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return useCallback(
    (...args) => (mounted.current ? dispacth(...args) : void 0),
    [dispacth]
  );
}
