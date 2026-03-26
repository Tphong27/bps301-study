// Extra Quiz Pack: 50 new questions (English-only)
(function () {
  const quiz = [
    {
      id: 1201,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "Which statement best captures the BPM view of an organization?",
      options: [
        "A. Value is created through end-to-end processes across functions",
        "B. Value is created only by top management decisions",
        "C. Value is created only by software systems",
        "D. Value is created only by departments working independently",
      ],
      correctAnswers: [0],
      explanation:
        "BPM emphasizes cross-functional, end-to-end processes as the main vehicle of value creation for customers.",
      traps: {
        B: "Management decisions matter, but they do not execute customer value alone.",
        C: "IT enables processes; it does not replace business process design and governance.",
        D: "Siloed departments usually reduce coordination and harm end-to-end outcomes.",
      },
    },
    {
      id: 1202,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In process prioritization, a process with high strategic importance, poor health, and high feasibility is typically:",
      options: [
        "A. Deferred because risk is high",
        "B. A top candidate for short-term BPM action",
        "C. Excluded because poor health implies low feasibility",
        "D. Automatically redesigned without analysis",
      ],
      correctAnswers: [1],
      explanation:
        "High importance + poor health + high feasibility indicates strong improvement potential and practical chance of success.",
      traps: {
        A: "Risk may exist, but this combination usually indicates urgency rather than deferral.",
        C: "Poor health does not imply low feasibility; feasibility is a separate criterion.",
        D: "Redesign should follow analysis, not skip it.",
      },
    },
    {
      id: 1203,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "A correct BPMN naming convention for an activity is:",
      options: [
        "A. Invoice",
        "B. Validated",
        "C. Validate invoice",
        "D. Invoice is validated",
      ],
      correctAnswers: [2],
      explanation:
        "Activities are usually named with verb + object, such as 'Validate invoice'.",
      traps: {
        A: "Noun-only names are ambiguous and usually better for data objects or events.",
        B: "Past participle alone is event-like, not an activity label.",
        D: "This passive sentence resembles event wording rather than action-oriented task naming.",
      },
    },
    {
      id: 1204,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which gateway is most appropriate when exactly one branch must be selected based on data conditions available at decision time?",
      options: [
        "A. AND gateway",
        "B. OR gateway",
        "C. Event-based gateway",
        "D. XOR gateway",
      ],
      correctAnswers: [3],
      explanation:
        "XOR-split performs a data-based exclusive decision where exactly one path is taken.",
      traps: {
        A: "AND takes all branches, not one.",
        B: "OR can take one or more branches, not strictly one.",
        C: "Event-based gateways wait for external events, not immediate data evaluation.",
      },
    },
    {
      id: 1205,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Easy",
      question: "What is the main purpose of process discovery interviews?",
      options: [
        "A. Surface tacit work practices and real execution behavior",
        "B. Prove BPMN syntax correctness automatically",
        "C. Compute waiting-time formulas directly",
        "D. Replace all workshops with one analyst opinion",
      ],
      correctAnswers: [0],
      explanation:
        "Interviews help reveal tacit knowledge and practical workarounds that are rarely visible in documentation.",
      traps: {
        B: "Syntax checking is verification activity, not the interview goal.",
        C: "Interviews inform models; quantitative calculations require data and analysis methods.",
        D: "Single-source modeling increases bias and reduces model validity.",
      },
    },
    {
      id: 1206,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "A Why-Why analysis is primarily used to:",
      options: [
        "A. Estimate process simulation variance",
        "B. Drill down from symptoms to root causes",
        "C. Encode DMN decision tables",
        "D. Classify process architecture levels",
      ],
      correctAnswers: [1],
      explanation:
        "Why-Why analysis repeatedly asks why a problem occurs to identify causal chains and root causes.",
      traps: {
        A: "Simulation variance belongs to quantitative modeling, not Why-Why root-cause work.",
        C: "DMN is for decisions/rules, not root-cause decomposition.",
        D: "Architecture classification is a different BPM activity.",
      },
    },
    {
      id: 1207,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "If arrival rate increases while service capacity stays unchanged, queueing theory predicts that average waiting time will generally:",
      options: [
        "A. Decrease proportionally",
        "B. Remain unchanged",
        "C. Increase, often non-linearly near high utilization",
        "D. Drop to zero due to faster throughput",
      ],
      correctAnswers: [2],
      explanation:
        "As utilization approaches 100%, waiting times typically grow sharply, often non-linearly.",
      traps: {
        A: "Higher load with fixed capacity does not reduce waits.",
        B: "Queue waits are sensitive to utilization; they rarely remain constant.",
        D: "Zero waiting requires excess capacity, not overload.",
      },
    },
    {
      id: 1208,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "Which redesign move best reflects the 'knock-out' principle?",
      options: [
        "A. Add another approval at the end",
        "B. Merge all tasks into one mega-task",
        "C. Increase work-in-process limits",
        "D. Place rejection checks earlier to stop invalid cases fast",
      ],
      correctAnswers: [3],
      explanation:
        "Knock-out means early elimination of cases that will eventually be rejected, reducing wasted effort.",
      traps: {
        A: "Late checks consume more resources before rejection.",
        B: "Task aggregation is different and may reduce control/quality.",
        C: "Higher WIP limits can increase delay and clutter.",
      },
    },
    {
      id: 1209,
      lectureId: 9,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Transactional redesign methods usually seek incremental process improvements rather than radical reinvention.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Transactional approaches typically focus on continuous or incremental improvements.",
      traps: {
        B: "Radical reinvention is more aligned with transformational approaches.",
      },
    },
    {
      id: 1210,
      lectureId: 10,
      type: "true-false",
      difficulty: "Medium",
      question:
        "A User Task in BPMN is executed automatically by the engine without human interaction.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "User Tasks require human interaction, usually via forms/worklists. Automated execution is typical of Service Tasks.",
      traps: {
        A: "This confuses User Task with Service Task.",
      },
    },
    {
      id: 1211,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In process mining, what is the strongest reason to include Case ID in event logs?",
      options: [
        "A. It groups events into individual process instances",
        "B. It stores process KPI target values",
        "C. It replaces timestamps in trace ordering",
        "D. It identifies the BPM maturity level",
      ],
      correctAnswers: [0],
      explanation:
        "Case ID links events belonging to the same process instance, enabling trace construction.",
      traps: {
        B: "KPI targets are management metadata, not trace grouping fields.",
        C: "Timestamps still matter for ordering and duration analysis.",
        D: "Maturity level is an organizational assessment, not event-level data.",
      },
    },
    {
      id: 1212,
      lectureId: 2,
      type: "true-false",
      difficulty: "Medium",
      question:
        "In a process architecture, specialization means breaking one process into subprocesses.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Breaking into subprocesses is decomposition. Specialization means defining variants of a generic process.",
      traps: {
        A: "This mixes up decomposition and specialization.",
      },
    },
    {
      id: 1213,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A model has an AND-split, but branches are merged by an XOR-join where both branches can be active. The key risk is:",
      options: [
        "A. Better synchronization due to simpler merge",
        "B. Token mismanagement and possible behavioral errors",
        "C. Guaranteed reduction in cycle time",
        "D. Automatic semantic correctness",
      ],
      correctAnswers: [1],
      explanation:
        "Mismatched split/join semantics can lead to incorrect token behavior, including synchronization problems.",
      traps: {
        A: "Simpler notation does not guarantee correct execution semantics.",
        C: "Cycle time may worsen if behavior becomes inconsistent or rework appears.",
        D: "Semantic correctness must be validated; it is never automatic from this mismatch.",
      },
    },
    {
      id: 1214,
      lectureId: 4,
      type: "true-false",
      difficulty: "Hard",
      question:
        "A non-interrupting boundary event starts an exception path while allowing the original activity to continue.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Non-interrupting boundary events trigger parallel handling without canceling the host activity.",
      traps: {
        B: "Canceling the activity is behavior of interrupting, not non-interrupting boundary events.",
      },
    },
    {
      id: 1215,
      lectureId: 5,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Syntactic quality asks whether a model follows notation rules; semantic quality asks whether it reflects real behavior.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "This is the classic distinction between verification (syntax) and validation (semantics).",
      traps: {
        B: "Reversing these definitions is a common exam trap.",
      },
    },
    {
      id: 1216,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "Pareto analysis is most useful when you want to:",
      options: [
        "A. Model resource handoffs in BPMN lanes",
        "B. Discover process variants from logs",
        "C. Prioritize a small set of issues causing most impact",
        "D. Compute queue waiting times under M/M/1 assumptions",
      ],
      correctAnswers: [2],
      explanation:
        "Pareto analysis highlights the few causes that contribute most to observed problems (80/20 logic).",
      traps: {
        A: "Lane modeling is structural design, not issue prioritization analytics.",
        B: "Variant discovery belongs to process mining.",
        D: "M/M/1 is queueing analysis, not Pareto prioritization.",
      },
    },
    {
      id: 1217,
      lectureId: 7,
      type: "true-false",
      difficulty: "Medium",
      question:
        "In an AND-block, branch costs are typically summed, while cycle time depends on the slowest branch.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "All branches incur cost, but completion time is constrained by the longest parallel branch.",
      traps: {
        B: "Confusing cost and time aggregation rules is a frequent mistake.",
      },
    },
    {
      id: 1218,
      lectureId: 8,
      type: "true-false",
      difficulty: "Hard",
      question:
        "Applying parallelism always improves all four performance dimensions in the Devil's Quadrangle.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Parallelism often improves time but may worsen cost, quality consistency, or flexibility depending on context.",
      traps: {
        A: "No redesign heuristic guarantees universal improvement across all dimensions.",
      },
    },
    {
      id: 1219,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which statement best describes the Devil's Quadrangle in redesign?",
      options: [
        "A. A method for BPMN syntax validation",
        "B. A risk matrix for stakeholder mapping",
        "C. A framework that ignores flexibility",
        "D. A trade-off view among cost, time, quality, and flexibility",
      ],
      correctAnswers: [3],
      explanation:
        "The Devil's Quadrangle highlights trade-offs among the four core performance dimensions.",
      traps: {
        A: "Syntax validation is unrelated to quadrangle trade-off reasoning.",
        B: "Stakeholder mapping is different from multidimensional redesign trade-offs.",
        C: "Flexibility is explicitly one of the four dimensions.",
      },
    },
    {
      id: 1220,
      lectureId: 10,
      type: "true-false",
      difficulty: "Easy",
      question:
        "DMN is commonly used to externalize and automate decision logic in structured tables.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "DMN decision tables separate business rules from process flow and support automation.",
      traps: {
        B: "This denies DMN's core purpose in rule/decision management.",
      },
    },
    {
      id: 1221,
      lectureId: 11,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Conformance checking compares intended process behavior with actual event-log behavior.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Conformance checking identifies deviations between model-prescribed and executed behavior.",
      traps: {
        B: "This would ignore the defining objective of conformance analysis.",
      },
    },
    {
      id: 1222,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which lifecycle phase primarily converts redesigned process logic into executable operation?",
      options: [
        "A. Process Implementation",
        "B. Process Discovery",
        "C. Process Identification",
        "D. Process Analysis",
      ],
      correctAnswers: [0],
      explanation:
        "Implementation operationalizes the to-be model via technology, governance, and organizational change.",
      traps: {
        B: "Discovery documents current state, not execution deployment.",
        C: "Identification defines scope and priorities, not execution setup.",
        D: "Analysis diagnoses problems but does not deploy redesigned logic.",
      },
    },
    {
      id: 1223,
      lectureId: 2,
      type: "true-false",
      difficulty: "Hard",
      question:
        "A process landscape model should usually include every BPMN gateway and event for operational precision.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Landscape models are high-level architecture views; detailed gateways/events belong to lower-level process models.",
      traps: {
        A: "Overloading landscape models with detail harms clarity and defeats architectural purpose.",
      },
    },
    {
      id: 1224,
      lectureId: 3,
      type: "true-false",
      difficulty: "Medium",
      question:
        "In BPMN, sequence flow may cross pool boundaries if both pools belong to the same company.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Sequence flow cannot cross pool boundaries; inter-pool communication uses message flow.",
      traps: {
        A: "Pool boundary is a strict execution boundary regardless of ownership context.",
      },
    },
    {
      id: 1225,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "When should an event-based gateway be preferred over an XOR data gateway?",
      options: [
        "A. When all branches must execute in parallel",
        "B. When the choice depends on which external event occurs first",
        "C. When probabilities are known for all data conditions",
        "D. When a subprocess needs decomposition",
      ],
      correctAnswers: [1],
      explanation:
        "Event-based gateways model race conditions among events, selecting the path of the event that happens first.",
      traps: {
        A: "Parallel execution is handled by AND-split, not event-based routing.",
        C: "Known data conditions still fit XOR/OR data gateways.",
        D: "Decomposition is handled via subprocess constructs, not event-based branching.",
      },
    },
    {
      id: 1226,
      lectureId: 5,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Workshops can reduce fragmented knowledge by aligning different participant perspectives in one session.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Workshops are effective for reconciling cross-role views and exposing inconsistencies.",
      traps: {
        B: "Fragmented knowledge is precisely why collaborative discovery workshops are useful.",
      },
    },
    {
      id: 1227,
      lectureId: 6,
      type: "true-false",
      difficulty: "Hard",
      question:
        "Stakeholder analysis is only relevant after redesign, not during process analysis.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Stakeholder analysis is crucial during analysis to identify concerns, constraints, and issue ownership.",
      traps: {
        A: "Delaying stakeholder analysis typically weakens diagnosis and redesign feasibility.",
      },
    },
    {
      id: 1228,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Under Little's Law $L = \lambda W$, if throughput ($\lambda$) is stable and average items in system ($L$) rises, then average time in system ($W$) must:",
      options: [
        "A. Decrease proportionally",
        "B. Stay identical",
        "C. Increase",
        "D. Become undefined",
      ],
      correctAnswers: [2],
      explanation:
        "With stable throughput, higher inventory-in-system implies longer average time in system.",
      traps: {
        A: "This contradicts the relation $W=L/\lambda$ when $\lambda$ is constant.",
        B: "Constant $W$ would require constant $L$ if $\lambda$ does not change.",
        D: "The relation remains defined under stable measurable rates.",
      },
    },
    {
      id: 1229,
      lectureId: 8,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Task elimination can improve cycle time but may introduce compliance or quality risks if applied blindly.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Eliminating controls without risk assessment can cause non-compliance and downstream defects.",
      traps: {
        B: "Assuming elimination is always safe is a classic redesign trap.",
      },
    },
    {
      id: 1230,
      lectureId: 9,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which actions reflect process redesign heuristics? (Select ALL that apply)",
      options: [
        "A. Resequence checks to reject invalid cases earlier",
        "B. Add non-value approvals to increase control perception",
        "C. Triage cases into differentiated handling paths",
        "D. Introduce parallel work where coordination allows",
      ],
      correctAnswers: [0, 2, 3],
      explanation:
        "A, C, and D are recognized redesign patterns; B usually adds waste unless justified by explicit risk controls.",
      traps: {
        B: "More approvals can increase delay and cost without proportional value.",
      },
    },
    {
      id: 1231,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which BPMS component is most directly responsible for presenting pending human tasks to users?",
      options: [
        "A. Process model repository",
        "B. Rule engine",
        "C. Integration adapter",
        "D. Worklist handler",
      ],
      correctAnswers: [3],
      explanation:
        "The worklist handler (or task inbox) exposes assigned human work items for execution.",
      traps: {
        A: "Repository stores models but does not manage user task queues.",
        B: "Rule engines evaluate decisions, not user inbox presentation.",
        C: "Adapters connect systems; they do not manage human task lists.",
      },
    },
    {
      id: 1232,
      lectureId: 11,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which are typical attributes in a process mining event log? (Select ALL that apply)",
      options: [
        "A. Case ID",
        "B. Activity name",
        "C. Timestamp",
        "D. Board-level strategic objective text",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Event logs generally include case, activity, and time; strategic objective text is not standard event-level execution data.",
      traps: {
        D: "Strategy documents guide governance, but they are not core event trace attributes.",
      },
    },
    {
      id: 1233,
      lectureId: 1,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which outcomes align with BPM objectives? (Select ALL that apply)",
      options: [
        "A. Better conformance and transparency",
        "B. Isolated departmental optimization regardless of end-to-end impact",
        "C. Improved process performance",
        "D. Continuous monitoring and feedback",
      ],
      correctAnswers: [0, 2, 3],
      explanation:
        "BPM seeks measurable end-to-end performance, visibility, and continuous control/improvement.",
      traps: {
        B: "Local optimization can damage global process outcomes through handoff inefficiencies.",
      },
    },
    {
      id: 1234,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement about process architecture levels is most accurate?",
      options: [
        "A. Higher levels provide broader abstraction; lower levels provide more detail",
        "B. Higher levels always contain BPMN gateways and event semantics",
        "C. Lower levels should remove ownership information to simplify governance",
        "D. Leveling is unnecessary when reference models are available",
      ],
      correctAnswers: [0],
      explanation:
        "Architecture levels move from broad landscape to detailed process definitions.",
      traps: {
        B: "Detailed BPMN behavior is usually represented at lower modeling levels.",
        C: "Ownership clarity becomes more important, not less, at detailed levels.",
        D: "Reference models help but do not eliminate organization-specific decomposition.",
      },
    },
    {
      id: 1235,
      lectureId: 3,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which modeling practices improve BPMN clarity and correctness? (Select ALL that apply)",
      options: [
        "A. Pair split and join gateways coherently where applicable",
        "B. Use clear verb-object labels for activities",
        "C. Put all possible data objects and annotations in one diagram",
        "D. Start with one white-box pool and add black-box partners when needed",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "A, B, D improve readability and quality; C often creates clutter and hurts pragmatic quality.",
      traps: {
        C: "Over-detailing usually reduces comprehensibility and model usability.",
      },
    },
    {
      id: 1236,
      lectureId: 4,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which situations are suitable for boundary events on an activity? (Select ALL that apply)",
      options: [
        "A. External cancellation message arrives",
        "B. Internal error is thrown during execution",
        "C. Activity exceeds agreed timeout",
        "D. Need to represent a normal XOR data decision",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Boundary events are used for exceptions/timeouts/messages tied to activity execution; D is a gateway decision concern.",
      traps: {
        D: "Regular data branching should be modeled with gateways, not boundary events.",
      },
    },
    {
      id: 1237,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A discovery team documents what SOP says should happen but ignores actual deviations. Which quality risk is highest?",
      options: [
        "A. Syntactic non-compliance",
        "B. Semantic inaccuracy",
        "C. Notation incompleteness",
        "D. Diagram rendering failure",
      ],
      correctAnswers: [1],
      explanation:
        "Ignoring real behavior undermines semantic quality because the model no longer reflects true execution.",
      traps: {
        A: "Syntax may still be correct even if semantics are wrong.",
        C: "Notation completeness is secondary compared with factual correctness here.",
        D: "Rendering is tooling-related, not the core modeling quality issue in this case.",
      },
    },
    {
      id: 1238,
      lectureId: 6,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which techniques are commonly used in qualitative process analysis? (Select ALL that apply)",
      options: [
        "A. Waste analysis",
        "B. Stakeholder analysis",
        "C. Root-cause analysis",
        "D. Alpha algorithm log replay",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A/B/C are core qualitative analysis methods; D is process mining/discovery related.",
      traps: {
        D: "Alpha algorithm belongs to process mining, not qualitative workshop/interview analysis.",
      },
    },
    {
      id: 1239,
      lectureId: 7,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which statements about cycle time are valid? (Select ALL that apply)",
      options: [
        "A. It includes processing and waiting components",
        "B. It is always equal to pure service time",
        "C. In parallel blocks, completion time is constrained by the slowest active branch",
        "D. Reducing queueing delays can reduce cycle time even if service time is unchanged",
      ],
      correctAnswers: [0, 2, 3],
      explanation:
        "Cycle time includes waiting; parallel completion follows critical (slowest) branch; queue reductions directly help cycle time.",
      traps: {
        B: "Service time is only part of total cycle time in most real processes.",
      },
    },
    {
      id: 1240,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "If a redesign shortens cycle time but increases variability and error rates, which dimension is most clearly deteriorating?",
      options: [
        "A. Cost",
        "B. Flexibility",
        "C. Quality",
        "D. Strategic alignment",
      ],
      correctAnswers: [2],
      explanation:
        "Higher error rates and unstable outcomes indicate quality deterioration despite time gains.",
      traps: {
        A: "Cost may or may not change; errors point directly to quality issues.",
        B: "Variability can relate to flexibility, but error-rate degradation is a quality signal first.",
        D: "Strategic alignment is governance-level; the described symptom is operational quality.",
      },
    },
    {
      id: 1241,
      lectureId: 9,
      type: "multiple-answer",
      difficulty: "Medium",
      question:
        "Which are plausible risks of aggressive BPR-style redesign? (Select ALL that apply)",
      options: [
        "A. Organizational resistance",
        "B. Temporary performance disruption during transition",
        "C. Guaranteed short-term quality improvement in all cases",
        "D. Capability gaps if people/training are neglected",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Radical redesign can trigger resistance, transition turbulence, and skill gaps if change management is weak.",
      traps: {
        C: "No redesign approach guarantees universal short-term gains.",
      },
    },
    {
      id: 1242,
      lectureId: 10,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which choices improve automation readiness before implementation? (Select ALL that apply)",
      options: [
        "A. Clarify automation boundaries",
        "B. Define data mappings and message structures",
        "C. Remove exception handling to simplify deployment",
        "D. Review manual tasks for redesign or support tooling",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "A/B/D strengthen executable quality; removing exception handling is dangerous and unrealistic.",
      traps: {
        C: "Ignoring exceptions creates brittle automation and runtime failures.",
      },
    },
    {
      id: 1243,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which process mining technique is most directly used to detect rule violations against a designed process model?",
      options: [
        "A. Discovery",
        "B. Enhancement",
        "C. Variant clustering",
        "D. Conformance checking",
      ],
      correctAnswers: [3],
      explanation:
        "Conformance checking compares observed traces against intended model behavior to detect deviations and violations.",
      traps: {
        A: "Discovery builds a model from logs but does not directly test compliance to a reference model.",
        B: "Enhancement enriches existing models with data insights, not primary violation detection.",
        C: "Variant analysis helps exploration but is not the main compliance test.",
      },
    },
    {
      id: 1244,
      lectureId: 1,
      type: "multiple-answer",
      difficulty: "Easy",
      question:
        "Which are valid examples of end-to-end business processes? (Select ALL that apply)",
      options: [
        "A. Order-to-Cash",
        "B. Procure-to-Pay",
        "C. Issue-to-Resolution",
        "D. Keyboard replacement in one office PC",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A/B/C are canonical end-to-end process patterns; D is a localized maintenance task, not a generic end-to-end process family.",
      traps: {
        D: "This is a specific operational task, not a standard cross-functional process archetype.",
      },
    },
    {
      id: 1245,
      lectureId: 2,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which statements about reference models (e.g., APQC PCF) are correct? (Select ALL that apply)",
      options: [
        "A. They can accelerate initial process architecture drafting",
        "B. They must be copied verbatim to remain valid",
        "C. They support completeness checks during architecture design",
        "D. They reduce dependence on ad-hoc terminology",
      ],
      correctAnswers: [0, 2, 3],
      explanation:
        "Reference models guide structure and terminology, but they should be adapted to context.",
      traps: {
        B: "Blind copying often creates misfit; tailoring is expected and necessary.",
      },
    },
    {
      id: 1246,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "What is the primary purpose of using black-box pools in BPMN collaboration diagrams?",
      options: [
        "A. Show external participants without modeling their internal process detail",
        "B. Replace all message flows with sequence flows",
        "C. Guarantee syntactic correctness automatically",
        "D. Model DMN decision tables inline",
      ],
      correctAnswers: [0],
      explanation:
        "Black-box pools represent external parties while keeping internal logic hidden, focusing on interaction boundaries.",
      traps: {
        B: "Sequence flow cannot cross pools; message flow remains required.",
        C: "Notation choices do not auto-validate model quality.",
        D: "DMN concerns decisions, not pool visibility semantics.",
      },
    },
    {
      id: 1247,
      lectureId: 4,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "In BPMN exception handling, which pairings are valid? (Select ALL that apply)",
      options: [
        "A. Boundary timer event for activity timeout",
        "B. Boundary error event to catch an internal exception from within the activity",
        "C. End error event with matching boundary error catcher label",
        "D. Sequence flow crossing pools to signal cancellation",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "A/B/C are valid exception patterns; D violates BPMN flow semantics.",
      traps: {
        D: "Inter-pool communication uses message flow, not sequence flow.",
      },
    },
    {
      id: 1248,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which discovery challenge occurs when participants describe ideal SOP behavior instead of real execution?",
      options: [
        "A. Fragmented ownership",
        "B. Idealization bias",
        "C. Notation scarcity",
        "D. Over-automation",
      ],
      correctAnswers: [1],
      explanation:
        "Idealization bias appears when interviewees describe desired policy behavior rather than actual practice.",
      traps: {
        A: "Fragmentation is a different challenge involving distributed knowledge.",
        C: "BPMN notation is sufficient; this is not a notation problem.",
        D: "Automation level is not the root issue in this discovery bias.",
      },
    },
    {
      id: 1249,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A team identifies many issues but wants to prioritize by impact and effort quickly. Which tool is most suitable?",
      options: [
        "A. Event-based gateway",
        "B. XES log format",
        "C. PICK chart",
        "D. Token replay",
      ],
      correctAnswers: [2],
      explanation:
        "PICK charts classify ideas/issues by impact and effort, supporting practical prioritization decisions.",
      traps: {
        A: "Gateways model flow behavior, not issue prioritization.",
        B: "XES is a log storage format, not a prioritization matrix.",
        D: "Token replay belongs to process mining/conformance contexts.",
      },
    },
    {
      id: 1250,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "If utilization is already very high, which intervention is most likely to reduce average waiting time sustainably?",
      options: [
        "A. Increase arrival rate to use resources fully",
        "B. Add inspection loops for quality reassurance",
        "C. Keep capacity fixed and batch larger",
        "D. Increase effective service capacity at bottlenecks",
      ],
      correctAnswers: [3],
      explanation:
        "At high utilization, adding or rebalancing bottleneck capacity is a direct lever to reduce queue buildup and waiting.",
      traps: {
        A: "Higher arrivals with fixed capacity generally worsens waiting.",
        B: "Extra loops often increase cycle time unless carefully justified.",
        C: "Larger batches can increase waiting and variability in many contexts.",
      },
    },
  ];

  window._BPS301_DATA.push({ quiz });
})();
