import { ReactNode, CSSProperties } from "react";

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
};

function Container({ children, ...rest }: Props): JSX.Element {
  return (
    <div className="container mx-auto px-5" {...rest}>
      {children}
    </div>
  );
}

export default Container;
