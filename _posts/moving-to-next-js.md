---
title: "Moving from Gatsby to Next.js"
date: "2022-01-16"
description: "The trite story of going from Gatsby to Next."
---

I intially created this blog with [Gatsby](https://www.gatsbyjs.com/). And I enjoyed the process. Having heard about Gatsby for what seems like years, though never seriously looking into it, I thought it was a meaningful framework to give a try, and what better opportunity than taking my idle Hexo blog to the SSR world.

As I was building it though, looking at other blogs for inspiration, a consistent post I saw by others was the *Why I Migrated from Gatsby to Next* (most of them dated from summer 2020) and here I am crafting my own such post in the third season of this pandemic.

## What I Liked About Gatsby
#### Thoughts on Organization
If there's one thing from a blog's perspective that Gatsby just does better than Next, it's the ability to organize your images and blog posts in the same folder:
```
$ R00T
│   # All blog posts' content
└── content
    └──blog
        └──post-title
            ├──index.md
            └──blog-assets.
```

Coupling assets with their associated posts just makes more organizational sense long term. There's probably a way to get there with Next.js, but I don't think the effort is worth it at this point, compared with the simplicity to get there with Gatsby.

#### Plugin Ecosystem
The plug and play options in the ```gatsby-config.js``` is great for getting a site polished quickly and pretty effortlessly. This is definitely a double edge sword as I'll get to it more later, as I think Gatsby itself has an opportunity to better manager their plugin ecosystem. There seems to be no barrier to entry to being listed on [Gatsby's site itself as a plugin](https://www.gatsbyjs.com/plugins).  

## What I Didn't Like
#### Plugin Ecosystem
Adding more dependencies to a blog makes for a headache down the road. Plus feeling as though I was making this site with plugins wasn't really what I was after. I wanted something were I wrote the code, not download the dependency. With this site being a hobby project, that's where the fun is.

#### Graphql Opinionated
Garphql was fine. Being able to navigate your sites content through the web graphql interface was nice. But it seems a little heavy handed for a blog. It also goes back to the above, I'd rather write the code myself that collates and compiles the data. You can find mine [here](https://github.com/Austionian/blog.r00ks/blob/main/lib/blog.ts). 

## Moving to Next.js
The migration process itself was pretty simple. Next has it's [own post about the process](https://nextjs.org/docs/migrating/from-gatsby). Removing the plugins and figuring out a way to do it myself instead was very satisfying.

I had some trouble getting different [remark](https://github.com/remarkjs/remark) plugins to work. I would add them to my ```getPostData``` function ([here](https://github.com/Austionian/blog.r00ks/blob/main/lib/blog.ts)), compile with no errors, and see that no changes to the output where made. It was frustrating, but again, this just pushed me to figure it out on my own. 

Since I moved to Next, I figured I should give [Vercel](https://vercel.com/) a try. I'm happy I did. It is amazing what it gives you for free. I was using Github Pages orginally and that's pretty awesome, too. But Vercel is also free and seems to have marginally better response times. The preview for pull requests and the free analytics on a single project is really cool, at a price you can't beat.

The fact that deploying is just pushing to ```main``` makes me slightly worried about how easy the whole process is.

## Jamming forward
My eyes have been opened to the JAM stack and it's incredible what can be accomplished. Both Next and Gatsby give React developers (which I am not) great frameworks to easily create highly performative webapps. Coupled with the fact that it's easy to host these for free, it's undeniably the direction of the Internet.

I certianly plan to build future frontends with Next.