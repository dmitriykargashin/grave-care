import { _ as __nuxt_component_1 } from './GraveDialog-UgLPXTAb.mjs';
import { _ as __nuxt_component_0, T as TASK_PRIORITIES, a as TASK_STATUSES } from './TaskDialog-DF27Px9U.mjs';
import { defineComponent, withAsyncContext, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { s as useRoute$1, p as VBtn, f as VIcon, V as VCard, g as VCardTitle, o as VSpacer, d as VCardText, l as VChip, h as VList, i as VListItem, j as VListItemTitle, k as VListItemSubtitle, e as VAvatar } from './server.mjs';
import { u as useFetch, V as VRow, a as VCol } from './VTextarea-Bkla_C19.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader-WPTEZVnh.mjs';
import { V as VAlert } from './VAlert-D9DD255j.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const graveId = route.params.id;
    const { data: grave, pending, refresh: refreshGrave } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/graves/${graveId}`, "$s0NDsyafW0")), __temp = await __temp, __restore(), __temp);
    const { data: tasks, pending: tasksPending, refresh: refreshTasks } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/graves/${graveId}/tasks`, "$CEQmfAL1MO")), __temp = await __temp, __restore(), __temp);
    const graveDialog = ref(false);
    const taskDialog = ref(false);
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
    function openEditDialog() {
      graveDialog.value = true;
    }
    function openTaskDialog() {
      taskDialog.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GraveDialog = __nuxt_component_1;
      const _component_TaskDialog = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        class: "mb-4",
        to: "/graves"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-arrow-left",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(` Back to Graves `);
          } else {
            return [
              createVNode(VIcon, {
                icon: "mdi-arrow-left",
                start: ""
              }),
              createTextVNode(" Back to Graves ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(ssrRenderComponent(VSkeletonLoader, { type: "article" }, null, _parent));
      } else if (unref(grave)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-grave-stone",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-h5"${_scopeId2}>${ssrInterpolate(unref(grave).deceasedName || "Unknown Deceased")}</span>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: openEditDialog
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "mdi-pencil" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-grave-stone",
                        class: "mr-2"
                      }),
                      createVNode("span", { class: "text-h5" }, toDisplayString(unref(grave).deceasedName || "Unknown Deceased"), 1),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        icon: "",
                        variant: "text",
                        onClick: openEditDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-pencil" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Cemetery</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(grave).cemeteryName)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).cemeteryName), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Plot Reference</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(grave).plotRef)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Plot Reference"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).plotRef), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Customer</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(grave).customerName)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).customerName), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Open Tasks</div>`);
                                _push5(ssrRenderComponent(VChip, {
                                  color: unref(grave).openTasksCount > 0 ? "warning" : "success",
                                  size: "small"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(grave).openTasksCount)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(grave).openTasksCount), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Open Tasks"),
                                  createVNode(VChip, {
                                    color: unref(grave).openTasksCount > 0 ? "warning" : "success",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(grave).openTasksCount), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).cemeteryName), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Plot Reference"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).plotRef), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).customerName), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Open Tasks"),
                                createVNode(VChip, {
                                  color: unref(grave).openTasksCount > 0 ? "warning" : "success",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(grave).openTasksCount), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
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
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).cemeteryName), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Plot Reference"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).plotRef), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).customerName), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Open Tasks"),
                              createVNode(VChip, {
                                color: unref(grave).openTasksCount > 0 ? "warning" : "success",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(grave).openTasksCount), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
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
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "mdi-grave-stone",
                      class: "mr-2"
                    }),
                    createVNode("span", { class: "text-h5" }, toDisplayString(unref(grave).deceasedName || "Unknown Deceased"), 1),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: openEditDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-pencil" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).cemeteryName), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Plot Reference"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).plotRef), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(grave).customerName), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Open Tasks"),
                            createVNode(VChip, {
                              color: unref(grave).openTasksCount > 0 ? "warning" : "success",
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(grave).openTasksCount), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
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
        if (unref(grave).specialInstructions) {
          _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VCardTitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "mdi-information",
                        class: "mr-2"
                      }, null, _parent3, _scopeId2));
                      _push3(` Special Instructions `);
                    } else {
                      return [
                        createVNode(VIcon, {
                          icon: "mdi-information",
                          class: "mr-2"
                        }),
                        createTextVNode(" Special Instructions ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(VCardText, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId2}>${ssrInterpolate(unref(grave).specialInstructions)}</p>`);
                    } else {
                      return [
                        createVNode("p", { style: { "white-space": "pre-wrap" } }, toDisplayString(unref(grave).specialInstructions), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-information",
                        class: "mr-2"
                      }),
                      createTextVNode(" Special Instructions ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "white-space": "pre-wrap" } }, toDisplayString(unref(grave).specialInstructions), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-account-circle",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Customer Details `);
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-account-circle",
                        class: "mr-2"
                      }),
                      createTextVNode(" Customer Details ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VList, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VListItem, {
                            to: `/customers/${unref(grave).customerId}`
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, { color: "primary" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, { icon: "mdi-account" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VAvatar, { color: "primary" }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-account" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, { icon: "mdi-chevron-right" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, { icon: "mdi-chevron-right" })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(grave).customerName)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(grave).customerName), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VListItemSubtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Click to view customer details`);
                                    } else {
                                      return [
                                        createTextVNode("Click to view customer details")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(grave).customerName), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Click to view customer details")
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
                            createVNode(VListItem, {
                              to: `/customers/${unref(grave).customerId}`
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, { color: "primary" }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-account" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              append: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-chevron-right" })
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(grave).customerName), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Click to view customer details")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            to: `/customers/${unref(grave).customerId}`
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, { color: "primary" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-account" })
                                ]),
                                _: 1
                              })
                            ]),
                            append: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-chevron-right" })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(grave).customerName), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Click to view customer details")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["to"])
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
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "mdi-account-circle",
                      class: "mr-2"
                    }),
                    createTextVNode(" Customer Details ")
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          to: `/customers/${unref(grave).customerId}`
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, { color: "primary" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-account" })
                              ]),
                              _: 1
                            })
                          ]),
                          append: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-chevron-right" })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(grave).customerName), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Click to view customer details")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
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
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-clipboard-check",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Tasks `);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: openTaskDialog
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }, null, _parent4, _scopeId3));
                          _push4(` New Task `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" New Task ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-clipboard-check",
                        class: "mr-2"
                      }),
                      createTextVNode(" Tasks "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        size: "small",
                        onClick: openTaskDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }),
                          createTextVNode(" New Task ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(tasksPending)) {
                _push2(ssrRenderComponent(VCardText, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VSkeletonLoader, { type: "list-item-two-line@3" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(tasks)?.length) {
                _push2(ssrRenderComponent(VList, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(tasks), (task) => {
                        _push3(ssrRenderComponent(VListItem, {
                          key: task.id,
                          to: `/tasks/${task.id}`
                        }, {
                          prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VChip, {
                                color: getStatusColor(task.status),
                                size: "small",
                                class: "mr-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(getStatusLabel(task.status))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: getStatusColor(task.status),
                                  size: "small",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ];
                            }
                          }),
                          append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VChip, {
                                color: getPriorityColor(task.priority),
                                size: "x-small",
                                variant: "outlined",
                                class: "mr-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(task.priority)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(task.priority), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VIcon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: getPriorityColor(task.priority),
                                  size: "x-small",
                                  variant: "outlined",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(task.priority), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode(VIcon, { icon: "mdi-chevron-right" })
                              ];
                            }
                          }),
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(task.title)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(task.title), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VListItemSubtitle, null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(task.type.replace("_", " "))} `);
                                    if (task.scheduledFor) {
                                      _push5(`<span${_scopeId4}> · ${ssrInterpolate(formatDate(task.scheduledFor))}</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(task.type.replace("_", " ")) + " ", 1),
                                      task.scheduledFor ? (openBlock(), createBlock("span", { key: 0 }, " · " + toDisplayString(formatDate(task.scheduledFor)), 1)) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
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
                                    createTextVNode(toDisplayString(task.type.replace("_", " ")) + " ", 1),
                                    task.scheduledFor ? (openBlock(), createBlock("span", { key: 0 }, " · " + toDisplayString(formatDate(task.scheduledFor)), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tasks), (task) => {
                          return openBlock(), createBlock(VListItem, {
                            key: task.id,
                            to: `/tasks/${task.id}`
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VChip, {
                                color: getStatusColor(task.status),
                                size: "small",
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                color: getPriorityColor(task.priority),
                                size: "x-small",
                                variant: "outlined",
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(task.priority), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode(VIcon, { icon: "mdi-chevron-right" })
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
                                  createTextVNode(toDisplayString(task.type.replace("_", " ")) + " ", 1),
                                  task.scheduledFor ? (openBlock(), createBlock("span", { key: 0 }, " · " + toDisplayString(formatDate(task.scheduledFor)), 1)) : createCommentVNode("", true)
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
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(VCardText, { class: "text-center text-medium-emphasis py-8" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "mdi-clipboard-text-outline",
                        size: "48",
                        class: "mb-2"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>No tasks for this grave</div>`);
                      _push3(ssrRenderComponent(VBtn, {
                        color: "primary",
                        variant: "tonal",
                        class: "mt-4",
                        onClick: openTaskDialog
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Create First Task `);
                          } else {
                            return [
                              createTextVNode(" Create First Task ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VIcon, {
                          icon: "mdi-clipboard-text-outline",
                          size: "48",
                          class: "mb-2"
                        }),
                        createVNode("div", null, "No tasks for this grave"),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          class: "mt-4",
                          onClick: openTaskDialog
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create First Task ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
            } else {
              return [
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "mdi-clipboard-check",
                      class: "mr-2"
                    }),
                    createTextVNode(" Tasks "),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: openTaskDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-plus",
                          start: ""
                        }),
                        createTextVNode(" New Task ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                unref(tasksPending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                  ]),
                  _: 1
                })) : unref(tasks)?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tasks), (task) => {
                      return openBlock(), createBlock(VListItem, {
                        key: task.id,
                        to: `/tasks/${task.id}`
                      }, {
                        prepend: withCtx(() => [
                          createVNode(VChip, {
                            color: getStatusColor(task.status),
                            size: "small",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getStatusLabel(task.status)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        append: withCtx(() => [
                          createVNode(VChip, {
                            color: getPriorityColor(task.priority),
                            size: "x-small",
                            variant: "outlined",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(task.priority), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode(VIcon, { icon: "mdi-chevron-right" })
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
                              createTextVNode(toDisplayString(task.type.replace("_", " ")) + " ", 1),
                              task.scheduledFor ? (openBlock(), createBlock("span", { key: 0 }, " · " + toDisplayString(formatDate(task.scheduledFor)), 1)) : createCommentVNode("", true)
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
                    createVNode("div", null, "No tasks for this grave"),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      class: "mt-4",
                      onClick: openTaskDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create First Task ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Grave not found `);
            } else {
              return [
                createTextVNode(" Grave not found ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_GraveDialog, {
        modelValue: unref(graveDialog),
        "onUpdate:modelValue": ($event) => isRef(graveDialog) ? graveDialog.value = $event : null,
        grave: unref(grave),
        onSaved: unref(refreshGrave)
      }, null, _parent));
      _push(ssrRenderComponent(_component_TaskDialog, {
        modelValue: unref(taskDialog),
        "onUpdate:modelValue": ($event) => isRef(taskDialog) ? taskDialog.value = $event : null,
        "prefill-grave-id": unref(graveId),
        onSaved: unref(refreshTasks)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/graves/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-C-2sxq-H.mjs.map
