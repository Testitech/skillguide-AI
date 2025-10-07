"use client";

import { useAuth } from "@/components/AuthProvider";
import { title } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Textarea } from "@heroui/input";
import { useState } from "react";

export default function GuidancePage() {
  let { isLoggedIn, user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState<
    Array<{ prompt: string; response: string; timestamp: string }>
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <section className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className={title()}>AI Guidance Center</h1>
            <p className="text-xl text-gray-600 pt-5">
              Get Personalised advice for your decisions and skill development
            </p>
          </div>

          {/* prompt form */}
          <div className="bg-white rounded-lg p-4 mb-8 shadow-md">
            <Form className="space-y-4">
              <div>
                <Textarea
                  label="What Guidance do you need?"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  id="prompt"
                  className="w-full"
                  placeholder="Describe your situation, challenge, or decision you need help with..."
                  variant="flat"
                ></Textarea>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
