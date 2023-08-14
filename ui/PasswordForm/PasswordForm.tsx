import * as React from "react";
import styles from "./PasswordForm.module.css";
//import { cx } from "../classNames";
import { Input } from "../Input";
import { IconButton } from "../IconButton";
import { VisibleIcon } from "../icons/VisibleIcon";
import { HiddenIcon } from "../icons/HiddenIcon";
import { Button } from "../Button";
import { FirebaseError } from "@firebase/util";
import { FormError } from "../FormError";

export interface PasswordFormValue {
    email: string;
    password: string;
  }

  interface PasswordFormProps
  extends Omit<JSX.IntrinsicElements["form"], "onSubmit"> {
  loading: boolean;
  onSubmit: (value: PasswordFormValue) => void;
  error?: FirebaseError;
}

export function PasswordForm({

    loading,
    error,
    onSubmit,
    ...props
  }: PasswordFormProps) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isHidden, setIsHidden] = React.useState(true);
  
    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
      event.stopPropagation();
  
      onSubmit({
        email,
        password,
      });
    }
  
    return (
     <>
        <form onSubmit={handleSubmit} {...props} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6">
      <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
        Email
      </label>

      <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email address"
            className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
      </div>
          
      <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="Password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>

      <Input
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isHidden ? "password" : "text"}
              placeholder="Password"
              minLength={6}
              className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {(isHidden && (
              <IconButton
                onClick={() => setIsHidden(false)}
                className="absolute top-1/2 right-0.5rem transform -translate-y-1/2"
              >
                <VisibleIcon className="w-24 h-24 inline-flex text-current" />
              </IconButton>
            )) || (
              <IconButton
                onClick={() => setIsHidden(true)}
                className="absolute top-1/2 right-0.5rem transform -translate-y-1/2"
              >
                <HiddenIcon className="w-24 h-24 inline-flex text-current" />
              </IconButton>
            )}
    </div>

        
          {error && <FormError>{error.message}</FormError>}
          <Button
            loading={loading}
            disabled={loading}
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            type="submit"
          >
            Submit
          </Button>
        </form>
        
        </>
    );
  }