import { useTranslations } from "next-intl";
import React from "react";

const Process = () => {
	const t = useTranslations("Process");

	return (
		<div className="max-w-screen-xl mx-auto mt-20 md:mt-40" id="process">
			<div className="h-1 w-28 bg-primary rounded-xl mb-5" />
			<h1>{t("Header")}</h1>
			<div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left justify-between mt-24">
				<div className="max-w-[250px] space-y-2">
					<h3 className="text-nowrap">
						<span className="text-primary">#</span>1{" "}
						{t("Steps.1.Title")}
					</h3>
					<p>{t("Steps.1.Text")}</p>
				</div>
				<div className="h-1 w-32 bg-primary rounded-xl md:mb-5 rotate-90 md:rotate-0 my-20 md:my-0" />
				<div className="max-w-[250px] space-y-2">
					<h3 className="text-nowrap">
						<span className="text-primary">#</span>2{" "}
						{t("Steps.2.Title")}
					</h3>
					<p>{t("Steps.2.Text")}</p>
				</div>
				<div className="h-1 w-32 bg-primary rounded-xl md:mb-5 rotate-90 md:rotate-0 my-20 md:my-0" />
				<div className="max-w-[250px] space-y-2">
					<h3 className="text-nowrap">
						<span className="text-primary">#</span>3{" "}
						{t("Steps.3.Title")}
					</h3>
					<p>{t("Steps.3.Text")}</p>
				</div>
			</div>
		</div>
	);
};

export default Process;
