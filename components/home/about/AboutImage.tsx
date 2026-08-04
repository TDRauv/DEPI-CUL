import Image from "next/image";

export default function AboutImage(){

return(

<div className="relative">

<Image

src="/about/depi.jpg"

alt="DEPI"

width={700}

height={700}

className="
rounded-[40px]
shadow-2xl
object-cover"
/>

</div>

)

}
