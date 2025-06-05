import { createFileRoute, useRouter } from '@tanstack/react-router';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { useAppForm } from '~/components/ui/form/form';
import { z } from 'zod';
import { FormEvent } from 'react';
import { authClient } from '~/utils/auth';


const FormSchema = z.object({
  email: z.string().email('Email is not valid'),
  password: z.string().min(8, 'At least 8 characters long')
    .regex(/[a-z]/, 'At least one non-capital letter')
    .regex(/[A-Z]/, 'At least one capital letter')
    .regex(/\d/, 'At least one number')
    .regex(/[@$!%*?&]/, 'At least one special character (@, $, !, %, *, ?, &)'),
  name: z.string().nonempty('Name is required'),
});

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
});

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
      const { data, error } = await signUp.email({
        email: value.email,
        password: value.password,
        name: value.name,
      });
      if (error) throw error;
      return router.navigate({ to: '/books' });
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
        <form onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}>

          <form.AppForm>
            <CardContent>
              <form.AppField name={'name'} children={field => <field.TextField label={'Name'} type={'text'} />} />
              <br />
              <form.AppField name={'email'} children={field => <field.TextField label={'Email'} type={'email'} />} />
              <br />
              <form.AppField name={'password'} children={field => <field.PasswordField label={'Password'} />} />
            </CardContent>
            <CardAction className="flex items-center justify-end w-full p-6">
              <form.SubscribeButton label={'Submit'} />
            </CardAction>
          </form.AppForm>
        </form>
      </Card>
    </div>
  );
}
