import { gql } from "apollo-angular";

export const CREATE_FUND_MUTATION = gql`
    mutation CreateFund($budgetedAmount: Float!, $categoryName: String!, $name: String!) {
        createFund(budgetedAmount: $budgetedAmount, categoryName: $categoryName, name: $name) {
            budgetedAmount
            name
            spentAmount
        }
    }
`;
