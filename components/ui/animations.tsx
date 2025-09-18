"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

// Fade In Animation
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 500, className }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

// Slide In From Left
export function SlideInLeft({
  children,
  delay = 0,
  className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
        className,
      )}
    >
      {children}
    </div>
  )
}

// Slide In From Right
export function SlideInRight({
  children,
  delay = 0,
  className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
        className,
      )}
    >
      {children}
    </div>
  )
}

// Scale In Animation
export function ScaleIn({
  children,
  delay = 0,
  className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className,
      )}
    >
      {children}
    </div>
  )
}

// Stagger Children Animation
interface StaggerChildrenProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({ children, staggerDelay = 100, className }: StaggerChildrenProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <FadeIn key={index} delay={index * staggerDelay}>
              {child}
            </FadeIn>
          ))
        : children}
    </div>
  )
}

// Hover Scale Animation
export function HoverScale({
  children,
  scale = 1.05,
  className,
}: { children: React.ReactNode; scale?: number; className?: string }) {
  return (
    <div
      className={cn("transition-transform duration-300 ease-out hover:scale-105", className)}
      style={{ "--tw-scale-x": scale, "--tw-scale-y": scale } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

// Pulse Animation
export function Pulse({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("animate-pulse", className)}>{children}</div>
}

// Bounce Animation
export function Bounce({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("animate-bounce", className)}>{children}</div>
}

// Typing Animation
interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
}

export function TypingAnimation({ text, speed = 100, className }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Progress Bar Animation
interface ProgressBarProps {
  progress: number
  className?: string
  showPercentage?: boolean
}

export function ProgressBar({ progress, className, showPercentage = false }: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), 100)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full bg-sand-tan/30 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-forest to-burnt-orange transition-all duration-1000 ease-out"
          style={{ width: `${animatedProgress}%` }}
        />
      </div>
      {showPercentage && <div className="text-sm text-slate-blue mt-1 text-right">{Math.round(animatedProgress)}%</div>}
    </div>
  )
}
