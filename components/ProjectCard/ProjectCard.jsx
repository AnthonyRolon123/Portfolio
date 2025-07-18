import { useEffect, useRef, forwardRef } from "react";

const CardWithShadow = ({ children, className, name }) => {

  return (
    <div
      onClick={()=>{name === 'home' ? null : setActiveSection(name)}}
      ref={setRefs(cardRef, ref)}
      className={className}
    >
        {children}
    </div>
  );
};

export default CardWithShadow;
