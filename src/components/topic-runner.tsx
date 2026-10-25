"use client";

import { useState } from "react";
import Link from "next/link";
import { TopicData } from "@/lib/topics-data";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  Sparkles,
  BookOpen,
  RotateCcw,
} from "lucide-react";

export function TopicRunner({ topic }: { topic: TopicData }) {
  const [activeTab, setActiveTab] = useState<"LESSON" | "QUIZ">("LESSON");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = topic.questions[currentQuestionIdx];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    if (idx === currentQ.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < topic.questions.length) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setCorrectCount(0);
    setQuizFinished(false);
    setActiveTab("QUIZ");
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Back button */}
      <div>
        <Link
          href="/dashboard/learn"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Curriculum</span>
        </Link>
      </div>

      {/* Topic Title Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {topic.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">{topic.description}</p>
      </div>

      {/* Stage Tab Buttons */}
      <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
        <button
          onClick={() => setActiveTab("LESSON")}
          className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition ${
            activeTab === "LESSON"
              ? "bg-indigo-600 text-white shadow"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Lesson Content</span>
        </button>
        <button
          onClick={() => setActiveTab("QUIZ")}
          className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition ${
            activeTab === "QUIZ"
              ? "bg-indigo-600 text-white shadow"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Scenario Quiz (5 MCQs)</span>
        </button>
      </div>

      {/* LESSON TAB */}
      {activeTab === "LESSON" && (
        <div className="space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl text-slate-200 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Understanding</span>
            </div>

            {topic.lessonContent.map((paragraph, i) => (
              <p key={i} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Key Defensive Takeaways:
              </h4>
              <div className="space-y-2">
                {topic.takeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setActiveTab("QUIZ")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold px-6 py-3 rounded-xl text-xs shadow-lg shadow-indigo-500/25 transition"
            >
              <span>Test Knowledge with Scenario Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* QUIZ TAB */}
      {activeTab === "QUIZ" && (
        <div>
          {!quizFinished ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800">
                <span className="font-mono text-cyan-400">
                  Question {currentQuestionIdx + 1} of {topic.questions.length}
                </span>
                <span>Current Score: {correctCount} correct</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIdx + 1) / topic.questions.length) * 100}%`,
                  }}
                />
              </div>

              {/* Scenario */}
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Real-World Dilemma:
                </span>
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentQ.scenario}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800";

                  if (hasAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-red-950/40 border-red-500 text-red-200";
                    } else {
                      btnStyle = "bg-slate-950/40 border-slate-900 text-slate-400 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition flex items-start justify-between gap-3 ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {hasAnswered && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {hasAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {hasAnswered && (
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed">
                    <span className="font-bold text-cyan-400 block mb-1">
                      {selectedOption === currentQ.correctIndex ? "✅ Correct Strategy!" : "❌ Not the best response:"}
                    </span>
                    <p className="text-slate-300">{currentQ.explanation}</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold px-6 py-2.5 rounded-xl text-xs transition"
                    >
                      <span>
                        {currentQuestionIdx + 1 === topic.questions.length
                          ? "View Final Results"
                          : "Next Scenario"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                <Award className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Scenario Quiz Complete!</h3>
                <p className="text-xs text-slate-400 mt-1">
                  You scored {correctCount} out of {topic.questions.length} scenarios correctly
                </p>
              </div>

              <div className="inline-block p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-3xl font-black text-cyan-400">
                  {Math.round((correctCount / topic.questions.length) * 100)}%
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">
                  Accuracy Score
                </div>
              </div>

              <div className="text-xs text-emerald-400 font-medium">
                🎉 +{correctCount * 3 + 5} points added to your Safety Score!
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium px-4 py-2.5 rounded-xl text-xs transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry Quiz</span>
                </button>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition"
                >
                  <span>Return to Teen Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
