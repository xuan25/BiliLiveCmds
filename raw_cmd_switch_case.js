// Achieved from: raw_app.js @ line 24978
// Achieved date: Jan 21 2021
// Achieved by: Xuan525

switch (t.cmd) {
  case "MATCH_TEAM_GIFT_RANK":
    Xt.a.updateTeamListShowOnSocket(t);
    break;
  case "ACTIVITY_MATCH_GIFT":
    !(function (t) {
      Xt.a.updateGameInfoOnSocket(t);
    })(t);
    break;
  case "ANIMATION":
    !(function (t) {
      J.a.onSocket(t);
    })(t);
    break;
  case "CHANGE_ROOM_INFO":
    i(t);
    break;
  case "COMBO_SEND":
    Tt.send(t);
    break;
  case "CUT_OFF":
    (function (t) {
      return v(
        this,
        void 0,
        void 0,
        a.a.mark(function t() {
          var e, r, i;
          return a.a.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = u.a.getters.baseInfoUser.isAnchor),
                      (t.next = 3),
                      Object(m.b)()
                    );
                  case 3:
                    if ((p(), !e)) {
                      t.next = 13;
                      break;
                    }
                    return (
                      (t.next = 7), n.e(5).then(n.bind(null, 2182))
                    );
                  case 7:
                    return (
                      (r = t.sent),
                      (i = r.loadCutOffMsg),
                      (t.next = 11),
                      i()
                    );
                  case 11:
                    t.next = 14;
                    break;
                  case 13:
                    Object(l.b)({
                      title: "系统通知",
                      content: "当前直播间被直播管理员切断直播。",
                      width: 300,
                      button: {
                        confirm: "悲痛欲绝 " + f.randomEmoji.sad(),
                        cancel: !1,
                      },
                    });
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    })().catch(d.noop);
    break;
  case "DANMU_GIFT_LOTTERY_START":
    oe.lotteryStart(t);
    break;
  case "DANMU_GIFT_LOTTERY_END":
    oe.lotteryEnd(t);
    break;
  case "DANMU_GIFT_LOTTERY_AWARD":
    oe.award(t);
    break;
  case "WARNING":
    (function (t) {
      return G(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    u.a.getters.baseInfoUser.isAnchor
                      ? ((n = t.msg),
                        Object(l.b)({
                          title: "友情提示",
                          width: 300,
                          button: { confirm: "知道了", cancel: !1 },
                          content: n,
                          hideMask: !0,
                        }))
                      : B(t.msg);
                  case 2:
                  case "end":
                    return e.stop();
                }
              var n;
            },
            e,
            this
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "DANMU_MSG":
    !(function (t) {
      var e = t.info[0][5],
        n = t.info[2][0],
        r = t.info[0][9];
      (Y && Z.indexOf(r) > -1) ||
        (window.BilibiliLive.UID === n &&
          window.BilibiliLive.RND === e) ||
        Object(F.c)(Object(U.n)(t.info));
    })(t);
    break;
  case "USER_TOAST_MSG":
    !(function (t) {
      var e = t.data,
        n = e.user_show,
        r = Number(e.target_guard_count),
        i = e.color,
        o = e.toast_msg,
        a = u.a.getters.baseInfoUser.uid;
      Object(F.m)({ userShow: n, color: i, msg: o }),
        (!e.svga_block || (e.svga_block && e.uid === a)) &&
          (1 === e.guard_level
            ? J.a.addAnimation(
                e.uid,
                "guard-level-" + e.guard_level,
                "guard",
                5,
                0,
                1
              )
            : J.a.addAnimation(
                e.uid,
                "guard-level-" + e.guard_level,
                "guard",
                3,
                0,
                1
              )),
        r && K.default.$emit("update:guardTitle", r);
    })(t);
    break;
  case "GUARD_ACHIEVEMENT_ROOM":
    !(function (t) {
      de.b.emit(de.a.guardAchievementRoom, t);
    })(t);
    break;
  case "LIVE":
    (function (t) {
      return Q(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          var n, r, i, o;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    h("LIVE"),
                      t.scatter &&
                        ((n = t.scatter),
                        (r = n.max),
                        (i = n.min),
                        (o = Math.max(Math.ceil(Math.random() * r), i)),
                        setTimeout(function () {
                          location.reload();
                        }, 1e3 * o));
                  case 3:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "MESSAGEBOX_USER_GAIN_MEDAL":
    !(function (t) {
      var e = u.a.getters.baseInfoAnchor.uid,
        n =
          (u.a.getters.baseInfoAnchor.username,
          u.a.getters.baseInfoUser.medal),
        r = u.a.getters.baseInfoUser.uid;
      if (e === t.data.up_uid && e !== r) {
        Object(Wt.a)(t.data.toast, "info"), Object(Ht.c)();
        var i = Object(Vt.b)(t.data);
        u.a
          .dispatch("baseInfoUser", { isInFansClub: !0, medalCount: 1 })
          .catch(null),
          u.a
            .dispatch("baseInfoAnchor", {
              fansClubPersonCount:
                u.a.state.baseInfoAnchor.fansClubPersonCount + 1,
            })
            .catch(null),
          n.anchorId === i.anchorId &&
            u.a.dispatch("baseInfoUser", { medal: i }).catch(null),
          n ||
            Object(Ut.b)().catch(function () {
              return null;
            });
      }
      Ft.a.gainMedalBySocket(t);
    })(t);
    break;
  case "MESSAGEBOX_USER_MEDAL_CHANGE":
    !(function (t) {
      var e = u.a.getters.baseInfoUser.medal,
        n = u.a.getters.baseInfoAnchor.uid,
        r = Object(Vt.b)(t.data);
      if (
        (e ||
          Object(Ut.b)().catch(function () {
            return null;
          }),
        n === t.data.up_uid)
      ) {
        switch (r.type) {
          case 1:
            Object(Ht.d)(r.level);
            break;
          case 2:
            Object(Ht.e)();
            break;
          case 3:
            Object(Ht.d)(r.level), Object(Ht.e)();
        }
        t.data.unlock &&
          (t.data.multi_unlock_level
            ? t.data.multi_unlock_level
                .split(",")
                .forEach(function (t) {
                  Object(Ht.g)(t);
                })
            : Object(Ht.g)(t.data.unlock_level));
      }
      n === t.data.up_uid &&
        t.data.upper_bound_content &&
        Object(Wt.a)(t.data.upper_bound_content, "info"),
        e &&
          e.anchorId === t.data.up_uid &&
          u.a.dispatch("baseInfoUser", { medal: r }).catch(null);
    })(t);
    break;
  case "MESSAGEBOX_USER_MEDAL_COMPENSATION":
    !(function (t) {
      var e = t.data,
        n = e.up_uid,
        r = e.add_score;
      u.a.getters.baseInfoAnchor.uid === n &&
        de.b.emit(de.a.showPackage, { score: r });
    })(t);
    break;
  case "LITTLE_TIPS":
    !(function (t) {
      Ft.a.limitFanMedal(t);
    })(t);
    break;
  case "LITTLE_MESSAGE_BOX":
    !(function (t) {
      var e = t,
        n = e.data || null;
      n &&
        n.platform &&
        n.platform.web &&
        n.msg &&
        (0 === n.type ||
          (1 === n.type &&
            n.room_id === u.a.getters.baseInfoRoom.roomID)) &&
        Object(Wt.a)(e.data.msg, "info");
    })(t);
    break;
  case "NOTICE_MSG":
    var e = t;
    if (e && "5:2" === e.child_msg_type) return;
    Ot(e).then().catch();
    break;
  case "PK_MATCH":
    _t.match(t);
    break;
  case "PK_PRE":
    _t.pre(t);
    break;
  case "PK_START":
    _t.start(t);
    break;
  case "PK_PROCESS":
    _t.update(t);
    break;
  case "PK_END":
    _t.end(t);
    break;
  case "PK_SETTLE":
    _t.settle(t);
    break;
  case "PK_AGAIN":
    _t.again(t);
    break;
  case "PK_MIC_END":
    _t.micEnd(t);
    break;
  case "PK_BATTLE_PRE":
    ee.update(t, te.b.pre);
    break;
  case "PK_BATTLE_START":
    ee.update(t, te.b.start);
    break;
  case "PK_BATTLE_PROCESS":
    ee.update(t, te.b.process);
    break;
  case "PK_BATTLE_PRO_TYPE":
    ee.update(t, te.b.changeType);
    break;
  case "PK_BATTLE_GIFT":
  case "PK_BATTLE_SPECIAL_GIFT":
    ee.update(t, te.b.sendGift);
    break;
  case "PK_BATTLE_CRIT":
    ee.update(t, te.b.triggerBoom);
    break;
  case "PK_BATTLE_VOTES_ADD":
    ee.update(t, te.b.buffer);
    break;
  case "PK_BATTLE_END":
    ee.update(t, te.b.end);
    break;
  case "PK_BATTLE_SETTLE_V2":
    ee.update(t, te.b.settle);
    break;
  case "PK_BATTLE_RANK_CHANGE":
    ee.updateBanner(t);
    break;
  case "PREPARING":
    X(t);
    break;
  case "ROOM_REFRESH":
    !(function (t) {
      var e = t.time,
        n = Math.ceil(Math.random() * e);
      setTimeout(function () {
        location.reload();
      }, 1e3 * n);
    })(t);
    break;
  case "ROOM_SKIN_MSG":
    !(function (t) {
      Gt.a.onSocketMsg(t);
    })(t);
    break;
  case "ROOM_BOX_USER":
    [4, 7].indexOf((o = t).data.type) > -1 && ie.c.onAwardSocket(o);
    break;
  case "SCORE_CARD":
    !(function (t) {
      Bt.b.startBuffBySocket(t);
    })(t);
    break;
  case "TV_START":
  case "RAFFLE_START":
    fe(t, "gift");
    break;
  case "TV_END":
  case "RAFFLE_END":
    !(function (t) {
      t.data.win.award_show &&
        K.default.$emit("ChatDrawArea: drawEnd", t.data.win);
    })(t);
    break;
  case "PK_LOTTERY_START":
    fe(t, "pk");
    break;
  case "GUARD_LOTTERY_START":
    fe(t, "guard");
    break;
  case "ROOM_BLOCK_INTO":
    q(t);
    break;
  case "ROOM_BLOCK_MSG":
    !(function (t) {
      var e = t.uname || "--";
      Object(F.a)(e);
    })(t);
    break;
  case "ROOM_KICKOUT":
    !(function (t) {
      var e = t.uname;
      Object(F.g)(e);
    })(t);
    break;
  case "ROOM_LOCK":
    $();
    break;
  case "ROOM_LIMIT":
    !(function (t) {
      var e = t.type,
        n = t.delay_range;
      "copyright_area" === e &&
        setTimeout(function () {
          location.reload();
        }, 1e3 * Math.floor(Math.random() * n));
    })(t);
    break;
  case "ROOM_SILENT_ON":
    (function (t) {
      return tt(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          var r, i, o, s, c;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = window.BilibiliLive.ANCHOR_UID),
                      (i = window.BilibiliLive.UID),
                      r !== i)
                    ) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    return (
                      (e.prev = 4),
                      (e.next = 7),
                      n.e(0).then(n.bind(null, 2197))
                    );
                  case 7:
                    (o = e.sent),
                      (s = o.silentOn),
                      (c = o.socketRoomSilentOnToFeRoomSilentOn),
                      s(c(t.data)),
                      (e.next = 16);
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(4)), et(e.t0);
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[4, 13]]
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "ROOM_SILENT_OFF":
    (function (t) {
      return tt(
        this,
        void 0,
        void 0,
        a.a.mark(function t() {
          var e, r;
          return a.a.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((e = window.BilibiliLive.ANCHOR_UID),
                      (r = window.BilibiliLive.UID),
                      e !== r)
                    ) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return (
                      (t.prev = 4),
                      (t.next = 7),
                      n.e(0).then(n.bind(null, 2197))
                    );
                  case 7:
                    (0, t.sent.silentOff)(), (t.next = 15);
                    break;
                  case 12:
                    (t.prev = 12), (t.t0 = t.catch(4)), et(t.t0);
                  case 15:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[4, 12]]
          );
        })
      );
    })().catch(d.noop);
    break;
  case "SEND_GIFT":
    Object(Jt.d)("broadcastSendGift", t), at(t);
    break;
  case "SEND_TOP":
    st(t);
    break;
  case "SPECIAL_GIFT":
    ft(t);
    break;
  case "WEEK_STAR_CLOCK":
    !(function (t) {
      ie.c.onTaskSocket(t);
    })(t);
    break;
  case "INTERACT_WORD":
    !(function (t) {
      var e = t.data;
      if (!pt || e.msg_type !== ye.b.Entry) {
        var n = e.uname || "--",
          r = e.uid,
          i = u.a.getters.baseInfoUser.uid,
          o = e.identities || [];
        r !== i &&
          Object(F.f)({
            uid: e.uid,
            identities: o,
            highestIdentity: o.sort().reverse()[0] || 1,
            userName: n,
            nameColor: e.uname_color || "",
            msgType: e.msg_type,
            fansMedal: Object(we.a)(e.fans_medal),
            timestamp: e.timestamp,
            score: e.score,
            rank: e.contribution && e.contribution.grade,
            tailIcon: e.tail_icon,
          });
      }
    })(t);
    break;
  case "ENTRY_EFFECT":
    bt(t, !1);
    break;
  case "ENTRY_EFFECT_MUST_RECEIVE":
    bt(t, !0);
    break;
  case "BOX_ACTIVITY_START":
    !(function (t) {
      yt(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 3),
                      u.a.dispatch("baseInfoActivity", {
                        activityID: t.data.activity_id,
                        activityPic: t.data.activity_pic || "",
                      })
                    );
                  case 3:
                    K.default.$emit("DrawBox:ActivityStart", t);
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t);
    break;
  case "WIN_ACTIVITY":
    !(function (t) {
      if (t.data) {
        var e = t.data,
          n = e.delay_time_max,
          r = e.delay_time_min,
          i = Math.floor(Math.random() * n + r);
        setTimeout(function () {
          K.default.$emit("DrawBox:ShowWinnerList", {
            roundNum: t.number,
            from: "socket",
          });
        }, 1e3 * i);
      }
    })(t);
    break;
  case "WIN_ACTIVITY_USER":
    !(function (t) {
      K.default.$emit("DrawBox:ShowBingoPop", t.data);
    })(t);
    break;
  case "WISH_BOTTLE":
    kt(t);
    break;
  case "ROOM_RANK":
    !(function (t) {
      K.default.$emit("RoomHourRank: UpdateRoomHourRank", t);
    })(t);
    break;
  case "HOUR_RANK_AWARDS":
    (function (t) {
      return jt(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          var n;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = u.a.getters.baseInfoUser.isAnchor),
                      ["area_top1", "anchor_reward"].includes(
                        t.action
                      ) &&
                        n &&
                        Dt({
                          name: "area-top",
                          width: 312,
                          height: 284,
                          delay: 80,
                          data: t,
                        }),
                      t.action.includes("all_top") &&
                        Dt({
                          name: "all-top",
                          width: 346,
                          height: 346,
                          delay: t.data.life_cycle || 3,
                          data: t,
                        });
                  case 3:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "LOL_ACTIVITY":
    Promise.all([n.e(4), n.e(30)])
      .then(n.bind(null, 1228))
      .then(function (e) {
        return (0, e.handleLPLBroadcast)(t);
      })
      .catch(function (t) {
        return console.error("LPLBErr", t);
      });
    break;
  case "ROOM_REAL_TIME_MESSAGE_UPDATE":
    (function (t) {
      return zt(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          var n, r, i;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      u.a.getters.baseInfoRoom.roomID === t.data.roomid
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    if (
                      ((n = t.data),
                      (r = n.fans),
                      (i = n.fans_club),
                      !(r && r >= 0))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (
                      (e.next = 7),
                      u.a.dispatch("baseInfoAnchor", { fansCount: r })
                    );
                  case 7:
                    if (!(i && i >= 0)) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (e.next = 10),
                      u.a.dispatch("baseInfoAnchor", {
                        fansClubPersonCount: i,
                      })
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "VOICE_JOIN_STATUS":
    ae.a.onSocketStatus(t);
    break;
  case "ROOM_CHANGE":
    (function (t) {
      return le(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(m.c)({
                        room_id: u.a.getters.baseInfoRoom.roomID,
                        parent_area_id: t.data.parentAreaId,
                        area_id: t.data.area_id,
                      })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t).catch(d.noop);
    break;
  case "SUPER_CHAT_MESSAGE":
    !(function (t) {
      pe.b.emit(pe.a.superChatMessage, t);
    })(t);
    break;
  case "SUPER_CHAT_MESSAGE_DELETE":
    !(function (t) {
      pe.b.emit(pe.a.superChatMessageDelete, t);
    })(t);
    break;
  case "SUPER_CHAT_ENTRANCE":
    !(function (t) {
      pe.b.emit(pe.a.superChatEntrance, t);
    })(t);
    break;
  case "SUPER_CHAT_AUDIT":
    !(function (t) {
      Object(Wt.a)(t.data.msg, "info");
    })(t);
    break;
  case "ANCHOR_LOT_CHECKSTATUS":
    !(function (t) {
      he.b.emit(he.a.anchorLotteryCheckStatus, t);
    })(t);
    break;
  case "ANCHOR_LOT_START":
    re.guestStart(t);
    break;
  case "ANCHOR_LOT_END":
    re.guestEnd(t);
    break;
  case "ANCHOR_LOT_AWARD":
    re.guestAward(t),
      (function (t) {
        he.b.emit(he.a.anchorLotteryAward, t);
      })(t);
    break;
  case "CHASE_FRAME_SWITCH":
    !(function (t) {
      if (1 & t.data.platform && "off" === t.data.switch)
        try {
          me.b.setChasingFrameThreshold(0);
        } catch (t) {
          ve(t);
        }
    })(t);
    break;
  case "WATCH_LPL_EXPIRED":
    (r = t), ge.b.directShowWin(r.type);
    break;
  case "VIDEO_CONNECTION_JOIN_START":
    be.a.onLinkVideoStart(t);
    break;
  case "VIDEO_CONNECTION_JOIN_END":
    be.a.onLinkVideoEnd(t);
    break;
  case "VIDEO_CONNECTION_MSG":
    be.a.onLinkVideoConnectionMsg(t);
    break;
  case "ROOM_BANNER":
    n.e("activity-entry")
      .then(n.bind(null, 2159))
      .then(function (e) {
        return (0, e.ActSocket)(t);
      })
      .catch(function (t) {
        return console.error("ActSocketErr--ROOM_BANNER", t);
      });
    break;
  case "WIDGET_BANNER":
    n.e("activity-entry")
      .then(n.bind(null, 2159))
      .then(function (e) {
        return (0, e.ActSocket)(t);
      })
      .catch(function (t) {
        return console.error("ActSocketErr--WIDGET_BANNER", t);
      });
    break;
  case "ONLINE_RANK_V2":
    Kt.onTop3Change(t);
    break;
  case "ONLINE_RANK_TOP3":
    Kt.onTop3Notice(t);
    break;
  case "HOT_RANK_CHANGED":
    ke.a.onHotRankChange(t);
    break;
  case "HOT_RANK_SETTLEMENT":
    ke.a.onHotRankSettlement(t);
  case "VTR_GIFT_LOTTERY":
    !(function (t) {
      Object(F.h)(t && t.data);
    })(t);
    break;
  case "RED_POCKET_START":
    (function (t) {
      return Ae(
        this,
        void 0,
        void 0,
        a.a.mark(function e() {
          var n;
          return a.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !u.a.getters["redEnvelope/getIsShowPopupPanel"]
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 5),
                      u.a.dispatch(
                        "redEnvelope/setRedEnvelopePanel",
                        !1
                      )
                    );
                  case 5:
                    _e.a.closePanel();
                  case 6:
                    return (
                      (e.next = 8),
                      u.a.dispatch("redEnvelope/setRedEnvelopeInfo", {
                        remainTime: t.data.remain_time,
                        redEnvelopeId: t.data.id,
                        redEnvelopeNum: t.data.num,
                        senderUid: t.data.sender_uid,
                        senderName: t.data.sender_name,
                        senderAvatar: t.data.sender_face,
                        requireMessage: t.data.require_message,
                        redEnvelopeResultStatus: 1,
                        fetchRedEnvelopeResultState: {
                          isLoading: !1,
                          isSuccess: !1,
                        },
                        isPlayEntryAnimation: !1,
                        redEnvelopeAmount: -1,
                      })
                    );
                  case 8:
                    if (!Te) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("return");
                  case 11:
                    return (
                      (n = Object(Ie.b)(t)),
                      (e.next = 14),
                      Object(Ie.a)(n)
                    );
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    })(t)
      .then()
      .catch();
}
