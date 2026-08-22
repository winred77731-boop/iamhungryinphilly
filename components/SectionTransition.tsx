type SectionTransitionProps = {
  variant: "documentary" | "spotlight" | "aurora" | "smoke" | "gallery";
};

export default function SectionTransition({ variant }: SectionTransitionProps) {
  return (
    <div className={`section-transition section-transition--${variant}`} aria-hidden="true">
      <div className="section-transition__wash" />
      <div className="section-transition__arc section-transition__arc--wide" />
      <div className="section-transition__arc section-transition__arc--fine" />
      <div className="section-transition__thread" />
      <div className="section-transition__grain" />
    </div>
  );
}
