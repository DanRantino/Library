export const queryKeys = {
    books: {
        all: ['books'],
        byId: (id: string) => ['books', id],
    },
};
