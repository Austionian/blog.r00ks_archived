import fs from 'fs';
import { Feed } from 'feed';
import { getBlogPostsData } from './blog';


export const generateRssFeed = async () => {
  const posts = await getBlogPostsData();
  const siteURL = 'https://blog.r00ks.io';
  const date = new Date();
  const author = {
    name: 'Austin Rooks',
    email: 'austin@r00ks.io',
    link: 'https://twitter.com/austin_rooks',
  };
  const feed = new Feed({
    title: 'Austin Rooks\'s blog',
    description: 'A blog about tech, books and philosophy',
    id: siteURL,
    link: siteURL,
    favicon: `${siteURL}/favicon/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Austin Rooks`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });
  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.data.title,
      id: url,
      link: url,
      description: post.data.description,
      content: post.data.description,
      author: [author],
      contributor: [author],
      date: new Date(post.data.date),
    });
  });
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};