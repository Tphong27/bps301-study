// Extra Quiz Pack: 20 calculation-focused questions (English-only)
(function () {
  const quiz = [
    {
      id: 1301,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "A case spends 18 minutes being processed and 42 minutes waiting. What is its cycle time?",
      options: [
        "A. 18 minutes",
        "B. 24 minutes",
        "C. 60 minutes",
        "D. 76 minutes",
      ],
      correctAnswers: [2],
      explanation:
        "Formula used: Cycle Time (CT = PT + WT). CT = 18 + 42 = 60 minutes.",
      traps: {
        A: "This uses only processing time and ignores waiting.",
        B: "This is not the sum of the two time components.",
        D: "This overstates the total and does not follow CT = PT + WT.",
      },
    },
    {
      id: 1302,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "If processing time is 12 minutes and cycle time is 48 minutes, what is the Cycle Time Efficiency (CTE)?",
      options: ["A. 12%", "B. 25%", "C. 36%", "D. 48%"],
      correctAnswers: [1],
      explanation:
        "Formula used: Cycle Time Efficiency (CTE = PT / CT x 100%). CTE = 12 / 48 x 100% = 25%.",
      traps: {
        A: "This confuses the raw processing time with the efficiency percentage.",
        C: "This is not obtained from 12/48.",
        D: "This incorrectly treats cycle time itself as the efficiency value.",
      },
    },
    {
      id: 1303,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A process has a cycle time of 20 hours, of which only 2 hours are actual processing. What is the CTE?",
      options: ["A. 5%", "B. 10%", "C. 20%", "D. 40%"],
      correctAnswers: [1],
      explanation:
        "Formula used: Cycle Time Efficiency (CTE = PT / CT x 100%). CTE = 2 / 20 x 100% = 10%.",
      traps: {
        A: "This would be correct only if processing time were 1 hour.",
        C: "This doubles the correct ratio.",
        D: "This is far above 2/20.",
      },
    },
    {
      id: 1304,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "Three activities are executed sequentially and take 2 hours, 5 hours, and 1 hour. What is the total cycle time of the sequential block?",
      options: ["A. 5 hours", "B. 6 hours", "C. 8 hours", "D. 10 hours"],
      correctAnswers: [2],
      explanation:
        "Formula used: Sequential block cycle time (CT_total = sum of sequential activity times). CT = 2 + 5 + 1 = 8 hours.",
      traps: {
        A: "This uses only the longest activity instead of summing all sequential steps.",
        B: "This misses one hour from the total.",
        D: "This overstates the sum of the three activities.",
      },
    },
    {
      id: 1305,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An XOR-block has three paths: Path A with 50% probability and 4 hours, Path B with 30% probability and 6 hours, and Path C with 20% probability and 10 hours. What is the expected cycle time?",
      options: ["A. 5.0 hours", "B. 5.8 hours", "C. 6.7 hours", "D. 10.0 hours"],
      correctAnswers: [1],
      explanation:
        "Formula used: XOR-block expected cycle time (CT = sum of probability x branch CT). CT = 0.5 x 4 + 0.3 x 6 + 0.2 x 10 = 2 + 1.8 + 2 = 5.8 hours.",
      traps: {
        A: "This is too low and ignores the heavier third path.",
        C: "This does not match the weighted average calculation.",
        D: "This incorrectly uses only the longest path time.",
      },
    },
    {
      id: 1306,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "An AND-block has three parallel branches with costs of $30, $45, and $25. What is the total cost of the AND-block?",
      options: ["A. $45", "B. $75", "C. $100", "D. $135"],
      correctAnswers: [2],
      explanation:
        "Formula used: AND-block cost (Cost = sum of all branch costs). Cost = 30 + 45 + 25 = $100.",
      traps: {
        A: "This uses only the most expensive branch, which is wrong for AND cost.",
        B: "This omits one branch cost.",
        D: "This overstates the sum of all three branches.",
      },
    },
    {
      id: 1307,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "In an XOR-block, Path A costs $50 with probability 70%, and Path B costs $110 with probability 30%. What is the expected cost?",
      options: ["A. $60", "B. $68", "C. $80", "D. $160"],
      correctAnswers: [1],
      explanation:
        "Formula used: XOR-block expected cost (Cost = sum of probability x branch cost). Cost = 0.7 x 50 + 0.3 x 110 = 35 + 33 = $68.",
      traps: {
        A: "This is below the correct weighted average.",
        C: "This does not follow the probability-weighted calculation.",
        D: "This incorrectly adds both branch costs as if it were an AND-block.",
      },
    },
    {
      id: 1308,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A resource costs $40 per hour. If an activity takes 90 minutes, what is the activity cost under Activity-Based Costing?",
      options: ["A. $40", "B. $50", "C. $60", "D. $90"],
      correctAnswers: [2],
      explanation:
        "Formula used: Activity-Based Costing (Activity cost = resource rate x time). 90 minutes = 1.5 hours, so cost = 40 x 1.5 = $60.",
      traps: {
        A: "This uses only one hour instead of 1.5 hours.",
        B: "This underestimates the cost for 90 minutes at $40/hour.",
        D: "This confuses minutes and dollars and overstates the result.",
      },
    },
    {
      id: 1309,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A process has three sequential activities with costs of $20, $35, and $15. What is the total process cost?",
      options: ["A. $35", "B. $50", "C. $70", "D. $105"],
      correctAnswers: [2],
      explanation:
        "Formula used: Process cost for sequential activities (Process cost = sum of activity costs). Cost = 20 + 35 + 15 = $70.",
      traps: {
        A: "This uses only one activity cost instead of the full process cost.",
        B: "This omits one activity cost.",
        D: "This overstates the sum of the three activities.",
      },
    },
    {
      id: 1310,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A task normally takes 8 hours and has a 25% probability of rework. Using the rework formula, what is the expected cycle time including rework?",
      options: ["A. 9.60 hours", "B. 10.67 hours", "C. 12.00 hours", "D. 14.00 hours"],
      correctAnswers: [1],
      explanation:
        "Formula used: Rework cycle time (CT_with_rework = task time / (1 - rework probability)). CT = 8 / 0.75 = about 10.67 hours.",
      traps: {
        A: "This does not match the rework formula.",
        C: "This overstates the result and does not follow 8/0.75.",
        D: "This is far above the expected value implied by 25% rework.",
      },
    },
    {
      id: 1311,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A process consists of a 2-hour task, then an XOR decision with Path A taking 3 hours at 60% probability and Path B taking 6 hours at 40% probability, followed by a 1-hour final task. What is the expected total cycle time?",
      options: ["A. 5.2 hours", "B. 7.2 hours", "C. 8.2 hours", "D. 12.0 hours"],
      correctAnswers: [1],
      explanation:
        "Formula used: Sequential + XOR combination. First compute XOR expected time: 0.6 x 3 + 0.4 x 6 = 4.2 hours, then add sequential tasks: 2 + 4.2 + 1 = 7.2 hours.",
      traps: {
        A: "This is too low because it undercounts the XOR block.",
        C: "This overstates the expected time for the XOR block.",
        D: "This incorrectly treats the XOR as if all paths were executed.",
      },
    },
    {
      id: 1312,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A process has a 3-hour activity, then an AND-block with branches of 4 hours and 7 hours, followed by a 2-hour activity. What is the total cycle time?",
      options: ["A. 9 hours", "B. 12 hours", "C. 16 hours", "D. 21 hours"],
      correctAnswers: [1],
      explanation:
        "Formula used: Sequential + AND combination. AND-block time = max(branch times) = max(4, 7) = 7 hours, then total CT = 3 + 7 + 2 = 12 hours.",
      traps: {
        A: "This undercounts the full process and ignores one stage.",
        C: "This incorrectly sums both parallel branch times.",
        D: "This overstates the process duration.",
      },
    },
    {
      id: 1313,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "According to Little's Law, if the average number of cases in the system is 24 and the throughput is 6 cases per hour, what is the average time in system?",
      options: ["A. 2 hours", "B. 4 hours", "C. 18 hours", "D. 30 hours"],
      correctAnswers: [1],
      explanation:
        "Formula used: Little's Law (L = lambda x W, so W = L / lambda). W = 24 / 6 = 4 hours.",
      traps: {
        A: "This would require L = 12 at 6 cases/hour.",
        C: "This does not result from 24/6.",
        D: "This incorrectly adds or misapplies the variables.",
      },
    },
    {
      id: 1314,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "According to Little's Law, if the average number of cases in the system is 15 and the average time in system is 0.5 hour, what is the throughput?",
      options: [
        "A. 7.5 cases/hour",
        "B. 15 cases/hour",
        "C. 30 cases/hour",
        "D. 45 cases/hour",
      ],
      correctAnswers: [2],
      explanation:
        "Formula used: Little's Law (L = lambda x W, so lambda = L / W). lambda = 15 / 0.5 = 30 cases per hour.",
      traps: {
        A: "This divides by 2 instead of 0.5.",
        B: "This incorrectly ignores the time component.",
        D: "This overstates the throughput from the given values.",
      },
    },
    {
      id: 1315,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "Two workers are available, each with 5 productive hours per day. If each case requires 20 minutes of work, what is the combined daily capacity?",
      options: ["A. 20 cases/day", "B. 25 cases/day", "C. 30 cases/day", "D. 50 cases/day"],
      correctAnswers: [2],
      explanation:
        "Formula used: Capacity (Capacity = total productive time / time per case). Total productive time = 2 x 5 hours = 10 hours = 600 minutes, so capacity = 600 / 20 = 30 cases per day.",
      traps: {
        A: "This underestimates the capacity from 600 available minutes.",
        B: "This does not match 600/20.",
        D: "This would require only 12 minutes per case, not 20.",
      },
    },
    {
      id: 1316,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A team can process 30 cases per day, but demand is 36 cases per day. Which conclusion is most accurate?",
      options: [
        "A. Utilization is 83%, so waiting time should fall",
        "B. Utilization is 100%, so the system is perfectly balanced",
        "C. Utilization is 120%, so the resource is overloaded",
        "D. Utilization is 150%, so capacity exactly matches demand",
      ],
      correctAnswers: [2],
      explanation:
        "Formula used: Utilization (Utilization = demand / capacity). Utilization = 36 / 30 = 1.2 = 120%, so demand exceeds capacity and the resource is overloaded.",
      traps: {
        A: "83% would come from reversing the ratio.",
        B: "At 100%, demand would equal capacity, which is not the case here.",
        D: "150% is not the correct ratio and would still imply overload, not balance.",
      },
    },
    {
      id: 1317,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Easy",
      question:
        "If a process has a cycle time of 90 minutes and a processing time of 18 minutes, how much waiting time does it contain?",
      options: ["A. 18 minutes", "B. 54 minutes", "C. 72 minutes", "D. 108 minutes"],
      correctAnswers: [2],
      explanation:
        "Formula used: Waiting Time (WT = CT - PT). WT = 90 - 18 = 72 minutes.",
      traps: {
        A: "This repeats the processing time rather than computing waiting time.",
        B: "This subtracts incorrectly.",
        D: "This is above the total cycle time and impossible here.",
      },
    },
    {
      id: 1318,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "An AND-block has three branches with times of 3, 5, and 9 hours and costs of $20, $30, and $40 respectively. Which pair correctly states the AND-block cycle time and cost?",
      options: [
        "A. 9 hours and $90",
        "B. 17 hours and $40",
        "C. 9 hours and $40",
        "D. 17 hours and $90",
      ],
      correctAnswers: [0],
      explanation:
        "Formula used: AND-block time and cost. Time = max(branch times) = max(3, 5, 9) = 9 hours, while cost = sum of branch costs = 20 + 30 + 40 = $90.",
      traps: {
        B: "This swaps the AND rules by summing time and taking only one branch's cost.",
        C: "The time is correct, but AND cost must include all branches.",
        D: "This incorrectly sums branch times instead of taking the maximum.",
      },
    },
    {
      id: 1319,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Hard",
      question:
        "A process always incurs a fixed activity cost of $40, then follows an XOR-block where Path A costs $10 with probability 80% and Path B costs $70 with probability 20%. What is the expected total process cost?",
      options: ["A. $56", "B. $62", "C. $72", "D. $120"],
      correctAnswers: [1],
      explanation:
        "Formula used: Fixed cost + XOR expected cost. XOR cost = 0.8 x 10 + 0.2 x 70 = 22, then total process cost = 40 + 22 = $62.",
      traps: {
        A: "This underestimates the XOR contribution.",
        C: "This overstates the expected XOR cost.",
        D: "This incorrectly adds both XOR branch costs as if all paths were taken.",
      },
    },
    {
      id: 1320,
      lectureId: 7,
      type: "multiple-choice",
      difficulty: "Medium",
      question:
        "A process keeps the same 15-minute processing time, but redesign reduces cycle time from 75 minutes to 30 minutes. What is the new CTE?",
      options: ["A. 20%", "B. 35%", "C. 50%", "D. 75%"],
      correctAnswers: [2],
      explanation:
        "Formula used: Cycle Time Efficiency (CTE = PT / CT x 100%). New CTE = 15 / 30 x 100% = 50%.",
      traps: {
        A: "20% was the old CTE before redesign: 15/75 x 100%.",
        B: "This does not come from 15/30.",
        D: "This would require 22.5 minutes of processing in a 30-minute cycle.",
      },
    },
  ];

  window._BPS301_DATA.push({ quiz });
})();
