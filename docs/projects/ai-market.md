# AI Market Intelligence

**让 AI 判断有证据、有时间边界 · Evidence and temporal integrity for AI**

将信息采集、模型推理与事后验证连接起来，关注证据溯源、时间一致性和结果可复现。

Connecting evidence, model reasoning and outcome verification with traceable sources and temporal integrity.

![AI Market Intelligence architecture and data flow](../assets/diagrams/ai-market.svg)

## 需要解决的问题 / The problem

模型输出观点很容易，确认它在当时使用了什么证据、后来如何验证更难。

Generating a forecast is easy; tracing what was known at the time and verifying the outcome is harder.

## 我的工程贡献 / My contribution

设计 Evidence → Event → Forecast → Verification → Reputation 链路，接入真实行情与 SEC 数据，实现 PIT、结算门控与回归验证。

Built the evidence-to-verification pipeline, integrated market and SEC data, and implemented point-in-time checks, settlement gates and regression verification.

## 关键设计取舍 / Design trade-off

宁可明确返回证据不足或等待数据，也不以过期行情或未来信息生成看似完整的结论。

Explicitly return insufficient evidence or await data rather than use stale prices or future information.

## 产品视角 / Product perspective

把用户任务定义为理解证据与判断可靠性；通过只读结果和来源追溯建立可信度，避免把预测包装为收益承诺。

Focus on understanding evidence and reliability through read-only results and source tracing, without presenting predictions as promised returns.

## 当前实现 / Current implementation

已实现证据与验证链路、时间边界检查和结算门控。

Evidence and verification pipeline with point-in-time checks and settlement gates.

**Stack / Focus:** FastAPI · PostgreSQL · Point-in-Time

<!-- 在取得真实公开截图后，可在这里引用 ../assets/screenshots/ 下的图片。 -->

[返回主页 / Profile](../../README.md) · [项目网站 / Website](https://geemakerlee.github.io/GeeMakerLee/#ai-market) · [English case study](https://geemakerlee.github.io/GeeMakerLee/?lang=en#ai-market)
