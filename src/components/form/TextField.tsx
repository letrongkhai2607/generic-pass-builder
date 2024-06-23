import { useActiveFormStore } from "@/store/useActiveFormStore";
import { useFormStore } from "@/store/useFormStore";
import {
  BaseTextFieldProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";
import { Control, useController, useForm } from "react-hook-form";

interface CustomTextFieldProps extends BaseTextFieldProps {
  control: Control<any>;
  name: string;
  label?: string;
  disabled?: boolean;
}
function CustomTextField({
  control,
  name,
  disabled = false,
  label,
  onChange,
  ...rest
}: any) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const information = useFormStore((state) => state.information);
  const updateInformation = useFormStore((state) => state.updateInformation);
  const updateActiveField = useActiveFormStore(
    (state) => state.updateActiveField
  );
  const handleOnChangeFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange({ ...event });
    const value = event.target.value;

    updateInformation({
      ...information,
      [`${field.name}`]: value,
    });
  };
  const handleOnFocus = () => {
    updateActiveField(field.name);
  };
  const handleOnBlur = (event: any) => {
    field.onBlur();
    updateActiveField("");
  };
  return (
    <TextField
      sx={{
        width: "100%",
      }}
      {...rest}
      disabled={disabled}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChangeFields(event);
      }} // send value to hook form
      onBlur={(event) => handleOnBlur(event)} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref}
      onFocus={handleOnFocus}
      helperText={
        <Typography color="red" fontSize={12}>
          Required
        </Typography>
      } // send input ref, so we can focus on input when error appear
    />
  );
}
export default CustomTextField;
