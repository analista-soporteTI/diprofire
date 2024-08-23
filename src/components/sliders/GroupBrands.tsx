import Image from "next/image";
import '@styles/group-brands.css'
import brand3M from "@assets/brands/3M.png";
import brandChemetron from "@assets/brands/chemetron.png";
import brandEdwards from "@assets/brands/edwards.png";
import brandFenwal from "@assets/brands/fenwal.png";
import brandKidde from "@assets/brands/kidde.png";
import brandNotifier from "@assets/brands/notifier.png";
import brandProtectowire from "@assets/brands/protectowire.png";
import brandVesda from "@assets/brands/vesda.png";

export const GroupBrands = () => {
  return (
<div className="company-logo-container">
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brand3M} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandChemetron} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandEdwards} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandFenwal} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandKidde} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandNotifier} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandProtectowire} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
  <figure className="company-logo company-logo-item">
    <Image loading="lazy" src={brandVesda} alt="Logo de la marca Kidde" className="logo-slide" />
  </figure>
</div>
  )
}
