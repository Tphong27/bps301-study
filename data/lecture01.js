// Lecture 1: Introduction to BPM
(function() {
  const study = {
    id: 1,
    title: "Introduction to BPM",
    titleVi: "Giới thiệu về Quản lý Quy trình Kinh doanh",
    sections: [
      {
        heading: "What is a Business Process?",
        headingVi: "Quy trình kinh doanh là gì?",
        content: "<p>A business process is <strong>a chain of events, activities, and decisions</strong> involving several actors and objects, triggered by a need and leading to an outcome that is of value to a customer.</p><ul><li><strong>Events</strong> — things that happen (e.g., order received, payment made)</li><li><strong>Activities</strong> — work items performed by actors (e.g., check order, ship products)</li><li><strong>Decisions</strong> — branching points where a choice is made</li><li><strong>Actors</strong> — people or systems performing activities</li><li><strong>Objects</strong> — physical or informational entities manipulated (e.g., invoices, products)</li></ul><p>A process crosses functional boundaries within an organization (Sales → Manufacturing → Finance) and produces <strong>positive outcomes</strong> (value-adding) or <strong>negative outcomes</strong> (value-reducing).</p>",
        contentVi: "<p>Quy trình kinh doanh là <strong>một chuỗi các sự kiện, hoạt động và quyết định</strong> liên quan đến nhiều tác nhân và đối tượng, được kích hoạt bởi một nhu cầu và dẫn đến kết quả có giá trị cho khách hàng.</p><ul><li><strong>Sự kiện</strong> — những thứ xảy ra (VD: nhận đơn hàng, thanh toán)</li><li><strong>Hoạt động</strong> — công việc do các tác nhân thực hiện</li><li><strong>Quyết định</strong> — điểm rẽ nhánh nơi phải đưa ra lựa chọn</li><li><strong>Tác nhân</strong> — người hoặc hệ thống thực hiện hoạt động</li><li><strong>Đối tượng</strong> — thực thể vật lý/thông tin được xử lý</li></ul><p>Quy trình vượt qua ranh giới chức năng trong tổ chức và tạo ra kết quả tích cực (tạo giá trị) hoặc tiêu cực (giảm giá trị).</p>",
        keyTerms: [
          { term: "Business Process", termVi: "Quy trình kinh doanh", definition: "A chain of events, activities and decisions involving actors and objects, triggered by a need, leading to a valuable outcome for a customer.", definitionVi: "Chuỗi sự kiện, hoạt động và quyết định liên quan đến tác nhân và đối tượng, được kích hoạt bởi nhu cầu, dẫn đến kết quả có giá trị cho khách hàng." },
          { term: "Order-to-Cash (O2C)", termVi: "Đặt hàng đến Thu tiền", definition: "End-to-end process from receiving a customer order to collecting payment.", definitionVi: "Quy trình từ khi nhận đơn hàng đến khi thu tiền." },
          { term: "Procure-to-Pay (P2P)", termVi: "Mua sắm đến Thanh toán", definition: "Process from purchasing goods/services to making payment to suppliers.", definitionVi: "Quy trình từ mua hàng/dịch vụ đến thanh toán cho nhà cung cấp." },
          { term: "Issue-to-Resolution", termVi: "Vấn đề đến Giải quyết", definition: "Process of handling customer complaints or issues from report to resolution.", definitionVi: "Quy trình xử lý khiếu nại từ báo cáo đến giải quyết." }
        ]
      },
      {
        heading: "Process Performance",
        headingVi: "Hiệu suất Quy trình",
        content: "<p>Three fundamental dimensions of process performance:</p><ul><li><strong>Time</strong> — How fast? (cycle time, throughput time)</li><li><strong>Cost</strong> — How cheap? (resource cost, overhead)</li><li><strong>Quality</strong> — How good? (error rate, customer satisfaction)</li></ul><p>If choosing between two services, customers choose the one that is <strong>Faster, Cheaper, and Better</strong>. Process improvement aims to optimize these three dimensions, though improving one may affect others (trade-offs).</p>",
        contentVi: "<p>Ba chiều cơ bản của hiệu suất quy trình:</p><ul><li><strong>Thời gian</strong> — Nhanh bao nhiêu? (thời gian chu kỳ)</li><li><strong>Chi phí</strong> — Rẻ bao nhiêu? (chi phí nguồn lực)</li><li><strong>Chất lượng</strong> — Tốt bao nhiêu? (tỷ lệ lỗi, sự hài lòng)</li></ul><p>Khi chọn giữa hai dịch vụ, khách hàng chọn dịch vụ <strong>Nhanh hơn, Rẻ hơn và Tốt hơn</strong>. Cải thiện quy trình nhắm tối ưu ba chiều này, nhưng cải thiện một chiều có thể ảnh hưởng đến các chiều khác.</p>",
        keyTerms: [
          { term: "Cycle Time", termVi: "Thời gian chu kỳ", definition: "Total time from the start to the end of a process instance.", definitionVi: "Tổng thời gian từ đầu đến cuối một phiên bản quy trình." },
          { term: "Process Performance Dimensions", termVi: "Các chiều hiệu suất quy trình", definition: "Time, Cost, and Quality — the three core measures of process performance.", definitionVi: "Thời gian, Chi phí và Chất lượng — ba thước đo cốt lõi." }
        ]
      },
      {
        heading: "What is Business Process Management (BPM)?",
        headingVi: "Quản lý Quy trình Kinh doanh (BPM) là gì?",
        content: "<p><strong>BPM</strong> is the body of principles, methods, and tools to <strong>design, analyze, execute, and monitor</strong> business processes with the aim of improving their performance.</p><p>BPM involves multiple stakeholders: employees, IT systems, data, customers, suppliers, and trading partners. It is NOT just about technology — it is a holistic approach that combines management practices with information technology.</p>",
        contentVi: "<p><strong>BPM</strong> là tập hợp các nguyên tắc, phương pháp và công cụ để <strong>thiết kế, phân tích, thực thi và giám sát</strong> quy trình kinh doanh nhằm cải thiện hiệu suất.</p><p>BPM liên quan đến nhiều bên: nhân viên, hệ thống CNTT, dữ liệu, khách hàng, nhà cung cấp. BPM KHÔNG chỉ về công nghệ — mà là cách tiếp cận toàn diện kết hợp quản lý với CNTT.</p>",
        keyTerms: [
          { term: "BPM", termVi: "Quản lý Quy trình Kinh doanh", definition: "Body of principles, methods and tools to design, analyze, execute and monitor business processes to improve performance.", definitionVi: "Tập hợp nguyên tắc, phương pháp và công cụ để thiết kế, phân tích, thực thi và giám sát quy trình kinh doanh." }
        ]
      },
      {
        heading: "The BPM Lifecycle",
        headingVi: "Vòng đời BPM",
        content: "<p>The BPM lifecycle consists of six phases that form a continuous cycle:</p><ol><li><strong>Process Identification</strong> — Enumerate processes, define scope, create process architecture, prioritize (Importance, Health, Feasibility)</li><li><strong>Process Discovery (As-Is)</strong> — Document the current process as it is actually performed → produces an <strong>as-is process model</strong></li><li><strong>Process Analysis</strong> — Identify weaknesses, issues, and their impact using qualitative and quantitative techniques</li><li><strong>Process Redesign</strong> — Design improvements → produces a <strong>to-be process model</strong></li><li><strong>Process Implementation</strong> — Put changes into action (organizational change + IT automation) → produces an <strong>executable process model</strong></li><li><strong>Process Monitoring & Controlling</strong> — Track performance, check conformance → produces <strong>conformance and performance insights</strong>, feeding back into the cycle</li></ol>",
        contentVi: "<p>Vòng đời BPM gồm 6 giai đoạn tạo thành chu kỳ liên tục:</p><ol><li><strong>Nhận dạng Quy trình</strong> — Liệt kê, xác định phạm vi, kiến trúc quy trình, ưu tiên</li><li><strong>Khám phá Quy trình (As-Is)</strong> — Tài liệu hóa quy trình hiện tại → mô hình as-is</li><li><strong>Phân tích Quy trình</strong> — Xác định điểm yếu và tác động</li><li><strong>Tái thiết kế Quy trình</strong> — Thiết kế cải tiến → mô hình to-be</li><li><strong>Triển khai Quy trình</strong> — Thực hiện thay đổi → mô hình thực thi</li><li><strong>Giám sát & Kiểm soát</strong> — Theo dõi hiệu suất, kiểm tra tuân thủ</li></ol>",
        keyTerms: [
          { term: "As-Is Model", termVi: "Mô hình hiện trạng", definition: "A model that documents the current state of a process as it is actually performed.", definitionVi: "Mô hình tài liệu hóa trạng thái hiện tại của quy trình." },
          { term: "To-Be Model", termVi: "Mô hình tương lai", definition: "A model that describes the desired future state of a redesigned process.", definitionVi: "Mô hình mô tả trạng thái mong muốn của quy trình sau tái thiết kế." },
          { term: "Process Architecture", termVi: "Kiến trúc quy trình", definition: "High-level overview of all processes in an organization and their relationships.", definitionVi: "Tổng quan cấp cao về tất cả quy trình trong tổ chức và mối quan hệ giữa chúng." },
          { term: "Process Identification", termVi: "Nhận dạng quy trình", definition: "Phase of enumerating, scoping and prioritizing processes for BPM initiatives.", definitionVi: "Giai đoạn liệt kê, xác định phạm vi và ưu tiên quy trình." }
        ]
      },
      {
        heading: "Rummler's Framework & Process Improvement",
        headingVi: "Khung Rummler & Cải tiến Quy trình",
        content: "<p><strong>Rummler's Framework</strong> views an organization at three levels:</p><ul><li><strong>Organization Level</strong> — Overall strategy, structure, assets & resources</li><li><strong>Process Level</strong> — Cross-functional business processes</li><li><strong>Activity/Job Level</strong> — Individual tasks, jobs, and performer activities</li></ul><p>Organizations operate within a <strong>Business Environment</strong> (Economy, Culture, Regulatory), possess <strong>Assets & Resources</strong> (Human, Financial, Technology, Materials), and deliver <strong>Value</strong> to Customers, Stakeholders, and against Competitors.</p><p>Improving process performance can involve strategies such as: re-sequencing activities, eliminating non-value-adding steps, outsourcing to customer, standardization, automation, or investing in infrastructure.</p>",
        contentVi: "<p><strong>Khung Rummler</strong> nhìn tổ chức ở ba cấp độ:</p><ul><li><strong>Cấp tổ chức</strong> — Chiến lược, cấu trúc, tài sản & nguồn lực</li><li><strong>Cấp quy trình</strong> — Quy trình liên phòng ban</li><li><strong>Cấp hoạt động</strong> — Nhiệm vụ cá nhân</li></ul><p>Cải thiện hiệu suất quy trình có thể bao gồm: sắp xếp lại hoạt động, loại bỏ bước không tạo giá trị, thuê ngoài cho khách hàng, chuẩn hóa, tự động hóa.</p>",
        keyTerms: [
          { term: "Rummler's Framework", termVi: "Khung Rummler", definition: "A framework that views organizational performance at three levels: Organization, Process, and Activity/Job.", definitionVi: "Khung nhìn hiệu suất tổ chức ở 3 cấp: Tổ chức, Quy trình và Hoạt động." }
        ]
      }
    ]
  };

  const quiz = [
    {
      id: 101, lectureId: 1, type: "multiple-choice", difficulty: "Easy",
      question: "Which of the following is NOT one of the three dimensions of process performance?",
      options: ["A. Time", "B. Cost", "C. Flexibility", "D. Quality"],
      correctAnswers: [2],
      explanation: "The three dimensions of process performance are Time, Cost, and Quality. Flexibility is sometimes considered a fourth dimension but is not one of the core three taught in the BPM lifecycle fundamentals.",
      traps: { "A": "Time IS a core dimension — measures how fast a process executes.", "B": "Cost IS a core dimension — measures resources consumed.", "D": "Quality IS a core dimension — measures error rates and satisfaction." }
    },
    {
      id: 102, lectureId: 1, type: "multiple-choice", difficulty: "Medium",
      question: "In the BPM lifecycle, which phase produces an 'as-is process model'?",
      options: ["A. Process Identification", "B. Process Discovery", "C. Process Analysis", "D. Process Redesign"],
      correctAnswers: [1],
      explanation: "Process Discovery is the phase where the current process is documented as it is actually performed, producing the as-is process model. This is distinct from Process Identification (which creates a process architecture) and Process Analysis (which examines the as-is model for weaknesses).",
      traps: { "A": "Process Identification produces a process architecture and prioritized portfolio, not an as-is model.", "C": "Process Analysis uses the as-is model as input but does not produce it — it outputs insights on weaknesses.", "D": "Process Redesign produces a to-be model, not an as-is model." }
    },
    {
      id: 103, lectureId: 1, type: "true-false", difficulty: "Easy",
      question: "BPM is solely a technology-driven discipline focused on IT automation.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation: "BPM is NOT solely technology-driven. It is a holistic approach combining management practices (organizational change, governance, people) with information technology. BPM involves principles, methods and tools across both business and IT domains.",
      traps: { "A": "This is a common misconception — BPM combines management practices with technology, not just IT automation alone." }
    },
    {
      id: 104, lectureId: 1, type: "multiple-choice", difficulty: "Hard",
      question: "According to the BPM lifecycle, which output feeds directly into the Process Implementation phase?",
      options: ["A. As-is process model", "B. Conformance and performance insights", "C. To-be process model", "D. Process architecture"],
      correctAnswers: [2],
      explanation: "Process Redesign produces a to-be process model, which is the direct input to Process Implementation. The implementation phase then converts this into an executable process model through organizational change and IT automation.",
      traps: { "A": "The as-is model is the output of Process Discovery, feeding into Process Analysis — not Implementation.", "B": "Conformance/performance insights come from Process Monitoring, feeding back to Process Identification or Discovery.", "D": "Process architecture is an output of Process Identification, used for prioritization — not directly for implementation." }
    },
    {
      id: 105, lectureId: 1, type: "multiple-choice", difficulty: "Medium",
      question: "Which is a correct example pairing of a business process name and its type?",
      options: ["A. Order-to-Cash: an internal support process", "B. Issue-to-Resolution: begins with a customer issue and ends when the issue is resolved", "C. Procure-to-Pay: begins with receiving payment and ends with procurement", "D. Application-to-Approval: begins with approval and ends with an application"],
      correctAnswers: [1],
      explanation: "Issue-to-Resolution correctly describes a process that starts when a customer reports an issue (e.g., broken washing machine) and ends when the issue is resolved. The naming convention 'X-to-Y' means the process starts from X and goes to Y.",
      traps: { "A": "Order-to-Cash is a core/operational process, not an internal support process — it directly serves customers.", "C": "Procure-to-Pay starts with procurement (purchasing) and ends with payment, not the reverse.", "D": "Application-to-Approval starts with an application and ends with approval, not the reverse." }
    },
    {
      id: 106, lectureId: 1, type: "multiple-choice", difficulty: "Hard",
      question: "In the Process Identification phase, processes are prioritized based on three criteria. Which combination is correct?",
      options: ["A. Urgency, Complexity, Budget", "B. Importance, Health, Feasibility", "C. Value, Risk, Duration", "D. Impact, Maturity, Resources"],
      correctAnswers: [1],
      explanation: "Process Identification uses a two-step approach: (1) Designation — enumerate and scope processes, and (2) Prioritization — rank processes by Importance (strategic impact), Health/Dysfunction (how troubled), and Feasibility (likelihood of successful management).",
      traps: { "A": "Urgency, Complexity, Budget are project management concerns, not BPM lifecycle prioritization criteria.", "C": "Value, Risk, Duration are generic assessment metrics not specific to BPM's prioritization framework.", "D": "Impact overlaps with Importance but Maturity and Resources are not the correct BPM terms here." }
    },
    {
      id: 107, lectureId: 1, type: "true-false", difficulty: "Medium",
      question: "A business process always begins and ends within a single functional department.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation: "A business process typically crosses functional boundaries. For example, an Order-to-Cash process involves Sales, Manufacturing, and Finance departments. The cross-functional nature of processes is precisely why BPM is needed — to manage handoffs between departments.",
      traps: { "A": "This describes a functional silo view, not process thinking. Processes span across departments/functions." }
    },
    {
      id: 108, lectureId: 1, type: "multiple-choice", difficulty: "Easy",
      question: "What does BPM stand for?",
      options: ["A. Business Performance Metrics", "B. Business Process Management", "C. Business Planning Model", "D. Business Procedure Monitoring"],
      correctAnswers: [1],
      explanation: "BPM stands for Business Process Management — the discipline of designing, analyzing, executing, and monitoring business processes to improve their performance.",
      traps: { "A": "Performance Metrics is a component within BPM but not what the acronym means.", "C": "Planning Model is unrelated — BPM focuses on processes, not business planning models.", "D": "Procedure Monitoring only covers one aspect (monitoring), not the full scope of BPM." }
    },
    {
      id: 109, lectureId: 1, type: "multiple-choice", difficulty: "Hard",
      question: "According to Rummler's Framework, at which level does a business process operate?",
      options: ["A. Strategic level — cutting across all organizational decisions", "B. Organization level — defining company structure and resources", "C. Process level — spanning across functional departments", "D. Task level — individual activities performed by employees"],
      correctAnswers: [2],
      explanation: "Rummler's Framework identifies three levels: Organization level (strategy, structure), Process level (cross-functional processes), and Activity/Job level (individual tasks). Business processes operate at the Process level, cutting across functional departments.",
      traps: { "A": "Strategic decisions occur at the Organization level, not a separate 'Strategic level' in this framework.", "B": "The Organization level defines structure and resources, but processes themselves operate one level below.", "D": "The Task/Activity level is about individual performer jobs, which are components within processes." }
    },
    {
      id: 110, lectureId: 1, type: "multiple-choice", difficulty: "Medium",
      question: "Which BPM lifecycle phase uses insights on weaknesses and their impact as its primary output?",
      options: ["A. Process Discovery", "B. Process Analysis", "C. Process Redesign", "D. Process Monitoring"],
      correctAnswers: [1],
      explanation: "Process Analysis takes the as-is model as input and produces insights on weaknesses and their impact as output. These insights then feed into Process Redesign to create the to-be model.",
      traps: { "A": "Process Discovery produces the as-is model, not insights about weaknesses.", "C": "Process Redesign consumes those insights and produces a to-be model.", "D": "Process Monitoring produces conformance and performance insights (about running processes), which is different from the analytical weaknesses identified during Analysis." }
    },
    {
      id: 111, lectureId: 1, type: "multiple-answer", difficulty: "Hard",
      question: "Which of the following are ingredients (components) of a business process? (Select ALL that apply)",
      options: ["A. Events", "B. KPIs", "C. Activities", "D. Decisions"],
      correctAnswers: [0, 2, 3],
      explanation: "A business process is defined as a chain of events, activities, and decisions involving actors and objects. KPIs (Key Performance Indicators) are used to measure process performance but are not ingredients of the process itself.",
      traps: { "B": "KPIs are measurement tools applied to a process but are not structural ingredients of the process definition." }
    },
    {
      id: 112, lectureId: 1, type: "multiple-choice", difficulty: "Medium",
      question: "Which process improvement strategy involves the customer performing part of the process themselves?",
      options: ["A. Standardize", "B. Re-sequence", "C. Outsource to Customer", "D. Eliminate Cooking"],
      correctAnswers: [2],
      explanation: "Outsourcing to the Customer means customers do part of the work themselves (e.g., self-service ordering at a restaurant kiosk). This can reduce cost and time for the organization.",
      traps: { "A": "Standardize means making the process uniform (e.g., fixed menu), not shifting work to the customer.", "B": "Re-sequence means changing the order of activities, not changing who performs them.", "D": "Eliminate Cooking refers to removing a specific activity entirely, not transferring it to the customer." }
    },
    {
      id: 113, lectureId: 1, type: "true-false", difficulty: "Easy",
      question: "The BPM lifecycle is a one-time linear process that ends after Process Implementation.",
      options: ["A. True", "B. False"],
      correctAnswers: [1],
      explanation: "The BPM lifecycle is a continuous cycle, not a one-time linear process. After Implementation comes Monitoring & Controlling, which feeds insights back into Identification or Discovery, perpetuating the improvement cycle.",
      traps: { "A": "This contradicts the core principle of BPM as continuous improvement. The lifecycle is deliberately circular." }
    },
    {
      id: 114, lectureId: 1, type: "multiple-choice", difficulty: "Hard",
      question: "Which statement about Process Identification is INCORRECT?",
      options: [
        "A. It produces a process architecture as one of its outputs",
        "B. The prioritization step ranks processes by Importance, Health, and Feasibility",
        "C. It documents how each process currently works in detail",
        "D. The designation step enumerates processes and determines their scope"
      ],
      correctAnswers: [2],
      explanation: "Documenting how processes currently work IN DETAIL is done in Process Discovery, not Process Identification. Process Identification is about identifying WHICH processes exist and WHICH to focus on first. It operates at a higher level of abstraction.",
      traps: { "A": "Process Identification does produce a process architecture — this is correct.", "B": "The three prioritization criteria (Importance, Health, Feasibility) are correctly stated.", "D": "The designation step correctly involves enumerating and scoping processes." }
    },
    {
      id: 115, lectureId: 1, type: "multiple-choice", difficulty: "Easy",
      question: "In the context of a Procure-to-Pay process, what is the starting trigger?",
      options: [
        "A. Receiving payment from a customer",
        "B. A purchase requisition or need to buy goods/services",
        "C. Delivering goods to a customer",
        "D. Receiving an invoice from a supplier"
      ],
      correctAnswers: [1],
      explanation: "Procure-to-Pay (Purchase-to-Pay) starts with a procurement need — someone identifies the need to purchase goods or services — and ends with payment to the supplier. The name indicates the flow: from Procurement to Payment.",
      traps: { "A": "Receiving payment from a customer is part of Order-to-Cash, not Procure-to-Pay.", "C": "Delivering goods to a customer is also part of Order-to-Cash from the seller's perspective.", "D": "Receiving an invoice occurs during the process but is not the trigger — the need to purchase comes first." }
    }
  ];

  const flashcards = [
    { id: 1, lectureId: 1, front: "What is a business process?", back: "A chain of events, activities & decisions involving actors and objects, triggered by a need, leading to a valuable outcome for a customer.", backVi: "Chuỗi sự kiện, hoạt động & quyết định liên quan đến tác nhân và đối tượng, được kích hoạt bởi nhu cầu, dẫn đến kết quả có giá trị cho khách hàng." },
    { id: 2, lectureId: 1, front: "What are the 3 dimensions of process performance?", back: "Time, Cost, and Quality.", backVi: "Thời gian, Chi phí và Chất lượng." },
    { id: 3, lectureId: 1, front: "What is BPM?", back: "Body of principles, methods and tools to design, analyze, execute and monitor business processes to improve their performance.", backVi: "Tập hợp nguyên tắc, phương pháp và công cụ để thiết kế, phân tích, thực thi và giám sát quy trình kinh doanh." },
    { id: 4, lectureId: 1, front: "Name the 6 phases of the BPM lifecycle.", back: "1) Process Identification, 2) Process Discovery, 3) Process Analysis, 4) Process Redesign, 5) Process Implementation, 6) Process Monitoring & Controlling.", backVi: "1) Nhận dạng, 2) Khám phá, 3) Phân tích, 4) Tái thiết kế, 5) Triển khai, 6) Giám sát & Kiểm soát." },
    { id: 5, lectureId: 1, front: "What does the Process Discovery phase produce?", back: "An as-is process model — documenting the current process as it is actually performed.", backVi: "Mô hình hiện trạng (as-is) — tài liệu hóa quy trình thực tế hiện tại." },
    { id: 6, lectureId: 1, front: "What 3 criteria are used to prioritize processes in Process Identification?", back: "Importance (strategic impact), Health/Dysfunction (how troubled), and Feasibility (chance of success).", backVi: "Tầm quan trọng (tác động chiến lược), Sức khỏe (mức độ rối), và Tính khả thi (khả năng thành công)." },
    { id: 7, lectureId: 1, front: "What is Rummler's Framework?", back: "A framework viewing organizational performance at 3 levels: Organization, Process, and Activity/Job level.", backVi: "Khung nhìn hiệu suất tổ chức ở 3 cấp: Tổ chức, Quy trình và Hoạt động/Công việc." },
    { id: 8, lectureId: 1, front: "What is Order-to-Cash?", back: "End-to-end process from receiving a customer order to collecting payment.", backVi: "Quy trình từ nhận đơn hàng đến thu tiền." },
    { id: 9, lectureId: 1, front: "What is the difference between as-is and to-be models?", back: "As-is model documents the current state; to-be model describes the desired future state after redesign.", backVi: "As-is mô tả trạng thái hiện tại; to-be mô tả trạng thái mong muốn sau tái thiết kế." },
    { id: 10, lectureId: 1, front: "Give 3 examples of process improvement strategies.", back: "Re-sequencing, Standardizing, Outsourcing to Customer, Eliminating non-value steps, Automation.", backVi: "Sắp xếp lại, Chuẩn hóa, Thuê ngoài cho khách hàng, Loại bỏ bước không giá trị, Tự động hóa." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
