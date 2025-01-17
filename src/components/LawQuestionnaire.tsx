import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Recommendation = {
  law: string;
  aspect: "being" | "doing";
  focus: string;
};

export const LawQuestionnaire = ({
  onComplete
}: {
  onComplete: (recommendation: Recommendation) => void;
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mainConcern: "",
    preferredApproach: "",
    developmentArea: "",
  });
  const { toast } = useToast();

  const concerns = {
    emotional: "Law of Impermanence",
    clarity: "Law of Coherence",
    direction: "Law of Agency",
    practical: "Law of Competence",
  };

  const handleNext = () => {
    if (!answers.mainConcern && step === 1) {
      toast({
        title: "Please select an option",
        description: "Choose what resonates most with your current situation",
        variant: "destructive",
      });
      return;
    }
    if (!answers.preferredApproach && step === 2) {
      toast({
        title: "Please select an option",
        description: "Choose your preferred approach",
        variant: "destructive",
      });
      return;
    }
    if (!answers.developmentArea && step === 3) {
      toast({
        title: "Please select an option",
        description: "Choose an area you'd like to develop",
        variant: "destructive",
      });
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      const recommendation: Recommendation = {
        law: concerns[answers.mainConcern as keyof typeof concerns],
        aspect: answers.preferredApproach as "being" | "doing",
        focus: answers.developmentArea,
      };
      onComplete(recommendation);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          {step === 1 && "What's your main concern right now?"}
          {step === 2 && "How would you prefer to approach this?"}
          {step === 3 && "Which area would you like to develop?"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <RadioGroup
            value={answers.mainConcern}
            onValueChange={(value) =>
              setAnswers({ ...answers, mainConcern: value })
            }
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="emotional" id="emotional" />
              <Label htmlFor="emotional">
                I'm dealing with emotional challenges and need more love and
                acceptance
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="clarity" id="clarity" />
              <Label htmlFor="clarity">
                I need more clarity and understanding in my life
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="direction" id="direction" />
              <Label htmlFor="direction">
                I'm seeking direction and purpose in my decisions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="practical" id="practical" />
              <Label htmlFor="practical">
                I want to develop practical skills and resilience
              </Label>
            </div>
          </RadioGroup>
        )}

        {step === 2 && (
          <RadioGroup
            value={answers.preferredApproach}
            onValueChange={(value) =>
              setAnswers({ ...answers, preferredApproach: value })
            }
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="being" id="being" />
              <Label htmlFor="being">
                Internal work (Being) - Focus on inner development
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="doing" id="doing" />
              <Label htmlFor="doing">
                External work (Doing) - Focus on actions and practices
              </Label>
            </div>
          </RadioGroup>
        )}

        {step === 3 && (
          <RadioGroup
            value={answers.developmentArea}
            onValueChange={(value) =>
              setAnswers({ ...answers, developmentArea: value })
            }
            className="space-y-4"
          >
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="archetype" id="archetype" className="mt-1" />
              <Label htmlFor="archetype" className="flex flex-col">
                <span className="font-medium">Embodying the Archetype (Being)</span>
                <span className="text-sm text-muted-foreground">Inhabiting and expressing the qualities of a specific archetypal figure that represents your desired state</span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="state" id="state" className="mt-1" />
              <Label htmlFor="state" className="flex flex-col">
                <span className="font-medium">Honing the State (Being)</span>
                <span className="text-sm text-muted-foreground">Cultivating and maintaining a specific internal state or way of being</span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="trait" id="trait" className="mt-1" />
              <Label htmlFor="trait" className="flex flex-col">
                <span className="font-medium">Aligning to a Trait (Being)</span>
                <span className="text-sm text-muted-foreground">Developing and integrating a specific character quality or attribute</span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="practice" id="practice" className="mt-1" />
              <Label htmlFor="practice" className="flex flex-col">
                <span className="font-medium">Practicing (Doing)</span>
                <span className="text-sm text-muted-foreground">Engaging in specific activities or exercises to develop skills and capabilities</span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="mechanism" id="mechanism" className="mt-1" />
              <Label htmlFor="mechanism" className="flex flex-col">
                <span className="font-medium">Embracing a Mechanism (Doing)</span>
                <span className="text-sm text-muted-foreground">Working with specific processes or systems that facilitate growth and change</span>
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="ideal" id="ideal" className="mt-1" />
              <Label htmlFor="ideal" className="flex flex-col">
                <span className="font-medium">Aiming for the Ideal (Doing)</span>
                <span className="text-sm text-muted-foreground">Setting and working towards specific goals or standards of excellence</span>
              </Label>
            </div>
          </RadioGroup>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          )}
          <Button
            className="ml-auto"
            onClick={handleNext}
          >
            {step === 3 ? "Complete" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};