import { useState } from "react"
import { Level } from "@/components/Level"

const Index = () => {
  const [levels, setLevels] = useState({
    level1: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level2: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level3: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
    level4: {
      archetype: 5,
      state: 5,
      trait: 5,
      practice: 5,
      mechanism: 5,
      ideal: 5,
    },
  })

  const handleValueChange = (level: string, key: string, value: number[]) => {
    setLevels(prev => ({
      ...prev,
      [level]: {
        ...prev[level as keyof typeof prev],
        [key]: value[0]
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Progress Dashboard</h1>
        
        <Level
          title="Level 1: Law of Impermanence"
          internalTriangle={{
            archetype: "Forgiving Lover",
            state: "Open Heart",
            trait: "Compassionate Wisdom"
          }}
          externalTriangle={{
            practice: "Letting Go",
            mechanism: "Decaying Conditions",
            ideal: "Unconditional Love"
          }}
          values={levels.level1}
          onValueChange={(key, value) => handleValueChange('level1', key, value)}
        />

        <Level
          title="Level 2: Law of Coherence"
          internalTriangle={{
            archetype: "Accepting Magician",
            state: "Sharp Mind",
            trait: "Curious Clarity"
          }}
          externalTriangle={{
            practice: "Pattern Recognition",
            mechanism: "Iterating Organisation",
            ideal: "Future Building"
          }}
          values={levels.level2}
          onValueChange={(key, value) => handleValueChange('level2', key, value)}
        />

        <Level
          title="Level 3: Law of Agency"
          internalTriangle={{
            archetype: "Responsible King",
            state: "Present Awareness",
            trait: "Integral Peace"
          }}
          externalTriangle={{
            practice: "Decision Making",
            mechanism: "Conscious Choosing",
            ideal: "Meaningful Life"
          }}
          values={levels.level3}
          onValueChange={(key, value) => handleValueChange('level3', key, value)}
        />

        <Level
          title="Level 4: Law of Competence"
          internalTriangle={{
            archetype: "Grateful Warrior",
            state: "Vital Body",
            trait: "Courageous Power"
          }}
          externalTriangle={{
            practice: "Energized Action",
            mechanism: "Learning Skills",
            ideal: "Impactful Activity"
          }}
          values={levels.level4}
          onValueChange={(key, value) => handleValueChange('level4', key, value)}
        />
      </div>
    </div>
  )
}

export default Index