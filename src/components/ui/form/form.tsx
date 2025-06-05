import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";
import { fieldContext, formContext } from "./form-context";
import SubscribeButton from "~/components/ui/form/subscribe-button";
// import CheckboxField from "./checkbox-field";

const TextField = lazy(() => import("./text-fields"));
const PasswordField = lazy(() => import("./password-field"));
const CheckboxField = lazy(() => import("./checkbox-field"));

export const { useAppForm, withForm } = createFormHook({
    fieldComponents: {
        TextField,
        PasswordField,
        CheckboxField,
    },
    formComponents: {
        SubscribeButton,
    },
    fieldContext,
    formContext,
});
