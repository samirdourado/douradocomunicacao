import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface iFieldset {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export default iFieldset