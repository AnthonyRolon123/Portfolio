import { useEffect, useRef, forwardRef } from "react";

const CardWithShadow = forwardRef(({ children, className, setActiveSection, name }, ref) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const updateShadow = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const maxOffset = 40;
      const offsetX = -(dx / window.innerWidth) * maxOffset;
      const offsetY = -(dy / window.innerHeight) * maxOffset;

      card.style.boxShadow = `${offsetX}px ${offsetY}px 40px rgba(0,0,0,0.25)`;
    };

    window.addEventListener("mousemove", updateShadow);

    return () => {
      window.removeEventListener("mousemove", updateShadow);
    };
  }, []);

  return (
    <div
      onClick={()=>{name === 'home' ? null : setActiveSection(name)}}
      ref={setRefs(cardRef, ref)}
      className={className}
    >
        {children}
    </div>
  );
});

function setRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
}

export default CardWithShadow;
