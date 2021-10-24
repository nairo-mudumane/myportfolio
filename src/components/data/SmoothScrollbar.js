import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollBar from 'react-smooth-scrollbar';

export default function SmoothScrollbar({ children }) {
  const ref = React.useRef();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);

  return (
    <ScrollBar ref={ref} speed={300} damping={0.2} alwaysShowTracks>
      {children}
    </ScrollBar>
  );
}
