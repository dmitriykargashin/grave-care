import { defineComponent, withAsyncContext, ref, inject, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, isRef, mergeModels, useModel, computed, watch, mergeProps, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VCard, d as VCardText, p as VBtn, f as VIcon, h as VList, i as VListItem, j as VListItemTitle, k as VListItemSubtitle, e as VAvatar, q as VDialog, g as VCardTitle, m as VCardActions, o as VSpacer } from './server.mjs';
import { u as useFetch, V as VRow, a as VCol, b as VForm, c as VTextField, d as VTextarea } from './VTextarea-Bkla_C19.mjs';
import { V as VSkeletonLoader } from './VSkeletonLoader-WPTEZVnh.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CemeteryDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    cemetery: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["saved"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogModel = useModel(__props, "modelValue");
    const formRef = ref();
    const loading = ref(false);
    const isEdit = computed(() => !!props.cemetery?.id);
    const form = ref({
      name: "",
      address: ""
    });
    const showSnackbar = inject("showSnackbar");
    watch(() => props.cemetery, (val) => {
      if (val) {
        form.value = {
          name: val.name,
          address: val.address || ""
        };
      } else {
        resetForm();
      }
    }, { immediate: true });
    function resetForm() {
      form.value = { name: "", address: "" };
    }
    function close() {
      dialogModel.value = false;
      resetForm();
    }
    async function submit() {
      const { valid } = await formRef.value.validate();
      if (!valid) return;
      loading.value = true;
      try {
        const url = isEdit.value ? `/api/cemeteries/${props.cemetery.id}` : "/api/cemeteries";
        const method = isEdit.value ? "PUT" : "POST";
        const result = await $fetch(url, {
          method,
          body: form.value
        });
        emit("saved", result);
        showSnackbar?.(`Cemetery ${isEdit.value ? "updated" : "created"} successfully`);
        close();
      } catch (error) {
        console.error("Error saving cemetery:", error);
        showSnackbar?.("Failed to save cemetery", "error");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: dialogModel.value,
        "onUpdate:modelValue": ($event) => dialogModel.value = $event,
        "max-width": "500",
        persistent: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(unref(isEdit) ? "Edit Cemetery" : "New Cemetery")}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                            class: "mr-2"
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Cemetery" : "New Cemetery"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formRef",
                          ref: formRef,
                          onSubmit: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                label: "Cemetery Name",
                                rules: [(v) => !!v || "Name is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                modelValue: unref(form).address,
                                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                label: "Address",
                                rows: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  label: "Cemetery Name",
                                  rules: [(v) => !!v || "Name is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextarea, {
                                  modelValue: unref(form).address,
                                  "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                  label: "Address",
                                  rows: "3"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formRef",
                            ref: formRef,
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                label: "Cemetery Name",
                                rules: [(v) => !!v || "Name is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextarea, {
                                modelValue: unref(form).address,
                                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                label: "Address",
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          onClick: close
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          loading: unref(loading),
                          onClick: submit
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isEdit) ? "Save" : "Create")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isEdit) ? "Save" : "Create"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: close
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            loading: unref(loading),
                            onClick: submit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isEdit) ? "Save" : "Create"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                          class: "mr-2"
                        }, null, 8, ["icon"]),
                        createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Cemetery" : "New Cemetery"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formRef",
                          ref: formRef,
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              label: "Cemetery Name",
                              rules: [(v) => !!v || "Name is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextarea, {
                              modelValue: unref(form).address,
                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                              label: "Address",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: close
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          loading: unref(loading),
                          onClick: submit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isEdit) ? "Save" : "Create"), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                        class: "mr-2"
                      }, null, 8, ["icon"]),
                      createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Cemetery" : "New Cemetery"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formRef",
                        ref: formRef,
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            label: "Cemetery Name",
                            rules: [(v) => !!v || "Name is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextarea, {
                            modelValue: unref(form).address,
                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                            label: "Address",
                            rows: "3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: close
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        loading: unref(loading),
                        onClick: submit
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isEdit) ? "Save" : "Create"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CemeteryDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "CemeteryDialog" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cemeteries",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: cemeteries, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cemeteries", "$S7IxEoJr7z")), __temp = await __temp, __restore(), __temp);
    const cemeteryDialog = ref(false);
    const deleteDialog = ref(false);
    const selectedCemetery = ref(null);
    const cemeteryToDelete = ref(null);
    const deleting = ref(false);
    const showSnackbar = inject("showSnackbar");
    function openCreateDialog() {
      selectedCemetery.value = null;
      cemeteryDialog.value = true;
    }
    function openEditDialog(cemetery) {
      selectedCemetery.value = cemetery;
      cemeteryDialog.value = true;
    }
    function onCemeterySaved() {
      refresh();
    }
    function confirmDelete(cemetery) {
      cemeteryToDelete.value = cemetery;
      deleteDialog.value = true;
    }
    async function deleteCemetery() {
      if (!cemeteryToDelete.value) return;
      deleting.value = true;
      try {
        await $fetch(`/api/cemeteries/${cemeteryToDelete.value.id}`, {
          method: "DELETE"
        });
        showSnackbar?.("Cemetery deleted");
        refresh();
        deleteDialog.value = false;
      } catch (error) {
        console.error("Error deleting cemetery:", error);
        const message = error instanceof Error ? error.message : "Failed to delete cemetery";
        showSnackbar?.(message, "error");
      } finally {
        deleting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CemeteryDialog = __nuxt_component_0;
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
                        _push4(ssrRenderComponent(VCol, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-h6"${_scopeId4}>Cemeteries</div><div class="text-body-2 text-medium-emphasis"${_scopeId4}> Manage cemetery locations </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-h6" }, "Cemeteries"),
                                createVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Manage cemetery locations ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "auto" }, {
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
                                    _push6(` New Cemetery `);
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        icon: "mdi-plus",
                                        start: ""
                                      }),
                                      createTextVNode(" New Cemetery ")
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
                                    createTextVNode(" New Cemetery ")
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
                          createVNode(VCol, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6" }, "Cemeteries"),
                              createVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Manage cemetery locations ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "auto" }, {
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
                                  createTextVNode(" New Cemetery ")
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
                        createVNode(VCol, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h6" }, "Cemeteries"),
                            createVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Manage cemetery locations ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "auto" }, {
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
                                createTextVNode(" New Cemetery ")
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
                      createVNode(VCol, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-h6" }, "Cemeteries"),
                          createVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Manage cemetery locations ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "auto" }, {
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
                              createTextVNode(" New Cemetery ")
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
            if (unref(pending)) {
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VSkeletonLoader, { type: "list-item-two-line@5" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VSkeletonLoader, { type: "list-item-two-line@5" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (unref(cemeteries)?.length) {
              _push2(ssrRenderComponent(VList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(cemeteries), (cemetery) => {
                      _push3(ssrRenderComponent(VListItem, {
                        key: cemetery.id
                      }, {
                        prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VAvatar, { color: "primary" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { icon: "mdi-map-marker" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, { icon: "mdi-map-marker" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VAvatar, { color: "primary" }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-map-marker" })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VBtn, {
                              icon: "",
                              variant: "text",
                              size: "small",
                              onClick: ($event) => openEditDialog(cemetery)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, { icon: "mdi-pencil" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VBtn, {
                              icon: "",
                              variant: "text",
                              size: "small",
                              color: "error",
                              onClick: ($event) => confirmDelete(cemetery)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VIcon, { icon: "mdi-delete" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VBtn, {
                                icon: "",
                                variant: "text",
                                size: "small",
                                onClick: ($event) => openEditDialog(cemetery)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-pencil" })
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                icon: "",
                                variant: "text",
                                size: "small",
                                color: "error",
                                onClick: ($event) => confirmDelete(cemetery)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-delete" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ];
                          }
                        }),
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(cemetery.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(cemetery.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (cemetery.address) {
                              _push4(ssrRenderComponent(VListItemSubtitle, null, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(cemetery.address)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(cemetery.address), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cemetery.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              cemetery.address ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cemetery.address), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cemeteries), (cemetery) => {
                        return openBlock(), createBlock(VListItem, {
                          key: cemetery.id
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VAvatar, { color: "primary" }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-map-marker" })
                              ]),
                              _: 1
                            })
                          ]),
                          append: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "",
                              variant: "text",
                              size: "small",
                              onClick: ($event) => openEditDialog(cemetery)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-pencil" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VBtn, {
                              icon: "",
                              variant: "text",
                              size: "small",
                              color: "error",
                              onClick: ($event) => confirmDelete(cemetery)
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-delete" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(cemetery.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            cemetery.address ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(cemetery.address), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
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
              _push2(ssrRenderComponent(VCardText, { class: "text-center py-8" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-map-marker",
                      size: "64",
                      color: "grey-lighten-1"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-h6 mt-4"${_scopeId2}>No cemeteries yet</div><div class="text-body-2 text-medium-emphasis mb-4"${_scopeId2}> Add your first cemetery location </div>`);
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
                          _push4(` Add Cemetery `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" Add Cemetery ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-map-marker",
                        size: "64",
                        color: "grey-lighten-1"
                      }),
                      createVNode("div", { class: "text-h6 mt-4" }, "No cemeteries yet"),
                      createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, " Add your first cemetery location "),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: openCreateDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }),
                          createTextVNode(" Add Cemetery ")
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
              unref(pending) ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VSkeletonLoader, { type: "list-item-two-line@5" })
                ]),
                _: 1
              })) : unref(cemeteries)?.length ? (openBlock(), createBlock(VList, { key: 1 }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cemeteries), (cemetery) => {
                    return openBlock(), createBlock(VListItem, {
                      key: cemetery.id
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VAvatar, { color: "primary" }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-map-marker" })
                          ]),
                          _: 1
                        })
                      ]),
                      append: withCtx(() => [
                        createVNode(VBtn, {
                          icon: "",
                          variant: "text",
                          size: "small",
                          onClick: ($event) => openEditDialog(cemetery)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-pencil" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          icon: "",
                          variant: "text",
                          size: "small",
                          color: "error",
                          onClick: ($event) => confirmDelete(cemetery)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-delete" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, { class: "font-weight-medium" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(cemetery.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        cemetery.address ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(cemetery.address), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(VCardText, {
                key: 2,
                class: "text-center py-8"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, {
                    icon: "mdi-map-marker",
                    size: "64",
                    color: "grey-lighten-1"
                  }),
                  createVNode("div", { class: "text-h6 mt-4" }, "No cemeteries yet"),
                  createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, " Add your first cemetery location "),
                  createVNode(VBtn, {
                    color: "primary",
                    onClick: openCreateDialog
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-plus",
                        start: ""
                      }),
                      createTextVNode(" Add Cemetery ")
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
      _push(ssrRenderComponent(_component_CemeteryDialog, {
        modelValue: unref(cemeteryDialog),
        "onUpdate:modelValue": ($event) => isRef(cemeteryDialog) ? cemeteryDialog.value = $event : null,
        cemetery: unref(selectedCemetery),
        onSaved: onCemeterySaved
      }, null, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(deleteDialog),
        "onUpdate:modelValue": ($event) => isRef(deleteDialog) ? deleteDialog.value = $event : null,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-alert",
                          color: "error",
                          class: "mr-2"
                        }, null, _parent4, _scopeId3));
                        _push4(` Delete Cemetery `);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "mdi-alert",
                            color: "error",
                            class: "mr-2"
                          }),
                          createTextVNode(" Delete Cemetery ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Are you sure you want to delete &quot;${ssrInterpolate(unref(cemeteryToDelete)?.name)}&quot;? This action cannot be undone. `);
                      } else {
                        return [
                          createTextVNode(' Are you sure you want to delete "' + toDisplayString(unref(cemeteryToDelete)?.name) + '"? This action cannot be undone. ', 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancel`);
                            } else {
                              return [
                                createTextVNode("Cancel")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "error",
                          loading: unref(deleting),
                          onClick: deleteCemetery
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Delete `);
                            } else {
                              return [
                                createTextVNode(" Delete ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: ($event) => deleteDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "error",
                            loading: unref(deleting),
                            onClick: deleteCemetery
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-alert",
                          color: "error",
                          class: "mr-2"
                        }),
                        createTextVNode(" Delete Cemetery ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createTextVNode(' Are you sure you want to delete "' + toDisplayString(unref(cemeteryToDelete)?.name) + '"? This action cannot be undone. ', 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: ($event) => deleteDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "error",
                          loading: unref(deleting),
                          onClick: deleteCemetery
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-alert",
                        color: "error",
                        class: "mr-2"
                      }),
                      createTextVNode(" Delete Cemetery ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createTextVNode(' Are you sure you want to delete "' + toDisplayString(unref(cemeteryToDelete)?.name) + '"? This action cannot be undone. ', 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => deleteDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        loading: unref(deleting),
                        onClick: deleteCemetery
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cemeteries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cemeteries-JjKLEaTQ.mjs.map
