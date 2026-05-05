import {
  ArrowBigDownDash,
  Bubbles,
  ChartNoAxesGantt,
  Factory,
  FireExtinguisher,
  Plug,
  Rotate3d,
  SprayCan,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const features = [
  { icon: <ChartNoAxesGantt />, text: "Range up to 100m" },
  { icon: <Bubbles />, text: "Low Water Use" },
  { icon: <Workflow />, text: "Fully Automatic Rotation" },
  { icon: <Rotate3d />, text: "360-degree Coverage" },
  { icon: <SprayCan />, text: "Wide Spray Coverage" },
  { icon: <FireExtinguisher />, text: "Adjustable Spray & Autoswing" },
  { icon: <Plug />, text: "Energy & Water Efficient" },
  { icon: <ArrowBigDownDash />, text: "Low Maintenance" },
];

const applications = [
  { title: "Construction", img: "https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777961193/construction_fgg115.webp" },
  { title: "Mines", img: "https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777961193/mines_zkj6cp.webp" },
  { title: "Roads", img: "https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777961193/higway_pghor6.webp" },
  { title: "Cement & Steel Industries", img: "https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777961192/cement_wzbarv.webp" },
];

export default function FeaturesApplications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4 overflow-hidden">
      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center flex-col gap-2 border-2 px-2 py-5 rounded-lg"
            >
              <span className="text-lg bg-red-400 h-10 w-10 flex justify-center items-center rounded-full">
                {feature.icon}
              </span>
              <span className="text-red-500 font-bold text-lg text-center lg:text-left">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        <div className="grid grid-cols-2 gap-4">
          {applications.map((app, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow"
            >
              <Image
                src={app.img}
                alt={app.title}
                width={1000}
                height={1000}
                className="h-full w-auto"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center">
                {app.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
