import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function getPriorityColor(priority: 'high' | 'medium' | 'low'): string {
  const colors = {
    high: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300',
    medium: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300',
    low: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300',
  };
  return colors[priority];
}

export function isOverdue(deadline?: Date): boolean {
  if (!deadline) return false;
  return new Date() > deadline;
}