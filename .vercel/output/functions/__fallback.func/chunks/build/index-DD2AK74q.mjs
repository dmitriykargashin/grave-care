import { _ as __nuxt_component_0 } from './CustomerDialog-Cv_huuxX.mjs';
import { V as VCard, d as VCardText, p as VBtn, f as VIcon, n as navigateTo } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, createBlock, createCommentVNode, toDisplayString, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch, V as VRow, a as VCol, c as VTextField } from './VTextarea-Bkla_C19.mjs';
import { V as VDataTable } from './VDataTable-Bn0-RdHu.mjs';
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
import './filter-CwhwF0wl.mjs';

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
    const { data: customers, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/customers", {
      query: queryParams
    }, "$J3I4dd1_tm")), __temp = await __temp, __restore(), __temp);
    const customerDialog = ref(false);
    const selectedCustomer = ref(null);
    const headers = [
      { title: "Full Name", key: "fullName", sortable: true },
      { title: "Phone", key: "phone", sortable: true },
      { title: "Email", key: "email", sortable: true },
      { title: "", key: "actions", sortable: false, width: 50 }
    ];
    let debounceTimer;
    function debouncedRefresh() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => refresh(), 300);
    }
    function openCreateDialog() {
      selectedCustomer.value = null;
      customerDialog.value = true;
    }
    function openEditDialog(customer) {
      selectedCustomer.value = customer;
      customerDialog.value = true;
    }
    function onCustomerSaved() {
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomerDialog = __nuxt_component_0;
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
                                label: "Search customers...",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(search),
                                  "onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, debouncedRefresh],
                                  "prepend-inner-icon": "mdi-magnify",
                                  label: "Search customers...",
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
                                    _push6(` New Customer `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "mdi-plus",
                                        start: ""
                                      }),
                                      createTextVNode(" New Customer ")
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
                                    createTextVNode(" New Customer ")
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
                                label: "Search customers...",
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
                                  createTextVNode(" New Customer ")
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
                              label: "Search customers...",
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
                                createTextVNode(" New Customer ")
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
                            label: "Search customers...",
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
                              createTextVNode(" New Customer ")
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
              items: unref(customers) || [],
              loading: unref(pending),
              "items-per-page": 15,
              hover: "",
              "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/customers/${item.id}`)
            }, {
              "item.fullName": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-medium"${_scopeId2}>${ssrInterpolate(item.fullName)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-medium" }, toDisplayString(item.fullName), 1)
                  ];
                }
              }),
              "item.phone": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.phone || "-")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.phone || "-"), 1)
                  ];
                }
              }),
              "item.email": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.email || "-")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.email || "-"), 1)
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
                    icon: "mdi-account-group",
                    size: "64",
                    color: "grey-lighten-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-h6 mt-4"${_scopeId2}>No customers found</div><div class="text-body-2 text-medium-emphasis mb-4"${_scopeId2}>${ssrInterpolate(unref(search) ? "Try adjusting your search" : "Add your first customer to get started")}</div>`);
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
                          _push4(` Add Customer `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" Add Customer ")
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
                        icon: "mdi-account-group",
                        size: "64",
                        color: "grey-lighten-1"
                      }),
                      createVNode("div", { class: "text-h6 mt-4" }, "No customers found"),
                      createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(search) ? "Try adjusting your search" : "Add your first customer to get started"), 1),
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
                          createTextVNode(" Add Customer ")
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
                items: unref(customers) || [],
                loading: unref(pending),
                "items-per-page": 15,
                hover: "",
                "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/customers/${item.id}`)
              }, {
                "item.fullName": withCtx(({ item }) => [
                  createVNode("span", { class: "font-weight-medium" }, toDisplayString(item.fullName), 1)
                ]),
                "item.phone": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.phone || "-"), 1)
                ]),
                "item.email": withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.email || "-"), 1)
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
                      icon: "mdi-account-group",
                      size: "64",
                      color: "grey-lighten-1"
                    }),
                    createVNode("div", { class: "text-h6 mt-4" }, "No customers found"),
                    createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(search) ? "Try adjusting your search" : "Add your first customer to get started"), 1),
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
                        createTextVNode(" Add Customer ")
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
      _push(ssrRenderComponent(_component_CustomerDialog, {
        modelValue: unref(customerDialog),
        "onUpdate:modelValue": ($event) => isRef(customerDialog) ? customerDialog.value = $event : null,
        customer: unref(selectedCustomer),
        onSaved: onCustomerSaved
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DD2AK74q.mjs.map
