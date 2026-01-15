import { defineComponent, inject, ref, computed, withCtx, unref, isRef, createVNode, createTextVNode, createBlock, openBlock, Fragment, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { i as VCard, d as VRow, e as VCol, p as VTextField, R as VSelect, f as VBtn, T as VDataTable, h as VIcon, j as VAvatar, s as VChip, H as VDialog, I as VCardTitle, J as VCardText, y as VListItem, L as VCardActions, q as VSpacer } from './server.mjs';
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
    const showComingSoon = inject("showComingSoon");
    const showSnackbar = inject("showSnackbar");
    const search = ref("");
    const statusFilter = ref(null);
    const serviceFilter = ref(null);
    const assignDialog = ref(false);
    const selectedContractor = ref(null);
    const selectedRequest = ref(null);
    const statusOptions = ["Pending", "Assigned", "In Progress", "Completed", "Cancelled"];
    const serviceOptions = ["Grave Cleanup", "Flower Delivery", "Headstone Care", "Photo Report"];
    const headers = [
      { title: "Order #", key: "orderNumber", width: "120px" },
      { title: "Customer", key: "customerName" },
      { title: "Deceased", key: "deceasedName" },
      { title: "Service", key: "service" },
      { title: "Cemetery", key: "cemetery" },
      { title: "Status", key: "status", width: "120px" },
      { title: "Contractor", key: "contractor", width: "150px" },
      { title: "Date", key: "date", width: "100px" },
      { title: "Actions", key: "actions", width: "100px", sortable: false }
    ];
    const requests = ref([
      { id: "1", orderNumber: "GC-001", customerName: "Alice Johnson", deceasedName: "John Smith", service: "Grave Cleanup", cemetery: "Green Lawn Memorial", status: "Pending", contractor: null, date: "Jan 15" },
      { id: "2", orderNumber: "GC-002", customerName: "Bob Williams", deceasedName: "Mary Johnson", service: "Flower Delivery", cemetery: "Oak Hill Cemetery", status: "Assigned", contractor: "Mike Thompson", date: "Jan 15" },
      { id: "3", orderNumber: "GC-003", customerName: "Carol Davis", deceasedName: "Robert Williams", service: "Headstone Care", cemetery: "Peaceful Rest", status: "In Progress", contractor: "Sarah Wilson", date: "Jan 14" },
      { id: "4", orderNumber: "GC-004", customerName: "Dan Brown", deceasedName: "Elizabeth Brown", service: "Photo Report", cemetery: "Memorial Gardens", status: "Completed", contractor: "David Garcia", date: "Jan 14" },
      { id: "5", orderNumber: "GC-005", customerName: "Eve Miller", deceasedName: "James Davis", service: "Grave Cleanup", cemetery: "Sunset Cemetery", status: "Pending", contractor: null, date: "Jan 14" },
      { id: "6", orderNumber: "GC-006", customerName: "Frank Garcia", deceasedName: "Patricia Wilson", service: "Flower Delivery", cemetery: "Green Lawn Memorial", status: "Assigned", contractor: "Emily Martinez", date: "Jan 13" },
      { id: "7", orderNumber: "GC-007", customerName: "Grace Lee", deceasedName: "Michael Moore", service: "Headstone Care", cemetery: "Oak Hill Cemetery", status: "Completed", contractor: "Mike Thompson", date: "Jan 13" },
      { id: "8", orderNumber: "GC-008", customerName: "Henry Chen", deceasedName: "Linda Taylor", service: "Grave Cleanup", cemetery: "Peaceful Rest", status: "Pending", contractor: null, date: "Jan 12" }
    ]);
    const contractors = [
      { id: "1", name: "Mike Thompson", activeJobs: 3, online: true },
      { id: "2", name: "Sarah Wilson", activeJobs: 2, online: true },
      { id: "3", name: "David Garcia", activeJobs: 1, online: false },
      { id: "4", name: "Emily Martinez", activeJobs: 2, online: true }
    ];
    const filteredRequests = computed(() => {
      return requests.value.filter((r) => {
        if (statusFilter.value && r.status !== statusFilter.value) return false;
        if (serviceFilter.value && r.service !== serviceFilter.value) return false;
        return true;
      });
    });
    const getStatusColor = (status) => {
      switch (status) {
        case "Pending":
          return "warning";
        case "Assigned":
          return "info";
        case "In Progress":
          return "primary";
        case "Completed":
          return "success";
        case "Cancelled":
          return "error";
        default:
          return "grey";
      }
    };
    const assignContractor = (request) => {
      selectedRequest.value = request;
      assignDialog.value = true;
    };
    const confirmAssign = () => {
      if (selectedRequest.value && selectedContractor.value) {
        const contractor = contractors.find((c) => c.id === selectedContractor.value);
        selectedRequest.value.contractor = contractor?.name;
        selectedRequest.value.status = "Assigned";
        showSnackbar?.(`Assigned to ${contractor?.name}`, "success");
      }
      assignDialog.value = false;
      selectedContractor.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VCard, {
        class: "mb-4 pa-4",
        elevation: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          "prepend-inner-icon": "mdi-magnify",
                          label: "Search requests...",
                          "hide-details": "",
                          density: "compact"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextField, {
                            modelValue: unref(search),
                            "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                            "prepend-inner-icon": "mdi-magnify",
                            label: "Search requests...",
                            "hide-details": "",
                            density: "compact"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(statusFilter),
                          "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                          items: statusOptions,
                          label: "Status",
                          "hide-details": "",
                          density: "compact",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(statusFilter),
                            "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                            items: statusOptions,
                            label: "Status",
                            "hide-details": "",
                            density: "compact",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "6",
                    md: "2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(serviceFilter),
                          "onUpdate:modelValue": ($event) => isRef(serviceFilter) ? serviceFilter.value = $event : null,
                          items: serviceOptions,
                          label: "Service",
                          "hide-details": "",
                          density: "compact",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            modelValue: unref(serviceFilter),
                            "onUpdate:modelValue": ($event) => isRef(serviceFilter) ? serviceFilter.value = $event : null,
                            items: serviceOptions,
                            label: "Service",
                            "hide-details": "",
                            density: "compact",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4",
                    class: "text-right"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          "prepend-icon": "mdi-plus",
                          onClick: unref(showComingSoon)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Request `);
                            } else {
                              return [
                                createTextVNode(" New Request ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "primary",
                            "prepend-icon": "mdi-plus",
                            onClick: unref(showComingSoon)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Request ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          modelValue: unref(search),
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                          "prepend-inner-icon": "mdi-magnify",
                          label: "Search requests...",
                          "hide-details": "",
                          density: "compact"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(statusFilter),
                          "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                          items: statusOptions,
                          label: "Status",
                          "hide-details": "",
                          density: "compact",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "6",
                      md: "2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          modelValue: unref(serviceFilter),
                          "onUpdate:modelValue": ($event) => isRef(serviceFilter) ? serviceFilter.value = $event : null,
                          items: serviceOptions,
                          label: "Service",
                          "hide-details": "",
                          density: "compact",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "4",
                      class: "text-right"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "primary",
                          "prepend-icon": "mdi-plus",
                          onClick: unref(showComingSoon)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" New Request ")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Search requests...",
                        "hide-details": "",
                        density: "compact"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "6",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(statusFilter),
                        "onUpdate:modelValue": ($event) => isRef(statusFilter) ? statusFilter.value = $event : null,
                        items: statusOptions,
                        label: "Status",
                        "hide-details": "",
                        density: "compact",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "6",
                    md: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        modelValue: unref(serviceFilter),
                        "onUpdate:modelValue": ($event) => isRef(serviceFilter) ? serviceFilter.value = $event : null,
                        items: serviceOptions,
                        label: "Service",
                        "hide-details": "",
                        density: "compact",
                        clearable: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "4",
                    class: "text-right"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        "prepend-icon": "mdi-plus",
                        onClick: unref(showComingSoon)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" New Request ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(VCard, { elevation: "2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              items: unref(filteredRequests),
              search: unref(search),
              hover: ""
            }, {
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: getStatusColor(item.status),
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
                      color: getStatusColor(item.status),
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
              "item.contractor": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.contractor) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(VAvatar, {
                      size: "24",
                      color: "grey-lighten-2",
                      class: "mr-2"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { size: "16" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-account`);
                              } else {
                                return [
                                  createTextVNode("mdi-account")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { size: "16" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(item.contractor)}<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(VBtn, {
                      size: "small",
                      variant: "tonal",
                      color: "primary",
                      onClick: ($event) => assignContractor(item)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Assign `);
                        } else {
                          return [
                            createTextVNode(" Assign ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    item.contractor ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(VAvatar, {
                        size: "24",
                        color: "grey-lighten-2",
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { size: "16" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createTextVNode(" " + toDisplayString(item.contractor), 1)
                    ], 64)) : (openBlock(), createBlock(VBtn, {
                      key: 1,
                      size: "small",
                      variant: "tonal",
                      color: "primary",
                      onClick: ($event) => assignContractor(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Assign ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]))
                  ];
                }
              }),
              "item.actions": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    to: `/admin/requests/${item.id}`
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
                      to: `/admin/requests/${item.id}`
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
                    }, 8, ["to"]),
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
              createVNode(VDataTable, {
                headers,
                items: unref(filteredRequests),
                search: unref(search),
                hover: ""
              }, {
                "item.status": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: getStatusColor(item.status),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.contractor": withCtx(({ item }) => [
                  item.contractor ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(VAvatar, {
                      size: "24",
                      color: "grey-lighten-2",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { size: "16" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createTextVNode(" " + toDisplayString(item.contractor), 1)
                  ], 64)) : (openBlock(), createBlock(VBtn, {
                    key: 1,
                    size: "small",
                    variant: "tonal",
                    color: "primary",
                    onClick: ($event) => assignContractor(item)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Assign ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]))
                ]),
                "item.actions": withCtx(({ item }) => [
                  createVNode(VBtn, {
                    icon: "",
                    variant: "text",
                    size: "small",
                    to: `/admin/requests/${item.id}`
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
                  }, 8, ["to"]),
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
              }, 8, ["items", "search"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(assignDialog),
        "onUpdate:modelValue": ($event) => isRef(assignDialog) ? assignDialog.value = $event : null,
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Assign Contractor`);
                      } else {
                        return [
                          createTextVNode("Assign Contractor")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="mb-4"${_scopeId3}>Select a contractor for this job:</p>`);
                        _push4(ssrRenderComponent(VSelect, {
                          modelValue: unref(selectedContractor),
                          "onUpdate:modelValue": ($event) => isRef(selectedContractor) ? selectedContractor.value = $event : null,
                          items: contractors,
                          "item-title": "name",
                          "item-value": "id",
                          label: "Contractor"
                        }, {
                          item: withCtx(({ item, props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItem, props, {
                                prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAvatar, {
                                      size: "32",
                                      color: "grey-lighten-2"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-account`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-account")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VAvatar, {
                                        size: "32",
                                        color: "grey-lighten-2"
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
                                      })
                                    ];
                                  }
                                }),
                                append: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VChip, {
                                      size: "x-small",
                                      color: item.raw.online ? "success" : "grey"
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.raw.activeJobs)} jobs `);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VChip, {
                                        size: "x-small",
                                        color: item.raw.online ? "success" : "grey"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItem, props, {
                                  prepend: withCtx(() => [
                                    createVNode(VAvatar, {
                                      size: "32",
                                      color: "grey-lighten-2"
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
                                    })
                                  ]),
                                  append: withCtx(() => [
                                    createVNode(VChip, {
                                      size: "x-small",
                                      color: item.raw.online ? "success" : "grey"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", { class: "mb-4" }, "Select a contractor for this job:"),
                          createVNode(VSelect, {
                            modelValue: unref(selectedContractor),
                            "onUpdate:modelValue": ($event) => isRef(selectedContractor) ? selectedContractor.value = $event : null,
                            items: contractors,
                            "item-title": "name",
                            "item-value": "id",
                            label: "Contractor"
                          }, {
                            item: withCtx(({ item, props }) => [
                              createVNode(VListItem, props, {
                                prepend: withCtx(() => [
                                  createVNode(VAvatar, {
                                    size: "32",
                                    color: "grey-lighten-2"
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
                                  })
                                ]),
                                append: withCtx(() => [
                                  createVNode(VChip, {
                                    size: "x-small",
                                    color: item.raw.online ? "success" : "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          onClick: ($event) => assignDialog.value = false
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
                          onClick: confirmAssign
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Assign`);
                            } else {
                              return [
                                createTextVNode("Assign")
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
                            onClick: ($event) => assignDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: confirmAssign
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Assign")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Assign Contractor")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("p", { class: "mb-4" }, "Select a contractor for this job:"),
                        createVNode(VSelect, {
                          modelValue: unref(selectedContractor),
                          "onUpdate:modelValue": ($event) => isRef(selectedContractor) ? selectedContractor.value = $event : null,
                          items: contractors,
                          "item-title": "name",
                          "item-value": "id",
                          label: "Contractor"
                        }, {
                          item: withCtx(({ item, props }) => [
                            createVNode(VListItem, props, {
                              prepend: withCtx(() => [
                                createVNode(VAvatar, {
                                  size: "32",
                                  color: "grey-lighten-2"
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
                                })
                              ]),
                              append: withCtx(() => [
                                createVNode(VChip, {
                                  size: "x-small",
                                  color: item.raw.online ? "success" : "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: ($event) => assignDialog.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          onClick: confirmAssign
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Assign")
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Assign Contractor")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("p", { class: "mb-4" }, "Select a contractor for this job:"),
                      createVNode(VSelect, {
                        modelValue: unref(selectedContractor),
                        "onUpdate:modelValue": ($event) => isRef(selectedContractor) ? selectedContractor.value = $event : null,
                        items: contractors,
                        "item-title": "name",
                        "item-value": "id",
                        label: "Contractor"
                      }, {
                        item: withCtx(({ item, props }) => [
                          createVNode(VListItem, props, {
                            prepend: withCtx(() => [
                              createVNode(VAvatar, {
                                size: "32",
                                color: "grey-lighten-2"
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
                              })
                            ]),
                            append: withCtx(() => [
                              createVNode(VChip, {
                                size: "x-small",
                                color: item.raw.online ? "success" : "grey"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.raw.activeJobs) + " jobs ", 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => assignDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        onClick: confirmAssign
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Assign")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/requests/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DXYvPdFE.mjs.map
