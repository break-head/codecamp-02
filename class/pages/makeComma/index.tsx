import { useState } from "react";

export default function InputAlgorithm() {
  const [value, setValue] = useState("");
  function onChangeInput(event) {
    const dottedValue = [];
    const nextValue = event.target.value;
    if (nextValue.length > value.length) {
      const nextPurevalue = nextValue.replaceAll(".", "").split("");
      nextPurevalue.forEach((data, index) => {
        dottedValue.push(data);
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push(".");
      });
      setValue(dottedValue.join(""));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data, index) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          dottedValue.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push(".");
        }
      });
      setValue(dottedValue.join(""));
    }
  }

  return (
    <div>
      <input
        placeholder="YYYY.MM.DD"
        type="text"
        onChange={onChangeInput}
        maxLength={10}
        value={value}
      />
    </div>
  );
}
