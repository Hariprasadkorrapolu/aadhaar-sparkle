import { useState } from "react";
import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import { CheckCircle, XCircle, RotateCcw, PlayCircle, Trophy, Star, Target } from "lucide-react";

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
  },
  {
    id: 6,
    question: "What is the maximum scholarship amount available through DBT for undergraduate students?",
    options: [
      "₹10,000",
      "₹50,000",
      "₹1,00,000",
      "₹2,00,000"
    ],
    correctAnswer: 2,
    explanation: "Undergraduate students can receive scholarships up to ₹1,00,000 per year through various DBT schemes like Post Matric Scholarship and Merit-cum-Means scholarship."
  },
  {
    id: 7,
    question: "Which document is NOT required for Aadhaar seeding at bank branch?",
    options: [
      "Original Aadhaar Card",
      "Bank Passbook",
      "Passport",
      "Registered Mobile Number"
    ],
    correctAnswer: 2,
    explanation: "While Aadhaar Card, Bank Passbook, and registered mobile number are essential, passport is not required for Aadhaar seeding process."
  },
  {
    id: 8,
    question: "How often are LPG subsidies credited through DBT?",
    options: [
      "Daily",
      "Weekly",
      "Monthly after cylinder booking",
      "Yearly"
    ],
    correctAnswer: 2,
    explanation: "LPG subsidies are automatically credited to your account monthly after you book and receive a cylinder, typically ₹200-300 per cylinder."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [watchedVideo, setWatchedVideo] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      const newStreak = streakCount + 1;
      setStreakCount(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
    } else {
      setStreakCount(0);
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
    setStreakCount(0);
    setMaxStreak(0);
    setWatchedVideo(false);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🏆 Perfect! You're an Aadhaar DBT Expert!";
    if (percentage >= 87.5) return "🌟 Outstanding! You have excellent knowledge!";
    if (percentage >= 75) return "👏 Great job! You understand DBT very well!";
    if (percentage >= 62.5) return "👍 Good work! You have solid understanding!";
    if (percentage >= 50) return "📚 Keep learning! You're on the right track!";
    return "💪 Don't give up! Review the guide and try again!";
  };

  if (quizCompleted) {
    const perfectScore = score === questions.length;
    const percentage = (score / questions.length) * 100;
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Achievement Card */}
          <FlashCard variant={perfectScore ? "success" : "gradient"} className="text-center">
            <div className="mb-4">
              {perfectScore ? (
                <Trophy className="w-16 h-16 mx-auto mb-4 animate-bounce-in text-yellow-500" />
              ) : (
                <Target className="w-16 h-16 mx-auto mb-4" />
              )}
            </div>
            <h1 className="text-3xl font-bold mb-4">
              {perfectScore ? "🏆 Perfect Score!" : "Quiz Completed! 🎊"}
            </h1>
            <div className="text-6xl font-bold mb-4">{score}/{questions.length}</div>
            <div className="text-2xl font-semibold mb-4">{Math.round(percentage)}%</div>
            <p className="text-lg mb-6">{getScoreMessage(score)}</p>
            
            {perfectScore && (
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <p className="text-sm opacity-90">🎉 Congratulations! You've mastered DBT knowledge!</p>
              </div>
            )}
          </FlashCard>

          {/* Statistics */}
          <FlashCard>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-primary" />
              Your Performance Analytics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-success">{score}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{maxStreak}</div>
                <div className="text-sm text-muted-foreground">Best Streak</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-accent">{Math.round(percentage)}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
            
            {maxStreak >= 5 && (
              <div className="mt-4 text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  🔥 Fire Streak Achievement: {maxStreak} in a row!
                </div>
              </div>
            )}
          </FlashCard>

          {/* Video Tutorial */}
          <FlashCard variant="accent">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {watchedVideo ? "✅ Video Watched!" : "📹 Learn More"}
                </h3>
                <p className="opacity-90">
                  {watchedVideo ? "Great! Now you're ready to apply." : "Watch our step-by-step video tutorial"}
                </p>
              </div>
              <PlayCircle className="w-8 h-8" />
            </div>
            
            {!watchedVideo ? (
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={() => setWatchedVideo(true)}
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Watch Complete DBT Guide (8:45)
              </Button>
            ) : (
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm">Tutorial completed! +50 bonus points</p>
              </div>
            )}
          </FlashCard>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={restartQuiz}
              variant="outline"
              size="lg"
              className="btn-flash"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>
            <Button 
              size="lg" 
              className="btn-flash"
              onClick={() => window.location.href = '/dbt-status'}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Check My Status
            </Button>
          </div>

          {/* Social Share */}
          {percentage >= 75 && (
            <FlashCard variant="gradient" className="text-center">
              <h4 className="font-semibold mb-2">🎉 Share Your Achievement!</h4>
              <p className="text-sm opacity-90 mb-4">
                You scored {Math.round(percentage)}% on the Aadhaar DBT Quiz!
              </p>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                📱 Share Score
              </Button>
            </FlashCard>
          )}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Game Stats Header */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          <FlashCard className="text-center p-3">
            <div className="text-xl font-bold text-primary">{score}</div>
            <div className="text-xs text-muted-foreground">Score</div>
          </FlashCard>
          <FlashCard className="text-center p-3">
            <div className="text-xl font-bold text-success">{streakCount}</div>
            <div className="text-xs text-muted-foreground">Streak</div>
          </FlashCard>
          <FlashCard className="text-center p-3">
            <div className="text-xl font-bold text-accent">{maxStreak}</div>
            <div className="text-xs text-muted-foreground">Best</div>
          </FlashCard>
          <FlashCard className="text-center p-3">
            <div className="text-xl font-bold text-muted-foreground">{currentQuestion + 1}/{questions.length}</div>
            <div className="text-xs text-muted-foreground">Progress</div>
          </FlashCard>
        </div>

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
          <div className="progress-bar h-3">
            <div 
              className="progress-fill h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {streakCount >= 3 && (
            <div className="text-center mt-2 animate-bounce-in">
              <span className="text-sm text-orange-500 font-medium bg-orange-100 px-3 py-1 rounded-full">
                🔥 {streakCount} answer streak! Keep it up!
              </span>
            </div>
          )}
        </div>

        {/* Question Card */}
        <FlashCard className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-semibold flex-1 pr-4">{currentQ.question}</h2>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Q{currentQuestion + 1}
            </div>
          </div>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                  selectedAnswer === index
                    ? "border-primary bg-primary/10 shadow-lg transform scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                    selectedAnswer === index 
                      ? "border-primary bg-primary" 
                      : "border-muted-foreground"
                  }`}>
                    {selectedAnswer === index && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
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
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 mr-2 text-red-400" />
              )}
              <span className="font-semibold text-lg">
                {selectedAnswer === currentQ.correctAnswer ? "🎉 Correct!" : "❌ Not quite right"}
              </span>
            </div>
            <p className="text-sm opacity-90 mb-3">{currentQ.explanation}</p>
            
            {selectedAnswer === currentQ.correctAnswer && streakCount > 0 && (
              <div className="bg-white/20 rounded p-2 text-xs">
                <span className="font-medium">Streak bonus: +{streakCount} points!</span>
              </div>
            )}
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
              💡 Show Answer
            </Button>
          )}
          
          {showResult && (
            <Button
              onClick={handleNext}
              size="lg"
              className="flex-1 btn-flash"
            >
              {currentQuestion < questions.length - 1 ? (
                <>Next Question →</>
              ) : (
                <>🏁 Finish Quiz</>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;