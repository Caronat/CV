import { useState } from "react";

const useCopiedCheckIcon = (delay = 1000) => {
  const [showCheck, setShowCheck] = useState(false);

  const CopiedCheckIcon = () => {
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, delay);
  };

  return [showCheck, CopiedCheckIcon];
};

export default useCopiedCheckIcon;
