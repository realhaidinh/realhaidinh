import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({ precompress: true }),
    paths: process.env.NODE_ENV === 'production' ? '/realhaidinh' : ''
  }
};

export default config;
