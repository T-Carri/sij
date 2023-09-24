import StWindow from "@/app/(components)/stwindow/StWindow";

export default function StPage({ params: { id } }: { params: { id: string } }){




    return(
     
        <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
        <StWindow  prop={id}/>
        </div>
      </div>
    
    )
}