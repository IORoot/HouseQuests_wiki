import React from 'react';
import useFetch from '../DownloadFeatures/useFetch';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function HomepageLatestVersion() {

  const { data } = useFetch("https://api.github.com/repos/ioroot/advancedpropertysearch/releases/latest");

  return (
    
    <section>

      <div className="container px-4 md:px-8 lg:px-32 py-32 mb-40">
        <div className="flex flex-col gap-8">

          <div className="container py-8">
            <div className="text-xs bg-gray-300 py-0.5 px-2 rounded-full inline-flex mb-4">Latest Version</div>
            <h1 className="text-3xl md:text-4xl lg:text-9xl text-emerald-900">{data.name}</h1>
            <h2 className="text-xl md:text-3xl text-stone-600 dark:text-stone-300">Released on {data.created_at?.split("T")[0]}</h2>
            <ReactMarkdown remarkPlugins={[gfm]} className="text-stone-700 dark:text-stone-400 mb-10">{data.body}</ReactMarkdown>

            <a href="/downloads" className="bg-emerald-900 text-white p-8 block rounded-2xl text-center text-3xl hover:text-white hover:bg-orange-700">Downloads <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg></a>
          </div>

        </div>
      </div>
    </section>
  );

}
