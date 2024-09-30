import Image from "next/image";
import '@styles/group-clients.css'
import abb from "@assets/clients/abb.svg"
import aes from "@assets/clients/aes gener.png"
import bhp from "@assets/clients/bhp billiton.png"
import centinela from "@assets/clients/centinela minerals.svg"
import codelco from "@assets/clients/codelco.svg"
import collahuasi from "@assets/clients/collahuasi.png"
import engie from "@assets/clients/engie.png"
import eso from "@assets/clients/eso.jpg"
import lomas from "@assets/clients/lomas bayas.png"
import sacyr from "@assets/clients/sacyr.png"
import ultraport from "@assets/clients/ultraport.png"
import gnlm from "@assets/clients/GNLM.png"

export const GroupClients = () => {
  return (
<div className="client-logo-container">
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={abb} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={aes} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={bhp} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={centinela} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={codelco} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={collahuasi} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={engie} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={eso} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={lomas} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={sacyr} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="client-logo client-logo-item !flex items-center gap-1 !max-w-[400px]">
    <Image loading="lazy" src={ultraport} alt="Logo de la marca Kidde" className="logo-slide" />
    <p className="uppercase font-bold text-[20px] font-sans tracking-wider text-gray-700">ULTRAPORT</p>
  </figure>
  <figure className="client-logo client-logo-item">
    <Image loading="lazy" src={gnlm} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
</div>
  )
}
