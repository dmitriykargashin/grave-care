import { defineComponent, mergeModels, useModel, ref, computed, withAsyncContext, inject, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch, b as VForm, c as VTextField, V as VRow, a as VCol, d as VTextarea } from './VTextarea-Bkla_C19.mjs';
import { q as VDialog, V as VCard, g as VCardTitle, f as VIcon, d as VCardText, i as VListItem, k as VListItemSubtitle, m as VCardActions, o as VSpacer, p as VBtn } from './server.mjs';
import { V as VAutocomplete } from './VAutocomplete-CgM_2ip2.mjs';
import { V as VSelect } from './filter-CwhwF0wl.mjs';

const TASK_TYPES = [
  { value: "cleanup", title: "Cleanup" },
  { value: "flowers", title: "Flowers" },
  { value: "headstone", title: "Headstone" },
  { value: "photo_report", title: "Photo Report" },
  { value: "other", title: "Other" }
];
const TASK_STATUSES = [
  { value: "todo", title: "To Do", color: "grey" },
  { value: "scheduled", title: "Scheduled", color: "blue" },
  { value: "in_progress", title: "In Progress", color: "orange" },
  { value: "done", title: "Done", color: "success" },
  { value: "canceled", title: "Canceled", color: "error" }
];
const TASK_PRIORITIES = [
  { value: "low", title: "Low", color: "grey" },
  { value: "normal", title: "Normal", color: "blue" },
  { value: "high", title: "High", color: "error" }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TaskDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    task: {},
    prefillGraveId: {}
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
    const isEdit = computed(() => !!props.task?.id);
    const form = ref({
      graveId: "",
      title: "",
      type: "cleanup",
      status: "todo",
      priority: "normal",
      scheduledFor: "",
      notes: ""
    });
    const { data: graves } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/graves", "$LxaLQQEVap")), __temp = await __temp, __restore(), __temp);
    const graveOptions = computed(() => {
      return (graves.value || []).map((g) => ({
        id: g.id,
        label: `${g.deceasedName || "Unknown"} - ${g.plotRef}`,
        cemetery: g.cemeteryName || "",
        plot: g.plotRef
      }));
    });
    const showSnackbar = inject("showSnackbar");
    watch(() => props.task, (val) => {
      if (val) {
        form.value = {
          graveId: val.graveId,
          title: val.title,
          type: val.type,
          status: val.status,
          priority: val.priority,
          scheduledFor: val.scheduledFor?.split("T")[0] || "",
          notes: val.notes || ""
        };
      } else {
        resetForm();
      }
    }, { immediate: true });
    watch(() => dialogModel.value, (val) => {
      if (val && !props.task && props.prefillGraveId) {
        form.value.graveId = props.prefillGraveId;
      }
    });
    function resetForm() {
      form.value = {
        graveId: props.prefillGraveId || "",
        title: "",
        type: "cleanup",
        status: "todo",
        priority: "normal",
        scheduledFor: "",
        notes: ""
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
        const url = isEdit.value ? `/api/tasks/${props.task.id}` : "/api/tasks";
        const method = isEdit.value ? "PUT" : "POST";
        const result = await $fetch(url, {
          method,
          body: {
            ...form.value,
            scheduledFor: form.value.scheduledFor || null
          }
        });
        emit("saved", result);
        showSnackbar?.(`Task ${isEdit.value ? "updated" : "created"} successfully`);
        close();
      } catch (error) {
        console.error("Error saving task:", error);
        showSnackbar?.("Failed to save task", "error");
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
                        _push4(` ${ssrInterpolate(unref(isEdit) ? "Edit Task" : "New Task")}`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            icon: unref(isEdit) ? "mdi-pencil" : "mdi-plus",
                            class: "mr-2"
                          }, null, 8, ["icon"]),
                          createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Task" : "New Task"), 1)
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
                                modelValue: unref(form).graveId,
                                "onUpdate:modelValue": ($event) => unref(form).graveId = $event,
                                items: unref(graveOptions),
                                "item-title": "label",
                                "item-value": "id",
                                label: "Grave",
                                rules: [(v) => !!v || "Grave is required"],
                                required: ""
                              }, {
                                item: withCtx(({ item, props: itemProps }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, itemProps, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(item.raw.cemetery)} · ${ssrInterpolate(item.raw.plot)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, itemProps, {
                                        default: withCtx(() => [
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                label: "Title",
                                rules: [(v) => !!v || "Title is required"],
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(form).type,
                                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                            items: unref(TASK_TYPES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Type",
                                            rules: [(v) => !!v || "Type is required"],
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).type,
                                              "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                              items: unref(TASK_TYPES),
                                              "item-title": "title",
                                              "item-value": "value",
                                              label: "Type",
                                              rules: [(v) => !!v || "Type is required"],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(form).priority,
                                            "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                            items: unref(TASK_PRIORITIES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Priority",
                                            rules: [(v) => !!v || "Priority is required"],
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).priority,
                                              "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                              items: unref(TASK_PRIORITIES),
                                              "item-title": "title",
                                              "item-value": "value",
                                              label: "Priority",
                                              rules: [(v) => !!v || "Priority is required"],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).type,
                                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                            items: unref(TASK_TYPES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Type",
                                            rules: [(v) => !!v || "Type is required"],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).priority,
                                            "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                            items: unref(TASK_PRIORITIES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Priority",
                                            rules: [(v) => !!v || "Priority is required"],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(form).status,
                                            "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                            items: unref(TASK_STATUSES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Status",
                                            rules: [(v) => !!v || "Status is required"],
                                            required: ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).status,
                                              "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                              items: unref(TASK_STATUSES),
                                              "item-title": "title",
                                              "item-value": "value",
                                              label: "Status",
                                              rules: [(v) => !!v || "Status is required"],
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).scheduledFor,
                                            "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                            label: "Scheduled For",
                                            type: "date"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).scheduledFor,
                                              "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                              label: "Scheduled For",
                                              type: "date"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).status,
                                            "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                            items: unref(TASK_STATUSES),
                                            "item-title": "title",
                                            "item-value": "value",
                                            label: "Status",
                                            rules: [(v) => !!v || "Status is required"],
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).scheduledFor,
                                            "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                            label: "Scheduled For",
                                            type: "date"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextarea, {
                                modelValue: unref(form).notes,
                                "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                                label: "Notes",
                                rows: "3"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VAutocomplete, {
                                  modelValue: unref(form).graveId,
                                  "onUpdate:modelValue": ($event) => unref(form).graveId = $event,
                                  items: unref(graveOptions),
                                  "item-title": "label",
                                  "item-value": "id",
                                  label: "Grave",
                                  rules: [(v) => !!v || "Grave is required"],
                                  required: ""
                                }, {
                                  item: withCtx(({ item, props: itemProps }) => [
                                    createVNode(VListItem, itemProps, {
                                      default: withCtx(() => [
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(VTextField, {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  label: "Title",
                                  rules: [(v) => !!v || "Title is required"],
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(form).type,
                                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                          items: unref(TASK_TYPES),
                                          "item-title": "title",
                                          "item-value": "value",
                                          label: "Type",
                                          rules: [(v) => !!v || "Type is required"],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(form).priority,
                                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                          items: unref(TASK_PRIORITIES),
                                          "item-title": "title",
                                          "item-value": "value",
                                          label: "Priority",
                                          rules: [(v) => !!v || "Priority is required"],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(form).status,
                                          "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                          items: unref(TASK_STATUSES),
                                          "item-title": "title",
                                          "item-value": "value",
                                          label: "Status",
                                          rules: [(v) => !!v || "Status is required"],
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).scheduledFor,
                                          "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                          label: "Scheduled For",
                                          type: "date"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
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
                              createVNode(VAutocomplete, {
                                modelValue: unref(form).graveId,
                                "onUpdate:modelValue": ($event) => unref(form).graveId = $event,
                                items: unref(graveOptions),
                                "item-title": "label",
                                "item-value": "id",
                                label: "Grave",
                                rules: [(v) => !!v || "Grave is required"],
                                required: ""
                              }, {
                                item: withCtx(({ item, props: itemProps }) => [
                                  createVNode(VListItem, itemProps, {
                                    default: withCtx(() => [
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(VTextField, {
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                label: "Title",
                                rules: [(v) => !!v || "Title is required"],
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(form).type,
                                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                        items: unref(TASK_TYPES),
                                        "item-title": "title",
                                        "item-value": "value",
                                        label: "Type",
                                        rules: [(v) => !!v || "Type is required"],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(form).priority,
                                        "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                        items: unref(TASK_PRIORITIES),
                                        "item-title": "title",
                                        "item-value": "value",
                                        label: "Priority",
                                        rules: [(v) => !!v || "Priority is required"],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(form).status,
                                        "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                        items: unref(TASK_STATUSES),
                                        "item-title": "title",
                                        "item-value": "value",
                                        label: "Status",
                                        rules: [(v) => !!v || "Status is required"],
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).scheduledFor,
                                        "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                        label: "Scheduled For",
                                        type: "date"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
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
                        createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Task" : "New Task"), 1)
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
                              modelValue: unref(form).graveId,
                              "onUpdate:modelValue": ($event) => unref(form).graveId = $event,
                              items: unref(graveOptions),
                              "item-title": "label",
                              "item-value": "id",
                              label: "Grave",
                              rules: [(v) => !!v || "Grave is required"],
                              required: ""
                            }, {
                              item: withCtx(({ item, props: itemProps }) => [
                                createVNode(VListItem, itemProps, {
                                  default: withCtx(() => [
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(VTextField, {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              label: "Title",
                              rules: [(v) => !!v || "Title is required"],
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(form).type,
                                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                      items: unref(TASK_TYPES),
                                      "item-title": "title",
                                      "item-value": "value",
                                      label: "Type",
                                      rules: [(v) => !!v || "Type is required"],
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(form).priority,
                                      "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                      items: unref(TASK_PRIORITIES),
                                      "item-title": "title",
                                      "item-value": "value",
                                      label: "Priority",
                                      rules: [(v) => !!v || "Priority is required"],
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(form).status,
                                      "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                      items: unref(TASK_STATUSES),
                                      "item-title": "title",
                                      "item-value": "value",
                                      label: "Status",
                                      rules: [(v) => !!v || "Status is required"],
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).scheduledFor,
                                      "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                      label: "Scheduled For",
                                      type: "date"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
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
                      createTextVNode(" " + toDisplayString(unref(isEdit) ? "Edit Task" : "New Task"), 1)
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
                            modelValue: unref(form).graveId,
                            "onUpdate:modelValue": ($event) => unref(form).graveId = $event,
                            items: unref(graveOptions),
                            "item-title": "label",
                            "item-value": "id",
                            label: "Grave",
                            rules: [(v) => !!v || "Grave is required"],
                            required: ""
                          }, {
                            item: withCtx(({ item, props: itemProps }) => [
                              createVNode(VListItem, itemProps, {
                                default: withCtx(() => [
                                  createVNode(VListItemSubtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.raw.cemetery) + " · " + toDisplayString(item.raw.plot), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(VTextField, {
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            label: "Title",
                            rules: [(v) => !!v || "Title is required"],
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                    items: unref(TASK_TYPES),
                                    "item-title": "title",
                                    "item-value": "value",
                                    label: "Type",
                                    rules: [(v) => !!v || "Type is required"],
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(form).priority,
                                    "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                                    items: unref(TASK_PRIORITIES),
                                    "item-title": "title",
                                    "item-value": "value",
                                    label: "Priority",
                                    rules: [(v) => !!v || "Priority is required"],
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(form).status,
                                    "onUpdate:modelValue": ($event) => unref(form).status = $event,
                                    items: unref(TASK_STATUSES),
                                    "item-title": "title",
                                    "item-value": "value",
                                    label: "Status",
                                    rules: [(v) => !!v || "Status is required"],
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).scheduledFor,
                                    "onUpdate:modelValue": ($event) => unref(form).scheduledFor = $event,
                                    label: "Scheduled For",
                                    type: "date"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "TaskDialog" });

export { TASK_PRIORITIES as T, __nuxt_component_0 as _, TASK_STATUSES as a, TASK_TYPES as b };
//# sourceMappingURL=TaskDialog-DF27Px9U.mjs.map
