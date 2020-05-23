import React, { FC, ReactNode, CSSProperties } from 'react';

type ButtonProps = {
  children: ReactNode;

  /**
   * Simple click handler
   */
  onClick?: () => void;

  /**
   * Button style variants
   */
  mode: 'solid' | 'outline';
};

const solidStyle: CSSProperties = {
  border: 'none',
  outline: 'none',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: '#1EA7FD',
  color: '#f2f2f2',
};

const outlineStyle: CSSProperties = {
  outline: 'none',
  border: '1px solid #1EA7FD',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  color: '#1EA7FD',
};

/**
 * The world's most _basic_ button
 */
const Button: FC<ButtonProps> = ({ children, onClick, mode }: ButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    style={mode === 'solid' ? solidStyle : outlineStyle}>
    {children}
  </button>
);

Button.defaultProps = {
  mode: 'solid',
};

export default Button;
