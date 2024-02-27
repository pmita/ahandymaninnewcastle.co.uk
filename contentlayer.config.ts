// PACKAGES
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files"
import rehypeSlug from "rehype-slug"

// Define project category markdown structure with types
export const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    name: {
      type: "string",
      description: "Potential project types",
      variant: {
        type: "enum",
        options: ["painting", "tilling", "miscellaneous"],
        default: "miscellaneous"
      }
    },
  },

}))

// Define project markdown structure with types
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "showcase/**/*.mdx",
  bodyType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
    },
    date: {
      type: "date",
      description: "The date the project was published",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "The categories of the project",
    },
    image: {
      type: "image",
      description: "Project thumbnail image",
    },
    imageAlt: {
      type: "string",
      description: "Alt text for the project thumbnail image",
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }, 
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  }
  },
}))

// Build and export content in /content folder
export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
    ]
  }
})