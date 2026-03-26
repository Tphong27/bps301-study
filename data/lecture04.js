// Lecture 4: Process Modelling (Part 2) — Advanced BPMN
(function() {
  const study = {
    id: 4,
    title: "Process Modelling (Part 2)",
    titleVi: "Mô hình hóa Quy trình (Phần 2)",
    sections: [
      {
        heading: "Advanced Rework & Repetition",
        headingVi: "Làm lại & Lặp lại Nâng cao",
        content: "<p>Beyond simple XOR-based rework loops, BPMN supports:</p><ul><li><strong>Loop activity</strong> — A task/sub-process with a loop marker (↺) that repeats until a condition is met</li><li><strong>Multi-instance activity</strong> — Executes the same task multiple times (e.g., for each item in a list). Can be <strong>sequential</strong> (|||) or <strong>parallel</strong> (≡)</li><li><strong>Ad-hoc sub-process</strong> — Contains activities that can be performed in any order, marked with a ~ symbol</li></ul>",
        contentVi: "<p>Ngoài vòng lặp XOR đơn giản, BPMN hỗ trợ: hoạt động lặp, hoạt động đa phiên bản (tuần tự hoặc song song), quy trình con ad-hoc (thứ tự tùy ý).</p>",
        keyTerms: [
          { term: "Multi-instance Activity", termVi: "Hoạt động đa phiên bản", definition: "An activity executed multiple times — once for each item in a collection.", definitionVi: "Hoạt động thực thi nhiều lần — mỗi lần cho một phần tử trong tập hợp." },
          { term: "Ad-hoc Sub-process", termVi: "Quy trình con Ad-hoc", definition: "A sub-process where activities can be performed in any order, marked with ~.", definitionVi: "Quy trình con nơi hoạt động có thể thực hiện theo bất kỳ thứ tự nào." }
        ]
      },
      {
        heading: "Handling Events",
        headingVi: "Xử lý Sự kiện",
        content: "<p>BPMN supports various event types:</p><ul><li><strong>Message events</strong> — Sending/receiving messages between participants</li><li><strong>Timer events</strong> — Triggered by time conditions (deadline, duration, cycle)</li><li><strong>Signal events</strong> — Broadcast to all listening processes</li><li><strong>Event-based gateway</strong> — Waits for one of several possible events (race condition)</li></ul><p><strong>Racing events</strong>: When multiple events can occur but only the first one is acted upon (e.g., waiting for customer response OR timeout).</p>",
        contentVi: "<p>BPMN hỗ trợ nhiều loại sự kiện: tin nhắn, hẹn giờ, tín hiệu, cổng dựa sự kiện. Sự kiện đua: nhiều sự kiện có thể xảy ra nhưng chỉ sự kiện đầu tiên được xử lý.</p>",
        keyTerms: [
          { term: "Event-based Gateway", termVi: "Cổng dựa sự kiện", definition: "A gateway that waits for one of multiple possible events to occur (first wins).", definitionVi: "Cổng chờ một trong nhiều sự kiện có thể xảy ra (sự kiện đầu tiên thắng)." },
          { term: "Timer Event", termVi: "Sự kiện hẹn giờ", definition: "An event triggered by a time condition — date, duration, or cycle.", definitionVi: "Sự kiện được kích hoạt bởi điều kiện thời gian." }
        ]
      },
      {
        heading: "Handling Exceptions",
        headingVi: "Xử lý Ngoại lệ",
        content: "<p>BPMN provides several mechanisms for exception handling:</p><ul><li><strong>Terminate event</strong> — Immediately stops all activities in the process</li><li><strong>Error event</strong> — Catches internal errors (e.g., validation failure)</li><li><strong>Boundary events</strong> — Attached to activity borders, triggered by external events during execution</li><li><strong>Interrupting vs Non-interrupting</strong> — Interrupting boundary events cancel the activity; non-interrupting allow it to continue</li><li><strong>Compensation events</strong> — Undo effects of completed activities (e.g., cancel a shipment)</li><li><strong>Event sub-processes</strong> — Special sub-processes triggered by events that can handle exceptions globally</li></ul>",
        contentVi: "<p>BPMN cung cấp nhiều cơ chế xử lý ngoại lệ: sự kiện kết thúc, sự kiện lỗi, sự kiện biên, sự kiện ngắt/không ngắt, sự kiện bồi thường, quy trình con sự kiện.</p>",
        keyTerms: [
          { term: "Boundary Event", termVi: "Sự kiện biên", definition: "An event attached to an activity's border that triggers when an external event occurs during that activity.", definitionVi: "Sự kiện gắn vào biên hoạt động, kích hoạt khi sự kiện ngoại vi xảy ra." },
          { term: "Compensation Event", termVi: "Sự kiện bồi thường", definition: "An event that undoes/reverses the effects of a completed activity.", definitionVi: "Sự kiện hoàn tác tác động của hoạt động đã hoàn thành." }
        ]
      }
    ]
  };

  const quiz = [
    { id: 401, lectureId: 4, type: "multiple-choice", difficulty: "Medium", question: "What marker indicates a multi-instance parallel activity in BPMN?", options: ["A. ↺ (circular arrow)", "B. ≡ (three horizontal lines)", "C. ~ (tilde)", "D. + (plus)"], correctAnswers: [1], explanation: "Three horizontal lines (≡) indicate a parallel multi-instance activity. Three vertical lines (|||) indicate sequential multi-instance. ↺ is for loops, ~ for ad-hoc, + for sub-process.", traps: { "A": "↺ marks a loop activity (repeating until condition met), not multi-instance.", "C": "~ marks an ad-hoc sub-process where activities can occur in any order.", "D": "+ marks a collapsed sub-process, not multi-instance." } },
    { id: 402, lectureId: 4, type: "multiple-choice", difficulty: "Hard", question: "What happens when an interrupting boundary event is triggered on an activity?", options: ["A. The activity pauses and resumes after handling", "B. The activity is immediately cancelled and the exception flow is taken", "C. The activity completes first, then the event is handled", "D. Both the activity and event handler run in parallel"], correctAnswers: [1], explanation: "An interrupting boundary event cancels the activity immediately and diverts the flow to the exception handler. This is different from non-interrupting events which allow the activity to continue.", traps: { "A": "BPMN doesn't have a 'pause and resume' mechanism for boundary events.", "C": "That describes an event that waits until completion — interrupting means immediate cancellation.", "D": "Running in parallel describes non-interrupting boundary events, not interrupting ones." } },
    { id: 403, lectureId: 4, type: "true-false", difficulty: "Medium", question: "A non-interrupting boundary event allows the enclosing activity to continue while also triggering a parallel exception handler.", options: ["A. True", "B. False"], correctAnswers: [0], explanation: "Non-interrupting boundary events (shown with dashed borders) allow the activity to continue while simultaneously triggering a parallel exception handling flow.", traps: { "B": "This is actually correct — non-interrupting events are specifically designed for this parallel handling behavior." } },
    { id: 404, lectureId: 4, type: "multiple-choice", difficulty: "Hard", question: "A process waits for either a customer reply OR a 48-hour timeout. Which BPMN element is most appropriate?", options: ["A. XOR gateway with timer", "B. Event-based gateway", "C. OR gateway", "D. AND gateway with timer boundary"], correctAnswers: [1], explanation: "An event-based gateway models a race condition where the process waits for the FIRST of several possible events (message from customer or timer expiration). This is different from XOR which makes a data-based decision.", traps: { "A": "XOR gateway makes decisions based on data conditions, not waiting for external events.", "C": "OR gateway allows one or more paths based on conditions, not event races.", "D": "AND gateway would try to do both simultaneously, not wait for either." } },
    { id: 405, lectureId: 4, type: "multiple-choice", difficulty: "Easy", question: "What does a terminate end event do?", options: ["A. Ends only the current branch of execution", "B. Immediately stops ALL activities in the entire process", "C. Sends a message to another pool", "D. Triggers a compensation handler"], correctAnswers: [1], explanation: "A terminate end event immediately stops all active activities in the entire process instance, ending it abruptly. A normal end event only ends the current branch.", traps: { "A": "That describes a normal end event, not a terminate end event.", "C": "Sending messages uses message end events.", "D": "Triggering compensation uses compensation events." } },
    { id: 406, lectureId: 4, type: "multiple-choice", difficulty: "Medium", question: "An ad-hoc sub-process is marked with which symbol?", options: ["A. + (plus)", "B. ~ (tilde)", "C. ↺ (loop)", "D. ≡ (triple lines)"], correctAnswers: [1], explanation: "The tilde (~) symbol marks an ad-hoc sub-process where activities can be performed in any order without a predefined sequence flow.", traps: { "A": "+ marks a collapsed sub-process.", "C": "↺ marks a loop/repeating activity.", "D": "≡ marks a multi-instance activity." } },
    { id: 407, lectureId: 4, type: "multiple-answer", difficulty: "Hard", question: "Which are valid BPMN exception handling mechanisms? (Select ALL)", options: ["A. Error boundary events", "B. Try-catch blocks", "C. Compensation events", "D. Event sub-processes"], correctAnswers: [0, 2, 3], explanation: "BPMN supports error boundary events, compensation events, and event sub-processes for exception handling. Try-catch blocks are a programming language concept, not a BPMN element.", traps: { "B": "Try-catch is from programming (Java, C#), not BPMN. BPMN uses boundary events and event sub-processes instead." } },
    { id: 408, lectureId: 4, type: "multiple-choice", difficulty: "Medium", question: "What is the purpose of a compensation event in BPMN?", options: ["A. To speed up a slow activity", "B. To cancel and undo the effects of a completed activity", "C. To add extra resources to an overloaded activity", "D. To skip an optional activity"], correctAnswers: [1], explanation: "Compensation events undo/reverse effects of already completed activities. For example, if a shipment was already sent but the order is cancelled, compensation would trigger a return shipment.", traps: { "A": "Speeding up is about optimization, not compensation.", "C": "Resource allocation is an organizational concern, not modeled as compensation.", "D": "Skipping activities is handled by gateways, not compensation events." } }
  ];

  const flashcards = [
    { id: 22, lectureId: 4, front: "What is an event-based gateway?", back: "A gateway that waits for the first of multiple possible events to occur (race condition). Only one event wins.", backVi: "Cổng chờ sự kiện đầu tiên trong nhiều sự kiện có thể xảy ra (điều kiện đua)." },
    { id: 23, lectureId: 4, front: "Interrupting vs Non-interrupting boundary events?", back: "Interrupting: cancels the activity, diverts to handler. Non-interrupting: activity continues AND handler runs in parallel.", backVi: "Ngắt: hủy hoạt động. Không ngắt: hoạt động tiếp tục VÀ xử lý chạy song song." },
    { id: 24, lectureId: 4, front: "What is a compensation event?", back: "An event that undoes/reverses the effects of a previously completed activity.", backVi: "Sự kiện hoàn tác tác động của hoạt động đã hoàn thành." },
    { id: 25, lectureId: 4, front: "Multi-instance vs Loop activity?", back: "Multi-instance: runs N times (once per item). Loop: repeats until a condition is met.", backVi: "Đa phiên bản: chạy N lần. Lặp: lặp lại đến khi điều kiện thỏa mãn." },
    { id: 26, lectureId: 4, front: "What symbol marks an ad-hoc sub-process?", back: "The tilde symbol (~). Activities inside can be performed in any order.", backVi: "Ký hiệu ~ (dấu ngã). Hoạt động bên trong có thể thực hiện theo bất kỳ thứ tự nào." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
