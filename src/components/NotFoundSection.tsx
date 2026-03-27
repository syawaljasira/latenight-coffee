"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdNightsStay } from "react-icons/md";
import { TbHome } from "react-icons/tb";
import { AnchorButton } from "./Button";

const NotFoundSection = () => {
  const [countdown, setCountdown] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="text-center space-y-6 max-w-md">
      <div className="relative mx-auto w-40 h-40">
        <div className="absolute inset-0 rounded-full bg-primary/20 flex items-center justify-center">
          <MdNightsStay className="w-16 h-16 text-gold" />
        </div>

        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-light font-black text-2xl px-4 py-1 rounded-lg whitespace-nowrap shadow-lg">
          404
        </div>
      </div>

      <div className="pt-4 space-y-2">
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-dark text-sm leading-relaxed">
          The page you&lsquo;re looking for doesn&lsquo;t exist or has been
          moved.
        </p>
      </div>

      <p className="text-gray-600 text-xs">
        Redirecting to home in{" "}
        <span className="text-primary font-semibold tabular-nums">
          {countdown}s
        </span>
      </p>

      <div className="flex items-center justify-center gap-3 pt-2">
        <AnchorButton
          theme="primary"
          href="/"
          motionProps={{
            whileHover: { scale: 1.03 },
          }}
          className="inline-flex items-center gap-2"
        >
          <TbHome className="w-5 h-5" />
          Go Home
        </AnchorButton>
      </div>
    </div>
  );
};

export default NotFoundSection;
