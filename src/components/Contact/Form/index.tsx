"use client";
import { FormSchema, sendForm } from "@/actions";
import FormField from "@/components/ui/FormField";
import TextareaField from "@/components/ui/TextareaField";
import { FormData } from "@/types/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
	const [status, setStatus] = useState<"SUCCESS" | "ERROR" | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = async (data: FormData) => {
		const status = await sendForm(data);

		if (status === "ERROR" || status === "SUCCESS") {
			setStatus(status);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-6 w-full max-w-[650px]"
		>
			{status !== "SUCCESS" && (
				<>
					<div className="w-full flex flex-col md:flex-row justify-between gap-6">
						<FormField
							type="text"
							placeholder="Name"
							name="name"
							register={register}
							error={errors.name}
						/>
						<FormField
							type="email"
							placeholder="Email"
							name="email"
							register={register}
							error={errors.email}
						/>
					</div>
					<TextareaField
						error={errors.message}
						name="message"
						placeholder="Message"
						register={register}
					/>
					<button
						className="w-full"
						disabled={isSubmitting || status === "ERROR"}
					>
						submit
					</button>
				</>
			)}
			{status === "ERROR" && (
				<p className="text-xl text-red-400">
					Something went wrong... Try again later
				</p>
			)}
			{status === "SUCCESS" && (
				<p className="text-5xl text-primary m-auto font-bold flex flex-col justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-14"
					>
						<path
							fill-rule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Message sent!</span>
				</p>
			)}
		</form>
	);
};

export default Form;
