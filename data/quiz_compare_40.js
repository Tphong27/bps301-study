// Compare/Difference Quiz Pack: 40 tricky distinction questions (English-only)
(function () {
  const quiz = [
  {
    "id": 1421,
    "lectureId": 1,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "Which statement best distinguishes Process Identification from Process Discovery?",
    "options": [
      "A. Identification documents the as-is model of a selected process, while Discovery defines the overall process architecture at runtime in BPM terms",
      "B. Identification determines which processes exist and which to prioritize; Discovery documents how a selected process currently works",
      "C. Identification produces the executable model; Discovery produces the to-be model",
      "D. Identification is quantitative only; Discovery is qualitative only"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Process Identification defines the process architecture and prioritization, while Process Discovery produces the as-is model of a selected process.",
    "traps": {
      "A": "This reverses the outputs of the two phases.",
      "C": "Executable and to-be models belong to later lifecycle phases.",
      "D": "The distinction is about purpose and outputs, not a strict quantitative-versus-qualitative split."
    }
  },
  {
    "id": 1422,
    "lectureId": 1,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does Process Analysis differ most clearly from Process Discovery?",
    "options": [
      "A. Discovery prioritizes processes, while Analysis defines the process architecture",
      "B. Discovery creates the to-be model; Analysis executes it",
      "C. Discovery models the current process; Analysis examines that process for weaknesses and impact",
      "D. Discovery measures maturity; Analysis performs implementation"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Discovery captures how the process currently works, while Analysis diagnoses problems, root causes, and performance implications.",
    "traps": {
      "A": "Prioritization and architecture belong to Process Identification.",
      "B": "To-be modeling belongs to Redesign; execution belongs to Implementation.",
      "D": "Maturity and implementation are different concerns and lifecycle areas."
    }
  },
  {
    "id": 1423,
    "lectureId": 1,
    "type": "true-false",
    "difficulty": "Easy",
    "question": "An as-is model describes the current process, while a to-be model describes the desired future process.",
    "options": [
      "A. True",
      "B. False"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "This is the standard distinction: as-is documents current reality, while to-be captures the redesigned target state.",
    "traps": {
      "B": "This would reverse a core BPM distinction."
    }
  },
  {
    "id": 1424,
    "lectureId": 2,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "Which option correctly distinguishes core, support, and management processes?",
    "options": [
      "A. Core processes define strategy, support processes deliver customer value, and management processes mainly provide IT infrastructure",
      "B. Core and support processes are both customer-facing, while management processes are reduced to accounting within the same process",
      "C. Core, Support, and Management differ only by department names, not by role",
      "D. Core directly creates customer value; Support enables core work; Management provides direction and governance"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Core processes directly create value, support processes enable them, and management processes provide direction, rules, and control.",
    "traps": {
      "A": "This mixes up the roles of the categories.",
      "B": "Management processes are broader than accounting, and support processes are not defined by customer-facing behavior.",
      "C": "The categories differ functionally, not just by naming."
    }
  },
  {
    "id": 1425,
    "lectureId": 2,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What most clearly distinguishes a process landscape model from a detailed BPMN process model?",
    "options": [
      "A. A landscape model is restricted to IT processes, while BPMN models are restricted to service processes within the same process",
      "B. A landscape model focuses on gateway logic and BPMN symbols, whereas a detailed BPMN model intentionally avoids such notation details",
      "C. A landscape model shows high-level process areas and relationships, while a BPMN model shows detailed flow logic",
      "D. A landscape model is executable, while BPMN is descriptive only"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Landscape models are architectural and high-level; detailed BPMN models show sequence, decisions, events, and responsibilities.",
    "traps": {
      "A": "This is not a valid distinction between the modeling levels.",
      "B": "This reverses the role of BPMN detail.",
      "D": "Executability depends on implementation and tooling, not on being a landscape model."
    }
  },
  {
    "id": 1426,
    "lectureId": 2,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What most clearly distinguishes a process architecture from a prioritized process portfolio?",
    "options": [
      "A. A process architecture ranks weak or problematic processes for intervention, while a prioritized portfolio decomposes processes into subprocess levels and variants",
      "B. A process architecture shows processes and their relationships, while a prioritized process portfolio ranks candidate processes for BPM action",
      "C. A process architecture is the executable model, while a prioritized process portfolio is the as-is model",
      "D. A process architecture is only for support processes, while a prioritized process portfolio is only for core processes"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "A process architecture maps the set of business processes and their interrelations. A prioritized process portfolio ranks processes for BPM attention using criteria such as importance, health, and feasibility.",
    "traps": {
      "A": "Ranking and decomposition are different ideas: prioritization orders processes for action, while decomposition breaks a process into finer-grained subprocesses.",
      "C": "Executable and as-is models belong to later lifecycle phases, not to the distinction between architecture and portfolio.",
      "D": "Both artifacts can cover processes across categories; they are not restricted this way."
    }
  },
  {
    "id": 1427,
    "lectureId": 3,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What is the key difference between sequence flow and message flow in BPMN?",
    "options": [
      "A. Sequence flow is dashed; message flow is solid",
      "B. Sequence flow connects pools; message flow connects lanes only",
      "C. Sequence flow links only events, whereas message flow links only tasks",
      "D. Sequence flow orders work within a pool; message flow shows communication across pools"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Sequence flow controls execution order inside a pool, while message flow shows communication between different participants/pools.",
    "traps": {
      "A": "The visual styles are the opposite of what this option implies.",
      "B": "Sequence flow cannot cross pool boundaries.",
      "C": "Both flows relate to broader process semantics than just event-only or task-only usage."
    }
  },
  {
    "id": 1428,
    "lectureId": 3,
    "type": "multiple-choice",
    "difficulty": "Easy",
    "question": "Which distinction between a pool and a lane is correct?",
    "options": [
      "A. A pool represents a participant or organization; a lane subdivides that pool by role or department",
      "B. A pool is a data container, whereas a lane is a communication channel",
      "C. A pool is a subprocess; a lane is a gateway",
      "D. A pool and a lane are functionally identical in BPMN"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Pools represent participants, while lanes partition responsibility inside a participant.",
    "traps": {
      "B": "Neither term refers to data storage or message channels.",
      "C": "These are unrelated BPMN constructs.",
      "D": "They serve different modeling purposes."
    }
  },
  {
    "id": 1429,
    "lectureId": 3,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does an XOR gateway differ from an OR gateway?",
    "options": [
      "A. XOR activates all branches, while OR selects exactly one in this context",
      "B. XOR takes exactly one path; OR may take one or more paths",
      "C. XOR is event-based; OR is data-based only",
      "D. XOR merges only; OR splits only"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "XOR is exclusive, while OR is inclusive and can activate multiple branches if conditions allow.",
    "traps": {
      "A": "This describes AND and XOR incorrectly.",
      "C": "XOR is not synonymous with event-based routing.",
      "D": "Both can be used in split and join contexts."
    }
  },
  {
    "id": 1430,
    "lectureId": 3,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What distinguishes a data object from a data store in BPMN?",
    "options": [
      "A. A data object is used for temporary external information, whereas a data store is reserved for internal sequence-control data",
      "B. A data object carries message content between participants, while a data store is used to define routing and sequence behavior in the model",
      "C. A data object represents information used or produced by activities; a data store represents persistent storage",
      "D. They differ only graphically, not conceptually"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Data objects are process-level information artifacts, whereas data stores represent persistent repositories.",
    "traps": {
      "A": "Internal-versus-external is not the key distinction.",
      "B": "This is not how the constructs are differentiated.",
      "D": "Their semantics are different, not just their icons."
    }
  },
  {
    "id": 1431,
    "lectureId": 4,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does a loop activity differ from a multi-instance activity?",
    "options": [
      "A. A loop is parallel only; a multi-instance is sequential only",
      "B. A loop marker is used only for subprocesses, whereas multi-instance is used only for tasks",
      "C. There is no semantic difference between them",
      "D. A loop repeats until a condition is met; a multi-instance activity executes once per item in a collection"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Looping is condition-based repetition of the same activity, while multi-instance means repeated execution over multiple items and can be sequential or parallel.",
    "traps": {
      "A": "Multi-instance can be sequential or parallel; loop is not defined this way.",
      "B": "Both ideas can apply more broadly than this option suggests.",
      "C": "They represent different repetition semantics."
    }
  },
  {
    "id": 1432,
    "lectureId": 4,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does a boundary event differ from an event sub-process in BPMN exception handling?",
    "options": [
      "A. A boundary event is attached to a specific activity, while an event sub-process is a triggered sub-process that can react more broadly within its enclosing process or sub-process",
      "B. A boundary event can be used only for timer handling on one activity, whereas an event sub-process is reserved for message handling at process scope and cannot capture broader exception scenarios",
      "C. A boundary event always starts a new pool, while an event sub-process always ends the current pool",
      "D. A boundary event is used for data stores, while an event sub-process is used for lanes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "A boundary event is tied to one host activity. An event sub-process is a triggered sub-process mechanism that can handle events at a broader scope within the enclosing process context.",
    "traps": {
      "B": "Both constructs can be used with multiple event types; they are not restricted this way.",
      "C": "Neither construct starts or ends pools in this sense.",
      "D": "These BPMN elements are not defined by data-store or lane usage."
    }
  },
  {
    "id": 1433,
    "lectureId": 4,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What distinguishes an ad-hoc sub-process from a structured sub-process?",
    "options": [
      "A. An ad-hoc sub-process is always automated, while a structured sub-process is always manual",
      "B. An ad-hoc sub-process can only contain one activity, while a structured sub-process must contain many",
      "C. An ad-hoc sub-process allows activities to be performed without one fixed control-flow order, while a structured sub-process has explicit control-flow logic",
      "D. An ad-hoc sub-process belongs to mining tools, while a structured sub-process belongs to BPMN modeling"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Ad-hoc sub-processes allow flexible ordering of contained activities. Structured sub-processes have defined control flow among the internal steps.",
    "traps": {
      "A": "Automation is not the defining distinction here.",
      "B": "The distinction is about ordering semantics, not the number of contained activities.",
      "D": "Both are BPMN modeling concepts; process mining is not the differentiator."
    }
  },
  {
    "id": 1434,
    "lectureId": 4,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does a signal event differ from a message event in BPMN?",
    "options": [
      "A. A signal event is internal only, while a message event can cross pools",
      "B. A signal event is broadcast to any listening recipients, while a message event targets a specific sender-receiver communication",
      "C. A signal event can only start a process, while a message event can only end one",
      "D. A signal event is a kind of gateway, while a message event is a kind of task"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Signal events are broadcast-style notifications, whereas message events represent directed communication between participants.",
    "traps": {
      "A": "Signals are not simply \"internal only\" constructs.",
      "C": "Both signals and messages can appear in multiple BPMN event positions depending on context.",
      "D": "Neither is classified this way."
    }
  },
  {
    "id": 1435,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "Which distinction between evidence-based discovery and interview-based discovery is correct?",
    "options": [
      "A. Evidence-based always captures reality better than any interview",
      "B. Interview-based discovery requires no analyst interpretation because stakeholders already provide a complete and objective representation of the process",
      "C. Evidence-based is for to-be modeling; interview-based is for implementation",
      "D. Evidence-based is more objective but may miss informal workarounds; interview-based reveals richer tacit knowledge but can be subjective"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "This is the classic trade-off between documented evidence and human insight in discovery.",
    "traps": {
      "A": "Formal evidence can miss shadow practices and local workarounds.",
      "B": "Both methods still require analyst interpretation.",
      "C": "Both are discovery methods, not lifecycle outputs for redesign or implementation."
    }
  },
  {
    "id": 1436,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does workshop-based discovery differ most from interview-based discovery?",
    "options": [
      "A. Workshops can resolve conflicting views more quickly by bringing stakeholders together, while interviews usually gather fragmented views separately",
      "B. Workshops are objective and always eliminate conflicting interpretations, whereas interviews are inherently unreliable and therefore should not be used for process discovery",
      "C. Workshops replace the need for a process modeler",
      "D. Interviews are only for simple processes; workshops are only for complex processes"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Workshops allow shared discussion and faster reconciliation of inconsistent perspectives; interviews capture detail but usually require later consolidation.",
    "traps": {
      "B": "Both approaches can be valid if executed well.",
      "C": "A facilitator/modeler role remains important in workshops.",
      "D": "The methods are not restricted in this way."
    }
  },
  {
    "id": 1437,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What is the difference between syntactic quality and semantic quality of a process model?",
    "options": [
      "A. Syntactic quality checks whether a model is useful to stakeholders, whereas semantic quality checks whether BPMN symbols were used correctly",
      "B. Syntactic quality checks notation-rule compliance; semantic quality checks whether the model reflects reality correctly",
      "C. Syntactic quality concerns stakeholder agreement, whereas semantic quality concerns layout readability and visual neatness",
      "D. They are synonyms used by different textbooks"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Syntactic quality is about following notation rules, while semantic quality is about factual correctness relative to the real process.",
    "traps": {
      "A": "This swaps syntactic and pragmatic/semantic concerns.",
      "C": "Stakeholder agreement and aesthetics are different concerns.",
      "D": "They are distinct model-quality dimensions."
    }
  },
  {
    "id": 1438,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does semantic quality differ from pragmatic quality?",
    "options": [
      "A. Semantic quality is about syntax; pragmatic quality is about execution logs",
      "B. Semantic quality is measured by confidence intervals; pragmatic quality by throughput",
      "C. Semantic quality concerns factual correctness; pragmatic quality concerns understandability and usefulness for the audience",
      "D. Semantic quality matters only to analysts, while pragmatic quality matters only to software users in this context during execution"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Semantic quality asks whether the model says the right thing; pragmatic quality asks whether stakeholders can understand and use it.",
    "traps": {
      "A": "This confuses semantic and syntactic concerns.",
      "B": "These are not the relevant quality measures here.",
      "D": "Both dimensions matter to human users and model consumers."
    }
  },
  {
    "id": 1439,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What is the key difference between a deadlock and a livelock in process models?",
    "options": [
      "A. Deadlock gets stuck and cannot proceed; livelock keeps moving but never completes",
      "B. Deadlock is a syntax error, whereas livelock is a rule error",
      "C. Deadlock happens only with XOR; livelock happens only with AND",
      "D. There is no practical difference because both mean 'the process is wrong'"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Deadlock means the process cannot continue; livelock means it continues looping without reaching completion.",
    "traps": {
      "B": "Both are behavioral issues, not restricted this way.",
      "C": "Neither issue is limited to one gateway type.",
      "D": "They are distinct failure patterns with different runtime symptoms."
    }
  },
  {
    "id": 1440,
    "lectureId": 5,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does a process analyst differ from a domain expert during discovery?",
    "options": [
      "A. The analyst owns the process; the domain expert audits BPMN syntax",
      "B. The analyst executes the work daily; the domain expert only approves budgets",
      "C. They should produce separate final models because their views cannot be integrated during execution in the modeled process across the workflow",
      "D. The analyst abstracts and structures process logic; the domain expert contributes operational knowledge from real execution"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "The analyst organizes and models; the domain expert contributes lived process knowledge.",
    "traps": {
      "A": "Process ownership and syntax auditing are different roles.",
      "B": "This reverses the practical roles.",
      "C": "Discovery aims to reconcile perspectives into a coherent model, not preserve isolated views."
    }
  },
  {
    "id": 1441,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does external quality differ from internal quality in process performance measurement?",
    "options": [
      "A. External quality is always about cost, while internal quality is always about time",
      "B. External quality is measured only with BPMN, while internal quality is measured only with DMN",
      "C. External quality reflects customer-facing outcomes such as satisfaction, while internal quality concerns process control and variation from the participant viewpoint",
      "D. External quality is evaluated only before redesign decisions, whereas internal quality becomes relevant only after implementation and has no role in diagnosing current performance"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "External quality concerns what customers experience and perceive. Internal quality concerns how well the process behaves from inside the organization, including control and variation.",
    "traps": {
      "A": "Cost and time are separate dimensions and do not define this difference.",
      "B": "BPMN and DMN are modeling standards, not the basis of this distinction.",
      "D": "Both kinds of quality can matter throughout the BPM lifecycle."
    }
  },
  {
    "id": 1442,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does Move waste differ from Hold waste?",
    "options": [
      "A. Move is rework performed on a case, whereas Hold is over-processing added to the same case",
      "B. Move is unnecessary transport or handoff; Hold is waiting or idle delay",
      "C. Move is customer value creation, whereas Hold is business value creation inside the process",
      "D. Move affects people only, whereas Hold affects systems only within the same process"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Move is needless movement or transfer, while Hold is time spent waiting or sitting idle in a queue.",
    "traps": {
      "A": "These are different waste concepts.",
      "C": "Neither Move nor Hold is a value category.",
      "D": "Both can affect people, data, and broader process flow."
    }
  },
  {
    "id": 1443,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What distinguishes Overdo waste from Hold waste?",
    "options": [
      "A. Overdo is transporting documents, whereas Hold is transporting materials between stations",
      "B. Overdo is legal compliance work, while Hold is customer delay in normal operation",
      "C. Overdo and Hold are two labels for the same delay-related waste",
      "D. Overdo is doing more work than needed; Hold is time lost waiting"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Overdo covers over-processing, duplication, or rework, whereas Hold concerns idle waiting and queue time.",
    "traps": {
      "A": "This does not capture the actual waste categories.",
      "B": "These are not the defining distinctions.",
      "C": "They are clearly separate waste categories."
    }
  },
  {
    "id": 1444,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does Pareto Analysis differ from a PICK chart?",
    "options": [
      "A. Pareto prioritizes causes by contribution to impact; PICK classifies ideas by payoff versus implementation effort",
      "B. Pareto identifies syntax errors, whereas PICK identifies semantic errors",
      "C. Pareto is quantitative only; PICK is qualitative only and ignores impact",
      "D. Pareto and PICK are both root-cause diagrams with different names"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Pareto highlights the vital few causes driving most impact, while PICK maps improvement options by expected payoff and ease/difficulty.",
    "traps": {
      "B": "Neither technique is for BPMN syntax checking.",
      "C": "PICK explicitly considers impact/payoff.",
      "D": "Neither is a fishbone-style root-cause diagram."
    }
  },
  {
    "id": 1445,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What is the difference between a cause-effect diagram and a Why-Why diagram?",
    "options": [
      "A. Cause-effect is for quantitative formulas; Why-Why is for BPMN control flow",
      "B. Cause-effect organizes possible causes into categories such as the 6 M's; Why-Why drills down through repeated 'Why?' questions",
      "C. A cause-effect diagram always isolates one root cause, whereas Why-Why always produces several separate root causes rather than a causal chain",
      "D. There is no difference because both are identical fishbone diagrams"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Fishbone diagrams categorize causes, while Why-Why creates a causal chain by repeated probing.",
    "traps": {
      "A": "Neither technique is defined by those uses.",
      "C": "Either technique can reveal multiple or deeper causes depending on use.",
      "D": "They are related root-cause tools but not identical."
    }
  },
  {
    "id": 1446,
    "lectureId": 6,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does stakeholder analysis differ from an issue register?",
    "options": [
      "A. Stakeholder analysis ranks BPMN gateways; an issue register stores event logs",
      "B. Stakeholder analysis replaces root-cause analysis by itself, while an issue register can substitute for discovery because it already contains enough information to model the process",
      "C. Stakeholder analysis identifies affected parties and concerns; an issue register documents specific process problems, impacts, and possible actions",
      "D. They are both simply two views of the same table"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Stakeholder analysis focuses on who is affected and what they care about; the issue register captures the actual issues and their consequences.",
    "traps": {
      "A": "Neither tool is defined this way.",
      "B": "They support analysis but do not replace those lifecycle activities.",
      "D": "They serve different analytical purposes."
    }
  },
  {
    "id": 1447,
    "lectureId": 7,
    "type": "multiple-choice",
    "difficulty": "Easy",
    "question": "What is the key difference between Processing Time and Waiting Time?",
    "options": [
      "A. Processing Time includes all delays; Waiting Time includes only customer time",
      "B. Processing Time is measured in cases; Waiting Time is measured in dollars",
      "C. There is no distinction in quantitative analysis because both are logged under the same time measure",
      "D. Processing Time is active work time; Waiting Time is idle or queue time"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Processing Time is the time spent actually handling work, while Waiting Time is time spent idle between activities or awaiting resources/input.",
    "traps": {
      "A": "This misdefines both measures.",
      "B": "Both are time measures.",
      "C": "The distinction is fundamental in flow analysis."
    }
  },
  {
    "id": 1448,
    "lectureId": 7,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does an AND-block differ in cycle-time calculation versus cost calculation?",
    "options": [
      "A. Time follows the slowest branch; cost sums all active branches",
      "B. Time sums all branches, while cost uses only the cheapest branch that could occur",
      "C. Time uses weighted averages, while cost ignores branch probabilities entirely",
      "D. Time and cost are both always computed by taking the maximum branch value"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "For parallel execution, the process waits for the longest branch in time, but incurs the costs of all branches that execute.",
    "traps": {
      "B": "This confuses parallel logic with sequential or selective logic.",
      "C": "Weighted averages belong to XOR analysis.",
      "D": "Only time uses the max rule for AND-blocks."
    }
  },
  {
    "id": 1449,
    "lectureId": 7,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does an XOR-block differ from a sequential block in cycle-time calculation?",
    "options": [
      "A. XOR follows the maximum branch time, whereas a sequential block follows the minimum",
      "B. XOR sums all branch times because all branches are possible",
      "C. XOR uses a probability-weighted expectation; sequential sums the times of all consecutive steps",
      "D. There is no difference if probabilities are known"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Sequential flow sums all executed steps, while XOR represents alternative paths and therefore uses expected value logic based on probabilities.",
    "traps": {
      "A": "Maximum-branch logic belongs to AND-block time.",
      "B": "In XOR, only one branch is taken per case.",
      "D": "Knowing probabilities does not erase the structural difference."
    }
  },
  {
    "id": 1450,
    "lectureId": 7,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "In Little's Law L = lambda W, how does L differ from W?",
    "options": [
      "A. L is the arrival rate; W is the queue length",
      "B. L is the average number of items in the system; W is the average time in the system",
      "C. L is service capacity, while W is the rework probability observed in the process",
      "D. L and W are interchangeable whenever the arrival rate stays stable over time"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "Little's Law distinguishes stock (items in system) from time (average duration in system).",
    "traps": {
      "A": "Arrival rate is lambda, not L.",
      "C": "Neither variable means this.",
      "D": "They are related but not interchangeable."
    }
  },
  {
    "id": 1451,
    "lectureId": 8,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "What most clearly distinguishes incremental improvement from BPR?",
    "options": [
      "A. Incremental improvement mainly changes manual work practices, whereas BPR mainly introduces automation platforms and digital tools",
      "B. Incremental improvement focuses only on quality, whereas BPR focuses only on cost and speed improvements across the organization",
      "C. They are the same approach with different names",
      "D. Incremental improvement makes gradual changes to the existing process; BPR calls for radical rethinking and redesign"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Incremental improvement is evolutionary and lower risk, while BPR is radical and transformative.",
    "traps": {
      "A": "Automation is not the defining distinction.",
      "B": "Both approaches still consider performance dimensions.",
      "C": "The two approaches are intentionally contrasted in the lecture."
    }
  },
  {
    "id": 1452,
    "lectureId": 8,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does a transactional redesign approach differ from a transformational redesign approach?",
    "options": [
      "A. Transactional uses smaller heuristic-based changes with lower risk; transformational involves more radical redesign with higher risk",
      "B. Transactional redesign is mathematical optimization, while transformational redesign is process mining",
      "C. Transactional is always strategic; transformational is always operational",
      "D. There is no meaningful distinction once a process is automated"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "The Redesign Orbit places transactional methods at the lower-risk end and transformational methods at the radical, higher-risk end.",
    "traps": {
      "B": "Data-driven optimization better describes analytical methods, not transactional versus transformational.",
      "C": "This is not the distinction used in the course.",
      "D": "Automation does not erase redesign-method differences."
    }
  },
  {
    "id": 1453,
    "lectureId": 8,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What distinguishes the Devil's Quadrangle from the Balanced Scorecard?",
    "options": [
      "A. Devil's Quadrangle is for process mining; Balanced Scorecard is for BPMN syntax",
      "B. Devil's Quadrangle emphasizes redesign trade-offs among time, cost, quality, and flexibility; Balanced Scorecard is a broader performance framework with four organizational perspectives",
      "C. Devil's Quadrangle leaves process performance outside the analysis, whereas the Balanced Scorecard reduces performance measurement to time indicators and excludes the other perspectives",
      "D. They are two names for the same framework"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "The Devil's Quadrangle is a redesign trade-off lens, while Balanced Scorecard is a broader measurement framework spanning multiple organizational perspectives.",
    "traps": {
      "A": "Neither framework is defined by those uses.",
      "C": "Both frameworks are performance-related, though at different conceptual levels.",
      "D": "They are clearly distinct frameworks."
    }
  },
  {
    "id": 1454,
    "lectureId": 9,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does task elimination differ from task composition?",
    "options": [
      "A. Task elimination means automating a task, whereas task composition means outsourcing it to another party in the process network",
      "B. Task elimination applies only to exception cases, whereas task composition applies only to the standard case path",
      "C. Task elimination removes non-value-adding steps; task composition combines smaller tasks to reduce handoffs",
      "D. They both mean deleting subprocesses from BPMN"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "Task elimination removes unnecessary work, while task composition merges fragmented work into larger chunks.",
    "traps": {
      "A": "Automation and outsourcing are different redesign choices.",
      "B": "This is not how the heuristics are defined.",
      "D": "The heuristics concern process design, not merely deleting diagram fragments."
    }
  },
  {
    "id": 1455,
    "lectureId": 9,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What is the key difference between triage and exception handling as redesign heuristics?",
    "options": [
      "A. Triage creates differentiated paths for case categories; exception handling keeps a normal path clean and routes unusual cases separately",
      "B. Triage belongs to pools, while exception handling belongs to lanes",
      "C. Triage and exception handling both simply add more approvals",
      "D. Triage is about notifications; exception handling is about polling"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "Triage classifies cases into different treatment paths, while exception handling separates non-routine cases from the default normal flow.",
    "traps": {
      "B": "These heuristics are not defined by BPMN pool/lane usage.",
      "C": "Adding approvals is not the core of either heuristic.",
      "D": "Notification versus polling belongs to buffering."
    }
  },
  {
    "id": 1456,
    "lectureId": 9,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "How does empower differ from task automation as a redesign move?",
    "options": [
      "A. Empower removes all managers, while task automation removes all users",
      "B. Empower concerns how event logs are captured, whereas task automation concerns how the process architecture is documented",
      "C. Empower and task automation are just two labels for the same redesign tactic in implementation projects",
      "D. Empower gives people more decision authority, while task automation shifts routine execution to systems"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "Empower changes decision rights and reduces unnecessary escalation. Task automation changes who or what executes work by moving routine tasks to systems.",
    "traps": {
      "A": "Neither redesign move means literally removing all managers or all users.",
      "B": "These are not the levels at which the two concepts are defined.",
      "C": "They are clearly different redesign moves."
    }
  },
  {
    "id": 1457,
    "lectureId": 10,
    "type": "multiple-choice",
    "difficulty": "Medium",
    "question": "Which statement correctly distinguishes Service Task, User Task, and Manual Task?",
    "options": [
      "A. A Service Task sits outside the BPMS, a User Task is completed automatically by the engine, and a Manual Task is triggered by events in the workflow",
      "B. Service Tasks and User Tasks are both manual activities, but only User Tasks appear explicitly in BPMN models used for execution",
      "C. Service Task is automated by a system; User Task requires human input through the BPMS; Manual Task is human work outside BPMS scope",
      "D. Manual Task is always executed by the engine with no human interaction"
    ],
    "correctAnswers": [
      2
    ],
    "explanation": "This is the core distinction among the three task types in implementation-oriented BPMN usage.",
    "traps": {
      "A": "This reverses and distorts the task-type definitions.",
      "B": "Service Tasks are automated, not manual.",
      "D": "Manual Tasks are explicitly outside engine execution scope."
    }
  },
  {
    "id": 1458,
    "lectureId": 10,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How does RPA differ from DMN in process implementation?",
    "options": [
      "A. RPA is a process modeling notation, while DMN is a queueing formula",
      "B. RPA automates routine interface-level actions by mimicking user behavior, while DMN externalizes and structures decision logic in rules or tables",
      "C. RPA is limited to customer-facing journeys, whereas DMN is limited to employee training scenarios and is not meant to encode operational decision logic in running processes",
      "D. RPA and DMN are two names for the same automation engine"
    ],
    "correctAnswers": [
      1
    ],
    "explanation": "RPA automates repetitive UI-based tasks. DMN structures decision logic separately from process flow so rules can be managed explicitly.",
    "traps": {
      "A": "Neither description is correct.",
      "C": "These are not the domains that define the two concepts.",
      "D": "They are different technologies and standards."
    }
  },
  {
    "id": 1459,
    "lectureId": 10,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "What is the most accurate difference between an Execution Engine and a Worklist Handler in a BPMS?",
    "options": [
      "A. The Execution Engine stores only KPIs, while the Worklist Handler executes service tasks",
      "B. The Execution Engine mainly supports design-time modeling, while the Worklist Handler represents the architectural view used by analysts",
      "C. The Execution Engine and the Worklist Handler are simply two labels for the same BPMS runtime module, so one component both routes cases and serves as the human task inbox",
      "D. The Execution Engine runs process flow and routing logic, while the Worklist Handler presents pending human tasks to users"
    ],
    "correctAnswers": [
      3
    ],
    "explanation": "The execution engine orchestrates runtime behavior. The worklist handler is the human-task presentation and inbox layer.",
    "traps": {
      "A": "This confuses monitoring, automation, and work presentation roles.",
      "B": "Modeling and architecture are different concerns from the execution-versus-worklist distinction.",
      "C": "These BPMS components serve different purposes."
    }
  },
  {
    "id": 1460,
    "lectureId": 11,
    "type": "multiple-choice",
    "difficulty": "Hard",
    "question": "How do Process Discovery, Conformance Checking, and Process Enhancement differ in process mining?",
    "options": [
      "A. Discovery derives a model from logs; Conformance Checking compares actual behavior with an intended model; Enhancement enriches an existing model with log-based information",
      "B. Discovery is for maturity assessment, Conformance Checking is for drawing BPMN models from scratch, and Enhancement is limited to dashboard reporting rather than enriching an existing model with log data",
      "C. Discovery and Enhancement are identical; only Conformance Checking is different",
      "D. Discovery uses documents, Conformance Checking uses interviews, Enhancement uses workshops"
    ],
    "correctAnswers": [
      0
    ],
    "explanation": "These are the three canonical process mining types and each serves a different analytical purpose.",
    "traps": {
      "B": "These are not the correct meanings of the three mining types.",
      "C": "Discovery and Enhancement are distinct and should not be collapsed.",
      "D": "Those are discovery methods from BPM, not the mining taxonomy."
    }
  }
];

  window._BPS301_DATA.push({ quiz });
})();
