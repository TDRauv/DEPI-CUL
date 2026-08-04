import { CheckCircle2 } from "lucide-react";

interface Props {
    items:string[];
}

export default function AboutFeatures({
    items
}:Props){

    return(

<div className="mt-3 grid gap-1">

{items.map((item,index)=>(

<div
key={index}
className="flex items-center gap-4"
>

<div className="rounded-full bg-blue-100 p-2">

<CheckCircle2
size={20}
className="text-[#003B70]"
/>

</div>

<span className="text-lg text-slate-700">

{item}

</span>

</div>

))}

</div>

)

}