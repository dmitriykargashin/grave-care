import { defineComponent, inject, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { i as VCard, I as VCardTitle, h as VIcon, q as VSpacer, f as VBtn, w as VDivider, T as VDataTable, s as VChip } from './server.mjs';
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
  __name: "contractors",
  __ssrInlineRender: true,
  setup(__props) {
    const showComingSoon = inject("showComingSoon");
    const headers = [
      { title: "Name", key: "name" },
      { title: "Email", key: "email" },
      { title: "Phone", key: "phone" },
      { title: "Region", key: "region" },
      { title: "Active Jobs", key: "activeJobs" },
      { title: "Completed", key: "completed" },
      { title: "Rating", key: "rating" },
      { title: "Status", key: "status" },
      { title: "Actions", key: "actions", sortable: false }
    ];
    const contractors = [
      { name: "Mike Thompson", email: "mike@example.com", phone: "555-0101", region: "Austin, TX", activeJobs: 3, completed: 127, rating: 4.9, status: "Active" },
      { name: "Sarah Wilson", email: "sarah@example.com", phone: "555-0102", region: "Dallas, TX", activeJobs: 2, completed: 89, rating: 4.8, status: "Active" },
      { name: "David Garcia", email: "david@example.com", phone: "555-0103", region: "Houston, TX", activeJobs: 1, completed: 156, rating: 4.7, status: "Active" },
      { name: "Emily Martinez", email: "emily@example.com", phone: "555-0104", region: "San Antonio, TX", activeJobs: 2, completed: 72, rating: 4.9, status: "Active" },
      { name: "James Brown", email: "james@example.com", phone: "555-0105", region: "Austin, TX", activeJobs: 0, completed: 45, rating: 4.5, status: "Inactive" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ elevation: "2" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-hard-hat`);
                      } else {
                        return [
                          createTextVNode("mdi-hard-hat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Contractors `);
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    "prepend-icon": "mdi-plus",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Invite Contractor `);
                      } else {
                        return [
                          createTextVNode(" Invite Contractor ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-hard-hat")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Contractors "),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      "prepend-icon": "mdi-plus",
                      onClick: unref(showComingSoon)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Invite Contractor ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: contractors,
              hover: ""
            }, {
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: item.status === "Active" ? "success" : "grey",
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: item.status === "Active" ? "success" : "grey",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.rating": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    color: "warning",
                    size: "small",
                    class: "mr-1"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-star`);
                      } else {
                        return [
                          createTextVNode("mdi-star")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(item.rating)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VIcon, {
                        color: "warning",
                        size: "small",
                        class: "mr-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-star")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(item.rating), 1)
                    ])
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-eye`);
                            } else {
                              return [
                                createTextVNode("mdi-eye")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-eye")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-pencil`);
                            } else {
                              return [
                                createTextVNode("mdi-pencil")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-pencil")
                            ]),
                            _: 1
                          })
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
                      onClick: unref(showComingSoon)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-eye")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      size: "small",
                      onClick: unref(showComingSoon)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { class: "mr-2" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-hard-hat")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Contractors "),
                  createVNode(VSpacer),
                  createVNode(VBtn, {
                    color: "primary",
                    "prepend-icon": "mdi-plus",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Invite Contractor ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VDataTable, {
                headers,
                items: contractors,
                hover: ""
              }, {
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: item.status === "Active" ? "success" : "grey",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.rating": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VIcon, {
                      color: "warning",
                      size: "small",
                      class: "mr-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-star")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(item.rating), 1)
                  ])
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-eye")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    onClick: unref(showComingSoon)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contractors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contractors-BjbVXpBV.mjs.map
