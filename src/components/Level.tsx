import { ProgressSlider } from "@/components/ProgressSlider"

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
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="level-title">{title}</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
          <span className="text-primary">Essence: {essence}</span>
          <span className="text-muted-foreground">Powered by: {poweredBy}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="triangle-section">
          <h3 className="triangle-title">Internal Triangle</h3>
          <div className="space-y-6">
            <ProgressSlider
              label={`Archetype: ${internalTriangle.archetype}`}
              value={values.archetype}
              onChange={(value) => onValueChange('archetype', value)}
            />
            <ProgressSlider
              label={`State: ${internalTriangle.state}`}
              value={values.state}
              onChange={(value) => onValueChange('state', value)}
            />
            <ProgressSlider
              label={`Trait: ${internalTriangle.trait}`}
              value={values.trait}
              onChange={(value) => onValueChange('trait', value)}
            />
          </div>
        </div>

        <div className="triangle-section">
          <h3 className="triangle-title">External Triangle</h3>
          <div className="space-y-6">
            <ProgressSlider
              label={`Practice: ${externalTriangle.practice}`}
              value={values.practice}
              onChange={(value) => onValueChange('practice', value)}
            />
            <ProgressSlider
              label={`Mechanism: ${externalTriangle.mechanism}`}
              value={values.mechanism}
              onChange={(value) => onValueChange('mechanism', value)}
            />
            <ProgressSlider
              label={`Ideal: ${externalTriangle.ideal}`}
              value={values.ideal}
              onChange={(value) => onValueChange('ideal', value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}