// Extra Quiz Pack: 50 tricky exam-style questions (English-only)
(function () {
  const quiz = [
    {
      id: 1371,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A team says it is 'doing BPM' because it bought automation software, but it never defined process scope, analyzed weaknesses, or set monitoring metrics. Which BPM element is most clearly missing?",
      options: [
        "A. An end-to-end management discipline around the process",
        "B. A broader marketing campaign",
        "C. A reference model for the whole industry",
        "D. An organization chart with more departments",
      ],
      correctAnswers: [0],
      explanation:
        "BPM is not just buying technology. It is a discipline for designing, analyzing, executing, and monitoring end-to-end processes.",
      traps: {
        B: "Marketing may matter commercially, but it does not fill the BPM lifecycle gap described.",
        C: "Reference models can help structure thinking, but the missing core is lifecycle-based process management.",
        D: "More departments do not create BPM capability.",
      },
    },
    {
      id: 1372,
      lectureId: 1,
      type: "true-false",
      difficulty: "Medium",
      question:
        "In the BPM lifecycle, Process Implementation is the last phase because monitoring belongs to operations rather than BPM.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Process Monitoring and Controlling is an explicit BPM lifecycle phase that follows implementation and feeds improvement back into the cycle.",
      traps: {
        A: "This ignores the monitoring-and-feedback loop that makes BPM continuous rather than one-off.",
      },
    },
    {
      id: 1373,
      lectureId: 1,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which lifecycle output pairings are correct? (Select ALL that apply)",
      options: [
        "A. Process Discovery -> as-is process model",
        "B. Process Redesign -> to-be process model",
        "C. Process Monitoring and Controlling -> conformance and performance insights",
        "D. Process Identification -> executable process model",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A, B, and C are correct lifecycle outputs. Executable process models arise from implementation, not identification.",
      traps: {
        D: "Process Identification creates a process architecture and prioritized portfolio, not an executable model.",
      },
    },
    {
      id: 1374,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which situation most clearly points to a problem at Rummler's process level rather than the activity/job or organization level?",
      options: [
        "A. Repeated delays occur when work passes from Sales to Finance",
        "B. One employee lacks training on a specific task",
        "C. The company has no clear long-term strategy",
        "D. Capital is insufficient for a major investment",
      ],
      correctAnswers: [0],
      explanation:
        "Cross-functional handoff problems are classic process-level issues. Activity/job issues concern individual task performance; organization-level issues concern strategy and resources.",
      traps: {
        B: "This is an activity/job-level capability issue.",
        C: "This is an organization-level strategy issue.",
        D: "This is an organization-level resource issue.",
      },
    },
    {
      id: 1375,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In a process architecture, which relationship is shown when 'Handle standard return' and 'Handle VIP return' are modeled as variants of 'Handle return'?",
      options: [
        "A. Sequence",
        "B. Decomposition",
        "C. Specialization",
        "D. Prioritization",
      ],
      correctAnswers: [2],
      explanation:
        "Specialization captures variants of a more generic process. Decomposition breaks a process into subprocesses, while sequence captures ordering.",
      traps: {
        A: "Sequence is about one process following another, not variant relationships.",
        B: "Decomposition is parent-child breakdown, not variant definition.",
        D: "Prioritization ranks processes for action; it is not an architecture relation.",
      },
    },
    {
      id: 1376,
      lectureId: 2,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which are valid steps in defining a process landscape model? (Select ALL that apply)",
      options: [
        "A. Clarify terminology among stakeholders",
        "B. Identify end-to-end processes",
        "C. Model every gateway and event at Level 1",
        "D. Check completeness and consistency",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Clarifying terminology, identifying end-to-end processes, and checking completeness/consistency are explicit steps. Detailed BPMN logic does not belong in a Level 1 landscape model.",
      traps: {
        C: "A landscape model is intentionally high-level and should avoid detailed flow logic.",
      },
    },
    {
      id: 1377,
      lectureId: 2,
      type: "true-false",
      difficulty: "Hard",
      question:
        "A process landscape model becomes more accurate when it includes detailed gateways and events for each Level 1 process.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Adding detailed flow logic to a landscape model usually reduces clarity and violates the purpose of Level 1 abstraction.",
      traps: {
        A: "More detail is not the same as better architecture modeling; it often makes the view less useful.",
      },
    },
    {
      id: 1378,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement about reference models such as APQC PCF is most accurate?",
      options: [
        "A. They should be copied verbatim to preserve validity",
        "B. They can accelerate drafting, support completeness checks, and standardize vocabulary",
        "C. They replace stakeholder involvement in process identification",
        "D. They are only useful after detailed BPMN models already exist",
      ],
      correctAnswers: [1],
      explanation:
        "Reference models are starting points and validation aids. They help with completeness and shared terminology, but they still require adaptation and stakeholder input.",
      traps: {
        A: "Blind copying usually creates organizational misfit.",
        C: "Stakeholder involvement remains critical for legitimacy and contextual accuracy.",
        D: "Reference models are often most useful before detailed modeling, not only after it.",
      },
    },
    {
      id: 1379,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Hard",
      question: "Which label is most appropriate for a BPMN activity?",
      options: [
        "A. Invoice",
        "B. Invoice approved",
        "C. Approve invoice",
        "D. Approval of invoice",
      ],
      correctAnswers: [2],
      explanation:
        "Activity labels are best written as verb + object, such as 'Approve invoice'.",
      traps: {
        A: "This is noun-only wording and is more suitable for a data object.",
        B: "This reads like a state or event outcome rather than an action label.",
        D: "Nominalized phrasing is weaker and less action-oriented than verb-object naming.",
      },
    },
    {
      id: 1380,
      lectureId: 3,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which BPMN interaction statements are correct? (Select ALL that apply)",
      options: [
        "A. Sequence flow stays within a pool",
        "B. Message flow can connect different pools",
        "C. Lanes divide a pool by role or department",
        "D. A pool primarily represents a persistent data repository",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A, B, and C reflect standard BPMN collaboration semantics. Pools represent participants, not data repositories.",
      traps: {
        D: "Persistent repositories are modeled as data stores, not pools.",
      },
    },
    {
      id: 1381,
      lectureId: 3,
      type: "true-false",
      difficulty: "Medium",
      question:
        "If an XOR-split is later joined by an AND-gateway, the model is semantically safe because both constructs are valid BPMN symbols.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Using valid symbols does not guarantee valid behavior. A mismatched split/join can introduce synchronization errors or deadlocks.",
      traps: {
        A: "BPMN correctness depends on how symbols interact semantically, not only on whether each symbol exists in the notation.",
      },
    },
    {
      id: 1382,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "What is the most appropriate BPMN element for a persistent repository such as an invoice database?",
      options: [
        "A. Data object",
        "B. Lane",
        "C. Data store",
        "D. Collapsed sub-process",
      ],
      correctAnswers: [2],
      explanation:
        "A data store represents persistent storage. Data objects represent information produced or consumed within process flow.",
      traps: {
        A: "A data object usually represents a document or information item, not a persistent repository.",
        B: "A lane represents responsibility, not storage.",
        D: "A collapsed sub-process hides internal activity detail, not data persistence.",
      },
    },
    {
      id: 1383,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A completed booking must be reversed after a later cancellation request. Which BPMN construct is designed for that reversal?",
      options: [
        "A. Compensation event",
        "B. Timer event",
        "C. Terminate end event",
        "D. OR gateway",
      ],
      correctAnswers: [0],
      explanation:
        "Compensation is specifically meant to undo or reverse effects of already completed work.",
      traps: {
        B: "Timer events react to time conditions, not reversal of prior effects.",
        C: "Terminate stops the process instance; it does not model business reversal logic.",
        D: "Gateways route flow but do not undo completed work.",
      },
    },
    {
      id: 1384,
      lectureId: 4,
      type: "true-false",
      difficulty: "Medium",
      question:
        "An event-based gateway chooses the outgoing path by evaluating data conditions already known at decision time.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "An event-based gateway waits for external events and selects the path of the first event that occurs. Data-based decisions belong to gateways like XOR/OR.",
      traps: {
        A: "This confuses event races with immediate data evaluation.",
      },
    },
    {
      id: 1385,
      lectureId: 4,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which are legitimate BPMN ways to represent repeated work? (Select ALL that apply)",
      options: [
        "A. Loop activity",
        "B. Multi-instance activity",
        "C. XOR-based rework loop",
        "D. Terminate end event",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Repeated work can be modeled with loop markers, multi-instance constructs, or explicit rework loops. A terminate end event stops execution rather than repeating it.",
      traps: {
        D: "Terminate is an ending mechanism, not a repetition construct.",
      },
    },
    {
      id: 1386,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement best distinguishes interrupting from non-interrupting boundary events?",
      options: [
        "A. Interrupting cancels the host activity; non-interrupting lets it continue while a handler starts",
        "B. Interrupting only works on user tasks; non-interrupting only works on service tasks",
        "C. Interrupting is for timers only; non-interrupting is for messages only",
        "D. Interrupting always waits until the host activity finishes first",
      ],
      correctAnswers: [0],
      explanation:
        "Interrupting boundary events cancel the host activity, while non-interrupting boundary events trigger additional flow without canceling the host.",
      traps: {
        B: "The distinction is about execution effect, not task type restriction.",
        C: "Both styles can exist for multiple event types; they are not limited that way.",
        D: "Interrupting means the opposite: the host activity is canceled immediately when triggered.",
      },
    },
    {
      id: 1387,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A domain expert tells three messy case stories; the analyst turns them into one generalized model with gateways and roles. Which discovery challenge is being handled most directly?",
      options: [
        "A. Fragmented knowledge only",
        "B. Thinking at the case level instead of the process logic level",
        "C. Lack of BPMN symbols for exceptions",
        "D. Absence of Balanced Scorecard metrics",
      ],
      correctAnswers: [1],
      explanation:
        "A key discovery challenge is moving from anecdotal case stories to the underlying logic that governs many cases.",
      traps: {
        A: "Fragmented knowledge may also exist, but the described transformation is mainly about abstraction from cases to generalized logic.",
        C: "The issue is not notation scarcity but interpretation and abstraction.",
        D: "Balanced Scorecard metrics are unrelated to this discovery challenge.",
      },
    },
    {
      id: 1388,
      lectureId: 5,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which discovery methods are especially useful for surfacing actual practice rather than only formal SOPs? (Select ALL that apply)",
      options: [
        "A. Observation",
        "B. Interviews",
        "C. Workshops",
        "D. Relying only on old policy documents",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Observation, interviews, and workshops can reveal how work is really done. Old documents alone often miss workarounds and shadow practices.",
      traps: {
        D: "Documents are useful, but relying only on them tends to miss actual execution behavior.",
      },
    },
    {
      id: 1389,
      lectureId: 5,
      type: "true-false",
      difficulty: "Hard",
      question:
        "A BPMN model can be syntactically correct and still be semantically wrong.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "A model may follow BPMN rules perfectly yet still misrepresent how the real process operates. That is a semantic quality problem.",
      traps: {
        B: "Syntax compliance does not guarantee real-world accuracy.",
      },
    },
    {
      id: 1390,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In the 5-step process modeling method, when are data objects and exception handlers typically added?",
      options: [
        "A. Step 1: Identify process boundaries",
        "B. Step 3: Identify resources and handoffs",
        "C. Step 5: Identify additional elements",
        "D. Before any activity is identified",
      ],
      correctAnswers: [2],
      explanation:
        "Data objects, exception handlers, and similar enrichments are typically added in Step 5, after the core flow is already structured.",
      traps: {
        A: "Boundaries define scope, start, and end, not additional modeling detail.",
        B: "Resources and handoffs identify responsibilities, not supporting artifacts and exceptions.",
        D: "Those elements depend on a basic understanding of the process and are not the first modeling step.",
      },
    },
    {
      id: 1391,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A university verifies transcripts in detail before applying a simple budget-cap rule that will reject many cases anyway. Which waste is most evident?",
      options: [
        "A. Move",
        "B. Hold",
        "C. Overdo",
        "D. VA",
      ],
      correctAnswers: [2],
      explanation:
        "Doing substantial work on cases that will later be rejected is a classic form of over-processing, captured under Overdo waste.",
      traps: {
        A: "The core issue is not handoff or transport.",
        B: "The case describes unnecessary work, not primarily waiting.",
        D: "The step is not clearly customer-valued in this sequence as described.",
      },
    },
    {
      id: 1392,
      lectureId: 6,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which belong in an issue register? (Select ALL that apply)",
      options: [
        "A. Short name or description of the issue",
        "B. Data, assumptions, or hypotheses behind the issue",
        "C. Qualitative or quantitative impact",
        "D. Mandatory BPMN gateway marker for the issue",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Issue registers document the issue itself, evidence or assumptions, and impact information. Gateway markers are BPMN notation concerns, not issue-register fields.",
      traps: {
        D: "Issue registers organize problems and impacts, not BPMN symbol choices.",
      },
    },
    {
      id: 1393,
      lectureId: 6,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Pareto analysis recommends distributing improvement effort evenly across all identified causes to avoid bias.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Pareto analysis does the opposite: it focuses attention on the vital few causes responsible for most of the impact.",
      traps: {
        A: "Equal treatment of all causes ignores the 80/20 logic.",
      },
    },
    {
      id: 1394,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which of the following belongs to the 6 M's used in a cause-effect diagram?",
      options: [
        "A. Measurement",
        "B. Market share",
        "C. Margin",
        "D. Motivation",
      ],
      correctAnswers: [0],
      explanation:
        "The 6 M's are Machine, Method, Material, Man, Measurement, and Milieu (Environment).",
      traps: {
        B: "Market share is a business outcome, not one of the 6 M categories.",
        C: "Margin is a financial metric, not one of the 6 M categories.",
        D: "Motivation may matter in practice, but it is not one of the named 6 M categories here.",
      },
    },
    {
      id: 1395,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A legally required verification step that customers would not willingly pay extra for is best classified as:",
      options: [
        "A. VA",
        "B. BVA",
        "C. NVA",
        "D. Hold waste",
      ],
      correctAnswers: [1],
      explanation:
        "Business Value-Adding work is required for the business to operate or remain compliant, even if customers do not directly value it.",
      traps: {
        A: "Direct customer willingness to pay is the hallmark of VA, not this case.",
        C: "A legally required step is not mere waste to be eliminated blindly.",
        D: "Hold waste refers to waiting or idle time, not compliance work.",
      },
    },
    {
      id: 1396,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A process has a 2-hour task, then an AND-block with branches of 3 and 8 hours, then an XOR-block where Path A takes 1 hour with 70% probability and Path B takes 5 hours with 30% probability. What is the expected total cycle time?",
      options: [
        "A. 10.2 hours",
        "B. 12.2 hours",
        "C. 14.0 hours",
        "D. 19.0 hours",
      ],
      correctAnswers: [1],
      explanation:
        "AND-block time is max(3, 8) = 8. XOR expected time is 0.7 x 1 + 0.3 x 5 = 2.2. Total = 2 + 8 + 2.2 = 12.2 hours.",
      traps: {
        A: "This undercounts the AND-block contribution.",
        C: "This does not match the correct max-plus-weighted-average calculation.",
        D: "This incorrectly sums branches as if both AND and XOR paths all execute sequentially.",
      },
    },
    {
      id: 1397,
      lectureId: 7,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which statements are quantitatively correct? (Select ALL that apply)",
      options: [
        "A. CTE = Processing Time / Cycle Time",
        "B. In an AND-block, total cost is the sum of branch costs",
        "C. In an XOR-block, expected cycle time is probability-weighted",
        "D. In an AND-block, total cycle time is the sum of all branch times",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A, B, and C are correct. AND-block time is determined by the slowest branch, not by summing branch times.",
      traps: {
        D: "Summing branch times would apply to sequential execution, not synchronized parallel execution.",
      },
    },
    {
      id: 1398,
      lectureId: 7,
      type: "true-false",
      difficulty: "Hard",
      question:
        "Under Little's Law, if the average number of cases in the system stays constant while throughput increases, average time in system must decrease.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "From L = lambda x W, if L is constant and lambda increases, then W must fall.",
      traps: {
        B: "This contradicts the algebra of Little's Law.",
      },
    },
    {
      id: 1399,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An XOR-block has Path A costing $20 with probability 0.9 and Path B costing $200 with probability 0.1. What is the expected cost?",
      options: ["A. $20", "B. $38", "C. $110", "D. $220"],
      correctAnswers: [1],
      explanation:
        "Expected cost = 0.9 x 20 + 0.1 x 200 = 18 + 20 = $38.",
      traps: {
        A: "This uses only the dominant path and ignores the expensive low-probability branch.",
        C: "This is a simple average, not a probability-weighted value.",
        D: "This incorrectly adds both path costs as if both execute.",
      },
    },
    {
      id: 1400,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A process has Processing Time = 6 minutes and Cycle Time = 60 minutes. Which statement is most accurate?",
      options: [
        "A. Its CTE is 60%, so most time is productive",
        "B. Its CTE is 10%, so waiting dominates the case time",
        "C. Waiting time is 6 minutes, so the process is balanced",
        "D. CTE cannot be computed without throughput data",
      ],
      correctAnswers: [1],
      explanation:
        "CTE = 6 / 60 = 10%. That implies most of the total cycle time is waiting or non-processing time.",
      traps: {
        A: "This swaps the numerator and denominator conceptually.",
        C: "Waiting time is 54 minutes, not 6.",
        D: "CTE requires PT and CT, not throughput.",
      },
    },
    {
      id: 1401,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which redesign move sits closest to the transactional end of the Redesign Orbit?",
      options: [
        "A. Remove one redundant approval using a redesign heuristic",
        "B. Rebuild the whole process from scratch around a new digital business model",
        "C. Replace the operating model through radical reengineering",
        "D. Invent a completely new service concept independent of the current process",
      ],
      correctAnswers: [0],
      explanation:
        "Transactional methods use smaller heuristic-based changes to existing processes and generally carry lower risk.",
      traps: {
        B: "This is much closer to transformational redesign.",
        C: "Radical reengineering is the hallmark of the transformational end.",
        D: "This also signals a much more radical redesign posture than a transactional tweak.",
      },
    },
    {
      id: 1402,
      lectureId: 8,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which statements are compatible with Devil's Quadrangle reasoning? (Select ALL that apply)",
      options: [
        "A. Reducing time may increase cost",
        "B. Flexibility improvements may involve trade-offs with other dimensions",
        "C. A good redesign should guarantee simultaneous maximization of all four dimensions",
        "D. Redesign choices should be evaluated across multiple performance dimensions",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "The Devil's Quadrangle exists precisely because redesign decisions often create trade-offs across time, cost, quality, and flexibility.",
      traps: {
        C: "This denies the core trade-off logic of the framework.",
      },
    },
    {
      id: 1403,
      lectureId: 8,
      type: "true-false",
      difficulty: "Medium",
      question:
        "The lecture presents incremental improvement and BPR as endpoints on a spectrum rather than mutually exclusive camps.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "The material explicitly treats improvement approaches as lying on a spectrum, with many real initiatives falling in between.",
      traps: {
        B: "This would incorrectly impose a strict either-or distinction.",
      },
    },
    {
      id: 1404,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which redesign approach is best described as data-driven optimization using mathematical reasoning rather than heuristics or radical reinvention?",
      options: [
        "A. Transactional methods",
        "B. Analytical methods",
        "C. Transformational methods",
        "D. Manual methods",
      ],
      correctAnswers: [1],
      explanation:
        "Analytical methods sit in the middle of the Redesign Orbit and rely on data and models to improve process design.",
      traps: {
        A: "Transactional methods rely more on rules of thumb and smaller changes.",
        C: "Transformational methods are radical and typically not defined by mathematical optimization.",
        D: "Manual methods are not a redesign-orbit category from the lecture.",
      },
    },
    {
      id: 1405,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which claim conflicts most directly with the logic of the Redesign Orbit and Devil's Quadrangle taken together?",
      options: [
        "A. Small heuristic improvements often carry lower risk than radical redesign",
        "B. Data-driven redesign can still involve trade-offs across performance dimensions",
        "C. Transformational redesign usually has higher risk than transactional redesign",
        "D. A well-chosen redesign should remove all trade-offs while remaining low-risk regardless of scope",
      ],
      correctAnswers: [3],
      explanation:
        "The combined lesson is that redesign methods differ in risk and that performance improvements involve trade-offs. Option D denies both points.",
      traps: {
        A: "This is consistent with the Redesign Orbit.",
        B: "This is consistent with Devil's Quadrangle reasoning.",
        C: "This is also consistent with the redesign risk spectrum.",
      },
    },
    {
      id: 1406,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which heuristic is most directly aimed at reducing unnecessary management escalation by shifting decision authority downward?",
      options: [
        "A. Empower",
        "B. Buffering",
        "C. Triage",
        "D. Task composition",
      ],
      correctAnswers: [0],
      explanation:
        "Empower gives workers more authority so that fewer cases need to be escalated for approval.",
      traps: {
        B: "Buffering is about change notifications versus repeated polling.",
        C: "Triage separates cases into differentiated handling paths.",
        D: "Task composition combines tasks to reduce handoffs.",
      },
    },
    {
      id: 1407,
      lectureId: 9,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which heuristics can reduce cycle time without necessarily changing the product or service itself? (Select ALL that apply)",
      options: [
        "A. Resequencing",
        "B. Parallelism",
        "C. Task elimination",
        "D. Event-log standardization",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Resequencing, parallelism, and task elimination are redesign heuristics that change process behavior or structure. Event-log standardization is not one of the redesign heuristics here.",
      traps: {
        D: "Event logs support mining and analysis, not heuristic redesign as such.",
      },
    },
    {
      id: 1408,
      lectureId: 9,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Using generalists instead of specialists always improves both flexibility and quality.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "The specialist-generalist choice is a trade-off: generalists usually improve flexibility, while specialists often support higher task-specific quality.",
      traps: {
        A: "This ignores the trade-off logic emphasized in the lecture.",
      },
    },
    {
      id: 1409,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A company checks every 10 minutes whether supplier data has changed. Which heuristic suggests a more elegant redesign?",
      options: [
        "A. Triage",
        "B. Buffering",
        "C. Task composition",
        "D. Specialist-generalist",
      ],
      correctAnswers: [1],
      explanation:
        "Buffering recommends subscribing to change notifications instead of repeatedly polling for changes.",
      traps: {
        A: "Triage separates case types; it does not address notification design.",
        C: "Task composition concerns combining work steps, not polling behavior.",
        D: "This heuristic concerns who performs work, not how updates are received.",
      },
    },
    {
      id: 1410,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which item belongs to the Process Model Canvas rather than BPMN notation?",
      options: [
        "A. Customer segments",
        "B. XOR gateway",
        "C. Boundary event",
        "D. Message flow",
      ],
      correctAnswers: [0],
      explanation:
        "Customer segments is one of the Process Model Canvas areas. The other options are BPMN modeling constructs.",
      traps: {
        B: "An XOR gateway is a BPMN routing element.",
        C: "A boundary event is a BPMN event construct.",
        D: "A message flow is a BPMN collaboration connection.",
      },
    },
    {
      id: 1411,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which BPMS component is most directly responsible for run-time routing logic, rather than model design, human inbox presentation, or KPI visualization?",
      options: [
        "A. Process Modeler",
        "B. Execution Engine",
        "C. Worklist Handler",
        "D. Monitoring Dashboard",
      ],
      correctAnswers: [1],
      explanation:
        "The execution engine drives process flow at run time. The modeler designs models, the worklist handler presents tasks, and the dashboard monitors performance.",
      traps: {
        A: "The modeler is a design-time component.",
        C: "The worklist handler exposes pending work to users but does not execute the routing logic itself.",
        D: "Monitoring dashboards visualize performance; they do not orchestrate flow.",
      },
    },
    {
      id: 1412,
      lectureId: 10,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which statements about task types are correct? (Select ALL that apply)",
      options: [
        "A. A Service Task is automated by a system",
        "B. A User Task requires human interaction through the BPMS",
        "C. A Manual Task is performed by a human outside BPMS scope",
        "D. A Script Task always requires a human approver",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A, B, and C capture the standard distinctions. Script tasks are automated logic, not inherently human approval steps.",
      traps: {
        D: "A script task is system-executed logic and does not by definition require a human approver.",
      },
    },
    {
      id: 1413,
      lectureId: 10,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Turning a paper approval into a User Task means the task is still human-performed, but now within BPMS orchestration.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "A User Task still requires human input, but it becomes part of the managed digital workflow through forms/worklists.",
      traps: {
        B: "This would incorrectly equate User Tasks with full automation.",
      },
    },
    {
      id: 1414,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which implementation choice most directly reduces the risk of brittle automation?",
      options: [
        "A. Remove exception handling so deployment is simpler",
        "B. Define data mappings and automation boundaries before execution",
        "C. Skip training because users will adapt naturally",
        "D. Automate every manual task regardless of suitability",
      ],
      correctAnswers: [1],
      explanation:
        "Automation becomes more robust when interfaces, data mappings, and clear boundaries are defined upfront and exceptions are considered deliberately.",
      traps: {
        A: "Ignoring exceptions makes automation fragile, not robust.",
        C: "Training and change management are essential implementation concerns.",
        D: "Not every manual task is a good automation target.",
      },
    },
    {
      id: 1415,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Compared with lightweight BPMS tools, heavyweight BPMS platforms are more likely to provide:",
      options: [
        "A. Broader enterprise integration and analytics capabilities",
        "B. Less support for monitoring and execution",
        "C. Only manual-task handling with no automation",
        "D. Fewer options for process implementation",
      ],
      correctAnswers: [0],
      explanation:
        "Heavyweight BPMS platforms typically include stronger integration, orchestration, and analytics suited to enterprise-scale environments.",
      traps: {
        B: "Heavyweight platforms usually expand execution and monitoring capabilities rather than reducing them.",
        C: "They are built precisely to support substantial automation and orchestration.",
        D: "They usually offer more, not fewer, implementation options.",
      },
    },
    {
      id: 1416,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "What makes two events belong to the same trace in process mining?",
      options: [
        "A. They happened in the same minute",
        "B. They were performed by the same resource",
        "C. They have the same Case ID",
        "D. They are drawn in the same BPMN lane",
      ],
      correctAnswers: [2],
      explanation:
        "A trace is the ordered sequence of events for one case, and Case ID is the field that groups events into that case.",
      traps: {
        A: "Timing can help order events, but time proximity does not define case membership.",
        B: "A single resource may work on many different cases.",
        D: "BPMN lanes are modeling constructs, not event-log grouping keys.",
      },
    },
    {
      id: 1417,
      lectureId: 11,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which statements about process mining and maturity are correct? (Select ALL that apply)",
      options: [
        "A. Process Discovery can generate a model from event logs",
        "B. Process Enhancement can annotate an existing model with timing or frequency information",
        "C. Conformance Checking compares actual behavior with an intended model",
        "D. XES is a five-level BPM maturity scale",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A, B, and C are correct mining concepts. XES is a standard event-log format, not a maturity model.",
      traps: {
        D: "XES stands for eXtensible Event Stream and concerns event-log representation.",
      },
    },
    {
      id: 1418,
      lectureId: 11,
      type: "true-false",
      difficulty: "Hard",
      question:
        "A trace is the ordered sequence of activities for one case, so timestamps still matter even when Case ID is known.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Case ID groups events into the same case, but timestamps help reconstruct their order and durations within that case.",
      traps: {
        B: "Without timing information, ordering and performance analysis become much weaker or ambiguous.",
      },
    },
    {
      id: 1419,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An organization has documented BPM methods and tools, but process decision rights and accountability remain unclear. Which maturity success factor is weakest?",
      options: [
        "A. Methods",
        "B. Governance",
        "C. IT",
        "D. Culture",
      ],
      correctAnswers: [1],
      explanation:
        "Governance is about clear roles, accountability, and decision structures. The scenario states those are exactly what is missing.",
      traps: {
        A: "Methods are already documented in the scenario.",
        C: "The problem described is organizational accountability, not technology infrastructure.",
        D: "Culture concerns values and awareness; the sharper issue here is governance structure.",
      },
    },
    {
      id: 1420,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A process model already exists, and you now want to enrich it with bottleneck timing information from event logs. Which mining technique fits best?",
      options: [
        "A. Discovery",
        "B. Enhancement",
        "C. Conformance Checking",
        "D. Process Identification",
      ],
      correctAnswers: [1],
      explanation:
        "Enhancement extends or annotates an existing model with information derived from logs, such as frequency or timing data.",
      traps: {
        A: "Discovery is used when a model must be derived from logs in the first place.",
        C: "Conformance checking focuses on deviations between intended and actual behavior.",
        D: "Process Identification is part of the BPM lifecycle, not a process mining technique.",
      },
    },
  ];

  window._BPS301_DATA.push({ quiz });
})();
