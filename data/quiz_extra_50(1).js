// Extra Quiz Pack: 50 additional questions (English-only)
(function () {
  const quiz = [
    {
      id: 1251,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement best distinguishes a business process from a functional department?",
      options: [
        "A. A process cuts across functions to deliver value, while a department is an organizational unit",
        "B. A process is always automated, while a department is always manual",
        "C. A process exists only in manufacturing, while departments exist in services",
        "D. A process owns strategy, while a department owns operations",
      ],
      correctAnswers: [0],
      explanation:
        "A business process is an end-to-end sequence of work that creates value for a customer, often crossing several departments. A department is a structural unit in the organization.",
      traps: {
        B: "Processes may be manual, automated, or mixed; automation is not the defining difference.",
        C: "Processes exist in both manufacturing and service settings.",
        D: "Strategy and operations are not separated this way; the main distinction is process flow versus organizational structure.",
      },
    },
    {
      id: 1252,
      lectureId: 1,
      type: "true-false",
      difficulty: "Easy",
      question:
        "A process-oriented view is useful because customers typically experience end-to-end outcomes rather than internal departmental boundaries.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Customers judge the complete outcome and journey, not how neatly work was split across departments. This is a core reason BPM adopts an end-to-end view.",
      traps: {
        B: "Departmental boundaries matter internally, but customers usually perceive the full service or product outcome.",
      },
    },
    {
      id: 1253,
      lectureId: 1,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which characteristics are typical of a business process? (Select ALL that apply)",
      options: [
        "A. It has a trigger and a measurable outcome",
        "B. It can involve multiple actors, systems, or units",
        "C. It must always stay inside one department to preserve control",
        "D. It transforms inputs into outputs that matter to a customer or stakeholder",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Business processes have start/end points, participants, and transformed outputs. They often cross functional boundaries rather than staying inside one department.",
      traps: {
        C: "Cross-functional coordination is common in real business processes; staying within one department is not required.",
      },
    },
    {
      id: 1254,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An organization reports excellent departmental productivity but poor customer satisfaction due to repeated handoff delays. From a BPM perspective, this most strongly suggests:",
      options: [
        "A. Local efficiency does not guarantee strong end-to-end process performance",
        "B. Customer satisfaction is unrelated to process design",
        "C. Departmental specialization should be removed entirely",
        "D. The issue can only be solved by installing a BPMS",
      ],
      correctAnswers: [0],
      explanation:
        "BPM emphasizes end-to-end performance. Departments can optimize locally while the full process still performs poorly because of handoffs, queues, and coordination failures.",
      traps: {
        B: "Customer satisfaction is often heavily influenced by process responsiveness and consistency.",
        C: "Specialization may still be useful; the problem is coordination, not specialization by itself.",
        D: "Technology may help, but process issues are not solved automatically by software alone.",
      },
    },
    {
      id: 1255,
      lectureId: 1,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which output of BPM work is most directly used to decide where improvement effort should be focused first?",
      options: [
        "A. A prioritized process portfolio",
        "B. A final event log",
        "C. A user interface prototype",
        "D. A worklist inbox configuration",
      ],
      correctAnswers: [0],
      explanation:
        "A prioritized process portfolio identifies which processes deserve attention first based on criteria such as strategic importance, health, and feasibility.",
      traps: {
        B: "Event logs support analysis and mining, but not the initial portfolio prioritization by themselves.",
        C: "A UI prototype belongs to implementation design, not portfolio prioritization.",
        D: "Inbox configuration is an operational implementation detail, not a prioritization artifact.",
      },
    },
    {
      id: 1256,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "What is the main purpose of a process architecture?",
      options: [
        "A. To provide a structured overview of an organization's process landscape",
        "B. To replace all detailed process models with one diagram",
        "C. To specify executable workflow logic for automation engines",
        "D. To calculate queueing times and resource utilization",
      ],
      correctAnswers: [0],
      explanation:
        "A process architecture organizes processes at different abstraction levels and clarifies how they relate to one another across the enterprise.",
      traps: {
        B: "Architecture complements detailed models; it does not replace them.",
        C: "Executable logic belongs to lower-level implementation-oriented models.",
        D: "Queueing and utilization are quantitative analysis topics, not the main goal of architecture.",
      },
    },
    {
      id: 1257,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which classification best fits a process that defines policies, allocates standards, and steers how other processes should operate?",
      options: [
        "A. Core process",
        "B. Support process",
        "C. Management process",
        "D. Discovery process",
      ],
      correctAnswers: [2],
      explanation:
        "Management processes provide direction, governance, and rules for the organization. They guide core and support processes rather than directly delivering customer value.",
      traps: {
        A: "Core processes directly deliver value to customers.",
        B: "Support processes enable the organization but do not primarily steer enterprise direction.",
        D: "Discovery is an activity in BPM, not a process category in the architecture.",
      },
    },
    {
      id: 1258,
      lectureId: 2,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Decomposition and specialization are the same architectural relation because both break a process into smaller parts.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Decomposition breaks a process into subprocesses or parts. Specialization defines variants of a more general process. They are related but not the same.",
      traps: {
        A: "This confuses two distinct architecture relations with different purposes.",
      },
    },
    {
      id: 1259,
      lectureId: 2,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which are valid reasons to use reference models during process identification? (Select ALL that apply)",
      options: [
        "A. They help check completeness of the process landscape",
        "B. They offer common terminology for discussing processes",
        "C. They eliminate the need for adaptation to organizational context",
        "D. They can speed up initial process architecture design",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Reference models support completeness, common language, and faster drafting. They still need tailoring to fit a specific organization.",
      traps: {
        C: "Reference models are guides, not templates to be copied blindly.",
      },
    },
    {
      id: 1260,
      lectureId: 2,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "If two departments perform very similar invoice-handling work but with different rules for different customer segments, the best architecture relation is often:",
      options: [
        "A. Specialization",
        "B. Termination",
        "C. Simulation",
        "D. Randomization",
      ],
      correctAnswers: [0],
      explanation:
        "When similar processes share a generic structure but vary by context or customer segment, specialization is often the most appropriate relation.",
      traps: {
        B: "Termination is not an architecture relation for process variants.",
        C: "Simulation is an analysis method, not a structural relation.",
        D: "Randomization is unrelated to process architecture.",
      },
    },
    {
      id: 1261,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "In BPMN, which element is most appropriate for a point where the process is waiting for something to happen?",
      options: [
        "A. Event",
        "B. Data store",
        "C. Lane",
        "D. Annotation",
      ],
      correctAnswers: [0],
      explanation:
        "Events represent something that happens, such as a message arrival, timer occurrence, or process start/end condition.",
      traps: {
        B: "A data store represents persisted data, not a waiting condition.",
        C: "A lane groups responsibility, not behavior.",
        D: "Annotations add explanatory text but do not affect process flow.",
      },
    },
    {
      id: 1262,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Hard",
      question: "Which BPMN labeling style is best for an event?",
      options: [
        "A. Validate application",
        "B. Application approved",
        "C. Approval clerk",
        "D. Approval database",
      ],
      correctAnswers: [1],
      explanation:
        "Events are typically labeled as states or occurrences, such as 'Application approved', while activities use verb-object labels like 'Validate application'.",
      traps: {
        A: "This is an activity-style label, not an event-style label.",
        C: "This refers to a role or actor, not an event.",
        D: "This refers to a data or system concept, not an event.",
      },
    },
    {
      id: 1263,
      lectureId: 3,
      type: "true-false",
      difficulty: "Easy",
      question:
        "A pool in BPMN can be used to represent a participant in a collaboration.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Pools represent participants, such as organizations or major entities, in collaboration diagrams.",
      traps: {
        B: "This is one of the core BPMN roles of pools.",
      },
    },
    {
      id: 1264,
      lectureId: 3,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which modeling choices usually improve readability in a BPMN diagram? (Select ALL that apply)",
      options: [
        "A. Keeping the flow generally left-to-right",
        "B. Using concise verb-object labels for tasks",
        "C. Crossing sequence flows whenever necessary to save space",
        "D. Splitting very large diagrams into manageable subprocesses or views",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Readable BPMN models benefit from clear direction, clear labels, and manageable scope. Excessive crossing lines usually reduce understandability.",
      traps: {
        C: "Crossing sequence flows often makes the diagram harder to read and maintain.",
      },
    },
    {
      id: 1265,
      lectureId: 3,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "What is the main purpose of a lane in BPMN?",
      options: [
        "A. To group activities by responsibility within a participant",
        "B. To persist business data between activities",
        "C. To connect different pools with control flow",
        "D. To store exception logic outside the main model",
      ],
      correctAnswers: [0],
      explanation:
        "Lanes organize activities by roles, departments, or responsibilities inside a pool. They help clarify who does what.",
      traps: {
        B: "Persisted data is represented with data stores or data objects, not lanes.",
        C: "Pools communicate with message flow, not through lanes.",
        D: "Lanes do not store logic; they indicate responsibility.",
      },
    },
    {
      id: 1266,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which BPMN construct is most suitable when a reusable chunk of work should be shown as one activity at the current level but can be expanded elsewhere?",
      options: [
        "A. Collapsed subprocess",
        "B. Data object",
        "C. Message flow",
        "D. Text annotation",
      ],
      correctAnswers: [0],
      explanation:
        "A collapsed subprocess hides internal detail at the current level while preserving the option to model the internal logic separately.",
      traps: {
        B: "A data object represents information, not a reusable chunk of work.",
        C: "Message flow models communication, not decomposition.",
        D: "An annotation explains the model but does not structure behavior.",
      },
    },
    {
      id: 1267,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A task sends a request and then waits for one of several external replies before continuing. Which construct is most appropriate for choosing the next path?",
      options: [
        "A. Event-based gateway",
        "B. AND-split gateway",
        "C. Data store",
        "D. Inclusive join gateway",
      ],
      correctAnswers: [0],
      explanation:
        "An event-based gateway is used when the routing decision depends on which external event occurs first, such as alternative replies or timeouts.",
      traps: {
        B: "AND-split launches parallel paths rather than waiting for one event.",
        C: "A data store does not choose control flow.",
        D: "An inclusive join is a merge construct, not an event race selection.",
      },
    },
    {
      id: 1268,
      lectureId: 4,
      type: "true-false",
      difficulty: "Medium",
      question:
        "A message flow is used to represent communication between different BPMN pools.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Message flow models communication between participants in different pools, while sequence flow stays within a pool.",
      traps: {
        B: "Using sequence flow across pools would be incorrect BPMN semantics.",
      },
    },
    {
      id: 1269,
      lectureId: 4,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which scenarios are typically modeled with intermediate events? (Select ALL that apply)",
      options: [
        "A. Waiting for a message during process execution",
        "B. Triggering a timer during ongoing execution",
        "C. Storing a customer record permanently in a repository",
        "D. Throwing a signal or message after a task finishes",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Intermediate events capture things that happen during process execution, including waits, timers, and thrown signals/messages. Data persistence is not an event.",
      traps: {
        C: "Permanent storage is modeled as data, not as an intermediate event.",
      },
    },
    {
      id: 1270,
      lectureId: 4,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "What is the best interpretation of a data object in BPMN?",
      options: [
        "A. It shows information used or produced by activities",
        "B. It automatically routes tokens to the next activity",
        "C. It replaces all need for textual explanations",
        "D. It always means database persistence",
      ],
      correctAnswers: [0],
      explanation:
        "Data objects indicate information consumed or produced in a process. They do not control routing and do not necessarily imply persistent storage.",
      traps: {
        B: "Routing is determined by sequence flow and gateways, not data objects alone.",
        C: "Annotations and other explanations may still be useful.",
        D: "Persistent data is better represented by a data store, not every data object.",
      },
    },
    {
      id: 1271,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which discovery approach is especially useful when process knowledge is scattered across several roles and no single person sees the whole picture?",
      options: [
        "A. Workshop-based discovery",
        "B. Random sampling of KPIs only",
        "C. Immediate automation design",
        "D. Exclusive reliance on SOP documents",
      ],
      correctAnswers: [0],
      explanation:
        "Workshops allow multiple stakeholders to align views, reveal inconsistencies, and reconstruct an end-to-end process collaboratively.",
      traps: {
        B: "KPIs alone do not reconstruct process logic or responsibility handoffs.",
        C: "Automation design is premature without discovery.",
        D: "Documents often miss tacit behavior, exceptions, and workarounds.",
      },
    },
    {
      id: 1272,
      lectureId: 5,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Document analysis can be helpful in process discovery, but it should usually be complemented with interviews or workshops.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Documents provide an important starting point, but they often describe intended procedures rather than actual practice. Interviews and workshops help validate reality.",
      traps: {
        B: "Relying on documents alone often misses exceptions, tacit knowledge, and real execution behavior.",
      },
    },
    {
      id: 1273,
      lectureId: 5,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which behaviors by a facilitator improve process discovery workshops? (Select ALL that apply)",
      options: [
        "A. Keeping discussion focused on facts and flow logic",
        "B. Encouraging participants to challenge inconsistencies",
        "C. Imposing one participant's view to finish faster",
        "D. Clarifying ambiguous terms before modeling them",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Good facilitation keeps the workshop focused, surfaces inconsistencies, and clarifies terminology. Imposing one viewpoint usually harms validity.",
      traps: {
        C: "Speed is not worth sacrificing accuracy and shared understanding in discovery.",
      },
    },
    {
      id: 1274,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A discovered process model perfectly matches policy documents but omits routine exception handling practiced by staff. The biggest resulting risk is:",
      options: [
        "A. Low semantic validity",
        "B. Excessive simulation precision",
        "C. Overuse of BPMN pools",
        "D. Too much decomposition",
      ],
      correctAnswers: [0],
      explanation:
        "If actual exceptions and real behavior are omitted, the discovered model no longer represents reality well, which is a semantic validity problem.",
      traps: {
        B: "The issue is factual accuracy, not simulation precision.",
        C: "Pool usage is unrelated to the core problem here.",
        D: "Decomposition may or may not be present; it is not the main risk described.",
      },
    },
    {
      id: 1275,
      lectureId: 5,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "Why is fragmented knowledge a recurring challenge in process discovery?",
      options: [
        "A. Different participants each know only parts of the end-to-end process",
        "B. BPMN has too few elements to represent enterprise work",
        "C. Event logs automatically solve all discovery gaps",
        "D. Every process has only one actor but too many systems",
      ],
      correctAnswers: [0],
      explanation:
        "In many organizations, process knowledge is distributed across roles, teams, and systems. No single person sees every handoff or exception.",
      traps: {
        B: "The challenge is organizational knowledge distribution, not insufficient notation.",
        C: "Event logs may help but are not always available or sufficient.",
        D: "Processes often involve many actors, not just one.",
      },
    },
    {
      id: 1276,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "If analysts want to distinguish customer value, business-required work, and pure waste, which technique is most directly applicable?",
      options: [
        "A. Value-added analysis",
        "B. Event-log clustering",
        "C. DMN table normalization",
        "D. Resource leveling",
      ],
      correctAnswers: [0],
      explanation:
        "Value-added analysis classifies activities into VA, BVA, and NVA categories to support improvement decisions.",
      traps: {
        B: "Clustering is a mining/analytics technique, not the main qualitative categorization method here.",
        C: "DMN normalization concerns decision logic, not activity value classification.",
        D: "Resource leveling is a planning concern, not the core qualitative method asked.",
      },
    },
    {
      id: 1277,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A process team identifies repeated duplicate data entry caused by disconnected systems. In a waste lens, this is best classified as:",
      options: [
        "A. Overdo",
        "B. Customer intimacy",
        "C. Strategic alignment",
        "D. Case ownership",
      ],
      correctAnswers: [0],
      explanation:
        "Duplicate entry is unnecessary extra work and is therefore a classic form of overprocessing or 'overdo' waste.",
      traps: {
        B: "Customer intimacy is a strategic concept, not a waste category.",
        C: "Strategic alignment is a capability/maturity concern, not a waste type.",
        D: "Case ownership concerns responsibility, not duplicated effort.",
      },
    },
    {
      id: 1278,
      lectureId: 6,
      type: "true-false",
      difficulty: "Easy",
      question:
        "A fishbone diagram is used to structure possible causes of a problem before narrowing down the most likely root causes.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "A fishbone or cause-effect diagram helps organize candidate causes under categories before deeper validation or prioritization.",
      traps: {
        B: "This is exactly what fishbone diagrams are designed to support.",
      },
    },
    {
      id: 1279,
      lectureId: 6,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which observations typically justify qualitative analysis before jumping to redesign? (Select ALL that apply)",
      options: [
        "A. Frequent complaints point to unclear root causes",
        "B. Stakeholders disagree on why the process performs poorly",
        "C. The process is already fully understood and issues are trivial",
        "D. Waste categories and pain points still need to be diagnosed",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Qualitative analysis is useful when causes are unclear, stakeholder views conflict, or waste/pain points need diagnosis. If the process is already fully understood and trivial, the need is weaker.",
      traps: {
        C: "If issues are already obvious and trivial, deep qualitative analysis may add little value.",
      },
    },
    {
      id: 1280,
      lectureId: 6,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "What is the strongest purpose of stakeholder analysis in process analysis?",
      options: [
        "A. To identify who is affected, who influences change, and whose concerns must be addressed",
        "B. To replace root-cause analysis with voting",
        "C. To compute service times from execution logs",
        "D. To derive BPMN syntax automatically",
      ],
      correctAnswers: [0],
      explanation:
        "Stakeholder analysis clarifies actors, influence, concerns, and change impacts. It helps both diagnosis and feasibility of improvement.",
      traps: {
        B: "Stakeholder analysis complements, not replaces, root-cause work.",
        C: "Service-time computation is quantitative analysis.",
        D: "Syntax is not derived from stakeholder analysis.",
      },
    },
    {
      id: 1281,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which process measure best represents the amount of time a case spends from start to finish?",
      options: [
        "A. Cycle time",
        "B. Arrival rate",
        "C. Routing probability",
        "D. Resource class",
      ],
      correctAnswers: [0],
      explanation:
        "Cycle time measures elapsed time from the start to the completion of a case, including waiting and processing components.",
      traps: {
        B: "Arrival rate measures incoming work volume per unit time, not duration per case.",
        C: "Routing probability concerns path selection, not elapsed duration.",
        D: "Resource class is a categorization concept, not a time metric.",
      },
    },
    {
      id: 1282,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A resource works 6 productive hours per day and needs 15 minutes per case on average. What is the approximate daily capacity of that resource?",
      options: [
        "A. 12 cases",
        "B. 18 cases",
        "C. 24 cases",
        "D. 30 cases",
      ],
      correctAnswers: [2],
      explanation:
        "Six productive hours equal 360 minutes. At 15 minutes per case, the capacity is 360/15 = 24 cases per day.",
      traps: {
        A: "This would imply 30 minutes per case, not 15.",
        B: "This is below the computed capacity from the given service time.",
        D: "This would require only 12 minutes per case, which was not stated.",
      },
    },
    {
      id: 1283,
      lectureId: 7,
      type: "true-false",
      difficulty: "Medium",
      question:
        "If a bottleneck resource is overloaded, improving a non-bottleneck resource alone is unlikely to produce a large reduction in end-to-end waiting time.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "The bottleneck constrains throughput and often drives queue growth. Improving non-bottlenecks may have limited effect if the true constraint remains unchanged.",
      traps: {
        B: "Improving unconstrained parts rarely solves a bottleneck-driven waiting-time problem by itself.",
      },
    },
    {
      id: 1284,
      lectureId: 7,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which inputs are commonly needed to estimate process cycle time quantitatively? (Select ALL that apply)",
      options: [
        "A. Activity processing times",
        "B. Routing or branching behavior",
        "C. Resource capacities or availability assumptions",
        "D. The color scheme of the BPMN diagram",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Quantitative analysis often needs service times, routing logic, and capacity assumptions. Diagram color has no analytical role.",
      traps: {
        D: "Visual styling does not determine cycle-time behavior.",
      },
    },
    {
      id: 1285,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "If two parallel branches take 4 minutes and 9 minutes respectively, and both must finish before the process can continue, the block's completion time is:",
      options: [
        "A. 4 minutes",
        "B. 9 minutes",
        "C. 13 minutes",
        "D. 18 minutes",
      ],
      correctAnswers: [1],
      explanation:
        "In parallel blocks where synchronization is required, time is determined by the slowest branch. Here that is 9 minutes.",
      traps: {
        A: "The faster branch does not determine completion when synchronization is required.",
        C: "Times are not summed for synchronized parallel completion.",
        D: "This is neither a valid sum nor the correct synchronization rule.",
      },
    },
    {
      id: 1286,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which redesign idea best fits a transactional improvement approach rather than a radical reinvention?",
      options: [
        "A. Remove clearly unnecessary approvals from the existing flow",
        "B. Abandon the current process and business model entirely",
        "C. Replace all roles with a fully autonomous organization",
        "D. Redefine the market segment before analyzing the process",
      ],
      correctAnswers: [0],
      explanation:
        "Transactional redesign usually seeks targeted improvements to the existing process, such as eliminating unnecessary steps or simplifying flow.",
      traps: {
        B: "This is more radical and transformational than transactional.",
        C: "This is unrealistic and far beyond typical transactional redesign scope.",
        D: "Market redefinition is a strategic move, not a standard transactional process redesign step.",
      },
    },
    {
      id: 1287,
      lectureId: 8,
      type: "true-false",
      difficulty: "Medium",
      question:
        "Task automation is always beneficial, even if the automated task is itself unnecessary from a process perspective.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation:
        "Automating waste may reduce labor but still preserves unnecessary work. Good redesign first questions whether the task should exist at all.",
      traps: {
        A: "Automation is not a substitute for eliminating non-value-adding work.",
      },
    },
    {
      id: 1288,
      lectureId: 8,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which redesign moves typically reduce cycle time in a transactional redesign context? (Select ALL that apply)",
      options: [
        "A. Resequencing checks so failing cases are rejected earlier",
        "B. Running independent tasks in parallel where coordination permits",
        "C. Adding reviews only to make the process feel safer",
        "D. Eliminating unnecessary handoffs between roles",
      ],
      correctAnswers: [0, 1, 3],
      explanation:
        "Early rejection, safe parallelism, and fewer handoffs can reduce delay. Adding non-justified reviews usually increases cycle time.",
      traps: {
        C: "Extra reviews without clear value tend to add delay and cost.",
      },
    },
    {
      id: 1289,
      lectureId: 8,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Which risk is most likely when transactional redesign focuses only on speed and ignores controls or exception paths?",
      options: [
        "A. Quality or compliance deterioration",
        "B. Guaranteed improvement in flexibility",
        "C. Elimination of all queues",
        "D. Automatic stakeholder buy-in",
      ],
      correctAnswers: [0],
      explanation:
        "A redesign that chases speed alone can weaken controls, create defects, or violate compliance requirements if safeguards are removed carelessly.",
      traps: {
        B: "Flexibility may improve or worsen; it is not guaranteed.",
        C: "Queues are not automatically eliminated by faster nominal flow.",
        D: "Stakeholder acceptance depends on change management and consequences, not just speed gains.",
      },
    },
    {
      id: 1290,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Medium",
      question: "What is the main value of redesign heuristics?",
      options: [
        "A. They provide reusable improvement ideas drawn from recurring process problems",
        "B. They guarantee the best redesign for every process",
        "C. They eliminate the need for analysis and stakeholder input",
        "D. They replace all quantitative modeling techniques",
      ],
      correctAnswers: [0],
      explanation:
        "Heuristics provide practical redesign patterns and ideas, but they still need contextual judgment, validation, and trade-off analysis.",
      traps: {
        B: "Heuristics are useful guides, not universal guarantees.",
        C: "Good redesign still needs analysis and stakeholder involvement.",
        D: "Heuristics complement, not replace, quantitative methods.",
      },
    },
    {
      id: 1291,
      lectureId: 9,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A team considers splitting cases into standard, urgent, and complex channels with different handling logic. Which redesign idea is this closest to?",
      options: [
        "A. Triage and differentiated treatment",
        "B. Blind task elimination",
        "C. Random routing",
        "D. Passive duplication",
      ],
      correctAnswers: [0],
      explanation:
        "Differentiating handling paths based on case type is a classic redesign idea that can improve responsiveness and fit-for-purpose control.",
      traps: {
        B: "This does not eliminate tasks blindly; it routes cases differently.",
        C: "The paths are selected deliberately, not randomly.",
        D: "Duplication is not the core redesign principle here.",
      },
    },
    {
      id: 1292,
      lectureId: 9,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Redesign heuristics should be evaluated against trade-offs such as cost, time, quality, and flexibility rather than applied mechanically.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Heuristics can help generate ideas, but every redesign must still be judged against performance trade-offs and contextual risks.",
      traps: {
        B: "Mechanical application of heuristics often creates new problems elsewhere in the process.",
      },
    },
    {
      id: 1293,
      lectureId: 9,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which redesign proposals are most likely to improve flexibility? (Select ALL that apply)",
      options: [
        "A. Giving experienced staff bounded discretion for exceptional cases",
        "B. Creating one rigid path for all cases regardless of variation",
        "C. Separating routine cases from exceptional ones",
        "D. Embedding all decisions permanently in hard-coded applications with no rule layer",
      ],
      correctAnswers: [0, 2],
      explanation:
        "Flexibility improves when the process can adapt to variation, for example through differentiated handling or bounded discretion. Overly rigid one-path or hard-coded approaches usually reduce flexibility.",
      traps: {
        B: "One rigid path often handles variation poorly.",
        D: "Hard-coding everything makes adaptation slower and more difficult.",
      },
    },
    {
      id: 1294,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which statement best describes the role of a BPMS worklist handler?",
      options: [
        "A. It delivers pending human tasks to the right users or roles",
        "B. It stores process architecture levels for executives",
        "C. It replaces event logs in process mining",
        "D. It performs strategic portfolio prioritization",
      ],
      correctAnswers: [0],
      explanation:
        "The worklist handler manages and presents user tasks that require human action during process execution.",
      traps: {
        B: "Architecture is a modeling concern, not the worklist handler's job.",
        C: "Event logs and worklists serve very different purposes.",
        D: "Portfolio prioritization belongs to BPM governance and identification work.",
      },
    },
    {
      id: 1295,
      lectureId: 10,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "What is the strongest reason to externalize business rules into a rule engine or DMN model during implementation?",
      options: [
        "A. It makes decision logic easier to change without rewriting core process flow",
        "B. It removes the need for process models",
        "C. It guarantees perfect data quality",
        "D. It prevents all exceptions at runtime",
      ],
      correctAnswers: [0],
      explanation:
        "Externalized rules improve maintainability and adaptability because decision logic can evolve without changing the whole process implementation.",
      traps: {
        B: "Rule logic complements process models; it does not replace them.",
        C: "Rule engines do not automatically ensure perfect data quality.",
        D: "Exceptions can still occur even with externalized rules.",
      },
    },
    {
      id: 1296,
      lectureId: 10,
      type: "true-false",
      difficulty: "Easy",
      question:
        "Integration concerns are important in process implementation because many real processes span multiple applications and services.",
      options: ["A. True", "B. False"],
      correctAnswers: [0],
      explanation:
        "Real end-to-end processes often cross systems, so implementation usually needs integration, message exchange, and data mapping.",
      traps: {
        B: "Implementation is rarely confined to one isolated system in real organizational settings.",
      },
    },
    {
      id: 1297,
      lectureId: 10,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which questions should be clarified before automating a process model? (Select ALL that apply)",
      options: [
        "A. Which tasks are human, service, or rule-driven",
        "B. What data mappings and interfaces are required",
        "C. How exceptions and timeouts will be handled",
        "D. Whether BPMN diagram colors should match the brand palette",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Automation readiness depends on task types, data/interface requirements, and exception handling. Visual branding does not determine execution quality.",
      traps: {
        D: "Brand palette may matter for UI design, but not for core process automation logic.",
      },
    },
    {
      id: 1298,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "Which KPI would most directly reveal how long customers wait before receiving a completed service outcome?",
      options: [
        "A. Cycle time",
        "B. Number of BPMN pools",
        "C. Count of strategic themes",
        "D. Number of rule tables",
      ],
      correctAnswers: [0],
      explanation:
        "Cycle time directly measures elapsed duration from process start to completion, which is highly relevant to customer waiting experience.",
      traps: {
        B: "Pools are modeling elements, not performance indicators.",
        C: "Strategic themes are management constructs, not operational waiting measures.",
        D: "Rule tables do not directly measure elapsed performance.",
      },
    },
    {
      id: 1299,
      lectureId: 11,
      type: "multiple-answer",
      difficulty: "Hard",
      question:
        "Which conditions improve the quality of a process mining event log? (Select ALL that apply)",
      options: [
        "A. Each event can be tied to a clear Case ID",
        "B. Activities are recorded consistently and meaningfully",
        "C. Timestamps are available and reliable",
        "D. Strategic objectives are written only in slide decks rather than in event data",
      ],
      correctAnswers: [0, 1, 2],
      explanation:
        "Useful event logs need clear case grouping, meaningful activity labels, and reliable timestamps. Slide decks do not improve event-log quality.",
      traps: {
        D: "Strategy documents may matter for governance, but they do not improve event-log structure directly.",
      },
    },
    {
      id: 1300,
      lectureId: 11,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An organization has BPM methods and tools, but process ownership is unclear and improvement decisions are inconsistent across units. Which BPM maturity factor is most clearly weak?",
      options: [
        "A. Governance",
        "B. Timestamping",
        "C. Layout standardization",
        "D. Queue discipline",
      ],
      correctAnswers: [0],
      explanation:
        "Governance concerns roles, responsibilities, decision rights, and control structures. Unclear ownership and inconsistent improvement decisions are classic governance weaknesses.",
      traps: {
        B: "Timestamping is an event-log quality issue, not a BPM maturity factor weakness of this kind.",
        C: "Layout standardization is minor compared with ownership and decision-right problems.",
        D: "Queue discipline is an operational analysis topic, not the maturity factor described.",
      },
    },
  ];

  window._BPS301_DATA.push({ quiz });
})();
