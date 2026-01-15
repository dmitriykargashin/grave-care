import { defineComponent, mergeModels, useModel, ref, computed, withAsyncContext, inject, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-BJhEzm-4.mjs';
import { H as VDialog, i as VCard, I as VCardTitle, h as VIcon, J as VCardText, K as VForm, W as VAutocomplete, p as VTextField, F as VTextarea, L as VCardActions, q as VSpacer, f as VBtn } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GraveDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    grave: {},
    prefillCemeteryId: {},
    prefillCustomerId: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["saved"], ["update:modelValue"]),
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const dialogModel = useModel(__props, "modelValue");
    const formRef = ref();
    const loading = ref(false);
    const isEdit = computed(() => !!props.grave?.id);
    const form = ref({
      cemeteryId: "",
      customerId: "",
      plotRef: "",
      deceasedName: "",
      specialInstructions: ""
    });
    const { data: cemeteries } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cemeteries", "$EowNjxQ9F_")), __temp = await __temp, __restore(), __temp);
    const { data: customers } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/customers", "$m9ryzeAZqV")), __temp = await __temp, __restore(), __temp);
    const showSnackbar = inject("showSnackbar");
    watch(() => props.grave, (val) => {
      if (val) {
        form.value = {
          cemeteryId: val.cemeteryId,
          customerId: val.customerId,
          plotRef: val.plotRef,
          deceasedName: val.deceasedName || "",
          specialInstructions: val.specialInstructions || ""
        };
      } else {
        resetForm();
      }
    }, { immediate: true });
    watch(() => dialogModel.value, (val) => {
      if (val && !props.grave) {
        if (props.prefillCemeteryId) form.value.cemeteryId = props.prefillCemeteryId;
        if (props.prefillCustomerId) form.value.customerId = props.prefillCustomerId;
      }
    });
    function resetForm() {
      form.value = {
        cemeteryId: props.prefillCemeteryId || "",
        customerId: props.prefillCustomerId || "",
        plotRef: "",
        deceasedName: "",
        specialInstructions: ""
      };
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
        const url = isEdit.value ? `/api/graves/${props.grave.id}` : "/api/graves";
        const method = isEdit.value ? "PUT" : "POST";
        const result = await $fetch(url, {
          method,
          body: form.value
        });
        emit("saved", result);
        showSnackbar?.(`Grave ${isEdit.value ? "updated" : "created"} successfully`);
        close();
      } catch (error) {
        console.error("Error saving grave:", error);
        showSnackbar?.("Failed to save grave", "error");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: dialogModel.value,
        "onUpdate:modelValue": ($event) => dialogModel.value = $event,
        "max-width": "600",
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
                        _push4(` ${ssrInterpolate(unref(isEdit) ? "Edit Grave" : "New Grave")}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                            class: "mr-2"
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Grave" : "New Grave"), 1)
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
                              _push5(ssrRenderComponent(VAutocomplete, {
                                modelValue: unref(form).cemeteryId,
                                "onUpdate:modelValue": ($event) => unref(form).cemeteryId = $event,
                                items: unref(cemeteries),
                                "item-title": "name",
                                "item-value": "id",
                                label: "Cemetery",
                                rules: [(v) => !!v || "Cemetery is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VAutocomplete, {
                                modelValue: unref(form).customerId,
                                "onUpdate:modelValue": ($event) => unref(form).customerId = $event,
                                items: unref(customers),
                                "item-title": "fullName",
                                "item-value": "id",
                                label: "Customer",
                                rules: [(v) => !!v || "Customer is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).plotRef,
                                "onUpdate:modelValue": ($event) => unref(form).plotRef = $event,
                                label: "Plot Reference",
                                rules: [(v) => !!v || "Plot reference is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).deceasedName,
                                "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                label: "Deceased Name"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                modelValue: unref(form).specialInstructions,
                                "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                label: "Special Instructions",
                                rows: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAutocomplete, {
                                  modelValue: unref(form).cemeteryId,
                                  "onUpdate:modelValue": ($event) => unref(form).cemeteryId = $event,
                                  items: unref(cemeteries),
                                  "item-title": "name",
                                  "item-value": "id",
                                  label: "Cemetery",
                                  rules: [(v) => !!v || "Cemetery is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(VAutocomplete, {
                                  modelValue: unref(form).customerId,
                                  "onUpdate:modelValue": ($event) => unref(form).customerId = $event,
                                  items: unref(customers),
                                  "item-title": "fullName",
                                  "item-value": "id",
                                  label: "Customer",
                                  rules: [(v) => !!v || "Customer is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).plotRef,
                                  "onUpdate:modelValue": ($event) => unref(form).plotRef = $event,
                                  label: "Plot Reference",
                                  rules: [(v) => !!v || "Plot reference is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).deceasedName,
                                  "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                  label: "Deceased Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextarea, {
                                  modelValue: unref(form).specialInstructions,
                                  "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                  label: "Special Instructions",
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
                              createVNode(VAutocomplete, {
                                modelValue: unref(form).cemeteryId,
                                "onUpdate:modelValue": ($event) => unref(form).cemeteryId = $event,
                                items: unref(cemeteries),
                                "item-title": "name",
                                "item-value": "id",
                                label: "Cemetery",
                                rules: [(v) => !!v || "Cemetery is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(VAutocomplete, {
                                modelValue: unref(form).customerId,
                                "onUpdate:modelValue": ($event) => unref(form).customerId = $event,
                                items: unref(customers),
                                "item-title": "fullName",
                                "item-value": "id",
                                label: "Customer",
                                rules: [(v) => !!v || "Customer is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).plotRef,
                                "onUpdate:modelValue": ($event) => unref(form).plotRef = $event,
                                label: "Plot Reference",
                                rules: [(v) => !!v || "Plot reference is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).deceasedName,
                                "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                label: "Deceased Name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextarea, {
                                modelValue: unref(form).specialInstructions,
                                "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                label: "Special Instructions",
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
                        createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Grave" : "New Grave"), 1)
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
                            createVNode(VAutocomplete, {
                              modelValue: unref(form).cemeteryId,
                              "onUpdate:modelValue": ($event) => unref(form).cemeteryId = $event,
                              items: unref(cemeteries),
                              "item-title": "name",
                              "item-value": "id",
                              label: "Cemetery",
                              rules: [(v) => !!v || "Cemetery is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(VAutocomplete, {
                              modelValue: unref(form).customerId,
                              "onUpdate:modelValue": ($event) => unref(form).customerId = $event,
                              items: unref(customers),
                              "item-title": "fullName",
                              "item-value": "id",
                              label: "Customer",
                              rules: [(v) => !!v || "Customer is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).plotRef,
                              "onUpdate:modelValue": ($event) => unref(form).plotRef = $event,
                              label: "Plot Reference",
                              rules: [(v) => !!v || "Plot reference is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).deceasedName,
                              "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                              label: "Deceased Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextarea, {
                              modelValue: unref(form).specialInstructions,
                              "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                              label: "Special Instructions",
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
                      createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Grave" : "New Grave"), 1)
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
                          createVNode(VAutocomplete, {
                            modelValue: unref(form).cemeteryId,
                            "onUpdate:modelValue": ($event) => unref(form).cemeteryId = $event,
                            items: unref(cemeteries),
                            "item-title": "name",
                            "item-value": "id",
                            label: "Cemetery",
                            rules: [(v) => !!v || "Cemetery is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(VAutocomplete, {
                            modelValue: unref(form).customerId,
                            "onUpdate:modelValue": ($event) => unref(form).customerId = $event,
                            items: unref(customers),
                            "item-title": "fullName",
                            "item-value": "id",
                            label: "Customer",
                            rules: [(v) => !!v || "Customer is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(VTextField, {
                            modelValue: unref(form).plotRef,
                            "onUpdate:modelValue": ($event) => unref(form).plotRef = $event,
                            label: "Plot Reference",
                            rules: [(v) => !!v || "Plot reference is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            modelValue: unref(form).deceasedName,
                            "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                            label: "Deceased Name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            modelValue: unref(form).specialInstructions,
                            "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                            label: "Special Instructions",
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GraveDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "GraveDialog" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=GraveDialog-QSOFPyPR.mjs.map
