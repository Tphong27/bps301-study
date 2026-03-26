// Lecture 3: Process Modelling (Part 1) — Essential BPMN
(function() {
  const study = {
    id: 3,
    title: "Process Modelling (Part 1)",
    titleVi: "Mô hình hóa Quy trình (Phần 1)",
    sections: [
      {
        heading: "Introduction to BPMN",
        headingVi: "Giới thiệu BPMN",
        content: "<p><strong>BPMN</strong> (Business Process Model and Notation) is the standard notation for modeling business processes. A BPMN model shows:</p><ul><li><strong>Events</strong> (circles) — Start events (thin border), End events (thick border), Intermediate events</li><li><strong>Activities/Tasks</strong> (rounded rectangles) — Work items performed</li><li><strong>Gateways</strong> (diamonds) — Decision/branching points</li><li><strong>Sequence Flows</strong> (arrows) — Order of execution</li></ul><p>A process model captures the flow from a <strong>start event</strong> through activities to one or more <strong>end events</strong>. Each running process is called a <strong>process instance</strong> (or case).</p>",
        contentVi: "<p><strong>BPMN</strong> là ký hiệu chuẩn để mô hình hóa quy trình. Các thành phần: Sự kiện (hình tròn), Hoạt động (hình chữ nhật bo), Cổng (hình thoi), Luồng tuần tự (mũi tên).</p>",
        keyTerms: [
          { term: "BPMN", termVi: "Ký hiệu Mô hình Quy trình", definition: "Business Process Model and Notation — the ISO/OMG standard for process modeling.", definitionVi: "Ký hiệu và Mô hình Quy trình Kinh doanh — tiêu chuẩn ISO/OMG." },
          { term: "Process Instance", termVi: "Phiên bản quy trình", definition: "One execution of a process model, also called a case.", definitionVi: "Một lần thực thi mô hình quy trình, còn gọi là case." }
        ]
      },
      {
        heading: "Gateways: Branching and Merging",
        headingVi: "Cổng: Rẽ nhánh và Hội tụ",
        content: "<p>BPMN defines three main gateway types:</p><ul><li><strong>XOR Gateway (Exclusive)</strong> — Exactly ONE path is taken. Marker: X or empty diamond. Used for mutually exclusive decisions.</li><li><strong>AND Gateway (Parallel)</strong> — ALL paths are taken simultaneously. Marker: + inside diamond. Used for concurrent execution.</li><li><strong>OR Gateway (Inclusive)</strong> — ONE or MORE paths are taken. Marker: O inside diamond. Used when multiple conditions can be true.</li></ul><p>Each split gateway has a corresponding join gateway: XOR-split/join, AND-split/join, OR-split/join. Mismatching split and join types is a common modeling error.</p>",
        contentVi: "<p>BPMN có 3 loại cổng chính: XOR (chọn 1 đường), AND (đi tất cả đường cùng lúc), OR (đi 1 hoặc nhiều đường). Mỗi cổng chia có cổng hội tương ứng.</p>",
        keyTerms: [
          { term: "XOR Gateway", termVi: "Cổng XOR", definition: "Exclusive gateway — exactly one outgoing path is taken based on a decision.", definitionVi: "Cổng riêng biệt — chính xác một đường được chọn." },
          { term: "AND Gateway", termVi: "Cổng AND", definition: "Parallel gateway — all outgoing paths are taken concurrently.", definitionVi: "Cổng song song — tất cả đường được đi cùng lúc." },
          { term: "OR Gateway", termVi: "Cổng OR", definition: "Inclusive gateway — one or more paths are taken.", definitionVi: "Cổng bao hàm — một hoặc nhiều đường được đi." }
        ]
      },
      {
        heading: "Rework and Repetition",
        headingVi: "Làm lại và Lặp lại",
        content: "<p>BPMN can model <strong>rework loops</strong> by connecting a sequence flow backward using an XOR gateway. This represents situations where work may need to be repeated (e.g., a document fails quality check and needs revision).</p><p>The <strong>rework probability</strong> affects process performance calculations — higher rework means longer cycle times and higher costs.</p>",
        contentVi: "<p>BPMN có thể mô hình hóa vòng lặp làm lại bằng cách kết nối luồng ngược qua cổng XOR. Xác suất làm lại ảnh hưởng đến thời gian chu kỳ và chi phí.</p>",
        keyTerms: [
          { term: "Rework Loop", termVi: "Vòng lặp làm lại", definition: "A backward flow in a process model where work is repeated due to errors or rejection.", definitionVi: "Luồng ngược trong mô hình quy trình nơi công việc được lặp lại do lỗi." }
        ]
      },
      {
        heading: "Resources: Pools and Lanes",
        headingVi: "Nguồn lực: Pool và Lane",
        content: "<p><strong>Pools</strong> represent different organizations or participants in a process. <strong>Lanes</strong> divide a pool to show which role/department performs each activity.</p><ul><li>Communication between pools uses <strong>message flows</strong> (dashed arrows)</li><li>Within a pool, activities are connected by <strong>sequence flows</strong> (solid arrows)</li><li>A <strong>collaboration diagram</strong> shows multiple pools interacting via message flows</li></ul>",
        contentVi: "<p><strong>Pool</strong> đại diện tổ chức/bên tham gia. <strong>Lane</strong> chia pool để chỉ vai trò/phòng ban thực hiện mỗi hoạt động. Giao tiếp giữa pool dùng luồng tin nhắn (mũi tên nét đứt).</p>",
        keyTerms: [
          { term: "Pool", termVi: "Pool", definition: "Represents an organization or major participant in a BPMN collaboration.", definitionVi: "Đại diện cho một tổ chức hoặc bên tham gia chính." },
          { term: "Lane", termVi: "Lane", definition: "A subdivision of a pool showing which role/department performs activities.", definitionVi: "Phân chia pool cho thấy vai trò/phòng ban thực hiện hoạt động." },
          { term: "Message Flow", termVi: "Luồng tin nhắn", definition: "Dashed arrow showing communication between different pools.", definitionVi: "Mũi tên nét đứt thể hiện giao tiếp giữa các pool." }
        ]
      },
      {
        heading: "Data Objects and Sub-processes",
        headingVi: "Đối tượng Dữ liệu và Quy trình Con",
        content: "<p><strong>Data objects</strong> represent information entities used or produced by activities (e.g., 'Invoice', 'Purchase Order'). <strong>Data stores</strong> represent persistent data repositories (e.g., databases).</p><p><strong>Sub-processes</strong> allow decomposition — a complex activity can be expanded into its own detailed process model. They help manage model complexity by hiding detail.</p><ul><li><strong>Collapsed sub-process</strong> — shown as a task with a + marker</li><li><strong>Expanded sub-process</strong> — shows the internal flow inside a rounded rectangle</li></ul>",
        contentVi: "<p>Đối tượng dữ liệu đại diện thông tin (VD: Hóa đơn, Đơn mua). Kho dữ liệu đại diện nơi lưu trữ. Quy trình con cho phép phân rã — giai mô hình phức tạp thành chi tiết.</p>",
        keyTerms: [
          { term: "Sub-process", termVi: "Quy trình con", definition: "A compound activity that contains its own internal process flow.", definitionVi: "Hoạt động phức hợp chứa luồng quy trình nội bộ riêng." },
          { term: "Data Object", termVi: "Đối tượng dữ liệu", definition: "Information produced or consumed by activities within a process.", definitionVi: "Thông tin được tạo hoặc sử dụng bởi các hoạt động." }
        ]
      }
    ]
  };

  const quiz = [
    { id: 301, lectureId: 3, type: "multiple-choice", difficulty: "Easy", question: "In BPMN, what shape represents a gateway?", options: ["A. Circle", "B. Rounded rectangle", "C. Diamond", "D. Square"], correctAnswers: [2], explanation: "Gateways in BPMN are represented by diamonds. Circles are events, rounded rectangles are activities/tasks.", traps: { "A": "Circles represent events (start, end, intermediate).", "B": "Rounded rectangles represent activities/tasks.", "D": "Squares are not a standard BPMN notation element." } },
    { id: 302, lectureId: 3, type: "multiple-choice", difficulty: "Medium", question: "Which gateway means 'exactly one path is taken'?", options: ["A. AND gateway", "B. OR gateway", "C. XOR gateway", "D. Complex gateway"], correctAnswers: [2], explanation: "XOR (Exclusive) gateway means exactly one outgoing path is selected based on a decision condition. AND takes all paths, OR takes one or more.", traps: { "A": "AND gateway means ALL paths are taken concurrently.", "B": "OR gateway means ONE OR MORE paths can be taken.", "D": "Complex gateway handles non-standard branching patterns." } },
    { id: 303, lectureId: 3, type: "true-false", difficulty: "Easy", question: "In BPMN, message flows (dashed arrows) can be used to connect activities within the same pool.", options: ["A. True", "B. False"], correctAnswers: [1], explanation: "Message flows (dashed arrows) are ONLY used between different pools. Within the same pool, activities are connected using sequence flows (solid arrows).", traps: { "A": "Message flows cross pool boundaries. Using them within a pool is a modeling error." } },
    { id: 304, lectureId: 3, type: "multiple-choice", difficulty: "Hard", question: "A process has an AND-split followed by two parallel branches. What type of gateway should join these branches?", options: ["A. XOR gateway", "B. AND gateway", "C. OR gateway", "D. Any gateway type works"], correctAnswers: [1], explanation: "An AND-split must be paired with an AND-join to properly synchronize all parallel branches. Using a mismatched gateway type (e.g., XOR) would cause issues because XOR would proceed after only one branch completes.", traps: { "A": "XOR-join would wait for only ONE branch, not synchronizing all parallel work.", "C": "OR-join has complex synchronization semantics and is not the standard match for AND-split.", "D": "Gateway types are NOT interchangeable — mismatching causes deadlocks or incorrect behavior." } },
    { id: 305, lectureId: 3, type: "multiple-choice", difficulty: "Medium", question: "What does a collapsed sub-process look like in BPMN?", options: ["A. A task with a loop marker (circular arrow)", "B. A task with a + marker at the bottom", "C. A task with a ~ marker", "D. A diamond with a + inside"], correctAnswers: [1], explanation: "A collapsed sub-process appears as a rounded rectangle (like a task) with a small + symbol at the bottom center. This indicates it contains internal detail that is hidden.", traps: { "A": "A loop marker indicates repetition/looping, not a sub-process.", "C": "A ~ marker indicates ad-hoc sub-processes.", "D": "A diamond with + is an AND gateway, not a sub-process." } },
    { id: 306, lectureId: 3, type: "multiple-answer", difficulty: "Hard", question: "Which are valid BPMN gateway types? (Select ALL that apply)", options: ["A. XOR (Exclusive)", "B. AND (Parallel)", "C. NAND (Not-And)", "D. OR (Inclusive)"], correctAnswers: [0, 1, 3], explanation: "BPMN defines XOR (Exclusive), AND (Parallel), OR (Inclusive), Event-Based, and Complex gateways. NAND is a logic gate concept from electronics but NOT a BPMN gateway type.", traps: { "C": "NAND is a logic gate from digital circuits, not a standard BPMN gateway." } },
    { id: 307, lectureId: 3, type: "multiple-choice", difficulty: "Medium", question: "In a BPMN collaboration diagram, a Pool represents:", options: ["A. A department within a single organization", "B. An organization or independent participant", "C. A data store", "D. A group of related activities"], correctAnswers: [1], explanation: "A Pool represents an organization or independent participant in a collaboration. Lanes (within pools) represent departments or roles.", traps: { "A": "Departments within an organization are shown as Lanes, not separate Pools.", "C": "Data stores have their own distinct notation (cylinder shape or strikethrough rectangle).", "D": "Groups of related activities are sub-processes or groups, not pools." } },
    { id: 308, lectureId: 3, type: "multiple-choice", difficulty: "Easy", question: "In BPMN, what does a circle with a thick border represent?", options: ["A. Start event", "B. Intermediate event", "C. End event", "D. Timer event"], correctAnswers: [2], explanation: "End events have thick (bold) borders. Start events have thin single borders. Intermediate events have double thin borders.", traps: { "A": "Start events have thin single borders, not thick borders.", "B": "Intermediate events have double thin borders.", "D": "Timer events can be start, intermediate, or boundary events — identified by a clock icon, not border thickness." } },
    { id: 309, lectureId: 3, type: "multiple-choice", difficulty: "Hard", question: "If an OR-split activates paths A, B, and C, what happens at the corresponding OR-join?", options: ["A. It waits for only one path to arrive", "B. It waits for ALL three paths to arrive", "C. It waits for the paths that were activated to arrive", "D. It waits for a majority (2 out of 3) to arrive"], correctAnswers: [2], explanation: "An OR-join (inclusive merge) waits for exactly those paths that were activated at the corresponding OR-split. If only A and B were activated, it waits for A and B. This is more complex than XOR-join (waits for 1) or AND-join (waits for all).", traps: { "A": "That describes XOR-join behavior, not OR-join.", "B": "That describes AND-join behavior. OR-join only waits for activated paths.", "D": "There is no 'majority' logic in BPMN gateways." } },
    { id: 310, lectureId: 3, type: "true-false", difficulty: "Medium", question: "A BPMN process model can have multiple start events but should have at least one end event.", options: ["A. True", "B. False"], correctAnswers: [0], explanation: "A BPMN process model can have multiple start events (representing different triggers) and should have at least one end event. Having multiple start/end events is valid BPMN.", traps: { "B": "This statement is actually correct. BPMN allows multiple starts and requires at least one end." } }
  ];

  const flashcards = [
    { id: 17, lectureId: 3, front: "What are the 3 main BPMN gateway types?", back: "XOR (Exclusive — one path), AND (Parallel — all paths), OR (Inclusive — one or more paths).", backVi: "XOR (Riêng biệt — 1 đường), AND (Song song — tất cả), OR (Bao hàm — 1 hoặc nhiều)." },
    { id: 18, lectureId: 3, front: "What is a Pool vs Lane in BPMN?", back: "Pool = organization/participant. Lane = role/department within a pool.", backVi: "Pool = tổ chức/bên tham gia. Lane = vai trò/phòng ban trong pool." },
    { id: 19, lectureId: 3, front: "What connects activities between pools?", back: "Message flows (dashed arrows). Within a pool: sequence flows (solid arrows).", backVi: "Luồng tin nhắn (mũi tên nét đứt). Trong pool: luồng tuần tự (mũi tên liền)." },
    { id: 20, lectureId: 3, front: "How is a collapsed sub-process shown?", back: "A rounded rectangle with a + marker at the bottom center.", backVi: "Hình chữ nhật bo với dấu + ở giữa dưới." },
    { id: 21, lectureId: 3, front: "Start vs End event appearance?", back: "Start event: thin border circle. End event: thick border circle.", backVi: "Sự kiện bắt đầu: viền mỏng. Sự kiện kết thúc: viền dày." }
  ];

  window._BPS301_DATA.push({ study, quiz, flashcards });
})();
