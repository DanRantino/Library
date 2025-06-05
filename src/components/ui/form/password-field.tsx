import { useStore } from '@tanstack/react-form';
import { useFieldContext } from './form-context';
import { Eye, EyeClosed } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { useState } from 'react';
import InputError from '../input-error';

export default function TextField({ label }: { label: string }) {
  const [show, setShow] = useState(false);
  const field = useFieldContext<string>();

  const error =
    (useStore(field.store, (state) => state.meta.errors)[0]
      ?.message as string) || undefined;
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor={field.name}>{label}</Label>
      <div className='relative'>
        {show ? (
          <Eye
            onClick={(e) => {
              setShow(!show);
              e.stopPropagation();
            }}
            className='absolute right-3 top-1/6'
          />
        ) : (
          <EyeClosed
            onClick={(e) => {
              setShow(!show);
              e.stopPropagation();
            }}
            className='absolute right-3 top-1/6'
          />
        )}
        <Input
          type={show ? 'text' : 'password'}
          placeholder='Password'
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
        />
      </div>
      <InputError message={error} />
    </div>
  );
}
