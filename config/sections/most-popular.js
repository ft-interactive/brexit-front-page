export default ({ flags }) => ({
	id: 'most-popular',
	title: 'Most Read',
	style: 'most-popular',
	dynamicContent: flags.mostPopularByIndustry ? {
		description: 'Most read by professionals in',
		selected: 'initial',
		sources: [
			{
				uuid: 'initial',
				title: 'All sectors'
			},
			{
				uuid: '69e2a0db-7971-3741-8865-e31e02400278',
				title: 'Accountancy & tax advisory'
			},
			{
				uuid: '0c9eb6d9-b4e0-3486-8fe2-46e60afb8597',
				title: 'Aerospace & defence'
			},
			{
				uuid: '077bea1d-01ca-328e-aa0b-d7dc92796030',
				title: 'Automobiles'
			},
			{
				uuid: '040b623c-dde7-3a56-a061-f1d49fee3836',
				title: 'Basic resources/mining'
			},
			{
				uuid: 'b25cafff-0d4e-3364-9ef7-d47c4b2f73fe',
				title: 'Chemicals'
			},
			{
				uuid: '86d3d1e0-3a39-331d-83e5-e8bfd1bf58a0',
				title: 'Comms/Publishing/Media'
			},
			{
				uuid: '1bc1d5b2-e161-3c1b-ac0e-d2a3fb5fa04c',
				title: 'Consulting/business services'
			},
			{
				uuid: '6b99b667-4fdb-30c8-87e0-9a4e61eb53a2',
				title: 'Education/Academia'
			},
			{
				uuid: 'c4b9c679-fc51-337a-9019-42794eb56eda',
				title: 'Energy/utilities'
			},
			{
				uuid: 'f840d786-f738-39c4-99b3-f5d25c000954',
				title: 'Engineering/construction'
			},
			{
				uuid: 'e9bd1187-830d-372f-8dec-c942e29efca2',
				title: 'Financial services'
			},
			{
				uuid: 'bd09ff46-7f95-3c80-8c66-dd87eaffe082',
				title: 'Food & beverages'
			},
			{
				uuid: '70c2ecd5-3f3c-3d3e-b582-e2ed32f763b5',
				title: 'Govt/public service/NGO'
			},
			{
				uuid: 'e906af5b-04ba-3a40-a327-20f27a518168',
				title: 'Health & pharmaceuticals'
			},
			{
				uuid: 'ba3daeed-8da7-36ea-bd97-e871900588aa',
				title: 'IT/computing'
			},
			{
				uuid: '42cf64ec-ce25-3fd6-9e3e-7db2055be547',
				title: 'Industrial goods & services'
			},
			{
				uuid: '904a96fa-4f8f-39c7-9ab6-e358dcdd04d8',
				title: 'Insurance'
			},
			{
				uuid: '4726c6b7-c97f-3f6c-8237-c9e373b6c072',
				title: 'Personal & household goods'
			},
			{
				uuid: '183bb17e-ba42-32e0-a0b2-e31f491ff930',
				title: 'Property'
			},
			{
				uuid: '29bbf1e5-04c8-3886-9298-a366496fa866',
				title: 'Retail'
			},
			{
				uuid: '046d89d7-95f1-30bc-a283-1a5ecd0c0007',
				title: 'Telecommunications'
			},
			{
				uuid: 'a53abf79-982e-3fa3-b46b-3dd5db56bb8d',
				title: 'Transport/logistics'
			},
			{
				uuid: 'bed86acc-ab31-3952-b9a7-c990ea4acc65',
				title: 'Travel & leisure'
			}
		]
	} : null,
	layoutId: 'most-popular',
	trackScrollEvent: true,
	size: {
		default: 12
	},
	cols: {
		meta: {
			default: 12
		},
		sources: {
			default: 12
		},
		content: {
			default: 12
		}
	}
})
