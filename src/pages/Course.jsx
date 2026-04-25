import { useEffect, useMemo, useState } from "react";
import styles from "../styles/Course.module.css";

const courseData = {
  id: "REQ-QHSE102",
  title: "Offshore Safety Fundamentals",
  subtitle: "Maritime safety e-learning course",
  language: "English",
  averageScore: 84,
  estimatedDuration: "2h 10min",
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Fire Safety Procedures",
      status: "completed",
      steps: [
        {
          id: "m1-step-1",
          number: 1,
          title: "Introduction to Fire Risks Onboard",
          type: "reading",
          duration: "5 min",
          status: "completed",
          description:
            "Learn the main fire hazards found on vessels and offshore installations, including machinery spaces, electrical systems, and fuel handling areas.",
          content:
            "Fire is one of the most serious risks at sea. Crew members must understand ignition sources, combustible materials, and correct reporting procedures. Special attention must be paid to engine rooms, electrical cabinets, galley areas, and fuel transfer operations.",
        },
        {
          id: "m1-step-2",
          number: 2,
          title: "Using Firefighting Equipment",
          type: "video",
          duration: "8 min",
          status: "completed",
          description:
            "Video lesson covering extinguishers, fire hoses, emergency alarms, and safe first response actions.",
          video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        },
        {
          id: "m1-step-3",
          number: 3,
          title: "Fire Safety Quiz",
          type: "quiz",
          duration: "6 min",
          status: "completed",
          description:
            "Answer questions about onboard fire hazards and correct emergency response.",
          questions: [
            {
              id: "q1",
              question: "Which area onboard usually presents one of the highest fire risks?",
              options: [
                "Engine room",
                "Sleeping cabin",
                "Open deck walkway",
                "Mess hall table",
              ],
              correctIndex: 0,
            },
            {
              id: "q2",
              question: "What is the first action after discovering a fire?",
              options: [
                "Hide the source",
                "Raise the alarm",
                "Continue work",
                "Wait for instructions silently",
              ],
              correctIndex: 1,
            },
            {
              id: "q3",
              question: "Fire extinguishers should only be used if it is safe to do so.",
              options: ["True", "False"],
              correctIndex: 0,
            },
          ],
        },
      ],
    },
    {
      id: "module-2",
      number: 2,
      title: "Man Overboard Response",
      status: "current",
      steps: [
        {
          id: "m2-step-1",
          number: 1,
          title: "MOB Immediate Actions",
          type: "reading",
          duration: "5 min",
          status: "completed",
          description:
            "Understand the first actions to take when a person goes overboard, including shouting, pointing, and notifying the bridge.",
          content:
            "When a person goes overboard, every second matters. The nearest crew member should raise the alarm immediately, keep visual contact, point continuously toward the casualty, and inform the bridge or officer on watch without delay.",
        },
        {
          id: "m2-step-2",
          number: 2,
          title: "Bridge and Deck Coordination",
          type: "video",
          duration: "10 min",
          status: "current",
          description:
            "Training video covering man overboard bridge response, lookout duties, retrieval equipment, and rescue coordination.",
          video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        },
        {
          id: "m2-step-3",
          number: 3,
          title: "MOB Quiz",
          type: "quiz",
          duration: "7 min",
          status: "locked",
          description:
            "Test your understanding of man overboard reporting, bridge communication, and rescue priorities.",
          questions: [
            {
              id: "q1",
              question: "What should a crew member do first after seeing someone fall overboard?",
              options: [
                "Return to cabin",
                "Raise the alarm and point at the casualty",
                "Write a report",
                "Wait for the captain",
              ],
              correctIndex: 1,
            },
            {
              id: "q2",
              question: "Why is continuous visual contact important during a man overboard event?",
              options: [
                "To estimate vessel speed",
                "To prevent losing sight of the casualty",
                "To check fuel usage",
                "To calm passengers",
              ],
              correctIndex: 1,
            },
            {
              id: "q3",
              question: "Who should be informed immediately?",
              options: [
                "The bridge / officer on watch",
                "The catering team",
                "The port agent only",
                "Nobody until shift change",
              ],
              correctIndex: 0,
            },
            {
              id: "q4",
              question: "Recovery actions must follow the vessel’s approved emergency procedures.",
              options: ["True", "False"],
              correctIndex: 0,
            },
          ],
        },
        {
          id: "m2-step-4",
          number: 4,
          title: "MOB Result Example",
          type: "result",
          duration: "—",
          status: "locked",
          result: {
            passed: false,
            score: 75,
            required: 80,
            timeSpent: "00:08:21",
            attemptsLeft: "2",
          },
        },
      ],
    },
    {
      id: "module-3",
      number: 3,
      title: "PPE and Safe Conduct",
      status: "locked",
      steps: [
        {
          id: "m3-step-1",
          number: 1,
          title: "Required PPE Onboard",
          type: "reading",
          duration: "6 min",
          status: "locked",
          description:
            "Learn when helmets, gloves, eye protection, hearing protection, and lifejackets are required.",
          content:
            "Personal protective equipment must be selected based on the task, area, and hazard involved. Standard PPE may include helmet, safety footwear, eye protection, hearing protection, gloves, and high-visibility clothing. Additional equipment may be required depending on vessel operations.",
        },
        {
          id: "m3-step-2",
          number: 2,
          title: "Deck Safety and Restricted Areas",
          type: "video",
          duration: "9 min",
          status: "locked",
          description:
            "Video lesson about safe movement onboard, hazard zones, permits, and restricted access areas.",
          video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        },
        {
          id: "m3-step-3",
          number: 3,
          title: "PPE Quiz",
          type: "quiz",
          duration: "6 min",
          status: "locked",
          description:
            "Answer questions about PPE requirements and safe behaviour in operational spaces.",
          questions: [
            {
              id: "q1",
              question: "Which of the following is an example of PPE?",
              options: [
                "Safety helmet",
                "Fuel valve",
                "Navigation chart",
                "Bridge window",
              ],
              correctIndex: 0,
            },
            {
              id: "q2",
              question: "Should restricted areas be entered without authorization?",
              options: ["Yes", "No"],
              correctIndex: 1,
            },
            {
              id: "q3",
              question: "PPE should be checked before use for damage or defects.",
              options: ["True", "False"],
              correctIndex: 0,
            },
          ],
        },
      ],
    },
    {
      id: "module-4",
      number: 4,
      title: "Emergency Communication",
      status: "locked",
      steps: [
        {
          id: "m4-step-1",
          number: 1,
          title: "Emergency Reporting Chain",
          type: "reading",
          duration: "5 min",
          status: "locked",
          description:
            "Understand who to report to, what details to provide, and how to communicate clearly during emergency situations.",
          content:
            "Emergency communication must be clear, direct, and immediate. A crew member should report the type of incident, exact location, persons involved, and whether immediate assistance is required. Miscommunication can delay response and increase risk.",
        },
        {
          id: "m4-step-2",
          number: 2,
          title: "Radio and Alarm Procedures",
          type: "video",
          duration: "11 min",
          status: "locked",
          description:
            "Watch procedures for alarms, internal communication, radio use, and emergency announcements.",
          video:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        },
      ],
    },
  ],
};

const Course = () => {
  const [modules, setModules] = useState(courseData.modules);
  const [currentModuleId, setCurrentModuleId] = useState("module-2");
  const [currentStepId, setCurrentStepId] = useState("m2-step-2");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentModule =
    modules.find((module) => module.id === currentModuleId) || modules[0];

  const currentStep =
    currentModule.steps.find((step) => step.id === currentStepId) ||
    currentModule.steps[0];

  const currentModuleIndex = modules.findIndex((m) => m.id === currentModule.id);
  const currentStepIndex = currentModule.steps.findIndex(
    (s) => s.id === currentStep.id
  );

  const totalSteps = modules.reduce((sum, module) => sum + module.steps.length, 0);
  const completedSteps = modules.reduce(
    (sum, module) =>
      sum + module.steps.filter((step) => step.status === "completed").length,
    0
  );
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [currentStepId]);

  const selectModule = (moduleId) => {
    const module = modules.find((m) => m.id === moduleId);
    if (!module) return;

    setCurrentModuleId(moduleId);

    const firstAvailableStep =
      module.steps.find((step) => step.status !== "locked") || module.steps[0];

    setCurrentStepId(firstAvailableStep.id);
  };

  const selectStep = (stepId) => {
    setCurrentStepId(stepId);
  };

  const goPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepId(currentModule.steps[currentStepIndex - 1].id);
      return;
    }

    if (currentModuleIndex > 0) {
      const prevModule = modules[currentModuleIndex - 1];
      setCurrentModuleId(prevModule.id);
      setCurrentStepId(prevModule.steps[prevModule.steps.length - 1].id);
    }
  };

  const goNextStep = () => {
    if (currentStepIndex < currentModule.steps.length - 1) {
      setCurrentStepId(currentModule.steps[currentStepIndex + 1].id);
      return;
    }

    if (currentModuleIndex < modules.length - 1) {
      const nextModule = modules[currentModuleIndex + 1];
      setCurrentModuleId(nextModule.id);

      const firstAvailableStep =
        nextModule.steps.find((step) => step.status !== "locked") ||
        nextModule.steps[0];

      setCurrentStepId(firstAvailableStep.id);
    }
  };

  const markCompleteAndNext = () => {
    const updatedModules = modules.map((module) => {
      if (module.id !== currentModule.id) return module;

      const updatedSteps = module.steps.map((step, index) => {
        if (step.id === currentStep.id) {
          return { ...step, status: "completed" };
        }

        if (index === currentStepIndex + 1 && step.status === "locked") {
          return { ...step, status: "current" };
        }

        return step;
      });

      const moduleStatus = updatedSteps.every((s) => s.status === "completed")
        ? "completed"
        : updatedSteps.some((s) => s.status === "current")
        ? "current"
        : module.status;

      return {
        ...module,
        status: moduleStatus,
        steps: updatedSteps,
      };
    });

    if (currentModuleIndex < updatedModules.length - 1) {
      const nextModule = updatedModules[currentModuleIndex + 1];

      if (
        currentStepIndex === currentModule.steps.length - 1 &&
        nextModule.status === "locked"
      ) {
        nextModule.status = "current";
        if (nextModule.steps[0].status === "locked") {
          nextModule.steps[0] = {
            ...nextModule.steps[0],
            status: "current",
          };
        }
      }
    }

    setModules([...updatedModules]);
    goNextStep();
  };

  const quizQuestion =
    currentStep.type === "quiz" ? currentStep.questions[currentQuestionIndex] : null;

  const renderGradientProgress = (score) => (
    <div className={styles.resultProgressTrack}>
      <div
        className={styles.resultProgressFill}
        style={{ width: `${score}%` }}
      >
        <div
          className={styles.resultProgressGradient}
          style={{
            width: score > 0 ? `${100 / (score / 100)}%` : "100%",
          }}
        />
      </div>
    </div>
  );

  const renderStepContent = () => {
    if (currentStep.type === "reading") {
      return (
        <div className={styles.lessonCard}>
          <div className={styles.lessonCardHeader}>
            <div>
              <div className={styles.lessonMetaTop}>
                <span className={styles.lessonCounter}>
                  Module {currentModule.number} · Step {currentStep.number} of{" "}
                  {currentModule.steps.length}
                </span>
                <span className={styles.lessonDurationBadge}>
                  {currentStep.duration}
                </span>
              </div>

              <h2 className={styles.lessonTitle}>
                {currentModule.title} — {currentStep.title}
              </h2>

              <p className={styles.lessonType}>Reading lesson</p>
            </div>

            <div className={styles.lessonNav}>
              <button
                type="button"
                className={styles.navButton}
                onClick={goPrevStep}
                disabled={currentModuleIndex === 0 && currentStepIndex === 0}
              >
                Previous
              </button>

              <button
                type="button"
                className={styles.navButtonPrimary}
                onClick={goNextStep}
              >
                Next
              </button>
            </div>
          </div>

          <p className={styles.lessonDescription}>{currentStep.description}</p>

          <div className={styles.readingBlock}>
            <h3 className={styles.readingHeading}>Lesson content</h3>
            <p className={styles.readingText}>{currentStep.content}</p>
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={styles.secondaryAction}
              onClick={goPrevStep}
              disabled={currentModuleIndex === 0 && currentStepIndex === 0}
            >
              Previous Step
            </button>

            <button
              type="button"
              className={styles.primaryAction}
              onClick={markCompleteAndNext}
            >
              Mark Complete & Next
            </button>
          </div>
        </div>
      );
    }

    if (currentStep.type === "video") {
      return (
        <div className={styles.lessonCard}>
          <div className={styles.lessonCardHeader}>
            <div>
              <div className={styles.lessonMetaTop}>
                <span className={styles.lessonCounter}>
                  Module {currentModule.number} · Step {currentStep.number} of{" "}
                  {currentModule.steps.length}
                </span>
                <span className={styles.lessonDurationBadge}>
                  {currentStep.duration}
                </span>
              </div>

              <h2 className={styles.lessonTitle}>
                {currentModule.title} — {currentStep.title}
              </h2>

              <p className={styles.lessonType}>Video lesson</p>
            </div>

            <div className={styles.lessonNav}>
              <button
                type="button"
                className={styles.navButton}
                onClick={goPrevStep}
                disabled={currentModuleIndex === 0 && currentStepIndex === 0}
              >
                Previous
              </button>

              <button
                type="button"
                className={styles.navButtonPrimary}
                onClick={goNextStep}
              >
                Next
              </button>
            </div>
          </div>

          <p className={styles.lessonDescription}>{currentStep.description}</p>

          <div className={styles.videoWrap}>
            <video className={styles.video} controls src={currentStep.video} />
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={styles.secondaryAction}
              onClick={goPrevStep}
              disabled={currentModuleIndex === 0 && currentStepIndex === 0}
            >
              Previous Step
            </button>

            <button
              type="button"
              className={styles.primaryAction}
              onClick={markCompleteAndNext}
            >
              Mark Complete & Next
            </button>
          </div>
        </div>
      );
    }

    if (currentStep.type === "quiz") {
      return (
        <div className={styles.lessonCard}>
          <div className={styles.lessonCardHeader}>
            <div>
              <div className={styles.lessonMetaTop}>
                <span className={styles.lessonCounter}>
                  Module {currentModule.number} · Quiz
                </span>
                <span className={styles.lessonDurationBadge}>
                  {currentStep.duration}
                </span>
              </div>

              <h2 className={styles.lessonTitle}>
                {currentModule.title} — {currentStep.title}
              </h2>

              <p className={styles.lessonType}>Quiz</p>
            </div>

            <div className={styles.lessonNav}>
              <button
                type="button"
                className={styles.navButton}
                onClick={goPrevStep}
                disabled={currentModuleIndex === 0 && currentStepIndex === 0}
              >
                Previous
              </button>
            </div>
          </div>

          <p className={styles.lessonDescription}>{currentStep.description}</p>

          <div className={styles.quizQuestionNav}>
            {currentStep.questions.map((question, index) => (
              <button
                key={question.id}
                type="button"
                className={`${styles.questionTab} ${
                  index === currentQuestionIndex ? styles.questionTabActive : ""
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                Q{index + 1}
              </button>
            ))}
          </div>

          <div className={styles.quizQuestionCard}>
            <div className={styles.quizQuestionHeader}>
              <span className={styles.quizQuestionCounter}>
                Question {currentQuestionIndex + 1} of {currentStep.questions.length}
              </span>
            </div>

            <h3 className={styles.quizQuestionTitle}>{quizQuestion.question}</h3>

            <div className={styles.quizOptions}>
              {quizQuestion.options.map((option) => (
                <label key={option} className={styles.quizOption}>
                  <input type="radio" name={quizQuestion.id} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.bottomActions}>
            <button
              type="button"
              className={styles.secondaryAction}
              onClick={() =>
                setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={currentQuestionIndex === 0}
            >
              Previous Question
            </button>

            {currentQuestionIndex < currentStep.questions.length - 1 ? (
              <button
                type="button"
                className={styles.primaryAction}
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    Math.min(prev + 1, currentStep.questions.length - 1)
                  )
                }
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                className={styles.primaryAction}
                onClick={markCompleteAndNext}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      );
    }

    if (currentStep.type === "result") {
      return (
        <div className={styles.lessonCard}>
          <div className={styles.lessonCardHeader}>
            <div>
              <div className={styles.lessonMetaTop}>
                <span className={styles.lessonCounter}>
                  Module {currentModule.number} · Result
                </span>
                <span className={styles.lessonDurationBadge}>Summary</span>
              </div>

              <h2 className={styles.lessonTitle}>
                {currentModule.title} — {currentStep.title}
              </h2>

              <p className={styles.lessonType}>Result</p>
            </div>
          </div>

          <div className={styles.resultBox}>
            <div className={styles.resultTop}>
              <div className={styles.resultIllustration}>📋</div>

              <div className={styles.resultSummary}>
                <h3 className={styles.resultTitle}>
                  {currentStep.result.passed ? "You passed." : "You didn't pass."}
                </h3>

                <p className={styles.resultText}>
                  Review your result, score, and remaining attempts before moving
                  to the next module.
                </p>

                <div className={styles.resultStats}>
                  <div className={styles.resultStat}>
                    <span>Your score</span>
                    <b>{currentStep.result.score}%</b>
                  </div>

                  <div className={styles.resultStat}>
                    <span>Score to achieve</span>
                    <b>{currentStep.result.required}%</b>
                  </div>

                  <div className={styles.resultStat}>
                    <span>Time spent</span>
                    <b>{currentStep.result.timeSpent}</b>
                  </div>

                  <div className={styles.resultStat}>
                    <span>Remaining attempts</span>
                    <b>{currentStep.result.attemptsLeft}</b>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.resultProgressBlock}>
              <div className={styles.resultProgressHeader}>
                <span>Your score</span>
                <span>{currentStep.result.score}%</span>
              </div>

              {renderGradientProgress(currentStep.result.score)}
            </div>

            <div className={styles.bottomActions}>
              <button type="button" className={styles.secondaryAction}>
                Review Answers
              </button>
              <button
                type="button"
                className={styles.primaryAction}
                onClick={markCompleteAndNext}
              >
                Continue Course
              </button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.page}>
      <aside className={styles.courseSidebar}>
        <div className={styles.courseHero}>
          <div className={styles.courseThumb}>⚓</div>

          <div className={styles.courseHeroMeta}>
            <h1 className={styles.courseTitle}>
              {courseData.id} — {courseData.title}
            </h1>
            <p className={styles.courseSubtitle}>{courseData.subtitle}</p>
          </div>
        </div>

        <div className={styles.courseStats}>
          <div className={styles.courseStatRow}>
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className={styles.courseStatRow}>
            <span>Average score</span>
            <span>{courseData.averageScore}%</span>
          </div>

          <div className={styles.courseStatRow}>
            <span>Language</span>
            <span>{courseData.language}</span>
          </div>

          <div className={styles.courseStatRow}>
            <span>Duration</span>
            <span>{courseData.estimatedDuration}</span>
          </div>
        </div>

        <div className={styles.modulesMenu}>
          <div className={styles.menuSectionTitle}>Course Modules</div>

          <div className={styles.moduleList}>
            {modules.map((module) => {
              const isCurrentModule = module.id === currentModuleId;

              return (
                <button
                  key={module.id}
                  type="button"
                  className={`${styles.moduleItem} ${
                    isCurrentModule ? styles.moduleItemActive : ""
                  }`}
                  onClick={() => selectModule(module.id)}
                >
                  <div className={styles.moduleItemLeft}>
                    <span className={styles.moduleNumber}>{module.number}</span>

                    <div className={styles.moduleMeta}>
                      <span className={styles.moduleTitle}>
                        Module {module.number} · {module.title}
                      </span>
                      <span className={styles.moduleSub}>
                        {module.steps.length} steps
                      </span>
                    </div>
                  </div>

                  <span
                    className={`${styles.moduleState} ${
                      module.status === "completed"
                        ? styles.lessonCompleted
                        : module.status === "current"
                        ? styles.lessonCurrent
                        : styles.lessonLocked
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.lessonMenu}>
          <div className={styles.menuSectionTitle}>
            Module {currentModule.number} Steps
          </div>

          <div className={styles.lessonSectionItems}>
            {currentModule.steps.map((step) => {
              const isCurrent = step.id === currentStepId;

              return (
                <button
                  key={step.id}
                  type="button"
                  className={`${styles.lessonItem} ${
                    isCurrent ? styles.lessonItemActive : ""
                  }`}
                  onClick={() => selectStep(step.id)}
                >
                  <div className={styles.lessonItemLeft}>
                    <span className={styles.lessonNumber}>{step.number}</span>

                    <div className={styles.lessonItemMeta}>
                      <span className={styles.lessonItemTitle}>
                        Step {step.number} · {step.title}
                      </span>

                      <div className={styles.lessonItemBottom}>
                        <span className={styles.lessonItemType}>
                          {step.type === "video" && "Video"}
                          {step.type === "reading" && "Reading"}
                          {step.type === "quiz" && "Quiz"}
                          {step.type === "result" && "Result"}
                        </span>

                        <span className={styles.lessonItemDot}>•</span>
                        <span className={styles.lessonItemDuration}>
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`${styles.lessonState} ${
                      step.status === "completed"
                        ? styles.lessonCompleted
                        : step.status === "current"
                        ? styles.lessonCurrent
                        : styles.lessonLocked
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <main className={styles.lessonContent}>{renderStepContent()}</main>
    </div>
  );
};

export default Course;