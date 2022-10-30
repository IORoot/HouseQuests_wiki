import React from 'react';
const recentPosts = require("/.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

export default function HomepageVideo() {

  return (
      <section className="bg-stone-100 p-32">
          <div className="container">

            <div className="flex flex-col gap-4">

            <div className="text-4xl font-bold text-center mb-4">Our Blog</div>

              {recentPosts.items.slice(0, 5).map((item, index) => (
                <a key={index} className="bg-white text-5xl text-emerald-900 rounded-2xl p-8 shadow-sm hover:bg-emerald-700 hover:text-white" href={`${item.permalink}`}>
                  {item.title}
                </a>

              ))}

            </div>
          </div>
        </section>
  );

  

  
}
