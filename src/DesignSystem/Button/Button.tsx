import { ReactNode } from "react";

type Props = { children: ReactNode; onClick: () => void };

/**
 * Pretend this is a design system Button component
 */
export const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
