import { T as TASK_STATUSES, b as TASK_TYPES, a as TASK_PRIORITIES, _ as __nuxt_component_0 } from './TaskDialog-BM2VTGK-.mjs';
import { N as useRoute$1, i as VCard, J as VCardText, d as VRow, e as VCol, p as VTextField, R as VSelect, S as VBtnToggle, f as VBtn, h as VIcon, T as VDataTable, n as navigateTo, s as VChip, U as VMenu, x as VList, y as VListItem, z as VListItemTitle } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, inject, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, toDisplayString, openBlock, withModifiers, Fragment, renderList, mergeProps, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-BJhEzm-4.mjs';
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
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const filters = ref({
      search: "",
      status: null,
      type: null,
      priority: null,
      dateFilter: route.query.dateFilter || "all"
    });
    const queryParams = computed(() => {
      const params = {};
      if (filters.value.search) params.q = filters.value.search;
      if (filters.value.status) params.status = filters.value.status;
      if (filters.value.type) params.type = filters.value.type;
      if (filters.value.priority) params.priority = filters.value.priority;
      if (filters.value.dateFilter && filters.value.dateFilter !== "all") {
        params.dateFilter = filters.value.dateFilter;
      }
      return params;
    });
    const { data: tasks, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/tasks", {
      query: queryParams
    }, "$UNyguHxu0T")), __temp = await __temp, __restore(), __temp);
    const taskDialog = ref(false);
    const selectedTask = ref(null);
    const showSnackbar = inject("showSnackbar");
    const headers = [
      { title: "Title", key: "title", sortable: true },
      { title: "Type", key: "type", sortable: true },
      { title: "Status", key: "status", sortable: true },
      { title: "Priority", key: "priority", sortable: true },
      { title: "Scheduled", key: "scheduledFor", sortable: true },
      { title: "Grave", key: "grave", sortable: false },
      { title: "", key: "actions", sortable: false, width: 50 }
    ];
    const statusOptions = TASK_STATUSES.map((s) => ({ title: s.title, value: s.value }));
    const typeOptions = TASK_TYPES.map((t) => ({ title: t.title, value: t.value }));
    const priorityOptions = TASK_PRIORITIES.map((p) => ({ title: p.title, value: p.value }));
    const hasFilters = computed(() => {
      return filters.value.search || filters.value.status || filters.value.type || filters.value.priority || filters.value.dateFilter !== "all";
    });
    let debounceTimer;
    function debouncedRefresh() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => refresh(), 300);
    }
    function getStatusColor(status) {
      return TASK_STATUSES.find((s) => s.value === status)?.color || "grey";
    }
    function getStatusLabel(status) {
      return TASK_STATUSES.find((s) => s.value === status)?.title || status;
    }
    function getPriorityColor(priority) {
      return TASK_PRIORITIES.find((p) => p.value === priority)?.color || "grey";
    }
    function formatDate(date) {
      if (!date) return "-";
      return new Date(date).toLocaleDateString();
    }
    function isOverdue(task) {
      if (!task.scheduledFor || task.status === "done" || task.status === "canceled") return false;
      return new Date(task.scheduledFor) < new Date((/* @__PURE__ */ new Date()).toDateString());
    }
    function openCreateDialog() {
      selectedTask.value = null;
      taskDialog.value = true;
    }
    function openEditDialog(task) {
      selectedTask.value = task;
      taskDialog.value = true;
    }
    async function updateStatus(taskId, status) {
      try {
        await $fetch(`/api/tasks/${taskId}/status`, {
          method: "POST",
          body: { status }
        });
        showSnackbar?.("Status updated");
        refresh();
      } catch (error) {
        console.error("Error updating status:", error);
        showSnackbar?.("Failed to update status", "error");
      }
    }
    function onTaskSaved() {
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TaskDialog = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a51d1556>`);
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
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(filters).search,
                                "onUpdate:modelValue": [($event) => unref(filters).search = $event, debouncedRefresh],
                                "prepend-inner-icon": "mdi-magnify",
                                label: "Search tasks...",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  modelValue: unref(filters).search,
                                  "onUpdate:modelValue": [($event) => unref(filters).search = $event, debouncedRefresh],
                                  "prepend-inner-icon": "mdi-magnify",
                                  label: "Search tasks...",
                                  "hide-details": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(filters).status,
                                "onUpdate:modelValue": [($event) => unref(filters).status = $event, unref(refresh)],
                                items: unref(statusOptions),
                                label: "Status",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(filters).status,
                                  "onUpdate:modelValue": [($event) => unref(filters).status = $event, unref(refresh)],
                                  items: unref(statusOptions),
                                  label: "Status",
                                  "hide-details": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(filters).type,
                                "onUpdate:modelValue": [($event) => unref(filters).type = $event, unref(refresh)],
                                items: unref(typeOptions),
                                label: "Type",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(filters).type,
                                  "onUpdate:modelValue": [($event) => unref(filters).type = $event, unref(refresh)],
                                  items: unref(typeOptions),
                                  label: "Type",
                                  "hide-details": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSelect, {
                                modelValue: unref(filters).priority,
                                "onUpdate:modelValue": [($event) => unref(filters).priority = $event, unref(refresh)],
                                items: unref(priorityOptions),
                                label: "Priority",
                                "hide-details": "",
                                clearable: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSelect, {
                                  modelValue: unref(filters).priority,
                                  "onUpdate:modelValue": [($event) => unref(filters).priority = $event, unref(refresh)],
                                  items: unref(priorityOptions),
                                  label: "Priority",
                                  "hide-details": "",
                                  clearable: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtnToggle, {
                                modelValue: unref(filters).dateFilter,
                                "onUpdate:modelValue": ($event) => unref(filters).dateFilter = $event,
                                mandatory: "",
                                color: "primary",
                                density: "comfortable"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "all",
                                      size: "small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`All`);
                                        } else {
                                          return [
                                            createTextVNode("All")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "upcoming",
                                      size: "small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Upcoming`);
                                        } else {
                                          return [
                                            createTextVNode("Upcoming")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      value: "overdue",
                                      size: "small"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Overdue`);
                                        } else {
                                          return [
                                            createTextVNode("Overdue")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        value: "all",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("All")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "upcoming",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Upcoming")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        value: "overdue",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Overdue")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtnToggle, {
                                  modelValue: unref(filters).dateFilter,
                                  "onUpdate:modelValue": ($event) => unref(filters).dateFilter = $event,
                                  mandatory: "",
                                  color: "primary",
                                  density: "comfortable"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      value: "all",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("All")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "upcoming",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Upcoming")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      value: "overdue",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Overdue")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "1",
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
                                    _push6(ssrRenderComponent(VIcon, { icon: "mdi-plus" }, null, _parent6, _scopeId5));
                                    _push6(`<span class="d-none d-md-inline ml-2" data-v-a51d1556${_scopeId5}>New</span>`);
                                  } else {
                                    return [
                                      createVNode(VIcon, { icon: "mdi-plus" }),
                                      createVNode("span", { class: "d-none d-md-inline ml-2" }, "New")
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
                                    createVNode(VIcon, { icon: "mdi-plus" }),
                                    createVNode("span", { class: "d-none d-md-inline ml-2" }, "New")
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
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(filters).search,
                                "onUpdate:modelValue": [($event) => unref(filters).search = $event, debouncedRefresh],
                                "prepend-inner-icon": "mdi-magnify",
                                label: "Search tasks...",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            sm: "3",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(filters).status,
                                "onUpdate:modelValue": [($event) => unref(filters).status = $event, unref(refresh)],
                                items: unref(statusOptions),
                                label: "Status",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            sm: "3",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(filters).type,
                                "onUpdate:modelValue": [($event) => unref(filters).type = $event, unref(refresh)],
                                items: unref(typeOptions),
                                label: "Type",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            sm: "3",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(filters).priority,
                                "onUpdate:modelValue": [($event) => unref(filters).priority = $event, unref(refresh)],
                                items: unref(priorityOptions),
                                label: "Priority",
                                "hide-details": "",
                                clearable: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "6",
                            sm: "3",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtnToggle, {
                                modelValue: unref(filters).dateFilter,
                                "onUpdate:modelValue": ($event) => unref(filters).dateFilter = $event,
                                mandatory: "",
                                color: "primary",
                                density: "comfortable"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    value: "all",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("All")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "upcoming",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Upcoming")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    value: "overdue",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Overdue")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "1",
                            class: "text-right"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                color: "primary",
                                onClick: openCreateDialog
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, { icon: "mdi-plus" }),
                                  createVNode("span", { class: "d-none d-md-inline ml-2" }, "New")
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
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              modelValue: unref(filters).search,
                              "onUpdate:modelValue": [($event) => unref(filters).search = $event, debouncedRefresh],
                              "prepend-inner-icon": "mdi-magnify",
                              label: "Search tasks...",
                              "hide-details": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(filters).status,
                              "onUpdate:modelValue": [($event) => unref(filters).status = $event, unref(refresh)],
                              items: unref(statusOptions),
                              label: "Status",
                              "hide-details": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(filters).type,
                              "onUpdate:modelValue": [($event) => unref(filters).type = $event, unref(refresh)],
                              items: unref(typeOptions),
                              label: "Type",
                              "hide-details": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VSelect, {
                              modelValue: unref(filters).priority,
                              "onUpdate:modelValue": [($event) => unref(filters).priority = $event, unref(refresh)],
                              items: unref(priorityOptions),
                              label: "Priority",
                              "hide-details": "",
                              clearable: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "6",
                          sm: "3",
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtnToggle, {
                              modelValue: unref(filters).dateFilter,
                              "onUpdate:modelValue": ($event) => unref(filters).dateFilter = $event,
                              mandatory: "",
                              color: "primary",
                              density: "comfortable"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  value: "all",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("All")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "upcoming",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Upcoming")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  value: "overdue",
                                  size: "small"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Overdue")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "1",
                          class: "text-right"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              color: "primary",
                              onClick: openCreateDialog
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, { icon: "mdi-plus" }),
                                createVNode("span", { class: "d-none d-md-inline ml-2" }, "New")
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
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            modelValue: unref(filters).search,
                            "onUpdate:modelValue": [($event) => unref(filters).search = $event, debouncedRefresh],
                            "prepend-inner-icon": "mdi-magnify",
                            label: "Search tasks...",
                            "hide-details": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        sm: "3",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(filters).status,
                            "onUpdate:modelValue": [($event) => unref(filters).status = $event, unref(refresh)],
                            items: unref(statusOptions),
                            label: "Status",
                            "hide-details": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        sm: "3",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(filters).type,
                            "onUpdate:modelValue": [($event) => unref(filters).type = $event, unref(refresh)],
                            items: unref(typeOptions),
                            label: "Type",
                            "hide-details": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        sm: "3",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VSelect, {
                            modelValue: unref(filters).priority,
                            "onUpdate:modelValue": [($event) => unref(filters).priority = $event, unref(refresh)],
                            items: unref(priorityOptions),
                            label: "Priority",
                            "hide-details": "",
                            clearable: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "6",
                        sm: "3",
                        md: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtnToggle, {
                            modelValue: unref(filters).dateFilter,
                            "onUpdate:modelValue": ($event) => unref(filters).dateFilter = $event,
                            mandatory: "",
                            color: "primary",
                            density: "comfortable"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                value: "all",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("All")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "upcoming",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Upcoming")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                value: "overdue",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Overdue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "1",
                        class: "text-right"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            color: "primary",
                            onClick: openCreateDialog
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-plus" }),
                              createVNode("span", { class: "d-none d-md-inline ml-2" }, "New")
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
              items: unref(tasks) || [],
              loading: unref(pending),
              "items-per-page": 15,
              hover: "",
              "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/tasks/${item.id}`)
            }, {
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VMenu, null, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VChip, mergeProps(props, {
                          color: getStatusColor(item.status),
                          size: "small",
                          class: "cursor-pointer",
                          onClick: () => {
                          }
                        }), {
                          default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(getStatusLabel(item.status))} `);
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-menu-down",
                                end: "",
                                size: "small"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(toDisplayString(getStatusLabel(item.status)) + " ", 1),
                                createVNode(VIcon, {
                                  icon: "mdi-menu-down",
                                  end: "",
                                  size: "small"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VChip, mergeProps(props, {
                            color: getStatusColor(item.status),
                            size: "small",
                            class: "cursor-pointer",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }), {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(getStatusLabel(item.status)) + " ", 1),
                              createVNode(VIcon, {
                                icon: "mdi-menu-down",
                                end: "",
                                size: "small"
                              })
                            ]),
                            _: 2
                          }, 1040, ["color", "onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VList, { density: "compact" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(TASK_STATUSES), (status) => {
                                _push5(ssrRenderComponent(VListItem, {
                                  key: status.value,
                                  disabled: status.value === item.status,
                                  onClick: ($event) => updateStatus(item.id, status.value)
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItemTitle, null, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(status.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(status.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(status.title), 1)
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(TASK_STATUSES), (status) => {
                                  return openBlock(), createBlock(VListItem, {
                                    key: status.value,
                                    disabled: status.value === item.status,
                                    onClick: ($event) => updateStatus(item.id, status.value)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(status.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "onClick"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VList, { density: "compact" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(TASK_STATUSES), (status) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: status.value,
                                  disabled: status.value === item.status,
                                  onClick: ($event) => updateStatus(item.id, status.value)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(status.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "onClick"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VMenu, null, {
                      activator: withCtx(({ props }) => [
                        createVNode(VChip, mergeProps(props, {
                          color: getStatusColor(item.status),
                          size: "small",
                          class: "cursor-pointer",
                          onClick: withModifiers(() => {
                          }, ["stop"])
                        }), {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getStatusLabel(item.status)) + " ", 1),
                            createVNode(VIcon, {
                              icon: "mdi-menu-down",
                              end: "",
                              size: "small"
                            })
                          ]),
                          _: 2
                        }, 1040, ["color", "onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode(VList, { density: "compact" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(TASK_STATUSES), (status) => {
                              return openBlock(), createBlock(VListItem, {
                                key: status.value,
                                disabled: status.value === item.status,
                                onClick: ($event) => updateStatus(item.id, status.value)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(status.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["disabled", "onClick"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              "item.priority": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: getPriorityColor(item.priority),
                    size: "small",
                    variant: "outlined"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.priority)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.priority), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: getPriorityColor(item.priority),
                      size: "small",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.priority), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.type": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-capitalize" data-v-a51d1556${_scopeId2}>${ssrInterpolate(item.type.replace("_", " "))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-capitalize" }, toDisplayString(item.type.replace("_", " ")), 1)
                  ];
                }
              }),
              "item.scheduledFor": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass({ "text-error": isOverdue(item) })}" data-v-a51d1556${_scopeId2}>${ssrInterpolate(formatDate(item.scheduledFor))}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: { "text-error": isOverdue(item) }
                    }, toDisplayString(formatDate(item.scheduledFor)), 3)
                  ];
                }
              }),
              "item.grave": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-a51d1556${_scopeId2}><div class="font-weight-medium" data-v-a51d1556${_scopeId2}>${ssrInterpolate(item.deceasedName || "Unknown")}</div><div class="text-caption text-medium-emphasis" data-v-a51d1556${_scopeId2}>${ssrInterpolate(item.cemeteryName)} · ${ssrInterpolate(item.plotRef)}</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.deceasedName || "Unknown"), 1),
                      createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.cemeteryName) + " · " + toDisplayString(item.plotRef), 1)
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
                  _push3(`<div class="text-center py-8" data-v-a51d1556${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "mdi-clipboard-text-outline",
                    size: "64",
                    color: "grey-lighten-1"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-h6 mt-4" data-v-a51d1556${_scopeId2}>No tasks found</div><div class="text-body-2 text-medium-emphasis mb-4" data-v-a51d1556${_scopeId2}>${ssrInterpolate(unref(hasFilters) ? "Try adjusting your filters" : "Create your first task to get started")}</div>`);
                  if (!unref(hasFilters)) {
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
                          _push4(` Create Task `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-plus",
                              start: ""
                            }),
                            createTextVNode(" Create Task ")
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
                        icon: "mdi-clipboard-text-outline",
                        size: "64",
                        color: "grey-lighten-1"
                      }),
                      createVNode("div", { class: "text-h6 mt-4" }, "No tasks found"),
                      createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(hasFilters) ? "Try adjusting your filters" : "Create your first task to get started"), 1),
                      !unref(hasFilters) ? (openBlock(), createBlock(VBtn, {
                        key: 0,
                        color: "primary",
                        onClick: openCreateDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-plus",
                            start: ""
                          }),
                          createTextVNode(" Create Task ")
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
                items: unref(tasks) || [],
                loading: unref(pending),
                "items-per-page": 15,
                hover: "",
                "onClick:row": (_event, { item }) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/tasks/${item.id}`)
              }, {
                "item.status": withCtx(({ item }) => [
                  createVNode(VMenu, null, {
                    activator: withCtx(({ props }) => [
                      createVNode(VChip, mergeProps(props, {
                        color: getStatusColor(item.status),
                        size: "small",
                        class: "cursor-pointer",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getStatusLabel(item.status)) + " ", 1),
                          createVNode(VIcon, {
                            icon: "mdi-menu-down",
                            end: "",
                            size: "small"
                          })
                        ]),
                        _: 2
                      }, 1040, ["color", "onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(VList, { density: "compact" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(TASK_STATUSES), (status) => {
                            return openBlock(), createBlock(VListItem, {
                              key: status.value,
                              disabled: status.value === item.status,
                              onClick: ($event) => updateStatus(item.id, status.value)
                            }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(status.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                "item.priority": withCtx(({ item }) => [
                  createVNode(VChip, {
                    color: getPriorityColor(item.priority),
                    size: "small",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.priority), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "item.type": withCtx(({ item }) => [
                  createVNode("span", { class: "text-capitalize" }, toDisplayString(item.type.replace("_", " ")), 1)
                ]),
                "item.scheduledFor": withCtx(({ item }) => [
                  createVNode("span", {
                    class: { "text-error": isOverdue(item) }
                  }, toDisplayString(formatDate(item.scheduledFor)), 3)
                ]),
                "item.grave": withCtx(({ item }) => [
                  createVNode("div", null, [
                    createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.deceasedName || "Unknown"), 1),
                    createVNode("div", { class: "text-caption text-medium-emphasis" }, toDisplayString(item.cemeteryName) + " · " + toDisplayString(item.plotRef), 1)
                  ])
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
                      icon: "mdi-clipboard-text-outline",
                      size: "64",
                      color: "grey-lighten-1"
                    }),
                    createVNode("div", { class: "text-h6 mt-4" }, "No tasks found"),
                    createVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, toDisplayString(unref(hasFilters) ? "Try adjusting your filters" : "Create your first task to get started"), 1),
                    !unref(hasFilters) ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      color: "primary",
                      onClick: openCreateDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-plus",
                          start: ""
                        }),
                        createTextVNode(" Create Task ")
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
      _push(ssrRenderComponent(_component_TaskDialog, {
        modelValue: unref(taskDialog),
        "onUpdate:modelValue": ($event) => isRef(taskDialog) ? taskDialog.value = $event : null,
        task: unref(selectedTask),
        onSaved: onTaskSaved
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tasks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a51d1556"]]);

export { index as default };
//# sourceMappingURL=index-jmAAf2cV.mjs.map
