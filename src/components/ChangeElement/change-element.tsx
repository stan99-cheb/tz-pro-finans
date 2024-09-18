import React from "react";
import useInput from "../../hooks/use-input";

type Props = {
  extraStyle: string;
  property: number;
  handleBlur: (value: string) => void;
};

const ChangeElement = ({ extraStyle, property, handleBlur }: Props) => {
  const [showInput, setShowInput] = React.useState(false);
  const [inputProps] = useInput(property.toString());

  return showInput
    ? (
      <input
        className={extraStyle}
        type="number"
        {...inputProps}
        onBlur={() => {
          handleBlur(inputProps.value);
          setShowInput(false);
        }}
      />
    )
    : (
      <p
        className={extraStyle}
        onDoubleClick={() => setShowInput(true)}
      >
        {property}
      </p>
    );
}

export default ChangeElement;