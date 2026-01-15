import { defineComponent, mergeModels, useModel, ref, computed, inject, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { q as VDialog, V as VCard, g as VCardTitle, f as VIcon, d as VCardText, m as VCardActions, o as VSpacer, p as VBtn } from './server.mjs';
import { b as VForm, c as VTextField, d as VTextarea } from './VTextarea-Bkla_C19.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomerDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    customer: {}
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
    const isEdit = computed(() => !!props.customer?.id);
    const form = ref({
      fullName: "",
      phone: "",
      email: "",
      notes: ""
    });
    const showSnackbar = inject("showSnackbar");
    watch(() => props.customer, (val) => {
      if (val) {
        form.value = {
          fullName: val.fullName,
          phone: val.phone || "",
          email: val.email || "",
          notes: val.notes || ""
        };
      } else {
        resetForm();
      }
    }, { immediate: true });
    function resetForm() {
      form.value = { fullName: "", phone: "", email: "", notes: "" };
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
        const url = isEdit.value ? `/api/customers/${props.customer.id}` : "/api/customers";
        const method = isEdit.value ? "PUT" : "POST";
        const result = await $fetch(url, {
          method,
          body: form.value
        });
        emit("saved", result);
        showSnackbar?.(`Customer ${isEdit.value ? "updated" : "created"} successfully`);
        close();
      } catch (error) {
        console.error("Error saving customer:", error);
        showSnackbar?.("Failed to save customer", "error");
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
                        _push4(` ${ssrInterpolate(unref(isEdit) ? "Edit Customer" : "New Customer")}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                            class: "mr-2"
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Customer" : "New Customer"), 1)
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
                                modelValue: unref(form).fullName,
                                "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
                                label: "Full Name",
                                rules: [(v) => !!v || "Name is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                label: "Phone",
                                type: "tel"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                label: "Email",
                                type: "email",
                                rules: [(v) => !v || /.+@.+\..+/.test(v) || "Invalid email"]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                modelValue: unref(form).notes,
                                "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                                label: "Notes",
                                rows: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(form).fullName,
                                  "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
                                  label: "Full Name",
                                  rules: [(v) => !!v || "Name is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).phone,
                                  "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                  label: "Phone",
                                  type: "tel"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  label: "Email",
                                  type: "email",
                                  rules: [(v) => !v || /.+@.+\..+/.test(v) || "Invalid email"]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextarea, {
                                  modelValue: unref(form).notes,
                                  "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                                  label: "Notes",
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
                                modelValue: unref(form).fullName,
                                "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
                                label: "Full Name",
                                rules: [(v) => !!v || "Name is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                label: "Phone",
                                type: "tel"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                label: "Email",
                                type: "email",
                                rules: [(v) => !v || /.+@.+\..+/.test(v) || "Invalid email"]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextarea, {
                                modelValue: unref(form).notes,
                                "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                                label: "Notes",
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
                        createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Customer" : "New Customer"), 1)
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
                              modelValue: unref(form).fullName,
                              "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
                              label: "Full Name",
                              rules: [(v) => !!v || "Name is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              label: "Phone",
                              type: "tel"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              label: "Email",
                              type: "email",
                              rules: [(v) => !v || /.+@.+\..+/.test(v) || "Invalid email"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextarea, {
                              modelValue: unref(form).notes,
                              "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                              label: "Notes",
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
                      createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Customer" : "New Customer"), 1)
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
                            modelValue: unref(form).fullName,
                            "onUpdate:modelValue": ($event) => unref(form).fullName = $event,
                            label: "Full Name",
                            rules: [(v) => !!v || "Name is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            label: "Phone",
                            type: "tel"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            label: "Email",
                            type: "email",
                            rules: [(v) => !v || /.+@.+\..+/.test(v) || "Invalid email"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextarea, {
                            modelValue: unref(form).notes,
                            "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                            label: "Notes",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomerDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CustomerDialog" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CustomerDialog-Cv_huuxX.mjs.map
