import { gql } from "apollo-angular";

export const CREATE_FUND_MUTATION = gql`
    mutation Mutation($categoryId: ID!, $budgetedAmount: Float!, $name: String!) {
        createFund(categoryId: $categoryId, budgetedAmount: $budgetedAmount, name: $name) {
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
