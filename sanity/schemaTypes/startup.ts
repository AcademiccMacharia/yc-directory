import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error("A category is required"),
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required().error("A valid URL is required")
        }),
        defineField({
            name: 'pitch',
            type: 'markdown'
        }),
    ],
})