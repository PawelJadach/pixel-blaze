import React from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
	return <div className="container">Działa - {params.slug}</div>;
}
