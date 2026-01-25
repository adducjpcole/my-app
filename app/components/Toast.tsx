import { useEffect, useState } from 'react';

export default function Toast({
  message,
  duration = 1500,
}: {
  message: string;
  duration?: number;
}) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(false), duration);
    return () => clearTimeout(timer);
  });

  if (!mounted) return null;

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 ml-auto w-max text-center bg-green-500 text-white px-4 py-2 rounded shadow-md">
      {message}
    </div>
  );
}
