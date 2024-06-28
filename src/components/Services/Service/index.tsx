import { ReactNode } from "react";

type ServiceProps = {
	icon: ReactNode;
	header: string;
	text: string;
};

const Service = ({ icon, header, text }: ServiceProps) => {
	return (
		<div className="max-w-[230px] flex flex-col items-center text-center md:items-start justify-items-start md:text-left gap-3">
			{icon}
			<h3>{header}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Service;
