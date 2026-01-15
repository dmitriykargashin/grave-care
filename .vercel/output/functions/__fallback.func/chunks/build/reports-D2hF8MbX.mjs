import { defineComponent, inject, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as VRow, e as VCol, i as VCard, I as VCardTitle, h as VIcon, w as VDivider, J as VCardText, x as VList, y as VListItem, z as VListItemTitle, X as VProgressLinear, B as VListItemSubtitle, j as VAvatar, f as VBtn } from './server.mjs';
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
  __name: "reports",
  __ssrInlineRender: true,
  setup(__props) {
    const showComingSoon = inject("showComingSoon");
    const serviceStats = [
      { name: "Grave Cleanup", count: 98, percentage: 40, color: "green" },
      { name: "Flower Delivery", count: 74, percentage: 30, color: "pink" },
      { name: "Headstone Care", count: 49, percentage: 20, color: "grey" },
      { name: "Photo Report", count: 27, percentage: 10, color: "blue" }
    ];
    const topCemeteries = [
      { name: "Green Lawn Memorial Park", location: "Austin, TX", orders: 45 },
      { name: "Oak Hill Cemetery", location: "Dallas, TX", orders: 38 },
      { name: "Peaceful Rest", location: "Houston, TX", orders: 32 },
      { name: "Memorial Gardens", location: "San Antonio, TX", orders: 28 },
      { name: "Sunset Cemetery", location: "Austin, TX", orders: 21 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overline text-grey mb-1"${_scopeId3}>Total Revenue</div><div class="text-h4 font-weight-bold text-success"${_scopeId3}>$12,450</div><div class="text-caption text-success"${_scopeId3}>+12% from last month</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Revenue"),
                          createVNode("div", { class: "text-h4 font-weight-bold text-success" }, "$12,450"),
                          createVNode("div", { class: "text-caption text-success" }, "+12% from last month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Revenue"),
                        createVNode("div", { class: "text-h4 font-weight-bold text-success" }, "$12,450"),
                        createVNode("div", { class: "text-caption text-success" }, "+12% from last month")
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
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overline text-grey mb-1"${_scopeId3}>Total Orders</div><div class="text-h4 font-weight-bold"${_scopeId3}>248</div><div class="text-caption text-success"${_scopeId3}>+8% from last month</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Orders"),
                          createVNode("div", { class: "text-h4 font-weight-bold" }, "248"),
                          createVNode("div", { class: "text-caption text-success" }, "+8% from last month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Orders"),
                        createVNode("div", { class: "text-h4 font-weight-bold" }, "248"),
                        createVNode("div", { class: "text-caption text-success" }, "+8% from last month")
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
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overline text-grey mb-1"${_scopeId3}>Avg Completion Time</div><div class="text-h4 font-weight-bold"${_scopeId3}>18h</div><div class="text-caption text-success"${_scopeId3}>-2h from last month</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overline text-grey mb-1" }, "Avg Completion Time"),
                          createVNode("div", { class: "text-h4 font-weight-bold" }, "18h"),
                          createVNode("div", { class: "text-caption text-success" }, "-2h from last month")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overline text-grey mb-1" }, "Avg Completion Time"),
                        createVNode("div", { class: "text-h4 font-weight-bold" }, "18h"),
                        createVNode("div", { class: "text-caption text-success" }, "-2h from last month")
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
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overline text-grey mb-1"${_scopeId3}>Customer Satisfaction</div><div class="text-h4 font-weight-bold"${_scopeId3}>4.8</div><div class="text-caption text-grey"${_scopeId3}>out of 5 stars</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overline text-grey mb-1" }, "Customer Satisfaction"),
                          createVNode("div", { class: "text-h4 font-weight-bold" }, "4.8"),
                          createVNode("div", { class: "text-caption text-grey" }, "out of 5 stars")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overline text-grey mb-1" }, "Customer Satisfaction"),
                        createVNode("div", { class: "text-h4 font-weight-bold" }, "4.8"),
                        createVNode("div", { class: "text-caption text-grey" }, "out of 5 stars")
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
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Revenue"),
                      createVNode("div", { class: "text-h4 font-weight-bold text-success" }, "$12,450"),
                      createVNode("div", { class: "text-caption text-success" }, "+12% from last month")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overline text-grey mb-1" }, "Total Orders"),
                      createVNode("div", { class: "text-h4 font-weight-bold" }, "248"),
                      createVNode("div", { class: "text-caption text-success" }, "+8% from last month")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overline text-grey mb-1" }, "Avg Completion Time"),
                      createVNode("div", { class: "text-h4 font-weight-bold" }, "18h"),
                      createVNode("div", { class: "text-caption text-success" }, "-2h from last month")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4",
                    elevation: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overline text-grey mb-1" }, "Customer Satisfaction"),
                      createVNode("div", { class: "text-h4 font-weight-bold" }, "4.8"),
                      createVNode("div", { class: "text-caption text-grey" }, "out of 5 stars")
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
                  _push3(ssrRenderComponent(VCard, { elevation: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-chart-line`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-chart-line")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Orders by Service Type `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-chart-line")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Orders by Service Type ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(serviceStats, (service) => {
                                      _push6(ssrRenderComponent(VListItem, {
                                        key: service.name
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(service.name)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(service.name), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VProgressLinear, {
                                              "model-value": service.percentage,
                                              color: service.color,
                                              height: "8",
                                              rounded: "",
                                              class: "mt-2"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(service.name), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VProgressLinear, {
                                                "model-value": service.percentage,
                                                color: service.color,
                                                height: "8",
                                                rounded: "",
                                                class: "mt-2"
                                              }, null, 8, ["model-value", "color"])
                                            ];
                                          }
                                        }),
                                        append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class="text-body-2 font-weight-medium"${_scopeId6}>${ssrInterpolate(service.count)} orders</span>`);
                                          } else {
                                            return [
                                              createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(serviceStats, (service) => {
                                        return createVNode(VListItem, {
                                          key: service.name
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(service.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VProgressLinear, {
                                              "model-value": service.percentage,
                                              color: service.color,
                                              height: "8",
                                              rounded: "",
                                              class: "mt-2"
                                            }, null, 8, ["model-value", "color"])
                                          ]),
                                          append: withCtx(() => [
                                            createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(serviceStats, (service) => {
                                      return createVNode(VListItem, {
                                        key: service.name
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(service.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VProgressLinear, {
                                            "model-value": service.percentage,
                                            color: service.color,
                                            height: "8",
                                            rounded: "",
                                            class: "mt-2"
                                          }, null, 8, ["model-value", "color"])
                                        ]),
                                        append: withCtx(() => [
                                          createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
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
                              createVNode(VIcon, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-chart-line")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Orders by Service Type ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(serviceStats, (service) => {
                                    return createVNode(VListItem, {
                                      key: service.name
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(service.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VProgressLinear, {
                                          "model-value": service.percentage,
                                          color: service.color,
                                          height: "8",
                                          rounded: "",
                                          class: "mt-2"
                                        }, null, 8, ["model-value", "color"])
                                      ]),
                                      append: withCtx(() => [
                                        createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
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
                    createVNode(VCard, { elevation: "2" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-chart-line")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Orders by Service Type ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(serviceStats, (service) => {
                                  return createVNode(VListItem, {
                                    key: service.name
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(service.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VProgressLinear, {
                                        "model-value": service.percentage,
                                        color: service.color,
                                        height: "8",
                                        rounded: "",
                                        class: "mt-2"
                                      }, null, 8, ["model-value", "color"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
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
                  _push3(ssrRenderComponent(VCard, { elevation: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-map-marker-multiple`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-map-marker-multiple")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Top Cemeteries `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-map-marker-multiple")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Top Cemeteries ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(topCemeteries, (cemetery, i) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: cemetery.name
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        color: "primary",
                                        size: "32"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(i + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(i + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          color: "primary",
                                          size: "32"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(i + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(cemetery.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(cemetery.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(cemetery.location)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(cemetery.location), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(cemetery.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(cemetery.location), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="font-weight-bold"${_scopeId5}>${ssrInterpolate(cemetery.orders)} orders</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "font-weight-bold" }, toDisplayString(cemetery.orders) + " orders", 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(topCemeteries, (cemetery, i) => {
                                  return createVNode(VListItem, {
                                    key: cemetery.name
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        color: "primary",
                                        size: "32"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(i + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(cemetery.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(cemetery.location), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    append: withCtx(() => [
                                      createVNode("span", { class: "font-weight-bold" }, toDisplayString(cemetery.orders) + " orders", 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-map-marker-multiple")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Top Cemeteries ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(topCemeteries, (cemetery, i) => {
                                return createVNode(VListItem, {
                                  key: cemetery.name
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      color: "primary",
                                      size: "32"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(i + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(cemetery.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(cemetery.location), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  append: withCtx(() => [
                                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(cemetery.orders) + " orders", 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                    createVNode(VCard, { elevation: "2" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-map-marker-multiple")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Top Cemeteries ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(topCemeteries, (cemetery, i) => {
                              return createVNode(VListItem, {
                                key: cemetery.name
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    color: "primary",
                                    size: "32"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i + 1), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(cemetery.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(cemetery.location), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                append: withCtx(() => [
                                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(cemetery.orders) + " orders", 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-chart-line")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Orders by Service Type ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(serviceStats, (service) => {
                                return createVNode(VListItem, {
                                  key: service.name
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(service.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VProgressLinear, {
                                      "model-value": service.percentage,
                                      color: service.color,
                                      height: "8",
                                      rounded: "",
                                      class: "mt-2"
                                    }, null, 8, ["model-value", "color"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode("span", { class: "text-body-2 font-weight-medium" }, toDisplayString(service.count) + " orders", 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-map-marker-multiple")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Top Cemeteries ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(topCemeteries, (cemetery, i) => {
                            return createVNode(VListItem, {
                              key: cemetery.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: "primary",
                                  size: "32"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i + 1), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(cemetery.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(cemetery.location), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              append: withCtx(() => [
                                createVNode("span", { class: "font-weight-bold" }, toDisplayString(cemetery.orders) + " orders", 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
      _push(ssrRenderComponent(VCard, {
        elevation: "2",
        class: "mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-download`);
                      } else {
                        return [
                          createTextVNode("mdi-download")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Export Reports `);
                } else {
                  return [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-download")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Export Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-file-excel",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Export Orders (CSV) `);
                                  } else {
                                    return [
                                      createTextVNode(" Export Orders (CSV) ")
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
                                  "prepend-icon": "mdi-file-excel",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Export Orders (CSV) ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-file-pdf-box",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Financial Report (PDF) `);
                                  } else {
                                    return [
                                      createTextVNode(" Financial Report (PDF) ")
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
                                  "prepend-icon": "mdi-file-pdf-box",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Financial Report (PDF) ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-account-group",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Contractor Report (CSV) `);
                                  } else {
                                    return [
                                      createTextVNode(" Contractor Report (CSV) ")
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
                                  "prepend-icon": "mdi-account-group",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Contractor Report (CSV) ")
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
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-file-excel",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Export Orders (CSV) ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-file-pdf-box",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Financial Report (PDF) ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-account-group",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Contractor Report (CSV) ")
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
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              "prepend-icon": "mdi-file-excel",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Export Orders (CSV) ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              "prepend-icon": "mdi-file-pdf-box",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Financial Report (PDF) ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              "prepend-icon": "mdi-account-group",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Contractor Report (CSV) ")
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
              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { class: "mr-2" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-download")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Export Reports ")
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            variant: "outlined",
                            "prepend-icon": "mdi-file-excel",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Export Orders (CSV) ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            variant: "outlined",
                            "prepend-icon": "mdi-file-pdf-box",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Financial Report (PDF) ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            variant: "outlined",
                            "prepend-icon": "mdi-account-group",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Contractor Report (CSV) ")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reports-D2hF8MbX.mjs.map
