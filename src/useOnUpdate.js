/*CUSTOM HOOK DOCS: https://es.reactjs.org/docs/hooks-custom.html*/

/*en resumen, un custom hook es un componente de react que utiliza
useEffect para poder detectar efectos y poder definir acciones en base
a validaciones que nosotros necesitemos*/

/*las reglas principales de los CustomHooks son:
1-siempre usar 'use' en el nombre de la funcion
2-hace uso de useEffect
3-siempre deben ser usadas en primer nivel
*/
import { useEffect, useRef } from "react";

/*este custom hook recibe el valor que deseamos saber cuando
se realice un cambio en el (dependency), y la function que deseamos llamar <effect>*/

/*igualmetne usamos useRef para saber si el componente fue montado y llamar la funcion
cuando la dependecia cambien*/

/*adicionalmente usamos otro useRef guardar el valor previo de la dependencia y
solo llamarla cuado su valor nuevo se diferente del previo*/

export default function useOnUpdate(effect, dependency) {
  let isMounted = useRef(false);
  let prevState = useRef(dependency);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      if (prevState !== dependency) {
        effect();
      }
    }
  }, [dependency]);
  /*se puede utilizar un array con varias dependecias
  pero provocara advertencia de eslint y no se cuales efectos podria causar*/

  /*el warning que le hace falta effect en array de dependencias puede ser omitido,
  ya que no es necesario para que el hook funcione*/
}
