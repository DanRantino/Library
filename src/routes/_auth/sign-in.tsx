import { createFileRoute, useRouter } from '@tanstack/react-router';

import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { useAppForm } from '~/components/ui/form/form';
import { authClient } from '~/utils/auth';

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
});

const FormSchema = z.object({
  email: z.string().email('Email is not valid'),
  password: z
    .string()
    .min(8, 'At least 8 characters long')
    .regex(/[a-z]/, 'At least one non-capital letter')
    .regex(/[A-Z]/, 'At least one capital letter')
    .regex(/\d/, 'At least one number')
    .regex(/[@$!%*?&]/, 'At least one special character (@, $, !, %, *, ?, &)'),
});

function RouteComponent() {
  const { signIn, forgetPassword, getSession } = authClient;
  const [session, setSession] = useState<unknown | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (session !== undefined && session !== null && session.data !== null) {
      router.invalidate();
      router.navigate({ to: '/books' });
      return;
    }
    getSession().then(session => {
      setSession(session);
    });
    return;
  }, []);

  const form = useAppForm({
    validators: {
      onChange: FormSchema,
      onSubmit: FormSchema,
    },
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      const { error } = await signIn.email({
        email: value.email,
        password: value.password,
      });
      if (error) {
        return toast.error(
          error?.message || 'An error occurred while signing in'
        );
      }
      toast.success('Successfully signed in');
      await router.invalidate();
      return router.navigate({ to: '/books' });
    },
  });

  const handleForgetPassword = async () => {
    await forgetPassword(
      {
        email: form.getFieldValue('email'), // Email to which the reset password link should be sent.
        redirectTo: '/reset-password', // URL to redirect the user after resetting the password.
      },
      {
        // Lifecycle hooks to handle different stages of the request.
        onSuccess: () => {
          alert('Reset password link has been sent');
        },
        onError: ctx => {
          alert(ctx.error.message);
        },
      }
    );
  };
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
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <form.AppForm>
            <CardContent>
              <form.AppField name={'email'}>
                {field => <field.TextField label={'Email'} type={'email'} />}
              </form.AppField>
              <br />
              <form.AppField name={'password'}>
                {field => <field.PasswordField label={'Password'} />}
              </form.AppField>
              <br />
            </CardContent>
            <CardAction className="flex items-center justify-end w-full p-6">
              <form.SubscribeButton label={'Submit'} />
              <Button variant="link" onClick={() => handleForgetPassword()}>
                Forgot Password?
              </Button>
            </CardAction>
          </form.AppForm>
        </form>
      </Card>
    </div>
  );
}
