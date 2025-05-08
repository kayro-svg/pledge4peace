import type React from "react"
export interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
}

export interface FooterLink {
  href: string
  label: string
}

export interface Stat {
  icon: React.ReactNode
  value: string
  label: string
}

export interface ProcessStep {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Project {
  image: string
  title: string
  description: string
  votes: number
}

export interface Leader {
  id: number
  image: string
  name: string
  position: string
}

export interface Article {
  image: string
  title: string
  description: string
  date?: string
}

export interface Conference {
  id: number
  image: string
  date: string
  title: string
  description: string
}
