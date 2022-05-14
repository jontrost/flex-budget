import { gql } from "apollo-angular";

export const CREATE_CATEGORY_MUTATION = gql`
    mutation Mutation($name: String!) {
        createCategory(name: $name) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
            }
        }
    }
`;

export const CREATE_EXPENSE_MUTATION = gql`
    mutation Mutation($categoryId: ID!, $fundId: ID!, $cost: Float!, $date: String!, $name: String!) {
        createExpense(categoryId: $categoryId, fundId: $fundId, cost: $cost, date: $date, name: $name) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
                expenses {
                    _id
                    cost
                    date
                    name
                }
            }
        }
    }
`;

export const CREATE_FUND_MUTATION = gql`
    mutation Mutation($categoryId: ID!, $budgetedAmount: Float!, $name: String!) {
        createFund(categoryId: $categoryId, budgetedAmount: $budgetedAmount, name: $name) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
            }
        }
    }
`;

export const UPDATE_CATEGORY_MUTATION = gql`
    mutation Mutation($_id: ID!, $name: String, $funds: [FundInput!]) {
        updateCategory(_id: $_id, name: $name, funds: $funds) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
            }
        }
    }
`;

export const UPDATE_EXPENSE_MUTATION = gql`
    mutation UpdateExpense($_id: ID!, $categoryId: ID!, $fundId: ID!, $cost: Float!, $date: String!, $name: String!) {
        updateExpense(_id: $_id, categoryId: $categoryId, fundId: $fundId, cost: $cost, date: $date, name: $name) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
                expenses {
                    _id
                    cost
                    date
                    name
                }
            }
        }
    }
`;

export const UPDATE_FUND_MUTATION = gql`
    mutation Mutation(
        $_id: ID!
        $currentCategoryId: ID!
        $newCategoryId: ID!
        $budgetedAmount: Float!
        $name: String!
    ) {
        updateFund(
            _id: $_id
            currentCategoryId: $currentCategoryId
            newCategoryId: $newCategoryId
            budgetedAmount: $budgetedAmount
            name: $name
        ) {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
            }
        }
    }
`;
