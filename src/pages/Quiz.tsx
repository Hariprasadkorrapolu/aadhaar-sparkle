import { useState } from "react";
import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the main difference between a normal Aadhaar-linked account and a DBT-enabled account?",
    options: [
      "There is no difference",
      "DBT-enabled accounts can receive government benefits directly",
      "Normal accounts are better for banking",
      "DBT accounts require more documentation"
    ],
    correctAnswer: 1,
    explanation: "DBT-enabled accounts allow direct transfer of government benefits like scholarships, subsidies, and pensions directly to your bank account."
  },
  {
    id: 2,
    question: "How can you seed your Aadhaar with your bank account?",
    options: [
      "Only by visiting the bank branch",
      "Only through online banking",
      "Through branch visit, online banking, or mobile banking",
      "It's not possible to seed Aadhaar"
    ],
    correctAnswer: 2,
    explanation: "You can seed your Aadhaar through multiple methods: visiting the bank branch, using online banking, or through mobile banking apps."
  },
  {
    id: 3,
    question: "What information do you need to provide for Aadhaar seeding?",
    options: [
      "Only Aadhaar number",
      "Aadhaar number and mobile number",
      "Aadhaar number, name as per Aadhaar, and mobile number",
      "Only bank account details"
    ],
    correctAnswer: 2,
    explanation: "For Aadhaar seeding, you need to provide your 12-digit Aadhaar number, name exactly as mentioned in Aadhaar, and registered mobile number."
  },
  {
    id: 4,
    question: "Which of these benefits can you receive through DBT?",
    options: [
      "Only scholarships",
      "Only cooking gas subsidies",
      "Scholarships, subsidies, pensions, and other government benefits",
      "Only employment benefits"
    ],
    correctAnswer: 2,
    explanation: "DBT covers a wide range of benefits including scholarships, cooking gas subsidies, MGNREGA payments, pensions, and various other government schemes."
  },
  {
    id: 5,
    question: "How long does it typically take for Aadhaar seeding to be completed?",
    options: [
      "Immediately",
      "1-2 working days",
      "1 week",
      "1 month"
    ],
    correctAnswer: 1,
    explanation: "Aadhaar seeding typically takes 1-2 working days to be completed and reflected in the bank's system."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = (score: number) => {
    if (score === questions.length) return "Perfect! You're an Aadhaar expert! 🎉";
    if (score >= questions.length * 0.8) return "Excellent! You understand Aadhaar very well! 👏";
    if (score >= questions.length * 0.6) return "Good job! You have a solid understanding! 👍";
    return "Keep learning! Review the information and try again. 📚";
  };

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <FlashCard variant="success" className="text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Completed! 🎊</h1>
            <div className="text-6xl font-bold mb-4">{score}/{questions.length}</div>
            <p className="text-lg mb-6">{getScoreMessage(score)}</p>
            <Button
              onClick={restartQuiz}
              variant="outline"
              size="lg"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </FlashCard>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="progress-bar h-2">
            <div 
              className="progress-fill h-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <FlashCard className="mb-6">
          <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswer === index ? "border-primary bg-primary" : "border-muted-foreground"
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </FlashCard>

        {/* Result Card */}
        {showResult && (
          <FlashCard 
            variant={selectedAnswer === currentQ.correctAnswer ? "success" : "accent"}
            className="mb-6 animate-bounce-in"
          >
            <div className="flex items-center mb-3">
              {selectedAnswer === currentQ.correctAnswer ? (
                <CheckCircle className="w-6 h-6 mr-2" />
              ) : (
                <XCircle className="w-6 h-6 mr-2" />
              )}
              <span className="font-semibold">
                {selectedAnswer === currentQ.correctAnswer ? "Correct!" : "Incorrect"}
              </span>
            </div>
            <p className="text-sm opacity-90">{currentQ.explanation}</p>
          </FlashCard>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          {selectedAnswer !== null && !showResult && (
            <Button
              onClick={handleShowResult}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Show Answer
            </Button>
          )}
          
          {showResult && (
            <Button
              onClick={handleNext}
              size="lg"
              className="flex-1 btn-flash"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;