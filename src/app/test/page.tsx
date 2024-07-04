'use client'

import { useEffect, useState } from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import '@/assets/styles/grid-layout.css'
import '@/assets/styles/github-markdown.css'

const markdownContent = `### Welcome to Dubai AI, Adam!\n\nDubai AI is a revolutionary platform that offers an expansive canvas with AI generative capabilities, setting it apart from conventional platforms. Our technology excels in converting scribbles into images, allowing users to sketch out rough ideas or designs and transform them into polished images.\n\n**Key Features**\n* **Text-to-Image Generation**: Our AI can generate images from text, turning descriptions or concepts into visual representations.\n* **Website Generation**: With a single explanation of the desired content, our AI can generate fully functional websites, eliminating the need for extensive coding or design skills.\n* **Background Removal**: Our tools allow for easy background removal, making it simple to isolate subjects in images or create transparent backgrounds.\n* **Inpainting and Outpainting**: Our AI can fill in missing parts of images or expand existing content seamlessly.\n\n**Our Mission**\nAt Dubai AI, we aim to revolutionize creativity and bring innovative ideas to life. Our platform is designed to empower artists, designers, and creators to unleash their full potential.\n\n**Customer Testimonials**\nDon't just take our word for it! Here's what our customers have to say:\n* \"Manifest AI has revolutionized how I create websites and graphics. It's incredibly intuitive and powerful.\" - John Doe\n* \"I never thought I could create such professional-looking images without any design skills. Manifest AI makes it possible.\" - Jane Smith\n\nWhat would you like to know more about, Adam?`

const ReactGridLayout = WidthProvider(RGL)

const Test = () => {
  const [layout, setLayout] = useState<any>([])

  useEffect(() => {
    setLayout([
      ...new Array(20).fill(0).map((value, index) => {
        const y = Math.ceil(Math.random() * 4) + 1
        return {
          x: (index * 2) % 12,
          y: Math.floor(index / 6) * y,
          w: 2,
          h: y,
          i: index.toString(),
        }
      }),
    ])
  }, [])

  return (
    <>
      <Markdown className="markdown-body" remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </Markdown>
      <ReactGridLayout
        className="layout"
        cols={12}
        rowHeight={20}
        layout={layout}
        useCSSTransforms
        onLayoutChange={(changedLayout) => {
          console.log(changedLayout)
        }}
      >
        {new Array(20).fill(0).map((value, index) => (
          <div key={index}>
            <span className="text select-none">{index}</span>
          </div>
        ))}
      </ReactGridLayout>
    </>
  )
}

export default Test
