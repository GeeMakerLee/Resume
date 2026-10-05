# Visual CEP Rule Builder

**把专业规则交还给领域专家 · Let domain experts author their own rules**

用可视化节点表达复杂流式监测规则，再转为类型化 AST、自然语言解释与执行代码。

Visual authoring of streaming rules, translated into a typed AST, explanation and executable code.

![Visual CEP Rule Builder architecture and data flow](../assets/diagrams/rule-builder.svg)

## 需要解决的问题 / The problem

非技术领域专家理解业务条件，却难以直接编写复杂事件处理代码。

Domain experts understand monitoring conditions but may not be able to write complex event processing code.

## 我的工程贡献 / My contribution

设计 RuleGraph 与 AST 映射、拓扑重构和约束验证；实现条件、逻辑和时间节点，以及 StreamSQL / Flink CEP 输出。

Designed graph-to-AST mapping, topological reconstruction and constraint validation; implemented predicate, logic and temporal nodes with StreamSQL / Flink CEP output.

## 关键设计取舍 / Design trade-off

限制节点组合并给出可理解的错误解释，在表达能力与正确执行之间取得平衡。

Constrain node combinations and explain errors clearly to balance expressive power and valid execution.

## 产品视角 / Product perspective

围绕“选择指标—组合条件—设置窗口—理解规则”的用户任务设计交互，让规则解释成为验证意图的一部分。

Structure the flow around selecting a metric, combining conditions, setting a window and understanding the rule. Use explanations to check intent.

## 当前实现 / Current implementation

在 TU Berlin DIMA Lab 开发的可视化规则构建工具。

Visual rule authoring developed at TU Berlin DIMA Lab.

**Stack / Focus:** React · Typed AST · Flink CEP

<!-- 在取得真实公开截图后，可在这里引用 ../assets/screenshots/ 下的图片。 -->

[返回主页 / Profile](../../README.md) · [项目网站 / Website](https://geemakerlee.github.io/GeeMakerLee/#rule-builder) · [English case study](https://geemakerlee.github.io/GeeMakerLee/?lang=en#rule-builder)
