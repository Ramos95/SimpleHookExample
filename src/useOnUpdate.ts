import { useEffect, useRef, useState } from "react";

export default function UseOnUpdate(effect: any, dependency: any[]) {
  let isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = true;
    } else {
      effect();
    }
  }, dependency);
}