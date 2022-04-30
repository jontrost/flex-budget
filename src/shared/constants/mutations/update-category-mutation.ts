import { gql } from "apollo-angular";

export const UPDATE_CATEGORY_MUTATION = gql`
    mutation Mutation($_id: ID!, $name: String, $funds: [FundInput!]) {
        updateCategory(_id: $_id, name: $name, funds: $funds) {
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
