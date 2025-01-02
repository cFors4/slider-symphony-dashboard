import { Slider } from "@/components/ui/slider"

interface ProgressSliderProps {
  label: string;
  value: number;
  onChange: (value: number[]) => void;
  labelClassName?: string;
}

export function ProgressSlider({ label, value, onChange, labelClassName }: ProgressSliderProps) {
  // Extract the color class from labelClassName
  const colorClass = labelClassName?.split(' ').find(cls => cls.includes('-text'))?.replace('-text', '') || '';

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className={`slider-label ${labelClassName}`}>{label}</label>
        <span className="text-sm text-muted-foreground">{value}/10</span>
      </div>
      <Slider
        defaultValue={[value]}
        max={10}
        step={1}
        onValueChange={onChange}
        className={colorClass}
      />
    </div>
  )
}