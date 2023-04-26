import "./styles.scss";

import heroImg from "../assets/images/img1.png";

export default function HeroImage() {
  return (
    <div className="image-crop">
      <img src={heroImg} alt="person sitting on a camping van" />
    </div>
  );
}
