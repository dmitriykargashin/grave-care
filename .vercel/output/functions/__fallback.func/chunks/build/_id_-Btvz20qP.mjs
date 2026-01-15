import { defineComponent, inject, computed, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, openBlock, Fragment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { N as useRoute$1, f as VBtn, h as VIcon, Q as VAlert, i as VCard, I as VCardTitle, q as VSpacer, s as VChip, J as VCardText, d as VRow, e as VCol, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, j as VAvatar } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const showComingSoon = inject("showComingSoon");
    const showSnackbar = inject("showSnackbar");
    const requestId = computed(() => route.params.id);
    const allRequests = [
      { id: "1", orderNumber: "GC-001", customerName: "Alice Johnson", deceasedName: "John Smith", service: "Grave Cleanup", cemetery: "Green Lawn Memorial", status: "Pending", contractor: null, date: "Jan 15" },
      { id: "2", orderNumber: "GC-002", customerName: "Bob Williams", deceasedName: "Mary Johnson", service: "Flower Delivery", cemetery: "Oak Hill Cemetery", status: "Assigned", contractor: "Mike Thompson", date: "Jan 15" },
      { id: "3", orderNumber: "GC-003", customerName: "Carol Davis", deceasedName: "Robert Williams", service: "Headstone Care", cemetery: "Peaceful Rest", status: "In Progress", contractor: "Sarah Wilson", date: "Jan 14" },
      { id: "4", orderNumber: "GC-004", customerName: "Dan Brown", deceasedName: "Elizabeth Brown", service: "Photo Report", cemetery: "Memorial Gardens", status: "Completed", contractor: "David Garcia", date: "Jan 14" },
      { id: "5", orderNumber: "GC-005", customerName: "Eve Miller", deceasedName: "James Davis", service: "Grave Cleanup", cemetery: "Sunset Cemetery", status: "Pending", contractor: null, date: "Jan 14" },
      { id: "6", orderNumber: "GC-006", customerName: "Frank Garcia", deceasedName: "Patricia Wilson", service: "Flower Delivery", cemetery: "Green Lawn Memorial", status: "Assigned", contractor: "Emily Martinez", date: "Jan 13" },
      { id: "7", orderNumber: "GC-007", customerName: "Grace Lee", deceasedName: "Michael Moore", service: "Headstone Care", cemetery: "Oak Hill Cemetery", status: "Completed", contractor: "Mike Thompson", date: "Jan 13" },
      { id: "8", orderNumber: "GC-008", customerName: "Henry Chen", deceasedName: "Linda Taylor", service: "Grave Cleanup", cemetery: "Peaceful Rest", status: "Pending", contractor: null, date: "Jan 12" }
    ];
    const request = ref(allRequests.find((r) => r.id === requestId.value) || null);
    const getStatusColor = (status) => {
      switch (status) {
        case "Pending":
          return "warning";
        case "Assigned":
          return "info";
        case "In Progress":
          return "primary";
        case "Completed":
          return "success";
        case "Cancelled":
          return "error";
        default:
          return "grey";
      }
    };
    const updateStatus = (newStatus) => {
      if (request.value) {
        request.value.status = newStatus;
        showSnackbar?.(`Status updated to ${newStatus}`, "success");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        class: "mb-4",
        to: "/admin/requests"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-arrow-left",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(` Back to Requests `);
          } else {
            return [
              createVNode(VIcon, {
                icon: "mdi-arrow-left",
                start: ""
              }),
              createTextVNode(" Back to Requests ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(request)) {
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request not found `);
            } else {
              return [
                createTextVNode(" Request not found ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center flex-wrap ga-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-h5"${_scopeId2}>Order ${ssrInterpolate(unref(request).orderNumber)}</span>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VChip, {
                      color: getStatusColor(unref(request).status),
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(request).status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(request).status), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: unref(showComingSoon)
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
                      createVNode("span", { class: "text-h5" }, "Order " + toDisplayString(unref(request).orderNumber), 1),
                      createVNode(VSpacer),
                      createVNode(VChip, {
                        color: getStatusColor(unref(request).status),
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(request).status), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode(VBtn, {
                        icon: "",
                        variant: "text",
                        onClick: unref(showComingSoon)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-pencil" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Customer</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(request).customerName)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).customerName), 1)
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
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Service</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(request).service)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Service"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).service), 1)
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
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Cemetery</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(request).cemetery)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).cemetery), 1)
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
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Date</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(unref(request).date)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).date), 1)
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
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).customerName), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Service"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).service), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).cemetery), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).date), 1)
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
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).customerName), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Service"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).service), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).cemetery), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).date), 1)
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
                createVNode(VCardTitle, { class: "d-flex align-center flex-wrap ga-2" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-h5" }, "Order " + toDisplayString(unref(request).orderNumber), 1),
                    createVNode(VSpacer),
                    createVNode(VChip, {
                      color: getStatusColor(unref(request).status),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(request).status), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: unref(showComingSoon)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-pencil" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).customerName), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Service"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).service), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Cemetery"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).cemetery), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Date"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(unref(request).date), 1)
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
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "h-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-account",
                                  class: "mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(` Deceased Information `);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-account",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Deceased Information ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-account" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(request).deceasedName)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Deceased Name`);
                                                } else {
                                                  return [
                                                    createTextVNode("Deceased Name")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Deceased Name")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-map-marker" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-map-marker" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(request).cemetery)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Cemetery`);
                                                } else {
                                                  return [
                                                    createTextVNode("Cemetery")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Cemetery")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-account" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Deceased Name")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-map-marker" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Cemetery")
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-account" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Deceased Name")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-map-marker" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Cemetery")
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-account",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Deceased Information ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-account" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Deceased Name")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-map-marker" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Cemetery")
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, { class: "h-100" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-account",
                                class: "mr-2"
                              }),
                              createTextVNode(" Deceased Information ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-account" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Deceased Name")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-map-marker" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Cemetery")
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "h-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-hard-hat",
                                  class: "mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(` Contractor Assignment `);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-hard-hat",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Contractor Assignment ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(request).contractor) {
                                  _push5(ssrRenderComponent(VList, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItem, null, {
                                          prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VAvatar, {
                                                color: "primary",
                                                size: "40"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VIcon, { icon: "mdi-account" })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VAvatar, {
                                                  color: "primary",
                                                  size: "40"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-account" })
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(unref(request).contractor)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(unref(request).contractor), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`Assigned Contractor`);
                                                  } else {
                                                    return [
                                                      createTextVNode("Assigned Contractor")
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(request).contractor), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Assigned Contractor")
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItem, null, {
                                            prepend: withCtx(() => [
                                              createVNode(VAvatar, {
                                                color: "primary",
                                                size: "40"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { icon: "mdi-account" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(request).contractor), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Assigned Contractor")
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
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!--[-->`);
                                  _push5(ssrRenderComponent(VAlert, {
                                    type: "info",
                                    variant: "tonal",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` No contractor assigned yet `);
                                      } else {
                                        return [
                                          createTextVNode(" No contractor assigned yet ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, {
                                    color: "primary",
                                    block: "",
                                    onClick: unref(showComingSoon)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Assign Contractor `);
                                      } else {
                                        return [
                                          createTextVNode(" Assign Contractor ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(`<!--]-->`);
                                }
                              } else {
                                return [
                                  unref(request).contractor ? (openBlock(), createBlock(VList, { key: 0 }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VAvatar, {
                                            color: "primary",
                                            size: "40"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { icon: "mdi-account" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(request).contractor), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Assigned Contractor")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createVNode(VAlert, {
                                      type: "info",
                                      variant: "tonal",
                                      class: "mb-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" No contractor assigned yet ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      block: "",
                                      onClick: unref(showComingSoon)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Assign Contractor ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ], 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-hard-hat",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Contractor Assignment ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                unref(request).contractor ? (openBlock(), createBlock(VList, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VAvatar, {
                                          color: "primary",
                                          size: "40"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-account" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(request).contractor), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Assigned Contractor")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode(VAlert, {
                                    type: "info",
                                    variant: "tonal",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" No contractor assigned yet ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    block: "",
                                    onClick: unref(showComingSoon)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Assign Contractor ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ], 64))
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
                      createVNode(VCard, { class: "h-100" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-hard-hat",
                                class: "mr-2"
                              }),
                              createTextVNode(" Contractor Assignment ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              unref(request).contractor ? (openBlock(), createBlock(VList, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        color: "primary",
                                        size: "40"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-account" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(request).contractor), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Assigned Contractor")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode(VAlert, {
                                  type: "info",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" No contractor assigned yet ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  block: "",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Assign Contractor ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ], 64))
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
                createVNode(VCol, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-account",
                              class: "mr-2"
                            }),
                            createTextVNode(" Deceased Information ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-account" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(request).deceasedName), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Deceased Name")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-map-marker" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(request).cemetery), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Cemetery")
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
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-hard-hat",
                              class: "mr-2"
                            }),
                            createTextVNode(" Contractor Assignment ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            unref(request).contractor ? (openBlock(), createBlock(VList, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      color: "primary",
                                      size: "40"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-account" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(request).contractor), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Assigned Contractor")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" No contractor assigned yet ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                color: "primary",
                                block: "",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Assign Contractor ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ], 64))
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
        _push(ssrRenderComponent(VCard, { class: "mt-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-cog",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Actions `);
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-cog",
                        class: "mr-2"
                      }),
                      createTextVNode(" Actions ")
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
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "success",
                                  "prepend-icon": "mdi-check",
                                  onClick: ($event) => updateStatus("Completed"),
                                  disabled: unref(request).status === "Completed"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Mark Complete `);
                                    } else {
                                      return [
                                        createTextVNode(" Mark Complete ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    color: "success",
                                    "prepend-icon": "mdi-check",
                                    onClick: ($event) => updateStatus("Completed"),
                                    disabled: unref(request).status === "Completed"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Mark Complete ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
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
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  "prepend-icon": "mdi-play",
                                  onClick: ($event) => updateStatus("In Progress"),
                                  disabled: unref(request).status === "In Progress"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Start Work `);
                                    } else {
                                      return [
                                        createTextVNode(" Start Work ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    color: "primary",
                                    "prepend-icon": "mdi-play",
                                    onClick: ($event) => updateStatus("In Progress"),
                                    disabled: unref(request).status === "In Progress"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Start Work ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
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
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "error",
                                  "prepend-icon": "mdi-cancel",
                                  onClick: ($event) => updateStatus("Cancelled"),
                                  disabled: unref(request).status === "Cancelled"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Cancel Request `);
                                    } else {
                                      return [
                                        createTextVNode(" Cancel Request ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    color: "error",
                                    "prepend-icon": "mdi-cancel",
                                    onClick: ($event) => updateStatus("Cancelled"),
                                    disabled: unref(request).status === "Cancelled"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cancel Request ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
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
                                _push5(ssrRenderComponent(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  "prepend-icon": "mdi-message-text",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Contact Customer `);
                                    } else {
                                      return [
                                        createTextVNode(" Contact Customer ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    block: "",
                                    variant: "outlined",
                                    "prepend-icon": "mdi-message-text",
                                    onClick: unref(showComingSoon)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Contact Customer ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "success",
                                  "prepend-icon": "mdi-check",
                                  onClick: ($event) => updateStatus("Completed"),
                                  disabled: unref(request).status === "Completed"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Mark Complete ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "primary",
                                  "prepend-icon": "mdi-play",
                                  onClick: ($event) => updateStatus("In Progress"),
                                  disabled: unref(request).status === "In Progress"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Start Work ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  color: "error",
                                  "prepend-icon": "mdi-cancel",
                                  onClick: ($event) => updateStatus("Cancelled"),
                                  disabled: unref(request).status === "Cancelled"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel Request ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  "prepend-icon": "mdi-message-text",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Contact Customer ")
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
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                color: "success",
                                "prepend-icon": "mdi-check",
                                onClick: ($event) => updateStatus("Completed"),
                                disabled: unref(request).status === "Completed"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Mark Complete ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                color: "primary",
                                "prepend-icon": "mdi-play",
                                onClick: ($event) => updateStatus("In Progress"),
                                disabled: unref(request).status === "In Progress"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Start Work ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                color: "error",
                                "prepend-icon": "mdi-cancel",
                                onClick: ($event) => updateStatus("Cancelled"),
                                disabled: unref(request).status === "Cancelled"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cancel Request ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-message-text",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Contact Customer ")
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardTitle, null, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "mdi-cog",
                      class: "mr-2"
                    }),
                    createTextVNode(" Actions ")
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
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              color: "success",
                              "prepend-icon": "mdi-check",
                              onClick: ($event) => updateStatus("Completed"),
                              disabled: unref(request).status === "Completed"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Mark Complete ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              color: "primary",
                              "prepend-icon": "mdi-play",
                              onClick: ($event) => updateStatus("In Progress"),
                              disabled: unref(request).status === "In Progress"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Start Work ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              color: "error",
                              "prepend-icon": "mdi-cancel",
                              onClick: ($event) => updateStatus("Cancelled"),
                              disabled: unref(request).status === "Cancelled"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel Request ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              "prepend-icon": "mdi-message-text",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Contact Customer ")
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
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/requests/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Btvz20qP.mjs.map
