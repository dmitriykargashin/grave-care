import { defineComponent, inject, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as VRow, e as VCol, i as VCard, j as VAvatar, h as VIcon, I as VCardTitle, q as VSpacer, f as VBtn, w as VDivider, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, s as VChip, L as VCardActions, J as VCardText } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showComingSoon = inject("showComingSoon");
    const stats = [
      { title: "Pending Requests", value: 12, icon: "mdi-clock-outline", color: "warning" },
      { title: "In Progress", value: 8, icon: "mdi-progress-clock", color: "info" },
      { title: "Completed Today", value: 5, icon: "mdi-check-circle", color: "success" },
      { title: "Active Contractors", value: 6, icon: "mdi-hard-hat", color: "primary" }
    ];
    const recentRequests = [
      { id: "1", deceasedName: "John Smith", service: "Grave Cleanup", cemetery: "Green Lawn Memorial", status: "Pending", date: "2 min ago" },
      { id: "2", deceasedName: "Mary Johnson", service: "Flower Delivery", cemetery: "Oak Hill Cemetery", status: "Assigned", date: "15 min ago" },
      { id: "3", deceasedName: "Robert Williams", service: "Headstone Care", cemetery: "Peaceful Rest", status: "In Progress", date: "1 hour ago" },
      { id: "4", deceasedName: "Elizabeth Brown", service: "Photo Report", cemetery: "Memorial Gardens", status: "Completed", date: "2 hours ago" },
      { id: "5", deceasedName: "James Davis", service: "Grave Cleanup", cemetery: "Sunset Cemetery", status: "Pending", date: "3 hours ago" }
    ];
    const contractors = [
      { name: "Mike Thompson", activeJobs: 3, online: true },
      { name: "Sarah Wilson", activeJobs: 2, online: true },
      { name: "David Garcia", activeJobs: 1, online: false },
      { name: "Emily Martinez", activeJobs: 2, online: true }
    ];
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
        default:
          return "grey";
      }
    };
    const getStatusIcon = (status) => {
      switch (status) {
        case "Pending":
          return "mdi-clock-outline";
        case "Assigned":
          return "mdi-account-check";
        case "In Progress":
          return "mdi-progress-clock";
        case "Completed":
          return "mdi-check";
        default:
          return "mdi-help";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VRow, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(stats, (stat) => {
              _push2(ssrRenderComponent(VCol, {
                key: stat.title,
                cols: "12",
                sm: "6",
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
                          _push4(`<div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            color: stat.color,
                            size: "56",
                            class: "mr-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: stat.icon,
                                  color: "white",
                                  size: "28"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: stat.icon,
                                    color: "white",
                                    size: "28"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><div class="text-h4 font-weight-bold"${_scopeId3}>${ssrInterpolate(stat.value)}</div><div class="text-body-2 text-grey"${_scopeId3}>${ssrInterpolate(stat.title)}</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                color: stat.color,
                                size: "56",
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: stat.icon,
                                    color: "white",
                                    size: "28"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(stat.value), 1),
                                createVNode("div", { class: "text-body-2 text-grey" }, toDisplayString(stat.title), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, {
                        class: "pa-4",
                        elevation: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center" }, [
                            createVNode(VAvatar, {
                              color: stat.color,
                              size: "56",
                              class: "mr-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: stat.icon,
                                  color: "white",
                                  size: "28"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(stat.value), 1),
                              createVNode("div", { class: "text-body-2 text-grey" }, toDisplayString(stat.title), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(stats, (stat) => {
                return createVNode(VCol, {
                  key: stat.title,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      class: "pa-4",
                      elevation: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center" }, [
                          createVNode(VAvatar, {
                            color: stat.color,
                            size: "56",
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: stat.icon,
                                color: "white",
                                size: "28"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(stat.value), 1),
                            createVNode("div", { class: "text-body-2 text-grey" }, toDisplayString(stat.title), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
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
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { elevation: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-clipboard-list`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-clipboard-list")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Recent Service Requests `);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                color: "primary",
                                to: "/admin/requests"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` View All `);
                                  } else {
                                    return [
                                      createTextVNode(" View All ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-clipboard-list")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Recent Service Requests "),
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  to: "/admin/requests"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View All ")
                                  ]),
                                  _: 1
                                })
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
                              ssrRenderList(recentRequests, (request) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: request.id,
                                  to: `/admin/requests/${request.id}`
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        color: getStatusColor(request.status),
                                        size: "40"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              color: "white",
                                              size: "20"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(getStatusIcon(request.status))}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                color: "white",
                                                size: "20"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          color: getStatusColor(request.status),
                                          size: "40"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              color: "white",
                                              size: "20"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ];
                                    }
                                  }),
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="text-right"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: getStatusColor(request.status),
                                        size: "small",
                                        class: "mb-1"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(request.status)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(request.status), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="text-caption text-grey"${_scopeId5}>${ssrInterpolate(request.date)}</div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "text-right" }, [
                                          createVNode(VChip, {
                                            color: getStatusColor(request.status),
                                            size: "small",
                                            class: "mb-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(request.status), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"]),
                                          createVNode("div", { class: "text-caption text-grey" }, toDisplayString(request.date), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(request.deceasedName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(request.deceasedName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(request.service)} • ${ssrInterpolate(request.cemetery)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(request.deceasedName), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
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
                                (openBlock(), createBlock(Fragment, null, renderList(recentRequests, (request) => {
                                  return createVNode(VListItem, {
                                    key: request.id,
                                    to: `/admin/requests/${request.id}`
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        color: getStatusColor(request.status),
                                        size: "40"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            color: "white",
                                            size: "20"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    append: withCtx(() => [
                                      createVNode("div", { class: "text-right" }, [
                                        createVNode(VChip, {
                                          color: getStatusColor(request.status),
                                          size: "small",
                                          class: "mb-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(request.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"]),
                                        createVNode("div", { class: "text-caption text-grey" }, toDisplayString(request.date), 1)
                                      ])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(request.deceasedName), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-clipboard-list")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Recent Service Requests "),
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                to: "/admin/requests"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View All ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VList, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(recentRequests, (request) => {
                                return createVNode(VListItem, {
                                  key: request.id,
                                  to: `/admin/requests/${request.id}`
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      color: getStatusColor(request.status),
                                      size: "40"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          color: "white",
                                          size: "20"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  append: withCtx(() => [
                                    createVNode("div", { class: "text-right" }, [
                                      createVNode(VChip, {
                                        color: getStatusColor(request.status),
                                        size: "small",
                                        class: "mb-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(request.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"]),
                                      createVNode("div", { class: "text-caption text-grey" }, toDisplayString(request.date), 1)
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(request.deceasedName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
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
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-clipboard-list")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Recent Service Requests "),
                            createVNode(VSpacer),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              to: "/admin/requests"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View All ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VList, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(recentRequests, (request) => {
                              return createVNode(VListItem, {
                                key: request.id,
                                to: `/admin/requests/${request.id}`
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    color: getStatusColor(request.status),
                                    size: "40"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        color: "white",
                                        size: "20"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                append: withCtx(() => [
                                  createVNode("div", { class: "text-right" }, [
                                    createVNode(VChip, {
                                      color: getStatusColor(request.status),
                                      size: "small",
                                      class: "mb-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(request.status), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("div", { class: "text-caption text-grey" }, toDisplayString(request.date), 1)
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(request.deceasedName), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
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
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "2",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-hard-hat`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-hard-hat")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Contractor Status `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-hard-hat")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Contractor Status ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VList, { density: "compact" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(contractors, (contractor) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: contractor.name
                                }, {
                                  prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        size: "36",
                                        color: "grey-lighten-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-account`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-account")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-account")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VAvatar, {
                                          size: "36",
                                          color: "grey-lighten-2"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-account")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VChip, {
                                        color: contractor.online ? "success" : "grey",
                                        size: "x-small"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(contractor.online ? "Online" : "Offline")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VChip, {
                                          color: contractor.online ? "success" : "grey",
                                          size: "x-small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(contractor.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(contractor.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItemSubtitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(contractor.activeJobs)} active jobs`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(contractor.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
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
                                (openBlock(), createBlock(Fragment, null, renderList(contractors, (contractor) => {
                                  return createVNode(VListItem, {
                                    key: contractor.name
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VAvatar, {
                                        size: "36",
                                        color: "grey-lighten-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-account")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    append: withCtx(() => [
                                      createVNode(VChip, {
                                        color: contractor.online ? "success" : "grey",
                                        size: "x-small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(contractor.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                color: "primary",
                                block: "",
                                to: "/admin/contractors"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Manage Contractors `);
                                  } else {
                                    return [
                                      createTextVNode(" Manage Contractors ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary",
                                  block: "",
                                  to: "/admin/contractors"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Manage Contractors ")
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
                                  createTextVNode("mdi-hard-hat")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Contractor Status ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(contractors, (contractor) => {
                                return createVNode(VListItem, {
                                  key: contractor.name
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      size: "36",
                                      color: "grey-lighten-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VChip, {
                                      color: contractor.online ? "success" : "grey",
                                      size: "x-small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(contractor.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary",
                                block: "",
                                to: "/admin/contractors"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Manage Contractors ")
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
                  _push3(ssrRenderComponent(VCard, { elevation: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-lightning-bolt`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-lightning-bolt")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Quick Actions `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lightning-bolt")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Quick Actions ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "primary",
                                class: "mb-2",
                                "prepend-icon": "mdi-plus",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Add New Request `);
                                  } else {
                                    return [
                                      createTextVNode(" Add New Request ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                variant: "outlined",
                                class: "mb-2",
                                "prepend-icon": "mdi-account-plus",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Invite Contractor `);
                                  } else {
                                    return [
                                      createTextVNode(" Invite Contractor ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-download",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Export Reports `);
                                  } else {
                                    return [
                                      createTextVNode(" Export Reports ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  block: "",
                                  color: "primary",
                                  class: "mb-2",
                                  "prepend-icon": "mdi-plus",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add New Request ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  class: "mb-2",
                                  "prepend-icon": "mdi-account-plus",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Invite Contractor ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  block: "",
                                  variant: "outlined",
                                  "prepend-icon": "mdi-download",
                                  onClick: unref(showComingSoon)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Export Reports ")
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
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, { class: "mr-2" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lightning-bolt")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Quick Actions ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                block: "",
                                color: "primary",
                                class: "mb-2",
                                "prepend-icon": "mdi-plus",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add New Request ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                class: "mb-2",
                                "prepend-icon": "mdi-account-plus",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Invite Contractor ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                block: "",
                                variant: "outlined",
                                "prepend-icon": "mdi-download",
                                onClick: unref(showComingSoon)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Export Reports ")
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
                    createVNode(VCard, {
                      elevation: "2",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-hard-hat")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Contractor Status ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VList, { density: "compact" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(contractors, (contractor) => {
                              return createVNode(VListItem, {
                                key: contractor.name
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "36",
                                    color: "grey-lighten-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                append: withCtx(() => [
                                  createVNode(VChip, {
                                    color: contractor.online ? "success" : "grey",
                                    size: "x-small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(contractor.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary",
                              block: "",
                              to: "/admin/contractors"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Manage Contractors ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { elevation: "2" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-lightning-bolt")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Quick Actions ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              class: "mb-2",
                              "prepend-icon": "mdi-plus",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Add New Request ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              class: "mb-2",
                              "prepend-icon": "mdi-account-plus",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Invite Contractor ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              block: "",
                              variant: "outlined",
                              "prepend-icon": "mdi-download",
                              onClick: unref(showComingSoon)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Export Reports ")
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
              createVNode(VCol, {
                cols: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-clipboard-list")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Recent Service Requests "),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "primary",
                            to: "/admin/requests"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" View All ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(recentRequests, (request) => {
                            return createVNode(VListItem, {
                              key: request.id,
                              to: `/admin/requests/${request.id}`
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: getStatusColor(request.status),
                                  size: "40"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      color: "white",
                                      size: "20"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getStatusIcon(request.status)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              append: withCtx(() => [
                                createVNode("div", { class: "text-right" }, [
                                  createVNode(VChip, {
                                    color: getStatusColor(request.status),
                                    size: "small",
                                    class: "mb-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(request.status), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("div", { class: "text-caption text-grey" }, toDisplayString(request.date), 1)
                                ])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(request.deceasedName), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(request.service) + " • " + toDisplayString(request.cemetery), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 64))
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
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    elevation: "2",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-hard-hat")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Contractor Status ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VList, { density: "compact" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(contractors, (contractor) => {
                            return createVNode(VListItem, {
                              key: contractor.name
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "36",
                                  color: "grey-lighten-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  color: contractor.online ? "success" : "grey",
                                  size: "x-small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(contractor.online ? "Online" : "Offline"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(contractor.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(contractor.activeJobs) + " active jobs", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: "text",
                            color: "primary",
                            block: "",
                            to: "/admin/contractors"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Manage Contractors ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-lightning-bolt")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Quick Actions ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            block: "",
                            color: "primary",
                            class: "mb-2",
                            "prepend-icon": "mdi-plus",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Add New Request ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            block: "",
                            variant: "outlined",
                            class: "mb-2",
                            "prepend-icon": "mdi-account-plus",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Invite Contractor ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            block: "",
                            variant: "outlined",
                            "prepend-icon": "mdi-download",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Export Reports ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DK71Wy2h.mjs.map
