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
                spentAmount
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
                spentAmount
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

export const GET_EXPENSES_QUERY = gql`
    query Query {
        expenses {
            _id
            cost
            date
            name
        }
    }
`;
