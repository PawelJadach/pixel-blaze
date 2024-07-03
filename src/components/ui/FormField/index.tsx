import { FormFieldProps } from "@/types/types";

const FormField: React.FC<FormFieldProps> = ({
	type,
	placeholder,
	name,
	register,
	error,
}) => (
	<>
		<div className="w-full relative pb-4">
			<input
				className="bg-transparent border border-light rounded-xl px-4 py-2 w-full"
				type={type}
				placeholder={placeholder}
				{...register(name)}
			/>
			<p className="text-xs text-red-400 absolute bottom-0 left-0">
				{error && error.message}
			</p>
		</div>
	</>
);
export default FormField;
