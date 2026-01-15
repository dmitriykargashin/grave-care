import { defineComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { i as VCard, I as VCardTitle, h as VIcon, w as VDivider, T as VDataTable, j as VAvatar } from './server.mjs';
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
  __name: "history",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      { title: "Date", key: "date" },
      { title: "Order #", key: "orderNumber" },
      { title: "Deceased", key: "deceasedName" },
      { title: "Service", key: "service" },
      { title: "Cemetery", key: "cemetery" },
      { title: "Payout", key: "payout" },
      { title: "Rating", key: "rating" }
    ];
    const history = [
      { date: "Jan 14, 2026", orderNumber: "GC-004", deceasedName: "Elizabeth Brown", service: "Photo Report", cemetery: "Memorial Gardens", payout: "$18", rating: 5 },
      { date: "Jan 13, 2026", orderNumber: "GC-007", deceasedName: "Michael Moore", service: "Headstone Care", cemetery: "Oak Hill Cemetery", payout: "$55", rating: 5 },
      { date: "Jan 12, 2026", orderNumber: "GC-010", deceasedName: "Susan Anderson", service: "Grave Cleanup", cemetery: "Green Lawn Memorial", payout: "$35", rating: 4.5 },
      { date: "Jan 11, 2026", orderNumber: "GC-015", deceasedName: "William Thomas", service: "Flower Delivery", cemetery: "Peaceful Rest", payout: "$25", rating: 5 },
      { date: "Jan 10, 2026", orderNumber: "GC-018", deceasedName: "Dorothy Jackson", service: "Grave Cleanup", cemetery: "Sunset Cemetery", payout: "$35", rating: 4.8 },
      { date: "Jan 9, 2026", orderNumber: "GC-022", deceasedName: "Richard White", service: "Headstone Care", cemetery: "Memorial Gardens", payout: "$55", rating: 5 },
      { date: "Jan 8, 2026", orderNumber: "GC-025", deceasedName: "Margaret Harris", service: "Photo Report", cemetery: "Oak Hill Cemetery", payout: "$18", rating: 4.7 },
      { date: "Jan 7, 2026", orderNumber: "GC-028", deceasedName: "Charles Martin", service: "Flower Delivery", cemetery: "Green Lawn Memorial", payout: "$25", rating: 5 }
    ];
    const getServiceColor = (service) => {
      switch (service) {
        case "Grave Cleanup":
          return "green";
        case "Flower Delivery":
          return "pink";
        case "Headstone Care":
          return "grey";
        case "Photo Report":
          return "blue";
        default:
          return "primary";
      }
    };
    const getServiceIcon = (service) => {
      switch (service) {
        case "Grave Cleanup":
          return "mdi-broom";
        case "Flower Delivery":
          return "mdi-flower";
        case "Headstone Care":
          return "mdi-grave-stone";
        case "Photo Report":
          return "mdi-camera";
        default:
          return "mdi-clipboard";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, { elevation: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-history`);
                      } else {
                        return [
                          createTextVNode("mdi-history")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Job History `);
                } else {
                  return [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-history")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Job History ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: history,
              hover: ""
            }, {
              "item.service": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VAvatar, {
                    color: getServiceColor(item.service),
                    size: "32",
                    class: "mr-2"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          color: "white",
                          size: "16"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(getServiceIcon(item.service))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(getServiceIcon(item.service)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, {
                            color: "white",
                            size: "16"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getServiceIcon(item.service)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(item.service)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VAvatar, {
                        color: getServiceColor(item.service),
                        size: "32",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            color: "white",
                            size: "16"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getServiceIcon(item.service)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createTextVNode(" " + toDisplayString(item.service), 1)
                    ])
                  ];
                }
              }),
              "item.payout": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-weight-bold text-success"${_scopeId2}>${ssrInterpolate(item.payout)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-weight-bold text-success" }, toDisplayString(item.payout), 1)
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
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx(() => [
                  createVNode(VIcon, { class: "mr-2" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-history")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Job History ")
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VDataTable, {
                headers,
                items: history,
                hover: ""
              }, {
                "item.service": withCtx(({ item }) => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VAvatar, {
                      color: getServiceColor(item.service),
                      size: "32",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          color: "white",
                          size: "16"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getServiceIcon(item.service)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["color"]),
                    createTextVNode(" " + toDisplayString(item.service), 1)
                  ])
                ]),
                "item.payout": withCtx(({ item }) => [
                  createVNode("span", { class: "font-weight-bold text-success" }, toDisplayString(item.payout), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contractor/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=history-CwO2dn-V.mjs.map
