"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const projectType = String(formData.get("projectType") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Project type: ${projectType}

Message:
${message}`,
    );

    window.location.href =
      `mailto:milosdimitrijevicc2005@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-[#d7ff38]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
          >
            Your email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full border border-white/10 bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-[#d7ff38]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
        >
          Project type
        </label>

        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="w-full border border-white/10 bg-[#0c0d0b] px-4 py-4 text-sm text-white outline-none transition focus:border-[#d7ff38]"
        >
          <option value="" disabled>
            Select a project type
          </option>

          <option value="Business website">Business website</option>
          <option value="Full-stack application">
            Full-stack application
          </option>
          <option value="E-commerce website">E-commerce website</option>
          <option value="Frontend development">
            Frontend development
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
        >
          Tell me about your project
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell me what you would like to build, what the main goal is and which features you need..."
          className="w-full resize-none border border-white/10 bg-white/[0.025] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-700 focus:border-[#d7ff38]"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-zinc-600">
          Submitting this form opens your default email application with the
          message already prepared.
        </p>

        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-4 bg-[#d7ff38] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white"
        >
          Send inquiry
          <span className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </button>
      </div>
    </form>
  );
}