import { useStore } from '@tanstack/react-form';
import { useFieldContext } from './form-context';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import InputError from '~/components/ui/input-error';

export default function TextField({ label, type }: { label: string, type: string }) {
  const field = useFieldContext<string>();

  const error = useStore(field.store, (state) => state.meta.errors)[0]?.message as string || undefined;
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={field.name}>{label}
      </Label>
      <Input
        type={type}
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <InputError message={error} />
    </div>
  );
}