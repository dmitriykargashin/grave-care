import { defineComponent, ref, computed, mergeProps, withCtx, unref, isRef, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { V as VContainer, d as VRow, e as VCol, i as VCard, h as VIcon, A as VStepper, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, w as VDivider, q as VSpacer, g as VImg, p as VTextField, C as VCheckbox, f as VBtn, D as VRadioGroup, E as VRadio, F as VTextarea, G as VFileInput, H as VDialog } from './server.mjs';
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
  __name: "request",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    const submitting = ref(false);
    const showSuccess = ref(false);
    const orderNumber = ref("");
    const stepItems = ["Grave Info", "Service", "Your Info", "Payment"];
    const form = ref({
      cemeteryName: "",
      cemeteryAddress: "",
      deceasedName: "",
      plotReference: "",
      serviceType: "cleanup",
      specialInstructions: "",
      photos: [],
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      agreeTerms: false
    });
    const payment = ref({
      cardNumber: "",
      expiry: "",
      cvc: ""
    });
    const rules = {
      required: (v) => !!v || "This field is required",
      email: (v) => /.+@.+\..+/.test(v) || "Valid email required"
    };
    const services = [
      {
        value: "cleanup",
        title: "Grave Cleanup",
        description: "Remove debris, trim grass, general tidying",
        price: "$49",
        icon: "mdi-broom"
      },
      {
        value: "flowers",
        title: "Flower Delivery",
        description: "Fresh seasonal flowers placed with care",
        price: "$35",
        icon: "mdi-flower"
      },
      {
        value: "headstone",
        title: "Headstone Care",
        description: "Professional cleaning and maintenance",
        price: "$79",
        icon: "mdi-grave-stone"
      },
      {
        value: "photo_report",
        title: "Photo Report Only",
        description: "Current condition photos of the grave",
        price: "$25",
        icon: "mdi-camera"
      }
    ];
    const selectedService = computed(
      () => services.find((s) => s.value === form.value.serviceType)
    );
    const submitOrder = async () => {
      submitting.value = true;
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      orderNumber.value = "GC-" + Date.now().toString(36).toUpperCase();
      submitting.value = false;
      showSuccess.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "py-8" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8",
                    lg: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "pa-6 pa-md-8",
                          elevation: "4",
                          rounded: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-center mb-8" data-v-ff6eb4a4${_scopeId4}>`);
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-flower",
                                color: "primary",
                                size: "48",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(`<h1 class="text-h4 font-weight-bold mb-2" data-v-ff6eb4a4${_scopeId4}>Request a Service</h1><p class="text-body-1 text-grey-darken-1" data-v-ff6eb4a4${_scopeId4}> Fill out the form below and we&#39;ll take care of your loved one&#39;s grave. </p></div>`);
                              _push5(ssrRenderComponent(VStepper, {
                                modelValue: unref(step),
                                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
                                items: stepItems,
                                "alt-labels": "",
                                class: "elevation-0"
                              }, {
                                "item.1": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-4" data-v-ff6eb4a4${_scopeId5}><h3 class="text-h6 font-weight-bold mb-4" data-v-ff6eb4a4${_scopeId5}>Grave Information</h3>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).cemeteryName,
                                      "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                      label: "Cemetery Name *",
                                      placeholder: "e.g., Green Lawn Memorial Park",
                                      "prepend-inner-icon": "mdi-map-marker",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).cemeteryAddress,
                                      "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                      label: "Cemetery Address",
                                      placeholder: "City, State",
                                      "prepend-inner-icon": "mdi-map",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).deceasedName,
                                      "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                      label: "Loved One's Name *",
                                      placeholder: "Name on headstone",
                                      "prepend-inner-icon": "mdi-account-heart",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).plotReference,
                                      "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                      label: "Plot/Section Reference",
                                      placeholder: "e.g., Section B, Row 12, Plot 5",
                                      "prepend-inner-icon": "mdi-grave-stone",
                                      hint: "Helps our team locate the grave faster",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-end" data-v-ff6eb4a4${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 2
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Continue `);
                                          _push7(ssrRenderComponent(VIcon, { end: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-right`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-right")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createTextVNode(" Continue "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-4" }, [
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Grave Information"),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).cemeteryName,
                                          "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                          label: "Cemetery Name *",
                                          placeholder: "e.g., Green Lawn Memorial Park",
                                          "prepend-inner-icon": "mdi-map-marker",
                                          rules: [rules.required],
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).cemeteryAddress,
                                          "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                          label: "Cemetery Address",
                                          placeholder: "City, State",
                                          "prepend-inner-icon": "mdi-map",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).deceasedName,
                                          "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                          label: "Loved One's Name *",
                                          placeholder: "Name on headstone",
                                          "prepend-inner-icon": "mdi-account-heart",
                                          rules: [rules.required],
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).plotReference,
                                          "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                          label: "Plot/Section Reference",
                                          placeholder: "e.g., Section B, Row 12, Plot 5",
                                          "prepend-inner-icon": "mdi-grave-stone",
                                          hint: "Helps our team locate the grave faster",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex justify-end" }, [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            size: "large",
                                            onClick: ($event) => step.value = 2
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Continue "),
                                              createVNode(VIcon, { end: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-right")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                "item.2": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-4" data-v-ff6eb4a4${_scopeId5}><h3 class="text-h6 font-weight-bold mb-4" data-v-ff6eb4a4${_scopeId5}>Select Service</h3>`);
                                    _push6(ssrRenderComponent(VRadioGroup, {
                                      modelValue: unref(form).serviceType,
                                      "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                      class: "mb-6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(services, (service) => {
                                            _push7(ssrRenderComponent(VCard, {
                                              key: service.value,
                                              color: unref(form).serviceType === service.value ? "primary" : void 0,
                                              variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                              class: "mb-3 pa-4",
                                              onClick: ($event) => unref(form).serviceType = service.value,
                                              style: { "cursor": "pointer" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex align-center" data-v-ff6eb4a4${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VRadio, {
                                                    value: service.value,
                                                    class: "mr-4"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VIcon, {
                                                    icon: service.icon,
                                                    size: "32",
                                                    class: "mr-4"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`<div class="flex-grow-1" data-v-ff6eb4a4${_scopeId7}><div class="font-weight-bold" data-v-ff6eb4a4${_scopeId7}>${ssrInterpolate(service.title)}</div><div class="text-body-2 text-grey-darken-1" data-v-ff6eb4a4${_scopeId7}>${ssrInterpolate(service.description)}</div></div><div class="text-h6 font-weight-bold text-primary" data-v-ff6eb4a4${_scopeId7}>${ssrInterpolate(service.price)}</div></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "d-flex align-center" }, [
                                                      createVNode(VRadio, {
                                                        value: service.value,
                                                        class: "mr-4"
                                                      }, null, 8, ["value"]),
                                                      createVNode(VIcon, {
                                                        icon: service.icon,
                                                        size: "32",
                                                        class: "mr-4"
                                                      }, null, 8, ["icon"]),
                                                      createVNode("div", { class: "flex-grow-1" }, [
                                                        createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                        createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                                      ]),
                                                      createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                              return createVNode(VCard, {
                                                key: service.value,
                                                color: unref(form).serviceType === service.value ? "primary" : void 0,
                                                variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                                class: "mb-3 pa-4",
                                                onClick: ($event) => unref(form).serviceType = service.value,
                                                style: { "cursor": "pointer" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center" }, [
                                                    createVNode(VRadio, {
                                                      value: service.value,
                                                      class: "mr-4"
                                                    }, null, 8, ["value"]),
                                                    createVNode(VIcon, {
                                                      icon: service.icon,
                                                      size: "32",
                                                      class: "mr-4"
                                                    }, null, 8, ["icon"]),
                                                    createVNode("div", { class: "flex-grow-1" }, [
                                                      createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                      createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                                    ]),
                                                    createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "variant", "onClick"]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextarea, {
                                      modelValue: unref(form).specialInstructions,
                                      "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                      label: "Special Instructions",
                                      placeholder: "Any specific requests or details about the grave location...",
                                      "prepend-inner-icon": "mdi-text",
                                      rows: "3",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VFileInput, {
                                      modelValue: unref(form).photos,
                                      "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                      label: "Reference Photos (optional)",
                                      "prepend-inner-icon": "mdi-camera",
                                      accept: "image/*",
                                      multiple: "",
                                      chips: "",
                                      hint: "Upload any photos that might help locate or identify the grave",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between" data-v-ff6eb4a4${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 1
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-left`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-left")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Back `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 3
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Continue `);
                                          _push7(ssrRenderComponent(VIcon, { end: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-right`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-right")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createTextVNode(" Continue "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-4" }, [
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Select Service"),
                                        createVNode(VRadioGroup, {
                                          modelValue: unref(form).serviceType,
                                          "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                          class: "mb-6"
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                              return createVNode(VCard, {
                                                key: service.value,
                                                color: unref(form).serviceType === service.value ? "primary" : void 0,
                                                variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                                class: "mb-3 pa-4",
                                                onClick: ($event) => unref(form).serviceType = service.value,
                                                style: { "cursor": "pointer" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "d-flex align-center" }, [
                                                    createVNode(VRadio, {
                                                      value: service.value,
                                                      class: "mr-4"
                                                    }, null, 8, ["value"]),
                                                    createVNode(VIcon, {
                                                      icon: service.icon,
                                                      size: "32",
                                                      class: "mr-4"
                                                    }, null, 8, ["icon"]),
                                                    createVNode("div", { class: "flex-grow-1" }, [
                                                      createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                      createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                                    ]),
                                                    createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["color", "variant", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextarea, {
                                          modelValue: unref(form).specialInstructions,
                                          "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                          label: "Special Instructions",
                                          placeholder: "Any specific requests or details about the grave location...",
                                          "prepend-inner-icon": "mdi-text",
                                          rows: "3",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VFileInput, {
                                          modelValue: unref(form).photos,
                                          "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                          label: "Reference Photos (optional)",
                                          "prepend-inner-icon": "mdi-camera",
                                          accept: "image/*",
                                          multiple: "",
                                          chips: "",
                                          hint: "Upload any photos that might help locate or identify the grave",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode(VBtn, {
                                            variant: "text",
                                            size: "large",
                                            onClick: ($event) => step.value = 1
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-left")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Back ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            size: "large",
                                            onClick: ($event) => step.value = 3
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Continue "),
                                              createVNode(VIcon, { end: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-right")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                "item.3": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-4" data-v-ff6eb4a4${_scopeId5}><h3 class="text-h6 font-weight-bold mb-4" data-v-ff6eb4a4${_scopeId5}>Your Information</h3>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).customerName,
                                      "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                      label: "Your Name *",
                                      "prepend-inner-icon": "mdi-account",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).customerEmail,
                                      "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                      label: "Email Address *",
                                      type: "email",
                                      "prepend-inner-icon": "mdi-email",
                                      rules: [rules.required, rules.email],
                                      hint: "We'll send confirmation and photos here",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(form).customerPhone,
                                      "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                      label: "Phone Number",
                                      type: "tel",
                                      "prepend-inner-icon": "mdi-phone",
                                      hint: "Optional - for SMS updates",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between" data-v-ff6eb4a4${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 2
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-left`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-left")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Back `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 4
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Continue to Payment `);
                                          _push7(ssrRenderComponent(VIcon, { end: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-right`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-right")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createTextVNode(" Continue to Payment "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-4" }, [
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Your Information"),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).customerName,
                                          "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                          label: "Your Name *",
                                          "prepend-inner-icon": "mdi-account",
                                          rules: [rules.required],
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).customerEmail,
                                          "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                          label: "Email Address *",
                                          type: "email",
                                          "prepend-inner-icon": "mdi-email",
                                          rules: [rules.required, rules.email],
                                          hint: "We'll send confirmation and photos here",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          modelValue: unref(form).customerPhone,
                                          "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                          label: "Phone Number",
                                          type: "tel",
                                          "prepend-inner-icon": "mdi-phone",
                                          hint: "Optional - for SMS updates",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode(VBtn, {
                                            variant: "text",
                                            size: "large",
                                            onClick: ($event) => step.value = 2
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-left")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Back ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            size: "large",
                                            onClick: ($event) => step.value = 4
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Continue to Payment "),
                                              createVNode(VIcon, { end: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-right")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                "item.4": withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="pa-4" data-v-ff6eb4a4${_scopeId5}><h3 class="text-h6 font-weight-bold mb-4" data-v-ff6eb4a4${_scopeId5}>Review &amp; Payment</h3>`);
                                    _push6(ssrRenderComponent(VCard, {
                                      variant: "tonal",
                                      color: "grey-lighten-4",
                                      class: "pa-4 mb-6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h4 class="font-weight-bold mb-3" data-v-ff6eb4a4${_scopeId6}>Order Summary</h4>`);
                                          _push7(ssrRenderComponent(VList, {
                                            density: "compact",
                                            class: "bg-transparent"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-map-marker`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-map-marker")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
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
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(form).cemeteryName || "Cemetery")}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VListItemSubtitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(form).cemeteryAddress)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`mdi-account-heart`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-account-heart")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
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
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(form).deceasedName || "Loved one")}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VListItemSubtitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(form).plotReference)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(form).plotReference), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VListItemSubtitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(form).plotReference), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VListItem, null, {
                                                  prepend: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(selectedService)?.icon)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  append: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<span class="font-weight-bold" data-v-ff6eb4a4${_scopeId8}>${ssrInterpolate(unref(selectedService)?.price)}</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                                      ];
                                                    }
                                                  }),
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VListItemTitle, null, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`${ssrInterpolate(unref(selectedService)?.title)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
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
                                                          createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                          createTextVNode("mdi-account-heart")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VListItemSubtitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                          createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    append: withCtx(() => [
                                                      createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                                    ]),
                                                    default: withCtx(() => [
                                                      createVNode(VListItemTitle, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex justify-space-between align-center" data-v-ff6eb4a4${_scopeId6}><span class="text-h6 font-weight-bold" data-v-ff6eb4a4${_scopeId6}>Total</span><span class="text-h5 font-weight-bold text-primary" data-v-ff6eb4a4${_scopeId6}>${ssrInterpolate(unref(selectedService)?.price)}</span></div>`);
                                        } else {
                                          return [
                                            createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                            createVNode(VList, {
                                              density: "compact",
                                              class: "bg-transparent"
                                            }, {
                                              default: withCtx(() => [
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
                                                        createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                        createTextVNode("mdi-account-heart")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                        createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-3" }),
                                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                              createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                              createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCard, {
                                      variant: "outlined",
                                      class: "pa-4 mb-6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex align-center mb-4" data-v-ff6eb4a4${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            color: "primary",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-lock`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-lock")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<span class="font-weight-medium" data-v-ff6eb4a4${_scopeId6}>Secure Payment</span>`);
                                          _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VImg, {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                            "max-width": "60"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(payment).cardNumber,
                                            "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                            label: "Card Number",
                                            placeholder: "4242 4242 4242 4242",
                                            "prepend-inner-icon": "mdi-credit-card",
                                            class: "mb-4"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, { cols: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(payment).expiry,
                                                        "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                        label: "Expiry",
                                                        placeholder: "MM/YY"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(payment).expiry,
                                                          "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                          label: "Expiry",
                                                          placeholder: "MM/YY"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, { cols: "6" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(payment).cvc,
                                                        "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                        label: "CVC",
                                                        placeholder: "123"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(payment).cvc,
                                                          "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                          label: "CVC",
                                                          placeholder: "123"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(payment).expiry,
                                                        "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                        label: "Expiry",
                                                        placeholder: "MM/YY"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, { cols: "6" }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(payment).cvc,
                                                        "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                        label: "CVC",
                                                        placeholder: "123"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode(VIcon, {
                                                color: "primary",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-lock")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                              createVNode(VSpacer),
                                              createVNode(VImg, {
                                                src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                                "max-width": "60"
                                              })
                                            ]),
                                            createVNode(VTextField, {
                                              modelValue: unref(payment).cardNumber,
                                              "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                              label: "Card Number",
                                              placeholder: "4242 4242 4242 4242",
                                              "prepend-inner-icon": "mdi-credit-card",
                                              class: "mb-4"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(payment).expiry,
                                                      "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                      label: "Expiry",
                                                      placeholder: "MM/YY"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(payment).cvc,
                                                      "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                      label: "CVC",
                                                      placeholder: "123"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCheckbox, {
                                      modelValue: unref(form).agreeTerms,
                                      "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                      label: "I agree to the Terms of Service and Privacy Policy",
                                      color: "primary",
                                      class: "mb-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex justify-space-between" data-v-ff6eb4a4${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 3
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-arrow-left`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-arrow-left")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Back `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      loading: unref(submitting),
                                      onClick: submitOrder
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-check`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-check")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Place Order `);
                                        } else {
                                          return [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Place Order ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "pa-4" }, [
                                        createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Review & Payment"),
                                        createVNode(VCard, {
                                          variant: "tonal",
                                          color: "grey-lighten-4",
                                          class: "pa-4 mb-6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                            createVNode(VList, {
                                              density: "compact",
                                              class: "bg-transparent"
                                            }, {
                                              default: withCtx(() => [
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
                                                        createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                        createTextVNode("mdi-account-heart")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VListItemSubtitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                        createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  append: withCtx(() => [
                                                    createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                                  ]),
                                                  default: withCtx(() => [
                                                    createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VDivider, { class: "my-3" }),
                                            createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                              createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                              createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCard, {
                                          variant: "outlined",
                                          class: "pa-4 mb-6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center mb-4" }, [
                                              createVNode(VIcon, {
                                                color: "primary",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-lock")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                              createVNode(VSpacer),
                                              createVNode(VImg, {
                                                src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                                "max-width": "60"
                                              })
                                            ]),
                                            createVNode(VTextField, {
                                              modelValue: unref(payment).cardNumber,
                                              "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                              label: "Card Number",
                                              placeholder: "4242 4242 4242 4242",
                                              "prepend-inner-icon": "mdi-credit-card",
                                              class: "mb-4"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(payment).expiry,
                                                      "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                      label: "Expiry",
                                                      placeholder: "MM/YY"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, { cols: "6" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(payment).cvc,
                                                      "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                      label: "CVC",
                                                      placeholder: "123"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCheckbox, {
                                          modelValue: unref(form).agreeTerms,
                                          "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                          label: "I agree to the Terms of Service and Privacy Policy",
                                          color: "primary",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex justify-space-between" }, [
                                          createVNode(VBtn, {
                                            variant: "text",
                                            size: "large",
                                            onClick: ($event) => step.value = 3
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-arrow-left")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Back ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "primary",
                                            size: "large",
                                            loading: unref(submitting),
                                            onClick: submitOrder
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-check")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Place Order ")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-center mb-8" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-flower",
                                    color: "primary",
                                    size: "48",
                                    class: "mb-4"
                                  }),
                                  createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Request a Service"),
                                  createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Fill out the form below and we'll take care of your loved one's grave. ")
                                ]),
                                createVNode(VStepper, {
                                  modelValue: unref(step),
                                  "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
                                  items: stepItems,
                                  "alt-labels": "",
                                  class: "elevation-0"
                                }, {
                                  "item.1": withCtx(() => [
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Grave Information"),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).cemeteryName,
                                        "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                        label: "Cemetery Name *",
                                        placeholder: "e.g., Green Lawn Memorial Park",
                                        "prepend-inner-icon": "mdi-map-marker",
                                        rules: [rules.required],
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).cemeteryAddress,
                                        "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                        label: "Cemetery Address",
                                        placeholder: "City, State",
                                        "prepend-inner-icon": "mdi-map",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).deceasedName,
                                        "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                        label: "Loved One's Name *",
                                        placeholder: "Name on headstone",
                                        "prepend-inner-icon": "mdi-account-heart",
                                        rules: [rules.required],
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).plotReference,
                                        "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                        label: "Plot/Section Reference",
                                        placeholder: "e.g., Section B, Row 12, Plot 5",
                                        "prepend-inner-icon": "mdi-grave-stone",
                                        hint: "Helps our team locate the grave faster",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex justify-end" }, [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "large",
                                          onClick: ($event) => step.value = 2
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Continue "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  "item.2": withCtx(() => [
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Select Service"),
                                      createVNode(VRadioGroup, {
                                        modelValue: unref(form).serviceType,
                                        "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                        class: "mb-6"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                            return createVNode(VCard, {
                                              key: service.value,
                                              color: unref(form).serviceType === service.value ? "primary" : void 0,
                                              variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                              class: "mb-3 pa-4",
                                              onClick: ($event) => unref(form).serviceType = service.value,
                                              style: { "cursor": "pointer" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex align-center" }, [
                                                  createVNode(VRadio, {
                                                    value: service.value,
                                                    class: "mr-4"
                                                  }, null, 8, ["value"]),
                                                  createVNode(VIcon, {
                                                    icon: service.icon,
                                                    size: "32",
                                                    class: "mr-4"
                                                  }, null, 8, ["icon"]),
                                                  createVNode("div", { class: "flex-grow-1" }, [
                                                    createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                    createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                                  ]),
                                                  createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["color", "variant", "onClick"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextarea, {
                                        modelValue: unref(form).specialInstructions,
                                        "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                        label: "Special Instructions",
                                        placeholder: "Any specific requests or details about the grave location...",
                                        "prepend-inner-icon": "mdi-text",
                                        rows: "3",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VFileInput, {
                                        modelValue: unref(form).photos,
                                        "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                        label: "Reference Photos (optional)",
                                        "prepend-inner-icon": "mdi-camera",
                                        accept: "image/*",
                                        multiple: "",
                                        chips: "",
                                        hint: "Upload any photos that might help locate or identify the grave",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          size: "large",
                                          onClick: ($event) => step.value = 1
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "large",
                                          onClick: ($event) => step.value = 3
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Continue "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  "item.3": withCtx(() => [
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Your Information"),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).customerName,
                                        "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                        label: "Your Name *",
                                        "prepend-inner-icon": "mdi-account",
                                        rules: [rules.required],
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).customerEmail,
                                        "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                        label: "Email Address *",
                                        type: "email",
                                        "prepend-inner-icon": "mdi-email",
                                        rules: [rules.required, rules.email],
                                        hint: "We'll send confirmation and photos here",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        modelValue: unref(form).customerPhone,
                                        "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                        label: "Phone Number",
                                        type: "tel",
                                        "prepend-inner-icon": "mdi-phone",
                                        hint: "Optional - for SMS updates",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          size: "large",
                                          onClick: ($event) => step.value = 2
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "large",
                                          onClick: ($event) => step.value = 4
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Continue to Payment "),
                                            createVNode(VIcon, { end: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-right")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ])
                                  ]),
                                  "item.4": withCtx(() => [
                                    createVNode("div", { class: "pa-4" }, [
                                      createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Review & Payment"),
                                      createVNode(VCard, {
                                        variant: "tonal",
                                        color: "grey-lighten-4",
                                        class: "pa-4 mb-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                          createVNode(VList, {
                                            density: "compact",
                                            class: "bg-transparent"
                                          }, {
                                            default: withCtx(() => [
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
                                                      createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                      createTextVNode("mdi-account-heart")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VListItemSubtitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                      createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                append: withCtx(() => [
                                                  createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                                ]),
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VDivider, { class: "my-3" }),
                                          createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                            createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                            createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCard, {
                                        variant: "outlined",
                                        class: "pa-4 mb-6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center mb-4" }, [
                                            createVNode(VIcon, {
                                              color: "primary",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-lock")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                            createVNode(VSpacer),
                                            createVNode(VImg, {
                                              src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                              "max-width": "60"
                                            })
                                          ]),
                                          createVNode(VTextField, {
                                            modelValue: unref(payment).cardNumber,
                                            "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                            label: "Card Number",
                                            placeholder: "4242 4242 4242 4242",
                                            "prepend-inner-icon": "mdi-credit-card",
                                            class: "mb-4"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(payment).expiry,
                                                    "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                    label: "Expiry",
                                                    placeholder: "MM/YY"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, { cols: "6" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(payment).cvc,
                                                    "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                    label: "CVC",
                                                    placeholder: "123"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCheckbox, {
                                        modelValue: unref(form).agreeTerms,
                                        "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                        label: "I agree to the Terms of Service and Privacy Policy",
                                        color: "primary",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex justify-space-between" }, [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          size: "large",
                                          onClick: ($event) => step.value = 3
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-arrow-left")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Back ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          size: "large",
                                          loading: unref(submitting),
                                          onClick: submitOrder
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-check")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Place Order ")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            class: "pa-6 pa-md-8",
                            elevation: "4",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center mb-8" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-flower",
                                  color: "primary",
                                  size: "48",
                                  class: "mb-4"
                                }),
                                createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Request a Service"),
                                createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Fill out the form below and we'll take care of your loved one's grave. ")
                              ]),
                              createVNode(VStepper, {
                                modelValue: unref(step),
                                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
                                items: stepItems,
                                "alt-labels": "",
                                class: "elevation-0"
                              }, {
                                "item.1": withCtx(() => [
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Grave Information"),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).cemeteryName,
                                      "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                      label: "Cemetery Name *",
                                      placeholder: "e.g., Green Lawn Memorial Park",
                                      "prepend-inner-icon": "mdi-map-marker",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).cemeteryAddress,
                                      "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                      label: "Cemetery Address",
                                      placeholder: "City, State",
                                      "prepend-inner-icon": "mdi-map",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).deceasedName,
                                      "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                      label: "Loved One's Name *",
                                      placeholder: "Name on headstone",
                                      "prepend-inner-icon": "mdi-account-heart",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).plotReference,
                                      "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                      label: "Plot/Section Reference",
                                      placeholder: "e.g., Section B, Row 12, Plot 5",
                                      "prepend-inner-icon": "mdi-grave-stone",
                                      hint: "Helps our team locate the grave faster",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex justify-end" }, [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        onClick: ($event) => step.value = 2
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Continue "),
                                          createVNode(VIcon, { end: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-right")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ])
                                ]),
                                "item.2": withCtx(() => [
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Select Service"),
                                    createVNode(VRadioGroup, {
                                      modelValue: unref(form).serviceType,
                                      "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                      class: "mb-6"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                          return createVNode(VCard, {
                                            key: service.value,
                                            color: unref(form).serviceType === service.value ? "primary" : void 0,
                                            variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                            class: "mb-3 pa-4",
                                            onClick: ($event) => unref(form).serviceType = service.value,
                                            style: { "cursor": "pointer" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex align-center" }, [
                                                createVNode(VRadio, {
                                                  value: service.value,
                                                  class: "mr-4"
                                                }, null, 8, ["value"]),
                                                createVNode(VIcon, {
                                                  icon: service.icon,
                                                  size: "32",
                                                  class: "mr-4"
                                                }, null, 8, ["icon"]),
                                                createVNode("div", { class: "flex-grow-1" }, [
                                                  createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                  createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                                ]),
                                                createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "variant", "onClick"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VTextarea, {
                                      modelValue: unref(form).specialInstructions,
                                      "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                      label: "Special Instructions",
                                      placeholder: "Any specific requests or details about the grave location...",
                                      "prepend-inner-icon": "mdi-text",
                                      rows: "3",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VFileInput, {
                                      modelValue: unref(form).photos,
                                      "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                      label: "Reference Photos (optional)",
                                      "prepend-inner-icon": "mdi-camera",
                                      accept: "image/*",
                                      multiple: "",
                                      chips: "",
                                      hint: "Upload any photos that might help locate or identify the grave",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        size: "large",
                                        onClick: ($event) => step.value = 1
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-left")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Back ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        onClick: ($event) => step.value = 3
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Continue "),
                                          createVNode(VIcon, { end: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-right")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ])
                                ]),
                                "item.3": withCtx(() => [
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Your Information"),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).customerName,
                                      "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                      label: "Your Name *",
                                      "prepend-inner-icon": "mdi-account",
                                      rules: [rules.required],
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).customerEmail,
                                      "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                      label: "Email Address *",
                                      type: "email",
                                      "prepend-inner-icon": "mdi-email",
                                      rules: [rules.required, rules.email],
                                      hint: "We'll send confirmation and photos here",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      modelValue: unref(form).customerPhone,
                                      "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                      label: "Phone Number",
                                      type: "tel",
                                      "prepend-inner-icon": "mdi-phone",
                                      hint: "Optional - for SMS updates",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        size: "large",
                                        onClick: ($event) => step.value = 2
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-left")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Back ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        onClick: ($event) => step.value = 4
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Continue to Payment "),
                                          createVNode(VIcon, { end: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-right")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ])
                                ]),
                                "item.4": withCtx(() => [
                                  createVNode("div", { class: "pa-4" }, [
                                    createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Review & Payment"),
                                    createVNode(VCard, {
                                      variant: "tonal",
                                      color: "grey-lighten-4",
                                      class: "pa-4 mb-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                        createVNode(VList, {
                                          density: "compact",
                                          class: "bg-transparent"
                                        }, {
                                          default: withCtx(() => [
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
                                                    createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                    createTextVNode("mdi-account-heart")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                    createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              append: withCtx(() => [
                                                createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-3" }),
                                        createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                          createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                          createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCard, {
                                      variant: "outlined",
                                      class: "pa-4 mb-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex align-center mb-4" }, [
                                          createVNode(VIcon, {
                                            color: "primary",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-lock")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                          createVNode(VSpacer),
                                          createVNode(VImg, {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                            "max-width": "60"
                                          })
                                        ]),
                                        createVNode(VTextField, {
                                          modelValue: unref(payment).cardNumber,
                                          "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                          label: "Card Number",
                                          placeholder: "4242 4242 4242 4242",
                                          "prepend-inner-icon": "mdi-credit-card",
                                          class: "mb-4"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(payment).expiry,
                                                  "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                  label: "Expiry",
                                                  placeholder: "MM/YY"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "6" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(payment).cvc,
                                                  "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                  label: "CVC",
                                                  placeholder: "123"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCheckbox, {
                                      modelValue: unref(form).agreeTerms,
                                      "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                      label: "I agree to the Terms of Service and Privacy Policy",
                                      color: "primary",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex justify-space-between" }, [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        size: "large",
                                        onClick: ($event) => step.value = 3
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-arrow-left")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Back ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        size: "large",
                                        loading: unref(submitting),
                                        onClick: submitOrder
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-check")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Place Order ")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(VCol, {
                      cols: "12",
                      md: "8",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "pa-6 pa-md-8",
                          elevation: "4",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center mb-8" }, [
                              createVNode(VIcon, {
                                icon: "mdi-flower",
                                color: "primary",
                                size: "48",
                                class: "mb-4"
                              }),
                              createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Request a Service"),
                              createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Fill out the form below and we'll take care of your loved one's grave. ")
                            ]),
                            createVNode(VStepper, {
                              modelValue: unref(step),
                              "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
                              items: stepItems,
                              "alt-labels": "",
                              class: "elevation-0"
                            }, {
                              "item.1": withCtx(() => [
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Grave Information"),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).cemeteryName,
                                    "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                    label: "Cemetery Name *",
                                    placeholder: "e.g., Green Lawn Memorial Park",
                                    "prepend-inner-icon": "mdi-map-marker",
                                    rules: [rules.required],
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).cemeteryAddress,
                                    "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                    label: "Cemetery Address",
                                    placeholder: "City, State",
                                    "prepend-inner-icon": "mdi-map",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).deceasedName,
                                    "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                    label: "Loved One's Name *",
                                    placeholder: "Name on headstone",
                                    "prepend-inner-icon": "mdi-account-heart",
                                    rules: [rules.required],
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).plotReference,
                                    "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                    label: "Plot/Section Reference",
                                    placeholder: "e.g., Section B, Row 12, Plot 5",
                                    "prepend-inner-icon": "mdi-grave-stone",
                                    hint: "Helps our team locate the grave faster",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex justify-end" }, [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 2
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Continue "),
                                        createVNode(VIcon, { end: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-right")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              "item.2": withCtx(() => [
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Select Service"),
                                  createVNode(VRadioGroup, {
                                    modelValue: unref(form).serviceType,
                                    "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                    class: "mb-6"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                        return createVNode(VCard, {
                                          key: service.value,
                                          color: unref(form).serviceType === service.value ? "primary" : void 0,
                                          variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                          class: "mb-3 pa-4",
                                          onClick: ($event) => unref(form).serviceType = service.value,
                                          style: { "cursor": "pointer" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex align-center" }, [
                                              createVNode(VRadio, {
                                                value: service.value,
                                                class: "mr-4"
                                              }, null, 8, ["value"]),
                                              createVNode(VIcon, {
                                                icon: service.icon,
                                                size: "32",
                                                class: "mr-4"
                                              }, null, 8, ["icon"]),
                                              createVNode("div", { class: "flex-grow-1" }, [
                                                createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                                createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                              ]),
                                              createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "variant", "onClick"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VTextarea, {
                                    modelValue: unref(form).specialInstructions,
                                    "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                    label: "Special Instructions",
                                    placeholder: "Any specific requests or details about the grave location...",
                                    "prepend-inner-icon": "mdi-text",
                                    rows: "3",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(VFileInput, {
                                    modelValue: unref(form).photos,
                                    "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                    label: "Reference Photos (optional)",
                                    "prepend-inner-icon": "mdi-camera",
                                    accept: "image/*",
                                    multiple: "",
                                    chips: "",
                                    hint: "Upload any photos that might help locate or identify the grave",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 1
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-left")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Back ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 3
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Continue "),
                                        createVNode(VIcon, { end: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-right")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              "item.3": withCtx(() => [
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Your Information"),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).customerName,
                                    "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                    label: "Your Name *",
                                    "prepend-inner-icon": "mdi-account",
                                    rules: [rules.required],
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).customerEmail,
                                    "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                    label: "Email Address *",
                                    type: "email",
                                    "prepend-inner-icon": "mdi-email",
                                    rules: [rules.required, rules.email],
                                    hint: "We'll send confirmation and photos here",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    modelValue: unref(form).customerPhone,
                                    "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                    label: "Phone Number",
                                    type: "tel",
                                    "prepend-inner-icon": "mdi-phone",
                                    hint: "Optional - for SMS updates",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 2
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-left")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Back ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      onClick: ($event) => step.value = 4
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Continue to Payment "),
                                        createVNode(VIcon, { end: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-right")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              "item.4": withCtx(() => [
                                createVNode("div", { class: "pa-4" }, [
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Review & Payment"),
                                  createVNode(VCard, {
                                    variant: "tonal",
                                    color: "grey-lighten-4",
                                    class: "pa-4 mb-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                      createVNode(VList, {
                                        density: "compact",
                                        class: "bg-transparent"
                                      }, {
                                        default: withCtx(() => [
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
                                                  createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                  createTextVNode("mdi-account-heart")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                  createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            append: withCtx(() => [
                                              createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-3" }),
                                      createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                        createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                        createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCard, {
                                    variant: "outlined",
                                    class: "pa-4 mb-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center mb-4" }, [
                                        createVNode(VIcon, {
                                          color: "primary",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-lock")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                        createVNode(VSpacer),
                                        createVNode(VImg, {
                                          src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                          "max-width": "60"
                                        })
                                      ]),
                                      createVNode(VTextField, {
                                        modelValue: unref(payment).cardNumber,
                                        "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                        label: "Card Number",
                                        placeholder: "4242 4242 4242 4242",
                                        "prepend-inner-icon": "mdi-credit-card",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(payment).expiry,
                                                "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                                label: "Expiry",
                                                placeholder: "MM/YY"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "6" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(payment).cvc,
                                                "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                                label: "CVC",
                                                placeholder: "123"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCheckbox, {
                                    modelValue: unref(form).agreeTerms,
                                    "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                    label: "I agree to the Terms of Service and Privacy Policy",
                                    color: "primary",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex justify-space-between" }, [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      size: "large",
                                      onClick: ($event) => step.value = 3
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-arrow-left")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Back ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      size: "large",
                                      loading: unref(submitting),
                                      onClick: submitOrder
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-check")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Place Order ")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
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
            _push2(ssrRenderComponent(VDialog, {
              modelValue: unref(showSuccess),
              "onUpdate:modelValue": ($event) => isRef(showSuccess) ? showSuccess.value = $event : null,
              "max-width": "500",
              persistent: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { class: "pa-6 text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          icon: "mdi-check-circle",
                          color: "success",
                          size: "80",
                          class: "mb-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`<h2 class="text-h5 font-weight-bold mb-2" data-v-ff6eb4a4${_scopeId3}>Order Confirmed!</h2><p class="text-body-1 text-grey-darken-1 mb-4" data-v-ff6eb4a4${_scopeId3}> Thank you for your order. We&#39;ve sent a confirmation email to <strong data-v-ff6eb4a4${_scopeId3}>${ssrInterpolate(unref(form).customerEmail)}</strong>. </p>`);
                        _push4(ssrRenderComponent(VCard, {
                          variant: "tonal",
                          color: "primary",
                          class: "pa-4 mb-6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-overline" data-v-ff6eb4a4${_scopeId4}>Order Number</div><div class="text-h4 font-weight-bold" data-v-ff6eb4a4${_scopeId4}>${ssrInterpolate(unref(orderNumber))}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-overline" }, "Order Number"),
                                createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(orderNumber)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-body-2 text-grey mb-6" data-v-ff6eb4a4${_scopeId3}> You can track your order status anytime using the order number above. </p><div class="d-flex gap-3 justify-center" data-v-ff6eb4a4${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          variant: "outlined",
                          to: "/track"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Track Order `);
                            } else {
                              return [
                                createTextVNode(" Track Order ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          to: "/"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Back to Home `);
                            } else {
                              return [
                                createTextVNode(" Back to Home ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: "mdi-check-circle",
                            color: "success",
                            size: "80",
                            class: "mb-4"
                          }),
                          createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Order Confirmed!"),
                          createVNode("p", { class: "text-body-1 text-grey-darken-1 mb-4" }, [
                            createTextVNode(" Thank you for your order. We've sent a confirmation email to "),
                            createVNode("strong", null, toDisplayString(unref(form).customerEmail), 1),
                            createTextVNode(". ")
                          ]),
                          createVNode(VCard, {
                            variant: "tonal",
                            color: "primary",
                            class: "pa-4 mb-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-overline" }, "Order Number"),
                              createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(orderNumber)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "text-body-2 text-grey mb-6" }, " You can track your order status anytime using the order number above. "),
                          createVNode("div", { class: "d-flex gap-3 justify-center" }, [
                            createVNode(VBtn, {
                              variant: "outlined",
                              to: "/track"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Track Order ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              color: "primary",
                              to: "/"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back to Home ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                        createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Order Confirmed!"),
                        createVNode("p", { class: "text-body-1 text-grey-darken-1 mb-4" }, [
                          createTextVNode(" Thank you for your order. We've sent a confirmation email to "),
                          createVNode("strong", null, toDisplayString(unref(form).customerEmail), 1),
                          createTextVNode(". ")
                        ]),
                        createVNode(VCard, {
                          variant: "tonal",
                          color: "primary",
                          class: "pa-4 mb-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-overline" }, "Order Number"),
                            createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(orderNumber)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-body-2 text-grey mb-6" }, " You can track your order status anytime using the order number above. "),
                        createVNode("div", { class: "d-flex gap-3 justify-center" }, [
                          createVNode(VBtn, {
                            variant: "outlined",
                            to: "/track"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Track Order ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            to: "/"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back to Home ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "8",
                    lg: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "pa-6 pa-md-8",
                        elevation: "4",
                        rounded: "xl"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center mb-8" }, [
                            createVNode(VIcon, {
                              icon: "mdi-flower",
                              color: "primary",
                              size: "48",
                              class: "mb-4"
                            }),
                            createVNode("h1", { class: "text-h4 font-weight-bold mb-2" }, "Request a Service"),
                            createVNode("p", { class: "text-body-1 text-grey-darken-1" }, " Fill out the form below and we'll take care of your loved one's grave. ")
                          ]),
                          createVNode(VStepper, {
                            modelValue: unref(step),
                            "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
                            items: stepItems,
                            "alt-labels": "",
                            class: "elevation-0"
                          }, {
                            "item.1": withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Grave Information"),
                                createVNode(VTextField, {
                                  modelValue: unref(form).cemeteryName,
                                  "onUpdate:modelValue": ($event) => unref(form).cemeteryName = $event,
                                  label: "Cemetery Name *",
                                  placeholder: "e.g., Green Lawn Memorial Park",
                                  "prepend-inner-icon": "mdi-map-marker",
                                  rules: [rules.required],
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).cemeteryAddress,
                                  "onUpdate:modelValue": ($event) => unref(form).cemeteryAddress = $event,
                                  label: "Cemetery Address",
                                  placeholder: "City, State",
                                  "prepend-inner-icon": "mdi-map",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).deceasedName,
                                  "onUpdate:modelValue": ($event) => unref(form).deceasedName = $event,
                                  label: "Loved One's Name *",
                                  placeholder: "Name on headstone",
                                  "prepend-inner-icon": "mdi-account-heart",
                                  rules: [rules.required],
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).plotReference,
                                  "onUpdate:modelValue": ($event) => unref(form).plotReference = $event,
                                  label: "Plot/Section Reference",
                                  placeholder: "e.g., Section B, Row 12, Plot 5",
                                  "prepend-inner-icon": "mdi-grave-stone",
                                  hint: "Helps our team locate the grave faster",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-end" }, [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    onClick: ($event) => step.value = 2
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Continue "),
                                      createVNode(VIcon, { end: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-right")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            "item.2": withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Select Service"),
                                createVNode(VRadioGroup, {
                                  modelValue: unref(form).serviceType,
                                  "onUpdate:modelValue": ($event) => unref(form).serviceType = $event,
                                  class: "mb-6"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                                      return createVNode(VCard, {
                                        key: service.value,
                                        color: unref(form).serviceType === service.value ? "primary" : void 0,
                                        variant: unref(form).serviceType === service.value ? "tonal" : "outlined",
                                        class: "mb-3 pa-4",
                                        onClick: ($event) => unref(form).serviceType = service.value,
                                        style: { "cursor": "pointer" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex align-center" }, [
                                            createVNode(VRadio, {
                                              value: service.value,
                                              class: "mr-4"
                                            }, null, 8, ["value"]),
                                            createVNode(VIcon, {
                                              icon: service.icon,
                                              size: "32",
                                              class: "mr-4"
                                            }, null, 8, ["icon"]),
                                            createVNode("div", { class: "flex-grow-1" }, [
                                              createVNode("div", { class: "font-weight-bold" }, toDisplayString(service.title), 1),
                                              createVNode("div", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(service.description), 1)
                                            ]),
                                            createVNode("div", { class: "text-h6 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "variant", "onClick"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextarea, {
                                  modelValue: unref(form).specialInstructions,
                                  "onUpdate:modelValue": ($event) => unref(form).specialInstructions = $event,
                                  label: "Special Instructions",
                                  placeholder: "Any specific requests or details about the grave location...",
                                  "prepend-inner-icon": "mdi-text",
                                  rows: "3",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VFileInput, {
                                  modelValue: unref(form).photos,
                                  "onUpdate:modelValue": ($event) => unref(form).photos = $event,
                                  label: "Reference Photos (optional)",
                                  "prepend-inner-icon": "mdi-camera",
                                  accept: "image/*",
                                  multiple: "",
                                  chips: "",
                                  hint: "Upload any photos that might help locate or identify the grave",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    size: "large",
                                    onClick: ($event) => step.value = 1
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-left")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Back ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    onClick: ($event) => step.value = 3
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Continue "),
                                      createVNode(VIcon, { end: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-right")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            "item.3": withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Your Information"),
                                createVNode(VTextField, {
                                  modelValue: unref(form).customerName,
                                  "onUpdate:modelValue": ($event) => unref(form).customerName = $event,
                                  label: "Your Name *",
                                  "prepend-inner-icon": "mdi-account",
                                  rules: [rules.required],
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).customerEmail,
                                  "onUpdate:modelValue": ($event) => unref(form).customerEmail = $event,
                                  label: "Email Address *",
                                  type: "email",
                                  "prepend-inner-icon": "mdi-email",
                                  rules: [rules.required, rules.email],
                                  hint: "We'll send confirmation and photos here",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).customerPhone,
                                  "onUpdate:modelValue": ($event) => unref(form).customerPhone = $event,
                                  label: "Phone Number",
                                  type: "tel",
                                  "prepend-inner-icon": "mdi-phone",
                                  hint: "Optional - for SMS updates",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    size: "large",
                                    onClick: ($event) => step.value = 2
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-left")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Back ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    onClick: ($event) => step.value = 4
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Continue to Payment "),
                                      createVNode(VIcon, { end: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-right")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ]),
                            "item.4": withCtx(() => [
                              createVNode("div", { class: "pa-4" }, [
                                createVNode("h3", { class: "text-h6 font-weight-bold mb-4" }, "Review & Payment"),
                                createVNode(VCard, {
                                  variant: "tonal",
                                  color: "grey-lighten-4",
                                  class: "pa-4 mb-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "font-weight-bold mb-3" }, "Order Summary"),
                                    createVNode(VList, {
                                      density: "compact",
                                      class: "bg-transparent"
                                    }, {
                                      default: withCtx(() => [
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
                                                createTextVNode(toDisplayString(unref(form).cemeteryName || "Cemetery"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(form).cemeteryAddress), 1)
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
                                                createTextVNode("mdi-account-heart")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(form).deceasedName || "Loved one"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(form).plotReference), 1)
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
                                                createTextVNode(toDisplayString(unref(selectedService)?.icon), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          append: withCtx(() => [
                                            createVNode("span", { class: "font-weight-bold" }, toDisplayString(unref(selectedService)?.price), 1)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(selectedService)?.title), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-3" }),
                                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                                      createVNode("span", { class: "text-h6 font-weight-bold" }, "Total"),
                                      createVNode("span", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(unref(selectedService)?.price), 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCard, {
                                  variant: "outlined",
                                  class: "pa-4 mb-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                                      createVNode(VIcon, {
                                        color: "primary",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-lock")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", { class: "font-weight-medium" }, "Secure Payment"),
                                      createVNode(VSpacer),
                                      createVNode(VImg, {
                                        src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                                        "max-width": "60"
                                      })
                                    ]),
                                    createVNode(VTextField, {
                                      modelValue: unref(payment).cardNumber,
                                      "onUpdate:modelValue": ($event) => unref(payment).cardNumber = $event,
                                      label: "Card Number",
                                      placeholder: "4242 4242 4242 4242",
                                      "prepend-inner-icon": "mdi-credit-card",
                                      class: "mb-4"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(payment).expiry,
                                              "onUpdate:modelValue": ($event) => unref(payment).expiry = $event,
                                              label: "Expiry",
                                              placeholder: "MM/YY"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(payment).cvc,
                                              "onUpdate:modelValue": ($event) => unref(payment).cvc = $event,
                                              label: "CVC",
                                              placeholder: "123"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCheckbox, {
                                  modelValue: unref(form).agreeTerms,
                                  "onUpdate:modelValue": ($event) => unref(form).agreeTerms = $event,
                                  label: "I agree to the Terms of Service and Privacy Policy",
                                  color: "primary",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-space-between" }, [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    size: "large",
                                    onClick: ($event) => step.value = 3
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-arrow-left")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Back ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    size: "large",
                                    loading: unref(submitting),
                                    onClick: submitOrder
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-check")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Place Order ")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: unref(showSuccess),
                "onUpdate:modelValue": ($event) => isRef(showSuccess) ? showSuccess.value = $event : null,
                "max-width": "500",
                persistent: ""
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { class: "pa-6 text-center" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-check-circle",
                        color: "success",
                        size: "80",
                        class: "mb-4"
                      }),
                      createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Order Confirmed!"),
                      createVNode("p", { class: "text-body-1 text-grey-darken-1 mb-4" }, [
                        createTextVNode(" Thank you for your order. We've sent a confirmation email to "),
                        createVNode("strong", null, toDisplayString(unref(form).customerEmail), 1),
                        createTextVNode(". ")
                      ]),
                      createVNode(VCard, {
                        variant: "tonal",
                        color: "primary",
                        class: "pa-4 mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-overline" }, "Order Number"),
                          createVNode("div", { class: "text-h4 font-weight-bold" }, toDisplayString(unref(orderNumber)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-body-2 text-grey mb-6" }, " You can track your order status anytime using the order number above. "),
                      createVNode("div", { class: "d-flex gap-3 justify-center" }, [
                        createVNode(VBtn, {
                          variant: "outlined",
                          to: "/track"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Track Order ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          to: "/"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Back to Home ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/request.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const request = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff6eb4a4"]]);

export { request as default };
//# sourceMappingURL=request-nx-6mXQK.mjs.map
