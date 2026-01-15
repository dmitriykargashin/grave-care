import { _ as __nuxt_component_1 } from './GraveDialog-UgLPXTAb.mjs';
import { V as VCard, d as VCardText, p as VBtn, f as VIcon, n as navigateTo, l as VChip } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, createBlock, createCommentVNode, toDisplayString, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch, V as VRow, a as VCol, c as VTextField } from './VTextarea-Bkla_C19.mjs';
import { V as VDataTable } from './VDataTable-Bn0-RdHu.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const search = ref("");
    const queryParams = computed(() => {
      const params = {};
      if (search.value) params.q = search.value;
      return params;
    });
    const { data: graves, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/graves", {
      query: queryParams
    }, "$KksAP6ZX7w")), __temp = await __temp, __restore(), __temp);
    const graveDialog = ref(false);
    const selectedGrave = ref(null);
    const headers = [
      { title: "Deceased Name", key: "deceasedName", sortable: true },
      { title: "Cemetery", key: "cemeteryName", sortable: true },
      { title: "Plot Ref", key: "plotRef", sortable: true },
      { title: "Customer", key: "customerName", sortable: true },
      { title: "Open Tasks", key: "openTasksCount", sortable: true },
      { title: "", key: "actions", sortable: false, width: 50 }
    ];
    let debounceTimer;
    function debouncedRefresh() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => refresh(), 300);
    }
    function openCreateDialog() {
      selectedGrave.value = null;
      graveDialog.value = true;
    }
    function openEditDialog(grave) {
      selectedGrave.value = grave;
      graveDialog.value = true;
    }
    function onGraveSaved() {
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GraveDialog = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                                "prepend-inner-icon": "mdi-magnify",
                                label: "Search graves...",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(search),
                                  "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                                  "prepend-inner-icon": "mdi-magnify",
                                  label: "Search graves...",
                                  "hide-details": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "8",
                          class: "text-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                onClick: openCreateDialog
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-plus",
                                      start: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(` New Grave `);
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  color: "primary",
                                  onClick: openCreateDialog
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(search),
                                "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                                "prepend-inner-icon": "mdi-magnify",
                                label: "Search graves...",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "8",
                            class: "text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: openCreateDialog
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
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(search),
                              "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                              "prepend-inner-icon": "mdi-magnify",
                              label: "Search graves...",
                              "hide-details": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "8",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: openCreateDialog
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
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                            "prepend-inner-icon": "mdi-magnify",
                            label: "Search graves...",
                            "hide-details": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6",
                        md: "8",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: openCreateDialog
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
      _push(ssrRenderComponent(VCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: unref(graves) || [],
              loading: unref(pending),
              "items-per-page": 15,
              hover: "",
              "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/graves/${item.id}`)
            }, {
              "item.deceasedName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(item.deceasedName || "Unknown")}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(item.deceasedName || "Unknown"), 1)
                  ];
                }
              }),
              "item.openTasksCount": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: item.openTasksCount > 0 ? "warning" : "success",
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.openTasksCount)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.openTasksCount), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: item.openTasksCount > 0 ? "warning" : "success",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.openTasksCount), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: ($event) => openEditDialog(item)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { icon: "mdi-pencil" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      size: "small",
                      onClick: withModifiers(($event) => openEditDialog(item), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-pencil" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center py-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "mdi-grave-stone",
                    size: "64",
                    color: "grey-lighten-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-h6 mt-4"${_scopeId2}>No graves found</div><div class="text-body-2 text-medium-emphasis mb-4"${_scopeId2}>${ssrInterpolate(unref(search) ? "Try adjusting your search" : "Add your first grave to get started")}</div>`);
                  if (!unref(search)) {
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: openCreateDialog
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }, null, _parent4, _scopeId3));
                          _push4(` Add Grave `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" Add Grave ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center py-8" }, [
                      createVNode(VIcon, {
                        icon: "mdi-grave-stone",
                        size: "64",
                        color: "grey-lighten-1"
                      }),
                      createVNode("div", { class: "text-h6 mt-4" }, "No graves found"),
                      createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(search) ? "Try adjusting your search" : "Add your first grave to get started"), 1),
                      !unref(search) ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        color: "primary",
                        onClick: openCreateDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }),
                          createTextVNode(" Add Grave ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTable, {
                headers,
                items: unref(graves) || [],
                loading: unref(pending),
                "items-per-page": 15,
                hover: "",
                "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/graves/${item.id}`)
              }, {
                "item.deceasedName": withCtx(({ item }) => [
                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(item.deceasedName || "Unknown"), 1)
                ]),
                "item.openTasksCount": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: item.openTasksCount > 0 ? "warning" : "success",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.openTasksCount), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: withModifiers(($event) => openEditDialog(item), ["stop"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, { icon: "mdi-pencil" })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                "no-data": withCtx(() => [
                  createVNode("div", { class: "text-center py-8" }, [
                    createVNode(VIcon, {
                      icon: "mdi-grave-stone",
                      size: "64",
                      color: "grey-lighten-1"
                    }),
                    createVNode("div", { class: "text-h6 mt-4" }, "No graves found"),
                    createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(search) ? "Try adjusting your search" : "Add your first grave to get started"), 1),
                    !unref(search) ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      color: "primary",
                      onClick: openCreateDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-plus",
                          start: ""
                        }),
                        createTextVNode(" Add Grave ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["items", "loading", "onClick:row"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_GraveDialog, {
        modelValue: unref(graveDialog),
        "onUpdate:modelValue": ($event) => isRef(graveDialog) ? graveDialog.value = $event : null,
        grave: unref(selectedGrave),
        onSaved: onGraveSaved
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/graves/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CMXYOIuo.mjs.map
