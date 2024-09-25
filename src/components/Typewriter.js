// src/components/Typewriter.js
import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts, loop = true, typingSpeed = 100, erasingSpeed = 50, delay = 1000 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Index for `texts` array
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0); // Index for typing characters

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        // Remove characters
        if (typingIndex > 0) {
          setTypingIndex(typingIndex - 1);
          setText(texts[index].substring(0, typingIndex - 1));
        } else {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      } else {
        // Add characters
        if (typingIndex < texts[index].length) {
          setText(texts[index].substring(0, typingIndex + 1));
          setTypingIndex(typingIndex + 1);
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, typingIndex, isDeleting, index, texts, typingSpeed, erasingSpeed, delay, loop]);

  return (
    <span>{text}</span>
  );
};

export default Typewriter;
