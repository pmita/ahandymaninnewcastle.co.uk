// PACKAGES
import { UseFormRegister } from "react-hook-form";

// SVG
export type SVGPropType = {
  width?: string | number;
  height?: string | number;
  fill?: string;
  onClick?: () => void;
}

// FORMS
export interface IFieldWithLabel {
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
  componentType?: string;
  error?: string; 
  className?: string;
}

export interface IQueryForm {
  fullName: string;
  email: string;
  mobile: string;
  location: string;
  additionalInfo: string;
}

export type ContactFormErrors = {
  fullName: string;
  email: string;
  mobile: string;
  location: string;
  additionalInfo: string;
}