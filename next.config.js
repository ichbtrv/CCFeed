const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
      'ik.imagekit.io/nebuchimage',
    ],
    loader: 'imgix',
    path: 'https://ik.imagekit.io/nebuchimage',
  },
  videos: {
    domains: ['res.cloudinary.com'],
  },
})
