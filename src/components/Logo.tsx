import logoImage from "/logo-image.png";
import logoText from "/logo-text.png";
import { useState, useEffect } from "react";

interface LogoProps {
    variant?: "full" | "image" | "text";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    showGlow?: boolean;
}

const Logo = ({
    variant = "full",
    size = "md",
    className = "",
    showGlow = true,
}: LogoProps) => {
    const sizeClasses = {
        sm: {
            image: "h-8 w-auto",
            text: "h-6 w-auto",
        },
        md: {
            image: "h-12 w-auto",
            text: "h-8 w-auto",
        },
        lg: {
            image: "h-16 w-auto",
            text: "h-12 w-auto",
        },
        xl: {
            image: "h-20 w-auto",
            text: "h-16 w-auto",
        },
    };

    const glowClass = showGlow ? "glow-jade" : "";

    if (variant === "image") {
        return (
            <img
                src={logoImage}
                alt="INVARITECH Network Globe Icon"
                className={`${sizeClasses[size].image} ${glowClass} ${className}`}
                role="img"
            />
        );
    }

    if (variant === "text") {
        return (
            <img
                src={logoText}
                alt="INVARITECH - Premium Digital Solutions"
                className={`${sizeClasses[size].text} ${glowClass} ${className}`}
                role="img"
            />
        );
    }

    // Full variant (default) - both image and text
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <img
                src={logoImage}
                alt="INVARITECH Network Globe Icon"
                className={`${sizeClasses[size].image} mb-2 ${glowClass}`}
                role="img"
            />
            <img
                src={logoText}
                alt="INVARITECH - Premium Digital Solutions"
                className={`${sizeClasses[size].text} ${glowClass}`}
                role="img"
            />
        </div>
    );
};

export default Logo;
