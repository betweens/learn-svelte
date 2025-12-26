import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ route }) => {
	console.log(route.id); // '/a/[b]/[...c]'
	return {
		sections: [
			{ slug: 'profile', title: 'Profile' },
			{ slug: 'notifications', title: 'Notifications' }
		]
	};
};