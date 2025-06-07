import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Alert = ({ children, type = "primary" }: Props) => {
  return <div className={`alert alert-${type}`}>{children}</div>;
};

export default Alert;

// Example Usage in App.tsx:

{
  /* import Alert from "./Alert";

function App() {
  return (
    <div>
      <Alert type="success">
        <strong>Success!</strong> Your operation was completed.
      </Alert>

      <Alert type="danger">
        <em>Error:</em> Something went wrong.
      </Alert>

      <Alert>
        This is a default primary alert.
      </Alert>
    </div>
  );
}

export default App;
*/
}
