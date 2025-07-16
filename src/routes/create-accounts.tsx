import { createFileRoute, useRouter } from '@tanstack/react-router';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useAppForm } from '~/components/ui/form/form';

export const Route = createFileRoute('/create-accounts')({
  component: RouteComponent,
});
import { z } from 'zod';
import { FormEvent } from 'react';
import { auth, authClient } from '~/utils/auth';
import { toast } from 'sonner';

const FormSchema = z
  .object({
    email: z.string().email('Email is not valid'),
    password: z
      .string()
      .min(8, 'At least 8 characters long')
      .regex(/[a-z]/, 'At least one non-capital letter')
      .regex(/[A-Z]/, 'At least one capital letter')
      .regex(/\d/, 'At least one number')
      .regex(
        /[@$!%*?&]/,
        'At least one special character (@, $, !, %, *, ?, &)'
      ),
    name: z.string().min(1, 'Name is required'),
  })
  .describe('Account creation form schema');

function RouteComponent() {
  const { signUp } = authClient;
  const router = useRouter();

  const form = useAppForm({
    validators: {
      onChange: FormSchema,
      onSubmit: FormSchema,
    },
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
    onSubmit: async ({ value }) => {
      const { error } = await signUp.email({
        email: value.email,
        password: value.password,
        name: value.name,
      });

      if (error) {
        return toast.error(
          error?.message || 'An error occurred while creating the account'
        );
      }

      toast.success('Account created successfully');
      await router.navigate({ to: '/books' });
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    await form.handleSubmit();
    form.reset();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription> Create your account </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <form.AppForm>
              <CardContent className="flex flex-col gap-1.5">
                <form.AppField name={'name'}>
                  {field => <field.TextField label={'Name'} type={'text'} />}
                </form.AppField>
                <form.AppField name={'email'}>
                  {field => <field.TextField label={'Email'} type={'email'} />}
                </form.AppField>
                <form.AppField name={'password'}>
                  {field => <field.PasswordField label={'Password'} />}
                </form.AppField>
              </CardContent>
              <CardAction className="flex items-center justify-end w-full p-6">
                <form.SubscribeButton label={'Create Account'} />
              </CardAction>
            </form.AppForm>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
