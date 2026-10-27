# Phase 0 Repository Inventory

Audit date: 2026-10-27  
Machine scope: `/home/ubuntu`, public repositories under `github.com/James-Sunday`, and the supplied `/home/ubuntu/portfolio` workspace.

This inventory is factual and provisional. A repository is not considered complete until its project-specific verification gate has been rerun on the current source.

## Environment

| Capability | Observed state |
|---|---|
| Docker | Engine 28.1.1 available |
| Node.js | 22.23.2 available |
| npm | 10.9.8 available |
| Python | System Python 3.8.10; Python 3.11.15 available through the editor environment |
| uv | Available |
| GitHub CLI | Not installed; no GitHub authentication established by this audit |
| Azure CLI | Not installed |
| Vercel CLI | Not installed |
| PostgreSQL/Redis host CLIs | Not installed; container images can provide services |

## Project inventory

| Order | Project | Repository/source | Audit classification | Evidence and immediate gap |
|---:|---|---|---|---|
| 1 | ConverlyAI | No source repository found locally or among public `James-Sunday` repositories | Source unavailable | Only the public product website and the portfolio copy exist. Internal implementation, tests, deployment, screenshots, and repository authorization cannot be verified. |
| 2 | Enterprise AI Knowledge Hub | `/home/ubuntu/RAG_system/enterprise-rag-api` · `James-Sunday/enterprise-RAG-knowledge-assistant` | Substantially implemented; verification required | FastAPI, React/TypeScript, migrations, PostgreSQL/pgvector Compose service, Redis, MinIO, worker, ACL-aware retrieval, tests, evaluation artifacts, and Azure Bicep exist. The local branch is one commit ahead of public `main`; current claims and all gates must be rerun. |
| 3 | ServiceOps AI | `/home/ubuntu/serviceops-ai-agent` | Missing at audit start | Directory created for implementation; no source existed. |
| 4 | RiskOps AI | `/home/ubuntu/riskops-ai` | Working local vertical slice | Deterministic rules, case workflow, mock summary provider, role gate, audit events, SQLAlchemy schema, tests, Compose definition, and a Next.js operations screen exist. |
| 5 | DocFlow AI | `/home/ubuntu/docflow-ai` | Missing at audit start | Directory created for implementation; no source existed. |
| 6 | CareDesk AI | `/home/ubuntu/healthcare-support-ai` | Missing at audit start | Directory created for implementation; no source existed. |
| 7 | LLM Evaluation & Observability | `/home/ubuntu/llm-eval-observability` | Missing at audit start | Directory created for implementation; no source existed. |
| 8 | Production AI Gateway | `/home/ubuntu/production-ai-gateway` | Missing at audit start | Directory created for implementation; no source existed. |
| 9 | Task Management API | `/home/ubuntu/Task-Management-API` · `James-Sunday/Task-Management-API` | Implemented baseline; audit and upgrade required | FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT, Redis fallback, Docker, and four test modules exist. No GitHub Actions workflow was present in the inspected public source; typing, security, failure, migration, and container verification are pending. |
| 10 | TemporalFix | `/home/ubuntu/Desktop/temporalfix` · `James-Sunday/temporalfix` | Mature public library; current verification required | Published-package metadata, adapters, benchmarks, strict documentation, security material, three workflows, and a broad test suite exist. Current PyPI install, CI configuration, tests, types, and release links must be rechecked without redesigning the package. |
| 11 | LeastPrivilege | `/home/ubuntu/Documents/new challenge` · `James-Sunday/leastprivilege-agent` | Substantially implemented; current verification required | Agent workflow, deterministic verifier, synthetic benchmark, kind evaluation, Dockerfile, security and reproduction documents exist. The local repository has one unrelated untracked README; claims and current gates require rerun. |

## Other local repositories reviewed

- `/home/ubuntu/fullLLMandRAG` contains only an uncommitted package skeleton with no application source. It is not ConverlyAI and is excluded.
- Other computer-vision, robotics, maintenance, and experimental repositories under `/home/ubuntu` do not correspond to the required eleven-project portfolio and will not be modified.
- The private project excluded by the specification was not searched for, named, opened, or incorporated.

## Portfolio repository state

`/home/ubuntu/portfolio` was not a Git repository at audit time. It contained a Vite/static portfolio created in the prior checkpoint. That implementation has since been replaced with the Next.js/TypeScript/Tailwind portfolio and RiskOps has been separated into its own local repository.

## External blockers identified

1. ConverlyAI source access or an authorized repository path is absent. The public site cannot prove internal architecture or generate source-backed screenshots of authenticated application surfaces.
2. GitHub repository creation/push cannot be performed until authentication is available.
3. Azure and Vercel deployment cannot be executed until their respective authentication and subscription/project context are available.

These blockers do not prevent local implementation, provider contracts, infrastructure definitions, tests, builds, or deployment validation from continuing.
