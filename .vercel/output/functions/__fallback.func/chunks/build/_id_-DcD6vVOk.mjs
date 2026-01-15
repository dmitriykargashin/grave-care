import { defineComponent, inject, ref, computed, withCtx, createTextVNode, createVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, isRef, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { N as useRoute$1, f as VBtn, h as VIcon, d as VRow, e as VCol, i as VCard, I as VCardTitle, j as VAvatar, q as VSpacer, s as VChip, w as VDivider, J as VCardText, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, g as VImg, F as VTextarea, Q as VAlert, H as VDialog } from './server.mjs';
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
    const showSnackbar = inject("showSnackbar");
    const job = ref({
      id: route.params.id,
      deceasedName: "Robert Williams",
      service: "Headstone Care",
      cemetery: "Peaceful Rest Cemetery",
      address: "789 Peace Ln, Austin, TX 78701",
      plotReference: "Section C, Row 8, Plot 12",
      instructions: "The headstone is black granite. Please use appropriate cleaning solution. There may be some moss growing on the north side that needs attention.",
      payout: "$55"
    });
    const beforePhotos = ref([
      "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=200&h=200&fit=crop"
    ]);
    const afterPhotos = ref([]);
    const notes = ref("");
    const completing = ref(false);
    const showSuccess = ref(false);
    const canComplete = computed(() => beforePhotos.value.length > 0 && afterPhotos.value.length > 0);
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
    const addPhoto = (type) => {
      const demoPhotos = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=200&h=200&fit=crop"
      ];
      const randomPhoto = demoPhotos[Math.floor(Math.random() * demoPhotos.length)];
      if (type === "before") {
        beforePhotos.value.push(randomPhoto);
      } else {
        afterPhotos.value.push(randomPhoto);
      }
      showSnackbar?.("Photo added (demo)", "info");
    };
    const removePhoto = (type, index) => {
      if (type === "before") {
        beforePhotos.value.splice(index, 1);
      } else {
        afterPhotos.value.splice(index, 1);
      }
    };
    const openMaps = () => {
      (void 0).open(`https://maps.google.com/?q=${encodeURIComponent(job.value.address)}`, "_blank");
    };
    const completeJob = async () => {
      completing.value = true;
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      completing.value = false;
      showSuccess.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        to: "/contractor",
        class: "mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, { start: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-arrow-left`);
                } else {
                  return [
                    createTextVNode("mdi-arrow-left")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Back to My Jobs `);
          } else {
            return [
              createVNode(VIcon, { start: "" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-arrow-left")
                ]),
                _: 1
              }),
              createTextVNode(" Back to My Jobs ")
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
                  _push3(ssrRenderComponent(VCard, {
                    elevation: "2",
                    class: "mb-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VAvatar, {
                                color: getServiceColor(unref(job).service),
                                size: "40",
                                class: "mr-3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { color: "white" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(getServiceIcon(unref(job).service))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, { color: "white" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` ${ssrInterpolate(unref(job).service)} `);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VChip, { color: "info" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`In Progress`);
                                  } else {
                                    return [
                                      createTextVNode("In Progress")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  color: getServiceColor(unref(job).service),
                                  size: "40",
                                  class: "mr-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { color: "white" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["color"]),
                                createTextVNode(" " + toDisplayString(unref(job).service) + " ", 1),
                                createVNode(VSpacer),
                                createVNode(VChip, { color: "info" }, {
                                  default: withCtx(() => [
                                    createTextVNode("In Progress")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
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
                                                _push8(`${ssrInterpolate(unref(job).deceasedName)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Loved One`);
                                              } else {
                                                return [
                                                  createTextVNode("Loved One")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Loved One")
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
                                                _push8(`${ssrInterpolate(unref(job).cemetery)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(job).address)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(job).address), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(job).address), 1)
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
                                                _push8(`mdi-grave-stone`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-grave-stone")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-grave-stone")
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
                                                _push8(`${ssrInterpolate(unref(job).plotReference)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Plot Reference`);
                                              } else {
                                                return [
                                                  createTextVNode("Plot Reference")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Plot Reference")
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
                                              createTextVNode("mdi-account-heart")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Loved One")
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
                                              createTextVNode("mdi-map-marker")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(job).address), 1)
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
                                              createTextVNode("mdi-grave-stone")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Plot Reference")
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
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="font-weight-bold mb-2"${_scopeId4}>Special Instructions</h4><p class="text-body-2 text-grey-darken-1"${_scopeId4}>${ssrInterpolate(unref(job).instructions || "No special instructions provided.")}</p>`);
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-space-between align-center"${_scopeId4}><span class="text-body-2 text-grey"${_scopeId4}>Your Payout</span><span class="text-h5 font-weight-bold text-success"${_scopeId4}>${ssrInterpolate(unref(job).payout)}</span></div>`);
                            } else {
                              return [
                                createVNode(VList, {
                                  density: "compact",
                                  class: "bg-transparent"
                                }, {
                                  default: withCtx(() => [
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
                                            createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Loved One")
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
                                            createTextVNode("mdi-map-marker")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(job).address), 1)
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
                                            createTextVNode("mdi-grave-stone")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Plot Reference")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h4", { class: "font-weight-bold mb-2" }, "Special Instructions"),
                                createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(unref(job).instructions || "No special instructions provided."), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                  createVNode("span", { class: "text-body-2 text-grey" }, "Your Payout"),
                                  createVNode("span", { class: "text-h5 font-weight-bold text-success" }, toDisplayString(unref(job).payout), 1)
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardTitle, { class: "d-flex align-center" }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                color: getServiceColor(unref(job).service),
                                size: "40",
                                class: "mr-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { color: "white" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["color"]),
                              createTextVNode(" " + toDisplayString(unref(job).service) + " ", 1),
                              createVNode(VSpacer),
                              createVNode(VChip, { color: "info" }, {
                                default: withCtx(() => [
                                  createTextVNode("In Progress")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                density: "compact",
                                class: "bg-transparent"
                              }, {
                                default: withCtx(() => [
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
                                          createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Loved One")
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
                                          createTextVNode("mdi-map-marker")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(job).address), 1)
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
                                          createTextVNode("mdi-grave-stone")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Plot Reference")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h4", { class: "font-weight-bold mb-2" }, "Special Instructions"),
                              createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(unref(job).instructions || "No special instructions provided."), 1),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                createVNode("span", { class: "text-body-2 text-grey" }, "Your Payout"),
                                createVNode("span", { class: "text-h5 font-weight-bold text-success" }, toDisplayString(unref(job).payout), 1)
                              ])
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
                                    _push6(`mdi-map`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-map")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Location `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-map")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Location ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VImg, {
                          src: "https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=600x300&maptype=roadmap&key=demo",
                          height: "200",
                          class: "bg-grey-lighten-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex align-center justify-center h-100"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                "prepend-icon": "mdi-navigation",
                                onClick: openMaps
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Open in Maps `);
                                  } else {
                                    return [
                                      createTextVNode(" Open in Maps ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex align-center justify-center h-100" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    "prepend-icon": "mdi-navigation",
                                    onClick: openMaps
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Open in Maps ")
                                    ]),
                                    _: 1
                                  })
                                ])
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
                                  createTextVNode("mdi-map")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Location ")
                            ]),
                            _: 1
                          }),
                          createVNode(VImg, {
                            src: "https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=600x300&maptype=roadmap&key=demo",
                            height: "200",
                            class: "bg-grey-lighten-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-center h-100" }, [
                                createVNode(VBtn, {
                                  color: "primary",
                                  "prepend-icon": "mdi-navigation",
                                  onClick: openMaps
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Open in Maps ")
                                  ]),
                                  _: 1
                                })
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
                      elevation: "2",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "d-flex align-center" }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              color: getServiceColor(unref(job).service),
                              size: "40",
                              class: "mr-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { color: "white" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["color"]),
                            createTextVNode(" " + toDisplayString(unref(job).service) + " ", 1),
                            createVNode(VSpacer),
                            createVNode(VChip, { color: "info" }, {
                              default: withCtx(() => [
                                createTextVNode("In Progress")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              density: "compact",
                              class: "bg-transparent"
                            }, {
                              default: withCtx(() => [
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
                                        createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Loved One")
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
                                        createTextVNode("mdi-map-marker")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(job).address), 1)
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
                                        createTextVNode("mdi-grave-stone")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Plot Reference")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("h4", { class: "font-weight-bold mb-2" }, "Special Instructions"),
                            createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(unref(job).instructions || "No special instructions provided."), 1),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                              createVNode("span", { class: "text-body-2 text-grey" }, "Your Payout"),
                              createVNode("span", { class: "text-h5 font-weight-bold text-success" }, toDisplayString(unref(job).payout), 1)
                            ])
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
                                createTextVNode("mdi-map")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Location ")
                          ]),
                          _: 1
                        }),
                        createVNode(VImg, {
                          src: "https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=600x300&maptype=roadmap&key=demo",
                          height: "200",
                          class: "bg-grey-lighten-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-center h-100" }, [
                              createVNode(VBtn, {
                                color: "primary",
                                "prepend-icon": "mdi-navigation",
                                onClick: openMaps
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open in Maps ")
                                ]),
                                _: 1
                              })
                            ])
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
                                    _push6(`mdi-camera`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-camera")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Job Photos `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-camera")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Job Photos ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="font-weight-bold mb-3"${_scopeId4}>Before Photos</h4>`);
                              _push5(ssrRenderComponent(VRow, { class: "mb-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(beforePhotos), (photo, i) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: "before-" + i,
                                        cols: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              variant: "outlined",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VImg, {
                                                    src: photo,
                                                    height: "80",
                                                    cover: "",
                                                    class: "rounded"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    icon: "",
                                                    size: "x-small",
                                                    color: "error",
                                                    class: "position-absolute",
                                                    style: { "top": "4px", "right": "4px" },
                                                    onClick: ($event) => removePhoto("before", i)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "small" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`mdi-close`);
                                                            } else {
                                                              return [
                                                                createTextVNode("mdi-close")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-close")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      src: photo,
                                                      height: "80",
                                                      cover: "",
                                                      class: "rounded"
                                                    }, null, 8, ["src"]),
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      size: "x-small",
                                                      color: "error",
                                                      class: "position-absolute",
                                                      style: { "top": "4px", "right": "4px" },
                                                      onClick: ($event) => removePhoto("before", i)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-close")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                variant: "outlined",
                                                class: "pa-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: photo,
                                                    height: "80",
                                                    cover: "",
                                                    class: "rounded"
                                                  }, null, 8, ["src"]),
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "x-small",
                                                    color: "error",
                                                    class: "position-absolute",
                                                    style: { "top": "4px", "right": "4px" },
                                                    onClick: ($event) => removePhoto("before", i)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-close")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    _push6(ssrRenderComponent(VCol, { cols: "4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, {
                                            variant: "outlined",
                                            class: "d-flex align-center justify-center",
                                            height: "80",
                                            style: { "cursor": "pointer", "border-style": "dashed" },
                                            onClick: ($event) => addPhoto("before")
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { color: "grey" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-plus`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-plus")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { color: "grey" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-plus")
                                                    ]),
                                                    _: 1
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
                                              class: "d-flex align-center justify-center",
                                              height: "80",
                                              style: { "cursor": "pointer", "border-style": "dashed" },
                                              onClick: ($event) => addPhoto("before")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { color: "grey" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-plus")
                                                  ]),
                                                  _: 1
                                                })
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(beforePhotos), (photo, i) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: "before-" + i,
                                          cols: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              variant: "outlined",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: photo,
                                                  height: "80",
                                                  cover: "",
                                                  class: "rounded"
                                                }, null, 8, ["src"]),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "x-small",
                                                  color: "error",
                                                  class: "position-absolute",
                                                  style: { "top": "4px", "right": "4px" },
                                                  onClick: ($event) => removePhoto("before", i)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-close")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)),
                                      createVNode(VCol, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            variant: "outlined",
                                            class: "d-flex align-center justify-center",
                                            height: "80",
                                            style: { "cursor": "pointer", "border-style": "dashed" },
                                            onClick: ($event) => addPhoto("before")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { color: "grey" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-plus")
                                                ]),
                                                _: 1
                                              })
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
                              _push5(`<h4 class="font-weight-bold mb-3"${_scopeId4}>After Photos</h4>`);
                              _push5(ssrRenderComponent(VRow, { class: "mb-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(afterPhotos), (photo, i) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        key: "after-" + i,
                                        cols: "4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              variant: "outlined",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VImg, {
                                                    src: photo,
                                                    height: "80",
                                                    cover: "",
                                                    class: "rounded"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VBtn, {
                                                    icon: "",
                                                    size: "x-small",
                                                    color: "error",
                                                    class: "position-absolute",
                                                    style: { "top": "4px", "right": "4px" },
                                                    onClick: ($event) => removePhoto("after", i)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VIcon, { size: "small" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`mdi-close`);
                                                            } else {
                                                              return [
                                                                createTextVNode("mdi-close")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VIcon, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-close")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      src: photo,
                                                      height: "80",
                                                      cover: "",
                                                      class: "rounded"
                                                    }, null, 8, ["src"]),
                                                    createVNode(VBtn, {
                                                      icon: "",
                                                      size: "x-small",
                                                      color: "error",
                                                      class: "position-absolute",
                                                      style: { "top": "4px", "right": "4px" },
                                                      onClick: ($event) => removePhoto("after", i)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-close")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                variant: "outlined",
                                                class: "pa-1"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: photo,
                                                    height: "80",
                                                    cover: "",
                                                    class: "rounded"
                                                  }, null, 8, ["src"]),
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "x-small",
                                                    color: "error",
                                                    class: "position-absolute",
                                                    style: { "top": "4px", "right": "4px" },
                                                    onClick: ($event) => removePhoto("after", i)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-close")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    _push6(ssrRenderComponent(VCol, { cols: "4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCard, {
                                            variant: "outlined",
                                            class: "d-flex align-center justify-center",
                                            height: "80",
                                            style: { "cursor": "pointer", "border-style": "dashed" },
                                            onClick: ($event) => addPhoto("after")
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VIcon, { color: "grey" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-plus`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-plus")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VIcon, { color: "grey" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-plus")
                                                    ]),
                                                    _: 1
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
                                              class: "d-flex align-center justify-center",
                                              height: "80",
                                              style: { "cursor": "pointer", "border-style": "dashed" },
                                              onClick: ($event) => addPhoto("after")
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { color: "grey" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-plus")
                                                  ]),
                                                  _: 1
                                                })
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
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(afterPhotos), (photo, i) => {
                                        return openBlock(), createBlock(VCol, {
                                          key: "after-" + i,
                                          cols: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, {
                                              variant: "outlined",
                                              class: "pa-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: photo,
                                                  height: "80",
                                                  cover: "",
                                                  class: "rounded"
                                                }, null, 8, ["src"]),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "x-small",
                                                  color: "error",
                                                  class: "position-absolute",
                                                  style: { "top": "4px", "right": "4px" },
                                                  onClick: ($event) => removePhoto("after", i)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { size: "small" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-close")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)),
                                      createVNode(VCol, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            variant: "outlined",
                                            class: "d-flex align-center justify-center",
                                            height: "80",
                                            style: { "cursor": "pointer", "border-style": "dashed" },
                                            onClick: ($event) => addPhoto("after")
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { color: "grey" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-plus")
                                                ]),
                                                _: 1
                                              })
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
                              _push5(ssrRenderComponent(VTextarea, {
                                modelValue: unref(notes),
                                "onUpdate:modelValue": ($event) => isRef(notes) ? notes.value = $event : null,
                                label: "Completion Notes",
                                placeholder: "Any notes about the work completed...",
                                rows: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h4", { class: "font-weight-bold mb-3" }, "Before Photos"),
                                createVNode(VRow, { class: "mb-4" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(beforePhotos), (photo, i) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: "before-" + i,
                                        cols: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            variant: "outlined",
                                            class: "pa-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: photo,
                                                height: "80",
                                                cover: "",
                                                class: "rounded"
                                              }, null, 8, ["src"]),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "x-small",
                                                color: "error",
                                                class: "position-absolute",
                                                style: { "top": "4px", "right": "4px" },
                                                onClick: ($event) => removePhoto("before", i)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-close")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)),
                                    createVNode(VCol, { cols: "4" }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "d-flex align-center justify-center",
                                          height: "80",
                                          style: { "cursor": "pointer", "border-style": "dashed" },
                                          onClick: ($event) => addPhoto("before")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { color: "grey" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-plus")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("h4", { class: "font-weight-bold mb-3" }, "After Photos"),
                                createVNode(VRow, { class: "mb-4" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(afterPhotos), (photo, i) => {
                                      return openBlock(), createBlock(VCol, {
                                        key: "after-" + i,
                                        cols: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            variant: "outlined",
                                            class: "pa-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: photo,
                                                height: "80",
                                                cover: "",
                                                class: "rounded"
                                              }, null, 8, ["src"]),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "x-small",
                                                color: "error",
                                                class: "position-absolute",
                                                style: { "top": "4px", "right": "4px" },
                                                onClick: ($event) => removePhoto("after", i)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { size: "small" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-close")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)),
                                    createVNode(VCol, { cols: "4" }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "d-flex align-center justify-center",
                                          height: "80",
                                          style: { "cursor": "pointer", "border-style": "dashed" },
                                          onClick: ($event) => addPhoto("after")
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { color: "grey" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-plus")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VTextarea, {
                                  modelValue: unref(notes),
                                  "onUpdate:modelValue": ($event) => isRef(notes) ? notes.value = $event : null,
                                  label: "Completion Notes",
                                  placeholder: "Any notes about the work completed...",
                                  rows: "3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                  createTextVNode("mdi-camera")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Job Photos ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "font-weight-bold mb-3" }, "Before Photos"),
                              createVNode(VRow, { class: "mb-4" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(beforePhotos), (photo, i) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: "before-" + i,
                                      cols: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: photo,
                                              height: "80",
                                              cover: "",
                                              class: "rounded"
                                            }, null, 8, ["src"]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "x-small",
                                              color: "error",
                                              class: "position-absolute",
                                              style: { "top": "4px", "right": "4px" },
                                              onClick: ($event) => removePhoto("before", i)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-close")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(VCol, { cols: "4" }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "d-flex align-center justify-center",
                                        height: "80",
                                        style: { "cursor": "pointer", "border-style": "dashed" },
                                        onClick: ($event) => addPhoto("before")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { color: "grey" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-plus")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("h4", { class: "font-weight-bold mb-3" }, "After Photos"),
                              createVNode(VRow, { class: "mb-4" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(afterPhotos), (photo, i) => {
                                    return openBlock(), createBlock(VCol, {
                                      key: "after-" + i,
                                      cols: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "pa-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: photo,
                                              height: "80",
                                              cover: "",
                                              class: "rounded"
                                            }, null, 8, ["src"]),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "x-small",
                                              color: "error",
                                              class: "position-absolute",
                                              style: { "top": "4px", "right": "4px" },
                                              onClick: ($event) => removePhoto("after", i)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { size: "small" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-close")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)),
                                  createVNode(VCol, { cols: "4" }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "d-flex align-center justify-center",
                                        height: "80",
                                        style: { "cursor": "pointer", "border-style": "dashed" },
                                        onClick: ($event) => addPhoto("after")
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { color: "grey" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-plus")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VTextarea, {
                                modelValue: unref(notes),
                                "onUpdate:modelValue": ($event) => isRef(notes) ? notes.value = $event : null,
                                label: "Completion Notes",
                                placeholder: "Any notes about the work completed...",
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (!unref(canComplete)) {
                                _push5(ssrRenderComponent(VAlert, {
                                  type: "warning",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Please upload at least one before and one after photo to complete this job. `);
                                    } else {
                                      return [
                                        createTextVNode(" Please upload at least one before and one after photo to complete this job. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "success",
                                size: "large",
                                disabled: !unref(canComplete),
                                loading: unref(completing),
                                onClick: completeJob
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-check-circle`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-check-circle")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Mark Job Complete `);
                                  } else {
                                    return [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-check-circle")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Mark Job Complete ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                !unref(canComplete) ? (openBlock(), createBlock(VAlert, {
                                  key: 0,
                                  type: "warning",
                                  variant: "tonal",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Please upload at least one before and one after photo to complete this job. ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "success",
                                  size: "large",
                                  disabled: !unref(canComplete),
                                  loading: unref(completing),
                                  onClick: completeJob
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-circle")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Mark Job Complete ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              !unref(canComplete) ? (openBlock(), createBlock(VAlert, {
                                key: 0,
                                type: "warning",
                                variant: "tonal",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Please upload at least one before and one after photo to complete this job. ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(VBtn, {
                                block: "",
                                color: "success",
                                size: "large",
                                disabled: !unref(canComplete),
                                loading: unref(completing),
                                onClick: completeJob
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-circle")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Mark Job Complete ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"])
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
                                createTextVNode("mdi-camera")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Job Photos ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "font-weight-bold mb-3" }, "Before Photos"),
                            createVNode(VRow, { class: "mb-4" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(beforePhotos), (photo, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: "before-" + i,
                                    cols: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "pa-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: photo,
                                            height: "80",
                                            cover: "",
                                            class: "rounded"
                                          }, null, 8, ["src"]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "x-small",
                                            color: "error",
                                            class: "position-absolute",
                                            style: { "top": "4px", "right": "4px" },
                                            onClick: ($event) => removePhoto("before", i)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-close")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode(VCol, { cols: "4" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "d-flex align-center justify-center",
                                      height: "80",
                                      style: { "cursor": "pointer", "border-style": "dashed" },
                                      onClick: ($event) => addPhoto("before")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { color: "grey" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-plus")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("h4", { class: "font-weight-bold mb-3" }, "After Photos"),
                            createVNode(VRow, { class: "mb-4" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(afterPhotos), (photo, i) => {
                                  return openBlock(), createBlock(VCol, {
                                    key: "after-" + i,
                                    cols: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "pa-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: photo,
                                            height: "80",
                                            cover: "",
                                            class: "rounded"
                                          }, null, 8, ["src"]),
                                          createVNode(VBtn, {
                                            icon: "",
                                            size: "x-small",
                                            color: "error",
                                            class: "position-absolute",
                                            style: { "top": "4px", "right": "4px" },
                                            onClick: ($event) => removePhoto("after", i)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { size: "small" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-close")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                createVNode(VCol, { cols: "4" }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "d-flex align-center justify-center",
                                      height: "80",
                                      style: { "cursor": "pointer", "border-style": "dashed" },
                                      onClick: ($event) => addPhoto("after")
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { color: "grey" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-plus")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VTextarea, {
                              modelValue: unref(notes),
                              "onUpdate:modelValue": ($event) => isRef(notes) ? notes.value = $event : null,
                              label: "Completion Notes",
                              placeholder: "Any notes about the work completed...",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCard, { elevation: "2" }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            !unref(canComplete) ? (openBlock(), createBlock(VAlert, {
                              key: 0,
                              type: "warning",
                              variant: "tonal",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Please upload at least one before and one after photo to complete this job. ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(VBtn, {
                              block: "",
                              color: "success",
                              size: "large",
                              disabled: !unref(canComplete),
                              loading: unref(completing),
                              onClick: completeJob
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-circle")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Mark Job Complete ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
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
                  createVNode(VCard, {
                    elevation: "2",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, { class: "d-flex align-center" }, {
                        default: withCtx(() => [
                          createVNode(VAvatar, {
                            color: getServiceColor(unref(job).service),
                            size: "40",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { color: "white" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getServiceIcon(unref(job).service)), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["color"]),
                          createTextVNode(" " + toDisplayString(unref(job).service) + " ", 1),
                          createVNode(VSpacer),
                          createVNode(VChip, { color: "info" }, {
                            default: withCtx(() => [
                              createTextVNode("In Progress")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            density: "compact",
                            class: "bg-transparent"
                          }, {
                            default: withCtx(() => [
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
                                      createTextVNode(toDisplayString(unref(job).deceasedName), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Loved One")
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
                                      createTextVNode("mdi-map-marker")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(job).cemetery), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(job).address), 1)
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
                                      createTextVNode("mdi-grave-stone")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(job).plotReference), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Plot Reference")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode("h4", { class: "font-weight-bold mb-2" }, "Special Instructions"),
                          createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(unref(job).instructions || "No special instructions provided."), 1),
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                            createVNode("span", { class: "text-body-2 text-grey" }, "Your Payout"),
                            createVNode("span", { class: "text-h5 font-weight-bold text-success" }, toDisplayString(unref(job).payout), 1)
                          ])
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
                              createTextVNode("mdi-map")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Location ")
                        ]),
                        _: 1
                      }),
                      createVNode(VImg, {
                        src: "https://maps.googleapis.com/maps/api/staticmap?center=Austin,TX&zoom=14&size=600x300&maptype=roadmap&key=demo",
                        height: "200",
                        class: "bg-grey-lighten-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex align-center justify-center h-100" }, [
                            createVNode(VBtn, {
                              color: "primary",
                              "prepend-icon": "mdi-navigation",
                              onClick: openMaps
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Open in Maps ")
                              ]),
                              _: 1
                            })
                          ])
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
                  createVNode(VCard, {
                    elevation: "2",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-camera")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Job Photos ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "font-weight-bold mb-3" }, "Before Photos"),
                          createVNode(VRow, { class: "mb-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(beforePhotos), (photo, i) => {
                                return openBlock(), createBlock(VCol, {
                                  key: "before-" + i,
                                  cols: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "pa-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: photo,
                                          height: "80",
                                          cover: "",
                                          class: "rounded"
                                        }, null, 8, ["src"]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "x-small",
                                          color: "error",
                                          class: "position-absolute",
                                          style: { "top": "4px", "right": "4px" },
                                          onClick: ($event) => removePhoto("before", i)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "small" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-close")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "d-flex align-center justify-center",
                                    height: "80",
                                    style: { "cursor": "pointer", "border-style": "dashed" },
                                    onClick: ($event) => addPhoto("before")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { color: "grey" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-plus")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("h4", { class: "font-weight-bold mb-3" }, "After Photos"),
                          createVNode(VRow, { class: "mb-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(afterPhotos), (photo, i) => {
                                return openBlock(), createBlock(VCol, {
                                  key: "after-" + i,
                                  cols: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "pa-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: photo,
                                          height: "80",
                                          cover: "",
                                          class: "rounded"
                                        }, null, 8, ["src"]),
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "x-small",
                                          color: "error",
                                          class: "position-absolute",
                                          style: { "top": "4px", "right": "4px" },
                                          onClick: ($event) => removePhoto("after", i)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { size: "small" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-close")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "d-flex align-center justify-center",
                                    height: "80",
                                    style: { "cursor": "pointer", "border-style": "dashed" },
                                    onClick: ($event) => addPhoto("after")
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { color: "grey" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-plus")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VTextarea, {
                            modelValue: unref(notes),
                            "onUpdate:modelValue": ($event) => isRef(notes) ? notes.value = $event : null,
                            label: "Completion Notes",
                            placeholder: "Any notes about the work completed...",
                            rows: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          !unref(canComplete) ? (openBlock(), createBlock(VAlert, {
                            key: 0,
                            type: "warning",
                            variant: "tonal",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Please upload at least one before and one after photo to complete this job. ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VBtn, {
                            block: "",
                            color: "success",
                            size: "large",
                            disabled: !unref(canComplete),
                            loading: unref(completing),
                            onClick: completeJob
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Mark Job Complete ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
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
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showSuccess),
        "onUpdate:modelValue": ($event) => isRef(showSuccess) ? showSuccess.value = $event : null,
        "max-width": "400",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "pa-6 text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "mdi-check-circle",
                    color: "success",
                    size: "80",
                    class: "mb-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<h2 class="text-h5 font-weight-bold mb-2"${_scopeId2}>Job Completed!</h2><p class="text-body-1 text-grey-darken-1 mb-4"${_scopeId2}> Great work! The customer will be notified and you&#39;ll receive your payout soon. </p>`);
                  _push3(ssrRenderComponent(VCard, {
                    variant: "tonal",
                    color: "success",
                    class: "pa-4 mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-overline"${_scopeId3}>Payout</div><div class="text-h4 font-weight-bold"${_scopeId3}>${ssrInterpolate(unref(job).payout)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-overline" }, "Payout"),
                          createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(job).payout), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    block: "",
                    to: "/contractor"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Back to My Jobs `);
                      } else {
                        return [
                          createTextVNode(" Back to My Jobs ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, {
                      icon: "mdi-check-circle",
                      color: "success",
                      size: "80",
                      class: "mb-4"
                    }),
                    createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Job Completed!"),
                    createVNode("p", { class: "text-body-1 text-grey-darken-1 mb-4" }, " Great work! The customer will be notified and you'll receive your payout soon. "),
                    createVNode(VCard, {
                      variant: "tonal",
                      color: "success",
                      class: "pa-4 mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-overline" }, "Payout"),
                        createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(job).payout), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary",
                      block: "",
                      to: "/contractor"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Back to My Jobs ")
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
              createVNode(VCard, { class: "pa-6 text-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "mdi-check-circle",
                    color: "success",
                    size: "80",
                    class: "mb-4"
                  }),
                  createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Job Completed!"),
                  createVNode("p", { class: "text-body-1 text-grey-darken-1 mb-4" }, " Great work! The customer will be notified and you'll receive your payout soon. "),
                  createVNode(VCard, {
                    variant: "tonal",
                    color: "success",
                    class: "pa-4 mb-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-overline" }, "Payout"),
                      createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(job).payout), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    color: "primary",
                    block: "",
                    to: "/contractor"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Back to My Jobs ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contractor/job/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DcD6vVOk.mjs.map
