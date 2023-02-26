import { render } from '@testing-library/react-native';

import React from "react";
import RepositoryListContainer from "../../components/RepositoryListContainer";

describe("RepositoryList", () => {
    describe("RepositoryListContainer", () => {
        it("renders repository information correctly", () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

            debug();

            const names = getAllByTestId("repoName");
            expect(names).toHaveLength(2);
            expect(names[0]).toHaveTextContent("jaredpalmer/formik");
            expect(names[1]).toHaveTextContent("async-library/react-async");

            const descriptions = getAllByTestId("repoDescription");
            expect(descriptions).toHaveLength(2);
            expect(descriptions[0]).toHaveTextContent("Build forms in React, without the tears");
            expect(descriptions[1]).toHaveTextContent("Flexible promise-based React data loader");

            const languages = getAllByTestId("repoLanguage");
            expect(languages).toHaveLength(2);
            expect(languages[0]).toHaveTextContent("TypeScript");
            expect(languages[1]).toHaveTextContent("JavaScript");

            const stats = getAllByTestId("repoStats");
            expect(stats).toHaveLength(8);
            expect(stats[0]).toHaveTextContent("21.9kStars");
            expect(stats[1]).toHaveTextContent("1.6kForks");
            expect(stats[2]).toHaveTextContent("3Reviews");
            expect(stats[3]).toHaveTextContent("88Rating");

            expect(stats[4]).toHaveTextContent("1.8kStars");
            expect(stats[5]).toHaveTextContent("69Forks");
            expect(stats[6]).toHaveTextContent("3Reviews");
            expect(stats[7]).toHaveTextContent("72Rating");
        });
    });
});