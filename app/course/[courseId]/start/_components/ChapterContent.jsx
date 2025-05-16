import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay:0,
    },
};

function ChapterContent({chapter,content}) {
    
    
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 w-full max-w-6xl mx-auto">
    {/* Chapter Title */}
    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{chapter?.ChapterName}</h2>
    <p className="text-gray-600 mb-4">{chapter?.About}</p>

    {/* Responsive YouTube Video */}
<div className="relative w-full pt-[56.25%] my-6"> {/* 16:9 aspect ratio */}
  <div className="absolute top-0 left-0 w-full h-full">
    <YouTube
      videoId={content?.videoID}
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 0,
        },
      }}
      className="w-full h-full"
    />
  </div>
</div>

    {/* Chapter Sections */}
    {content?.content?.sections?.map((item, index) => (
        <div
            key={index}
            className="mb-5 p-4 sm:p-5 bg-slate-50 rounded-lg whitespace-pre-wrap"
        >
            <h3 className="text-lg font-medium mb-2">{item?.title}</h3>
            <ReactMarkdown>{item?.description}</ReactMarkdown>

            {item?.code_example && (
                <div className="bg-gray-800 text-white mt-4 p-4 rounded-lg overflow-x-auto text-sm">
                    <pre>
                        <code>
                            {item?.code_example?.code || item?.code_example}
                        </code>
                    </pre>
                </div>
            )}
        </div>
    ))}
</div>


  )
}

export default ChapterContent
