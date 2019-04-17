// Pop.tsx

import React, { useRef, useEffect, useState } from 'react';
import Popper from 'popper.js'

/*
type PopProps = {

}
*/

export const Pop = () => {
  const popElt = useRef<HTMLDivElement>(null);
  const [popper, setPopper] = useState<Popper | null>(null);

  useEffect(() => {
    console.log('poppy loaded', popElt);
    if (popElt.current) {
      setPopper(new Popper(popElt.current, () => console.log('hi'), {
        placement: 'top'
      }));
    }

    //setPopper(new Popper(popElt.current))

  }, [popElt]);

  return (
    <div className="pop" ref={popElt}>
    </div>
  )

}