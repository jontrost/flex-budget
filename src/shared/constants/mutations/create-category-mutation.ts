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
                spentAmount
            }
        }
    }
`;
