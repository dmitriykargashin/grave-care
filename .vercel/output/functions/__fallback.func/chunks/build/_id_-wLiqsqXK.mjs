import { _ as __nuxt_component_0, T as TASK_STATUSES, a as TASK_PRIORITIES } from './TaskDialog-BM2VTGK-.mjs';
import { defineComponent, withAsyncContext, ref, inject, computed, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { N as useRoute$1, f as VBtn, h as VIcon, M as VSkeletonLoader, i as VCard, I as VCardTitle, q as VSpacer, s as VChip, J as VCardText, d as VRow, e as VCol, O as VBtnGroup, x as VList, y as VListItem, z as VListItemTitle, B as VListItemSubtitle, L as VCardActions, P as VProgressCircular, g as VImg, Q as VAlert, H as VDialog, F as VTextarea } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const taskId = route.params.id;
    const { data: task, pending, refresh: refreshTask } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/tasks/${taskId}`, "$2DSv-3zRoY")), __temp = await __temp, __restore(), __temp);
    const { data: photos, pending: photosPending, refresh: refreshPhotos } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/tasks/${taskId}/photos`, "$8ZJymoJw1j")), __temp = await __temp, __restore(), __temp);
    const taskDialog = ref(false);
    const photoDialog = ref(false);
    const captionDialog = ref(false);
    const selectedPhoto = ref(null);
    const fileInput = ref();
    const pendingFile = ref(null);
    const photoCaption = ref("");
    const uploading = ref(false);
    const showSnackbar = inject("showSnackbar");
    const showComingSoon = inject("showComingSoon");
    const quickStatuses = [
      { value: "in_progress", title: "Start", color: "orange" },
      { value: "done", title: "Complete", color: "success" },
      { value: "canceled", title: "Cancel", color: "error" }
    ];
    const isOverdue = computed(() => {
      if (!task.value?.scheduledFor || task.value.status === "done" || task.value.status === "canceled") {
        return false;
      }
      return new Date(task.value.scheduledFor) < new Date((/* @__PURE__ */ new Date()).toDateString());
    });
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
      if (!date) return "Not scheduled";
      return new Date(date).toLocaleDateString();
    }
    function formatDateTime(date) {
      return new Date(date).toLocaleString();
    }
    function openEditDialog() {
      taskDialog.value = true;
    }
    async function updateStatus(status) {
      try {
        await $fetch(`/api/tasks/${taskId}/status`, {
          method: "POST",
          body: { status }
        });
        showSnackbar?.("Status updated");
        refreshTask();
      } catch (error) {
        console.error("Error updating status:", error);
        showSnackbar?.("Failed to update status", "error");
      }
    }
    function triggerFileInput() {
      fileInput.value?.click();
    }
    function uploadPhoto(event) {
      const input = event.target;
      const file = input.files?.[0];
      if (!file) return;
      pendingFile.value = file;
      photoCaption.value = "";
      captionDialog.value = true;
      input.value = "";
    }
    function cancelUpload() {
      pendingFile.value = null;
      photoCaption.value = "";
      captionDialog.value = false;
    }
    async function confirmUpload() {
      if (!pendingFile.value) return;
      uploading.value = true;
      try {
        const formData = new FormData();
        formData.append("file", pendingFile.value);
        const { blobUrl } = await $fetch("/api/photos/upload", {
          method: "POST",
          body: formData
        });
        await $fetch(`/api/tasks/${taskId}/photos`, {
          method: "POST",
          body: {
            blobUrl,
            caption: photoCaption.value || null
          }
        });
        showSnackbar?.("Photo uploaded successfully");
        refreshPhotos();
        cancelUpload();
      } catch (error) {
        console.error("Error uploading photo:", error);
        showSnackbar?.("Failed to upload photo", "error");
      } finally {
        uploading.value = false;
      }
    }
    function openPhotoDialog(photo) {
      selectedPhoto.value = photo;
      photoDialog.value = true;
    }
    async function deletePhoto(photoId) {
      if (!confirm("Delete this photo?")) return;
      try {
        await $fetch(`/api/task-photos/${photoId}`, {
          method: "DELETE"
        });
        showSnackbar?.("Photo deleted");
        refreshPhotos();
      } catch (error) {
        console.error("Error deleting photo:", error);
        showSnackbar?.("Failed to delete photo", "error");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TaskDialog = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a163f8ef>`);
      _push(ssrRenderComponent(VBtn, {
        variant: "text",
        class: "mb-4",
        to: "/tasks"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-arrow-left",
              start: ""
            }, null, _parent2, _scopeId));
            _push2(` Back to Tasks `);
          } else {
            return [
              createVNode(VIcon, {
                icon: "mdi-arrow-left",
                start: ""
              }),
              createTextVNode(" Back to Tasks ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(ssrRenderComponent(VSkeletonLoader, { type: "article" }, null, _parent));
      } else if (unref(task)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VCard, { class: "mb-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center flex-wrap ga-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-h5" data-v-a163f8ef${_scopeId2}>${ssrInterpolate(unref(task).title)}</span>`);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VChip, {
                      color: getStatusColor(unref(task).status),
                      size: "small"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(getStatusLabel(unref(task).status))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(getStatusLabel(unref(task).status)), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VChip, {
                      color: getPriorityColor(unref(task).priority),
                      size: "small",
                      variant: "outlined"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(task).priority)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(task).priority), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: openEditDialog
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { icon: "mdi-pencil" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VIcon, { icon: "mdi-pencil" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", { class: "text-h5" }, toDisplayString(unref(task).title), 1),
                      createVNode(VSpacer),
                      createVNode(VChip, {
                        color: getStatusColor(unref(task).status),
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getStatusLabel(unref(task).status)), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode(VChip, {
                        color: getPriorityColor(unref(task).priority),
                        size: "small",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(task).priority), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode(VBtn, {
                        icon: "",
                        variant: "text",
                        onClick: openEditDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-pencil" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis" data-v-a163f8ef${_scopeId4}>Type</div><div class="text-body-1 text-capitalize" data-v-a163f8ef${_scopeId4}>${ssrInterpolate(unref(task).type.replace("_", " "))}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Type"),
                                  createVNode("div", { class: "text-body-1 text-capitalize" }, toDisplayString(unref(task).type.replace("_", " ")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis" data-v-a163f8ef${_scopeId4}>Scheduled For</div><div class="${ssrRenderClass([{ "text-error": unref(isOverdue) }, "text-body-1"])}" data-v-a163f8ef${_scopeId4}>${ssrInterpolate(formatDate(unref(task).scheduledFor))}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Scheduled For"),
                                  createVNode("div", {
                                    class: ["text-body-1", { "text-error": unref(isOverdue) }]
                                  }, toDisplayString(formatDate(unref(task).scheduledFor)), 3)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis" data-v-a163f8ef${_scopeId4}>Created</div><div class="text-body-1" data-v-a163f8ef${_scopeId4}>${ssrInterpolate(formatDateTime(unref(task).createdAt))}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Created"),
                                  createVNode("div", { class: "text-body-1" }, toDisplayString(formatDateTime(unref(task).createdAt)), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-caption text-medium-emphasis" data-v-a163f8ef${_scopeId4}>Quick Actions</div>`);
                                _push5(ssrRenderComponent(VBtnGroup, {
                                  density: "compact",
                                  class: "mt-1"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(quickStatuses, (status) => {
                                        _push6(ssrRenderComponent(VBtn, {
                                          key: status.value,
                                          color: unref(task).status === status.value ? status.color : void 0,
                                          variant: unref(task).status === status.value ? "flat" : "outlined",
                                          size: "small",
                                          onClick: ($event) => updateStatus(status.value)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
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
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(), createBlock(Fragment, null, renderList(quickStatuses, (status) => {
                                          return createVNode(VBtn, {
                                            key: status.value,
                                            color: unref(task).status === status.value ? status.color : void 0,
                                            variant: unref(task).status === status.value ? "flat" : "outlined",
                                            size: "small",
                                            onClick: ($event) => updateStatus(status.value)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(status.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color", "variant", "onClick"]);
                                        }), 64))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "text-caption text-medium-emphasis" }, "Quick Actions"),
                                  createVNode(VBtnGroup, {
                                    density: "compact",
                                    class: "mt-1"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(quickStatuses, (status) => {
                                        return createVNode(VBtn, {
                                          key: status.value,
                                          color: unref(task).status === status.value ? status.color : void 0,
                                          variant: unref(task).status === status.value ? "flat" : "outlined",
                                          size: "small",
                                          onClick: ($event) => updateStatus(status.value)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(status.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color", "variant", "onClick"]);
                                      }), 64))
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
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Type"),
                                createVNode("div", { class: "text-body-1 text-capitalize" }, toDisplayString(unref(task).type.replace("_", " ")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Scheduled For"),
                                createVNode("div", {
                                  class: ["text-body-1", { "text-error": unref(isOverdue) }]
                                }, toDisplayString(formatDate(unref(task).scheduledFor)), 3)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Created"),
                                createVNode("div", { class: "text-body-1" }, toDisplayString(formatDateTime(unref(task).createdAt)), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-caption text-medium-emphasis" }, "Quick Actions"),
                                createVNode(VBtnGroup, {
                                  density: "compact",
                                  class: "mt-1"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(quickStatuses, (status) => {
                                      return createVNode(VBtn, {
                                        key: status.value,
                                        color: unref(task).status === status.value ? status.color : void 0,
                                        variant: unref(task).status === status.value ? "flat" : "outlined",
                                        size: "small",
                                        onClick: ($event) => updateStatus(status.value)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(status.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color", "variant", "onClick"]);
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Type"),
                              createVNode("div", { class: "text-body-1 text-capitalize" }, toDisplayString(unref(task).type.replace("_", " ")), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Scheduled For"),
                              createVNode("div", {
                                class: ["text-body-1", { "text-error": unref(isOverdue) }]
                              }, toDisplayString(formatDate(unref(task).scheduledFor)), 3)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Created"),
                              createVNode("div", { class: "text-body-1" }, toDisplayString(formatDateTime(unref(task).createdAt)), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption text-medium-emphasis" }, "Quick Actions"),
                              createVNode(VBtnGroup, {
                                density: "compact",
                                class: "mt-1"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(quickStatuses, (status) => {
                                    return createVNode(VBtn, {
                                      key: status.value,
                                      color: unref(task).status === status.value ? status.color : void 0,
                                      variant: unref(task).status === status.value ? "flat" : "outlined",
                                      size: "small",
                                      onClick: ($event) => updateStatus(status.value)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(status.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color", "variant", "onClick"]);
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardTitle, { class: "d-flex align-center flex-wrap ga-2" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-h5" }, toDisplayString(unref(task).title), 1),
                    createVNode(VSpacer),
                    createVNode(VChip, {
                      color: getStatusColor(unref(task).status),
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(getStatusLabel(unref(task).status)), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode(VChip, {
                      color: getPriorityColor(unref(task).priority),
                      size: "small",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(task).priority), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode(VBtn, {
                      icon: "",
                      variant: "text",
                      onClick: openEditDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { icon: "mdi-pencil" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Type"),
                            createVNode("div", { class: "text-body-1 text-capitalize" }, toDisplayString(unref(task).type.replace("_", " ")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Scheduled For"),
                            createVNode("div", {
                              class: ["text-body-1", { "text-error": unref(isOverdue) }]
                            }, toDisplayString(formatDate(unref(task).scheduledFor)), 3)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Created"),
                            createVNode("div", { class: "text-body-1" }, toDisplayString(formatDateTime(unref(task).createdAt)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption text-medium-emphasis" }, "Quick Actions"),
                            createVNode(VBtnGroup, {
                              density: "compact",
                              class: "mt-1"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(quickStatuses, (status) => {
                                  return createVNode(VBtn, {
                                    key: status.value,
                                    color: unref(task).status === status.value ? status.color : void 0,
                                    variant: unref(task).status === status.value ? "flat" : "outlined",
                                    size: "small",
                                    onClick: ($event) => updateStatus(status.value)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(status.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color", "variant", "onClick"]);
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
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VRow, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "h-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-grave-stone",
                                  class: "mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(` Grave Information `);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-grave-stone",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Grave Information ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-map-marker" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-map-marker" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(task).cemeteryName)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Cemetery`);
                                                } else {
                                                  return [
                                                    createTextVNode("Cemetery")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Cemetery")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-grid" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-grid" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(task).plotRef)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Plot Reference`);
                                                } else {
                                                  return [
                                                    createTextVNode("Plot Reference")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Plot Reference")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-account" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(task).deceasedName || "Unknown")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Deceased`);
                                                } else {
                                                  return [
                                                    createTextVNode("Deceased")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Deceased")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-map-marker" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Cemetery")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-grid" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Plot Reference")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-account" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Deceased")
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-map-marker" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Cemetery")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-grid" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Plot Reference")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-account" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Deceased")
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardActions, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  to: `/graves/${unref(task).graveId}`
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` View Grave Details `);
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createTextVNode(" View Grave Details "),
                                        createVNode(VIcon, {
                                          icon: "mdi-arrow-right",
                                          end: ""
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    to: `/graves/${unref(task).graveId}`
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" View Grave Details "),
                                      createVNode(VIcon, {
                                        icon: "mdi-arrow-right",
                                        end: ""
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-grave-stone",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Grave Information ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-map-marker" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Cemetery")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-grid" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Plot Reference")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-account" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Deceased")
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
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "text",
                                  to: `/graves/${unref(task).graveId}`
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View Grave Details "),
                                    createVNode(VIcon, {
                                      icon: "mdi-arrow-right",
                                      end: ""
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["to"])
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
                      createVNode(VCard, { class: "h-100" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-grave-stone",
                                class: "mr-2"
                              }),
                              createTextVNode(" Grave Information ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-map-marker" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Cemetery")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-grid" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Plot Reference")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-account" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Deceased")
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
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "text",
                                to: `/graves/${unref(task).graveId}`
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" View Grave Details "),
                                  createVNode(VIcon, {
                                    icon: "mdi-arrow-right",
                                    end: ""
                                  })
                                ]),
                                _: 1
                              }, 8, ["to"])
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
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCard, { class: "h-100" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCardTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "mdi-account-circle",
                                  class: "mr-2"
                                }, null, _parent5, _scopeId4));
                                _push5(` Customer Information `);
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: "mdi-account-circle",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" Customer Information ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardText, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VList, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VListItem, null, {
                                        prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, { icon: "mdi-account" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VIcon, { icon: "mdi-account" })
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VListItemTitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(unref(task).customerName || "Unknown")}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Name`);
                                                } else {
                                                  return [
                                                    createTextVNode("Name")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VListItemTitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VListItemSubtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Name")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      if (unref(task).customerPhone) {
                                        _push6(ssrRenderComponent(VListItem, null, {
                                          prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VIcon, { icon: "mdi-phone" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VIcon, { icon: "mdi-phone" })
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(unref(task).customerPhone)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`Phone`);
                                                  } else {
                                                    return [
                                                      createTextVNode("Phone")
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Phone")
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(task).customerEmail) {
                                        _push6(ssrRenderComponent(VListItem, null, {
                                          prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VIcon, { icon: "mdi-email" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VIcon, { icon: "mdi-email" })
                                              ];
                                            }
                                          }),
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VListItemTitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(unref(task).customerEmail)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(VListItemSubtitle, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`Email`);
                                                  } else {
                                                    return [
                                                      createTextVNode("Email")
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VListItemSubtitle, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Email")
                                                  ]),
                                                  _: 1
                                                })
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        createVNode(VListItem, null, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-account" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Name")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        unref(task).customerPhone ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-phone" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Phone")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        unref(task).customerEmail ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-email" })
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VListItemSubtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Email")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VList, null, {
                                    default: withCtx(() => [
                                      createVNode(VListItem, null, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-account" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Name")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      unref(task).customerPhone ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-phone" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Phone")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      unref(task).customerEmail ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-email" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VListItemSubtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Email")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCardActions, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  variant: "text",
                                  onClick: ($event) => unref(showComingSoon)?.()
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-email-send",
                                        start: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(` Send Report `);
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-email-send",
                                          start: ""
                                        }),
                                        createTextVNode(" Send Report ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    onClick: ($event) => unref(showComingSoon)?.()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-email-send",
                                        start: ""
                                      }),
                                      createTextVNode(" Send Report ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-account-circle",
                                  class: "mr-2"
                                }),
                                createTextVNode(" Customer Information ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, null, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-account" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Name")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    unref(task).customerPhone ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-phone" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Phone")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    unref(task).customerEmail ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-email" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VListItemSubtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Email")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "text",
                                  onClick: ($event) => unref(showComingSoon)?.()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-email-send",
                                      start: ""
                                    }),
                                    createTextVNode(" Send Report ")
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCard, { class: "h-100" }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, null, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "mdi-account-circle",
                                class: "mr-2"
                              }),
                              createTextVNode(" Customer Information ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, null, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-account" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Name")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  unref(task).customerPhone ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-phone" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Phone")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(task).customerEmail ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-email" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VListItemSubtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Email")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "text",
                                onClick: ($event) => unref(showComingSoon)?.()
                              }, {
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-email-send",
                                    start: ""
                                  }),
                                  createTextVNode(" Send Report ")
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-grave-stone",
                              class: "mr-2"
                            }),
                            createTextVNode(" Grave Information ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-map-marker" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).cemeteryName), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Cemetery")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-grid" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).plotRef), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Plot Reference")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-account" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).deceasedName || "Unknown"), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Deceased")
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
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "text",
                              to: `/graves/${unref(task).graveId}`
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" View Grave Details "),
                                createVNode(VIcon, {
                                  icon: "mdi-arrow-right",
                                  end: ""
                                })
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(VCol, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(VCard, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, null, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "mdi-account-circle",
                              class: "mr-2"
                            }),
                            createTextVNode(" Customer Information ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, null, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-account" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).customerName || "Unknown"), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Name")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                unref(task).customerPhone ? (openBlock(), createBlock(VListItem, { key: 0 }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-phone" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).customerPhone), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Phone")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                unref(task).customerEmail ? (openBlock(), createBlock(VListItem, { key: 1 }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-email" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(task).customerEmail), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VListItemSubtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Email")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "text",
                              onClick: ($event) => unref(showComingSoon)?.()
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "mdi-email-send",
                                  start: ""
                                }),
                                createTextVNode(" Send Report ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
        if (unref(task).notes) {
          _push(ssrRenderComponent(VCard, { class: "mt-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VCardTitle, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "mdi-note-text",
                        class: "mr-2"
                      }, null, _parent3, _scopeId2));
                      _push3(` Notes `);
                    } else {
                      return [
                        createVNode(VIcon, {
                          icon: "mdi-note-text",
                          class: "mr-2"
                        }),
                        createTextVNode(" Notes ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(VCardText, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p class="text-body-1" style="${ssrRenderStyle({ "white-space": "pre-wrap" })}" data-v-a163f8ef${_scopeId2}>${ssrInterpolate(unref(task).notes)}</p>`);
                    } else {
                      return [
                        createVNode("p", {
                          class: "text-body-1",
                          style: { "white-space": "pre-wrap" }
                        }, toDisplayString(unref(task).notes), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-note-text",
                        class: "mr-2"
                      }),
                      createTextVNode(" Notes ")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("p", {
                        class: "text-body-1",
                        style: { "white-space": "pre-wrap" }
                      }, toDisplayString(unref(task).notes), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VCard, { class: "mt-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardTitle, { class: "d-flex align-center" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon: "mdi-camera",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(` Photo Report `);
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: triggerFileInput
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, {
                            icon: "mdi-upload",
                            start: ""
                          }, null, _parent4, _scopeId3));
                          _push4(` Upload Photo `);
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-upload",
                              start: ""
                            }),
                            createTextVNode(" Upload Photo ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<input type="file" accept="image/*" style="${ssrRenderStyle({ "display": "none" })}" data-v-a163f8ef${_scopeId2}>`);
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon: "mdi-camera",
                        class: "mr-2"
                      }),
                      createTextVNode(" Photo Report "),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        color: "primary",
                        size: "small",
                        onClick: triggerFileInput
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-upload",
                            start: ""
                          }),
                          createTextVNode(" Upload Photo ")
                        ]),
                        _: 1
                      }),
                      createVNode("input", {
                        ref_key: "fileInput",
                        ref: fileInput,
                        type: "file",
                        accept: "image/*",
                        style: { "display": "none" },
                        onChange: uploadPhoto
                      }, null, 544)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(photosPending)) {
                      _push3(`<div class="text-center py-4" data-v-a163f8ef${_scopeId2}>`);
                      _push3(ssrRenderComponent(VProgressCircular, { indeterminate: "" }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else if (unref(photos)?.length) {
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(unref(photos), (photo) => {
                              _push4(ssrRenderComponent(VCol, {
                                key: photo.id,
                                cols: "6",
                                sm: "4",
                                md: "3"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VCard, { variant: "outlined" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(VImg, {
                                            src: photo.blobUrl,
                                            "aspect-ratio": "1",
                                            cover: "",
                                            class: "cursor-pointer",
                                            onClick: ($event) => openPhotoDialog(photo)
                                          }, {
                                            placeholder: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VSkeletonLoader, { type: "image" }, null, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VSkeletonLoader, { type: "image" })
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                          if (photo.caption) {
                                            _push6(ssrRenderComponent(VCardText, { class: "pa-2 text-caption" }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(photo.caption)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(photo.caption), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          _push6(ssrRenderComponent(VCardActions, { class: "pa-2" }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(VSpacer, null, null, _parent7, _scopeId6));
                                                _push7(ssrRenderComponent(VBtn, {
                                                  icon: "",
                                                  size: "x-small",
                                                  color: "error",
                                                  variant: "text",
                                                  onClick: ($event) => deletePhoto(photo.id)
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(VIcon, { icon: "mdi-delete" }, null, _parent8, _scopeId7));
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, { icon: "mdi-delete" })
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(VSpacer),
                                                  createVNode(VBtn, {
                                                    icon: "",
                                                    size: "x-small",
                                                    color: "error",
                                                    variant: "text",
                                                    onClick: ($event) => deletePhoto(photo.id)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, { icon: "mdi-delete" })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(VImg, {
                                              src: photo.blobUrl,
                                              "aspect-ratio": "1",
                                              cover: "",
                                              class: "cursor-pointer",
                                              onClick: ($event) => openPhotoDialog(photo)
                                            }, {
                                              placeholder: withCtx(() => [
                                                createVNode(VSkeletonLoader, { type: "image" })
                                              ]),
                                              _: 1
                                            }, 8, ["src", "onClick"]),
                                            photo.caption ? (openBlock(), createBlock(VCardText, {
                                              key: 0,
                                              class: "pa-2 text-caption"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(photo.caption), 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true),
                                            createVNode(VCardActions, { class: "pa-2" }, {
                                              default: withCtx(() => [
                                                createVNode(VSpacer),
                                                createVNode(VBtn, {
                                                  icon: "",
                                                  size: "x-small",
                                                  color: "error",
                                                  variant: "text",
                                                  onClick: ($event) => deletePhoto(photo.id)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, { icon: "mdi-delete" })
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VCard, { variant: "outlined" }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            src: photo.blobUrl,
                                            "aspect-ratio": "1",
                                            cover: "",
                                            class: "cursor-pointer",
                                            onClick: ($event) => openPhotoDialog(photo)
                                          }, {
                                            placeholder: withCtx(() => [
                                              createVNode(VSkeletonLoader, { type: "image" })
                                            ]),
                                            _: 1
                                          }, 8, ["src", "onClick"]),
                                          photo.caption ? (openBlock(), createBlock(VCardText, {
                                            key: 0,
                                            class: "pa-2 text-caption"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(photo.caption), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true),
                                          createVNode(VCardActions, { class: "pa-2" }, {
                                            default: withCtx(() => [
                                              createVNode(VSpacer),
                                              createVNode(VBtn, {
                                                icon: "",
                                                size: "x-small",
                                                color: "error",
                                                variant: "text",
                                                onClick: ($event) => deletePhoto(photo.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, { icon: "mdi-delete" })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(photos), (photo) => {
                                return openBlock(), createBlock(VCol, {
                                  key: photo.id,
                                  cols: "6",
                                  sm: "4",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { variant: "outlined" }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, {
                                          src: photo.blobUrl,
                                          "aspect-ratio": "1",
                                          cover: "",
                                          class: "cursor-pointer",
                                          onClick: ($event) => openPhotoDialog(photo)
                                        }, {
                                          placeholder: withCtx(() => [
                                            createVNode(VSkeletonLoader, { type: "image" })
                                          ]),
                                          _: 1
                                        }, 8, ["src", "onClick"]),
                                        photo.caption ? (openBlock(), createBlock(VCardText, {
                                          key: 0,
                                          class: "pa-2 text-caption"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(photo.caption), 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true),
                                        createVNode(VCardActions, { class: "pa-2" }, {
                                          default: withCtx(() => [
                                            createVNode(VSpacer),
                                            createVNode(VBtn, {
                                              icon: "",
                                              size: "x-small",
                                              color: "error",
                                              variant: "text",
                                              onClick: ($event) => deletePhoto(photo.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, { icon: "mdi-delete" })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<div class="text-center text-medium-emphasis py-8" data-v-a163f8ef${_scopeId2}>`);
                      _push3(ssrRenderComponent(VIcon, {
                        icon: "mdi-camera-off",
                        size: "48",
                        class: "mb-2"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div data-v-a163f8ef${_scopeId2}>No photos uploaded yet</div></div>`);
                    }
                  } else {
                    return [
                      unref(photosPending) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-4"
                      }, [
                        createVNode(VProgressCircular, { indeterminate: "" })
                      ])) : unref(photos)?.length ? (openBlock(), createBlock(VRow, { key: 1 }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(photos), (photo) => {
                            return openBlock(), createBlock(VCol, {
                              key: photo.id,
                              cols: "6",
                              sm: "4",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { variant: "outlined" }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      src: photo.blobUrl,
                                      "aspect-ratio": "1",
                                      cover: "",
                                      class: "cursor-pointer",
                                      onClick: ($event) => openPhotoDialog(photo)
                                    }, {
                                      placeholder: withCtx(() => [
                                        createVNode(VSkeletonLoader, { type: "image" })
                                      ]),
                                      _: 1
                                    }, 8, ["src", "onClick"]),
                                    photo.caption ? (openBlock(), createBlock(VCardText, {
                                      key: 0,
                                      class: "pa-2 text-caption"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(photo.caption), 1)
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    createVNode(VCardActions, { class: "pa-2" }, {
                                      default: withCtx(() => [
                                        createVNode(VSpacer),
                                        createVNode(VBtn, {
                                          icon: "",
                                          size: "x-small",
                                          color: "error",
                                          variant: "text",
                                          onClick: ($event) => deletePhoto(photo.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, { icon: "mdi-delete" })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock("div", {
                        key: 2,
                        class: "text-center text-medium-emphasis py-8"
                      }, [
                        createVNode(VIcon, {
                          icon: "mdi-camera-off",
                          size: "48",
                          class: "mb-2"
                        }),
                        createVNode("div", null, "No photos uploaded yet")
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardTitle, { class: "d-flex align-center" }, {
                  default: withCtx(() => [
                    createVNode(VIcon, {
                      icon: "mdi-camera",
                      class: "mr-2"
                    }),
                    createTextVNode(" Photo Report "),
                    createVNode(VSpacer),
                    createVNode(VBtn, {
                      color: "primary",
                      size: "small",
                      onClick: triggerFileInput
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-upload",
                          start: ""
                        }),
                        createTextVNode(" Upload Photo ")
                      ]),
                      _: 1
                    }),
                    createVNode("input", {
                      ref_key: "fileInput",
                      ref: fileInput,
                      type: "file",
                      accept: "image/*",
                      style: { "display": "none" },
                      onChange: uploadPhoto
                    }, null, 544)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    unref(photosPending) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center py-4"
                    }, [
                      createVNode(VProgressCircular, { indeterminate: "" })
                    ])) : unref(photos)?.length ? (openBlock(), createBlock(VRow, { key: 1 }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(photos), (photo) => {
                          return openBlock(), createBlock(VCol, {
                            key: photo.id,
                            cols: "6",
                            sm: "4",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { variant: "outlined" }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    src: photo.blobUrl,
                                    "aspect-ratio": "1",
                                    cover: "",
                                    class: "cursor-pointer",
                                    onClick: ($event) => openPhotoDialog(photo)
                                  }, {
                                    placeholder: withCtx(() => [
                                      createVNode(VSkeletonLoader, { type: "image" })
                                    ]),
                                    _: 1
                                  }, 8, ["src", "onClick"]),
                                  photo.caption ? (openBlock(), createBlock(VCardText, {
                                    key: 0,
                                    class: "pa-2 text-caption"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(photo.caption), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  createVNode(VCardActions, { class: "pa-2" }, {
                                    default: withCtx(() => [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        icon: "",
                                        size: "x-small",
                                        color: "error",
                                        variant: "text",
                                        onClick: ($event) => deletePhoto(photo.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-delete" })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-center text-medium-emphasis py-8"
                    }, [
                      createVNode(VIcon, {
                        icon: "mdi-camera-off",
                        size: "48",
                        class: "mb-2"
                      }),
                      createVNode("div", null, "No photos uploaded yet")
                    ]))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(VAlert, {
          type: "error",
          variant: "tonal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Task not found `);
            } else {
              return [
                createTextVNode(" Task not found ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_TaskDialog, {
        modelValue: unref(taskDialog),
        "onUpdate:modelValue": ($event) => isRef(taskDialog) ? taskDialog.value = $event : null,
        task: unref(task),
        onSaved: unref(refreshTask)
      }, null, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(photoDialog),
        "onUpdate:modelValue": ($event) => isRef(photoDialog) ? photoDialog.value = $event : null,
        "max-width": "800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selectedPhoto)) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VImg, {
                      src: unref(selectedPhoto).blobUrl,
                      "max-height": "600"
                    }, null, _parent3, _scopeId2));
                    if (unref(selectedPhoto).caption) {
                      _push3(ssrRenderComponent(VCardText, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(selectedPhoto).caption)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(selectedPhoto).caption), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            variant: "text",
                            onClick: ($event) => photoDialog.value = false
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Close`);
                              } else {
                                return [
                                  createTextVNode("Close")
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
                              onClick: ($event) => photoDialog.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Close")
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
                      createVNode(VImg, {
                        src: unref(selectedPhoto).blobUrl,
                        "max-height": "600"
                      }, null, 8, ["src"]),
                      unref(selectedPhoto).caption ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(selectedPhoto).caption), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: ($event) => photoDialog.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Close")
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
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(selectedPhoto) ? (openBlock(), createBlock(VCard, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: unref(selectedPhoto).blobUrl,
                    "max-height": "600"
                  }, null, 8, ["src"]),
                  unref(selectedPhoto).caption ? (openBlock(), createBlock(VCardText, { key: 0 }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedPhoto).caption), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: ($event) => photoDialog.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Close")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(captionDialog),
        "onUpdate:modelValue": ($event) => isRef(captionDialog) ? captionDialog.value = $event : null,
        "max-width": "400",
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Add Caption (Optional)`);
                      } else {
                        return [
                          createTextVNode("Add Caption (Optional)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextarea, {
                          modelValue: unref(photoCaption),
                          "onUpdate:modelValue": ($event) => isRef(photoCaption) ? photoCaption.value = $event : null,
                          label: "Caption",
                          rows: "2",
                          "hide-details": ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTextarea, {
                            modelValue: unref(photoCaption),
                            "onUpdate:modelValue": ($event) => isRef(photoCaption) ? photoCaption.value = $event : null,
                            label: "Caption",
                            rows: "2",
                            "hide-details": ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          onClick: cancelUpload
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
                          loading: unref(uploading),
                          onClick: confirmUpload
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Upload `);
                            } else {
                              return [
                                createTextVNode(" Upload ")
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
                            onClick: cancelUpload
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancel")
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            loading: unref(uploading),
                            onClick: confirmUpload
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Upload ")
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
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Add Caption (Optional)")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTextarea, {
                          modelValue: unref(photoCaption),
                          "onUpdate:modelValue": ($event) => isRef(photoCaption) ? photoCaption.value = $event : null,
                          label: "Caption",
                          rows: "2",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          variant: "text",
                          onClick: cancelUpload
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancel")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          loading: unref(uploading),
                          onClick: confirmUpload
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Upload ")
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
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Add Caption (Optional)")
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTextarea, {
                        modelValue: unref(photoCaption),
                        "onUpdate:modelValue": ($event) => isRef(photoCaption) ? photoCaption.value = $event : null,
                        label: "Caption",
                        rows: "2",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        variant: "text",
                        onClick: cancelUpload
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancel")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        loading: unref(uploading),
                        onClick: confirmUpload
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Upload ")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tasks/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a163f8ef"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-wLiqsqXK.mjs.map
