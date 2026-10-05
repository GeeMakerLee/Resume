# Story2Game

**让故事成为可执行的世界 · From stories to executable worlds**

把自然语言故事转换为结构化游戏，用验证、修复与重新生成闭环处理不可靠的输出。

Turning natural-language stories into structured games through generation, verification and recovery.

![Story2Game architecture and data flow](../assets/diagrams/story2game.svg)

## 需要解决的问题 / The problem

开放式故事生成容易产生无法执行的规则和不一致的状态。目标是让创作者从故事出发，得到可运行的游戏。

Open-ended generation can produce invalid rules and inconsistent state. The goal is a runnable game built from a creator’s story.

## 我的工程贡献 / My contribution

设计 GamePlan 与结构化 DSL，连接编译器和确定性运行时；构建 Repair、Regeneration 与 Re-verification；实现 Phaser 2D 交互切片。

Designed the GamePlan and structured DSL, compiler and deterministic runtime; built repair, regeneration and re-verification; implemented a Phaser 2D interaction slice.

## 关键设计取舍 / Design trade-off

用受约束的 DSL 换取可执行性；验证通过后才接受结果，而非依赖模型的自我判断。

Trade unrestricted output for an executable DSL. Accept results through validation rather than model self-assessment.

## 产品视角 / Product perspective

首个核心任务是“故事到可玩样例”。将复杂编辑和多模态素材延后，优先验证生成结果能否运行、失败后能否恢复。

Start with story-to-playable. Defer complex editing and multimodal assets to focus on executable results and recovery.

## 当前实现 / Current implementation

已实现生成与验证链路，以及 Phaser 2D 交互切片。

Generation, verification and a Phaser 2D interaction slice are implemented.

**Stack / Focus:** Agent Pipeline · DSL · Phaser

<!-- 在取得真实公开截图后，可在这里引用 ../assets/screenshots/ 下的图片。 -->

[返回主页 / Profile](../../README.md) · [项目网站 / Website](https://geemakerlee.github.io/GeeMakerLee/#story2game) · [English case study](https://geemakerlee.github.io/GeeMakerLee/?lang=en#story2game)
