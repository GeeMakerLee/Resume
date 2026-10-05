# AI Social Twin

**个性化，不止一种说话风格 · Personalization shaped by relationships**

结合共享记忆与关系条件建模，让同一分身在不同关系中呈现不同的互动方式。

Combining shared memory and relationship-conditioned behavior to personalize interactions.

![AI Social Twin architecture and data flow](../assets/diagrams/social-twin.svg)

## 需要解决的问题 / The problem

统一的人设提示难以表达同一个人面对不同朋友时的互动差异。

A single persona prompt misses how one person communicates differently across relationships.

## 我的工程贡献 / My contribution

设计语音处理、说话人识别、行为特征、记忆与生成链路；实现分批处理和 checkpoint 恢复；构建消融与盲评框架。

Designed speech processing, speaker identification, behavior profiles, memory and generation; implemented checkpoint recovery and ablation/blind evaluation.

## 关键设计取舍 / Design trade-off

区分人设、记忆与关系的贡献；长音频分批处理，避免一次失败导致全量重算。

Separate the contributions of persona, memory and relationship; process long audio in batches to support recovery.

## 产品视角 / Product perspective

以熟人交流为探索场景，重点验证身份风格和关系感知；真实语音与私人对话不作为公开展示素材。

Explore familiar-person interactions, evaluating identity and relationship sensitivity while keeping private conversations and voices out of public demos.

## 当前实现 / Current implementation

个性化对话原型，包含批处理恢复与消融、盲评框架。

Personalized dialogue prototype with batch recovery and ablation/blind evaluation.

**Stack / Focus:** Memory · Relationship · Evaluation

<!-- 在取得真实公开截图后，可在这里引用 ../assets/screenshots/ 下的图片。 -->

[返回主页 / Profile](../../README.md) · [项目网站 / Website](https://geemakerlee.github.io/GeeMakerLee/#social-twin) · [English case study](https://geemakerlee.github.io/GeeMakerLee/?lang=en#social-twin)
