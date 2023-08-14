'use client'
import React,{ useState, useEffect} from 'react'
import { useRouter, useSearchParams  } from "next/navigation";
import { useFirebaseAuth } from "../../auth/firebase";
import { useLoadingCallback } from "react-loading-hook";
import { getGoogleProvider, loginWithProvider } from "./firebase";
//import styles from "./login.module.css";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { PasswordForm } from '@/ui/PasswordForm/PasswordForm';
import { PasswordFormValue } from '@/ui/PasswordForm/PasswordForm';

const Login = () => {
  
  const router = useRouter();
  const params = useSearchParams();
  const [hasLogged, setHasLogged] = React.useState(false);
  const { getFirebaseAuth } = useFirebaseAuth();
  const redirect = params?.get("redirect");
 
  const [handleLoginWithEmailAndPassword, isEmailLoading, error] =
  useLoadingCallback(async ({ email, password }: PasswordFormValue) => {
    setHasLogged(false);
    const auth = getFirebaseAuth();
    const credential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idTokenResult = await credential.user.getIdTokenResult();
    await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idTokenResult.token}`,
      },
    });
    setHasLogged(true);
    router.push(redirect ?? "/");
  });

const [handleLoginWithGoogle, isGoogleLoading] = useLoadingCallback(
  async () => {
    setHasLogged(false);
    const auth = getFirebaseAuth();
    const user = await loginWithProvider(auth, getGoogleProvider(auth));
    const idTokenResult = await user.getIdTokenResult();
    await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idTokenResult.token}`,
      },
    });
    setHasLogged(true);
    router.push(redirect ?? "/");
  }
);

function passRedirectParam(url: string) {
  if (redirect) {
    return `${url}?redirect=${redirect}`;
  }

  return url;
}


  return (
    <PasswordForm
    loading={isEmailLoading}
    onSubmit={handleLoginWithEmailAndPassword}
    error={error}
  />
  )
}

export default Login