import { defineComponent, inject, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as VRow, e as VCol, i as VCard, I as VCardTitle, h as VIcon, w as VDivider, J as VCardText, j as VAvatar, p as VTextField, R as VSelect, $ as VSwitch, f as VBtn } from './server.mjs';
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
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const showSnackbar = inject("showSnackbar");
    const profile = ref({
      name: "Mike Thompson",
      email: "mike@example.com",
      phone: "555-0101",
      address: "123 Main St, Austin, TX 78701",
      serviceArea: "Austin, TX",
      emailNotifications: true,
      smsNotifications: true
    });
    const saveProfile = () => {
      showSnackbar?.("Profile saved successfully!", "success");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({ justify: "center" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              md: "8",
              lg: "6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, { elevation: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-account`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` My Profile `);
                            } else {
                              return [
                                createVNode(VIcon, { class: "mr-2" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" My Profile ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-center mb-6"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAvatar, {
                                size: "100",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      size: "50",
                                      color: "white"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-account`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-account")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VIcon, {
                                        size: "50",
                                        color: "white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="mt-3"${_scopeId4}><h3 class="text-h5 font-weight-bold"${_scopeId4}>Mike Thompson</h3><p class="text-body-2 text-grey"${_scopeId4}>Contractor since Jan 2024</p></div></div>`);
                              _push5(ssrRenderComponent(VRow, { class: "mb-6 text-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-h5 font-weight-bold text-primary"${_scopeId6}>127</div><div class="text-caption text-grey"${_scopeId6}>Jobs Completed</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                            createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-h5 font-weight-bold text-warning"${_scopeId6}>4.9</div><div class="text-caption text-grey"${_scopeId6}>Rating</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                            createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "4" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-h5 font-weight-bold text-success"${_scopeId6}>$4,850</div><div class="text-caption text-grey"${_scopeId6}>Total Earnings</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                            createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                          createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                          createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                          createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(profile).name,
                                "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                label: "Full Name",
                                "prepend-inner-icon": "mdi-account",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(profile).email,
                                "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                label: "Email",
                                type: "email",
                                "prepend-inner-icon": "mdi-email",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(profile).phone,
                                "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                                label: "Phone",
                                type: "tel",
                                "prepend-inner-icon": "mdi-phone",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(profile).address,
                                "onUpdate:modelValue": ($event) => unref(profile).address = $event,
                                label: "Address",
                                "prepend-inner-icon": "mdi-map-marker",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(profile).serviceArea,
                                "onUpdate:modelValue": ($event) => unref(profile).serviceArea = $event,
                                items: ["Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX"],
                                label: "Service Area",
                                "prepend-inner-icon": "mdi-map",
                                class: "mb-4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VDivider, { class: "mb-6" }, null, _parent5, _scopeId4));
                              _push5(`<h4 class="font-weight-bold mb-4"${_scopeId4}>Notification Preferences</h4>`);
                              _push5(ssrRenderComponent(VSwitch, {
                                modelValue: unref(profile).emailNotifications,
                                "onUpdate:modelValue": ($event) => unref(profile).emailNotifications = $event,
                                label: "Email notifications for new jobs",
                                color: "primary",
                                "hide-details": "",
                                class: "mb-2"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSwitch, {
                                modelValue: unref(profile).smsNotifications,
                                "onUpdate:modelValue": ($event) => unref(profile).smsNotifications = $event,
                                label: "SMS notifications for new jobs",
                                color: "primary",
                                "hide-details": "",
                                class: "mb-6"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                block: "",
                                size: "large",
                                onClick: saveProfile
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Save Changes `);
                                  } else {
                                    return [
                                      createTextVNode(" Save Changes ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-center mb-6" }, [
                                  createVNode(VAvatar, {
                                    size: "100",
                                    color: "primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        size: "50",
                                        color: "white"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "mt-3" }, [
                                    createVNode("h3", { class: "text-h5 font-weight-bold" }, "Mike Thompson"),
                                    createVNode("p", { class: "text-body-2 text-grey" }, "Contractor since Jan 2024")
                                  ])
                                ]),
                                createVNode(VRow, { class: "mb-6 text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "4" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                        createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "4" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                        createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "4" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                        createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "mb-6" }),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).name,
                                  "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                  label: "Full Name",
                                  "prepend-inner-icon": "mdi-account",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).email,
                                  "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                  label: "Email",
                                  type: "email",
                                  "prepend-inner-icon": "mdi-email",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).phone,
                                  "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                                  label: "Phone",
                                  type: "tel",
                                  "prepend-inner-icon": "mdi-phone",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VTextField, {
                                  modelValue: unref(profile).address,
                                  "onUpdate:modelValue": ($event) => unref(profile).address = $event,
                                  label: "Address",
                                  "prepend-inner-icon": "mdi-map-marker",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VSelect, {
                                  modelValue: unref(profile).serviceArea,
                                  "onUpdate:modelValue": ($event) => unref(profile).serviceArea = $event,
                                  items: ["Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX"],
                                  label: "Service Area",
                                  "prepend-inner-icon": "mdi-map",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VDivider, { class: "mb-6" }),
                                createVNode("h4", { class: "font-weight-bold mb-4" }, "Notification Preferences"),
                                createVNode(VSwitch, {
                                  modelValue: unref(profile).emailNotifications,
                                  "onUpdate:modelValue": ($event) => unref(profile).emailNotifications = $event,
                                  label: "Email notifications for new jobs",
                                  color: "primary",
                                  "hide-details": "",
                                  class: "mb-2"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VSwitch, {
                                  modelValue: unref(profile).smsNotifications,
                                  "onUpdate:modelValue": ($event) => unref(profile).smsNotifications = $event,
                                  label: "SMS notifications for new jobs",
                                  color: "primary",
                                  "hide-details": "",
                                  class: "mb-6"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  color: "primary",
                                  block: "",
                                  size: "large",
                                  onClick: saveProfile
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save Changes ")
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
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" My Profile ")
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center mb-6" }, [
                                createVNode(VAvatar, {
                                  size: "100",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      size: "50",
                                      color: "white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "mt-3" }, [
                                  createVNode("h3", { class: "text-h5 font-weight-bold" }, "Mike Thompson"),
                                  createVNode("p", { class: "text-body-2 text-grey" }, "Contractor since Jan 2024")
                                ])
                              ]),
                              createVNode(VRow, { class: "mb-6 text-center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                      createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                      createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                      createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VDivider, { class: "mb-6" }),
                              createVNode(VTextField, {
                                modelValue: unref(profile).name,
                                "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                                label: "Full Name",
                                "prepend-inner-icon": "mdi-account",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: unref(profile).email,
                                "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                                label: "Email",
                                type: "email",
                                "prepend-inner-icon": "mdi-email",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: unref(profile).phone,
                                "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                                label: "Phone",
                                type: "tel",
                                "prepend-inner-icon": "mdi-phone",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VTextField, {
                                modelValue: unref(profile).address,
                                "onUpdate:modelValue": ($event) => unref(profile).address = $event,
                                label: "Address",
                                "prepend-inner-icon": "mdi-map-marker",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VSelect, {
                                modelValue: unref(profile).serviceArea,
                                "onUpdate:modelValue": ($event) => unref(profile).serviceArea = $event,
                                items: ["Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX"],
                                label: "Service Area",
                                "prepend-inner-icon": "mdi-map",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VDivider, { class: "mb-6" }),
                              createVNode("h4", { class: "font-weight-bold mb-4" }, "Notification Preferences"),
                              createVNode(VSwitch, {
                                modelValue: unref(profile).emailNotifications,
                                "onUpdate:modelValue": ($event) => unref(profile).emailNotifications = $event,
                                label: "Email notifications for new jobs",
                                color: "primary",
                                "hide-details": "",
                                class: "mb-2"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VSwitch, {
                                modelValue: unref(profile).smsNotifications,
                                "onUpdate:modelValue": ($event) => unref(profile).smsNotifications = $event,
                                label: "SMS notifications for new jobs",
                                color: "primary",
                                "hide-details": "",
                                class: "mb-6"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                color: "primary",
                                block: "",
                                size: "large",
                                onClick: saveProfile
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Save Changes ")
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
                    createVNode(VCard, { elevation: "2" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, { class: "mr-2" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" My Profile ")
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center mb-6" }, [
                              createVNode(VAvatar, {
                                size: "100",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    size: "50",
                                    color: "white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "mt-3" }, [
                                createVNode("h3", { class: "text-h5 font-weight-bold" }, "Mike Thompson"),
                                createVNode("p", { class: "text-body-2 text-grey" }, "Contractor since Jan 2024")
                              ])
                            ]),
                            createVNode(VRow, { class: "mb-6 text-center" }, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                    createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                    createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                    createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "mb-6" }),
                            createVNode(VTextField, {
                              modelValue: unref(profile).name,
                              "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                              label: "Full Name",
                              "prepend-inner-icon": "mdi-account",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: unref(profile).email,
                              "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                              label: "Email",
                              type: "email",
                              "prepend-inner-icon": "mdi-email",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: unref(profile).phone,
                              "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                              label: "Phone",
                              type: "tel",
                              "prepend-inner-icon": "mdi-phone",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextField, {
                              modelValue: unref(profile).address,
                              "onUpdate:modelValue": ($event) => unref(profile).address = $event,
                              label: "Address",
                              "prepend-inner-icon": "mdi-map-marker",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VSelect, {
                              modelValue: unref(profile).serviceArea,
                              "onUpdate:modelValue": ($event) => unref(profile).serviceArea = $event,
                              items: ["Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX"],
                              label: "Service Area",
                              "prepend-inner-icon": "mdi-map",
                              class: "mb-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VDivider, { class: "mb-6" }),
                            createVNode("h4", { class: "font-weight-bold mb-4" }, "Notification Preferences"),
                            createVNode(VSwitch, {
                              modelValue: unref(profile).emailNotifications,
                              "onUpdate:modelValue": ($event) => unref(profile).emailNotifications = $event,
                              label: "Email notifications for new jobs",
                              color: "primary",
                              "hide-details": "",
                              class: "mb-2"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VSwitch, {
                              modelValue: unref(profile).smsNotifications,
                              "onUpdate:modelValue": ($event) => unref(profile).smsNotifications = $event,
                              label: "SMS notifications for new jobs",
                              color: "primary",
                              "hide-details": "",
                              class: "mb-6"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VBtn, {
                              color: "primary",
                              block: "",
                              size: "large",
                              onClick: saveProfile
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save Changes ")
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
              createVNode(VCol, {
                cols: "12",
                md: "8",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, { elevation: "2" }, {
                    default: withCtx(() => [
                      createVNode(VCardTitle, null, {
                        default: withCtx(() => [
                          createVNode(VIcon, { class: "mr-2" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Profile ")
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center mb-6" }, [
                            createVNode(VAvatar, {
                              size: "100",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  size: "50",
                                  color: "white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "mt-3" }, [
                              createVNode("h3", { class: "text-h5 font-weight-bold" }, "Mike Thompson"),
                              createVNode("p", { class: "text-body-2 text-grey" }, "Contractor since Jan 2024")
                            ])
                          ]),
                          createVNode(VRow, { class: "mb-6 text-center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, "127"),
                                  createVNode("div", { class: "text-caption text-grey" }, "Jobs Completed")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5 font-weight-bold text-warning" }, "4.9"),
                                  createVNode("div", { class: "text-caption text-grey" }, "Rating")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5 font-weight-bold text-success" }, "$4,850"),
                                  createVNode("div", { class: "text-caption text-grey" }, "Total Earnings")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "mb-6" }),
                          createVNode(VTextField, {
                            modelValue: unref(profile).name,
                            "onUpdate:modelValue": ($event) => unref(profile).name = $event,
                            label: "Full Name",
                            "prepend-inner-icon": "mdi-account",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: unref(profile).email,
                            "onUpdate:modelValue": ($event) => unref(profile).email = $event,
                            label: "Email",
                            type: "email",
                            "prepend-inner-icon": "mdi-email",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: unref(profile).phone,
                            "onUpdate:modelValue": ($event) => unref(profile).phone = $event,
                            label: "Phone",
                            type: "tel",
                            "prepend-inner-icon": "mdi-phone",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextField, {
                            modelValue: unref(profile).address,
                            "onUpdate:modelValue": ($event) => unref(profile).address = $event,
                            label: "Address",
                            "prepend-inner-icon": "mdi-map-marker",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            modelValue: unref(profile).serviceArea,
                            "onUpdate:modelValue": ($event) => unref(profile).serviceArea = $event,
                            items: ["Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX"],
                            label: "Service Area",
                            "prepend-inner-icon": "mdi-map",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VDivider, { class: "mb-6" }),
                          createVNode("h4", { class: "font-weight-bold mb-4" }, "Notification Preferences"),
                          createVNode(VSwitch, {
                            modelValue: unref(profile).emailNotifications,
                            "onUpdate:modelValue": ($event) => unref(profile).emailNotifications = $event,
                            label: "Email notifications for new jobs",
                            color: "primary",
                            "hide-details": "",
                            class: "mb-2"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VSwitch, {
                            modelValue: unref(profile).smsNotifications,
                            "onUpdate:modelValue": ($event) => unref(profile).smsNotifications = $event,
                            label: "SMS notifications for new jobs",
                            color: "primary",
                            "hide-details": "",
                            class: "mb-6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VBtn, {
                            color: "primary",
                            block: "",
                            size: "large",
                            onClick: saveProfile
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save Changes ")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contractor/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-DfFRNRb1.mjs.map
