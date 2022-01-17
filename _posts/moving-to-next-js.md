---
title: "Moving to Next.js"
date: "2022-01-16"
description: "The trite story of going from Gatsby to Next."
---

I intially created this blog with Gatsby. And I enjoyed the process. Having heard about Gatsby for what seems like years, though never seriously looking into it, I thought it was a meaningful framework to give a try, and what better opportunity than taking my idle Hexo blog to the SSR world.

As I was making though, looking at other blogs for inspiration, a consistent post I saw by others was the *Why I Migrated from Gatsby to Next* (most of them dated from summer 2020) and here I am crafting my own in the third season of this pandemic.

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

Coupling assets with their associated posts just makes more organizational sense long term. There's probably a way to get there with Next.js, but I don't think the effort is worth it at this point.

#### Image optimization
Optimizing images before request makes more sense when it's speed we're after. It just does. The whole out-of-the-box experience with Gatsby images was really nice. The auomatic blur on first render, to the transition to the final image was very professional and great.

#### Plugin Ecosystem
The plug and play options in the ```gatsby-config.js``` is great for getting a site to polished quickly and pretty effortlessly. This is definitely a double edge sword as I'll get to it more later, as I think Gatsby itself has an opportunity to better manager their plugin ecosystem. There seems to be no barrier to entry to being listed on [Gatsby's site itself as a plugin](https://www.gatsbyjs.com/plugins).  

## What I Didn't Like
#### Plugin Ecosystem
Adding more dependencies to a blog makes for a headache down the road. As in any algorithm, it's good to think about the cost, storage or performance, when it comes to dependencies. For Gatsby, that's and dependencies. The upfront ease will probably lead to long term difficutly.

#### Graphql Opinionated
Garphql was fine. Being able to navigate your sites content through the web graphql interface was nice. But it seems a little heavy handed for a blog.

## Moving to Next.js
Vercel is pretty amazing what it gives you for free. I was using Github Pages orginally and that's pretty awesome, too. But Vercel is also free and seems to have marginally better response times. The free analytics on a single project is dope, too, and there's no Github Pages comparable.

## Going forward
My eyes have been opened to the JAM stack and it's incredible what can be accomplished. To have a front end built in Gatsby or Next, hosted for free, the performance you get is undeniably the direction of the Internet.