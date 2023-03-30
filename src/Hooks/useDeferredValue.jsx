import { useState, useEffect, useRef } from 'react';

const useDeferredValue = (value, timeout = 500) => {
  const [deferredValue, setDeferredValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Reset the timeout whenever the value changes
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDeferredValue(value);
    }, timeout);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, timeout]);

  return deferredValue;
};

export default useDeferredValue;