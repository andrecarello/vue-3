export const IS_DEV = document.location.href.includes('localhost');
export const IS_STAGE = document.location.href.includes('stage');
export const PROTOCOL = document.location.protocol;

export const PROJECT_NAME = 'EPSOM';
export const PROJECT_SLUG_NAME = 'epsom';
export const CLIENT_NAME = 'EPSOM';
export const TEST_EMAIL = 'andrelino.cl@gmail.com';
export const TEST_PASSWORD = 'abc1234';
export const GTAG_ID = '';

export default {
	title: (page = '') => {
		if (page) document.title = `${page} | ${PROJECT_NAME}`;
		else document.title = PROJECT_NAME;
	}
};
