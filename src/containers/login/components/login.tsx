"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormInput from "@/components/form/form-input";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/hooks/use-auth";

const FormSchema = z.object({
  userEmail: z.string().nonempty("이메일은 필수입니다."),
  userPassword: z.string().nonempty("비밀번호는 필수입니다."),
});

const Login = () => {
  const { login } = useAuth();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const btnActive = form.formState.isValid;

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    login(data.userEmail);
  };

  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <LogIn className="size-5" />
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-8 mt-12">
              <FormInput
                control={form.control}
                name="userEmail"
                label="이메일"
                inputProps={{
                  type: "email",
                  placeholder: "이메일 주소를 입력해 주세요.",
                }}
              />
              <FormInput
                control={form.control}
                name="userPassword"
                label="비밀번호"
                inputProps={{
                  type: "password",
                  placeholder: "비밀번호를 입력해 주세요.",
                }}
              />
            </div>
            <DialogFooter className="mt-6">
              <Button type="submit" disabled={!btnActive}>
                Log-In
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
