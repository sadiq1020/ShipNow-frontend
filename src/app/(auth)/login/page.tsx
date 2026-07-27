"use client";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormField } from "@/components/ui/FormField";
import { LogoSymbol } from "@/components/ui/LogoSymbol";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  function onSubmit(values: LoginFormValues) {
    // No real backend per assignment scope — simulate a session.
    window.localStorage.setItem("shipnow_session", "true");
    if (values.rememberMe) {
      window.localStorage.setItem("shipnow_remember", "true");
    }
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Brand panel — stacked full-width on Tablet, side-by-side on Desktop */}
      <div className="hidden flex-col items-center justify-between bg-brand px-[106px] py-[106px] md:flex md:h-[1024px] md:w-full lg:h-auto lg:w-1/2">
        <div className="flex items-center gap-3">
          <LogoSymbol color="#1E1E1E" className="h-[46.96px] w-[46.96px]" />
          <span className="text-[34.43px] font-black italic tracking-tight text-[#FEFEFE]">
            SHIPNOW
          </span>
        </div>

        <div className="relative h-[499px] w-[553px]">
          <Image
            src="/images/login-hero.png"
            alt="Delivery van with packages"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 553px"
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[40px] font-extrabold leading-[110%] text-[#FEFEFE]">
            Welcome to ShipNow
          </h2>
          <p className="text-base font-normal leading-[125%] text-[#FEFEFE]">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex w-full flex-1 items-center justify-center bg-white px-6 py-12 lg:px-40 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[400px] flex-col gap-8 md:max-w-[480px] lg:max-w-[400px]">
          <div className="flex flex-col items-center gap-3 text-center">
            <LogoSymbol color="#856DF3" className="h-[40px] w-[34px]" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-text-primary">
                Welcome Back
              </h1>
              <p className="text-sm text-text-secondary">
                Log in to continue managing your logistics with ShipNow
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-8">
              <FormField
                label="Email Address"
                type="email"
                placeholder="Enter a valid email address"
                error={errors.email?.message}
                autoComplete="email"
                {...register("email")}
              />

              <FormField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                error={errors.password?.message}
                autoComplete="current-password"
                rightSlot={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="text-text-secondary"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                }
                {...register("password")}
              />
            </div>

            <div className="flex items-center justify-between">
              <Checkbox
                name="rememberMe"
                control={control}
                label="Remember Me"
              />
              <Link
                href="/forgot-password"
                className="text-[11px] font-semibold text-brand"
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" isLoading={isSubmitting}>
              Login
            </Button>

            <p className="text-center text-xs text-text-secondary">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-brand">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}