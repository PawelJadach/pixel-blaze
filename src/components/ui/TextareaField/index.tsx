import { TextareaFieldProps } from "@/types/types";

const TextareaField: React.FC<TextareaFieldProps> = ({
	placeholder,
	name,
	register,
	error,
}) => (
	<>
		<div className="w-full relative pb-4 w-full">
			<textarea
				className="bg-transparent border border-light rounded-xl px-4 py-2 w-full"
				placeholder={placeholder}
				rows={5}
				{...register(name)}
			/>
			<p className="text-xs text-red-400 absolute bottom-0 left-0">
				{error && error.message}
			</p>
		</div>
	</>
);
export default TextareaField;
