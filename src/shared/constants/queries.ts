import { gql } from "apollo-angular";

export const GET_CATEGORIES_QUERY = gql`
    query Query {
        categories {
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

export const GET_CATEGORY_BY_ID_QUERY = gql`
    query Query($_id: ID!) {
        category(_id: $_id) {
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

export const GET_CATEGORIES_WITHOUT_FUNDS_QUERY = gql`
    query Query {
        categories {
            _id
            name
        }
    }
`;

export const GET_CATEGORIES_FOR_EXPENSE_EDITOR_DROPDOWN = gql`
    query Query {
        categories {
            name
            _id
            funds {
                _id
                name
            }
        }
    }
`;

export const GET_EXPENSE_BY_ID_QUERY = gql`
    query Query($_id: ID!) {
        expense(_id: $_id) {
            _id
            cost
            date
            name
        }
    }
`;

export const GET_EXPENSES_FOR_FUND_QUERY = gql`
    query Query($categoryId: ID!, $fundId: ID!) {
        expensesForFund(categoryId: $categoryId, fundId: $fundId) {
            _id
            cost
            date
            name
        }
    }
`;

export const GET_FUND_BY_ID_QUERY = gql`
    query Query($_id: ID!, $categoryId: ID!) {
        fund(_id: $_id, categoryId: $categoryId) {
            _id
            budgetedAmount
            name
        }
    }
`;

export const GET_FUNDS_WITHOUT_EXPENSES_QUERY = gql`
    query Query {
        funds {
            _id
            name
        }
    }
`;
