import { defineComponent, inject, ref, withCtx, unref, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { d as VRow, e as VCol, i as VCard, I as VCardTitle, h as VIcon, s as VChip, w as VDivider, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, f as VBtn, j as VAvatar, J as VCardText } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
    const showSnackbar = inject("showSnackbar");
    const pendingJobs = ref([
      { id: "1", deceasedName: "John Smith", service: "Grave Cleanup", cemetery: "Green Lawn Memorial", address: "123 Memorial Dr, Austin, TX", payout: "$35" },
      { id: "2", deceasedName: "Mary Johnson", service: "Flower Delivery", cemetery: "Oak Hill Cemetery", address: "456 Oak Hill Rd, Austin, TX", payout: "$25" }
    ]);
    const activeJobs = ref([
      { id: "3", deceasedName: "Robert Williams", service: "Headstone Care", cemetery: "Peaceful Rest", address: "789 Peace Ln, Austin, TX", startedAt: "2 hours ago", payout: "$55" },
      { id: "4", deceasedName: "Elizabeth Brown", service: "Photo Report", cemetery: "Memorial Gardens", address: "321 Garden Ave, Austin, TX", startedAt: "4 hours ago", payout: "$18" }
    ]);
    const getServiceColor = (service) => {
      switch (service) {
        case "Grave Cleanup":
          return "green";
        case "Flower Delivery":
          return "pink";
        case "Headstone Care":
          return "grey";
        case "Photo Report":
          return "blue";
        default:
          return "primary";
      }
    };
    const getServiceIcon = (service) => {
      switch (service) {
        case "Grave Cleanup":
          return "mdi-broom";
        case "Flower Delivery":
          return "mdi-flower";
        case "Headstone Care":
          return "mdi-grave-stone";
        case "Photo Report":
          return "mdi-camera";
        default:
          return "mdi-clipboard";
      }
    };
    const acceptJob = (job) => {
      pendingJobs.value = pendingJobs.value.filter((j) => j.id !== job.id);
      activeJobs.value.push({ ...job, startedAt: "Just now" });
      showSnackbar?.("Job accepted!", "success");
    };
    const declineJob = (job) => {
      pendingJobs.value = pendingJobs.value.filter((j) => j.id !== job.id);
      showSnackbar?.("Job declined", "warning");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-45a0d453>`);
      _push(ssrRenderComponent(VRow, { class: "mb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "warning",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold" data-v-45a0d453${_scopeId3}>${ssrInterpolate(unref(pendingJobs).length)}</div><div class="text-body-2" data-v-45a0d453${_scopeId3}>Pending</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(pendingJobs).length), 1),
                          createVNode("div", { class: "text-body-2" }, "Pending")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4 text-center",
                      elevation: "2",
                      color: "warning",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(pendingJobs).length), 1),
                        createVNode("div", { class: "text-body-2" }, "Pending")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "info",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold" data-v-45a0d453${_scopeId3}>${ssrInterpolate(unref(activeJobs).length)}</div><div class="text-body-2" data-v-45a0d453${_scopeId3}>In Progress</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(activeJobs).length), 1),
                          createVNode("div", { class: "text-body-2" }, "In Progress")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4 text-center",
                      elevation: "2",
                      color: "info",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(activeJobs).length), 1),
                        createVNode("div", { class: "text-body-2" }, "In Progress")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "success",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold" data-v-45a0d453${_scopeId3}>12</div><div class="text-body-2" data-v-45a0d453${_scopeId3}>Completed This Week</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold" }, "12"),
                          createVNode("div", { class: "text-body-2" }, "Completed This Week")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4 text-center",
                      elevation: "2",
                      color: "success",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold" }, "12"),
                        createVNode("div", { class: "text-body-2" }, "Completed This Week")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "6",
              md: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "primary",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 font-weight-bold" data-v-45a0d453${_scopeId3}>$485</div><div class="text-body-2" data-v-45a0d453${_scopeId3}>Earnings This Week</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 font-weight-bold" }, "$485"),
                          createVNode("div", { class: "text-body-2" }, "Earnings This Week")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, {
                      class: "pa-4 text-center",
                      elevation: "2",
                      color: "primary",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 font-weight-bold" }, "$485"),
                        createVNode("div", { class: "text-body-2" }, "Earnings This Week")
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
                cols: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "warning",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(pendingJobs).length), 1),
                      createVNode("div", { class: "text-body-2" }, "Pending")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "info",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(activeJobs).length), 1),
                      createVNode("div", { class: "text-body-2" }, "In Progress")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "success",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 font-weight-bold" }, "12"),
                      createVNode("div", { class: "text-body-2" }, "Completed This Week")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "6",
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, {
                    class: "pa-4 text-center",
                    elevation: "2",
                    color: "primary",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 font-weight-bold" }, "$485"),
                      createVNode("div", { class: "text-body-2" }, "Earnings This Week")
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
        class: "mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    class: "mr-2",
                    color: "warning"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-clock-alert`);
                      } else {
                        return [
                          createTextVNode("mdi-clock-alert")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Pending Jobs `);
                  _push3(ssrRenderComponent(VChip, {
                    color: "warning",
                    size: "small",
                    class: "ml-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(pendingJobs).length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(pendingJobs).length), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      class: "mr-2",
                      color: "warning"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-clock-alert")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Pending Jobs "),
                    createVNode(VChip, {
                      color: "warning",
                      size: "small",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(pendingJobs).length), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            if (unref(pendingJobs).length > 0) {
              _push2(ssrRenderComponent(VList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(pendingJobs), (job) => {
                      _push3(ssrRenderComponent(VListItem, {
                        key: job.id,
                        class: "py-4"
                      }, {
                        prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VAvatar, {
                              color: getServiceColor(job.service),
                              size: "48"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { color: "white" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(getServiceIcon(job.service))}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, { color: "white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VAvatar, {
                                color: getServiceColor(job.service),
                                size: "48"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { color: "white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ];
                          }
                        }),
                        append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="d-flex gap-2" data-v-45a0d453${_scopeId3}>`);
                            _push4(ssrRenderComponent(VBtn, {
                              color: "error",
                              variant: "outlined",
                              size: "small",
                              onClick: ($event) => declineJob(job)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Decline `);
                                } else {
                                  return [
                                    createTextVNode(" Decline ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VBtn, {
                              color: "success",
                              size: "small",
                              onClick: ($event) => acceptJob(job)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Accept `);
                                } else {
                                  return [
                                    createTextVNode(" Accept ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(VBtn, {
                                  color: "error",
                                  variant: "outlined",
                                  size: "small",
                                  onClick: ($event) => declineJob(job)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Decline ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "success",
                                  size: "small",
                                  onClick: ($event) => acceptJob(job)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Accept ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItemTitle, { class: "font-weight-bold" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(job.deceasedName)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(job.deceasedName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VListItemSubtitle, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(job.service)} • ${ssrInterpolate(job.cemetery)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VListItemSubtitle, { class: "text-caption" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { size: "small" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-map-marker`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-map-marker")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(job.address)}`);
                                } else {
                                  return [
                                    createVNode(VIcon, { size: "small" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-map-marker")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(job.address), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(job.deceasedName), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-caption" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { size: "small" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-map-marker")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(job.address), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(pendingJobs), (job) => {
                        return openBlock(), createBlock(VListItem, {
                          key: job.id,
                          class: "py-4"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              color: getServiceColor(job.service),
                              size: "48"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { color: "white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          append: withCtx(() => [
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(VBtn, {
                                color: "error",
                                variant: "outlined",
                                size: "small",
                                onClick: ($event) => declineJob(job)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Decline ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "success",
                                size: "small",
                                onClick: ($event) => acceptJob(job)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Accept ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(job.deceasedName), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-caption" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { size: "small" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-map-marker")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" " + toDisplayString(job.address), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VCardText, { class: "text-center text-grey py-8" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "48",
                      color: "grey-lighten-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-check-circle`);
                        } else {
                          return [
                            createTextVNode("mdi-check-circle")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="mt-2" data-v-45a0d453${_scopeId2}>No pending jobs</div>`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "48",
                        color: "grey-lighten-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-check-circle")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-2" }, "No pending jobs")
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
                    class: "mr-2",
                    color: "warning"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-clock-alert")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Pending Jobs "),
                  createVNode(VChip, {
                    color: "warning",
                    size: "small",
                    class: "ml-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(pendingJobs).length), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              unref(pendingJobs).length > 0 ? (openBlock(), createBlock(VList, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pendingJobs), (job) => {
                    return openBlock(), createBlock(VListItem, {
                      key: job.id,
                      class: "py-4"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VAvatar, {
                          color: getServiceColor(job.service),
                          size: "48"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "white" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      append: withCtx(() => [
                        createVNode("div", { class: "d-flex gap-2" }, [
                          createVNode(VBtn, {
                            color: "error",
                            variant: "outlined",
                            size: "small",
                            onClick: ($event) => declineJob(job)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Decline ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "success",
                            size: "small",
                            onClick: ($event) => acceptJob(job)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Accept ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(job.deceasedName), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VListItemSubtitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VListItemSubtitle, { class: "text-caption" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-map-marker")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(job.address), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(VCardText, {
                key: 1,
                class: "text-center text-grey py-8"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    size: "48",
                    color: "grey-lighten-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-check-circle")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, "No pending jobs")
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCard, { elevation: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    class: "mr-2",
                    color: "info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-progress-clock`);
                      } else {
                        return [
                          createTextVNode("mdi-progress-clock")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Active Jobs `);
                  _push3(ssrRenderComponent(VChip, {
                    color: "info",
                    size: "small",
                    class: "ml-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(activeJobs).length)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(activeJobs).length), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      class: "mr-2",
                      color: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-progress-clock")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Active Jobs "),
                    createVNode(VChip, {
                      color: "info",
                      size: "small",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(activeJobs).length), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            if (unref(activeJobs).length > 0) {
              _push2(ssrRenderComponent(VList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(activeJobs), (job) => {
                      _push3(ssrRenderComponent(VListItem, {
                        key: job.id,
                        to: `/contractor/job/${job.id}`,
                        class: "py-4"
                      }, {
                        prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VAvatar, {
                              color: getServiceColor(job.service),
                              size: "48"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { color: "white" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(getServiceIcon(job.service))}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, { color: "white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VAvatar, {
                                color: getServiceColor(job.service),
                                size: "48"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { color: "white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ];
                          }
                        }),
                        append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="text-right" data-v-45a0d453${_scopeId3}>`);
                            _push4(ssrRenderComponent(VChip, {
                              color: "info",
                              size: "small",
                              class: "mb-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`In Progress`);
                                } else {
                                  return [
                                    createTextVNode("In Progress")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<div class="text-caption text-grey" data-v-45a0d453${_scopeId3}>Started ${ssrInterpolate(job.startedAt)}</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "text-right" }, [
                                createVNode(VChip, {
                                  color: "info",
                                  size: "small",
                                  class: "mb-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("In Progress")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "text-caption text-grey" }, "Started " + toDisplayString(job.startedAt), 1)
                              ])
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItemTitle, { class: "font-weight-bold" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(job.deceasedName)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(job.deceasedName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VListItemSubtitle, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(job.service)} • ${ssrInterpolate(job.cemetery)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VListItemSubtitle, { class: "text-caption" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { size: "small" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-map-marker`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-map-marker")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(job.address)}`);
                                } else {
                                  return [
                                    createVNode(VIcon, { size: "small" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-map-marker")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" " + toDisplayString(job.address), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(job.deceasedName), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, { class: "text-caption" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { size: "small" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-map-marker")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" " + toDisplayString(job.address), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(activeJobs), (job) => {
                        return openBlock(), createBlock(VListItem, {
                          key: job.id,
                          to: `/contractor/job/${job.id}`,
                          class: "py-4"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, {
                              color: getServiceColor(job.service),
                              size: "48"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { color: "white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
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
                                color: "info",
                                size: "small",
                                class: "mb-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("In Progress")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "text-caption text-grey" }, "Started " + toDisplayString(job.startedAt), 1)
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(job.deceasedName), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VListItemSubtitle, { class: "text-caption" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { size: "small" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-map-marker")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" " + toDisplayString(job.address), 1)
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
              _push2(ssrRenderComponent(VCardText, { class: "text-center text-grey py-8" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      size: "48",
                      color: "grey-lighten-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-clipboard-check`);
                        } else {
                          return [
                            createTextVNode("mdi-clipboard-check")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="mt-2" data-v-45a0d453${_scopeId2}>No active jobs</div>`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        size: "48",
                        color: "grey-lighten-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-clipboard-check")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-2" }, "No active jobs")
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
                    class: "mr-2",
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-progress-clock")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Active Jobs "),
                  createVNode(VChip, {
                    color: "info",
                    size: "small",
                    class: "ml-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(activeJobs).length), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDivider),
              unref(activeJobs).length > 0 ? (openBlock(), createBlock(VList, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeJobs), (job) => {
                    return openBlock(), createBlock(VListItem, {
                      key: job.id,
                      to: `/contractor/job/${job.id}`,
                      class: "py-4"
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VAvatar, {
                          color: getServiceColor(job.service),
                          size: "48"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "white" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getServiceIcon(job.service)), 1)
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
                            color: "info",
                            size: "small",
                            class: "mb-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("In Progress")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-caption text-grey" }, "Started " + toDisplayString(job.startedAt), 1)
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, { class: "font-weight-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(job.deceasedName), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VListItemSubtitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(job.service) + " • " + toDisplayString(job.cemetery), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VListItemSubtitle, { class: "text-caption" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-map-marker")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(job.address), 1)
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
                key: 1,
                class: "text-center text-grey py-8"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    size: "48",
                    color: "grey-lighten-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-clipboard-check")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, "No active jobs")
                ]),
                _: 1
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contractor/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45a0d453"]]);

export { index as default };
//# sourceMappingURL=index-CjLssvrf.mjs.map
