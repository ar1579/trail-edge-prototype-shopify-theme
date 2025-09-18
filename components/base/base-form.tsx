"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormField {
  id: string
  label: string
  type: "text" | "email" | "password" | "tel" | "select"
  placeholder?: string
  required?: boolean
  options?: string[]
}

interface BaseFormProps {
  fields: FormField[]
  cta: string
  onSubmit?: (data: Record<string, string>) => void
  className?: string
  layout?: "vertical" | "horizontal"
}

export function BaseForm({ fields, cta, onSubmit, className, layout = "vertical" }: BaseFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries()) as Record<string, string>
    onSubmit?.(data)
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)} role="form" aria-label="Form">
      <div className={cn(layout === "horizontal" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4")}>
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            {field.type === "select" ? (
              <select
                id={field.id}
                name={field.id}
                required={field.required}
                className="w-full px-3 py-2 border border-input bg-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">{field.placeholder || `Select ${field.label}`}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full"
              />
            )}
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full">
        {cta}
      </Button>
    </form>
  )
}
