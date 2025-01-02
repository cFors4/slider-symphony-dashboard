import { useState } from "react"
import { ProgressSlider } from "@/components/ProgressSlider"
import { Toggle } from "@/components/ui/toggle"

interface LevelProps {
  title: string;
  essence: string;
  poweredBy: string;
  internalTriangle: {
    archetype: string;
    state: string;
    trait: string;
  };
  externalTriangle: {
    practice: string;
    mechanism: string;
    ideal: string;
  };
  values: {
    [key: string]: number;
  };
  onValueChange: (key: string, value: number[]) => void;
}

export function Level({ 
  title, 
  essence,
  poweredBy,
  internalTriangle, 
  externalTriangle, 
  values, 
  onValueChange 
}: LevelProps) {
  const [view, setView] = useState<'internal' | 'external'>('internal');

  return (
    <div className="mb-12 rounded-lg bg-[#1a1f2c] p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-mono text-primary">{title}</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="essence-text font-mono">Essence: {essence}</span>
          <span className="text-[#8E9196] font-mono">Powered by: {poweredBy}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <Toggle
          pressed={view === 'internal'}
          onPressedChange={() => setView('internal')}
          className="px-4 py-2 font-mono text-sm"
        >
          Internal (Being)
        </Toggle>
        <Toggle
          pressed={view === 'external'}
          onPressedChange={() => setView('external')}
          className="px-4 py-2 font-mono text-sm"
        >
          External (Doing)
        </Toggle>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {view === 'internal' && (
          <div className="space-y-8 p-6 rounded-lg bg-[#151822]">
            <div className="text-[#8E9196] font-mono text-sm mb-6">
              How aligned, embodied, and resonant is your being to these?
            </div>
            <div className="space-y-6">
              <ProgressSlider
                label={`Archetype: ${internalTriangle.archetype}`}
                value={values.archetype}
                onChange={(value) => onValueChange('archetype', value)}
                labelClassName="archetype-text font-mono"
              />
              <ProgressSlider
                label={`State: ${internalTriangle.state}`}
                value={values.state}
                onChange={(value) => onValueChange('state', value)}
                labelClassName="state-text font-mono"
              />
              <ProgressSlider
                label={`Trait: ${internalTriangle.trait}`}
                value={values.trait}
                onChange={(value) => onValueChange('trait', value)}
                labelClassName="trait-text font-mono"
              />
            </div>
          </div>
        )}

        {view === 'external' && (
          <div className="space-y-8 p-6 rounded-lg bg-[#151822]">
            <div className="text-[#8E9196] font-mono text-sm mb-6">
              How Active, Momentum filled, and self-evident is the progressing in these?
            </div>
            <div className="space-y-6">
              <ProgressSlider
                label={`Practice: ${externalTriangle.practice}`}
                value={values.practice}
                onChange={(value) => onValueChange('practice', value)}
                labelClassName="practice-text font-mono"
              />
              <ProgressSlider
                label={`Mechanism: ${externalTriangle.mechanism}`}
                value={values.mechanism}
                onChange={(value) => onValueChange('mechanism', value)}
                labelClassName="mechanism-text font-mono"
              />
              <ProgressSlider
                label={`Ideal: ${externalTriangle.ideal}`}
                value={values.ideal}
                onChange={(value) => onValueChange('ideal', value)}
                labelClassName="ideal-text font-mono"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}