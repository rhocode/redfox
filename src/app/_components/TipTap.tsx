"use client";
import { EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];
const content = "<p>Hello World!</p>";

export default function TipTap() {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <div>
      <EditorContent editor={editor} />
      {editor && (
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      )}
    </div>
  );
}
