// "use client";
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const websiteRef = useRef(null);
//   const trackerRef = useRef(null);
//   const dashboardRef = useRef(null);
//   const neurolinkRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     const cards = [
//       websiteRef.current,
//       trackerRef.current,
//       dashboardRef.current,
//       neurolinkRef.current,
//     ];

//     gsap.fromTo(
//       cards,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "power2.out",
//       }
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className="my-16 px-4 md:px-8 lg:px-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         App Showcase
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Website Project */}
//         <div
//           ref={websiteRef}
//           className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-xl font-semibold mb-2">Apple-Inspired Website</h3>
//           <p className="text-gray-600 mb-4">
//             A stunning front-end clone of Apple’s product page, built with
//             responsive design, smooth animations, and sleek visuals.
//           </p>
//           <a
//             href="https://tehlil.github.io/website/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Live Demo →
//           </a>
//         </div>

//         {/* Tracker Project */}
//         <div
//           ref={trackerRef}
//           className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-xl font-semibold mb-2">Task Tracker App</h3>
//           <p className="text-gray-600 mb-4">
//             A productivity-focused app that lets users manage tasks with ease,
//             featuring dynamic UI and state handling.
//           </p>
//           <a
//             href="https://tehlil.github.io/tracker/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Live Demo →
//           </a>
//         </div>

//         {/* Dashboard Project */}
//         <div
//           ref={dashboardRef}
//           className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
//           <p className="text-gray-600 mb-4">
//             A fully responsive admin panel with charts, tables, and UI
//             components, tailored for modern analytics.
//           </p>
//           <a
//             href="https://tehlil.github.io/admin-dashboard/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Live Demo →
//           </a>
//         </div>

//         {/* NeuroLink Project */}
//         <div
//           ref={neurolinkRef}
//           className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
//         >
//           <h3 className="text-xl font-semibold mb-2">NeuroLink AI</h3>
//           <p className="text-gray-600 mb-4">
//             An innovative AI project that simulates human-like responses using
//             GPT models, featuring a chat-based UI.
//           </p>
//           <a
//             href="https://tehlil.github.io/NeuroLink/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Live Demo →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppShowcase;

"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const websiteRef = useRef(null);
  const trackerRef = useRef(null);
  const dashboardRef = useRef(null);
  const neurolinkRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      websiteRef.current,
      trackerRef.current,
      dashboardRef.current,
      neurolinkRef.current,
    ];

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="my-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        App Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Apple-Inspired Website */}
        <div
          ref={websiteRef}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <a
            href="https://tehlil.github.io/website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/apple1.png"
              alt="Apple-Inspired Website"
              className="rounded-lg mb-4 cursor-pointer transition-transform hover:scale-105"
            />
          </a>
          <h3 className="text-xl font-semibold mb-2">Apple-Inspired Website</h3>
          <p className="text-gray-600">
            A stunning front-end clone of Apple’s product page, built with
            responsive design, smooth animations, and sleek visuals.
          </p>
        </div>

        {/* Task Tracker App */}
        <div
          ref={trackerRef}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <a
            href="https://tehlil.github.io/tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/finance.png"
              alt="Task Tracker App"
              className="rounded-lg mb-4 cursor-pointer transition-transform hover:scale-105"
            />
          </a>
          <h3 className="text-xl font-semibold mb-2">Task Tracker App</h3>
          <p className="text-gray-600">
            A productivity-focused app that lets users manage tasks with ease,
            featuring dynamic UI and state handling.
          </p>
        </div>

        {/* Admin Dashboard */}
        <div
          ref={dashboardRef}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <a
            href="https://tehlil.github.io/admin-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard.png"
              alt="Admin Dashboard"
              className="rounded-lg mb-4 cursor-pointer transition-transform hover:scale-105"
            />
          </a>
          <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
          <p className="text-gray-600">
            A fully responsive admin panel with charts, tables, and UI
            components, tailored for modern analytics.
          </p>
        </div>

        {/* NeuroLink AI */}
        <div
          ref={neurolinkRef}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <a
            href="https://tehlil.github.io/NeuroLink/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/brainwave.png"
              alt="NeuroLink AI"
              className="rounded-lg mb-4 cursor-pointer transition-transform hover:scale-105"
            />
          </a>
          <h3 className="text-xl font-semibold mb-2">NeuroLink AI</h3>
          <p className="text-gray-600">
            An innovative AI project that simulates human-like responses using
            GPT models, featuring a chat-based UI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
