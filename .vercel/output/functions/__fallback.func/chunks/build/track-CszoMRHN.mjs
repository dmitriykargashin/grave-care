import { defineComponent, ref, computed, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { V as VContainer, d as VRow, e as VCol, i as VCard, h as VIcon, p as VTextField, f as VBtn, q as VSpacer, s as VChip, t as VTimeline, v as VTimelineItem, w as VDivider, x as VList, y as VListItem, z as VListItemTitle, g as VImg } from './server.mjs';
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
  __name: "track",
  __ssrInlineRender: true,
  setup(__props) {
    const orderNumber = ref("");
    const email = ref("");
    const loading = ref(false);
    const showResult = ref(false);
    const demoOrder = ref({
      orderNumber: "GC-DEMO123",
      status: "In Progress",
      cemetery: "Green Lawn Memorial Park",
      deceasedName: "John Smith",
      service: "Grave Cleanup",
      timeline: [
        { title: "Order Placed", date: "Jan 14, 2026 - 2:30 PM", completed: true },
        { title: "Payment Confirmed", date: "Jan 14, 2026 - 2:31 PM", completed: true },
        { title: "Assigned to Contractor", date: "Jan 14, 2026 - 3:15 PM", completed: true },
        { title: "Service In Progress", date: "Jan 15, 2026 - 10:00 AM", completed: true },
        { title: "Completed", date: "", completed: false }
      ]
    });
    const statusColor = computed(() => {
      switch (demoOrder.value.status) {
        case "Completed":
          return "success";
        case "In Progress":
          return "warning";
        case "Assigned":
          return "info";
        default:
          return "grey";
      }
    });
    const statusIcon = computed(() => {
      switch (demoOrder.value.status) {
        case "Completed":
          return "mdi-check-circle";
        case "In Progress":
          return "mdi-progress-clock";
        case "Assigned":
          return "mdi-account-check";
        default:
          return "mdi-clock-outline";
      }
    });
    const trackOrder = async () => {
      loading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const statuses = ["In Progress", "Completed", "Assigned"];
      demoOrder.value.status = statuses[Math.floor(Math.random() * statuses.length)];
      if (demoOrder.value.status === "Completed") {
        demoOrder.value.timeline[4].completed = true;
        demoOrder.value.timeline[4].date = "Jan 15, 2026 - 11:45 AM";
      }
      loading.value = false;
      showResult.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-8" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "pa-6 pa-md-8",
                          elevation: "4",
                          rounded: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-center mb-8"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-magnify",
                                color: "primary",
                                size: "48",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h1 class="text-h4 font-weight-bold mb-2"${_scopeId4}>Track Your Order</h1><p class="text-body-1 text-grey-darken-1"${_scopeId4}> Enter your order number or email to check the status. </p></div>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(orderNumber),
                                "onUpdate:modelValue": ($event) => isRef(orderNumber) ? orderNumber.value = $event : null,
                                label: "Order Number",
                                placeholder: "e.g., GC-ABC123",
                                "prepend-inner-icon": "mdi-pound",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="text-center text-grey mb-4"${_scopeId4}>- or -</div>`);
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                label: "Email Address",
                                type: "email",
                                placeholder: "your@email.com",
                                "prepend-inner-icon": "mdi-email",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "primary",
                                size: "large",
                                loading: unref(loading),
                                onClick: trackOrder
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Track Order `);
                                  } else {
                                    return [
                                      createTextVNode(" Track Order ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-center mb-8" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-magnify",
                                    color: "primary",
                                    size: "48",
                                    class: "mb-4"
                                  }),
                                  createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Track Your Order"),
                                  createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Enter your order number or email to check the status. ")
                                ]),
                                createVNode(VTextField, {
                                  modelValue: unref(orderNumber),
                                  "onUpdate:modelValue": ($event) => isRef(orderNumber) ? orderNumber.value = $event : null,
                                  label: "Order Number",
                                  placeholder: "e.g., GC-ABC123",
                                  "prepend-inner-icon": "mdi-pound",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "text-center text-grey mb-4" }, "- or -"),
                                createVNode(VTextField, {
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  label: "Email Address",
                                  type: "email",
                                  placeholder: "your@email.com",
                                  "prepend-inner-icon": "mdi-email",
                                  class: "mb-6"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "primary",
                                  size: "large",
                                  loading: unref(loading),
                                  onClick: trackOrder
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Track Order ")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(showResult)) {
                          _push4(ssrRenderComponent(VCard, {
                            class: "mt-6 pa-6",
                            elevation: "4",
                            rounded: "xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex align-center mb-6"${_scopeId4}><div${_scopeId4}><div class="text-overline text-grey"${_scopeId4}>Order Number</div><div class="text-h5 font-weight-bold"${_scopeId4}>${ssrInterpolate(unref(demoOrder).orderNumber)}</div></div>`);
                                _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VChip, {
                                  color: unref(statusColor),
                                  size: "large"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, { start: "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(statusIcon))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(` ${ssrInterpolate(unref(demoOrder).status)}`);
                                    } else {
                                      return [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" " + toDisplayString(unref(demoOrder).status), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                                _push5(ssrRenderComponent(VTimeline, {
                                  density: "compact",
                                  side: "end"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(demoOrder).timeline, (event) => {
                                        _push6(ssrRenderComponent(VTimelineItem, {
                                          key: event.title,
                                          "dot-color": event.completed ? "success" : "grey-lighten-2",
                                          size: "small"
                                        }, {
                                          icon: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              if (event.completed) {
                                                _push7(ssrRenderComponent(VIcon, {
                                                  color: "white",
                                                  size: "small"
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`mdi-check`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-check")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                            } else {
                                              return [
                                                event.completed ? (openBlock(), createBlock(VIcon, {
                                                  key: 0,
                                                  color: "white",
                                                  size: "small"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-check")
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass({ "text-grey": !event.completed })}"${_scopeId6}><div class="font-weight-medium"${_scopeId6}>${ssrInterpolate(event.title)}</div><div class="text-caption"${_scopeId6}>${ssrInterpolate(event.date || "Pending")}</div></div>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  class: { "text-grey": !event.completed }
                                                }, [
                                                  createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                                  createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                                ], 2)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(demoOrder).timeline, (event) => {
                                          return openBlock(), createBlock(VTimelineItem, {
                                            key: event.title,
                                            "dot-color": event.completed ? "success" : "grey-lighten-2",
                                            size: "small"
                                          }, {
                                            icon: withCtx(() => [
                                              event.completed ? (openBlock(), createBlock(VIcon, {
                                                key: 0,
                                                color: "white",
                                                size: "small"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: { "text-grey": !event.completed }
                                              }, [
                                                createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                                createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                              ], 2)
                                            ]),
                                            _: 2
                                          }, 1032, ["dot-color"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent5, _scopeId4));
                                _push5(`<h4 class="font-weight-bold mb-3"${_scopeId4}>Order Details</h4>`);
                                _push5(ssrRenderComponent(VList, {
                                  density: "compact",
                                  class: "bg-transparent"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-map-marker`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-map-marker")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-map-marker")
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
                                                  _push8(`${ssrInterpolate(unref(demoOrder).cemetery)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
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
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-account-heart`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-account-heart")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account-heart")
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
                                                  _push8(`${ssrInterpolate(unref(demoOrder).deceasedName)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
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
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-broom`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-broom")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-broom")
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
                                                  _push8(`${ssrInterpolate(unref(demoOrder).service)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(demoOrder).service), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(demoOrder).service), 1)
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
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-map-marker")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account-heart")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-broom")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(demoOrder).service), 1)
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
                                if (unref(demoOrder).status === "Completed") {
                                  _push5(`<!--[-->`);
                                  _push5(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent5, _scopeId4));
                                  _push5(`<h4 class="font-weight-bold mb-3"${_scopeId4}>Service Photos</h4>`);
                                  _push5(ssrRenderComponent(VRow, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCard, {
                                                variant: "outlined",
                                                class: "pa-2"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="text-caption text-grey mb-1"${_scopeId7}>Before</div>`);
                                                    _push8(ssrRenderComponent(VImg, {
                                                      src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                                      height: "150",
                                                      cover: "",
                                                      class: "rounded"
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                                      createVNode(VImg, {
                                                        src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                                        height: "150",
                                                        cover: "",
                                                        class: "rounded"
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCard, {
                                                  variant: "outlined",
                                                  class: "pa-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                                    createVNode(VImg, {
                                                      src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                                      height: "150",
                                                      cover: "",
                                                      class: "rounded"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VCol, { cols: "6" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCard, {
                                                variant: "outlined",
                                                class: "pa-2"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`<div class="text-caption text-grey mb-1"${_scopeId7}>After</div>`);
                                                    _push8(ssrRenderComponent(VImg, {
                                                      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                                      height: "150",
                                                      cover: "",
                                                      class: "rounded"
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                                      createVNode(VImg, {
                                                        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                                        height: "150",
                                                        cover: "",
                                                        class: "rounded"
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCard, {
                                                  variant: "outlined",
                                                  class: "pa-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                                    createVNode(VImg, {
                                                      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                                      height: "150",
                                                      cover: "",
                                                      class: "rounded"
                                                    })
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
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                variant: "outlined",
                                                class: "pa-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                                  createVNode(VImg, {
                                                    src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                                    height: "150",
                                                    cover: "",
                                                    class: "rounded"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, {
                                                variant: "outlined",
                                                class: "pa-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                                  createVNode(VImg, {
                                                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                                    height: "150",
                                                    cover: "",
                                                    class: "rounded"
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
                                  }, _parent5, _scopeId4));
                                  _push5(`<!--]-->`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="text-center mt-6"${_scopeId4}>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  onClick: ($event) => showResult.value = false
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Track Another Order `);
                                    } else {
                                      return [
                                        createTextVNode(" Track Another Order ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex align-center mb-6" }, [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-overline text-grey" }, "Order Number"),
                                      createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(demoOrder).orderNumber), 1)
                                    ]),
                                    createVNode(VSpacer),
                                    createVNode(VChip, {
                                      color: unref(statusColor),
                                      size: "large"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" " + toDisplayString(unref(demoOrder).status), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  createVNode(VTimeline, {
                                    density: "compact",
                                    side: "end"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(demoOrder).timeline, (event) => {
                                        return openBlock(), createBlock(VTimelineItem, {
                                          key: event.title,
                                          "dot-color": event.completed ? "success" : "grey-lighten-2",
                                          size: "small"
                                        }, {
                                          icon: withCtx(() => [
                                            event.completed ? (openBlock(), createBlock(VIcon, {
                                              key: 0,
                                              color: "white",
                                              size: "small"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: { "text-grey": !event.completed }
                                            }, [
                                              createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                              createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                            ], 2)
                                          ]),
                                          _: 2
                                        }, 1032, ["dot-color"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-6" }),
                                  createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Details"),
                                  createVNode(VList, {
                                    density: "compact",
                                    class: "bg-transparent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-map-marker")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account-heart")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-broom")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(demoOrder).service), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  unref(demoOrder).status === "Completed" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(VDivider, { class: "my-6" }),
                                    createVNode("h4", { class: "font-weight-bold mb-3" }, "Service Photos"),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              variant: "outlined",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                                createVNode(VImg, {
                                                  src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                                  height: "150",
                                                  cover: "",
                                                  class: "rounded"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              variant: "outlined",
                                              class: "pa-2"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                                createVNode(VImg, {
                                                  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                                  height: "150",
                                                  cover: "",
                                                  class: "rounded"
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
                                  ], 64)) : createCommentVNode("", true),
                                  createVNode("div", { class: "text-center mt-6" }, [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      color: "primary",
                                      onClick: ($event) => showResult.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Track Another Order ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
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
                          createVNode(VCard, {
                            class: "pa-6 pa-md-8",
                            elevation: "4",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center mb-8" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-magnify",
                                  color: "primary",
                                  size: "48",
                                  class: "mb-4"
                                }),
                                createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Track Your Order"),
                                createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Enter your order number or email to check the status. ")
                              ]),
                              createVNode(VTextField, {
                                modelValue: unref(orderNumber),
                                "onUpdate:modelValue": ($event) => isRef(orderNumber) ? orderNumber.value = $event : null,
                                label: "Order Number",
                                placeholder: "e.g., GC-ABC123",
                                "prepend-inner-icon": "mdi-pound",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "text-center text-grey mb-4" }, "- or -"),
                              createVNode(VTextField, {
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                label: "Email Address",
                                type: "email",
                                placeholder: "your@email.com",
                                "prepend-inner-icon": "mdi-email",
                                class: "mb-6"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                block: "",
                                color: "primary",
                                size: "large",
                                loading: unref(loading),
                                onClick: trackOrder
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Track Order ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          unref(showResult) ? (openBlock(), createBlock(VCard, {
                            key: 0,
                            class: "mt-6 pa-6",
                            elevation: "4",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center mb-6" }, [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-overline text-grey" }, "Order Number"),
                                  createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(demoOrder).orderNumber), 1)
                                ]),
                                createVNode(VSpacer),
                                createVNode(VChip, {
                                  color: unref(statusColor),
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(unref(demoOrder).status), 1)
                                  ]),
                                  _: 1
                                }, 8, ["color"])
                              ]),
                              createVNode(VTimeline, {
                                density: "compact",
                                side: "end"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(demoOrder).timeline, (event) => {
                                    return openBlock(), createBlock(VTimelineItem, {
                                      key: event.title,
                                      "dot-color": event.completed ? "success" : "grey-lighten-2",
                                      size: "small"
                                    }, {
                                      icon: withCtx(() => [
                                        event.completed ? (openBlock(), createBlock(VIcon, {
                                          key: 0,
                                          color: "white",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: { "text-grey": !event.completed }
                                        }, [
                                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                          createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1032, ["dot-color"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-6" }),
                              createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Details"),
                              createVNode(VList, {
                                density: "compact",
                                class: "bg-transparent"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-map-marker")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account-heart")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-broom")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(demoOrder).service), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              unref(demoOrder).status === "Completed" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(VDivider, { class: "my-6" }),
                                createVNode("h4", { class: "font-weight-bold mb-3" }, "Service Photos"),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                            createVNode(VImg, {
                                              src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                              height: "150",
                                              cover: "",
                                              class: "rounded"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "pa-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                            createVNode(VImg, {
                                              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                              height: "150",
                                              cover: "",
                                              class: "rounded"
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
                              ], 64)) : createCommentVNode("", true),
                              createVNode("div", { class: "text-center mt-6" }, [
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  onClick: ($event) => showResult.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Track Another Order ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "pa-6 pa-md-8",
                          elevation: "4",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center mb-8" }, [
                              createVNode(VIcon, {
                                icon: "mdi-magnify",
                                color: "primary",
                                size: "48",
                                class: "mb-4"
                              }),
                              createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Track Your Order"),
                              createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Enter your order number or email to check the status. ")
                            ]),
                            createVNode(VTextField, {
                              modelValue: unref(orderNumber),
                              "onUpdate:modelValue": ($event) => isRef(orderNumber) ? orderNumber.value = $event : null,
                              label: "Order Number",
                              placeholder: "e.g., GC-ABC123",
                              "prepend-inner-icon": "mdi-pound",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "text-center text-grey mb-4" }, "- or -"),
                            createVNode(VTextField, {
                              modelValue: unref(email),
                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                              label: "Email Address",
                              type: "email",
                              placeholder: "your@email.com",
                              "prepend-inner-icon": "mdi-email",
                              class: "mb-6"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              size: "large",
                              loading: unref(loading),
                              onClick: trackOrder
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Track Order ")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        }),
                        unref(showResult) ? (openBlock(), createBlock(VCard, {
                          key: 0,
                          class: "mt-6 pa-6",
                          elevation: "4",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center mb-6" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-overline text-grey" }, "Order Number"),
                                createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(demoOrder).orderNumber), 1)
                              ]),
                              createVNode(VSpacer),
                              createVNode(VChip, {
                                color: unref(statusColor),
                                size: "large"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(demoOrder).status), 1)
                                ]),
                                _: 1
                              }, 8, ["color"])
                            ]),
                            createVNode(VTimeline, {
                              density: "compact",
                              side: "end"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(demoOrder).timeline, (event) => {
                                  return openBlock(), createBlock(VTimelineItem, {
                                    key: event.title,
                                    "dot-color": event.completed ? "success" : "grey-lighten-2",
                                    size: "small"
                                  }, {
                                    icon: withCtx(() => [
                                      event.completed ? (openBlock(), createBlock(VIcon, {
                                        key: 0,
                                        color: "white",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-check")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: { "text-grey": !event.completed }
                                      }, [
                                        createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                        createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1032, ["dot-color"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-6" }),
                            createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Details"),
                            createVNode(VList, {
                              density: "compact",
                              class: "bg-transparent"
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-map-marker")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account-heart")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-broom")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(demoOrder).service), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            unref(demoOrder).status === "Completed" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(VDivider, { class: "my-6" }),
                              createVNode("h4", { class: "font-weight-bold mb-3" }, "Service Photos"),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                          createVNode(VImg, {
                                            src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                            height: "150",
                                            cover: "",
                                            class: "rounded"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                          createVNode(VImg, {
                                            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                            height: "150",
                                            cover: "",
                                            class: "rounded"
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
                            ], 64)) : createCommentVNode("", true),
                            createVNode("div", { class: "text-center mt-6" }, [
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                onClick: ($event) => showResult.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Track Another Order ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
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
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "pa-6 pa-md-8",
                        elevation: "4",
                        rounded: "xl"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center mb-8" }, [
                            createVNode(VIcon, {
                              icon: "mdi-magnify",
                              color: "primary",
                              size: "48",
                              class: "mb-4"
                            }),
                            createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Track Your Order"),
                            createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Enter your order number or email to check the status. ")
                          ]),
                          createVNode(VTextField, {
                            modelValue: unref(orderNumber),
                            "onUpdate:modelValue": ($event) => isRef(orderNumber) ? orderNumber.value = $event : null,
                            label: "Order Number",
                            placeholder: "e.g., GC-ABC123",
                            "prepend-inner-icon": "mdi-pound",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "text-center text-grey mb-4" }, "- or -"),
                          createVNode(VTextField, {
                            modelValue: unref(email),
                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                            label: "Email Address",
                            type: "email",
                            placeholder: "your@email.com",
                            "prepend-inner-icon": "mdi-email",
                            class: "mb-6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            size: "large",
                            loading: unref(loading),
                            onClick: trackOrder
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Track Order ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        _: 1
                      }),
                      unref(showResult) ? (openBlock(), createBlock(VCard, {
                        key: 0,
                        class: "mt-6 pa-6",
                        elevation: "4",
                        rounded: "xl"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center mb-6" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-overline text-grey" }, "Order Number"),
                              createVNode("div", { class: "text-h5 font-weight-bold" }, toDisplayString(unref(demoOrder).orderNumber), 1)
                            ]),
                            createVNode(VSpacer),
                            createVNode(VChip, {
                              color: unref(statusColor),
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(statusIcon)), 1)
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" " + toDisplayString(unref(demoOrder).status), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ]),
                          createVNode(VTimeline, {
                            density: "compact",
                            side: "end"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(demoOrder).timeline, (event) => {
                                return openBlock(), createBlock(VTimelineItem, {
                                  key: event.title,
                                  "dot-color": event.completed ? "success" : "grey-lighten-2",
                                  size: "small"
                                }, {
                                  icon: withCtx(() => [
                                    event.completed ? (openBlock(), createBlock(VIcon, {
                                      key: 0,
                                      color: "white",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: { "text-grey": !event.completed }
                                    }, [
                                      createVNode("div", { class: "font-weight-medium" }, toDisplayString(event.title), 1),
                                      createVNode("div", { class: "text-caption" }, toDisplayString(event.date || "Pending"), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["dot-color"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-6" }),
                          createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Details"),
                          createVNode(VList, {
                            density: "compact",
                            class: "bg-transparent"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-map-marker")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(demoOrder).cemetery), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-heart")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(demoOrder).deceasedName), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VListItem, null, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-broom")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(demoOrder).service), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          unref(demoOrder).status === "Completed" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(VDivider, { class: "my-6" }),
                            createVNode("h4", { class: "font-weight-bold mb-3" }, "Service Photos"),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-grey mb-1" }, "Before"),
                                        createVNode(VImg, {
                                          src: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=300&h=200&fit=crop",
                                          height: "150",
                                          cover: "",
                                          class: "rounded"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption text-grey mb-1" }, "After"),
                                        createVNode(VImg, {
                                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
                                          height: "150",
                                          cover: "",
                                          class: "rounded"
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
                          ], 64)) : createCommentVNode("", true),
                          createVNode("div", { class: "text-center mt-6" }, [
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              onClick: ($event) => showResult.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Track Another Order ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/track.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=track-CszoMRHN.mjs.map
