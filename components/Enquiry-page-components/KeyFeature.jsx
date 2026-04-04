import { ArrowBigDownDash, Bubbles, ChartNoAxesGantt, Factory, FireExtinguisher, Plug, Rotate3d, SprayCan, Workflow } from "lucide-react";
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
  { title: "Construction", img: "/Enquiry/2152006125.webp" },
  { title: "Mines", img: "/Enquiry/500px-Kalgoorlie_The_Big_Pit_DSC04498.jpg" },
  { title: "Roads", img: "/Enquiry/highways.jpg" },
  { title: "Cement & Steel Industries", img: "/Enquiry/DSC_40.jpg" },
];

export default function FeaturesApplications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:py-20">
      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold mb-4">KEY FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 border-2 px-5 py-5 rounded-lg">
              <span className="text-lg bg-red-400 h-10 w-10 flex justify-center items-center rounded-full">{feature.icon}</span>
              <span className="text-red-500 font-bold text-lg">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-2xl font-bold mb-4">APPLICATIONS</h2>
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
