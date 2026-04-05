

interface PaginationDotsProps {
  currentStep: number;
  totalSteps: number;
}

export function PaginationDots({ currentStep, totalSteps }: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className="rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: currentStep === index + 1 ? 24 : 8,
            height: 8,
            backgroundColor: currentStep === index + 1 ? '#C0622A' : '#D4C4B0',
          }}
        />
      ))}
    </div>
  );
}
