"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface Hero3DProps {
  color: string;
}

/* ------------------------------------------------------------------ */
/*  Weight Plate — a single disc with metallic depth                  */
/* ------------------------------------------------------------------ */
function WeightPlate({
  color,
  size,
  thickness,
  offset,
}: {
  color: string;
  size: number;
  thickness: number;
  offset: number;
}) {
  // Each plate is a stack of thin layers to simulate extrusion depth
  const layers = 6;
  const layerDepth = thickness / layers;

  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateZ(${offset}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {Array.from({ length: layers }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            transform: `translateZ(${i * layerDepth}px)`,
            background:
              i === 0
                ? `radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.03) 40%, transparent 70%),
                   linear-gradient(145deg, #2a2a32 0%, #18181f 50%, #0f0f14 100%)`
                : i === layers - 1
                  ? `radial-gradient(ellipse at 65% 70%, rgba(255,255,255,0.08), transparent 60%),
                     linear-gradient(325deg, #2a2a32 0%, #18181f 50%, #0f0f14 100%)`
                  : `linear-gradient(180deg, #1e1e26 0%, #141419 50%, #0f0f14 100%)`,
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              i === 0
                ? `inset 0 1px 2px rgba(255,255,255,0.08),
                   inset 0 -2px 4px rgba(0,0,0,0.4),
                   0 0 20px ${color}10`
                : i === layers - 1
                  ? `inset 0 -1px 2px rgba(255,255,255,0.05),
                     inset 0 2px 4px rgba(0,0,0,0.4),
                     0 4px 16px rgba(0,0,0,0.5)`
                  : "none",
          }}
        >
          {/* Inner ring groove on front and back faces */}
          {(i === 0 || i === layers - 1) && (
            <>
              {/* Outer beveled ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "8%",
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow: `inset 0 0 6px rgba(0,0,0,0.3)`,
                }}
              />
              {/* Inner hub ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "32%",
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: `radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)`,
                }}
              />
              {/* Center hole */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "40%",
                  background: `radial-gradient(circle, #0a0a0f 60%, #141419)`,
                  border: "1px solid rgba(255,255,255,0.03)",
                  boxShadow: `inset 0 0 8px rgba(0,0,0,0.8)`,
                }}
              />
              {/* Accent color rim glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `inset 0 0 12px ${color}08, 0 0 8px ${color}06`,
                }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bar segment — the connecting rod                                  */
/* ------------------------------------------------------------------ */
function Bar({ color, length }: { color: string; length: number }) {
  const segments = 8;
  const segWidth = length / segments;

  return (
    <div
      className="absolute"
      style={{
        width: length,
        height: 14,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) translateZ(0px)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top face — primary visible surface */}
      <div
        className="absolute w-full rounded-full"
        style={{
          height: 14,
          top: 0,
          transform: "translateZ(7px)",
          background: `linear-gradient(90deg, #1a1a22 0%, #2a2a34 20%, #3a3a44 50%, #2a2a34 80%, #1a1a22 100%)`,
          boxShadow: `inset 0 2px 3px rgba(255,255,255,0.12),
                       inset 0 -1px 2px rgba(0,0,0,0.4),
                       0 0 12px ${color}08`,
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Knurling pattern — fine grip lines */}
        <div
          className="absolute inset-x-[25%] inset-y-[20%] opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent ${segWidth - 1}px, rgba(255,255,255,0.15) ${segWidth - 1}px, rgba(255,255,255,0.15) ${segWidth}px)`,
          }}
        />
      </div>
      {/* Bottom face */}
      <div
        className="absolute w-full rounded-full"
        style={{
          height: 14,
          top: 0,
          transform: "translateZ(-7px)",
          background: `linear-gradient(90deg, #111116 0%, #1a1a22 50%, #111116 100%)`,
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      />
      {/* Side faces — extruded cylinder approximation */}
      <div
        className="absolute w-full"
        style={{
          height: 14,
          top: 0,
          transform: "rotateX(90deg) translateZ(7px)",
          background: `linear-gradient(90deg, #141419, #1e1e26 50%, #141419)`,
          borderLeft: "1px solid rgba(255,255,255,0.04)",
          borderRight: "1px solid rgba(255,255,255,0.04)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Collar — the clamp between bar and plate                          */
/* ------------------------------------------------------------------ */
function Collar({ color, offset }: { color: string; offset: number }) {
  return (
    <div
      className="absolute"
      style={{
        width: 28,
        height: 28,
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateZ(${offset}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {[0, 3, 6].map((z) => (
        <div
          key={z}
          className="absolute inset-0 rounded-full"
          style={{
            transform: `translateZ(${z}px)`,
            background:
              z === 0
                ? `linear-gradient(145deg, #3a3a44, #22222a)`
                : `linear-gradient(180deg, #2a2a34, #1a1a22)`,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              z === 0
                ? `inset 0 1px 2px rgba(255,255,255,0.1), 0 0 6px ${color}08`
                : "none",
          }}
        >
          {/* Center bore */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "30%",
              background: "#0a0a0f",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Silhouette — minimal floating dumbbell                     */
/* ------------------------------------------------------------------ */
function MobileDumbbell({ color }: { color: string }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none sm:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{ opacity: 0.12 }}
      >
        <svg
          width="280"
          height="100"
          viewBox="0 0 280 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left outer plate */}
          <rect x="10" y="10" width="30" height="80" rx="6" fill={color} />
          {/* Left inner plate */}
          <rect x="42" y="18" width="22" height="64" rx="4" fill={color} />
          {/* Left collar */}
          <rect x="66" y="34" width="12" height="32" rx="3" fill={color} />
          {/* Bar */}
          <rect x="78" y="42" width="124" height="16" rx="8" fill={color} />
          {/* Right collar */}
          <rect x="202" y="34" width="12" height="32" rx="3" fill={color} />
          {/* Right inner plate */}
          <rect x="216" y="18" width="22" height="64" rx="4" fill={color} />
          {/* Right outer plate */}
          <rect x="240" y="10" width="30" height="80" rx="6" fill={color} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                       */
/* ------------------------------------------------------------------ */
export default function Hero3D({ color }: Hero3DProps) {
  const [isMobile, setIsMobile] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 1 };
  const rotateX = useSpring(
    useTransform(mouseY, [-400, 400], [12, -12]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-600, 600], [-12, 12]),
    springConfig,
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    const mobile = window.innerWidth < 640;
    setIsMobile(mobile);
    if (!mobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  /* --- Sizing --- */
  const plateOuterSize = 100;
  const plateInnerSize = 78;
  const plateThickness = 14;
  const barLength = 220;
  const collarOffset = 50;

  if (isMobile) {
    return <MobileDumbbell color={color} />;
  }

  return (
    <div
      className="absolute right-[2%] top-[12%] hidden sm:flex items-center justify-center pointer-events-none z-0"
      style={{
        perspective: "900px",
        width: 340,
        height: 340,
      }}
    >
      {/* Ambient glow behind the dumbbell */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${color}12, transparent 70%)`,
        }}
      />

      {/* Mouse-tracked tilt container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Continuous slow rotation + float */}
        <motion.div
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            rotateZ: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
              width: barLength + plateOuterSize + 40,
              height: plateOuterSize + 40,
            }}
          >
            {/* ---- BAR ---- */}
            <Bar color={color} length={barLength} />

            {/* ---- LEFT SIDE ---- */}
            {/* Left collar */}
            <Collar color={color} offset={-collarOffset} />
            {/* Left inner plate */}
            <WeightPlate
              color={color}
              size={plateInnerSize}
              thickness={plateThickness}
              offset={-(collarOffset + 18)}
            />
            {/* Left outer plate */}
            <WeightPlate
              color={color}
              size={plateOuterSize}
              thickness={plateThickness}
              offset={-(collarOffset + 36)}
            />

            {/* ---- RIGHT SIDE ---- */}
            {/* Right collar */}
            <Collar color={color} offset={collarOffset} />
            {/* Right inner plate */}
            <WeightPlate
              color={color}
              size={plateInnerSize}
              thickness={plateThickness}
              offset={collarOffset + 18}
            />
            {/* Right outer plate */}
            <WeightPlate
              color={color}
              size={plateOuterSize}
              thickness={plateThickness}
              offset={collarOffset + 36}
            />

            {/* ---- GROUND SHADOW ---- */}
            <div
              className="absolute rounded-full"
              style={{
                width: "70%",
                height: 12,
                bottom: -30,
                left: "15%",
                background: `radial-gradient(ellipse, ${color}12, transparent 70%)`,
                filter: "blur(8px)",
                transform: "rotateX(90deg)",
              }}
            />

            {/* ---- SPECULAR HIGHLIGHT — top sweep ---- */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: 0,
                background: `linear-gradient(170deg, rgba(255,255,255,0.04) 0%, transparent 40%)`,
                borderRadius: "50%",
                transform: "translateZ(60px)",
              }}
            />

            {/* ---- ACCENT GLOW on plates ---- */}
            <div
              className="absolute rounded-full"
              style={{
                width: plateOuterSize + 20,
                height: plateOuterSize + 20,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translateZ(${-(collarOffset + 36)}px)`,
                boxShadow: `0 0 30px ${color}18, 0 0 60px ${color}08`,
                pointerEvents: "none",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: plateOuterSize + 20,
                height: plateOuterSize + 20,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translateZ(${collarOffset + 36}px)`,
                boxShadow: `0 0 30px ${color}18, 0 0 60px ${color}08`,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating accent particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3,
            height: 3,
            backgroundColor: `${color}30`,
            boxShadow: `0 0 6px ${color}20`,
            top: `${20 + i * 20}%`,
            left: `${15 + i * 22}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
