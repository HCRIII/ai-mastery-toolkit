# Operations Dashboard Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Building Operational Visibility for Orchestration Systems**

A strong operations dashboard gives you **real-time insight** into how your orchestration system is performing. This template provides the metrics, layouts, and thresholds you need to build your own dashboard in tools like Google Sheets, Tableau, or custom dashboards.

---

## Part 1: Essential Metrics to Track

### 1.1 Success & Reliability Metrics

These tell you **whether your system works**:

| Metric | Formula | Interpretation | Red Flag |
|--------|---------|-----------------|----------|
| **Success Rate** | (successful runs / total runs) × 100 | What % of workflows complete without errors? | < 95% |
| **Failure Rate** | (failed runs / total runs) × 100 | What % fail and why? | > 5% |
| **Completion Time** | Time from trigger to final output | How long does one run take? | > 2× expected time |
| **Retry Rate** | (retried steps / total steps) × 100 | How often do steps fail initially? | > 10% |
| **Availability** | (uptime / total time) × 100 | Is the system accessible? | < 99.5% |

**Daily check questions:**
- Did any critical workflows fail today?
- Are there patterns in failures (same step, same time, specific input type)?
- Is completion time increasing or stable?

### 1.2 Performance Metrics

These tell you **how fast your system runs**:

| Metric | Formula | Interpretation | Good Range |
|--------|---------|-----------------|------------|
| **Average Run Time** | Sum of all run times / number of runs | Average execution time per workflow | Task-dependent (10s-5m typical) |
| **P95 Run Time** | 95th percentile run time | Worst 5% of runs take how long? | ≤ 2× average |
| **Step Latency** | Time for individual step to complete | Bottleneck identification | Should be consistent |
| **Queue Depth** | Number of pending executions | How backlogged are you? | < 20 pending (task-dependent) |
| **Throughput** | Runs completed per hour/day | How many workflows per period? | Task-dependent |

**Weekly check questions:**
- Is average run time increasing (indicates degradation)?
- Which single step is slowest?
- Are we queuing up work (demand > capacity)?

### 1.3 Cost Metrics

These tell you **what your system costs**:

| Metric | Formula | Interpretation | Red Flag |
|--------|---------|-----------------|----------|
| **Cost per Run** | Total API costs / number of runs | Average cost per workflow execution | Increases weekly = optimization needed |
| **Cost per Successful Run** | Total API costs / successful runs | Cost of each revenue-generating run | Higher than cost/run = check failures |
| **API Call Efficiency** | Tokens sent / tokens received | Are we wasting API calls? | > 2:1 indicates inefficiency |
| **Model Cost Breakdown** | Cost by model (GPT-4 vs 3.5, Claude Opus vs Haiku) | Which models consume budget? | Expensive models on trivial tasks? |
| **Daily Spend** | Total API costs per day | Are we on budget? | > expected/day = investigate |

**Monthly check questions:**
- Are we using the cheapest model for each task?
- Can we reduce API calls (combine steps, cache results)?
- Is cost per run increasing or stable?

### 1.4 Quality Metrics

These tell you **whether outputs are good**:

| Metric | Formula | Interpretation | Target |
|--------|---------|-----------------|--------|
| **Correctness** | (accurate outputs / sampled outputs) × 100 | How many outputs are correct? | > 95% |
| **Completeness** | (outputs with all fields / total outputs) × 100 | Do outputs have all required data? | 100% |
| **Relevance** | (relevant outputs / total outputs) × 100 | Are outputs addressing the input? | > 90% |
| **User Satisfaction** | (positive feedback / total feedback) × 100 | Do users like the outputs? | > 80% |
| **Rework Rate** | (outputs requiring human review / total) × 100 | How many outputs need fixes? | < 5% |

**Measurement approach:**
- Sample 5-10 runs per day
- Rate outputs on 1-5 scale (1=wrong, 5=perfect)
- Track common issues (missing data, format problems, relevance)

---

## Part 2: Dashboard Layouts

### Layout 1: Executive Dashboard (Daily Snapshot)

**Purpose:** High-level system health for stakeholders

```

 ORCHESTRATION SYSTEM - DAILY DASHBOARD                  
 Last 24 hours  |  This Week  |  This Month              

                                                         
  Success Rate: 97.2%      Workflows Run: 2,341        
  Cost per Run: $0.47      API Cost Today: $1,099      
                                                         
         
   RELIABILITY    PERFORMANCE     COST TREND     
                                                 
   97.2%        45s avg       +3% week       
   70 errors      320s P95        High model     
                  52/sec         used           
         
                                                         
    
   ALERTS & ACTIONS                                  
                                                      
     Step "Generate Summary" slow (78s avg)         
     Error spike in batch 15:30-16:45 (22 fails)   
     Cost optimized: -$200 week over week          
   ℹ  Queue depth normal: 8 pending items           
                                                      
    
                                                         

```

**Key elements:**
- Success rate (prominent)
- Cost per run (to track optimization)
- Critical alerts (something needs attention)
- Comparison to targets/yesterday

### Layout 2: Operations Dashboard (Weekly Deep Dive)

**Purpose:** For operations teams running the system

```

 ORCHESTRATION OPERATIONS DASHBOARD - WEEK OF FEB 3-9           

                                                                
 RELIABILITY METRICS              PERFORMANCE METRICS          
                       
 Success Rate:   97.2%    Avg Run Time: 45s   
 Failure Rate:    2.8%    P95 Run Time: 320s         
 Completion:    100%              Throughput:  52/sec         
                                                                
 COST ANALYSIS                    QUALITY SAMPLING             
                       
 Daily Spend:  $7,690     Correctness: 96.2% 
 Cost/Run:     $0.47      Completeness: 99.8%        
 Week Trend:     +3%              Rework Rate:  3.5%       
 GPT-4 Cost:     45%              User Feedback: 82%         
 Claude Cost:    48%                                           
 Cheaper Cost:    7%                                           
                                                                
 BOTTLENECK ANALYSIS              ERROR ANALYSIS              
                       
 Step Latencies (avg):             Error Types (count):       
  1. Generate Summary: 78s         API Rate Limit: 15        
  2. Classify: 34s                Timeout: 28               
  3. Extract Data: 12s            Format Error: 18          
  4. Review: 5s                   Logic Error: 9            
                                                                
 ACTIONS TAKEN THIS WEEK                                       
 
  Switched "Generate Summary" from GPT-4 to Claude 3.5       
  Added caching to "Extract Data" step (-$150 cost)          
 ⏳ Testing parallelization of Review step (in progress)      
 ⏳ Investigating rate limit errors (root cause analysis)      
                                                                

```

**Key elements:**
- Side-by-side reliability and performance
- Cost breakdown by model
- Specific step latencies (identifies bottlenecks)
- Actions taken (shows continuous improvement)
- Error categorization (shows where to focus)

### Layout 3: Optimization Dashboard (Monthly Review)

**Purpose:** Identify trends and plan improvements

```

 MONTHLY OPTIMIZATION REVIEW - JANUARY 2026                      

                                                                 
 TREND ANALYSIS (4-WEEK ROLLING)                                
                                                                 
 Success Rate       95.0% → 96.2% → 96.8% → 97.2% ↑ GOOD     
 Cost per Run       $0.58 → $0.52 → $0.49 → $0.47 ↓ GOOD     
 Avg Run Time       52s   → 48s   → 46s   → 45s   ↓ GOOD     
 Queue Depth        25    → 18    → 12    → 8     ↓ GOOD     
 User Satisfaction  76%   → 79%   → 81%   → 82%   ↑ GOOD     
                                                                 
 MONTH-OVER-MONTH IMPROVEMENTS                                 
   
 Metric                     January   December   Change      
   
 Total Workflows Executed   156,240   142,100    +10.0%      
 Success Rate               97.2%     95.8%      +1.4 pts    
 Total Cost                 $73,427   $85,342    -13.9%      
 Cost per Run               $0.47     $0.60      -21.7%      
 Avg Completion Time        45s       58s        -22.4%      
 User Satisfaction          82%       77%        +5 pts      
                                                                 
 TOP 3 OPPORTUNITIES FOR NEXT MONTH                            
   
                                                                 
 1. Parallelize Classify + Extract (est. -8s, -10% cost)       
    Effort: Medium | ROI: High | Owner: [name]                 
    Status: Technical design phase                              
                                                                 
 2. Switch Review step to cheaper model (est. -12% cost)       
    Effort: Low | ROI: High | Owner: [name]                    
    Status: Pending A/B test results                            
                                                                 
 3. Implement result caching (est. -20% cost, -15s time)       
    Effort: High | ROI: Very High | Owner: [name]              
    Status: Proof of concept stage                              
                                                                 

```

**Key elements:**
- Trend lines (is it improving or degrading?)
- Month-over-month comparison
- Specific improvement opportunities
- ROI and effort estimates for next work

---

## Part 3: Alert Thresholds

Set alerts for when metrics cross critical thresholds. These prevent surprises.

### By Priority Level

**CRITICAL (Alert immediately, page if 24/7)**
- Success rate drops below 90%
- System is completely unavailable
- Cost per run increases > 50% in one day
- API errors > 100/hour
- Queue depth exceeds maximum capacity

**HIGH (Alert within 1 hour)**
- Success rate 90-95%
- Cost per run increases 20-50%
- Any step taking > 3× expected time
- Database or API connectivity issues
- > 5 consecutive failures on same input

**MEDIUM (Review within business day)**
- Success rate 95-98%
- Cost per run increases 5-20%
- New error type appearing
- User satisfaction drops > 5%
- P95 latency increasing

**LOW (Weekly review)**
- Cost per run gradually increasing (< 5%)
- Throughput decreasing
- New warnings in logs
- User feedback changes (trends)

---

## Part 4: Weekly Report Format

Run this report every Monday morning to track system health:

```
WEEKLY ORCHESTRATION REPORT
Date: Monday, February 10, 2026
Reporting Period: Feb 3-9, 2026



EXECUTIVE SUMMARY

 System healthy - all metrics in target range
↑ User satisfaction increased to 82% (highest all month)
↓ Cost per run down to $0.47 (20% reduction vs January)
 One investigation ongoing: rate limit spikes Feb 5 15:30-16:45



METRICS SNAPSHOT (vs targets)

Success Rate:        97.2% (target: >95%) 
Cost per Run:        $0.47 (target: <$0.50) 
Avg Completion Time: 45s (target: <60s) 
User Satisfaction:   82% (target: >75%) 
Rework Rate:         3.5% (target: <5%) 



INCIDENT SUMMARY

[Describe any incidents, root causes, actions taken]

Incident 1: Rate Limit Spike (Resolved)
- Time: Feb 5, 15:30-16:45 UTC
- Impact: 22 failed runs (0.8% of day's volume)
- Root Cause: Unexpected traffic surge from webhook
- Resolution: Added rate limiting queue (deployed Feb 6)
- Prevention: Monitoring webhook frequency + alerts



COST ANALYSIS

Total Cost:    $7,690 (week)
Daily Average: $1,099
Top Models:
  - Claude 3.5: 48% of cost ($3,691)
  - GPT-4: 45% of cost ($3,461)
  - Other: 7% of cost ($538)

Cost Optimization Wins This Week:
  - Moved "Generate Summary" to Claude 3.5 (was GPT-4): -$150
  - Added caching to "Extract Data": -$50
  - Total weekly savings: -$200



PERFORMANCE ANALYSIS

Bottleneck: "Generate Summary" step (78s avg, up from 65s)
  → Investigation: Increased input complexity
  → Action: A/B testing prompt refinement (Feb 10)
  → Expected improvement: -20% latency

Queue Analysis: 8 items pending (normal)
  → Capacity: 52 workflows/sec
  → Peak: 48 workflows/sec (Feb 8 14:00)
  → Headroom: Healthy



QUALITY SAMPLING

[Weekly quality samples: 5 runs per day, 35 total]

Correctness: 34/35 correct (97.1%) - Target: 95% 
Completeness: 35/35 complete (100%) - Target: 100% 
Relevance: 33/35 relevant (94.3%) - Target: 90% 

Issues Found:
  - 1 output missing field (incorrect input format)
  - 1 output off-topic (edge case input)

Trend: Quality stable, no significant changes



NEXT WEEK PRIORITIES

1. Resolve "Generate Summary" latency (design parallel attempt)
2. Complete A/B test for prompt refinement
3. Implement result caching POC
4. Investigate Feb 5 rate limits (deeper analysis)

Owner: [Name]
Next Review: Monday, February 17, 2026


```

---

## Part 5: Implementation Examples

### Google Sheets Dashboard

**Columns:**
- Date
- Total Runs
- Successful Runs
- Failed Runs
- Success Rate (formula)
- Total Cost
- Cost per Run (formula)
- Avg Run Time
- Queue Depth
- User Satisfaction
- Notes

**Formulas:**
```
Success Rate = B2 / (B2 + C2)
Cost per Run = E2 / B2
```

**Conditional Formatting:**
- Success Rate < 95% → Red
- Cost per Run > threshold → Orange
- All other cells → Green

### Tableau/Looker Dashboard

**Visualizations:**
1. Success rate trend (line chart, 30-day)
2. Cost per run trend (line chart, 30-day)
3. Run time distribution (box plot)
4. Cost by model (pie chart)
5. Errors by type (bar chart)
6. Step latencies (horizontal bar chart)
7. Queue depth over time (area chart)
8. User satisfaction trend (line chart)

### Custom Dashboard (JavaScript/React)

**Key data sources:**
- API execution logs
- Cost tracking system
- User feedback database
- Performance metrics database

**Real-time updates:**
- Refresh metrics every 5 minutes
- Alert system triggers on thresholds
- Historical data stored for trending

---

## Quick Reference: When to Investigate

| If This Happens | Investigate |
|-----------------|-------------|
| Success rate drops > 2% in one day | Root cause of failures |
| Cost per run increases > 10% | Which steps got expensive? |
| P95 latency > 2× normal | Which step is slow? |
| New error type appears 5+ times | Data issue or logic bug? |
| User satisfaction drops | Quality degradation or changing expectations? |
| Queue depth exceeds capacity | Do we need horizontal scaling? |
| Same error on same input repeatedly | Edge case or systematic issue? |

---

## Final Notes

- **Start simple:** Track 3-5 metrics before adding 20
- **Automate collection:** Don't manually enter numbers
- **Review regularly:** Daily check (5 min), weekly deep dive (1 hour), monthly review (2 hours)
- **Act on data:** If metric is wrong, change something
- **Share insights:** Keep team aligned on system health
