import { _ as __nuxt_component_0, T as TASK_PRIORITIES, a as TASK_STATUSES } from './TaskDialog-DF27Px9U.mjs';
import { defineComponent, withAsyncContext, ref, inject, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch, V as VRow, a as VCol } from './VTextarea-Bkla_C19.mjs';
import { V as VCard, d as VCardText, e as VAvatar, f as VIcon, g as VCardTitle, h as VList, i as VListItem, j as VListItemTitle, k as VListItemSubtitle, l as VChip, m as VCardActions, o as VSpacer, p as VBtn } from './server.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader-WPTEZVnh.mjs';
import './VAutocomplete-CgM_2ip2.mjs';
import './filter-CwhwF0wl.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@vue/shared';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: dashboard, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/dashboard", "$QD8d9NkvSp")), __temp = await __temp, __restore(), __temp);
    const taskDialog = ref(false);
    const showComingSoon = inject("showComingSoon");
    function getStatusColor(status) {
      return TASK_STATUSES.find((s) => s.value === status)?.color || "grey";
    }
    function getStatusLabel(status) {
      return TASK_STATUSES.find((s) => s.value === status)?.title || status;
    }
    function getPriorityColor(priority) {
      return TASK_PRIORITIES.find((p) => p.value === priority)?.color || "grey";
    }
    function formatDate(date) {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TaskDialog = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, { class: "mb-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                color: "primary",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-clipboard-text-clock",
                                      size: "28"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "mdi-clipboard-text-clock",
                                        size: "28"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><div class="text-h4 font-weight-bold"${_scopeId4}>${ssrInterpolate(unref(dashboard)?.openTasksCount ?? "-")}</div><div class="text-body-2 text-medium-emphasis"${_scopeId4}>Open Tasks</div></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  color: "primary",
                                  size: "56",
                                  class: "mr-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-clipboard-text-clock",
                                      size: "28"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.openTasksCount ?? "-"), 1),
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Open Tasks")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                color: "primary",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-clipboard-text-clock",
                                    size: "28"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.openTasksCount ?? "-"), 1),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Open Tasks")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "h-100",
                      loading: unref(pending)
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              color: "primary",
                              size: "56",
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-clipboard-text-clock",
                                  size: "28"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.openTasksCount ?? "-"), 1),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Open Tasks")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                color: "info",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-calendar-week",
                                      size: "28"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "mdi-calendar-week",
                                        size: "28"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><div class="text-h4 font-weight-bold"${_scopeId4}>${ssrInterpolate(unref(dashboard)?.scheduledThisWeekCount ?? "-")}</div><div class="text-body-2 text-medium-emphasis"${_scopeId4}>Scheduled This Week</div></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  color: "info",
                                  size: "56",
                                  class: "mr-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-calendar-week",
                                      size: "28"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.scheduledThisWeekCount ?? "-"), 1),
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Scheduled This Week")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                color: "info",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-calendar-week",
                                    size: "28"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.scheduledThisWeekCount ?? "-"), 1),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Scheduled This Week")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "h-100",
                      loading: unref(pending)
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              color: "info",
                              size: "56",
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-calendar-week",
                                  size: "28"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.scheduledThisWeekCount ?? "-"), 1),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Scheduled This Week")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                color: "success",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-check-circle",
                                      size: "28"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "mdi-check-circle",
                                        size: "28"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}><div class="text-h4 font-weight-bold"${_scopeId4}>${ssrInterpolate(unref(dashboard)?.completedLast7DaysCount ?? "-")}</div><div class="text-body-2 text-medium-emphasis"${_scopeId4}>Completed (7 days)</div></div>`);
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  color: "success",
                                  size: "56",
                                  class: "mr-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-check-circle",
                                      size: "28"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.completedLast7DaysCount ?? "-"), 1),
                                  createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Completed (7 days)")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                color: "success",
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-check-circle",
                                    size: "28"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.completedLast7DaysCount ?? "-"), 1),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Completed (7 days)")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "h-100",
                      loading: unref(pending)
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              color: "success",
                              size: "56",
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-check-circle",
                                  size: "28"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.completedLast7DaysCount ?? "-"), 1),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Completed (7 days)")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            color: "primary",
                            size: "56",
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-clipboard-text-clock",
                                size: "28"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.openTasksCount ?? "-"), 1),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Open Tasks")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            color: "info",
                            size: "56",
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-calendar-week",
                                size: "28"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.scheduledThisWeekCount ?? "-"), 1),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Scheduled This Week")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                sm: "6",
                md: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "h-100",
                    loading: unref(pending)
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            color: "success",
                            size: "56",
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-check-circle",
                                size: "28"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(dashboard)?.completedLast7DaysCount ?? "-"), 1),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, "Completed (7 days)")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-alert-circle",
                                color: "error",
                                class: "mr-2"
                              }, null, _parent5, _scopeId4));
                              _push5(` Overdue Tasks `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "mdi-alert-circle",
                                  color: "error",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Overdue Tasks ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(pending)) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSkeletonLoader, { type: "list-item-two-line@3" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else if (unref(dashboard)?.overdueTasks?.length) {
                          _push4(ssrRenderComponent(VList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(dashboard).overdueTasks, (task) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: task.id,
                                    to: `/tasks/${task.id}`,
                                    class: "border-b"
                                  }, {
                                    prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: getPriorityColor(task.priority),
                                          size: "small",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(task.priority)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(task.priority), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VChip, {
                                            color: getPriorityColor(task.priority),
                                            size: "small",
                                            class: "mr-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(task.priority), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ];
                                      }
                                    }),
                                    append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon: "mdi-chevron-right",
                                          size: "small"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            size: "small"
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(task.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(task.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VIcon, {
                                                icon: "mdi-map-marker",
                                                size: "12",
                                                class: "mr-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(task.cemeteryName)} · ${ssrInterpolate(task.plotRef)} <span class="text-error ml-2"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(VIcon, {
                                                icon: "mdi-calendar",
                                                size: "12",
                                                class: "mr-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(formatDate(task.scheduledFor))}</span>`);
                                            } else {
                                              return [
                                                createVNode(VIcon, {
                                                  icon: "mdi-map-marker",
                                                  size: "12",
                                                  class: "mr-1"
                                                }),
                                                createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                                createVNode("span", { class: "text-error ml-2" }, [
                                                  createVNode(VIcon, {
                                                    icon: "mdi-calendar",
                                                    size: "12",
                                                    class: "mr-1"
                                                  }),
                                                  createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(task.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "mdi-map-marker",
                                                size: "12",
                                                class: "mr-1"
                                              }),
                                              createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                              createVNode("span", { class: "text-error ml-2" }, [
                                                createVNode(VIcon, {
                                                  icon: "mdi-calendar",
                                                  size: "12",
                                                  class: "mr-1"
                                                }),
                                                createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).overdueTasks, (task) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: task.id,
                                      to: `/tasks/${task.id}`,
                                      class: "border-b"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VChip, {
                                          color: getPriorityColor(task.priority),
                                          size: "small",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(task.priority), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          size: "small"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(task.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-map-marker",
                                              size: "12",
                                              class: "mr-1"
                                            }),
                                            createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                            createVNode("span", { class: "text-error ml-2" }, [
                                              createVNode(VIcon, {
                                                icon: "mdi-calendar",
                                                size: "12",
                                                class: "mr-1"
                                              }),
                                              createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VCardText, { class: "text-center text-medium-emphasis py-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-check-circle-outline",
                                  size: "48",
                                  color: "success",
                                  class: "mb-2"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}>No overdue tasks!</div>`);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-check-circle-outline",
                                    size: "48",
                                    color: "success",
                                    class: "mb-2"
                                  }),
                                  createVNode("div", null, "No overdue tasks!")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        if (unref(dashboard)?.overdueTasks?.length) {
                          _push4(ssrRenderComponent(VCardActions, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  to: "/tasks?dateFilter=overdue"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` View All `);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createTextVNode(" View All "),
                                        createVNode(VIcon, {
                                          icon: "mdi-arrow-right",
                                          end: ""
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    variant: "text",
                                    to: "/tasks?dateFilter=overdue"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View All "),
                                      createVNode(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-alert-circle",
                                color: "error",
                                class: "mr-2"
                              }),
                              createTextVNode(" Overdue Tasks ")
                            ]),
                            _: 1
                          }),
                          unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                            ]),
                            _: 1
                          })) : unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).overdueTasks, (task) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: task.id,
                                  to: `/tasks/${task.id}`,
                                  class: "border-b"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VChip, {
                                      color: getPriorityColor(task.priority),
                                      size: "small",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(task.priority), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      size: "small"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(task.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-map-marker",
                                          size: "12",
                                          class: "mr-1"
                                        }),
                                        createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                        createVNode("span", { class: "text-error ml-2" }, [
                                          createVNode(VIcon, {
                                            icon: "mdi-calendar",
                                            size: "12",
                                            class: "mr-1"
                                          }),
                                          createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VCardText, {
                            key: 2,
                            class: "text-center text-medium-emphasis py-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-check-circle-outline",
                                size: "48",
                                color: "success",
                                class: "mb-2"
                              }),
                              createVNode("div", null, "No overdue tasks!")
                            ]),
                            _: 1
                          })),
                          unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                variant: "text",
                                to: "/tasks?dateFilter=overdue"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View All "),
                                  createVNode(VIcon, {
                                    icon: "mdi-arrow-right",
                                    end: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-alert-circle",
                              color: "error",
                              class: "mr-2"
                            }),
                            createTextVNode(" Overdue Tasks ")
                          ]),
                          _: 1
                        }),
                        unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                          ]),
                          _: 1
                        })) : unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).overdueTasks, (task) => {
                              return openBlock(), createBlock(VListItem, {
                                key: task.id,
                                to: `/tasks/${task.id}`,
                                class: "border-b"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VChip, {
                                    color: getPriorityColor(task.priority),
                                    size: "small",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.priority), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                append: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    size: "small"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-map-marker",
                                        size: "12",
                                        class: "mr-1"
                                      }),
                                      createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                      createVNode("span", { class: "text-error ml-2" }, [
                                        createVNode(VIcon, {
                                          icon: "mdi-calendar",
                                          size: "12",
                                          class: "mr-1"
                                        }),
                                        createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VCardText, {
                          key: 2,
                          class: "text-center text-medium-emphasis py-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-check-circle-outline",
                              size: "48",
                              color: "success",
                              class: "mb-2"
                            }),
                            createVNode("div", null, "No overdue tasks!")
                          ]),
                          _: 1
                        })),
                        unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              variant: "text",
                              to: "/tasks?dateFilter=overdue"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View All "),
                                createVNode(VIcon, {
                                  icon: "mdi-arrow-right",
                                  end: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-history",
                                color: "info",
                                class: "mr-2"
                              }, null, _parent5, _scopeId4));
                              _push5(` Recent Activity `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "mdi-history",
                                  color: "info",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Recent Activity ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(pending)) {
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSkeletonLoader, { type: "list-item-two-line@3" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else if (unref(dashboard)?.recentTasks?.length) {
                          _push4(ssrRenderComponent(VList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(dashboard).recentTasks, (task) => {
                                  _push5(ssrRenderComponent(VListItem, {
                                    key: task.id,
                                    to: `/tasks/${task.id}`,
                                    class: "border-b"
                                  }, {
                                    prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VChip, {
                                          color: getStatusColor(task.status),
                                          size: "small",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(getStatusLabel(task.status))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VChip, {
                                            color: getStatusColor(task.status),
                                            size: "small",
                                            class: "mr-3"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ];
                                      }
                                    }),
                                    append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          icon: "mdi-chevron-right",
                                          size: "small"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            size: "small"
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItemTitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(task.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(task.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(task.deceasedName || "Unknown")} · ${ssrInterpolate(task.cemeteryName)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(task.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).recentTasks, (task) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: task.id,
                                      to: `/tasks/${task.id}`,
                                      class: "border-b"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VChip, {
                                          color: getStatusColor(task.status),
                                          size: "small",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          size: "small"
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(task.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VCardText, { class: "text-center text-medium-emphasis py-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-clipboard-text-outline",
                                  size: "48",
                                  class: "mb-2"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}>No tasks yet</div>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "primary",
                                  class: "mt-4",
                                  to: "/tasks"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Create Your First Task `);
                                    } else {
                                      return [
                                        createTextVNode(" Create Your First Task ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-clipboard-text-outline",
                                    size: "48",
                                    class: "mb-2"
                                  }),
                                  createVNode("div", null, "No tasks yet"),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    class: "mt-4",
                                    to: "/tasks"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create Your First Task ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        if (unref(dashboard)?.recentTasks?.length) {
                          _push4(ssrRenderComponent(VCardActions, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  to: "/tasks"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` View All Tasks `);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createTextVNode(" View All Tasks "),
                                        createVNode(VIcon, {
                                          icon: "mdi-arrow-right",
                                          end: ""
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    variant: "text",
                                    to: "/tasks"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View All Tasks "),
                                      createVNode(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-history",
                                color: "info",
                                class: "mr-2"
                              }),
                              createTextVNode(" Recent Activity ")
                            ]),
                            _: 1
                          }),
                          unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                            ]),
                            _: 1
                          })) : unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).recentTasks, (task) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: task.id,
                                  to: `/tasks/${task.id}`,
                                  class: "border-b"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VChip, {
                                      color: getStatusColor(task.status),
                                      size: "small",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      size: "small"
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(task.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VCardText, {
                            key: 2,
                            class: "text-center text-medium-emphasis py-8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-clipboard-text-outline",
                                size: "48",
                                class: "mb-2"
                              }),
                              createVNode("div", null, "No tasks yet"),
                              createVNode(VBtn, {
                                color: "primary",
                                class: "mt-4",
                                to: "/tasks"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Create Your First Task ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })),
                          unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                variant: "text",
                                to: "/tasks"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View All Tasks "),
                                  createVNode(VIcon, {
                                    icon: "mdi-arrow-right",
                                    end: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-history",
                              color: "info",
                              class: "mr-2"
                            }),
                            createTextVNode(" Recent Activity ")
                          ]),
                          _: 1
                        }),
                        unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                          ]),
                          _: 1
                        })) : unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).recentTasks, (task) => {
                              return openBlock(), createBlock(VListItem, {
                                key: task.id,
                                to: `/tasks/${task.id}`,
                                class: "border-b"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VChip, {
                                    color: getStatusColor(task.status),
                                    size: "small",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                append: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    size: "small"
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128))
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VCardText, {
                          key: 2,
                          class: "text-center text-medium-emphasis py-8"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-clipboard-text-outline",
                              size: "48",
                              class: "mb-2"
                            }),
                            createVNode("div", null, "No tasks yet"),
                            createVNode(VBtn, {
                              color: "primary",
                              class: "mt-4",
                              to: "/tasks"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create Your First Task ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })),
                        unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              variant: "text",
                              to: "/tasks"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View All Tasks "),
                                createVNode(VIcon, {
                                  icon: "mdi-arrow-right",
                                  end: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-alert-circle",
                            color: "error",
                            class: "mr-2"
                          }),
                          createTextVNode(" Overdue Tasks ")
                        ]),
                        _: 1
                      }),
                      unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                        ]),
                        _: 1
                      })) : unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).overdueTasks, (task) => {
                            return openBlock(), createBlock(VListItem, {
                              key: task.id,
                              to: `/tasks/${task.id}`,
                              class: "border-b"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VChip, {
                                  color: getPriorityColor(task.priority),
                                  size: "small",
                                  class: "mr-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(task.priority), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-chevron-right",
                                  size: "small"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(task.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-map-marker",
                                      size: "12",
                                      class: "mr-1"
                                    }),
                                    createTextVNode(" " + toDisplayString(task.cemeteryName) + " · " + toDisplayString(task.plotRef) + " ", 1),
                                    createVNode("span", { class: "text-error ml-2" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-calendar",
                                        size: "12",
                                        class: "mr-1"
                                      }),
                                      createTextVNode(" " + toDisplayString(formatDate(task.scheduledFor)), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VCardText, {
                        key: 2,
                        class: "text-center text-medium-emphasis py-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-check-circle-outline",
                            size: "48",
                            color: "success",
                            class: "mb-2"
                          }),
                          createVNode("div", null, "No overdue tasks!")
                        ]),
                        _: 1
                      })),
                      unref(dashboard)?.overdueTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            to: "/tasks?dateFilter=overdue"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View All "),
                              createVNode(VIcon, {
                                icon: "mdi-arrow-right",
                                end: ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-history",
                            color: "info",
                            class: "mr-2"
                          }),
                          createTextVNode(" Recent Activity ")
                        ]),
                        _: 1
                      }),
                      unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                        ]),
                        _: 1
                      })) : unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(dashboard).recentTasks, (task) => {
                            return openBlock(), createBlock(VListItem, {
                              key: task.id,
                              to: `/tasks/${task.id}`,
                              class: "border-b"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VChip, {
                                  color: getStatusColor(task.status),
                                  size: "small",
                                  class: "mr-3"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-chevron-right",
                                  size: "small"
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(task.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(task.deceasedName || "Unknown") + " · " + toDisplayString(task.cemeteryName), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(VCardText, {
                        key: 2,
                        class: "text-center text-medium-emphasis py-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-clipboard-text-outline",
                            size: "48",
                            class: "mb-2"
                          }),
                          createVNode("div", null, "No tasks yet"),
                          createVNode(VBtn, {
                            color: "primary",
                            class: "mt-4",
                            to: "/tasks"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Create Your First Task ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })),
                      unref(dashboard)?.recentTasks?.length ? (openBlock(), createBlock(VCardActions, { key: 3 }, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            to: "/tasks"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View All Tasks "),
                              createVNode(VIcon, {
                                icon: "mdi-arrow-right",
                                end: ""
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, { class: "mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Quick Actions`);
                            } else {
                              return [
                                createTextVNode("Quick Actions")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            color: "primary",
                                            "prepend-icon": "mdi-plus",
                                            onClick: ($event) => taskDialog.value = true
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` New Task `);
                                              } else {
                                                return [
                                                  createTextVNode(" New Task ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              block: "",
                                              variant: "tonal",
                                              color: "primary",
                                              "prepend-icon": "mdi-plus",
                                              onClick: ($event) => taskDialog.value = true
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" New Task ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-file-pdf-box",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Export PDF `);
                                              } else {
                                                return [
                                                  createTextVNode(" Export PDF ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              block: "",
                                              variant: "tonal",
                                              "prepend-icon": "mdi-file-pdf-box",
                                              onClick: ($event) => unref(showComingSoon)?.()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Export PDF ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-email-send",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Send Report `);
                                              } else {
                                                return [
                                                  createTextVNode(" Send Report ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              block: "",
                                              variant: "tonal",
                                              "prepend-icon": "mdi-email-send",
                                              onClick: ($event) => unref(showComingSoon)?.()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Send Report ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-calendar-sync",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Recurring Tasks `);
                                              } else {
                                                return [
                                                  createTextVNode(" Recurring Tasks ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              block: "",
                                              variant: "tonal",
                                              "prepend-icon": "mdi-calendar-sync",
                                              onClick: ($event) => unref(showComingSoon)?.()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Recurring Tasks ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "6",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            color: "primary",
                                            "prepend-icon": "mdi-plus",
                                            onClick: ($event) => taskDialog.value = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" New Task ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-file-pdf-box",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Export PDF ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-email-send",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Send Report ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "6",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            block: "",
                                            variant: "tonal",
                                            "prepend-icon": "mdi-calendar-sync",
                                            onClick: ($event) => unref(showComingSoon)?.()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Recurring Tasks ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: "tonal",
                                          color: "primary",
                                          "prepend-icon": "mdi-plus",
                                          onClick: ($event) => taskDialog.value = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" New Task ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: "tonal",
                                          "prepend-icon": "mdi-file-pdf-box",
                                          onClick: ($event) => unref(showComingSoon)?.()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Export PDF ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: "tonal",
                                          "prepend-icon": "mdi-email-send",
                                          onClick: ($event) => unref(showComingSoon)?.()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Send Report ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "6",
                                      sm: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          block: "",
                                          variant: "tonal",
                                          "prepend-icon": "mdi-calendar-sync",
                                          onClick: ($event) => unref(showComingSoon)?.()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Recurring Tasks ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Quick Actions")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "6",
                                    sm: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "tonal",
                                        color: "primary",
                                        "prepend-icon": "mdi-plus",
                                        onClick: ($event) => taskDialog.value = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" New Task ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    sm: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "tonal",
                                        "prepend-icon": "mdi-file-pdf-box",
                                        onClick: ($event) => unref(showComingSoon)?.()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Export PDF ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    sm: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "tonal",
                                        "prepend-icon": "mdi-email-send",
                                        onClick: ($event) => unref(showComingSoon)?.()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Send Report ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "6",
                                    sm: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        block: "",
                                        variant: "tonal",
                                        "prepend-icon": "mdi-calendar-sync",
                                        onClick: ($event) => unref(showComingSoon)?.()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Recurring Tasks ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Quick Actions")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "6",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "tonal",
                                      color: "primary",
                                      "prepend-icon": "mdi-plus",
                                      onClick: ($event) => taskDialog.value = true
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" New Task ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "6",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "tonal",
                                      "prepend-icon": "mdi-file-pdf-box",
                                      onClick: ($event) => unref(showComingSoon)?.()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Export PDF ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "6",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "tonal",
                                      "prepend-icon": "mdi-email-send",
                                      onClick: ($event) => unref(showComingSoon)?.()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Send Report ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "6",
                                  sm: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      block: "",
                                      variant: "tonal",
                                      "prepend-icon": "mdi-calendar-sync",
                                      onClick: ($event) => unref(showComingSoon)?.()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Recurring Tasks ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Quick Actions")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "6",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "tonal",
                                    color: "primary",
                                    "prepend-icon": "mdi-plus",
                                    onClick: ($event) => taskDialog.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" New Task ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "6",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "tonal",
                                    "prepend-icon": "mdi-file-pdf-box",
                                    onClick: ($event) => unref(showComingSoon)?.()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Export PDF ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "6",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "tonal",
                                    "prepend-icon": "mdi-email-send",
                                    onClick: ($event) => unref(showComingSoon)?.()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Send Report ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "6",
                                sm: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "tonal",
                                    "prepend-icon": "mdi-calendar-sync",
                                    onClick: ($event) => unref(showComingSoon)?.()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Recurring Tasks ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TaskDialog, {
        modelValue: unref(taskDialog),
        "onUpdate:modelValue": ($event) => isRef(taskDialog) ? taskDialog.value = $event : null,
        onSaved: unref(refresh)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bdk8XrPJ.mjs.map
