# Example Plans

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI skill definition with capabilities and usage patterns
**Status:** Final

---

This document provides complete examples of different plan types to demonstrate the plan-generator skill's output format.

---

## Example 1: Implementation Plan

```markdown
# Database Migration to PostgreSQL - Implementation Plan

**Date:** 2026-02-08
**Status:** Proposal
**For:** Engineering Team

---

## Executive Summary

We need to migrate from MySQL to PostgreSQL to support advanced JSON queries and better scalability. I recommend a three-phase approach over 6 weeks with zero downtime, starting with read replicas and gradual traffic shifting. This balances safety with reasonable timeline.

---

## Context & Analysis

**Current State:**
- MySQL 8.0 with 500GB data
- 10K daily active users
- Performance degrading with complex queries
- JSON data requires workarounds

**Problem:**
- Query performance declining (p95 latency >2s)
- JSON operations are inefficient
- Scaling limitations appearing

### Key Considerations
- Zero downtime requirement (business critical)
- Data integrity must be guaranteed
- Team has limited PostgreSQL experience
- Budget allows for temporary dual-database operation

---

## Options

### Option A: Big Bang Migration

**Description:** Schedule maintenance window, migrate everything at once

**Pros:**
- Fastest calendar time (1 weekend)
- Simplest approach conceptually
- Lower temporary infrastructure costs

**Cons:**
- High risk (all-or-nothing)
- Requires downtime (unacceptable for business)
- Difficult to rollback if issues occur
- High stress on team

**Estimated Effort:** 2 weeks prep + 1 weekend execution

### Option B: Gradual Migration with Dual-Write

**Description:** Run both databases, gradually shift traffic

**Pros:**
- Zero downtime
- Can test thoroughly in production
- Easy rollback at any point
- Lower risk

**Cons:**
- More complex implementation
- Higher temporary infrastructure costs
- Longer calendar time (6 weeks)
- Requires synchronization logic

**Estimated Effort:** 3 weeks prep + 3 weeks migration

### Option C: Service-by-Service Migration

**Description:** Migrate one microservice at a time

**Pros:**
- Extremely low risk
- No synchronization needed
- Team learns as they go

**Cons:**
- Very long timeline (4-6 months)
- Mixed database environment complexity
- Requires service isolation work first

**Estimated Effort:** 2 months prep + 4 months migration

---

## Recommendation

**Recommended Approach:** Option B (Gradual Migration with Dual-Write)

**Rationale:**
Zero downtime is a hard requirement, making Option A impossible. Option C's 6-month timeline is too slow given our performance issues. Option B provides the best balance of safety and speed, with clear rollback points throughout.

**Key Success Factors:**
- Robust data synchronization (use existing tools like pg_chameleon)
- Comprehensive monitoring at each phase
- Clear rollback procedures documented
- Team PostgreSQL training before migration starts

---

## Implementation Plan

**Phase 1: Setup & Validation (2 weeks)**
- Week 1: Set up PostgreSQL cluster, configure replication from MySQL
- Week 2: Validate data sync, test read queries, train team
- **Milestone:** Read replica serving 100% accurate data

**Phase 2: Dual-Write Implementation (2 weeks)**
- Week 3: Implement dual-write logic in application layer
- Week 4: Deploy dual-write, monitor synchronization lag
- **Milestone:** Both databases receiving all writes

**Phase 3: Traffic Migration (2 weeks)**
- Week 5: Shift 10% → 50% → 90% of reads to PostgreSQL
- Week 6: Shift 100% of writes to PostgreSQL, verify MySQL as backup
- **Milestone:** PostgreSQL is primary database

**Post-Migration:**
- Week 7: Monitor performance, decommission MySQL after 1 week of stability

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Data sync lag | High | Medium | Real-time monitoring, automated alerts, pause migration if lag >5s |
| PostgreSQL performance issue | High | Low | Load testing before each phase, keep MySQL active for rollback |
| Application bugs in dual-write | Medium | Medium | Feature flags for instant rollback, comprehensive integration tests |
| Team PostgreSQL knowledge gaps | Low | High | 2-week training period, PostgreSQL DBA on-call during migration |

---

## Next Steps

1. **Immediate:** Get stakeholder approval for 6-week timeline and temporary infrastructure costs (~$5K)
2. **Short-term:** Schedule PostgreSQL training for team (Week 1)
3. **Long-term:** Set up PostgreSQL cluster and replication (Week 1-2)

---

## Questions & Considerations

- Do we have PostgreSQL DBA support available 24/7 during migration?
- Is $5K temporary infrastructure budget approved?
- Can we schedule migration to avoid Q4 feature freeze?
```

---

## Example 2: Decision Proposal

```markdown
# API Gateway Selection - Decision Proposal

**Date:** 2026-02-08
**Status:** Proposal
**For:** Architecture Team

---

## Executive Summary

We need an API gateway to handle authentication, rate limiting, and routing for our microservices. After evaluating Kong, AWS API Gateway, and Traefik, I recommend Kong (open-source) for its balance of features, cost, and operational simplicity.

---

## Context & Analysis

**Current State:**
- 8 microservices handling authentication individually
- No centralized rate limiting
- Manual routing configuration in load balancer

**Goals:**
- Centralized authentication and authorization
- Rate limiting per client
- Request routing and transformation
- API analytics

### Key Considerations
- Budget: Prefer open-source or low ongoing cost
- Team expertise: Strong with Docker/Kubernetes
- Scale: Currently 1M requests/day, expect 10M within year
- Timeline: Need solution in production within 1 month

### Evaluation Criteria (Weighted)
- Features (30%): Authentication, rate limiting, plugins
- Cost (25%): Initial and ongoing expenses
- Operations (25%): Deployment complexity, maintenance
- Performance (20%): Latency, throughput

---

## Options

### Option A: Kong (Open Source)

**Description:** Open-source API gateway with plugin ecosystem

**Pros:**
- Rich plugin ecosystem (100+ plugins)
- Strong community and documentation
- Self-hosted (full control)
- No per-request pricing

**Cons:**
- Requires operational overhead (we manage it)
- Enterprise features require paid tier
- PostgreSQL/Cassandra dependency

**Cost:** $0 + ~$200/mo infrastructure + operational time
**Score:** 85/100 (Features: 27/30, Cost: 22/25, Operations: 20/25, Performance: 16/20)

### Option B: AWS API Gateway

**Description:** Fully managed AWS service

**Pros:**
- Zero operational overhead
- Seamless AWS integration
- Automatic scaling
- Pay-per-request pricing

**Cons:**
- Vendor lock-in
- Higher cost at scale ($3.50 per million requests)
- Limited customization
- AWS-specific knowledge required

**Cost:** ~$3,500/mo at 1M req/day, ~$35K/mo at 10M req/day
**Score:** 72/100 (Features: 24/30, Cost: 12/25, Operations: 23/25, Performance: 13/20)

### Option C: Traefik

**Description:** Modern cloud-native API gateway

**Pros:**
- Excellent Kubernetes integration
- Automatic service discovery
- Simple configuration
- Active development

**Cons:**
- Smaller plugin ecosystem
- Less mature than Kong
- Limited enterprise features
- Smaller community

**Cost:** $0 + ~$150/mo infrastructure + operational time
**Score:** 78/100 (Features: 21/30, Cost: 24/25, Operations: 22/25, Performance: 11/20)

---

## Recommendation

**Recommended Approach:** Option A (Kong Open Source)

**Rationale:**
Kong scores highest overall (85/100) and best addresses our needs:
1. **Cost-effective at scale**: No per-request fees means predictable costs as we grow
2. **Feature-rich**: Plugin ecosystem covers all current needs plus future requirements
3. **Team fit**: Our team's Docker/K8s experience makes operational overhead manageable
4. **Performance**: Proven at high scale (Netflix, Samsung use it)

While AWS API Gateway has lower operational overhead, the cost at 10M req/day ($35K/mo) is prohibitive. Traefik is simpler but lacks the plugin ecosystem we need for advanced features.

**Key Success Factors:**
- Allocate 0.5 FTE for Kong operations and maintenance
- Use Kong's Kubernetes Ingress Controller for easier management
- Start with Kong's declarative configuration for GitOps workflow

---

## Implementation Plan

**Phase 1: Setup (Week 1)**
- Deploy Kong in staging with PostgreSQL backend
- Configure basic authentication and rate limiting plugins
- Test with 2 microservices

**Phase 2: Migration (Weeks 2-3)**
- Migrate remaining 6 microservices to Kong
- Configure custom plugins if needed
- Set up monitoring and alerting

**Phase 3: Production (Week 4)**
- Gradual production rollout (10% → 50% → 100%)
- Monitor performance and error rates
- Decommission old authentication logic

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Performance degradation | High | Low | Load testing before production, keep old routing as backup |
| Operational complexity | Medium | Medium | Allocate dedicated ops time, comprehensive runbooks |
| Plugin bugs | Medium | Low | Thoroughly test plugins in staging, have rollback plan |
| PostgreSQL becomes bottleneck | Low | Low | Use PostgreSQL cluster, consider Cassandra if needed |

---

## Next Steps

1. **Immediate:** Get budget approval for Kong infrastructure (~$200/mo)
2. **Short-term:** Deploy Kong in staging environment (Week 1)
3. **Long-term:** Complete production migration (Weeks 2-4)

---

## Questions & Considerations

- Is 0.5 FTE allocation for Kong operations approved?
- Should we evaluate Kong Enterprise for future needs?
- Do we need external API gateway expertise for initial setup?
```

---

## Example 3: Strategy Document

```markdown
# Product Roadmap Q2 2026 - Strategy

**Date:** 2026-02-08
**Status:** Draft
**For:** Product & Engineering Leadership

---

## Executive Summary

Q2 strategy focuses on retention over acquisition, addressing user churn with three key initiatives: onboarding improvements, power user features, and mobile app. Goal is to reduce 30-day churn from 45% to 30% while maintaining current growth rate.

---

## Context & Analysis

**Current State (Q1 2026):**
- 50K monthly active users (+20% QoQ)
- 45% churn within 30 days (industry avg: 30%)
- 75% of power users request mobile app
- NPS: 42 (good but declining)

**Market Context:**
- 3 new competitors launched in Q1
- Industry moving to mobile-first
- Customer expectation for instant onboarding

### Key Considerations
- Engineering capacity: 4 engineers, 40 story points/sprint
- Budget: $50K for external contractors if needed
- Constraint: Mobile expertise gap on team
- Opportunity: First-mover advantage in mobile for niche

---

## Strategic Priorities

### Priority 1: Reduce Early Churn (40% of effort)

**Goal:** Decrease 30-day churn from 45% to 30%

**Approach:**
- Redesign onboarding flow (guided vs. open exploration)
- Add in-app tutorials and contextual help
- Implement "quick wins" in first session

**Success Metrics:**
- 30-day retention increases to 70%
- Time to first value < 5 minutes
- Completion rate of onboarding >80%

**Timeline:** 6 weeks (Weeks 1-6)

### Priority 2: Retain Power Users (35% of effort)

**Goal:** Increase power user engagement and prevent churn to competitors

**Approach:**
- Build advanced features requested by top 20% users
- Add API access for integrations
- Create "Pro" tier with premium features

**Success Metrics:**
- Power user churn < 5%
- API adoption by 30% of power users
- Pro tier conversion 15% of power users

**Timeline:** 8 weeks (Weeks 3-10)

### Priority 3: Mobile App Launch (25% of effort)

**Goal:** Capture mobile-first users, expand market reach

**Approach:**
- React Native app (iOS + Android simultaneously)
- Focus on core features first (not feature parity)
- Leverage existing API backend

**Success Metrics:**
- 10K mobile app downloads in Q2
- 30-day retention on mobile >40%
- App Store rating >4.0

**Timeline:** 10 weeks (Weeks 1-10), launch Week 11

---

## Resource Allocation

**Engineering (4 FTEs, 40 pts/sprint):**
- Priority 1 (Onboarding): 1.5 engineers, 6 weeks
- Priority 2 (Power Features): 1.5 engineers, 8 weeks
- Priority 3 (Mobile): 1 engineer + external contractor, 10 weeks

**External Resources:**
- Mobile contractor: $40K for React Native development
- Design contractor: $10K for mobile UI/UX

**Total Budget:** $50K

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Mobile app delays | High | High | Start Week 1, weekly check-ins, have contractor ready |
| Onboarding changes hurt activation | Medium | Medium | A/B test new flow, rollback if activation drops >10% |
| Power features don't reduce churn | Medium | Low | User interviews before building, iterate based on feedback |
| Resource constraints | Low | Medium | Prioritize ruthlessly, cut mobile scope if needed |

---

## Success Metrics (Q2 End)

**Primary:**
- 30-day churn: 45% → 30%
- Monthly active users: 50K → 60K (maintain 20% QoQ growth)

**Secondary:**
- NPS: 42 → 50
- Power user churn: <5%
- Mobile app downloads: 10K

**Financial:**
- MRR: $200K → $250K (+25%)
- Pro tier: $50K MRR from new tier

---

## Next Steps

1. **Immediate:** Finalize resource allocation with engineering (Week 1)
2. **Short-term:** Begin onboarding redesign and mobile app development (Week 1)
3. **Long-term:** Monthly strategy review meetings to adjust based on data

---

## Questions & Considerations

- Is $50K contractor budget approved?
- Should we delay mobile app to focus more on retention?
- Do we need product marketing support for Pro tier launch?
- What's the backup plan if mobile app doesn't launch in Q2?
```

---

## Key Patterns Demonstrated

1. **Executive Summary always includes recommendation** - Don't make readers search for the answer

2. **Options clearly show trade-offs** - Pros/cons help readers understand reasoning

3. **Numbers and metrics included** - Makes decisions concrete and measurable

4. **Risks acknowledged upfront** - Shows thoroughness and builds trust

5. **Next steps are actionable** - Reader knows exactly what to do next

6. **Visual structure aids scanning** - Headers, tables, bullets make it easy to skim

7. **Appropriate detail level** - Technical details when needed, high-level for strategy

Use these examples as templates, adapting structure and sections to fit the specific plan type and audience.
