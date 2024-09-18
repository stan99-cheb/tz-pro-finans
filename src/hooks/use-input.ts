import React from "react";

type Input = (initialValue: string) => [
  {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  },
  () => void
]

const useInput: Input = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(
    () => {
      setValue(initialValue);
    }, [initialValue]
  );

  return [
    { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) } },
    () => { setValue(initialValue) }
  ];
}

export default useInput;