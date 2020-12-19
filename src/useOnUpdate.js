import { useEffect, useRef } from "react";

export default function UseOnUpdate(effect, dependency) {
  let isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = true;
    } else {
      effect();
    }
  }, [dependency]);
}
