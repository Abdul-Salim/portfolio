// "use client";

// import { Canvas, Vector3 } from "@react-three/fiber";
// import { OrbitControls, Float, Html, Sparkles, Stars } from "@react-three/drei";
// import { ReactNode, useState } from "react";
// import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiNextdotjs,
//   SiPostgresql,
//   SiRedux,
//   SiTailwindcss,
// } from "react-icons/si";
// import { IconType } from "react-icons";

// // Tech stack array
// const techStack = [
//   { name: "React", color: "#61DAFB", Icon: FaReact },
//   { name: "Next.js", color: "#000000", Icon: SiNextdotjs },
//   { name: "Tailwind", color: "#38BDF8", Icon: SiTailwindcss },
//   { name: "Node.js", color: "#3C873A", Icon: FaNodeJs },
//   { name: "JavaScript", color: "#F7DF1E", Icon: FaJs },
//   { name: "HTML5", color: "#E34F26", Icon: FaHtml5 },
//   { name: "CSS3", color: "#1572B6", Icon: FaCss3 },
//   { name: "Redux", color: "#764ABC", Icon: SiRedux },
//   { name: "PostgreSQL", color: "#336791", Icon: SiPostgresql },
//   { name: "MongoDB", color: "#47A248", Icon: SiMongodb },
// ];

// // Generate helix positions
// const getHelixPositions = (
//   count: number,
//   radius = 4,
//   turns = 1.5,
//   spacing = 0.8
// ): [number, number, number][] => {
//   const angleStep = (Math.PI * 2 * turns) / count;
//   const positions: [number, number, number][] = [];

//   for (let i = 0; i < count; i++) {
//     const angle = i * angleStep;
//     const x = Math.cos(angle) * radius;
//     const z = Math.sin(angle) * radius;
//     const y = (i - count / 2) * spacing;
//     positions.push([x, y, z]);
//   }

//   return positions;
// };

// // Generate random positions for icons with increased spread
// const getRandomPositions = (
//   count: number,
//   radius = 10
// ): [number, number, number][] => {
//   const positions: [number, number, number][] = [];

//   for (let i = 0; i < count; i++) {
//     const x = (Math.random() - 0.5) * radius; // Random x position
//     const y = (Math.random() - 0.5) * radius; // Random y position
//     const z = (Math.random() - 0.5) * radius; // Random z position
//     positions.push([x, y, z]);
//   }

//   return positions;
// };

// function TechIcon({
//   Icon,
//   name,
//   color,
//   position,
//   index,
// }: {
//   Icon: IconType;
//   name: string;
//   color: string;
//   position:
//     | number
//     | Vector3
//     | [x: number, y: number, z: number]
//     | Readonly<
//         number | Vector3 | [x: number, y: number, z: number] | undefined
//       >;
//   index: number;
// }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Float
//       position={position}
//       speed={1 + (index % 4) * 0.1}
//       rotationIntensity={0.6 + (index % 3) * 0.2}
//       floatIntensity={1 + (index % 2)}
//     >
//       <mesh>
//         <Html center>
//           <div
//             className="flex flex-col items-center justify-center"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             style={{ pointerEvents: "auto" }}
//           >
//             <div
//               className="p-3 rounded-full border bg-white/10 backdrop-blur-md shadow-lg"
//               style={{ borderColor: hovered ? "#888" : "#444" }}
//             >
//               <Icon size={40} color={color} />
//             </div>
//             {hovered && (
//               <div className="text-xs mt-2 text-white bg-black/60 px-2 py-1 rounded whitespace-nowrap shadow-md">
//                 {name}
//               </div>
//             )}
//           </div>
//         </Html>
//       </mesh>
//     </Float>
//   );
// }

// export default function FloatingTechIconsHelix() {
//   const positions = getRandomPositions(techStack.length, 10); // Use increased radius for random positions

//   return (
//     <div className="w-full relative z-10 h-[70vh]">
//       <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
//         {/* Lighting */}
//         <ambientLight intensity={0.6} />
//         <pointLight position={[5, 5, 5]} intensity={1.2} />

//         {/* Background sparkles */}
//         <Stars count={50} speed={0.3} radius={2} />

//         {/* Controls */}
//         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

//         {/* Icons */}
//         {techStack.map((tech, index) => (
//           <TechIcon
//             key={tech.name}
//             {...tech}
//             index={index}
//             position={positions[index]} // Use random positions
//           />
//         ))}
//       </Canvas>
//     </div>
//   );
// }
