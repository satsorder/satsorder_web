/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,

  // 导出静态html时需要配置
  exportPathMap: async function() {
    // 打包时发现前面的key对静态路由生成的文件名无影响
    // 动态路由只需配置一个，key前缀有，最后一级名字无所谓
    return {
      "/": { page: "/" },
    };
  },

  images: {
    // 图片原样输出，不更改质量、大小、格式
    unoptimized: true,
    domains: [
      'raw.githubusercontent.com'
    ],
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },

}

module.exports = nextConfig
