import Image from "next/image";
import type { CSSProperties } from "react";

const reflections = [
  { left: "2%", width: "5%", color: "244, 175, 54", delay: "-2.4s", duration: "8.8s" },
  { left: "10%", width: "5%", color: "214, 238, 255", delay: "-5.2s", duration: "10.4s" },
  { left: "17%", width: "6%", color: "99, 191, 238", delay: "-1.1s", duration: "9.6s" },
  { left: "25%", width: "7%", color: "230, 244, 255", delay: "-6.7s", duration: "11.2s" },
  { left: "32%", width: "5%", color: "222, 55, 100", delay: "-3.6s", duration: "9.2s" },
  { left: "37%", width: "7%", color: "198, 230, 248", delay: "-7.8s", duration: "12s" },
  { left: "44%", width: "5%", color: "211, 47, 91", delay: "-4.3s", duration: "10.8s" },
  { left: "49%", width: "4%", color: "218, 52, 92", delay: "-8.1s", duration: "11.6s" },
  { left: "54%", width: "6%", color: "207, 236, 249", delay: "-2.9s", duration: "9.9s" },
  { left: "60%", width: "6%", color: "238, 171, 52", delay: "-6.1s", duration: "10.6s" },
  { left: "68%", width: "5%", color: "234, 163, 38", delay: "-1.8s", duration: "8.9s" },
  { left: "76%", width: "5%", color: "205, 234, 249", delay: "-7.2s", duration: "11.4s" },
  { left: "83%", width: "5%", color: "235, 166, 45", delay: "-3.1s", duration: "9.5s" },
  { left: "91%", width: "4%", color: "210, 237, 251", delay: "-5.6s", duration: "10.9s" },
  { left: "96%", width: "3%", color: "235, 170, 53", delay: "-2.2s", duration: "9.1s" },
];

export function RiverLightBackdrop() {
  return (
    <div className="river-light-backdrop" aria-hidden="true">
      <div className="river-light-photo">
        <Image src="/images/philly-skyline.jpg" alt="" fill priority sizes="100vw" className="object-cover animate-slow-zoom" />
      </div>
      <div className="river-light-photo-shade" />
      <div className="river-light-depth" />
      <div className="river-light-reflections">
        {reflections.map((reflection, index) => (
          <span
            key={index}
            className="river-light-ray"
            style={{
              "--ray-left": reflection.left,
              "--ray-width": reflection.width,
              "--ray-color": reflection.color,
              "--ray-delay": reflection.delay,
              "--ray-duration": reflection.duration,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="river-light-dots" />
    </div>
  );
}
