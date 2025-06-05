import { useFormContext } from '~/components/ui/form/form-context';
import { Button } from '~/components/ui/button';
import { Loader } from 'lucide-react';

export default function SubscribeButton({ label, variant }: {
  label: string,
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined
}) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button className={'cursor-pointer'} variant={variant}
                                 disabled={isSubmitting}>{isSubmitting &&
        <Loader className="animate-spin" />} {label}</Button>}
    </form.Subscribe>
  );
}