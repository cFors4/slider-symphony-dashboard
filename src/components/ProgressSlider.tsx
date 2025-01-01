import { Slider } from "@/components/ui/slider"

interface ProgressSliderProps {
  label: string;
  value: number;
  onChange: (value: number[]) => void;
}

export function ProgressSlider({ label, value, onChange }: ProgressSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="slider-label">{label}</label>
        <span className="text-sm text-muted-foreground">{value}/10</span>
      </div>
      <Slider
        defaultValue={[value]}
        max={10}
        step={1}
        onValueChange={onChange}
        className="w-full"
      />
    </div>
  )
}