import ProjectDetailPageClient from "./page.client";
import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "Projekte"
}

export default function ProjectDetailPage({params}: {params: {slug: string}}) {
    return <ProjectDetailPageClient params={params} />
}