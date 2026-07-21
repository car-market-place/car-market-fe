import { useFormContext } from "@car-market/ui";
import {
  BaseInput,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui";

type Props = {
  name: string;
};

export const BaseInputForm = ({ name }: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>

          <FormControl>
            <BaseInput
              {...field}
              error={!!fieldState.error}
              placeholder="Enter name"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
