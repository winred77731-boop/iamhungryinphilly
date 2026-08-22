import { StackedCardGallery, type StackedGalleryPhoto } from "@/components/ui/StackedCardGallery";

const photos: StackedGalleryPhoto[] = [
  { img: "/images/gallery-1-new.png", alt: "Documentary interview production inside a Philadelphia church", label: "On set" },
  { img: "/images/gallery-1.jpg", alt: "Broad Street Ministry exterior sign", label: "Broad Street Ministry" },
  { img: "/images/gallery-2.jpg", alt: "Welcome mural inside Broad Street Ministry", label: "Radical hospitality" },
  { img: "/images/gallery-3.jpg", alt: "Documentary crew preparing an interview inside the sanctuary", label: "Interview setup" },
  { img: "/images/gallery-4.jpg", alt: "Documentary crew filming an interview inside the sanctuary", label: "Camera rolling" },
  { img: "/images/gallery-6.jpg", alt: "Stained-glass windows inside the Philadelphia sanctuary", label: "The sanctuary" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-editorial-section">
      <div className="gallery-editorial-linework" aria-hidden="true" />
      <div className="container-wide relative z-10 pt-[100px] md:pt-[120px]">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="sub-title">Behind the Scenes</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-source-sans)" }}>
            From the <span className="text-accent">streets</span>
          </h2>
        </div>
      </div>

      <StackedCardGallery photos={photos} />
    </section>
  );
}
