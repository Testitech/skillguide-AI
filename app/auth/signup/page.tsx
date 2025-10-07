"use-client";

import { title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function SignUp() {
  return (
    <section className="text-center">
      <div className="flex flex-col space-y-5">
        <h1 className={title({ class: "text-4xl font-semibold" })}>
          Welcome Back
        </h1>
        <span className="text-gray-700">
          Get started by creating an account
        </span>
      </div>
      <div className="flex flex-col mt-10">
        <Form className="w-full justify-center items-center space-y-4">
          <Input
            type="text"
            className="sm:w-[500px] w-[350px]"
            label="Name"
            labelPlacement="inside"
          />
          <Input
            type="email"
            className="sm:w-[500px] w-[350px]"
            label="Email"
            labelPlacement="inside"
          />
          <Input
            type="password"
            className="sm:w-[500px] w-[350px]"
            label="Password"
            labelPlacement="inside"
          />

          <Button
            className="sm:w-[500px] w-[350px] mt-7 py-7 text-large"
            color="primary"
            variant="flat"
          >
            Sign Up
          </Button>

          <div className="border-b border-gray-200 w-[400px] py-2"></div>

          <Button
            className="sm:w-[500px] w-[350px] py-7 text-large"
            color="default"
            variant="flat"
          >
            Continue as guest
          </Button>

          <Link href="/auth/login" color="primary">
            Already have an account? Sign In
          </Link>

          {/* <button>Submit</button> */}
        </Form>
      </div>
    </section>
  );
}
