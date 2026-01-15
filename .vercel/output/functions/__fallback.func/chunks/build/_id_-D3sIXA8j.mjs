import { _ as __nuxt_component_0 } from './CustomerDialog-BrFsDCd6.mjs';
import { _ as __nuxt_component_1 } from './GraveDialog-QSOFPyPR.mjs';
import { defineComponent, withAsyncContext, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { N as useRoute$1, f as VBtn, h as VIcon, M as VSkeletonLoader, i as VCard, I as VCardTitle, j as VAvatar, q as VSpacer, J as VCardText, d as VRow, e as VCol, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, s as VChip, Q as VAlert } from './server.mjs';
import { u as useFetch } from './fetch-BJhEzm-4.mjs';
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
    const customerId = route.params.id;
    const { data: customer, pending, refresh: refreshCustomer } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/customers/${customerId}`, "$SKoGDFB1HU")), __temp = await __temp, __restore(), __temp);
    const { data: graves, pending: gravesPending, refresh: refreshGraves } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/customers/${customerId}/graves`, "$a2cwbMtRJY")), __temp = await __temp, __restore(), __temp);
    const customerDialog = ref(false);
    const graveDialog = ref(false);
    function formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
    function openEditDialog() {
      customerDialog.value = true;
    }
    function openGraveDialog() {
      graveDialog.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomerDialog = __nuxt_component_0;
      const _component_GraveDialog = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        class: "mb-4",
        to: "/customers"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-arrow-left",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(` Back to Customers `);
          } else {
            return [
              createVNode(VIcon, {
                icon: "mdi-arrow-left",
                start: ""
              }),
              createTextVNode(" Back to Customers ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(ssrRenderComponent(VSkeletonLoader, { type: "article" }, null, _parent));
      } else if (unref(customer)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VAvatar, {
                      color: "primary",
                      class: "mr-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "mdi-account" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<span class="text-h5"${_scopeId2}>${ssrInterpolate(unref(customer).fullName)}</span>`);
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
                      createVNode(VAvatar, {
                        color: "primary",
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-account" })
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-h5" }, toDisplayString(unref(customer).fullName), 1),
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
                          if (unref(customer).phone) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Phone</div><div class="text-body-1"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-phone",
                                    size: "small",
                                    class: "mr-1"
                                  }, null, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(unref(customer).phone)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "Phone"),
                                    createVNode("div", { class: "text-body-1" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-phone",
                                        size: "small",
                                        class: "mr-1"
                                      }),
                                      createTextVNode(" " + toDisplayString(unref(customer).phone), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (unref(customer).email) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Email</div><div class="text-body-1"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-email",
                                    size: "small",
                                    class: "mr-1"
                                  }, null, _parent5, _scopeId4));
                                  _push5(` ${ssrInterpolate(unref(customer).email)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-caption text-medium-emphasis" }, "Email"),
                                    createVNode("div", { class: "text-body-1" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-email",
                                        size: "small",
                                        class: "mr-1"
                                      }),
                                      createTextVNode(" " + toDisplayString(unref(customer).email), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis"${_scopeId4}>Customer Since</div><div class="text-body-1"${_scopeId4}>${ssrInterpolate(formatDate(unref(customer).createdAt))}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer Since"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(customer).createdAt)), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            unref(customer).phone ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Phone"),
                                createVNode("div", { class: "text-body-1" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-phone",
                                    size: "small",
                                    class: "mr-1"
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(customer).phone), 1)
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            unref(customer).email ? (openBlock(), createBlock(VCol, {
                              key: 1,
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Email"),
                                createVNode("div", { class: "text-body-1" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-email",
                                    size: "small",
                                    class: "mr-1"
                                  }),
                                  createTextVNode(" " + toDisplayString(unref(customer).email), 1)
                                ])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer Since"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(customer).createdAt)), 1)
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
                          unref(customer).phone ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Phone"),
                              createVNode("div", { class: "text-body-1" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-phone",
                                  size: "small",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(unref(customer).phone), 1)
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(customer).email ? (openBlock(), createBlock(VCol, {
                            key: 1,
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Email"),
                              createVNode("div", { class: "text-body-1" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-email",
                                  size: "small",
                                  class: "mr-1"
                                }),
                                createTextVNode(" " + toDisplayString(unref(customer).email), 1)
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer Since"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(customer).createdAt)), 1)
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
                    createVNode(VAvatar, {
                      color: "primary",
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-account" })
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "text-h5" }, toDisplayString(unref(customer).fullName), 1),
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
                        unref(customer).phone ? (openBlock(), createBlock(VCol, {
                          key: 0,
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Phone"),
                            createVNode("div", { class: "text-body-1" }, [
                              createVNode(VIcon, {
                                icon: "mdi-phone",
                                size: "small",
                                class: "mr-1"
                              }),
                              createTextVNode(" " + toDisplayString(unref(customer).phone), 1)
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(customer).email ? (openBlock(), createBlock(VCol, {
                          key: 1,
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Email"),
                            createVNode("div", { class: "text-body-1" }, [
                              createVNode(VIcon, {
                                icon: "mdi-email",
                                size: "small",
                                class: "mr-1"
                              }),
                              createTextVNode(" " + toDisplayString(unref(customer).email), 1)
                            ])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Customer Since"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(formatDate(unref(customer).createdAt)), 1)
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
        if (unref(customer).notes) {
          _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VCardTitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "mdi-note-text",
                        class: "mr-2"
                      }, null, _parent3, _scopeId2));
                      _push3(` Notes `);
                    } else {
                      return [
                        createVNode(VIcon, {
                          icon: "mdi-note-text",
                          class: "mr-2"
                        }),
                        createTextVNode(" Notes ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(VCardText, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p style="${ssrRenderStyle({ "white-space": "pre-wrap" })}"${_scopeId2}>${ssrInterpolate(unref(customer).notes)}</p>`);
                    } else {
                      return [
                        createVNode("p", { style: { "white-space": "pre-wrap" } }, toDisplayString(unref(customer).notes), 1)
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
                        icon: "mdi-note-text",
                        class: "mr-2"
                      }),
                      createTextVNode(" Notes ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("p", { style: { "white-space": "pre-wrap" } }, toDisplayString(unref(customer).notes), 1)
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
        _push(ssrRenderComponent(VCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-grave-stone",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Graves `);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: openGraveDialog
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }, null, _parent4, _scopeId3));
                          _push4(` New Grave `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" New Grave ")
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
                      createTextVNode(" Graves "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        size: "small",
                        onClick: openGraveDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }),
                          createTextVNode(" New Grave ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(gravesPending)) {
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
              } else if (unref(graves)?.length) {
                _push2(ssrRenderComponent(VList, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(graves), (grave) => {
                        _push3(ssrRenderComponent(VListItem, {
                          key: grave.id,
                          to: `/graves/${grave.id}`
                        }, {
                          prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VAvatar, {
                                color: "secondary",
                                size: "40"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VIcon, { icon: "mdi-grave-stone" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "mdi-grave-stone" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VAvatar, {
                                  color: "secondary",
                                  size: "40"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-grave-stone" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VChip, {
                                color: grave.openTasksCount > 0 ? "warning" : "success",
                                size: "small",
                                class: "mr-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(grave.openTasksCount)} tasks `);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(grave.openTasksCount) + " tasks ", 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VIcon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: grave.openTasksCount > 0 ? "warning" : "success",
                                  size: "small",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(grave.openTasksCount) + " tasks ", 1)
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
                                    _push5(`${ssrInterpolate(grave.deceasedName || "Unknown")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(grave.deceasedName || "Unknown"), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(VListItemSubtitle, null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(grave.cemeteryName)} · ${ssrInterpolate(grave.plotRef)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(grave.cemeteryName) + " · " + toDisplayString(grave.plotRef), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(grave.deceasedName || "Unknown"), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(grave.cemeteryName) + " · " + toDisplayString(grave.plotRef), 1)
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(graves), (grave) => {
                          return openBlock(), createBlock(VListItem, {
                            key: grave.id,
                            to: `/graves/${grave.id}`
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                color: "secondary",
                                size: "40"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-grave-stone" })
                                ]),
                                _: 1
                              })
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                color: grave.openTasksCount > 0 ? "warning" : "success",
                                size: "small",
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(grave.openTasksCount) + " tasks ", 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode(VIcon, { icon: "mdi-chevron-right" })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(grave.deceasedName || "Unknown"), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VListItemSubtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(grave.cemeteryName) + " · " + toDisplayString(grave.plotRef), 1)
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
                        icon: "mdi-grave-stone",
                        size: "48",
                        class: "mb-2"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>No graves for this customer</div>`);
                      _push3(ssrRenderComponent(VBtn, {
                        color: "primary",
                        variant: "tonal",
                        class: "mt-4",
                        onClick: openGraveDialog
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Add First Grave `);
                          } else {
                            return [
                              createTextVNode(" Add First Grave ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VIcon, {
                          icon: "mdi-grave-stone",
                          size: "48",
                          class: "mb-2"
                        }),
                        createVNode("div", null, "No graves for this customer"),
                        createVNode(VBtn, {
                          color: "primary",
                          variant: "tonal",
                          class: "mt-4",
                          onClick: openGraveDialog
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Add First Grave ")
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
                      icon: "mdi-grave-stone",
                      class: "mr-2"
                    }),
                    createTextVNode(" Graves "),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: openGraveDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-plus",
                          start: ""
                        }),
                        createTextVNode(" New Grave ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                unref(gravesPending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(VSkeletonLoader, { type: "list-item-two-line@3" })
                  ]),
                  _: 1
                })) : unref(graves)?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(graves), (grave) => {
                      return openBlock(), createBlock(VListItem, {
                        key: grave.id,
                        to: `/graves/${grave.id}`
                      }, {
                        prepend: withCtx(() => [
                          createVNode(VAvatar, {
                            color: "secondary",
                            size: "40"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-grave-stone" })
                            ]),
                            _: 1
                          })
                        ]),
                        append: withCtx(() => [
                          createVNode(VChip, {
                            color: grave.openTasksCount > 0 ? "warning" : "success",
                            size: "small",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(grave.openTasksCount) + " tasks ", 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode(VIcon, { icon: "mdi-chevron-right" })
                        ]),
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(grave.deceasedName || "Unknown"), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VListItemSubtitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(grave.cemeteryName) + " · " + toDisplayString(grave.plotRef), 1)
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
                      icon: "mdi-grave-stone",
                      size: "48",
                      class: "mb-2"
                    }),
                    createVNode("div", null, "No graves for this customer"),
                    createVNode(VBtn, {
                      color: "primary",
                      variant: "tonal",
                      class: "mt-4",
                      onClick: openGraveDialog
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add First Grave ")
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
              _push2(` Customer not found `);
            } else {
              return [
                createTextVNode(" Customer not found ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_CustomerDialog, {
        modelValue: unref(customerDialog),
        "onUpdate:modelValue": ($event) => isRef(customerDialog) ? customerDialog.value = $event : null,
        customer: unref(customer),
        onSaved: unref(refreshCustomer)
      }, null, _parent));
      _push(ssrRenderComponent(_component_GraveDialog, {
        modelValue: unref(graveDialog),
        "onUpdate:modelValue": ($event) => isRef(graveDialog) ? graveDialog.value = $event : null,
        "prefill-customer-id": unref(customerId),
        onSaved: unref(refreshGraves)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-D3sIXA8j.mjs.map
