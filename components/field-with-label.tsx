// COMPONENTS
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/text-area"
// TYPES
import { IFieldWithLabel } from "@/types"
// UTILS
import { cn } from "@/utils/helpers"

type ComponentTypeMap = Record<string, React.ElementType>;

const ComponentType: ComponentTypeMap = {
  input: Input,
  textarea: Textarea,
}


export const FieldWithLabel = ({
  name,
  label,
  register,
  validationSchema,
  type,
  placeholder,
  error,
  className,
  componentType,
  ...rest
}: IFieldWithLabel): JSX.Element => {
  // STATE && VARIABLES
  const Component = ComponentType[componentType as keyof ComponentTypeMap] || ComponentType.input;
  
  return (
    <div className={cn("w-full flex flex-col justify-center items-start gap-5", className)}>
    {label ? (
      <Label htmlFor={name}>{label}</Label>
    ) : null}

    <Component
      className="w-full border-solid border-[0.3rem] border-secondary p-4 rounded-[6px]"
      id={name}
      placeholder={placeholder}
      type={type}
      {...register(name, validationSchema)}
      {...rest}
    />

    {error && (
      <span className="text-destructive">{error}</span>
    )}
  </div>
  )
}