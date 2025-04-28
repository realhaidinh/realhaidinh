import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({ precompress: true }),
    paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
  }
};

export default config;
