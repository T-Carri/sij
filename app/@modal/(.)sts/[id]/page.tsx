import Modal from "@/app/(components)/modal/Modal"
import AlertDialogDemo from "@/app/(components)/modal/ModalX"
import StWindow from "@/app/(components)/stwindow/StWindow"
export default function StModal({ params }: { params: { id: string } }) {
  
  
return (
  
      <Modal>
      <StWindow prop={params.id}/>
      </Modal>
  )
}
