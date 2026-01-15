import { computed, createElementVNode, mergeProps, Fragment, normalizeClass } from 'vue';
import { A as genericComponent, z as propsFactory, _ as useBackgroundColor, F as useDimension, G as useElevation, C as provideTheme, L as useLocale, $ as wrapInArray, a0 as useRender, P as makeThemeProps, U as makeElevationProps, W as makeDimensionProps } from './server.mjs';

const rootTypes = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function genBone(type) {
  let children = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return createElementVNode("div", {
    "class": normalizeClass(["v-skeleton-loader__bone", `v-skeleton-loader__${type}`])
  }, [children]);
}
function genBones(bone) {
  const [type, length] = bone.split("@");
  return Array.from({
    length
  }).map(() => genStructure(type));
}
function genStructure(type) {
  let children = [];
  if (!type) return children;
  const bone = rootTypes[type];
  if (type === bone) ;
  else if (type.includes(",")) return mapBones(type);
  else if (type.includes("@")) return genBones(type);
  else if (bone.includes(",")) children = mapBones(bone);
  else if (bone.includes("@")) children = genBones(bone);
  else if (bone) children.push(genStructure(bone));
  return [genBone(type, children)];
}
function mapBones(bones) {
  return bones.replace(/\s/g, "").split(",").map(genStructure);
}
const makeVSkeletonLoaderProps = propsFactory({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeThemeProps()
}, "VSkeletonLoader");
const VSkeletonLoader = genericComponent()({
  name: "VSkeletonLoader",
  inheritAttrs: false,
  props: makeVSkeletonLoaderProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      t
    } = useLocale();
    const items = computed(() => genStructure(wrapInArray(props.type).join(",")));
    useRender(() => {
      const isLoading = !slots.default || props.loading;
      const loadingProps = props.boilerplate || !isLoading ? {} : {
        ariaLive: "polite",
        ariaLabel: t(props.loadingText),
        role: "alert"
      };
      return isLoading ? createElementVNode("div", mergeProps({
        "class": ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": props.boilerplate
        }, themeClasses.value, backgroundColorClasses.value, elevationClasses.value],
        "style": [backgroundColorStyles.value, dimensionStyles.value]
      }, loadingProps, attrs), [items.value]) : createElementVNode(Fragment, null, [slots.default?.()]);
    });
    return {};
  }
});

export { VSkeletonLoader as V };
//# sourceMappingURL=VSkeletonLoader-WPTEZVnh.mjs.map
