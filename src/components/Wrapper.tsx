import React from "react";
type Props = {
  customClass?: string;
  padding?: number;
  children: React.ReactNode;
};
const Wrapper: React.FC<Props> = ({
  customClass = "",
  padding = "",
  children,
}) => {
  return (
    <div className={`py-6 ${customClass} ${padding && `py-${padding}`}`}>
      {children}
    </div>
  );
};

export default Wrapper;
