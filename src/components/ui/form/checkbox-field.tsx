import { useStore } from '@tanstack/react-form';
import React from 'react';
import { useFieldContext } from './form-context';
import { Label } from '../label';
import { Checkbox } from '../checkbox';
import InputError from '../input-error';

export default function CheckboxField({ label }: { label: string }) {
  const field = useFieldContext<string>();
  const error =
    (useStore(field.store, (state) => state.meta.errors)[0]
      ?.message as string) || undefined;

  return (
    <div className='flex items-center gap-3'>
      <Label htmlFor={field.name}>{label}</Label>
      <Checkbox id={field.name} />
      <InputError message={error} />
    </div>
  );
}
