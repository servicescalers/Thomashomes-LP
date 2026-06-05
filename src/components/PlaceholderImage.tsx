interface PlaceholderImageProps {
  description: string;
  className?: string;
  tall?: boolean;
}

export default function PlaceholderImage({ description, className = '', tall = false }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-slate-700 ${tall ? 'min-h-64' : 'min-h-48'} ${className}`}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10 text-center px-6 py-8 max-w-sm mx-auto">
        <svg
          className="w-10 h-10 text-slate-400 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="text-slate-400 text-xs leading-relaxed font-medium uppercase tracking-wider">
          Placeholder
        </p>
        <p className="text-slate-300 text-sm mt-1 leading-snug">{description}</p>
      </div>
    </div>
  );
}
