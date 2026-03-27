// Extra Quiz Pack: 50 additional questions with gap coverage + tricky exam-style items
(function () {
  const quiz = [
    {
      id: 1321,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "In process discovery, who is primarily responsible for leading the discovery effort and creating the model?",
      options: [
        "A. Domain Expert",
        "B. Process Analyst",
        "C. Process Owner",
        "D. External Auditor",
      ],
      correctAnswers: [1],
      explanation:
        "The Process Analyst is the BPM expert who leads the discovery effort and creates the as-is model.",
      traps: {
        A: "Domain experts know operational reality, but they do not primarily lead the modeling effort.",
        C: "A process owner is accountable for performance, not necessarily for modeling the current state.",
        D: "An auditor may review processes, but discovery is led by BPM/process analysis roles.",
      },
    },
    {
      id: 1322,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Why is a combination of discovery methods usually recommended?",
      options: [
        "A. Because BPMN requires three data sources by rule",
        "B. Because each method has strengths and blind spots",
        "C. Because interviews are not allowed without documents",
        "D. Because workshops automatically generate executable models",
      ],
      correctAnswers: [1],
      explanation:
        "Evidence-based, interview-based, and workshop-based discovery each reveal different aspects of reality, so combining them improves coverage and validity.",
      traps: {
        A: "There is no BPMN rule requiring three sources.",
        C: "Interviews are valid on their own, though often stronger when complemented by other methods.",
        D: "Workshops help discover and validate processes, but they do not automatically produce executable models.",
      },
    },
    {
      id: 1323,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which step of the 5-step process modeling method identifies who does the work and where handoffs occur?",
      options: [
        "A. Identify process boundaries",
        "B. Identify activities and events",
        "C. Identify resources and handoffs",
        "D. Identify additional elements",
      ],
      correctAnswers: [2],
      explanation:
        "Step 3 identifies resources and handoffs, which determines responsibilities, pools, lanes, and work transfer points.",
      traps: {
        A: "Boundaries define scope, not responsibility.",
        B: "Activities and events describe what happens, not who performs it.",
        D: "Additional elements include data and exceptions, not core responsibility mapping.",
      },
    },
    {
      id: 1324,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which aspect of process model quality focuses on whether a model is understandable and useful for its audience?",
      options: [
        "A. Syntactic quality",
        "B. Semantic quality",
        "C. Pragmatic quality",
        "D. Quantitative quality",
      ],
      correctAnswers: [2],
      explanation:
        "Pragmatic quality concerns whether the model is understandable and useful, often supported by modeling guidelines such as 7PMG.",
      traps: {
        A: "Syntactic quality checks compliance with BPMN rules.",
        B: "Semantic quality checks whether the model reflects the real process correctly.",
        D: "Quantitative quality is not one of the three model quality dimensions presented here.",
      },
    },
    {
      id: 1325,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question: "What is a dead activity in a process model?",
      options: [
        "A. An activity that is performed too slowly",
        "B. An activity that repeats forever",
        "C. An unreachable activity that can never be executed",
        "D. An activity cancelled by a boundary event",
      ],
      correctAnswers: [2],
      explanation:
        "A dead activity is unreachable in the model, meaning no valid execution path can ever activate it.",
      traps: {
        A: "Slow performance is a process performance issue, not a dead activity.",
        B: "Infinite repetition describes livelock, not a dead activity.",
        D: "Cancellation by an exception is different from structural unreachability.",
      },
    },
    {
      id: 1326,
      lectureId: 6,
      type: "true-false",
      difficulty: "Easy",
      question:
        "If a customer is willing to pay for a process step because it directly contributes to the outcome they value, that step is VA.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "VA means Value-Adding: the step directly contributes to what the customer values and is willing to pay for.",
      traps: {
        B: "This would ignore the defining criterion for Value-Adding work.",
      },
    },
    {
      id: 1327,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A case is transferred multiple times between departments without changing the outcome. This is best classified as which waste?",
      options: [
        "A. Move",
        "B. Hold",
        "C. Overdo",
        "D. Value-Adding",
      ],
      correctAnswers: [0],
      explanation:
        "Move waste concerns unnecessary handoffs, transport, or data movement between people or systems.",
      traps: {
        B: "Hold waste is about waiting or queueing, not unnecessary transfer.",
        C: "Overdo is doing more than needed, such as duplication or excessive checking.",
        D: "Repeated transfer without added customer value is not Value-Adding.",
      },
    },
    {
      id: 1328,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement best distinguishes BVA from NVA?",
      options: [
        "A. BVA is directly valued by customers, while NVA is valued only by managers",
        "B. BVA is required by the business, while NVA is waste that should be eliminated",
        "C. BVA occurs only in manufacturing, while NVA occurs only in services",
        "D. BVA and NVA are just two names for the same category",
      ],
      correctAnswers: [1],
      explanation:
        "BVA is Business Value-Adding work required by the business, while NVA is Non-Value-Adding waste that should be removed where possible.",
      traps: {
        A: "Direct customer value belongs to VA, not BVA.",
        C: "These categories apply across industries, not only one domain each.",
        D: "They are conceptually distinct and should not be treated as equivalent.",
      },
    },
    {
      id: 1329,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "In a PICK chart, which category represents issues that are easy to implement and have high impact?",
      options: [
        "A. Possible",
        "B. Implement",
        "C. Challenge",
        "D. Kill",
      ],
      correctAnswers: [1],
      explanation:
        "Implement corresponds to easy effort and high impact, making these items classic quick wins.",
      traps: {
        A: "Possible means easy effort but lower payoff.",
        C: "Challenge means high payoff but difficult implementation.",
        D: "Kill means low payoff and difficult implementation.",
      },
    },
    {
      id: 1330,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "What is the main purpose of an issue register during qualitative process analysis?",
      options: [
        "A. To replace stakeholder analysis entirely",
        "B. To document identified process problems, their impact, and their priority",
        "C. To convert BPMN into executable code",
        "D. To classify gateways into XOR, AND, and OR",
      ],
      correctAnswers: [1],
      explanation:
        "An issue register documents process problems and records information such as impact and priority for later analysis and action.",
      traps: {
        A: "Stakeholder analysis remains important for surfacing concerns and affected parties.",
        C: "Issue registers are analysis tools, not implementation tools.",
        D: "Gateway classification is unrelated to issue documentation.",
      },
    },
    {
      id: 1331,
      lectureId: 8,
      type: "true-false",
      difficulty: "Easy",
      question:
        "The lecture presents incremental improvement and BPR as points on a spectrum rather than as a strict either-or choice.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "The lecture explicitly states that incremental improvement and BPR exist on a spectrum, and many real improvements lie somewhere in between.",
      traps: {
        B: "This would contradict the stated view that redesign approaches are not simply binary.",
      },
    },
    {
      id: 1332,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which redesign approach is characterized by radical, fundamental rethinking and redesign from scratch?",
      options: [
        "A. Continuous improvement",
        "B. BPR",
        "C. Workflow documentation",
        "D. Process monitoring",
      ],
      correctAnswers: [1],
      explanation:
        "BPR, or Business Process Reengineering, is the radical redesign approach that starts from scratch.",
      traps: {
        A: "Continuous improvement is gradual and incremental, not radical.",
        C: "Documentation records a process but does not fundamentally redesign it.",
        D: "Monitoring tracks performance rather than redesigning the process.",
      },
    },
    {
      id: 1333,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which redesign orbit approach is explicitly described as data-driven and based on mathematical models?",
      options: [
        "A. Transactional methods",
        "B. Analytical methods",
        "C. Transformational methods",
        "D. Continuous improvement methods",
      ],
      correctAnswers: [1],
      explanation:
        "Analytical methods rely on data-driven optimization and mathematical models.",
      traps: {
        A: "Transactional methods use heuristics and rules of thumb, not mathematical models as their defining feature.",
        C: "Transformational methods are radical redesign approaches, often inspired by technology or best practices.",
        D: "Continuous improvement is a broader improvement approach, not one of the redesign orbit labels here.",
      },
    },
    {
      id: 1334,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "According to the Devil's Quadrangle, which set of dimensions must be considered together in redesign decisions?",
      options: [
        "A. Time, Cost, Quality, Flexibility",
        "B. Time, Cost, Revenue, Compliance",
        "C. Speed, Accuracy, Budget, Headcount",
        "D. Quality, Strategy, IT, Governance",
      ],
      correctAnswers: [0],
      explanation:
        "The Devil's Quadrangle consists of Time, Cost, Quality, and Flexibility, and emphasizes trade-offs among them.",
      traps: {
        B: "Revenue and compliance are important in business, but they are not the four dimensions of the quadrangle.",
        C: "These are plausible operational concerns, but not the formal quadrangle dimensions.",
        D: "Strategy, IT, and governance are not part of the Devil's Quadrangle framework.",
      },
    },
    {
      id: 1335,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which redesign orbit approach is generally associated with the lowest risk?",
      options: [
        "A. Transactional methods",
        "B. Analytical methods",
        "C. Transformational methods",
        "D. Event-driven methods",
      ],
      correctAnswers: [0],
      explanation:
        "Transactional methods are low-risk, heuristic-based changes to existing processes.",
      traps: {
        B: "Analytical methods sit between transactional and transformational approaches on the risk spectrum.",
        C: "Transformational methods are the highest-risk redesign approach presented here.",
        D: "Event-driven methods are not one of the redesign orbit categories in the lecture.",
      },
    },
    {
      id: 1336,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "What is the main purpose of the task composition heuristic?",
      options: [
        "A. To split one task into many smaller specialist tasks",
        "B. To combine smaller tasks into larger ones and reduce handoffs",
        "C. To replace all manual work with bots",
        "D. To move tasks to external suppliers",
      ],
      correctAnswers: [1],
      explanation:
        "Task composition combines smaller tasks into larger ones, often reducing handoffs and coordination overhead.",
      traps: {
        A: "That would increase fragmentation rather than compose work.",
        C: "Replacing manual work with automation is task automation, not task composition.",
        D: "Outsourcing is not the defining meaning of task composition.",
      },
    },
    {
      id: 1337,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which heuristic aims to reduce unnecessary management checks by giving workers more authority?",
      options: [
        "A. Triage",
        "B. Empower",
        "C. Buffering",
        "D. Parallelism",
      ],
      correctAnswers: [1],
      explanation:
        "The empower heuristic gives workers more authority so fewer management checks are needed.",
      traps: {
        A: "Triage creates different paths for different case categories.",
        C: "Buffering concerns change notifications versus polling.",
        D: "Parallelism executes independent tasks simultaneously.",
      },
    },
    {
      id: 1338,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "What does the buffering heuristic recommend?",
      options: [
        "A. Storing more inventory to avoid all shortages",
        "B. Subscribing to change notifications instead of repeatedly polling",
        "C. Adding more approval layers for risky cases",
        "D. Delaying all exceptions until the end of the process",
      ],
      correctAnswers: [1],
      explanation:
        "Buffering recommends subscribing to change notifications instead of repeatedly checking or polling for changes.",
      traps: {
        A: "That is an inventory policy idea, not the buffering heuristic described here.",
        C: "More approvals are not the point of buffering.",
        D: "Exception handling is a separate heuristic, not buffering.",
      },
    },
    {
      id: 1339,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which statement best reflects the exception handling heuristic?",
      options: [
        "A. Every case should go through the same path to ensure consistency",
        "B. The normal flow should handle routine cases, while exceptions are handled separately",
        "C. Exceptions should be ignored during redesign to keep models simple",
        "D. All exception paths should be processed before normal cases",
      ],
      correctAnswers: [1],
      explanation:
        "The heuristic recommends designing a clean default flow for normal cases and handling exceptions separately.",
      traps: {
        A: "One path for all cases ignores variation and undermines exception handling.",
        C: "Ignoring exceptions creates unrealistic and fragile designs.",
        D: "Exceptions are special cases, not cases that must always be processed first.",
      },
    },
    {
      id: 1340,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which item is explicitly part of the 9 areas in the Process Model Canvas?",
      options: [
        "A. Customer segments",
        "B. Gateway semantics",
        "C. Event log attributes",
        "D. Simulation confidence intervals",
      ],
      correctAnswers: [0],
      explanation:
        "The Process Model Canvas includes areas such as Customer segments, Value propositions, Channels, Key activities, and Cost structure.",
      traps: {
        B: "Gateway semantics belong to BPMN modeling, not the canvas.",
        C: "Event log attributes belong to process mining.",
        D: "Confidence intervals belong to simulation, not the canvas.",
      },
    },
    {
      id: 1341,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which BPMS component is primarily responsible for automating process flow and assigning tasks to participants?",
      options: [
        "A. Process Modeler",
        "B. Execution Engine",
        "C. Worklist Handler",
        "D. Monitoring Dashboard",
      ],
      correctAnswers: [1],
      explanation:
        "The Execution Engine automates process flow and coordinates execution, including task assignment logic.",
      traps: {
        A: "The Process Modeler is used for design and configuration, not run-time flow execution.",
        C: "The Worklist Handler presents assigned work items to users, but it is not the primary execution engine.",
        D: "The dashboard monitors KPIs rather than controlling execution.",
      },
    },
    {
      id: 1342,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "What does BAM stand for in the context of BPMS?",
      options: [
        "A. Business Activity Monitoring",
        "B. Business Automation Model",
        "C. Balanced Analytics Matrix",
        "D. Business Architecture Mapping",
      ],
      correctAnswers: [0],
      explanation:
        "BAM stands for Business Activity Monitoring, which tracks process KPIs in real time.",
      traps: {
        B: "This sounds plausible but is not the stated term in the lecture.",
        C: "This is not a BPMS component label from the material.",
        D: "Architecture mapping is a different concept, not BAM.",
      },
    },
    {
      id: 1343,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which task type is performed by a human but is outside the scope of the BPMS?",
      options: [
        "A. Service task",
        "B. User task",
        "C. Manual task",
        "D. Script task",
      ],
      correctAnswers: [2],
      explanation:
        "A Manual task is performed by a human outside the BPMS scope.",
      traps: {
        A: "Service tasks are automated by a system.",
        B: "User tasks involve human input through the BPMS, such as forms or worklists.",
        D: "Script tasks are system-executed logic, not external manual work.",
      },
    },
    {
      id: 1344,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which statement best distinguishes lightweight from heavyweight BPMS platforms?",
      options: [
        "A. Lightweight BPMS are for BPMN only, while heavyweight BPMS are for DMN only",
        "B. Heavyweight BPMS typically include broader enterprise integration and analytics capabilities",
        "C. Heavyweight BPMS cannot support worklists",
        "D. Lightweight BPMS are always more accurate than heavyweight platforms",
      ],
      correctAnswers: [1],
      explanation:
        "The lecture notes that BPMS platforms range from lightweight workflow/form tools to heavyweight enterprise platforms with integration and analytics.",
      traps: {
        A: "Both types can involve BPM technologies; the distinction is not BPMN versus DMN.",
        C: "Worklists are a common BPMS capability, not something heavyweight systems cannot support.",
        D: "Accuracy is not the defining distinction presented in the lecture.",
      },
    },
    {
      id: 1345,
      lectureId: 10,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Process implementation requires both IT changes and organizational changes.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "The lecture explicitly states that implementation requires both IT changes and organizational changes, including change management and role adjustments.",
      traps: {
        B: "This would ignore the organizational side of implementation emphasized in the material.",
      },
    },
    {
      id: 1346,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "Which artifact provides real-time views of performance such as cycle time, backlog, and SLA compliance?",
      options: [
        "A. Event sub-process",
        "B. Operational dashboard",
        "C. Process landscape model",
        "D. Fishbone diagram",
      ],
      correctAnswers: [1],
      explanation:
        "Operational dashboards provide real-time views of process performance, including backlog and SLA-related metrics.",
      traps: {
        A: "Event sub-processes are BPMN modeling constructs, not monitoring tools.",
        C: "Process landscape models show high-level process architecture, not live operational data.",
        D: "Fishbone diagrams are used for root-cause analysis, not real-time monitoring.",
      },
    },
    {
      id: 1347,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which process mining type adds timing or frequency information to an existing model?",
      options: [
        "A. Process Discovery",
        "B. Conformance Checking",
        "C. Process Enhancement",
        "D. BPM Maturity Assessment",
      ],
      correctAnswers: [2],
      explanation:
        "Process Enhancement extends or improves an existing model using event log data, such as timing or frequency information.",
      traps: {
        A: "Discovery creates a model from logs rather than enriching an existing model.",
        B: "Conformance checking compares intended and actual behavior.",
        D: "Maturity assessment is an organizational capability evaluation, not a mining type.",
      },
    },
    {
      id: 1348,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In event-log terminology, what does a single row typically represent?",
      options: [
        "A. One complete process architecture",
        "B. One event or activity instance",
        "C. One entire maturity level",
        "D. One BPMN pool",
      ],
      correctAnswers: [1],
      explanation:
        "The lecture states that each row in an event log typically represents one event, meaning one activity instance.",
      traps: {
        A: "Process architecture is a high-level modeling artifact, not a log row.",
        C: "Maturity levels are organizational assessment stages, not event data.",
        D: "Pools are BPMN collaboration elements, not event-log rows.",
      },
    },
    {
      id: 1349,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which BPM maturity success factor is most directly about clear roles, accountability, and decision-making structures?",
      options: [
        "A. Culture",
        "B. Governance",
        "C. Methods",
        "D. People",
      ],
      correctAnswers: [1],
      explanation:
        "Governance is the maturity factor concerned with clear roles, accountability, and decision-making structures.",
      traps: {
        A: "Culture concerns shared values and process awareness, not formal decision rights.",
        C: "Methods concern standardized BPM methods and tools.",
        D: "People concerns capability and mindset rather than governance structure.",
      },
    },
    {
      id: 1350,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "How are maturity levels described in the lecture?",
      options: [
        "A. From operational to tactical",
        "B. From ad-hoc (level 1) to optimized (level 5)",
        "C. From discovery to execution",
        "D. From low cost to high quality",
      ],
      correctAnswers: [1],
      explanation:
        "The lecture states that BPM maturity progresses from ad-hoc at level 1 to optimized at level 5.",
      traps: {
        A: "Operational versus tactical is not the maturity progression presented.",
        C: "Those are BPM lifecycle notions, not maturity levels.",
        D: "Cost and quality are performance dimensions, not maturity levels.",
      },
    },
    {
      id: 1351,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which BPM lifecycle phase produces conformance and performance insights that feed back into future improvement?",
      options: [
        "A. Process Discovery",
        "B. Process Monitoring and Controlling",
        "C. Process Identification",
        "D. Process Implementation",
      ],
      correctAnswers: [1],
      explanation:
        "Process Monitoring and Controlling tracks performance and conformance, producing insights that feed back into the BPM cycle.",
      traps: {
        A: "Discovery produces an as-is model, not ongoing conformance insights.",
        C: "Identification selects and scopes processes, but does not produce run-time conformance evidence.",
        D: "Implementation puts change into action but does not itself produce the monitoring insights.",
      },
    },
    {
      id: 1352,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which option best reflects the BPM view of why customers care about processes?",
      options: [
        "A. Customers mainly evaluate organizational charts and departmental ownership",
        "B. Customers mainly experience end-to-end outcomes, not internal functional boundaries",
        "C. Customers care only about whether software was used",
        "D. Customers care only about whether a process has a process owner",
      ],
      correctAnswers: [1],
      explanation:
        "BPM emphasizes that customers experience end-to-end outcomes and journeys rather than internal departmental boundaries.",
      traps: {
        A: "Organizational structure matters internally, but customers primarily experience outcomes.",
        C: "Technology matters only insofar as it affects the end-to-end result.",
        D: "Ownership is important for governance, but customers mainly perceive service outcomes.",
      },
    },
    {
      id: 1353,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which relationship in a process architecture describes variants of a generic process?",
      options: [
        "A. Sequence",
        "B. Decomposition",
        "C. Specialization",
        "D. Synchronization",
      ],
      correctAnswers: [2],
      explanation:
        "Specialization describes variants of a more generic process. Decomposition breaks a process into sub-processes, while sequence captures ordering relationships.",
      traps: {
        A: "Sequence describes ordering, not variants.",
        B: "Decomposition describes parent-child breakdown, not variants.",
        D: "Synchronization is not one of the stated process architecture relationships.",
      },
    },
    {
      id: 1354,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "What does a process landscape model intentionally avoid showing?",
      options: [
        "A. Categories of processes",
        "B. High-level relationships among processes",
        "C. Detailed flow logic with activities and gateways",
        "D. The existence of end-to-end processes",
      ],
      correctAnswers: [2],
      explanation:
        "A process landscape model is a high-level view and intentionally avoids detailed flow logic such as individual activities and gateways.",
      traps: {
        A: "Grouping processes by category is one of the main purposes of the landscape model.",
        B: "High-level relationships are central to the model.",
        D: "End-to-end processes are exactly the kind of high-level objects it aims to show.",
      },
    },
    {
      id: 1355,
      lectureId: 3,
      type: "true-false",
      difficulty: "Medium",
      question:
        "A solid sequence flow can cross from one pool to another if both pools belong to the same company.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Sequence flow stays within a pool. Communication between pools uses message flows, regardless of whether the pools belong to the same company.",
      traps: {
        A: "Pool boundaries remain important even when participants belong to the same organization.",
      },
    },
    {
      id: 1356,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which gateway allows one or more outgoing paths to be taken depending on conditions?",
      options: [
        "A. XOR gateway",
        "B. AND gateway",
        "C. OR gateway",
        "D. Timer gateway",
      ],
      correctAnswers: [2],
      explanation:
        "The OR gateway is inclusive: one or more outgoing paths may be taken.",
      traps: {
        A: "XOR takes exactly one path.",
        B: "AND takes all paths concurrently.",
        D: "Timer is an event concept, not the gateway type described here.",
      },
    },
    {
      id: 1357,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "In an event-based gateway, what determines which path is taken?",
      options: [
        "A. The cheapest branch",
        "B. The branch with the most tasks",
        "C. The first event that occurs",
        "D. The branch with the highest probability in historical data",
      ],
      correctAnswers: [2],
      explanation:
        "An event-based gateway models a race condition: the first event that occurs determines the path taken.",
      traps: {
        A: "Cost is not how event-based gateways choose paths.",
        B: "The number of tasks on a branch is irrelevant.",
        D: "Historical probability may influence analysis, but the gateway waits for the first actual event at run time.",
      },
    },
    {
      id: 1358,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which BPMN mechanism is used to undo or reverse the effects of a previously completed activity?",
      options: [
        "A. Timer event",
        "B. Compensation event",
        "C. Multi-instance marker",
        "D. OR gateway",
      ],
      correctAnswers: [1],
      explanation:
        "Compensation events reverse the effects of already completed activities.",
      traps: {
        A: "Timer events are based on time conditions, not reversal of completed work.",
        C: "Multi-instance markers indicate repeated execution for multiple items.",
        D: "OR gateways are routing elements, not reversal mechanisms.",
      },
    },
    {
      id: 1359,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which pairing is correct?",
      options: [
        "A. Verification = semantic quality, Validation = syntactic quality",
        "B. Verification = pragmatic quality, Validation = syntactic quality",
        "C. Verification = syntactic quality, Validation = semantic quality",
        "D. Verification = quantitative quality, Validation = pragmatic quality",
      ],
      correctAnswers: [2],
      explanation:
        "Verification checks syntactic quality against BPMN rules, while validation checks semantic quality against real-world behavior.",
      traps: {
        A: "This reverses the two concepts.",
        B: "Pragmatic quality is about understandability, not verification.",
        D: "Quantitative quality is not one of the three model quality dimensions here.",
      },
    },
    {
      id: 1360,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which discovery method is most likely to be objective but still miss informal practices?",
      options: [
        "A. Evidence-based discovery",
        "B. Interview-based discovery",
        "C. Workshop-based discovery",
        "D. Root-cause discovery",
      ],
      correctAnswers: [0],
      explanation:
        "Evidence-based discovery relies on documents and systems, making it more objective but also more likely to miss informal workarounds.",
      traps: {
        B: "Interviews reveal tacit and informal practices more easily.",
        C: "Workshops can surface shared informal realities through discussion.",
        D: "Root-cause discovery is not one of the process discovery methods listed.",
      },
    },
    {
      id: 1361,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A legal quality inspection that customers would not directly pay for is best classified as:",
      options: [
        "A. VA",
        "B. BVA",
        "C. NVA",
        "D. Hold waste",
      ],
      correctAnswers: [1],
      explanation:
        "A legally required quality inspection is Business Value-Adding: needed by the business but not directly valued by the customer.",
      traps: {
        A: "Direct customer value would make it VA, but legal compliance is the stronger classification here.",
        C: "Required legal checks are not waste to be eliminated.",
        D: "Hold waste is about waiting, not compliance activity.",
      },
    },
    {
      id: 1362,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Pareto analysis suggests improvement effort should first focus on:",
      options: [
        "A. The easiest issues regardless of impact",
        "B. The earliest issues found chronologically",
        "C. The vital few causes responsible for most of the impact",
        "D. All causes equally",
      ],
      correctAnswers: [2],
      explanation:
        "Pareto analysis follows the 80/20 idea that a vital few causes usually generate most of the impact.",
      traps: {
        A: "Ease of implementation is a PICK chart concern, not the core idea of Pareto analysis.",
        B: "Chronology is irrelevant to Pareto prioritization.",
        D: "Pareto explicitly assumes unequal impact across causes.",
      },
    },
    {
      id: 1363,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "If two parallel branches take 4 hours and 9 hours respectively, and both must finish before the process continues, what is the AND-block cycle time?",
      options: [
        "A. 4 hours",
        "B. 6.5 hours",
        "C. 9 hours",
        "D. 13 hours",
      ],
      correctAnswers: [2],
      explanation:
        "For an AND-block, cycle time is determined by the slowest parallel branch, so the block takes 9 hours.",
      traps: {
        A: "The faster branch does not determine completion when synchronization is required.",
        B: "Average time is not the rule for AND-block cycle time.",
        D: "Summing branch times would apply to sequential execution, not synchronized parallel execution.",
      },
    },
    {
      id: 1364,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A redesign speeds up the process but requires more concurrent resources and therefore higher operating expense. Which Devil's Quadrangle trade-off does this illustrate most directly?",
      options: [
        "A. Time versus Cost",
        "B. Quality versus Flexibility",
        "C. Cost versus Governance",
        "D. Flexibility versus BPM maturity",
      ],
      correctAnswers: [0],
      explanation:
        "This is a classic trade-off between faster time performance and higher cost.",
      traps: {
        B: "Quality and flexibility are not the primary trade-off in the scenario described.",
        C: "Governance is not a Devil's Quadrangle dimension.",
        D: "BPM maturity is not one of the four quadrangle dimensions.",
      },
    },
    {
      id: 1365,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which redesign heuristic creates different handling paths for simple and complex cases instead of processing all cases the same way?",
      options: [
        "A. Triage",
        "B. Buffering",
        "C. Task composition",
        "D. Empower",
      ],
      correctAnswers: [0],
      explanation:
        "Triage creates separate processing paths for different case categories, such as simple versus complex cases.",
      traps: {
        B: "Buffering concerns notification versus polling behavior.",
        C: "Task composition merges tasks to reduce handoffs.",
        D: "Empower increases worker authority to reduce management checks.",
      },
    },
    {
      id: 1366,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which statement best captures the specialist-generalist trade-off?",
      options: [
        "A. Specialists always dominate generalists on both quality and flexibility",
        "B. Generalists are always cheaper and always faster",
        "C. Specialists tend to support quality, while generalists tend to support flexibility",
        "D. The trade-off is only relevant in manufacturing",
      ],
      correctAnswers: [2],
      explanation:
        "The lecture presents the trade-off as quality from specialization versus flexibility from generalization.",
      traps: {
        A: "The lecture emphasizes trade-offs, not dominance on all dimensions.",
        B: "Generalists are not automatically cheaper and faster in all cases.",
        D: "This trade-off applies broadly, not only in manufacturing.",
      },
    },
    {
      id: 1367,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement correctly contrasts BPMN and DMN?",
      options: [
        "A. BPMN models decisions only, while DMN models process flow only",
        "B. BPMN models process flow, while DMN models structured business decisions",
        "C. BPMN is for event logs, while DMN is for process mining",
        "D. BPMN and DMN are two names for the same standard",
      ],
      correctAnswers: [1],
      explanation:
        "BPMN is used for modeling process flow, while DMN is used for modeling and automating structured business decisions.",
      traps: {
        A: "This reverses the roles of BPMN and DMN.",
        C: "Event logs and process mining are separate topics from BPMN/DMN modeling notation.",
        D: "They are related but distinct standards with different purposes.",
      },
    },
    {
      id: 1368,
      lectureId: 10,
      type: "true-false",
      difficulty: "Medium",
      question:
        "RPA is especially useful for automating routine work in systems that do not expose convenient APIs.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "The lecture highlights that RPA bots mimic human UI actions, making them useful where APIs are absent or limited.",
      traps: {
        B: "This would contradict the main motivation for using RPA in many legacy environments.",
      },
    },
    {
      id: 1369,
      lectureId: 11,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which attributes are typical event-log fields according to the lecture? (Select ALL that apply)",
      options: [
        "A. Case ID",
        "B. Activity name",
        "C. Timestamp",
        "D. Company revenue target",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Typical event-log attributes include Case ID, Activity name, Timestamp, and often Resource and other event attributes.",
      traps: {
        D: "Revenue target is a business metric, not a standard event-level execution attribute.",
      },
    },
    {
      id: 1370,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An organization has good BPM tools and methods, but weak shared process awareness and weak process-oriented values. Which BPM maturity success factor is most clearly weak?",
      options: [
        "A. Methods",
        "B. IT",
        "C. Culture",
        "D. Governance",
      ],
      correctAnswers: [2],
      explanation:
        "Culture is the maturity factor concerned with organization-wide process awareness and values.",
      traps: {
        A: "Methods concern standardized BPM methods and tools, which the scenario says are already good.",
        B: "IT concerns technology infrastructure, not shared values and awareness.",
        D: "Governance concerns roles and accountability, not primarily cultural mindset.",
      },
    },
  ];

  window._BPS301_DATA.push({ quiz });
})();
