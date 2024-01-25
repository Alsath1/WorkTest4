import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface QuryRequest {
	limit: number;
	page: number;
}

export const postSlice = createApi({
	reducerPath: 'allPost',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com'
	}),
	endpoints: builder => ({
		getAllPost: builder.query({
			query: ({ limit = 5, page = 1 }: QuryRequest) => ({
				url: '/posts',
				params: { _limit: limit, _page: page }
			})
		}),
		getPostById: builder.query({
			query: (id: number = 1) => `/posts/${id}`
		})
	})
});

export const {
	useGetAllPostQuery,
	useLazyGetAllPostQuery,
	useGetPostByIdQuery
} = postSlice;
