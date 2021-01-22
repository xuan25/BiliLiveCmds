# BiliLiveCmds

总结b站直播实时接口中的命令类型

## 归档文件

|文件名|备注|
|----|----|
|raw_app.js|原始代码归档|
|raw_cmd_switch_case.js|指令判断相关的原始代码片段|
|sum_cmd_list.js|所有指令的列表|

## 已知指令

|cmd|备注|
|----|----|
|DANMU_MSG|实时弹幕|
|SUPER_CHAT_MESSAGE|醒目留言|
|SEND_GIFT|礼物|
|COMBO_SEND|礼物连击|
|WELCOME|欢迎月费老爷/年费老爷|
|WELCOME_GUARD|欢迎舰长/提督/总督|
|INTERACT_WORD|互动消息|
|ROOM_BLOCK_MSG|直播间禁言|
|GUARD_BUY|购买舰长/提督/总督|

### 实时弹幕

|字段|备注|
|----|----|
|info\[0\]\[4\]|时间戳|
|info\[0\]\[9\]|类型|
|info\[1\]|消息|
|info\[2\]\[0\]|Uid|
|info\[2\]\[1\]|用户名|

### 醒目留言

|字段|备注|
|----|----|
|data.ts|时间戳|
|data.price|价格|
|data.message|消息|
|data.trans_mark|翻译标记; 0=未翻译,1=有翻译|
|data.message_trans|翻译后消息|
|data.background_color|背景色|
|data.background_price_color|价格背景色|
|data.background_bottom_color|底部背景色|
|data.uid|Uid|
|data.user_info.uname|用户名|
|data.user_info.face|头像Url|
|data.time|显示时长|

### 礼物

|字段|备注|
|----|----|
|data.giftName|礼物名称|
|data.num|礼物数量|
|data.uid|Uid|
|data.uname|用户名|
|data.face|头像Url|
|data.giftId|礼物Id|
|data.action|动作 (一般为"投喂")|
|data.coin_type|瓜子类型; "silver"=银瓜子,"gold"=金瓜子|
|data.timestamp|时间戳|

### 礼物连击

|字段|备注|
|----|----|
|data.uid|Uid|
|data.uname|用户名|
|data.gift_name|礼物名称|
|data.total_num|礼物数量|
|data.gift_id|礼物Id|
|data.action|动作 (一般为"投喂")|

### 欢迎月费老爷/年费老爷

|字段|备注|
|----|----|
|data.uid|Uid|
|data.uname|用户名|
|data.svip|是否为年费老爷; 0=月费老爷,1=年费老爷|

### 欢迎舰长/提督/总督

|字段|备注|
|----|----|
|data.uid|Uid|
|data.username|用户名|
|data.guard_level|大航海等级; 1=总督,2=提督,3=舰长|

### 互动消息

|字段|备注|
|----|----|
|data.uid|Uid|
|data.uname|用户名|
|data.msg_type|互动类型; ID见备注|
|data.timestamp|时间戳|

### 直播间禁言

|字段|备注|
|----|----|
|data.uid|Uid|
|data.uname|用户名|
|data.operator|操作员; TODO|

### 购买舰长/提督/总督

|字段|备注|
|----|----|
|data.uid|Uid|
|data.username|用户名|
|data.guard_level|大航海等级; 1=总督,2=提督,3=舰长|
|data.gift_name|礼物名称|
|data.start_time|生效时间|

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

