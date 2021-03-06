import fs from 'fs'
import html from 'remark-html'
import matter from 'gray-matter'
import path from 'path'
import { rehype } from 'rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { remark } from 'remark'


const blogDirectory = path.join(process.cwd(), '_posts')

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(blogDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  var section = require('@agentofuser/rehype-section').default
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const rehypedContent = await rehype()
    .data('settings', { fragment: true })
    .use(section)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .process(processedContent)

  const contentHtml = rehypedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}

export const getBlogPostsData = async () => {
  // path where the MDX files are
  const files = fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"));
  const postsData = files.map((file) => {
    // grab the metadata
    const name = path.join(blogDirectory, file);
    const fileContents = fs.readFileSync(name, "utf8");
    const matterResult = matter(fileContents)
    // remove the ".mdx" from the filename
    const slug = file.replace(/\.md?$/, "");
    return {
      ...matterResult,
      slug,
    };
  });
  return postsData;
};
