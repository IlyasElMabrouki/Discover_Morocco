'use client'
import Link from 'next/link';

export default function EventButton() {

  return (
    <Link href="/company/newEvent" className="bg-blue-500 border p-2 rounded">
        Add Event
    </Link>
  );
}