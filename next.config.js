const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = withMDX(nextConfig)
