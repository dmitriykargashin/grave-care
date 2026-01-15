import { defineComponent, useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer, d as VRow, e as VCol, f as VBtn, g as VImg, h as VIcon, i as VCard, j as VAvatar, k as VExpansionPanels, l as VExpansionPanel, m as VExpansionPanelTitle, o as VExpansionPanelText } from './server.mjs';
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
    const services = [
      {
        title: "Grave Cleanup",
        description: "Remove debris, trim grass, and general tidying of the grave site.",
        price: "$49",
        icon: "mdi-broom",
        color: "green"
      },
      {
        title: "Flower Delivery",
        description: "Fresh seasonal flowers placed with care at the grave site.",
        price: "$35+",
        icon: "mdi-flower",
        color: "pink"
      },
      {
        title: "Headstone Care",
        description: "Professional cleaning and maintenance of headstones.",
        price: "$79",
        icon: "mdi-grave-stone",
        color: "grey"
      },
      {
        title: "Photo Report",
        description: "Receive photos of the grave site to see its current condition.",
        price: "$25",
        icon: "mdi-camera",
        color: "blue"
      }
    ];
    const steps = [
      {
        title: "Submit Request",
        description: "Tell us about the cemetery, grave location, and what services you need."
      },
      {
        title: "We Take Care",
        description: "Our verified contractors visit the site and perform the requested services."
      },
      {
        title: "Receive Photos",
        description: "Get before & after photos showing the completed work within 48 hours."
      }
    ];
    const testimonials = [
      {
        name: "Sarah M.",
        location: "California",
        text: "Living across the country from my parents' graves, this service has been a blessing. The photos they send bring me such peace."
      },
      {
        name: "James K.",
        location: "Texas",
        text: "Professional, respectful, and thorough. They treat my grandmother's grave with the same care I would."
      },
      {
        name: "Maria L.",
        location: "Florida",
        text: "The headstone cleaning service was amazing. It looks brand new. Highly recommend!"
      }
    ];
    const faqs = [
      {
        question: "How quickly can you complete a service?",
        answer: "Most services are completed within 48-72 hours of your request, weather permitting. Rush services are available for an additional fee."
      },
      {
        question: "Do you service all cemeteries?",
        answer: "We have contractors nationwide and can service most cemeteries. If we don't currently cover your area, we'll work to find a solution."
      },
      {
        question: "How do I know the work was done?",
        answer: "Every completed service includes before and after photos sent to your email. You can also track your order status in real-time."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay. Payment is processed securely through Stripe."
      },
      {
        question: "Can I schedule recurring services?",
        answer: "Yes! We offer monthly, quarterly, and annual care packages at discounted rates. Perfect for ongoing maintenance."
      }
    ];
    const scrollToServices = () => {
      (void 0).getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d50d3a22><section class="hero-section bg-primary py-16" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-h2 text-md-h1 font-weight-bold text-white mb-4" data-v-d50d3a22${_scopeId3}> Honor Their Memory </h1><p class="text-h6 text-white mb-8" style="${ssrRenderStyle({ "opacity": "0.9" })}" data-v-d50d3a22${_scopeId3}> Professional grave care services to keep your loved ones&#39; resting places beautiful, dignified, and well-maintained — even when you can&#39;t be there. </p><div class="d-flex flex-wrap gap-3" data-v-d50d3a22${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          size: "x-large",
                          color: "white",
                          variant: "flat",
                          to: "/request",
                          "prepend-icon": "mdi-flower"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Request Service `);
                            } else {
                              return [
                                createTextVNode(" Request Service ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          size: "x-large",
                          color: "white",
                          variant: "outlined",
                          onClick: scrollToServices
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Learn More `);
                            } else {
                              return [
                                createTextVNode(" Learn More ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("h1", { class: "text-h2 text-md-h1 font-weight-bold text-white mb-4" }, " Honor Their Memory "),
                          createVNode("p", {
                            class: "text-h6 text-white mb-8",
                            style: { "opacity": "0.9" }
                          }, " Professional grave care services to keep your loved ones' resting places beautiful, dignified, and well-maintained — even when you can't be there. "),
                          createVNode("div", { class: "d-flex flex-wrap gap-3" }, [
                            createVNode(VBtn, {
                              size: "x-large",
                              color: "white",
                              variant: "flat",
                              to: "/request",
                              "prepend-icon": "mdi-flower"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Request Service ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              size: "x-large",
                              color: "white",
                              variant: "outlined",
                              onClick: scrollToServices
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Learn More ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                          alt: "Cemetery care",
                          class: "rounded-xl elevation-10",
                          cover: "",
                          height: "400"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                            alt: "Cemetery care",
                            class: "rounded-xl elevation-10",
                            cover: "",
                            height: "400"
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
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-h2 text-md-h1 font-weight-bold text-white mb-4" }, " Honor Their Memory "),
                        createVNode("p", {
                          class: "text-h6 text-white mb-8",
                          style: { "opacity": "0.9" }
                        }, " Professional grave care services to keep your loved ones' resting places beautiful, dignified, and well-maintained — even when you can't be there. "),
                        createVNode("div", { class: "d-flex flex-wrap gap-3" }, [
                          createVNode(VBtn, {
                            size: "x-large",
                            color: "white",
                            variant: "flat",
                            to: "/request",
                            "prepend-icon": "mdi-flower"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Request Service ")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            size: "x-large",
                            color: "white",
                            variant: "outlined",
                            onClick: scrollToServices
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Learn More ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                          alt: "Cemetery care",
                          class: "rounded-xl elevation-10",
                          cover: "",
                          height: "400"
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
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "text-h2 text-md-h1 font-weight-bold text-white mb-4" }, " Honor Their Memory "),
                      createVNode("p", {
                        class: "text-h6 text-white mb-8",
                        style: { "opacity": "0.9" }
                      }, " Professional grave care services to keep your loved ones' resting places beautiful, dignified, and well-maintained — even when you can't be there. "),
                      createVNode("div", { class: "d-flex flex-wrap gap-3" }, [
                        createVNode(VBtn, {
                          size: "x-large",
                          color: "white",
                          variant: "flat",
                          to: "/request",
                          "prepend-icon": "mdi-flower"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Request Service ")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          size: "x-large",
                          color: "white",
                          variant: "outlined",
                          onClick: scrollToServices
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Learn More ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
                        alt: "Cemetery care",
                        class: "rounded-xl elevation-10",
                        cover: "",
                        height: "400"
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
      _push(`</section><section class="py-8 bg-grey-lighten-4" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-shield-check`);
                            } else {
                              return [
                                createTextVNode("mdi-shield-check")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2 font-weight-medium" data-v-d50d3a22${_scopeId3}>Fully Insured</div>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "40",
                            color: "primary",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-shield-check")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-body-2 font-weight-medium" }, "Fully Insured")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-star`);
                            } else {
                              return [
                                createTextVNode("mdi-star")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2 font-weight-medium" data-v-d50d3a22${_scopeId3}>5-Star Rated</div>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "40",
                            color: "primary",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-star")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-body-2 font-weight-medium" }, "5-Star Rated")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-map-marker-multiple`);
                            } else {
                              return [
                                createTextVNode("mdi-map-marker-multiple")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2 font-weight-medium" data-v-d50d3a22${_scopeId3}>Nationwide</div>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "40",
                            color: "primary",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-map-marker-multiple")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-body-2 font-weight-medium" }, "Nationwide")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-camera`);
                            } else {
                              return [
                                createTextVNode("mdi-camera")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-body-2 font-weight-medium" data-v-d50d3a22${_scopeId3}>Photo Reports</div>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            size: "40",
                            color: "primary",
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-camera")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "text-body-2 font-weight-medium" }, "Photo Reports")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "6",
                      sm: "3",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-shield-check")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-body-2 font-weight-medium" }, "Fully Insured")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "6",
                      sm: "3",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-star")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-body-2 font-weight-medium" }, "5-Star Rated")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "6",
                      sm: "3",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-map-marker-multiple")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-body-2 font-weight-medium" }, "Nationwide")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "6",
                      sm: "3",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          size: "40",
                          color: "primary",
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-camera")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "text-body-2 font-weight-medium" }, "Photo Reports")
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
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "40",
                        color: "primary",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-shield-check")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-body-2 font-weight-medium" }, "Fully Insured")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "40",
                        color: "primary",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-star")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-body-2 font-weight-medium" }, "5-Star Rated")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "40",
                        color: "primary",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-map-marker-multiple")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-body-2 font-weight-medium" }, "Nationwide")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "6",
                    sm: "3",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        size: "40",
                        color: "primary",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-camera")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "text-body-2 font-weight-medium" }, "Photo Reports")
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
      _push(`</section><section id="services" class="py-16" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12" data-v-d50d3a22${_scopeId}><h2 class="text-h3 font-weight-bold mb-4" data-v-d50d3a22${_scopeId}>Our Services</h2><p class="text-body-1 text-grey-darken-1 mx-auto" style="${ssrRenderStyle({ "max-width": "600px" })}" data-v-d50d3a22${_scopeId}> We offer comprehensive grave care services to ensure your loved ones&#39; final resting places are always treated with respect and care. </p></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(services, (service) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: service.title,
                      cols: "12",
                      sm: "6",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: "h-100 text-center pa-6",
                            elevation: "2",
                            rounded: "xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: service.color,
                                  size: "80",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: service.icon,
                                        size: "40",
                                        color: "white"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: service.icon,
                                          size: "40",
                                          color: "white"
                                        }, null, 8, ["icon"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<h3 class="text-h6 font-weight-bold mb-2" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(service.title)}</h3><p class="text-body-2 text-grey-darken-1 mb-4" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(service.description)}</p><div class="text-h5 font-weight-bold text-primary" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(service.price)}</div>`);
                              } else {
                                return [
                                  createVNode(VAvatar, {
                                    color: service.color,
                                    size: "80",
                                    class: "mb-4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: service.icon,
                                        size: "40",
                                        color: "white"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(service.title), 1),
                                  createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-4" }, toDisplayString(service.description), 1),
                                  createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              class: "h-100 text-center pa-6",
                              elevation: "2",
                              rounded: "xl"
                            }, {
                              default: withCtx(() => [
                                createVNode(VAvatar, {
                                  color: service.color,
                                  size: "80",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: service.icon,
                                      size: "40",
                                      color: "white"
                                    }, null, 8, ["icon"])
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(service.title), 1),
                                createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-4" }, toDisplayString(service.description), 1),
                                createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
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
                    (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                      return createVNode(VCol, {
                        key: service.title,
                        cols: "12",
                        sm: "6",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            class: "h-100 text-center pa-6",
                            elevation: "2",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createVNode(VAvatar, {
                                color: service.color,
                                size: "80",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: service.icon,
                                    size: "40",
                                    color: "white"
                                  }, null, 8, ["icon"])
                                ]),
                                _: 2
                              }, 1032, ["color"]),
                              createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(service.title), 1),
                              createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-4" }, toDisplayString(service.description), 1),
                              createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-center mt-10" data-v-d50d3a22${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              size: "large",
              color: "primary",
              to: "/request",
              "prepend-icon": "mdi-arrow-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Get Started `);
                } else {
                  return [
                    createTextVNode(" Get Started ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h2", { class: "text-h3 font-weight-bold mb-4" }, "Our Services"),
                createVNode("p", {
                  class: "text-body-1 text-grey-darken-1 mx-auto",
                  style: { "max-width": "600px" }
                }, " We offer comprehensive grave care services to ensure your loved ones' final resting places are always treated with respect and care. ")
              ]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                    return createVNode(VCol, {
                      key: service.title,
                      cols: "12",
                      sm: "6",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "h-100 text-center pa-6",
                          elevation: "2",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createVNode(VAvatar, {
                              color: service.color,
                              size: "80",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: service.icon,
                                  size: "40",
                                  color: "white"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(service.title), 1),
                            createVNode("p", { class: "text-body-2 text-grey-darken-1 mb-4" }, toDisplayString(service.description), 1),
                            createVNode("div", { class: "text-h5 font-weight-bold text-primary" }, toDisplayString(service.price), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "text-center mt-10" }, [
                createVNode(VBtn, {
                  size: "large",
                  color: "primary",
                  to: "/request",
                  "prepend-icon": "mdi-arrow-right"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Get Started ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-16 bg-grey-lighten-4" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12" data-v-d50d3a22${_scopeId}><h2 class="text-h3 font-weight-bold mb-4" data-v-d50d3a22${_scopeId}>How It Works</h2><p class="text-body-1 text-grey-darken-1" data-v-d50d3a22${_scopeId}>Simple steps to care for your loved ones</p></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(steps, (step, i) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: step.title,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-center" data-v-d50d3a22${_scopeId3}>`);
                          _push4(ssrRenderComponent(VAvatar, {
                            color: "primary",
                            size: "60",
                            class: "mb-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="text-h5 font-weight-bold text-white" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(i + 1)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-h5 font-weight-bold text-white" }, toDisplayString(i + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<h3 class="text-h6 font-weight-bold mb-2" data-v-d50d3a22${_scopeId3}>${ssrInterpolate(step.title)}</h3><p class="text-body-2 text-grey-darken-1" data-v-d50d3a22${_scopeId3}>${ssrInterpolate(step.description)}</p></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-center" }, [
                              createVNode(VAvatar, {
                                color: "primary",
                                size: "60",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-h5 font-weight-bold text-white" }, toDisplayString(i + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(step.title), 1),
                              createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(step.description), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(steps, (step, i) => {
                      return createVNode(VCol, {
                        key: step.title,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center" }, [
                            createVNode(VAvatar, {
                              color: "primary",
                              size: "60",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h5 font-weight-bold text-white" }, toDisplayString(i + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(step.title), 1),
                            createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(step.description), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h2", { class: "text-h3 font-weight-bold mb-4" }, "How It Works"),
                createVNode("p", { class: "text-body-1 text-grey-darken-1" }, "Simple steps to care for your loved ones")
              ]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(steps, (step, i) => {
                    return createVNode(VCol, {
                      key: step.title,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode(VAvatar, {
                            color: "primary",
                            size: "60",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h5 font-weight-bold text-white" }, toDisplayString(i + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("h3", { class: "text-h6 font-weight-bold mb-2" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-body-2 text-grey-darken-1" }, toDisplayString(step.description), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-16" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12" data-v-d50d3a22${_scopeId}><h2 class="text-h3 font-weight-bold mb-4" data-v-d50d3a22${_scopeId}>What Our Customers Say</h2></div>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(testimonials, (testimonial) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: testimonial.name,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: "h-100 pa-6",
                            elevation: "2",
                            rounded: "xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="d-flex mb-4" data-v-d50d3a22${_scopeId4}><!--[-->`);
                                ssrRenderList(5, (n) => {
                                  _push5(ssrRenderComponent(VIcon, {
                                    key: n,
                                    color: "warning",
                                    size: "20"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`mdi-star`);
                                      } else {
                                        return [
                                          createTextVNode("mdi-star")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div><p class="text-body-1 mb-4 font-italic" data-v-d50d3a22${_scopeId4}>&quot;${ssrInterpolate(testimonial.text)}&quot;</p><div class="d-flex align-center" data-v-d50d3a22${_scopeId4}>`);
                                _push5(ssrRenderComponent(VAvatar, {
                                  color: "grey-lighten-2",
                                  size: "48",
                                  class: "mr-3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-account`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-account")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div data-v-d50d3a22${_scopeId4}><div class="font-weight-bold" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(testimonial.name)}</div><div class="text-caption text-grey" data-v-d50d3a22${_scopeId4}>${ssrInterpolate(testimonial.location)}</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "d-flex mb-4" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                      return createVNode(VIcon, {
                                        key: n,
                                        color: "warning",
                                        size: "20"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-star")
                                        ]),
                                        _: 1
                                      });
                                    }), 64))
                                  ]),
                                  createVNode("p", { class: "text-body-1 mb-4 font-italic" }, '"' + toDisplayString(testimonial.text) + '"', 1),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(VAvatar, {
                                      color: "grey-lighten-2",
                                      size: "48",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-account")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "font-weight-bold" }, toDisplayString(testimonial.name), 1),
                                      createVNode("div", { class: "text-caption text-grey" }, toDisplayString(testimonial.location), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, {
                              class: "h-100 pa-6",
                              elevation: "2",
                              rounded: "xl"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex mb-4" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                    return createVNode(VIcon, {
                                      key: n,
                                      color: "warning",
                                      size: "20"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-star")
                                      ]),
                                      _: 1
                                    });
                                  }), 64))
                                ]),
                                createVNode("p", { class: "text-body-1 mb-4 font-italic" }, '"' + toDisplayString(testimonial.text) + '"', 1),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VAvatar, {
                                    color: "grey-lighten-2",
                                    size: "48",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "font-weight-bold" }, toDisplayString(testimonial.name), 1),
                                    createVNode("div", { class: "text-caption text-grey" }, toDisplayString(testimonial.location), 1)
                                  ])
                                ])
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
                    (openBlock(), createBlock(Fragment, null, renderList(testimonials, (testimonial) => {
                      return createVNode(VCol, {
                        key: testimonial.name,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            class: "h-100 pa-6",
                            elevation: "2",
                            rounded: "xl"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex mb-4" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                  return createVNode(VIcon, {
                                    key: n,
                                    color: "warning",
                                    size: "20"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-star")
                                    ]),
                                    _: 1
                                  });
                                }), 64))
                              ]),
                              createVNode("p", { class: "text-body-1 mb-4 font-italic" }, '"' + toDisplayString(testimonial.text) + '"', 1),
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(VAvatar, {
                                  color: "grey-lighten-2",
                                  size: "48",
                                  class: "mr-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-account")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-weight-bold" }, toDisplayString(testimonial.name), 1),
                                  createVNode("div", { class: "text-caption text-grey" }, toDisplayString(testimonial.location), 1)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h2", { class: "text-h3 font-weight-bold mb-4" }, "What Our Customers Say")
              ]),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(testimonials, (testimonial) => {
                    return createVNode(VCol, {
                      key: testimonial.name,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "h-100 pa-6",
                          elevation: "2",
                          rounded: "xl"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex mb-4" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                return createVNode(VIcon, {
                                  key: n,
                                  color: "warning",
                                  size: "20"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-star")
                                  ]),
                                  _: 1
                                });
                              }), 64))
                            ]),
                            createVNode("p", { class: "text-body-1 mb-4 font-italic" }, '"' + toDisplayString(testimonial.text) + '"', 1),
                            createVNode("div", { class: "d-flex align-center" }, [
                              createVNode(VAvatar, {
                                color: "grey-lighten-2",
                                size: "48",
                                class: "mr-3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-weight-bold" }, toDisplayString(testimonial.name), 1),
                                createVNode("div", { class: "text-caption text-grey" }, toDisplayString(testimonial.location), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-16 bg-grey-lighten-4" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center mb-12" data-v-d50d3a22${_scopeId}><h2 class="text-h3 font-weight-bold mb-4" data-v-d50d3a22${_scopeId}>Frequently Asked Questions</h2></div>`);
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VExpansionPanels, { variant: "accordion" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(faqs, (faq) => {
                                _push5(ssrRenderComponent(VExpansionPanel, {
                                  key: faq.question
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(faq.question)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(faq.question), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(faq.answer)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(faq.answer), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(faq.question), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(faq.answer), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                                  return createVNode(VExpansionPanel, {
                                    key: faq.question
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(faq.question), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(faq.answer), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VExpansionPanels, { variant: "accordion" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                                return createVNode(VExpansionPanel, {
                                  key: faq.question
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(faq.question), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(faq.answer), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanels, { variant: "accordion" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                              return createVNode(VExpansionPanel, {
                                key: faq.question
                              }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(faq.question), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(faq.answer), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
              createVNode("div", { class: "text-center mb-12" }, [
                createVNode("h2", { class: "text-h3 font-weight-bold mb-4" }, "Frequently Asked Questions")
              ]),
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VExpansionPanels, { variant: "accordion" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                            return createVNode(VExpansionPanel, {
                              key: faq.question
                            }, {
                              default: withCtx(() => [
                                createVNode(VExpansionPanelTitle, { class: "font-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(faq.question), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VExpansionPanelText, { class: "text-grey-darken-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(faq.answer), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
      _push(`</section><section class="py-16 bg-primary" data-v-d50d3a22>`);
      _push(ssrRenderComponent(VContainer, { class: "text-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h3 font-weight-bold text-white mb-4" data-v-d50d3a22${_scopeId}> Ready to Get Started? </h2><p class="text-h6 text-white mb-8" style="${ssrRenderStyle({ "opacity": "0.9" })}" data-v-d50d3a22${_scopeId}> Request a service today and receive photos within 48 hours of completion. </p>`);
            _push2(ssrRenderComponent(VBtn, {
              size: "x-large",
              color: "white",
              variant: "flat",
              to: "/request",
              "prepend-icon": "mdi-flower"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Request Service Now `);
                } else {
                  return [
                    createTextVNode(" Request Service Now ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "text-h3 font-weight-bold text-white mb-4" }, " Ready to Get Started? "),
              createVNode("p", {
                class: "text-h6 text-white mb-8",
                style: { "opacity": "0.9" }
              }, " Request a service today and receive photos within 48 hours of completion. "),
              createVNode(VBtn, {
                size: "x-large",
                color: "white",
                variant: "flat",
                to: "/request",
                "prepend-icon": "mdi-flower"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Request Service Now ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d50d3a22"]]);

export { index as default };
//# sourceMappingURL=index-DwyBWL4L.mjs.map
