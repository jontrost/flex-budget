import { gql } from "apollo-angular";

export const CREATE_FUND_MUTATION = gql`
    mutation CreateFund($budgetedAmount: Float!, $categoryId: ID!, $name: String!) {
        createFund(budgetedAmount: $budgetedAmount, categoryId: $categoryId, name: $name) {
            _id
            name
            funds {
                _id
                name
                spentAmount
                budgetedAmount
            }
        }
    }
`;
