import "./Button.scss";
import React from "react";
import { motion, MotionProps } from "motion/react";

type themeType = "primary" | "outline" | "gold" | "outline-white" | "";

interface btnPropTypes extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  theme: themeType;
  motionProps: MotionProps;
}

const BaseButton = (props: btnPropTypes) => {
  const { children, theme, motionProps, className, ...otherProps } = props;

  return (
    <button {...otherProps}>
      <motion.div
        className={`btn inline-block px-6 py-3.5 transition-base rounded-full ${theme ? `btn-${theme}` : ""} ${className ?? ""}`}
        {...motionProps}
      >
        {children}
      </motion.div>
    </button>
  );
};

interface aPropTypes extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  theme: themeType;
  href: string;
  motionProps: MotionProps | undefined;
}

const AnchorButton = (props: aPropTypes) => {
  const { children, theme, href, motionProps, className, ...otherProps } =
    props;

  return (
    <a href={href} {...otherProps}>
      <motion.div
        className={`btn inline-block px-6 py-3.5 transition-base rounded-full ${theme ? `btn-${theme}` : ""} ${className ?? ""}`}
        {...motionProps}
      >
        {children}
      </motion.div>
    </a>
  );
};

export { BaseButton, AnchorButton };
