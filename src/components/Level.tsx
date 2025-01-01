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
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="level-title">{title}</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="essence-text font-medium">Essence: {essence}</span>
          <span className="text-muted-foreground">Powered by: {poweredBy}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <Toggle
          pressed={view === 'internal'}
          onPressedChange={() => setView('internal')}
          className="px-4 py-2"
        >
          Internal (Being)
        </Toggle>
        <Toggle
          pressed={view === 'external'}
          onPressedChange={() => setView('external')}
          className="px-4 py-2"
        >
          External (Doing)
        </Toggle>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {view === 'internal' && (
          <div className="triangle-section">
            <h3 className="triangle-title">Internal Triangle</h3>
            <div className="space-y-6">
              <ProgressSlider
                label={`Archetype: ${internalTriangle.archetype}`}
                value={values.archetype}
                onChange={(value) => onValueChange('archetype', value)}
                labelClassName="archetype-text"
              />
              <ProgressSlider
                label={`State: ${internalTriangle.state}`}
                value={values.state}
                onChange={(value) => onValueChange('state', value)}
                labelClassName="state-text"
              />
              <ProgressSlider
                label={`Trait: ${internalTriangle.trait}`}
                value={values.trait}
                onChange={(value) => onValueChange('trait', value)}
                labelClassName="trait-text"
              />
            </div>
          </div>
        )}

        {view === 'external' && (
          <div className="triangle-section">
            <h3 className="triangle-title">External Triangle</h3>
            <div className="space-y-6">
              <ProgressSlider
                label={`Practice: ${externalTriangle.practice}`}
                value={values.practice}
                onChange={(value) => onValueChange('practice', value)}
                labelClassName="practice-text"
              />
              <ProgressSlider
                label={`Mechanism: ${externalTriangle.mechanism}`}
                value={values.mechanism}
                onChange={(value) => onValueChange('mechanism', value)}
                labelClassName="mechanism-text"
              />
              <ProgressSlider
                label={`Ideal: ${externalTriangle.ideal}`}
                value={values.ideal}
                onChange={(value) => onValueChange('ideal', value)}
                labelClassName="ideal-text"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}