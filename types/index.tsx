// PACKAGES
import { UseFormRegister } from "react-hook-form";

// SVG
export type SVGPropType = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  onClick?: () => void;
}

// INPUTS
export interface IFormField {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validationSchema?: {
    required?: string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  }
  error?: string; 
}