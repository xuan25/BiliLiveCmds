# BiliLiveCmds

总结b站直播实时接口中的命令类型

## 归档文件

|文件名|备注|
|----|----|
|raw_app.js|原始代码归档|
|raw_cmd_switch_case.js|指令判断相关的原始代码片段|
|sum_cmd_list.js|所有指令的列表|

## 备注

### 关于用户类型

 - *see raw_app.js @ line 6515*

|ID|关键字|备注|
|----|----|----|
|1|Normal|一般用户|
|2|Manager|房管|
|3|Fans|粉丝|
|4|Vip|月费老爷|
|5|SVip|年费老爷|
|6|GuardJian|舰长|
|7|GuardTi|提督|
|8|GuardZong|总督|

### 关于 INTERACT_WORD 指令

#### 消息类型 (data.msg_type 字段)

 - *see raw_app.js @ line 18348*
 - *see raw_app.js @ line 6508*

|ID|关键字|备注|
|----|----|----|
|1|Entry|进入 (对于舰长/提督/总督: 光临)|
|2|Attention|关注了|
|3|Share|分享了|
|4|SpecialAttention|特别关注了|
|5|MutualAttention|互粉了|

## Todo

- [ ] 对命令进行采样并对其作用及数据结构进行解析

