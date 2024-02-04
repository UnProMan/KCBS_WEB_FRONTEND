<script setup lang="ts">
import MenuItem from './MenuItem.vue';

interface Props {
    editor: any;
};

/**
 * Props
 */
const props = defineProps<Props>();

const items = [
    {
        icon: 'format_bold',
        title: 'Bold',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold'),
    },
    {
        icon: 'format_italic',
        title: 'Italic',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic'),
    },
    {
        icon: 'format_strikethrough',
        title: 'Strikethrough',
        action: () => props.editor.chain().focus().toggleStrike().run(),
        isActive: () => props.editor.isActive('strike'),
    },
    {
        icon: 'code',
        title: 'Code',
        action: () => props.editor.chain().focus().toggleCode().run(),
        isActive: () => props.editor.isActive('code'),
    },
    {
        icon: 'ink_highlighter',
        title: 'highlighter',
        action: () => props.editor.chain().focus().toggleHighlight().run(),
        isActive: () => props.editor.isActive('highlight'),
    },
    {
        type: 'divider',
    },
    {
        icon: 'format_h1',
        title: 'Heading 1',
        action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 1 }),
    },
    {
        icon: 'format_h2',
        title: 'Heading 2',
        action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 2 }),
    },
    {
        icon: 'list',
        title: 'Bullet List',
        action: () => props.editor.chain().focus().toggleBulletList().run(),
        isActive: () => props.editor.isActive('bulletList'),
    },
    {
        icon: 'format_list_numbered',
        title: 'Ordered List',
        action: () => props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => props.editor.isActive('orderedList'),
    },
    {
        icon: 'checklist',
        title: 'Task List',
        action: () => props.editor.chain().focus().toggleTaskList().run(),
        isActive: () => props.editor.isActive('taskList'),
    },
    {
        icon: 'code_blocks',
        title: 'Code Block',
        action: () => props.editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => props.editor.isActive('codeBlock'),
    },
    {
        type: 'divider',
    },
    {
        icon: 'format_indent_increase',
        title: 'Blockquote',
        action: () => props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => props.editor.isActive('blockquote'),
    },
    {
        icon: 'horizontal_rule',
        title: 'Horizontal Rule',
        action: () => props.editor.chain().focus().setHorizontalRule().run(),
    },
    {
        type: 'divider',
    },
    {
        icon: 'arrow_back',
        title: 'Undo',
        action: () => props.editor.chain().focus().undo().run(),
    },
    {
        icon: 'arrow_forward',
        title: 'Redo',
        action: () => props.editor.chain().focus().redo().run(),
    },
];

</script>

<template>
    
  <div>
    <template v-for="(item, index) in items">
      <div class="divider" v-if="item.type === 'divider'" :key="`divider${index}`" />
      <MenuItem v-else :key="index" v-bind="item" />
    </template>
  </div>

</template>

<style lang="scss" scoped>

.divider {
    background-color: rgba(var(--white));

    width: 1px;
    height: 1.25rem;

    margin-left: 0.5rem;
    margin-right: 0.75rem;
}

</style>