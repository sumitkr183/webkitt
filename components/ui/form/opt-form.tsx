import React, { useRef, useEffect } from "react";
import { FormGroup, FormInput } from "@/components/ui/form";

interface IOtpProps {
  inputCount: number;
  onSuccess: (otp: string) => void;
}

const OtpForm = ({ inputCount, onSuccess }: IOtpProps) => {
  const inputs = new Array(inputCount).fill("");
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    let lastInputValue = value.toString().slice(-1);

    if (inputRef.current[index]) {
      inputRef.current[index]!.value = lastInputValue;
    }

    inputs[index] = lastInputValue;

    // Move forward
    if (inputRef.current[index + 1] && inputRef.current[index]?.value) {
      return inputRef.current[index + 1]!.focus();
    }

    let filledInputs = inputs.filter(Boolean);

    if (filledInputs.length === inputCount) {
      return onSuccess(inputs.join(""));
    }
  };

  const handleRemove = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.code !== "Backspace") return;

    if (inputRef.current[index - 1]) {
      inputRef.current[index - 1]!.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  return (
    <div className="form-verify">
      {inputs.map((_, index) => (
        <FormGroup key={index}>
          <FormInput
            ref={(el) => (inputRef.current[index] = el)}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleRemove(e, index)}
            placeholder="*"
          />
        </FormGroup>
      ))}
    </div>
  );
};

export default React.memo(OtpForm);
