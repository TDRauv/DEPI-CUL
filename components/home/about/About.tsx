import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";
import SectionTitle from "@/components/ui/typography/SectionTitle";

import AboutImage from "./AboutImage";
import AboutFeatures from "./AboutFeatures";

import { about } from "@/data/about";

export default function About(){

return(

<Section className="bg-[#F8FAFC]">

<Container>

<div className="grid items-center gap-20 lg:grid-cols-2">

<AboutImage/>

<div>

<SectionBadge>

Conoce el DEPI

</SectionBadge>

<div className="mt-6">

<SectionTitle>

{about.title}

</SectionTitle>

</div>

<SectionSubtitle>

{about.description}

</SectionSubtitle>

<AboutFeatures

items={about.features}

/>

<Link

href="/ecosistema-cul-global"

className="
mt-10
inline-flex
rounded-full
bg-[#003B70]
px-8
py-4
font-semibold
text-white
transition
hover:bg-[#002B52]
"

>

Conoce más

</Link>

</div>

</div>

</Container>

</Section>

)

}
