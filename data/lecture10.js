// Lecture 10: Business Process Redesign (Implementation & BPMS)
(function() {
  const study = {
    id: 10, title: "Process Implementation & BPMS", titleVi: "Triển khai Quy trình & Hệ thống BPMS",
    sections: [
      { heading: "BPMS: Business Process Management Systems", headingVi: "Hệ thống Quản lý Quy trình (BPMS)",
        content: "<p>A <strong>BPMS</strong> is software that supports the execution and management of business processes. Key components:</p><ul><li><strong>Process Modeler</strong> — Design and configure process models</li><li><strong>Execution Engine</strong> — Automates process flow, assigns tasks to participants</li><li><strong>Worklist Handler</strong> — Shows tasks assigned to each user, manages work items</li><li><strong>Monitoring Dashboard (BAM)</strong> — Business Activity Monitoring, tracks KPIs in real-time</li></ul><p>BPMS types range from lightweight (form/workflow tools) to heavyweight (enterprise platforms with integration, analytics).</p>",
        contentVi: "<p>BPMS là phần mềm hỗ trợ thực thi và quản lý quy trình. Thành phần: Công cụ mô hình, Máy thực thi, Bộ xử lý danh sách công việc, Bảng giám sát (BAM).</p>",
        keyTerms: [
          { term: "BPMS", termVi: "Hệ thống Quản lý Quy trình", definition: "Software platform for modeling, executing, and monitoring business processes.", definitionVi: "Nền tảng phần mềm để mô hình hóa, thực thi và giám sát quy trình." },
          { term: "BAM", termVi: "Giám sát Hoạt động Kinh doanh", definition: "Business Activity Monitoring — real-time tracking of process KPIs.", definitionVi: "Giám sát hoạt động kinh doanh — theo dõi KPI quy trình theo thời gian thực." }
        ] },
      { heading: "Process Automation Concepts", headingVi: "Khái niệm Tự động hóa Quy trình",
        content: "<p>Key concepts for process implementation:</p><ul><li><strong>Service task</strong> — Automated task executed by a system (no human interaction)</li><li><strong>User task</strong> — Requires human input via a worklist/form</li><li><strong>Manual task</strong> — Human task outside the BPMS scope</li><li><strong>Decision tables (DMN)</strong> — Structured rules for automating business decisions</li><li><strong>RPA (Robotic Process Automation)</strong> — Software bots that mimic human actions (clicking, typing)</li></ul>",
        contentVi: "<p>Khái niệm: Service task (tự động), User task (cần con người), Manual task (ngoài BPMS), Decision tables (DMN), RPA (robot phần mềm).</p>",
        keyTerms: [
          { term: "DMN", termVi: "Ký hiệu Quyết định", definition: "Decision Model and Notation — standard for modeling business decisions using tables.", definitionVi: "Tiêu chuẩn mô hình hóa quyết định kinh doanh bằng bảng." },
          { term: "RPA", termVi: "Tự động hóa Quy trình Robot", definition: "Robotic Process Automation — bots that mimic human actions to automate routine tasks.", definitionVi: "Robot phần mềm mô phỏng hành động con người để tự động hóa task lặp lại." }
        ] },
      { heading: "Organizational Change Management", headingVi: "Quản lý Thay đổi Tổ chức",
        content: "<p>Process implementation requires both <strong>IT changes</strong> and <strong>organizational changes</strong>. Key aspects:</p><ul><li><strong>Change management</strong> — Managing resistance, training, communication</li><li><strong>Process owner</strong> — Person accountable for end-to-end process performance</li><li><strong>Continuous improvement</strong> — Ongoing monitoring and adjustment after implementation</li></ul>",
        contentVi: "<p>Triển khai quy trình cần cả thay đổi IT và tổ chức. Khía cạnh: Quản lý thay đổi, Chủ sở hữu quy trình, Cải tiến liên tục.</p>",
        keyTerms: [
          { term: "Process Owner", termVi: "Chủ sở hữu Quy trình", definition: "Person accountable for end-to-end performance of a business process.", definitionVi: "Người chịu trách nhiệm về hiệu suất toàn bộ quy trình." }
        ] }
    ]
  };

  const quiz = [
    { id: 1001, lectureId: 10, type: "multiple-choice", difficulty: "Easy", question: "Which BPMS component assigns tasks to users and shows their work items?", options: ["A. Process Modeler", "B. Execution Engine", "C. Worklist Handler", "D. Monitoring Dashboard"], correctAnswers: [2], explanation: "The Worklist Handler shows users their assigned tasks and manages work items. The Execution Engine runs the process, the Modeler designs it, and the Dashboard monitors it.", traps: { "A": "The Process Modeler is for designing, not assigning tasks.", "B": "The Execution Engine automates flow but doesn't present tasks to users.", "D": "The Dashboard monitors KPIs, it doesn't assign tasks." } },
    { id: 1002, lectureId: 10, type: "multiple-choice", difficulty: "Medium", question: "In BPMN, a Service Task is:", options: ["A. A task performed by a human using a form", "B. A task executed automatically by a system without human involvement", "C. A task done manually outside the IT system", "D. A task that sends a message to another participant"], correctAnswers: [1], explanation: "A Service Task is fully automated — executed by a software system without human involvement. User Tasks require human interaction, Manual Tasks are outside the system.", traps: { "A": "That describes a User Task.", "C": "That describes a Manual Task.", "D": "That describes a Send Task." } },
    { id: 1003, lectureId: 10, type: "true-false", difficulty: "Medium", question: "RPA (Robotic Process Automation) can only automate tasks that interact with APIs.", options: ["A. True", "B. False"], correctAnswers: [1], explanation: "RPA bots mimic human actions (clicking, typing, screen reading). They specifically excel at automating tasks with user interfaces where APIs don't exist.", traps: { "A": "RPA's strength is working with UIs and legacy systems that DON'T have APIs." } },
    { id: 1004, lectureId: 10, type: "multiple-choice", difficulty: "Hard", question: "DMN (Decision Model and Notation) is primarily used for:", options: ["A. Modeling complete business processes end-to-end", "B. Automating business decisions using structured decision tables", "C. Creating organization charts", "D. Monitoring process performance metrics"], correctAnswers: [1], explanation: "DMN is specifically designed for modeling and automating business decisions using decision tables — structured rules with conditions and outcomes.", traps: { "A": "End-to-end process modeling uses BPMN, not DMN.", "C": "Organization charts are unrelated to DMN.", "D": "Performance monitoring uses BAM tools, not DMN." } },
    { id: 1005, lectureId: 10, type: "multiple-choice", difficulty: "Medium", question: "Who is accountable for end-to-end performance of a business process?", options: ["A. IT Manager", "B. Process Analyst", "C. Process Owner", "D. CEO"], correctAnswers: [2], explanation: "The Process Owner is the person accountable for end-to-end performance of a specific business process. This role spans across departments.", traps: { "A": "IT managers handle technology but aren't accountable for process performance.", "B": "Process Analysts study and improve processes but don't own them.", "D": "The CEO is accountable for overall company performance, not individual processes." } },
    { id: 1006, lectureId: 10, type: "multiple-answer", difficulty: "Hard", question: "Which are components of a BPMS? (Select ALL)", options: ["A. Process Modeler", "B. Execution Engine", "C. Code Compiler", "D. Worklist Handler"], correctAnswers: [0, 1, 3], explanation: "BPMS components: Process Modeler, Execution Engine, Worklist Handler, and Monitoring/Analytics. A code compiler is not a BPMS component.", traps: { "C": "A code compiler is used in software development, not in BPMS. BPMS uses model-driven execution." } }
  ];

  const flashcards = [
    { id: 50, lectureId: 10, front: "4 main BPMS components?", back: "1) Process Modeler, 2) Execution Engine, 3) Worklist Handler, 4) Monitoring Dashboard (BAM).", backVi: "1) Mô hình hóa, 2) Máy thực thi, 3) Xử lý công việc, 4) Bảng giám sát." },
    { id: 51, lectureId: 10, front: "Service Task vs User Task vs Manual Task?", back: "Service: fully automated. User: human via form. Manual: human outside the system.", backVi: "Service: tự động hoàn toàn. User: con người qua form. Manual: con người ngoài hệ thống." },
    { id: 52, lectureId: 10, front: "What is RPA?", back: "Robotic Process Automation — software bots that mimic human UI actions (click, type, read screen).", backVi: "Robot phần mềm mô phỏng hành động giao diện của con người." },
    { id: 53, lectureId: 10, front: "What is DMN?", back: "Decision Model and Notation — standard for modeling business decisions using structured decision tables.", backVi: "Tiêu chuẩn mô hình hóa quyết định bằng bảng quyết định có cấu trúc." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
