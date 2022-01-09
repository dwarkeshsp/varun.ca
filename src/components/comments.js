import React, { useContext, useEffect } from 'react';
import { ColorModeContext } from '../use-color-mode';

const COMMENTS_ID = 'comments-container';

const Comments = () => {
  const { mode } = useContext(ColorModeContext);
  // const toggleDark = document.body.classList.contains('dark');

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'dwarkeshsp/blog');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute(
      'theme',
      mode === 'dark' ? 'github-dark' : 'github-light'
    );
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, [mode]);

  return <div id={COMMENTS_ID} />;
};
export default Comments;
