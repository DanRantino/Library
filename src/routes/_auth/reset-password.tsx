import {createFileRoute, useRouter} from '@tanstack/react-router'
import {authClient} from "~/utils/auth";
import {z} from "zod";
import {useAppForm} from "~/components/ui/form/form";
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";

export const Route = createFileRoute('/_auth/reset-password')({
    component: RouteComponent,
})

const FormSchema = z.object({
    confirmPassword: z
    .string()
    .min(8, "At least 8 characters long")
    .regex(/[a-z]/, "At least one non-capital letter")
    .regex(/[A-Z]/, "At least one capital letter")
    .regex(/\d/, "At least one number")
    .regex(
        /[@$!%*?&]/,
        "At least one special character (@, $, !, %, *, ?, &)",
    ),
    password: z
        .string()
        .min(8, "At least 8 characters long")
        .regex(/[a-z]/, "At least one non-capital letter")
        .regex(/[A-Z]/, "At least one capital letter")
        .regex(/\d/, "At least one number")
        .regex(
            /[@$!%*?&]/,
            "At least one special character (@, $, !, %, *, ?, &)",
        ),
});

function RouteComponent() {

    const { resetPassword } = authClient;
    const router = useRouter();
    const form = useAppForm({
        validators: {
            onChange: FormSchema,
            onSubmit: FormSchema,
        },
        defaultValues: {
            confirmPassword: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            if (value.password !== value.confirmPassword) {
                throw new Error("Passwords do not match");
            }
            const { data, error } = await resetPassword({
                newPassword: value.password,
                token: new URLSearchParams(window.location.search).get('token') || '',
            })
            if (!error) {
                await router.invalidate();
                return router.navigate({ to: "/sign-in" });
            }
        },
    });
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        await form.handleSubmit();
        console.log(form.state);
        form.reset();
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Card className="w-full max-w-md rounded-2xl">
                <CardHeader>
                    <CardTitle>Reset Password</CardTitle>
                    <CardDescription> Update your password </CardDescription>
                </CardHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}
                >
                    <form.AppForm>
                        <CardContent>
                            <form.AppField name={"password"}>
                                {(field) => (
                                    <field.TextField
                                        label={"Password"}
                                        type={"password"}
                                    />
                                )}
                            </form.AppField>
                            <br />
                            <form.AppField name={"confirmPassword"}>
                                {(field) => (
                                    <field.PasswordField label={"Confirm Password"} />
                                )}
                            </form.AppField>
                            <br />
                        </CardContent>
                        <CardAction className="flex items-center justify-end w-full p-6">
                            <form.SubscribeButton label={"Submit"} />
                        </CardAction>
                    </form.AppForm>
                </form>
            </Card>
        </div>
    );
}
