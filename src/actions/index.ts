import { FormData } from "@/types/types";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import z, { ZodError } from "zod";

export const FormSchema = z.object({
	name: z.string().min(5, { message: "Name must be at least 5 characters" }),
	email: z.string().email(),
	message: z
		.string()
		.min(20, { message: "Message must be at least 20 characters" }),
});

export async function sendForm(formData: FormData) {
	try {
		const body = FormSchema.parse(formData);

		try {
			const response = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
				body,
				{
					publicKey: process.env
						.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
				},
			);

			console.log("EMAILJS SUCCESS...", response.status, response.text);
			return "SUCCESS";
		} catch (err) {
			if (err instanceof EmailJSResponseStatus) {
				console.log("EMAILJS FAILED...", err);
				return "ERROR";
			}

			return "ERROR";
		}
	} catch (e) {
		const error = e as ZodError;

		if (!error.isEmpty) return error.format();
	}
}
