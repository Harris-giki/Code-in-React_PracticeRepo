import { ReactNode } from "react";

interface Props {
  children: ReactNode; //through react node we can add more than strings as children through html
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
